import { describe, expect, it } from "vitest";
import { chapterById } from "./far/chapters";
import { learnChapterStaticPaths } from "./learn-routes";
import { formatDocumentTitle, formatMetaDescription } from "./seo";

/** Ahrefs flags a meta description outside this band; `seo.ts` exists to hold it. */
const MIN = 110;
const MAX = 160;
/** The opening of every boilerplate pad, used to spot a half-appended one. */
const BOILERPLATE_OPENING = "Practice FAR capture scenarios";
const BOILERPLATE_ENDING = "Learn The FAR.";

/** Each published chapter page's description, built the way the page builds it. */
function publishedChapterDescriptions() {
	return learnChapterStaticPaths().map(({ params }) => {
		const chapter = chapterById(params.chapter);
		if (!chapter) {
			throw new Error(`learnChapterStaticPaths listed an unknown chapter: ${params.chapter}`);
		}
		return {
			page: `/learn/${params.unit}/${params.chapter}/`,
			description: formatMetaDescription(chapter.summary || chapter.intro),
		};
	});
}

describe("A reader finds a chapter page in a search result", () => {
	it("reads a description inside the 110-160 band on every chapter page the site publishes", () => {
		const pages = publishedChapterDescriptions();
		expect(pages.length).toBeGreaterThan(50);

		const outOfBand = pages
			.filter(({ description }) => description.length < MIN || description.length > MAX)
			.map(({ page, description }) => `${page} (${description.length})`);

		expect(outOfBand).toEqual([]);
	});

	it("never reads a description that stops partway through the boilerplate sentence", () => {
		const dangling = publishedChapterDescriptions()
			.filter(
				({ description }) =>
					description.includes(BOILERPLATE_OPENING) && !description.endsWith(BOILERPLATE_ENDING),
			)
			.map(({ page, description }) => `${page}: ${description}`);

		expect(dangling).toEqual([]);
	});
});

describe("An author writes a chapter summary of an awkward length", () => {
	it("gets the full boilerplate appended to a short summary", () => {
		const summary = "Defines LOS math and ostensible-subcontractor risk on set-aside teams.";

		expect(formatMetaDescription(summary)).toBe(
			`${summary} Practice FAR capture scenarios for prime contractors on Learn The FAR.`,
		);
	});

	it("still clears the minimum at 109 characters, where the long boilerplate no longer fits", () => {
		// 109 + the 71-character pad is 180, over the maximum. Before the shorter
		// pad existed this summary was published bare, 1 character short of the band.
		const summary =
			"Defines the Schedule contract versus an order, SIN coverage, and FAR 8.405-1 versus 8.405-2 ordering methods.";
		expect(summary).toHaveLength(109);

		const description = formatMetaDescription(summary);

		expect(description.startsWith(summary)).toBe(true);
		expect(description.endsWith(BOILERPLATE_ENDING)).toBe(true);
		expect(description.length).toBeGreaterThanOrEqual(MIN);
		expect(description.length).toBeLessThanOrEqual(MAX);
	});

	it("gives up the summary for the standalone sentence when no boilerplate can lift it into the band", () => {
		const description = formatMetaDescription("Defines the bid gate.");

		expect(description).not.toContain("Defines the bid gate.");
		expect(description.length).toBeGreaterThanOrEqual(MIN);
		expect(description.length).toBeLessThanOrEqual(MAX);
	});

	it("loses only whole words from a summary that overruns the maximum", () => {
		const description = formatMetaDescription(
			"Explains how FAR citations are numbered, how agency supplements and deviations stack on top, and the difference between pre-award provisions and post-award clauses.",
		);

		expect(description.length).toBeLessThanOrEqual(MAX);
		expect(description.endsWith("…")).toBe(true);
		expect(description).not.toContain(BOILERPLATE_OPENING);
	});

	it("falls back to the standalone sentence on a page with no summary at all", () => {
		const description = formatMetaDescription("   ");

		expect(description.length).toBeGreaterThanOrEqual(MIN);
		expect(description.length).toBeLessThanOrEqual(MAX);
	});

	it("collapses the newlines and double spaces that authored copy carries", () => {
		const description = formatMetaDescription(
			"Defines LOS math and\n\tostensible-subcontractor   risk on set-aside teams.",
		);

		expect(description).toContain(
			"Defines LOS math and ostensible-subcontractor risk on set-aside teams.",
		);
	});
});

describe("A reader scans the page title in a search result", () => {
	it("keeps the brand on a title that fits and drops it from one that does not", () => {
		expect(formatDocumentTitle("Bid / No-Bid shelf")).toBe("Bid / No-Bid shelf — Learn The FAR");

		const title = formatDocumentTitle(
			"Responsibility standards, SAM status, vehicle access, and accounting readiness",
		);

		expect(title).not.toContain("Learn The FAR");
		expect(title.length).toBeLessThanOrEqual(60);
		expect(title.endsWith("…")).toBe(true);
	});
});
