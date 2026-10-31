import { describe, expect, it } from "vitest";
import { chapterById, shelfForUnit } from "./far/chapters";
import { learnChapterStaticPaths, learnShelfStaticPaths } from "./learn-routes";
import { formatDocumentTitle, formatMetaDescription } from "./seo";

/** Ahrefs flags a meta description outside this band; `seo.ts` exists to hold it. */
const MIN = 110;
const MAX = 160;
/** The opening of every boilerplate pad, used to spot a half-appended one. */
const BOILERPLATE_OPENING = "Practice FAR capture scenarios";
const BOILERPLATE_ENDING = "Learn The FAR.";
/** What a page with no usable summary of its own publishes instead. */
const STANDALONE =
	"Federal Acquisition Regulation capture practice for prime contractors on Learn The FAR. Scenario quizzes build judgment before B&P spend.";

/** A summary of exactly `length` characters, shaped like words so truncation has boundaries. */
function summaryOfLength(length: number): string {
	let text = "";
	while (text.length < length) {
		text += "regulation ";
	}
	text = text.slice(0, length);
	// Never end on a space: that keeps the length exact after trimming.
	return text.endsWith(" ") ? `${text.slice(0, -1)}.` : text;
}

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

/** Each published shelf page's description, built the way that page builds it. */
function publishedShelfDescriptions() {
	return learnShelfStaticPaths().map(({ params }) => {
		const shelf = shelfForUnit(params.unit);
		return {
			page: `/learn/${params.unit}/`,
			description: formatMetaDescription(shelf.intro || shelf.subtitle),
		};
	});
}

describe("A reader finds a page of this site in a search result", () => {
	it("reads a description inside the 110-160 band on every chapter page the site publishes", () => {
		const pages = publishedChapterDescriptions();
		expect(pages.length).toBeGreaterThan(50);

		const outOfBand = pages
			.filter(({ description }) => description.length < MIN || description.length > MAX)
			.map(({ page, description }) => `${page} (${description.length})`);

		expect(outOfBand).toEqual([]);
	});

	it("reads a description inside the band on every shelf page too", () => {
		const pages = publishedShelfDescriptions();
		expect(pages.length).toBeGreaterThan(5);

		const outOfBand = pages
			.filter(({ description }) => description.length < MIN || description.length > MAX)
			.map(({ page, description }) => `${page} (${description.length})`);

		expect(outOfBand).toEqual([]);
	});

	it("never reads a description that stops partway through the boilerplate sentence", () => {
		const dangling = [...publishedChapterDescriptions(), ...publishedShelfDescriptions()]
			.filter(
				({ description }) =>
					description.includes(BOILERPLATE_OPENING) && !description.endsWith(BOILERPLATE_ENDING),
			)
			.map(({ page, description }) => `${page}: ${description}`);

		expect(dangling).toEqual([]);
	});
});

describe("An author writes a chapter summary of an awkward length", () => {
	// The pads are 71 and 49 characters and the standalone sentence is 137, so each
	// row below pins one edge of the band rather than a round number.
	it.each([
		{ length: 38, published: 137, why: "too short for either pad, so the standalone sentence" },
		{ length: 39, published: 110, why: "the long pad lands exactly on the minimum" },
		{ length: 89, published: 160, why: "the long pad lands exactly on the maximum" },
		{ length: 90, published: 139, why: "the long pad would overrun, so the short pad" },
		{ length: 109, published: 158, why: "still the short pad at the top of the short range" },
		{ length: 110, published: 110, why: "already at the minimum, so published unchanged" },
		{ length: 160, published: 160, why: "already at the maximum, so published unchanged" },
	])(
		"publishes $published characters for a $length character summary ($why)",
		({ length, published }) => {
			expect(formatMetaDescription(summaryOfLength(length))).toHaveLength(published);
		},
	);

	it("trims an over-long summary back under the maximum at a word boundary", () => {
		const summary = summaryOfLength(161);

		const description = formatMetaDescription(summary);

		expect(description.length).toBeLessThanOrEqual(MAX);
		expect(description.endsWith("…")).toBe(true);
		// The kept text is a prefix of the summary that stops where a space was,
		// so no word is cut in half and no boilerplate is involved.
		const kept = description.slice(0, -1);
		expect(summary.startsWith(kept)).toBe(true);
		expect(summary.charAt(kept.length)).toBe(" ");
		expect(description).not.toContain(BOILERPLATE_OPENING);
	});

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

		expect(description).toBe(STANDALONE);
		expect(description).not.toContain("Defines the bid gate.");
	});

	it("publishes the standalone sentence whole and inside the band", () => {
		// The standalone sentence is returned unclamped, so this is what stops a
		// future edit from lengthening it past the maximum unnoticed.
		expect(formatMetaDescription("   ")).toBe(STANDALONE);
		expect(STANDALONE.length).toBeGreaterThanOrEqual(MIN);
		expect(STANDALONE.length).toBeLessThanOrEqual(MAX);
		expect(STANDALONE.endsWith("…")).toBe(false);
	});

	it("collapses the newlines and double spaces that authored copy carries", () => {
		const clean = "Defines LOS math and ostensible-subcontractor risk on set-aside teams.";

		const description = formatMetaDescription(
			"  Defines LOS math and\n\tostensible-subcontractor   risk on set-aside teams.  ",
		);

		expect(description).toBe(formatMetaDescription(clean));
		expect(description.startsWith("Defines LOS math")).toBe(true);
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
