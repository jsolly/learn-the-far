import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { type Browser, chromium, type Route } from "playwright";

interface BrowserReceipt {
	success: true;
	builds: Record<"a" | "b" | "c", string>;
	routes: string[];
	expectedHttp503Diagnostics: number;
	metadataRequests: number;
	unexpectedErrors: string[];
	screenshots: string[];
}

type ScreenshotCase = [
	name: string,
	viewport: { width: number; height: number },
	colorScheme: "light" | "dark",
];

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readReleaseId(directory: string): Promise<string> {
	const manifest: unknown = JSON.parse(await readFile(join(directory, "release.json"), "utf8"));
	assert.ok(isRecord(manifest));
	const id = manifest["id"];
	assert.ok(typeof id === "string");
	assert.match(id, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u);
	return id;
}

function assertStoredProgress(serialized: string | null, key: "questions" | "read"): void {
	assert.ok(serialized !== null);
	const progress: unknown = JSON.parse(serialized);
	assert.ok(isRecord(progress));
	const entries = progress[key];
	assert.ok(isRecord(entries));
	assert.ok(Object.keys(entries).length > 0);
}

function deferred<T>(): { promise: Promise<T>; resolve: (value: T) => void } {
	let resolvePromise: ((value: T) => void) | undefined;
	const promise = new Promise<T>((done) => {
		resolvePromise = done;
	});
	assert.ok(resolvePromise);
	return { promise, resolve: resolvePromise };
}

