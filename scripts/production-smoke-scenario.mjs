import assert from "node:assert/strict";

export const productionUrl = "https://learnthefar.com";

export async function smoke({ page }) {
	await page.getByRole("heading", { name: "Learn The FAR", exact: true }).waitFor();
	await page.getByRole("link", { name: "Start learning", exact: true }).first().click();
	const chapters = page.getByRole("list", { name: "Chapters on this shelf" });
	await chapters.waitFor();
	await chapters.getByRole("link").first().click();
	await page.getByRole("navigation", { name: "On this page" }).waitFor();
	assert.ok(
		(await page.locator("h1").textContent()).trim().length > 0,
		"study chapter has a title",
	);
	await page.goto(productionUrl);
	// Astro exposes SSR markup before its quiz event handlers finish hydrating.
	await page.locator("astro-island[ssr]").waitFor({ state: "detached" });
	await page.getByRole("button", { name: "Quiz me", exact: true }).first().click();
	await page.getByText("Pick your answer", { exact: true }).waitFor();
	const prompt = await page.locator("h1").textContent();
	// Answer options immediately follow the question heading in the public quiz UI.
	await page.locator("h1 + div button").first().click();
	await page.getByText("Your answer", { exact: true }).waitFor({ state: "attached" });
	const next = page.getByRole("button", { name: "Next Question", exact: true });
	await next.waitFor();
	assert.equal(
		await page.locator('button[aria-current="true"]').isDisabled(),
		true,
		"submitted answer is locked",
	);
	await next.click();
	await page.getByText("Pick your answer", { exact: true }).waitFor();
	assert.notEqual(
		await page.locator("h1").textContent(),
		prompt,
		"quiz advances to a different question",
	);
}
