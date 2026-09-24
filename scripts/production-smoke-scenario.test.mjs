import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";
import { productionUrl, smoke } from "./production-smoke-scenario.mjs";

test("quiz without answer handling fails", async () => {
	const browser = await chromium.launch();
	try {
		const context = await browser.newContext();
		const page = await context.newPage();
		page.setDefaultTimeout(300);
		await context.route("**/*", (route) =>
			route.fulfill({
				status: 200,
				contentType: "text/html",
				// biome-ignore lint/security/noSecrets: Synthetic HTML fixture contains no credentials.
				body: '<h1>Learn The FAR</h1><a href="/learn/basics/">Start learning</a><ul aria-label="Chapters on this shelf"><li><a href="/learn/basics/first/">First chapter</a></li></ul><nav aria-label="On this page">Chapter contents</nav><button onclick="document.body.innerHTML=\'<h1>A question</h1><div><button>An answer</button></div><p>Pick your answer</p>\'">Quiz me</button>',
			}),
		);
		await page.goto(productionUrl);
		await assert.rejects(smoke({ page, context }), /Timeout/u);
	} finally {
		await browser.close();
	}
});
