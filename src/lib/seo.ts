/** Soft SERP budget for `<title>` (Ahrefs flags >70; Google often shows ~60). */
const TITLE_MAX = 60;
/** Ahrefs flags meta descriptions shorter than 110 characters. */
const DESCRIPTION_MIN = 110;
/** Ahrefs flags meta descriptions longer than 160 characters. */
const DESCRIPTION_MAX = 160;
const BRAND = "Learn The FAR";
/** Appended when a page summary is below Ahrefs' minimum. */
const DESCRIPTION_PAD =
	" Practice FAR capture scenarios for prime contractors on Learn The FAR.";

function truncateAtWord(text: string, max: number): string {
	if (text.length <= max) return text;
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
	if (!trimmed) return brand;

	const withBrand = `${trimmed} — ${brand}`;
	if (withBrand.length <= TITLE_MAX) return withBrand;
	if (trimmed.length <= TITLE_MAX) return trimmed;
	return truncateAtWord(trimmed, TITLE_MAX);
}

/**
 * Keep meta descriptions inside Ahrefs' 110–160 character band without
 * cutting mid-word when possible.
 */
export function formatMetaDescription(description: string): string {
	let trimmed = description.trim().replace(/\s+/g, " ");
	if (!trimmed) {
		trimmed = `Federal contracting scenarios and FAR capture practice on ${BRAND}.`;
	}

	if (trimmed.length < DESCRIPTION_MIN) {
		trimmed = `${trimmed}${DESCRIPTION_PAD}`;
	}

	if (trimmed.length < DESCRIPTION_MIN) {
		trimmed = `Federal Acquisition Regulation capture practice for prime contractors on ${BRAND}. Scenario quizzes build judgment before B&P spend.`;
	}

	return truncateAtWord(trimmed, DESCRIPTION_MAX);
}