// Three real builds, served atomically like Vercel deployments. No production writes.
execFileSync("npm", ["run", "build"], {
	stdio: "pipe",
	env: { ...process.env, VERCEL_DEPLOYMENT_ID: "dpl_local_browser_a" } satisfies NodeJS.ProcessEnv,
});
const fixture = await mkdtemp(join(tmpdir(), "far-release-"));
const a = join(fixture, "a");
await cp("dist", a, { recursive: true });
execFileSync("npm", ["run", "build"], {
	stdio: "pipe",
	env: { ...process.env, VERCEL_DEPLOYMENT_ID: "dpl_local_browser_b" } satisfies NodeJS.ProcessEnv,
});
const b = join(fixture, "b");
await cp("dist", b, { recursive: true });
execFileSync("npm", ["run", "build"], {
	stdio: "pipe",
	env: { ...process.env, VERCEL_DEPLOYMENT_ID: "dpl_local_browser_c" } satisfies NodeJS.ProcessEnv,
});
const c = resolve("dist");
const third = await readReleaseId(c);
const first = await readReleaseId(a);
const second = await readReleaseId(b);
assert.notEqual(first, second);
assert.notEqual(third, first);
assert.notEqual(third, second);
let root = a;
let metadataRoot: string | null = null;
let checks = 0;
const server = createServer(async (req, res) => {
	assert.ok(typeof req.url === "string", "local HTTP requests provide a URL");
	const pathname = new URL(req.url, "http://localhost").pathname;
	if (pathname === "/release-redirect.json") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ id: third }));
		return;
	}
	if (pathname === "/release.json") {
		checks++;
	}
	const path = join(
		pathname === "/release.json" && metadataRoot ? metadataRoot : root,
		pathname.endsWith("/") ? `${pathname}index.html` : pathname,
	);
	try {
		const body = await readFile(path);
		const type = path.endsWith(".json")
			? "application/json"
			: path.endsWith(".js")
				? "text/javascript"
				: path.endsWith(".css")
					? "text/css"
					: path.endsWith(".html")
						? "text/html"
						: "application/octet-stream";
		res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
		res.end(body);
	} catch {
		res.writeHead(404);
		res.end();
	}
});
await new Promise<void>((done) => server.listen(0, "127.0.0.1", done));
const address = server.address();
if (address === null || typeof address === "string") {
	server.close();
	throw new Error("Expected a local TCP server address");
}
const url = `http://127.0.0.1:${address.port}`;
let browser: Browser | undefined;
const errors: string[] = [];
try {
	browser = await chromium.launch({ headless: true });
	const context = await browser.newContext();
	context.on("page", (target) => {
		target.on("pageerror", (error) => errors.push(String(error)));
		target.on("console", (message) => {
			if (["error", "warning"].includes(message.type())) {
				errors.push(message.text());
			}
		});
	});
	const page = await context.newPage();
	await page.clock.install();
	const initialCheck = page.waitForResponse("**/release.json");
	await page.goto(url);
	await page.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await (await initialCheck).finished();
	await page.clock.runFor(100);
	await page.waitForFunction(() => document.querySelector("h1"));
	assert.equal(await page.locator('meta[name="app-release"]').getAttribute("content"), first);
	assert.equal(
		await page.getByRole("complementary", { name: "Website update" }).count(),
		0,
		"first load has no update",
	);
	await page.getByRole("link", { name: "Start learning", exact: true }).first().click();
	await page
		.getByRole("list", { name: "Chapters on this shelf" })
		.getByRole("link")
		.first()
		.click();
	await page.getByRole("navigation", { name: "On this page" }).waitFor();
	await page.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await page.waitForFunction(() => {
		const progress: unknown = JSON.parse(
			localStorage.getItem("learn-the-far:reading-progress:v1") || "{}",
		);
		if (typeof progress !== "object" || progress === null || !("read" in progress)) {
			return false;
		}
		const read = progress.read;
		return (
			typeof read === "object" &&
			read !== null &&
			!Array.isArray(read) &&
			Object.keys(read).length > 0
		);
	});
	await page.goto(url);
	await page.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await page.getByRole("button", { name: "Quiz me", exact: true }).first().click();
	await page.getByText("Pick your answer", { exact: true }).waitFor();
	const question = await page.locator("h1").textContent();
	await page.locator("h1 + div button").first().click();
	await page.getByRole("button", { name: "Next Question", exact: true }).waitFor();
	const saved = await page.evaluate(() => ({
		quiz: localStorage.getItem("learn-the-far:quiz-progress:v2"),
		reading: localStorage.getItem("learn-the-far:reading-progress:v1"),
	}));
	assertStoredProgress(saved.quiz, "questions");
	assertStoredProgress(saved.reading, "read");
	root = b;
	const retained = await page.evaluate(async () => {
		const asset = "/_astro/confetti.module.CSklD5ZL.js";
		const module: unknown = await import(asset);
		if (typeof module !== "object" || module === null || !("default" in module)) {
			throw new Error("Retained asset has no default export");
		}
		return typeof module.default;
	});
	assert.equal(retained, "function", "old lazy asset remains importable after B publication");
	await page.clock.fastForward(60_001);
	await page.evaluate(() => window.dispatchEvent(new Event("focus")));
	await page.getByRole("complementary", { name: "Website update" }).waitFor();
	assert.equal(
		await page.getByRole("button", { name: "Update and reload" }).isDisabled(),
		true,
		"active quiz cannot reload",
	);
	assert.equal(
		await page.locator("h1").textContent(),
		question,
		"release detection retains active question",
	);
	// Another tab on A sees B, while the quiz tab remains usable and never reloads.
	root = a;
	const other = await context.newPage();
	let otherChecks = 0;
	other.on("request", (req) => {
		if (req.url().endsWith("/release.json")) {
			otherChecks++;
		}
	});
	await other.clock.install();
	const initialOtherCheck = other.waitForResponse("**/release.json");
	await other.goto(url);
	await other.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await (await initialOtherCheck).finished();
	await other.clock.runFor(100);
	root = b;
	// A continuously focused tab detects B via its timer without focus events.
	await other.clock.fastForward(330_001);
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	const screenshotCases: readonly ScreenshotCase[] = [
		["desktop-light", { width: 1280, height: 900 }, "light"],
		["desktop-dark", { width: 1280, height: 900 }, "dark"],
		["mobile-light", { width: 390, height: 844 }, "light"],
		["mobile-dark", { width: 390, height: 844 }, "dark"],
	];
	for (const [name, viewport, colorScheme] of screenshotCases) {
		await other.setViewportSize(viewport);
		await other.emulateMedia({ colorScheme });
		await other.screenshot({ animations: "disabled", path: `/tmp/far-update-${name}.png` });
		assert.ok(
			await other.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
			"no horizontal overflow",
		);
	}
	// Dismissal is scoped to B and survives in-app view changes without remounting.
	await other.getByRole("button", { name: "Later", exact: true }).click();
	await other.getByRole("button", { name: "Update available", exact: true }).waitFor();
	assert.equal(await other.getByRole("button", { name: "Update and reload" }).count(), 0);
	await other.getByRole("button", { name: "Quiz me", exact: true }).first().click();
	await other.getByText("Pick your answer", { exact: true }).waitFor();
	await other.getByRole("button", { name: "Exit session" }).click();
	assert.equal(
		await other.getByRole("button", { name: "Update and reload" }).count(),
		0,
		"shell navigation retains dismissal",
	);
	await other.clock.setSystemTime((await other.evaluate(() => Date.now())) + 60_001);
	await other.evaluate(() => window.dispatchEvent(new Event("focus")));
	await other.clock.runFor(100);
	assert.equal(
		await other.getByRole("button", { name: "Update and reload" }).count(),
		0,
		"same release stays dismissed",
	);
	await other.getByRole("button", { name: "Update available", exact: true }).focus();
	await other.keyboard.press("Enter");
	await other.getByRole("button", { name: "Later", exact: true }).waitFor();
	await other.waitForFunction(() => document.activeElement?.textContent?.trim() === "Later");
	await context.setOffline(true);
	await other.getByText("Reconnect before updating.").waitFor();
	assert.equal(
		await other.getByRole("button", { name: "Update and reload" }).isDisabled(),
		true,
		"offline application is blocked",
	);
	await context.setOffline(false);
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	// A rollback to this document removes the target and returns keyboard focus safely.
	root = a;
	await other.getByRole("button", { name: "Update and reload" }).click();
	await other
		.getByRole("complementary", { name: "Website update" })
		.getByText("This version is current again.", { exact: true })
		.waitFor();
	assert.ok(
		(await other.getByRole("status").textContent())?.includes("This version is current again."),
	);
	await other.waitForFunction(() => document.activeElement?.textContent?.trim() === "Later");
	await other.getByRole("button", { name: "Later", exact: true }).click();
	await other.waitForFunction(() => document.querySelector("main h1") === document.activeElement);
	root = b;
	await other.clock.setSystemTime((await other.evaluate(() => Date.now())) + 60_001);
	await other.evaluate(() => window.dispatchEvent(new Event("focus")));
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	// A failed explicit application must retain B and all user work, without navigation.
	await other.route("**/release.json", (route) =>
		route.fulfill({ status: 503, contentType: "application/json", body: "{}" }),
	);
	const beforeFailedApplyUrl = other.url();
	await other.getByRole("button", { name: "Update and reload" }).click();
	await other
		.getByRole("complementary", { name: "Website update" })
		.getByText("Could not check the update. Reconnect and try again.", { exact: true })
		.waitFor();
	assert.equal(other.url(), beforeFailedApplyUrl);
	assert.equal(await other.locator('meta[name="app-release"]').getAttribute("content"), first);
	assert.deepEqual(
		await other.evaluate(() => ({
			quiz: localStorage.getItem("learn-the-far:quiz-progress:v2"),
			reading: localStorage.getItem("learn-the-far:reading-progress:v1"),
		})),
		saved,
	);
	await other.unroute("**/release.json");
	// Revalidate on click: C replaces B, requiring a new explicit choice.
	root = c;
	const previousAnnouncement = await other.getByRole("status").locator("span").elementHandle();
	assert.ok(previousAnnouncement, "expanded update has a live-region announcement");
	await other.getByRole("button", { name: "Update and reload" }).click();
	await other
		.getByRole("complementary", { name: "Website update" })
		.getByText("Another update is available. Choose Update and reload again when ready.", {
			exact: true,
		})
		.waitFor();
	assert.equal(
		await other.locator('meta[name="app-release"]').getAttribute("content"),
		first,
		"changed target does not reload",
	);
	assert.equal(
		await previousAnnouncement.evaluate((el) => el.isConnected),
		false,
		"distinct C updates live-region DOM while B was expanded",
	);
	root = b;
	await other.getByRole("button", { name: "Update and reload" }).click();
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	await other.clock.runFor(100);
	assert.equal(
		await other.locator('meta[name="app-release"]').getAttribute("content"),
		first,
		"rollback target also requires a new choice",
	);
	// Stale HTML after an explicit reload remains usable and never loops.
	root = a;
	metadataRoot = b;
	let navigations = 0;
	other.on("framenavigated", (frame) => {
		if (frame === other.mainFrame()) {
			navigations++;
		}
	});
	let rechecks = 0;
	const { promise: reached, resolve: ready } = deferred<Route>();
	await other.route("**/release.json", (route) => {
		rechecks++;
		ready(route);
	});
	await other.getByRole("button", { name: "Update and reload" }).evaluate((el) => {
		if (!(el instanceof HTMLButtonElement)) {
			throw new Error("Update control must be a button");
		}
		el.click();
		el.click();
	});
	const held = await reached;
	assert.equal(rechecks, 1, "duplicate clicks coalesce into one application check");
	const loaded = other.waitForEvent("load");
	await held.fulfill({ contentType: "application/json", body: JSON.stringify({ id: second }) });
	await loaded;
	await other.unroute("**/release.json");
	await other.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await other
		.getByRole("complementary", { name: "Website update" })
		.getByText("The page is still on the previous version. Try updating again when ready.", {
			exact: true,
		})
		.waitFor();
	assert.equal(navigations, 1, "stale reload happens once");
	await other.clock.fastForward(330_001);
	assert.equal(navigations, 1, "polling cannot start a reload loop");
	root = b;
	metadataRoot = null;
	await other.getByRole("button", { name: "Update and reload" }).focus();
	await Promise.all([other.waitForEvent("load"), other.keyboard.press("Enter")]);
	await other.locator("astro-island[ssr]").waitFor({ state: "detached" });
	assert.equal(
		await other.getByRole("complementary", { name: "Website update" }).count(),
		0,
		"explicit reload loads B and clears notice",
	);
	assert.equal(await other.locator('meta[name="app-release"]').getAttribute("content"), second);
	assert.deepEqual(
		await other.evaluate(() => ({
			quiz: localStorage.getItem("learn-the-far:quiz-progress:v2"),
			reading: localStorage.getItem("learn-the-far:reading-progress:v1"),
		})),
		saved,
		"saved quiz and reading progress survive reload",
	);
	await other.getByRole("link", { name: "Start learning", exact: true }).first().click();
	await other.getByRole("button", { name: "Hide read (1)", exact: true }).waitFor();
	await other.goto(url);
	await other.locator("astro-island[ssr]").waitFor({ state: "detached" });
	assert.equal(
		await page.locator("h1").textContent(),
		question,
		"other tab reload leaves quiz intact",
	);
	await page.bringToFront();
	await page.getByRole("button", { name: "Next Question", exact: true }).click();
	await page.getByText("Pick your answer", { exact: true }).waitFor();
	await page.getByRole("button", { name: "Exit session" }).click();
	assert.equal(
		await page.getByRole("button", { name: "Update and reload" }).isEnabled(),
		true,
		"exiting quiz makes reload available",
	);
	await other.bringToFront();
	const cooldownChecks = otherChecks;
	await other.evaluate(() => window.dispatchEvent(new Event("focus")));
	await other.clock.runFor(100);
	assert.equal(otherChecks, cooldownChecks, "focus during cooldown makes no request");
	async function checkOther(): Promise<void> {
		const response = other.waitForResponse("**/release.json");
		await other.clock.setSystemTime((await other.evaluate(() => Date.now())) + 1_800_001);
		await other.evaluate(() => window.dispatchEvent(new Event("focus")));
		await (await response).finished();
		await other.clock.runFor(100);
	}
	// Malformed and failed checks never invent updates. Offline checks make no requests.
	for (const body of ["{}", '{"id":"garbage"}', "null", "not json"]) {
		await other.route("**/release.json", (route) =>
			route.fulfill({ contentType: "application/json", body }),
		);
		await checkOther();
		assert.equal(await other.getByRole("complementary", { name: "Website update" }).count(), 0);
		await other.unroute("**/release.json");
	}
	await other.route("**/release.json", (route) =>
		route.fulfill({ status: 200, contentType: "text/html", body: "fallback" }),
	);
	await checkOther();
	assert.equal(await other.getByRole("complementary", { name: "Website update" }).count(), 0);
	await other.unroute("**/release.json");
	await other.route("**/release-redirect.json", (route) =>
		route.fulfill({ contentType: "application/json", body: JSON.stringify({ id: third }) }),
	);
	await other.route("**/release.json", (route) =>
		route.fulfill({ status: 302, headers: { Location: "/release-redirect.json" } }),
	);
	await checkOther();
	assert.equal(
		await other.getByRole("complementary", { name: "Website update" }).count(),
		0,
		"redirected JSON cannot advertise a release",
	);
	await other.unroute("**/release.json");
	await other.unroute("**/release-redirect.json");
	// A held fetch reaches its real bounded timeout without inventing availability.
	const { promise: heldTimeout, resolve: timeoutReady } = deferred<Route>();
	await other.route("**/release.json", (route) => timeoutReady(route));
	const timedOut = other.waitForEvent("requestfailed", {
		predicate: (req) => req.url().endsWith("/release.json"),
		timeout: 15_000,
	});
	await other.clock.setSystemTime((await other.evaluate(() => Date.now())) + 1_800_001);
	await other.evaluate(() => window.dispatchEvent(new Event("focus")));
	await heldTimeout;
	await timedOut;
	assert.equal(
		await other.getByRole("complementary", { name: "Website update" }).count(),
		0,
		"timeout cannot advertise a release",
	);
	await other.unroute("**/release.json");
	// Deliberate HTTP failure must leave the current page usable.
	await other.route("**/release.json", (route) =>
		route.fulfill({ status: 503, contentType: "application/json", body: "{}" }),
	);
	await checkOther();
	assert.equal(await other.getByRole("complementary", { name: "Website update" }).count(), 0);
	await other.unroute("**/release.json");
	// Exercise the visibility handler with the browser visibility boundary modeled.
	await other.evaluate(() => {
		Object.defineProperty(document, "hidden", { configurable: true, get: () => true });
		document.dispatchEvent(new Event("visibilitychange"));
	});
	const hiddenChecks = otherChecks;
	await other.clock.fastForward(1_800_001);
	assert.equal(otherChecks, hiddenChecks, "hidden handler stops the timer");
	await other.evaluate(() => {
		Reflect.deleteProperty(document, "hidden");
		document.dispatchEvent(new Event("visibilitychange"));
	});
	await other.clock.runFor(100);
	const before = otherChecks;
	await context.setOffline(true);
	await other.clock.fastForward(300_001);
	assert.equal(otherChecks, before, "offline tabs do not poll");
	await context.setOffline(false);
	await other.bringToFront();
	await other.clock.fastForward(60_001);
	await other.evaluate(() => window.dispatchEvent(new Event("focus")));
	assert.equal(await other.getByRole("complementary", { name: "Website update" }).count(), 0);
	root = a;
	await other.goto(`${url}/learn/fundamentals/need-not-yet-contract/`);
	await other.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await other.getByRole("navigation", { name: "On this page" }).waitFor();
	root = b;
	await checkOther();
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	assert.ok(await other.locator("h1").textContent(), "chapter stays readable after release change");
	await other.getByRole("button", { name: "Later", exact: true }).click();
	root = c;
	await checkOther();
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	assert.equal(
		await other.getByRole("button", { name: "Update available", exact: true }).count(),
		0,
		"distinct C overrides dismissal of B",
	);
	await other.waitForFunction(() => document.activeElement?.textContent?.trim() === "Later");
	await other.unroute("**/release.json");
	assert.equal(
		errors.filter((message) => message.includes("503")).length,
		2,
		"expected console error from deliberate HTTP failure",
	);
	assert.deepEqual(
		errors.filter((message) => !message.includes("503")),
		[],
		"no unexpected browser console or page errors",
	);
	await other.goto("about:blank");
	const afterUnmount = otherChecks;
	await other.clock.fastForward(1_800_001);
	assert.equal(otherChecks, afterUnmount, "document navigation stops the old controller");
	await writeFile(
		"/tmp/far-alignment-browser-receipt.json",
		JSON.stringify(
			{
				success: true,
				builds: { a: first, b: second, c: third },
				routes: ["/", "/learn/fundamentals/", "/learn/fundamentals/need-not-yet-contract/"],
				expectedHttp503Diagnostics: 2,
				metadataRequests: checks,
				unexpectedErrors: errors.filter((message) => !message.includes("503")),
				screenshots: ["desktop-light", "desktop-dark", "mobile-light", "mobile-dark"].map(
					(name) => `/tmp/far-update-${name}.png`,
				),
			} satisfies BrowserReceipt,
			null,
			2,
		),
	);
	process.stdout.write("PASS A/B/C update browser contract; expected HTTP 503 diagnostics only\n");
} finally {
	await browser?.close();
	server.closeAllConnections();
	await new Promise<void>((done) => server.close(() => done()));
	await rm(fixture, { recursive: true, force: true });
}
