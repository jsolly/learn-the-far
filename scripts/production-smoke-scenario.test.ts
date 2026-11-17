import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";
import { productionUrl, smoke } from "./production-smoke-scenario.mjs";

// Steps that must succeed (launch, navigation, every positive wait) get a budget
// that survives a loaded CI or gate machine. Only the one wait the broken handler
// must leave unsatisfied is short, so the test stays fast without racing setup.
const STEP_TIMEOUT_MS = 15_000;
const ABSENCE_TIMEOUT_MS = 300;

test("quiz without answer handling fails", async () => {
	const browser = await chromium.launch();
	try {
		const context = await browser.newContext();
		const page = await context.newPage();
		page.setDefaultTimeout(STEP_TIMEOUT_MS);
		// The broken quiz calls this when an answer is clicked, which is the moment the
		// scenario starts waiting for the "Your answer" feedback that never arrives. If
		// the call lands late the wait only runs at the long budget: slower, never flaky.
		await page.exposeFunction("armAbsenceWait", () => {
			page.setDefaultTimeout(ABSENCE_TIMEOUT_MS);
		});
		await context.route("**/*", (route) =>
			route.fulfill({
				status: 200,
				contentType: "text/html",
				// Literal inline JavaScript deliberately models a broken quiz handler.
				// biome-ignore lint/security/noSecrets: Synthetic HTML fixture contains no credentials.
				body: '<h1>Learn The FAR</h1><a href="/learn/basics/">Start learning</a><ul aria-label="Chapters on this shelf"><li><a href="/learn/basics/first/">First chapter</a></li></ul><nav aria-label="On this page">Chapter contents</nav><button onclick="document.body.innerHTML=\'<h1>A question</h1><div><button onclick=&quot;armAbsenceWait()&quot;>An answer</button></div><p>Pick your answer</p>\'">Quiz me</button>',
			}),
		);
		await page.goto(productionUrl);
		await assert.rejects(
			smoke({ page, context, artifacts: "unused", verifyHttp: async () => new Response() }),
			(error: unknown) => {
				// Playwright names the awaited locator in its timeout message, so this pins
				// the failure to the missing answer feedback rather than to elapsed time.
				assert.ok(error instanceof Error);
				assert.equal(error.name, "TimeoutError");
				assert.match(error.message, /Your answer/u);
				return true;
			},
		);
	} finally {
		await browser.close();
	}
});
