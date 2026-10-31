/** Soft SERP budget for `<title>` (Ahrefs flags >70; Google often shows ~60). */
const TITLE_MAX = 60;
/** Ahrefs flags meta descriptions shorter than 110 characters. */
const DESCRIPTION_MIN = 110;
/** Ahrefs flags meta descriptions longer than 160 characters. */
const DESCRIPTION_MAX = 160;
const BRAND = "Learn The FAR";
/** Appended when a page summary is below Ahrefs' minimum. */
const DESCRIPTION_PAD = " Practice FAR capture scenarios for prime contractors on Learn The FAR.";

function truncateAtWord(text: string, max: number): string {
	if (text.length <= max) {
		return text;
	}
	const ellipsis = "…";
	const budget = max - ellipsis.length;
	const cut = text.slice(0, budget);
	const atWord = cut.lastIndexOf(" ");
	const base = atWord >= Math.floor(budget * 0.6) ? cut.slice(0, atWord) : cut;
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
 * Keep meta descriptions inside Ahrefs' 110–160 character band without
 * cutting mid-word when possible.
 */
export function formatMetaDescription(description: string): string {
	const summary = description.trim().replace(/\s+/gu, " ");
	if (!summary) {
		return `Federal Acquisition Regulation capture practice for prime contractors on ${BRAND}. Scenario quizzes build judgment before B&P spend.`;
	}

	if (summary.length >= DESCRIPTION_MIN) {
		return truncateAtWord(summary, DESCRIPTION_MAX);
	}

	// Append the boilerplate only when all of it fits. Padding first and
	// truncating afterwards cut the boilerplate itself, ending real snippets on
	// a dangling fragment ("… FAR capture scenarios for prime contractors on…").
	const padded = `${summary}${DESCRIPTION_PAD}`;
	return padded.length <= DESCRIPTION_MAX ? padded : summary;
}
