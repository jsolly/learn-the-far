import { CHAPTER_TOPIC_TERMS } from "./chapter-topics";
import type { GlossaryTerm } from "./glossary-types";

export type { GlossaryTerm } from "./glossary-types";

/**
 * Curated glossary entries. Append here when new terms are flagged —
 * chapter copy auto-links the first mention of any glossary term (no markers required).
 */
const CURATED_GLOSSARY_TERMS: GlossaryTerm[] = [
	{
		id: "contracting-officer",
		term: "Contracting Officer",
		aliases: ["contracting officer", "Contracting Officers", "CO", "KO", "COs", "KOs"],
		definition:
			"A Government official who may enter into, administer, or terminate contracts only to the extent of written delegated authority. Seniority or budget control alone does not create contracting authority.",
		chapterId: "who-may-speak-who-may-bind",
	},
	{
		id: "cor",
		term: "COR",
		aliases: [
			"Contracting Officer’s Representative",
			"Contracting Officer's Representative",
			"contracting officer’s representative",
			"contracting officer's representative",
			"CORs",
		],
		definition:
			"A contracting officer’s representative assists with technical monitoring or administration under a written designation. A COR is not a second contracting officer and cannot change scope or obligate funds outside that designation.",
		chapterId: "who-may-speak-who-may-bind",
	},
	{
		id: "warrant",
		term: "Warrant",
		aliases: ["warrants", "warranted"],
		definition:
			"Industry shorthand for the written appointment that states a contracting officer’s delegated authority and its limits. The practical check is that written delegation — not title or urgency.",
		chapterId: "who-may-speak-who-may-bind",
	},
	{
		id: "government-pm",
		term: "Government PM",
		aliases: ["Government program manager", "government program manager", "program manager"],
		definition:
			"The Government program manager owns mission outcomes and often drives requirements, but usually cannot bind the Government on contract actions. Route contractual direction to someone with written contracting authority.",
		chapterId: "who-may-speak-who-may-bind",
	},
	{
		id: "ssa",
		term: "SSA",
		aliases: ["Source Selection Authority", "source selection authority"],
		definition:
			"The Source Selection Authority is the official responsible for the source selection decision. The SSA uses the evaluation record; the SSA is not the evaluation board itself.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "sseb",
		term: "SSEB",
		aliases: ["Source Selection Evaluation Board", "source selection evaluation board"],
		definition:
			"The Source Selection Evaluation Board evaluates proposals against the stated criteria and builds the evaluation record the SSA uses to decide.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "solicitation",
		term: "Solicitation",
		aliases: ["solicitations"],
		definition:
			"A request for offers or quotations — such as an RFP, RFQ, or IFB — that invites industry responses under stated instructions and evaluation terms. A solicitation is not yet a contract.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "rfi",
		term: "RFI",
		aliases: ["Request for Information", "request for information", "RFIs"],
		definition:
			"A Request for Information gathers market capability and approach input before a binding solicitation. An RFI response is orientation work, not an offer.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "rfq",
		term: "RFQ",
		aliases: ["Request for Quotation", "request for quotation", "RFQs"],
		definition:
			"A Request for Quotation asks vendors for price and related terms, often for simpler or commercial buys. It is a solicitation path, not an award by itself.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "rfp",
		term: "RFP",
		aliases: ["Request for Proposal", "request for proposal", "RFPs"],
		definition:
			"A Request for Proposal solicits offers for evaluation under stated instructions (often Section L) and evaluation factors (often Section M).",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "ifb",
		term: "IFB",
		aliases: ["Invitation for Bids", "invitation for bids", "IFBs"],
		definition:
			"An Invitation for Bids is a sealed-bidding solicitation path where award typically turns on price among responsive, responsible bidders.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "sources-sought",
		term: "Sources Sought",
		aliases: ["sources-sought", "Sources sought", "sources sought notice"],
		definition:
			"A market-research notice that gathers capability evidence and often informs set-aside and acquisition strategy. It is not a solicitation for binding offers.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "sow",
		term: "SOW",
		aliases: ["Statement of Work", "statement of work", "SOWs"],
		definition:
			"A Statement of Work describes the work to be performed in relatively directive terms. It is one way to express requirements alongside PWS and SOO styles.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "pws",
		term: "PWS",
		aliases: ["Performance Work Statement", "performance work statement", "PWSs"],
		definition:
			"A Performance Work Statement frames requirements around outcomes and performance standards rather than prescribing every how-to step.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "soo",
		term: "SOO",
		aliases: ["Statement of Objectives", "statement of objectives", "SOOs"],
		definition:
			"A Statement of Objectives states Government objectives and invites offerors to propose the how. A SOO is not itself the awarded performance document.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "clause",
		term: "Clause",
		aliases: ["clauses", "contract clause", "contract clauses"],
		definition:
			"A contract clause is a term or condition that becomes part of the awarded contract. Provisions that only govern the competition generally do not survive as clauses after award.",
		chapterId: "where-the-rules-live",
	},
	{
		id: "provision",
		term: "Provision",
		aliases: ["provisions", "solicitation provision", "solicitation provisions"],
		definition:
			"A solicitation provision governs the competition (instructions, representations, and similar) and typically does not carry forward as a contract clause after award.",
		chapterId: "where-the-rules-live",
	},
	{
		id: "rfo",
		term: "RFO",
		aliases: [
			"Revolutionary FAR Overhaul",
			"revolutionary FAR overhaul",
			"Revolutionary Federal Acquisition Regulation Overhaul",
			"RFOs",
		],
		definition:
			"The Revolutionary FAR Overhaul is the FAR Council’s initiative to streamline the FAR through model deviation text that agencies adopt by class deviation. Until formal rulemaking lands, an adopting agency’s RFO coverage may renumber or supersede the FAC baseline — verify the solicitation and agency deviation you are under.",
		chapterId: "where-the-rules-live",
	},
	{
		id: "appropriation",
		term: "Appropriation",
		aliases: ["appropriations"],
		definition:
			"A law that provides budget authority to an agency for specified purposes. Appropriation is not the same as an obligation on a contract.",
		chapterId: "how-money-becomes-authority",
	},
	{
		id: "cbj",
		term: "CBJ",
		aliases: [
			"Congressional Budget Justification",
			"congressional budget justification",
			"Congressional budget justification",
			"CBJs",
		],
		definition:
			"A congressional budget justification is an agency document that signals program priority in a budget request. It is not an appropriation, acquisition strategy, or contract action — keep dollars provisional until you can point to funding authority and a buying path.",
		chapterId: "mission-vs-funds",
	},
	{
		id: "obligation",
		term: "Obligation",
		aliases: ["obligate", "obligated", "obligating", "obligations"],
		definition:
			"A definite commitment that creates a legal liability of the Government for payment — typically through a contract action that cites available funds. Pipeline optimism is not an obligation.",
		chapterId: "how-money-becomes-authority",
	},
	{
		id: "igce",
		term: "IGCE",
		aliases: [
			"Independent Government Cost Estimate",
			"independent government cost estimate",
			"IGCEs",
		],
		definition:
			"The Independent Government Cost Estimate is the Government’s internal cost estimate for an acquisition. It informs planning and evaluation; it is not funding on your contract.",
		chapterId: "how-money-becomes-authority",
	},
	{
		id: "rom",
		term: "ROM",
		aliases: [
			"Rough Order of Magnitude",
			"rough order of magnitude",
			"ROMs",
		],
		definition:
			"A Rough Order of Magnitude is an early, assumption-heavy ballpark cost or price estimate used in capture and market research. It is not a binding offer, and it is not the same as an IGCE or a fully supported proposal price.",
		chapterId: "lead-not-solicitation",
	},
	{
		id: "clin",
		term: "CLIN",
		aliases: [
			"Contract Line Item Number",
			"contract line item",
			"contract line items",
			"CLINs",
			"SLIN",
			"SLINs",
		],
		definition:
			"A Contract Line Item Number is a priced or informational line on the contract structure. A CLIN describes what can be ordered or billed; funding and orders still have to authorize specific work.",
		chapterId: "potential-value-not-authorized-work",
	},
	{
		id: "idiq",
		term: "IDIQ",
		aliases: [
			"Indefinite Delivery/Indefinite Quantity",
			"indefinite-delivery",
			"indefinite delivery",
			"IDIQs",
		],
		definition:
			"An Indefinite Delivery/Indefinite Quantity contract establishes a vehicle with ordering procedures, often a minimum and a ceiling. The vehicle award is not the same as funded task-order backlog.",
		chapterId: "potential-value-not-authorized-work",
	},
	{
		id: "base-and-options",
		term: "Base and options",
		aliases: ["base period", "option period", "option periods", "option year", "option years"],
		definition:
			"Many contracts split performance into a base period plus priced option periods the Government may exercise. Unexercised options are potential value, not authorized work.",
		chapterId: "potential-value-not-authorized-work",
	},
	{
		id: "sat",
		term: "SAT",
		aliases: ["Simplified Acquisition Threshold", "simplified acquisition threshold"],
		definition:
			"The Simplified Acquisition Threshold is a dollar threshold that unlocks simplified procedures for many buys. It is a process gate, not a guarantee of set-aside or vehicle choice.",
	},
	{
		id: "full-and-open",
		term: "Full and open competition",
		aliases: ["full & open", "full-and-open"],
		definition:
			"Competition in which all responsible sources are permitted to compete. Other paths — set-asides or sole source — need their own legal basis.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "set-aside",
		term: "Set-aside",
		aliases: ["set aside", "set-asides", "set asides"],
		definition:
			"A competition reserved for a defined socioeconomic or small-business category when the rules and market evidence support that path.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "sole-source",
		term: "Sole source",
		aliases: ["sole-source", "other than full and open"],
		definition:
			"An award without full and open competition, allowed only when a statutory exception and required justification support it.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "ja",
		term: "J&A",
		aliases: [
			"Justification and Approval",
			"justification and approval",
			"JOFOC",
			"justification & approval",
		],
		definition:
			"Justification and Approval (or a related sole-source justification) documents why other than full and open competition is permitted. It is a Government authority document, not a vendor marketing brief.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "lpta",
		term: "LPTA",
		aliases: ["lowest price technically acceptable", "Lowest Price Technically Acceptable"],
		definition:
			"Lowest Price Technically Acceptable selects the lowest-evaluated price among proposals that meet minimum technical standards — not a tradeoff for higher technical merit.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "tradeoff",
		term: "Tradeoff",
		aliases: ["trade-off", "tradeoffs", "trade-offs", "best value tradeoff"],
		definition:
			"A source selection method that may accept a higher price for superior non-price merit under the stated evaluation factors.",
		chapterId: "competition-becomes-decision",
	},
	{
		id: "gsa",
		term: "GSA",
		aliases: ["General Services Administration"],
		definition:
			"The General Services Administration — the federal agency that runs Multiple Award Schedules, several governmentwide vehicles, and related buying tools such as eBuy.",
		chapterId: "mas-contract-coverage-order",
	},
	{
		id: "dcaa",
		term: "DCAA",
		aliases: ["Defense Contract Audit Agency"],
		definition:
			"The Defense Contract Audit Agency — the DoD organization that performs contract audits and related financial advisory services for DoD and, as appropriate, other federal agencies. A past DCAA review is not a permanent “DCAA compliant” badge that transfers across entities or systems.",
		chapterId: "actual-offeror-ready",
	},
	{
		id: "sin",
		term: "SIN",
		aliases: ["Special Item Number", "Special Item Numbers", "SINs"],
		definition:
			"A Special Item Number is a MAS catalog category that defines what products or services a Schedule holder can sell under its awarded Schedule coverage.",
		chapterId: "mas-contract-coverage-order",
	},
	{
		id: "osdbu",
		term: "OSDBU",
		aliases: [
			"Office of Small and Disadvantaged Business Utilization",
			"Office of Small & Disadvantaged Business Utilization",
			"OSDBUs",
		],
		definition:
			"An agency Office of Small and Disadvantaged Business Utilization (or a similarly named small-business office) advocates for small-business participation, can recommend set-asides, review subcontracting plans, and challenge unnecessary consolidation or bundling — without awarding the contract.",
		chapterId: "radar-not-keyword",
	},
	{
		id: "mas",
		term: "MAS",
		aliases: [
			"Multiple Award Schedule",
			"GSA Schedule",
			"Federal Supply Schedule",
			"FSS",
			"Schedule contract",
		],
		definition:
			"GSA’s Multiple Award Schedule (Federal Supply Schedule) is a long-term governmentwide contract vehicle for commercial products and services, with ordering procedures under the Schedule program.",
		chapterId: "what-government-awards",
	},
	{
		id: "gwac",
		term: "GWAC",
		aliases: ["Governmentwide Acquisition Contract", "governmentwide acquisition contract", "GWACs"],
		definition:
			"A Governmentwide Acquisition Contract is a multi-agency IDIQ-style vehicle for IT and related services, distinct from GSA Schedule ordering rules and scope.",
		chapterId: "what-government-awards",
	},
	{
		id: "bpa",
		term: "BPA",
		aliases: ["Blanket Purchase Agreement", "blanket purchase agreement", "BPAs"],
		definition:
			"A Blanket Purchase Agreement is a simplified ordering framework filled by later calls or orders. Establishing a BPA is not the same as booking funded revenue.",
		chapterId: "bpa-framework-not-revenue",
	},
	{
		id: "fair-opportunity",
		term: "Fair opportunity",
		aliases: ["fair-opportunity"],
		definition:
			"On many multiple-award IDIQs, fair opportunity rules require giving awardees a fair chance to compete for orders, with limited exceptions.",
		chapterId: "idiq-compete-twice",
	},
	{
		id: "sam",
		term: "SAM",
		aliases: ["SAM.gov", "System for Award Management", "system for award management"],
		definition:
			"The System for Award Management is where entities register to do business with the Government and where many notices and award records appear.",
		chapterId: "actual-offeror-ready",
	},
	{
		id: "piid",
		term: "PIID",
		aliases: [
			"PIIDs",
			"Procurement Instrument Identifier",
			"procurement instrument identifier",
			"Procurement Instrument Identifiers",
		],
		definition:
			"A Procurement Instrument Identifier uniquely identifies a contract, order, or agreement in federal award records. Follow the PIID and its modifications — not just a vendor name — when reconstructing an incumbent or spend trail.",
		chapterId: "follow-identifiers",
	},
	{
		id: "fpds",
		term: "FPDS",
		aliases: [
			"Federal Procurement Data System",
			"federal procurement data system",
			"FPDS ezSearch",
		],
		definition:
			"The Federal Procurement Data System is the historical federal contract-reporting stream. Public FPDS search has moved to SAM.gov Contract Awards and Data Bank; treat “FPDS” as data lineage and legacy vocabulary, not the current public destination.",
		chapterId: "follow-identifiers",
	},
	{
		id: "data-bank",
		term: "Data Bank",
		aliases: [
			"SAM.gov Data Bank",
			"SAM Data Bank",
			"SAM data bank",
			"sam-data-bank",
			"Data Bank reports",
		],
		definition:
			"SAM.gov Data Bank is where contract-award reports and related award/modification data live after the public FPDS transition. Use it with SAM.gov Contract Awards for incumbent and spend reconstruction — it is not a forecast-only tool and is not the same as SAM exclusions.",
		chapterId: "follow-identifiers",
	},
	{
		id: "usaspending",
		term: "USAspending",
		aliases: [
			"USASpending",
			"usaspending.gov",
			"USAspending.gov",
		],
		definition:
			"USAspending is the official open source for federal spending analysis. It receives procurement data derived from federal contract reporting and is used with SAM.gov award records to follow obligations, transactions, and incumbent spend — not as a grants-only site.",
		chapterId: "follow-identifiers",
	},
	{
		id: "naics",
		term: "NAICS",
		aliases: ["North American Industry Classification System"],
		definition:
			"NAICS codes classify the industry of the work. Size standards, set-aside eligibility, and some reporting turn on the NAICS assigned to the acquisition.",
		chapterId: "eligible-path",
	},
	{
		id: "oci",
		term: "OCI",
		aliases: ["organizational conflict of interest", "Organizational Conflict of Interest", "OCIs"],
		definition:
			"An organizational conflict of interest arises when a contractor’s other work could bias advice, impair objectivity, or create an unfair competitive advantage. Diagnose the archetype before picking a remedy.",
		chapterId: "diagnose-oci-before-remedy",
	},
	{
		id: "prime",
		term: "Prime",
		aliases: [
			"prime",
			"primes",
			"prime contractor",
			"prime contractors",
			"Prime contractor",
			"Prime Contractor",
		],
		definition:
			"The contractor that holds the contract with the Government and remains fully responsible for performance. Naming or evaluating a subcontractor does not shift that accountability or create Government privity with the sub.",
		chapterId: "name-team-you-built",
	},
	{
		id: "sub",
		term: "Sub",
		aliases: [
			"sub",
			"subs",
			"subcontractor",
			"subcontractors",
			"Subcontractor",
			"Subcontractors",
		],
		definition:
			"A firm performing under a subcontract with the prime, not under a direct contract with the Government. Payment and direction ordinarily run through the prime; flowdowns and consent may apply, but they do not create agency privity with the sub.",
		chapterId: "name-team-you-built",
	},
	{
		id: "privity",
		term: "Privity",
		aliases: ["privity of contract"],
		definition:
			"Privity means the direct contractual relationship — typically between the Government and the prime. Subcontractors generally look to the prime, not the Government, for payment and direction.",
		chapterId: "name-team-you-built",
	},
	{
		id: "flowdown",
		term: "Flowdown",
		aliases: ["flowdowns", "flow-down", "flow-downs", "flow down"],
		definition:
			"Contract clauses the prime must push into subcontracts so required terms reach lower tiers. Flowdowns do not by themselves create Government privity with the sub.",
		chapterId: "award-changes-paper",
	},
	{
		id: "cpars",
		term: "CPARS",
		aliases: [
			"Contractor Performance Assessment Reporting System",
			"past performance rating",
			"past-performance rating",
		],
		definition:
			"CPARS is the Government’s contractor performance assessment system. Those ratings become past-performance currency on later competitions.",
		chapterId: "performance-becomes-next-proposal",
	},
	{
		id: "section-l",
		term: "Section L",
		aliases: ["Instructions to Offerors", "instructions to offerors"],
		definition:
			"In Uniform Contract Format solicitations, Section L states proposal instructions — what to submit, how, and in what form.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "section-m",
		term: "Section M",
		aliases: ["Evaluation Factors for Award", "evaluation factors for award"],
		definition:
			"In Uniform Contract Format solicitations, Section M states how proposals will be evaluated and the basis for award.",
		chapterId: "market-signal-to-solicitation",
	},
	{
		id: "deficiency",
		term: "Deficiency",
		aliases: ["deficiencies"],
		definition:
			"Under FAR 15.001, a deficiency is a material failure to meet a Government requirement — more severe than a weakness.",
		chapterId: "rfp-as-evaluation-machine",
	},
	{
		id: "significant-weakness",
		term: "Significant weakness",
		aliases: ["significant weaknesses"],
		definition:
			"Under FAR 15.001, a significant weakness appreciably increases the risk of unsuccessful contract performance.",
		chapterId: "rfp-as-evaluation-machine",
	},
	{
		id: "weakness",
		term: "Weakness",
		aliases: ["weaknesses"],
		definition:
			"Under FAR 15.001, a weakness is a flaw that increases the risk of unsuccessful contract performance. It is less severe than a significant weakness or deficiency.",
		chapterId: "rfp-as-evaluation-machine",
	},
	{
		id: "debrief",
		term: "Debrief",
		aliases: ["debriefing", "debriefings", "debriefs"],
		definition:
			"A post-award explanation of the basis for the award decision and the offeror’s evaluation, within statutory limits. It is a signal for next steps, not open discovery.",
		chapterId: "debrief-signal-not-discovery",
	},
	{
		id: "gao-protest",
		term: "GAO protest",
		aliases: ["GAO", "bid protest", "bid protests", "protest to GAO"],
		definition:
			"A challenge to a solicitation or award filed at the Government Accountability Office under its bid-protest rules and deadlines. Agency and Court of Federal Claims lanes also exist.",
		chapterId: "choose-right-lane",
	},
	{
		id: "pwin",
		term: "Pwin",
		aliases: ["PWin", "pWin", "probability of win", "win probability"],
		definition:
			"Capture shorthand for probability of win — an evidence-based judgment about competitive position, not a finance spreadsheet by itself.",
		chapterId: "contractor-decision-system",
	},
	{
		id: "bp",
		term: "B&P",
		aliases: ["bid and proposal", "Bid and Proposal", "B and P"],
		definition:
			"Bid and Proposal costs are the expense of preparing offers. B&P is an investment decision, separate from IR&D and from funded contract work.",
		chapterId: "contractor-decision-system",
	},
	{
		id: "ird",
		term: "IR&D",
		aliases: ["independent research and development", "Independent Research and Development"],
		definition:
			"Independent Research and Development is company-funded technical effort, distinct from bid and proposal costs and from contract performance work.",
		chapterId: "contractor-decision-system",
	},
	{
		id: "color-team",
		term: "Color team",
		aliases: [
			"color teams",
			"Black Hat",
			"black hat",
			"Red Team",
			"Blue Team",
			"Pink Team",
			"Gold Team",
			"Red team",
			"Blue team",
		],
		definition:
			"Structured proposal reviews (and Black Hat competitive assessments) that pressure-test strategy, compliance, and win themes before submission.",
		chapterId: "case-agency-will-score",
	},
];

