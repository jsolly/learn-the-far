import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { type Browser, type BrowserContext, chromium } from "playwright";
import { runSmoke, type SmokeScenario, verifyResponse } from "./production-smoke.mjs";

const productionUrl = "https://smoke-fixture.invalid/";
const env = {
	PRODUCTION_SMOKE_REQUEST_ID: "hermetic_fixture",
	PRODUCTION_SMOKE_RELEASE_SHA: "a".repeat(40),
} satisfies NodeJS.ProcessEnv;

// Real SDK objects are retained. Every request is fulfilled after the runner's
// cache-disabling route is installed, so this fixture cannot reach a live host.
async function launchFixture(): Promise<Browser> {
	const browser = await chromium.launch({ headless: true });
	const createContext = browser.newContext.bind(browser);
	browser.newContext = async (...args: Parameters<Browser["newContext"]>) => {
		const context = await createContext(...args);
		const registerRoute = context.route.bind(context);
		context.route = async (...routeArgs: Parameters<BrowserContext["route"]>) => {
			const registration = await registerRoute(...routeArgs);
			await registerRoute("**/*", async (route) => {
				if (new URL(route.request().url()).origin !== new URL(productionUrl).origin) {
					await route.abort("blockedbyclient");
					return;
				}
				await route.fulfill({
					status: 200,
					contentType: "text/html",
					body: "<!doctype html><title>Fixture</title><h1>Fixture smoke</h1>",
				});
			});
			return registration;
		};
		return context;
	};
	return browser;
}

function responseAt(url: string): Response {
	const response = new Response("fixture", { status: 200 });
	Object.defineProperty(response, "url", { value: url });
	return response;
}

const fetcher: typeof fetch = (input) => {
	const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
	assert.equal(url, productionUrl);
	return Promise.resolve(responseAt(url));
};

const scenario: SmokeScenario = {
	productionUrl,
	smoke: async ({ page, verifyHttp }) => {
		await page.getByRole("heading", { name: "Fixture smoke" }).waitFor();
		await verifyHttp(productionUrl);
	},
};

test("production runner receipts and failure boundaries are hermetic", async (t) => {
	const previous = process.cwd();
	const directory = await mkdtemp(join(tmpdir(), "far-smoke-fixture-"));
	process.chdir(directory);
	try {
		await t.test("records successful real-browser behavior and its receipt", async () => {
			const receipt = await runSmoke({ scenario, env, fetcher, launch: launchFixture });
			assert.equal(receipt.success, true);
			assert.deepEqual(receipt.errors, []);
			assert.equal(receipt.requestId, env.PRODUCTION_SMOKE_REQUEST_ID);
			assert.equal(receipt.releaseSha, env.PRODUCTION_SMOKE_RELEASE_SHA);
			assert.ok(receipt.observations.some((item) => item.source === "browser"));
			for (const observation of receipt.observations) {
				verifyResponse(observation, productionUrl);
			}
			const written: unknown = JSON.parse(
				await readFile(join(directory, "production-smoke-artifacts/receipt.json"), "utf8"),
			);
			assert.deepEqual(written, receipt);
		});
		await t.test("rejects noncanonical readiness before launching a browser", async () => {
			let launched = false;
			const receipt = await runSmoke({
				scenario,
				env,
				fetcher: () => Promise.resolve(responseAt("https://other.invalid/")),
				launch: () => {
					launched = true;
					return launchFixture();
				},
				readinessMs: 0,
			});
			assert.equal(launched, false);
			assert.equal(receipt.success, false);
			assert.ok(receipt.errors.some((error) => error.includes("Noncanonical response")));
		});
		await t.test("keeps browser diagnostics in a failed receipt", async () => {
			const receipt = await runSmoke({
				scenario: {
					...scenario,
					smoke: async ({ page }) => {
						await page.evaluate(() => console.error("intentional fixture diagnostic"));
					},
				} satisfies SmokeScenario,
				env,
				fetcher,
				launch: launchFixture,
			});
			assert.equal(receipt.success, false);
			assert.ok(receipt.errors.includes("console: intentional fixture diagnostic"));
		});
		await t.test("rejects a worker scope outside the canonical origin", async () => {
			const receipt = await runSmoke({
				scenario: {
					...scenario,
					serviceWorker: { page: "/worker/", scope: "https://other.invalid/", script: "/sw.js" },
				} satisfies SmokeScenario,
				env,
				fetcher,
				launch: launchFixture,
			});
			assert.equal(receipt.success, false);
			assert.ok(
				receipt.errors.some((error) => error.includes("Noncanonical service worker scope")),
			);
		});
		await t.test("rejects invalid module shapes without network access", async () => {
			for (const invalid of [null, {}, { productionUrl, smoke: "not callable" }]) {
				const receipt = await runSmoke({
					scenario: invalid,
					env,
					readinessMs: 0,
					fetcher: () => Promise.reject(new Error("Unexpected network attempt")),
				});
				assert.equal(receipt.success, false);
				assert.ok(receipt.errors.some((error) => error.includes("Scenario must export")));
			}
		});
	} finally {
		process.chdir(previous);
		await rm(directory, { recursive: true, force: true });
	}
});
