// Generated JavaScript consumer: regenerate the sibling .mjs from this authored .mts.
// Starter from jsolly/dotagents skills/engineering/new-solly-repo/templates/github/production-smoke.mjs; the consuming repository owns its copy.
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Browser, BrowserContext, Page } from "playwright";

export interface SmokeObservation {
	url: string;
	status: number;
	source?: "browser-head" | "browser" | "service-worker";
	method?: "HEAD";
	scope?: string;
	script?: string;
	state?: "activated";
	controlled?: boolean;
}

export interface SmokeReceipt {
	requestId: string | undefined;
	releaseSha: string | undefined;
	observations: SmokeObservation[];
	errors: string[];
	success: boolean;
}

export interface SmokeContext {
	page: Page;
	context: BrowserContext;
	artifacts: string;
	verifyHttp: (url: string) => Promise<Response>;
}

export interface SmokeScenario {
	productionUrl: string;
	smoke: (context: SmokeContext) => unknown;
	// Optional module data stays unknown until the canonical URL checks below.
	serviceWorker?: unknown;
}

export interface RunSmokeOptions {
	// CLI modules are untrusted; validation belongs inside the receipt-producing try.
	scenario: unknown;
	env?: NodeJS.ProcessEnv;
	fetcher?: typeof fetch;
	launch?: () => Promise<Browser>;
	readinessMs?: number;
	pollMs?: number;
	behaviorMs?: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function isSmokeScenario(value: unknown): value is SmokeScenario {
	return (
		typeof value === "object" &&
		value !== null &&
		"productionUrl" in value &&
		typeof value.productionUrl === "string" &&
		"smoke" in value &&
		typeof value.smoke === "function"
	);
}

const REQUEST_ID = /^[a-zA-Z0-9_-]{1,100}$/u;

export function verifyResponse(
	{ url, status }: Pick<SmokeObservation, "url" | "status">,
	canonical: string,
): void {
	const final = new URL(url);
	const target = new URL(canonical);
	if (final.protocol !== "https:" || final.origin !== target.origin) {
		throw new Error(`Noncanonical response: ${url}`);
	}
	if (status < 200 || status >= 300) {
		throw new Error(`HTTP ${status}: ${url}`);
	}
}
export async function runSmoke({
	scenario: scenarioInput,
	env = process.env,
	fetcher = fetch,
	launch,
	readinessMs = 120000,
	pollMs = 10000,
	behaviorMs = 90000,
}: RunSmokeOptions): Promise<SmokeReceipt> {
	const artifacts = resolve("production-smoke-artifacts");
	await mkdir(artifacts, { recursive: true });
	const receipt: SmokeReceipt = {
		requestId: env["PRODUCTION_SMOKE_REQUEST_ID"],
		releaseSha: env["PRODUCTION_SMOKE_RELEASE_SHA"],
		observations: [],
		errors: [],
		success: false,
	};
	let browser: Browser | undefined;
	let context: BrowserContext | undefined;
	let page: Page | undefined;
	let workerContext: BrowserContext | undefined;
	let workerPage: Page | undefined;
	let timer: ReturnType<typeof setTimeout> | undefined;
	const recordError = (error: unknown): void => {
		receipt.errors.push(String(error));
	};
	const diagnostics: Promise<void>[] = [];
	const drainDiagnostics = async (): Promise<void> => {
		for (let checked = 0; checked < diagnostics.length; ) {
			const pending = diagnostics.slice(checked);
			checked = diagnostics.length;
			await Promise.all(pending);
		}
	};
	const verifyHttp = async (url: string): Promise<Response> => {
		const response = await fetcher(url, {
			redirect: "follow",
			cache: "no-store",
			signal: AbortSignal.timeout(15000),
		});
		const observation = { url: response.url, status: response.status };
		receipt.observations.push(observation);
		verifyResponse(observation, url);
		return response;
	};
	const watchPage = (target: Page, productionUrl: string): void => {
		const origin = new URL(productionUrl).origin;
		target.setDefaultTimeout(15000);
		target.on("console", (message) => {
			if (message.type() === "error") {
				recordError(`console: ${message.text()}`);
			}
		});
		target.on("pageerror", (error) => recordError(`pageerror: ${error}`));
		target.on("requestfailed", (request) => {
			if (new URL(request.url()).origin !== origin) {
				return;
			}
			diagnostics.push(
				(async () => {
					const failure = request.failure()?.errorText;
					if (request.method() === "HEAD" && failure === "net::ERR_ABORTED") {
						// Chromium can abort a HEAD body after receiving its successful headers.
						const response = await request.response();
						if (response && response.status() >= 200 && response.status() < 300) {
							receipt.observations.push({
								url: response.url(),
								status: response.status(),
								source: "browser-head",
								method: "HEAD",
							});
							return;
						}
					}
					recordError(`requestfailed: ${request.url()} ${failure}`);
				})().catch(recordError),
			);
		});
		target.on("response", (response) => {
			if (new URL(response.url()).origin !== origin) {
				return;
			}
			if (response.status() >= 400) {
				recordError(`HTTP ${response.status()}: ${response.url()}`);
			}
			if (
				response.request().resourceType() === "document" &&
				response.status() >= 200 &&
				response.status() < 300
			) {
				receipt.observations.push({
					url: response.url(),
					status: response.status(),
					source: "browser",
				});
			}
		});
	};
	try {
		if (!REQUEST_ID.test(receipt.requestId ?? "")) {
			throw new Error("Invalid smoke request ID");
		}
		if (!/^[0-9a-f]{40}$/u.test(receipt.releaseSha ?? "")) {
			throw new Error("Invalid smoke release SHA");
		}
		if (!isSmokeScenario(scenarioInput)) {
			throw new Error("Scenario must export a production URL and smoke function");
		}
		const scenario = scenarioInput;
		if (new URL(scenario.productionUrl).protocol !== "https:") {
			throw new Error("Production URL must use HTTPS");
		}
		const deadline = Date.now() + readinessMs;
		for (;;) {
			try {
				await verifyHttp(scenario.productionUrl);
				break;
			} catch (error) {
				if (Date.now() >= deadline) {
					throw new Error(`Readiness deadline: ${error}`, {
						cause: error,
					});
				}
				await new Promise<void>((resolveWait) =>
					setTimeout(resolveWait, Math.min(pollMs, deadline - Date.now())),
				);
			}
		}
		const activeBrowser = await (
			launch ?? (async () => (await import("playwright")).chromium.launch())
		)();
		browser = activeBrowser;
		const activeContext = await activeBrowser.newContext({ serviceWorkers: "block" });
		context = activeContext;
		// Routing disables the HTTP cache so every document comes from the network.
		await activeContext.route("**/*", (route) => route.continue());
		await activeContext.tracing.start({
			screenshots: true,
			snapshots: true,
			sources: true,
		});
		const activePage = await activeContext.newPage();
		page = activePage;
		watchPage(activePage, scenario.productionUrl);
		await Promise.race([
			(async () => {
				const response = await activePage.goto(scenario.productionUrl, {
					waitUntil: "domcontentloaded",
				});
				if (!response) {
					throw new Error("Navigation returned no document");
				}
				verifyResponse({ url: response.url(), status: response.status() }, scenario.productionUrl);
				await scenario.smoke({ page: activePage, context: activeContext, artifacts, verifyHttp });
				if (scenario.serviceWorker !== undefined) {
					const settings = scenario.serviceWorker;
					const canonical = new URL(scenario.productionUrl);
					const workerUrl = (key: "page" | "scope" | "script"): string => {
						const path = isRecord(settings) && key in settings ? settings[key] : undefined;
						if (typeof path !== "string") {
							throw new Error(`Service worker ${key} must be a URL path`);
						}
						const value = new URL(path, canonical);
						if (value.origin !== canonical.origin || value.search || value.hash) {
							throw new Error(`Noncanonical service worker ${key}`);
						}
						return value.href;
					};
					const urls = {
						page: workerUrl("page"),
						scope: workerUrl("scope"),
						script: workerUrl("script"),
					};
					if (!urls.scope.endsWith("/") || !urls.page.startsWith(urls.scope)) {
						throw new Error("Service worker page must be inside its directory scope");
					}
					// A fresh context cannot inherit a previous release's worker or cache.
					// Main behavioral checks remain in the worker-blocked context above.
					const activeWorkerContext = await activeBrowser.newContext({ serviceWorkers: "allow" });
					workerContext = activeWorkerContext;
					await activeWorkerContext.tracing.start({
						screenshots: true,
						snapshots: true,
						sources: true,
					});
					const activeWorkerPage = await activeWorkerContext.newPage();
					workerPage = activeWorkerPage;
					watchPage(activeWorkerPage, scenario.productionUrl);
					const workerResponse = await activeWorkerPage.goto(urls.page, {
						waitUntil: "domcontentloaded",
					});
					if (!workerResponse) {
						throw new Error("Worker navigation returned no document");
					}
					verifyResponse({ url: workerResponse.url(), status: workerResponse.status() }, urls.page);
					await activeWorkerPage.waitForFunction(
						async ({ scope, script }) => {
							const registration = await navigator.serviceWorker.getRegistration();
							return (
								registration?.scope === scope &&
								registration.active?.state === "activated" &&
								registration.active.scriptURL === script
							);
						},
						urls,
						{ timeout: behaviorMs },
					);
					await activeWorkerPage.waitForLoadState("networkidle");
					await activeWorkerPage.reload({ waitUntil: "domcontentloaded" });
					await activeWorkerPage.waitForFunction(
						({ script }) => navigator.serviceWorker.controller?.scriptURL === script,
						urls,
						{ timeout: behaviorMs },
					);
					if (activeWorkerPage.url() !== urls.page) {
						throw new Error("Worker page redirected");
					}
					receipt.observations.push({
						url: urls.page,
						status: workerResponse.status(),
						source: "service-worker",
						scope: urls.scope,
						script: urls.script,
						state: "activated",
						controlled: true,
					});
				}
				await drainDiagnostics();
				if (receipt.errors.length) {
					throw new Error("Browser diagnostics failed");
				}
			})(),
			new Promise<never>((_, reject) => {
				timer = setTimeout(() => reject(new Error("Behavior deadline exceeded")), behaviorMs);
			}),
		]);
		receipt.success = true;
	} catch (error) {
		recordError(error);
	} finally {
		clearTimeout(timer);
		if (page) {
			await page
				.screenshot({ path: resolve(artifacts, "page.png"), fullPage: true })
				.catch(recordError);
		}
		if (workerPage) {
			await workerPage
				.screenshot({
					path: resolve(artifacts, "service-worker.png"),
					fullPage: true,
				})
				.catch(recordError);
		}
		if (workerContext) {
			await workerContext.tracing
				.stop({ path: resolve(artifacts, "service-worker-trace.zip") })
				.catch(recordError);
		}
		if (context) {
			await context.tracing.stop({ path: resolve(artifacts, "trace.zip") }).catch(recordError);
		}
		if (browser) {
			await browser.close().catch(recordError);
		}
		await drainDiagnostics();
		if (receipt.errors.length) {
			receipt.success = false;
		}
		await writeFile(resolve(artifacts, "receipt.json"), `${JSON.stringify(receipt, null, 2)}\n`);
	}
	return receipt;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	try {
		const scenario: unknown = await import(
			pathToFileURL(resolve("scripts/production-smoke-scenario.mjs")).href
		);
		const receipt = await runSmoke({ scenario });
		process.stdout.write(`${JSON.stringify(receipt, null, 2)}\n`);
		if (receipt.errors.length > 0) {
			process.exitCode = 1;
		}
	} catch (error) {
		process.stderr.write(`${error}\n`);
		process.exitCode = 1;
	}
}
