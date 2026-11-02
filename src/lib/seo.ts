import type { ChapterShelf } from "./far/chapters/types";

/** Soft SERP budget for `<title>` (Ahrefs flags >70; Google often shows ~60). */
const TITLE_MAX = 60;
/** Ahrefs flags meta descriptions shorter than 110 characters. */
const DESCRIPTION_MIN = 110;
/** Ahrefs flags meta descriptions longer than 160 characters. */
const DESCRIPTION_MAX = 160;
const BRAND = "Learn The FAR";
/**
 * Appended to a page summary below Ahrefs' minimum, longest first. Only a pad
 * whose combined length lands inside the band is used, so the boilerplate is
 * never itself truncated.
 */
const DESCRIPTION_PADS = [
	` Practice FAR capture scenarios for prime contractors on ${BRAND}.`,
	` Practice FAR capture scenarios on ${BRAND}.`,
];
/** Stands alone when neither the summary nor any padded form reaches the minimum. */
const DESCRIPTION_FALLBACK = `Federal Acquisition Regulation capture practice for prime contractors on ${BRAND}. Scenario quizzes build judgment before B&P spend.`;

function truncateAtWord(text: string, max: number, min = 0): string {
	if (text.length <= max) {
		return text;
	}
	const ellipsis = "…";
	const budget = max - ellipsis.length;
	const cut = text.slice(0, budget);
	const atWord = cut.lastIndexOf(" ");
	const wordBoundaryFloor = Math.max(Math.floor(budget * 0.6), min - ellipsis.length);
	const base = atWord >= wordBoundaryFloor ? cut.slice(0, atWord) : cut;
	return `${base.trimEnd()}${ellipsis}`;
}

/**
 * Build a document title that prefers `page — brand` when it fits, otherwise
 * the page title alone, otherwise a truncated page title.
 */
export function formatDocumentTitle(pageTitle: string, brand = BRAND): string {
	const trimmed = pageTitle.trim();
	if (!trimmed) {
		return brand;
	}

	const withBrand = `${trimmed} — ${brand}`;
	if (withBrand.length <= TITLE_MAX) {
		return withBrand;
	}
	if (trimmed.length <= TITLE_MAX) {
		return trimmed;
	}
	return truncateAtWord(trimmed, TITLE_MAX);
}

/**
 * Keep meta descriptions inside Ahrefs' 110–160 character band. A summary that
 * already reaches the minimum is truncated at a word boundary when that keeps
 * it inside the band, otherwise at the character budget; a shorter one
 * takes the first boilerplate pad whose total lands inside the band; a summary
 * too short for any pad to reach the minimum, including an empty one, is
 * replaced by the standalone sentence. The boilerplate is only ever appended
 * whole. `DESCRIPTION_FALLBACK` is returned unclamped on purpose: its length is
 * pinned by the tests, so lengthening it past the maximum fails loudly instead
 * of being silently truncated to a dangling fragment.
 */
export function formatMetaDescription(description: string): string {
	const summary = description.trim().replace(/\s+/gu, " ");

	if (summary.length >= DESCRIPTION_MIN) {
		return truncateAtWord(summary, DESCRIPTION_MAX, DESCRIPTION_MIN);
	}

	// Pad with a whole sentence or not at all. Padding first and truncating
	// afterwards cut the boilerplate itself, ending real snippets on a dangling
	// fragment ("… FAR capture scenarios for prime contractors on…"); returning
	// the bare summary instead dropped 17 pages below the 110-character minimum.
	for (const pad of DESCRIPTION_PADS) {
		const padded = `${summary}${pad}`;
		if (padded.length >= DESCRIPTION_MIN && padded.length <= DESCRIPTION_MAX) {
			return padded;
		}
	}

	return DESCRIPTION_FALLBACK;
}

/** The shelf page and its description contract use the same fallback order. */
export function formatShelfDescription({
	intro,
	subtitle,
	unitLabel,
}: Pick<ChapterShelf, "intro" | "subtitle"> & { unitLabel: string }): string {
	return formatMetaDescription(
		intro || subtitle || `Browse the ${unitLabel} learning shelf on Learn The FAR.`,
	);
}
