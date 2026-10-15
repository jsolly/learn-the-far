import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cp, mkdtemp, readFile, rm } from "node:fs/promises";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { chromium } from "playwright";

// Two real builds, served atomically like Vercel deployments. No production writes.
const fixture = await mkdtemp(join(tmpdir(), "far-release-"));
const a = join(fixture, "a");
await cp("dist", a, { recursive: true });
execFileSync("npm", ["run", "build"], { stdio: "pipe" });
const b = resolve("dist");
const first = JSON.parse(await readFile(join(a, "release.json"), "utf8")).id;
const second = JSON.parse(await readFile(join(b, "release.json"), "utf8")).id;
assert.notEqual(first, second);
let root = a;
let checks = 0;
const server = createServer(async (req, res) => {
	const pathname = new URL(req.url, "http://localhost").pathname;
	if (pathname === "/release.json") {
		checks++;
	}
	const path = join(root, pathname.endsWith("/") ? `${pathname}index.html` : pathname);
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
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const url = `http://127.0.0.1:${server.address().port}`;
let browser;
const errors = [];
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
	await page.goto(url);
	await page.locator("astro-island[ssr]").waitFor({ state: "detached" });
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
	assert.ok(Object.keys(JSON.parse(saved.quiz).questions).length > 0);
	assert.ok(Object.keys(JSON.parse(saved.reading).read).length > 0);
	root = b;
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
	await other.clock.install();
	await other.goto(url);
	await other.locator("astro-island[ssr]").waitFor({ state: "detached" });
	root = b;
	// A continuously focused tab detects B via its timer without focus events.
	await other.clock.runFor(300_001);
	await other.getByRole("button", { name: "Update and reload" }).waitFor();
	for (const [name, viewport, colorScheme] of [
		["desktop-light", { width: 1280, height: 900 }, "light"],
		["desktop-dark", { width: 1280, height: 900 }, "dark"],
		["mobile-light", { width: 390, height: 844 }, "light"],
		["mobile-dark", { width: 390, height: 844 }, "dark"],
	]) {
		await other.setViewportSize(viewport);
		await other.emulateMedia({ colorScheme });
		await other.screenshot({ path: `/tmp/far-update-${name}.png` });
		assert.ok(
			await other.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
			"no horizontal overflow",
		);
	}
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
	const cooldownChecks = checks;
	await other.evaluate(() => window.dispatchEvent(new Event("focus")));
	await other.clock.runFor(100);
	assert.equal(checks, cooldownChecks, "focus during cooldown makes no request");
	async function checkOther() {
		const response = other.waitForResponse("**/release.json");
		await other.clock.setSystemTime((await other.evaluate(() => Date.now())) + 60_001);
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
	// Deliberate HTTP failure must leave the current page usable.
	await other.route("**/release.json", (route) =>
		route.fulfill({ status: 503, contentType: "application/json", body: "{}" }),
	);
	await checkOther();
	assert.equal(await other.getByRole("complementary", { name: "Website update" }).count(), 0);
	await other.unroute("**/release.json");
	const before = checks;
	await context.setOffline(true);
	await other.clock.fastForward(300_001);
	assert.equal(checks, before, "offline tabs do not poll");
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
	assert.equal(
		errors.filter((message) => message.includes("503")).length,
		1,
		"expected console error from deliberate HTTP failure",
	);
	assert.deepEqual(
		errors.filter((message) => !message.includes("503")),
		[],
		"no unexpected browser console or page errors",
	);
	process.stdout.write("PASS update browser contract; expected HTTP 503 diagnostic only\n");
} finally {
	await browser?.close();
	server.closeAllConnections();
	await new Promise((done) => server.close(done));
	await rm(fixture, { recursive: true, force: true });
}