/** Full glossary: curated terms plus chapter topic tags used on shelf cards. */
export const GLOSSARY_TERMS: GlossaryTerm[] = [...CURATED_GLOSSARY_TERMS, ...CHAPTER_TOPIC_TERMS];

const byId = new Map(GLOSSARY_TERMS.map((t) => [t.id, t]));

/** Normalize tag / alias keys for shelf-pill lookup. */
function normalizeKey(value: string): string {
	return value.trim().toLowerCase().replace(/\s+/g, "-");
}

const byTagKey = new Map<string, GlossaryTerm>();
for (const term of GLOSSARY_TERMS) {
	const keys = [
		normalizeKey(term.id),
		normalizeKey(term.term),
		...(term.id.startsWith("topic-") ? [normalizeKey(term.id.slice("topic-".length))] : []),
		...(term.aliases ?? []).map(normalizeKey),
	];
	for (const key of keys) {
		const existing = byTagKey.get(key);
		// Prefer curated entries over topic-prefixed duplicates on key collisions.
		if (existing && !existing.id.startsWith("topic-") && term.id.startsWith("topic-")) {
			continue;
		}
		if (!existing || existing.id.startsWith("topic-")) {
			byTagKey.set(key, term);
		}
	}
}

export function getTerm(id: string): GlossaryTerm | undefined {
	return byId.get(id);
}

