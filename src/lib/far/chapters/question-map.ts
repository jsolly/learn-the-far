/**
 * Explicit chapter → question mapping for end-of-chapter quizzes.
 * Prefer this over tag intersection — chapter tags are partly pedagogical and
 * question tags drift in casing/vocab.
 *
 * Basics: every fundamentals deck question is assigned to exactly one chapter.
 */
export const CHAPTER_QUESTION_IDS: Readonly<Record<string, readonly string[]>> = {
	"need-not-yet-contract": [
		"fund-map-notice-instrument-choice",
		"fund-map-solicitation-contract-terms",
	],
	"who-may-speak-who-may-bind": [
		"fund-players-co-warrant-authority",
		"fund-players-government-pm-authority",
		"fund-players-cor-unauthorized-commitment",
		"fund-players-prime-internal-ownership",
	],
	"where-the-rules-live": ["fund-map-citation-anatomy", "fund-map-civilian-supplements"],
	"how-money-becomes-authority": [
		"fund-money-appropriation-obligation-expenditure",
		"fund-money-purpose-time-amount",
		"fund-money-igce",
		"fund-money-cr-new-start",
		"fund-money-bona-fide-severable-services",
		"fund-money-q4-year-end",
		"fund-money-never-perform-unfunded",
	],
	"market-signal-to-solicitation": [
		"fund-map-ucf-l-m",
		"fund-map-sf30-qa",
		"fund-map-requirements-document",
	],
	"competition-becomes-decision": [
		"fund-players-ssa-sseb-roles",
		"fund-map-competition-path",
		"fund-players-sba-osdbu-influence",
		"fund-players-protest-forum-tradeoff",
	],
	"what-government-awards": [
		"fund-contracts-ffp-risk",
		"fund-contracts-mas-vs-gwac",
		"fund-contracts-cost-accounting-system",
		"fund-contracts-commercial-part-12",
		"fund-contracts-tm-lh-ceiling",
		"fund-contracts-bpa-orders",
		"fund-players-responsibility-fapiis-sam",
		"fund-players-ig-suspension-debarment",
	],
	"potential-value-not-authorized-work": [
		"fund-contracts-idiq-minimum-ceiling",
		"fund-contracts-orders-fair-opportunity",
		"fund-money-base-options-pop",
		"fund-money-clin-slin-funded-ceiling",
	],
	"contractor-decision-system": [
		"fund-craft-pwin-evidence",
		"fund-craft-price-to-win",
		"fund-craft-gate-kill",
		"fund-craft-capture-call-plan",
		"fund-craft-color-team-purpose",
		"fund-craft-themes-discriminators",
		"fund-craft-bp-vs-ird",
		"fund-craft-black-hat-provenance",
	],
	"performance-becomes-next-proposal": [
		"fund-craft-cpars-kickoff",
		"fund-contracts-base-options-recompete",
	],
	/** Propose / Win & Protest — explicit maps so glossary-only shelf pills don't break quiz linkage. */
	"submitted-means-received": ["propose-late-is-late", "propose-electronic-late-exception"],
	"deadline-already-missed": [
		"win-protest-apparent-solicitation-defect",
		"win-protest-general-gao-timeliness",
	],
};

/** Pedagogical chapter tags that should not drive question matching. */
export const META_CHAPTER_TAGS = new Set([
	"definition",
	"field-guide",
	"decision",
	"contrast",
	"failure-mode",
	"advanced",
	"repair",
	"misses",
]);