/** Resolve a chapter card tag (pill) to its glossary entry. */
export function resolveChapterTag(tag: string): GlossaryTerm | undefined {
	return byTagKey.get(normalizeKey(tag));
}

/** Fallback when a tag has no glossary entry: `market-research` → `Market Research`. */
function formatKebabAsTitle(tag: string): string {
	const parts = tag
		.trim()
		.split(/[-_]+/)
		.filter(Boolean);
	if (parts.length <= 1) {
		return tag.trim();
	}
	return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

/**
 * Display label for a shelf topic pill.
 * Prefers the curated glossary `term`; otherwise formats the kebab-case key.
 */
export function topicPillLabel(tag: string): string {
	return resolveChapterTag(tag)?.term ?? formatKebabAsTitle(tag);
}

/** All match strings for a term (canonical + aliases), longest first. */
export function matchStringsForTerm(term: GlossaryTerm): string[] {
	return [term.term, ...(term.aliases ?? [])].sort((a, b) => b.length - a.length);
}

export type GlossaryMatchPattern = {
	termId: string;
	label: string;
};

/** Flat list of match labels → term id, longest label first (for regex alternation). */
export function allMatchPatterns(): GlossaryMatchPattern[] {
	const out: GlossaryMatchPattern[] = [];
	for (const term of GLOSSARY_TERMS) {
		for (const label of matchStringsForTerm(term)) {
			out.push({ termId: term.id, label });
		}
	}
	out.sort((a, b) => b.label.length - a.label.length);
	return out;
}

/** Terms sorted A–Z by display term (for glossary browse). */
export function glossarySorted(): GlossaryTerm[] {
	return [...GLOSSARY_TERMS].sort((a, b) =>
		a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
	);
}

/** Group sorted terms by first letter (A–Z, or # for non-letters). */
export function glossaryByLetter(): { letter: string; terms: GlossaryTerm[] }[] {
	const groups = new Map<string, GlossaryTerm[]>();
	for (const term of glossarySorted()) {
		const ch = term.term.charAt(0).toUpperCase();
		const letter = /[A-Z]/.test(ch) ? ch : "#";
		const list = groups.get(letter) ?? [];
		list.push(term);
		groups.set(letter, list);
	}
	return [...groups.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([letter, terms]) => ({ letter, terms }));
}
