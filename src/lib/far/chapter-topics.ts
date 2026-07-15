import type { GlossaryTerm } from "./glossary-types";

/** Topic tags from study chapter cards — shown under “Topics covered” and in the glossary. */
export const CHAPTER_TOPIC_TERMS: GlossaryTerm[] = [
	{
		id: "topic-alliant",
		term: "Alliant",
		definition:
			"GSA’s Alliant GWAC family for IT services — check which generation is orderable before promising access.",
		autoLink: false,
	},
	{
		id: "topic-far-8.405",
		term: "FAR 8.405",
		aliases: ["FAR-8.405"],
		definition:
			"FAR 8.405 covers ordering procedures under Federal Supply Schedules, including competition and limited-sources rules.",
		autoLink: false,
	},
	{
		id: "topic-gsa-mas",
		term: "GSA MAS",
		aliases: ["GSA-MAS"],
		definition:
			"GSA Multiple Award Schedule — the primary Federal Supply Schedule vehicle for commercial buys under FAR Subpart 8.4.",
		autoLink: false,
	},
	{
		id: "topic-nitaac",
		term: "NITAAC",
		definition:
			"NIH’s IT acquisition center that manages GWACs such as CIO-SP for health and civilian IT buys.",
		autoLink: false,
	},
	{
		id: "topic-oasis+",
		term: "OASIS+",
		definition:
			"GSA’s OASIS+ IDIQ suite for non-IT professional services across multiple domains.",
		autoLink: false,
	},
	{
		id: "topic-sewp",
		term: "SEWP",
		definition:
			"NASA’s Solutions for Enterprise-Wide Procurement GWAC for IT products and services.",
		autoLink: false,
	},
	{
		id: "topic-sin",
		term: "SIN",
		definition:
			"Special Item Number — a MAS catalog category that defines what products or services a Schedule holder can sell.",
		autoLink: false,
	},
	{
		id: "topic-schedule-bpa",
		term: "Schedule BPA",
		aliases: ["Schedule-BPA"],
		definition:
			"A Blanket Purchase Agreement under a GSA Schedule used to streamline repetitive Schedule orders.",
		autoLink: false,
	},
	{
		id: "topic-accounting-system",
		term: "Accounting System",
		aliases: ["accounting-system"],
		definition:
			"The contractor’s cost accounting system — often required or reviewed for cost-reimbursement work.",
		autoLink: false,
	},
	{
		id: "topic-acquisition-path",
		term: "Acquisition Path",
		aliases: ["acquisition-path"],
		definition:
			"The chosen buying method (Schedule, GWAC, open market, etc.) that shapes competition and timeline.",
		autoLink: false,
	},
	{
		id: "topic-advanced",
		term: "Advanced",
		definition:
			"An advanced study topic — assumes the basics and goes deeper into edge cases, strategy, or nuance.",
		autoLink: false,
	},
	{
		id: "topic-amendments",
		term: "Amendments",
		definition:
			"Changes to a solicitation issued before award — can alter instructions, evaluation, or requirements.",
		autoLink: false,
	},
	{
		id: "topic-authority",
		term: "Authority",
		definition:
			"Who may bind the Government or the contractor — warrants, designations, and internal approval lanes.",
		autoLink: false,
	},
	{
		id: "topic-biased-ground-rules",
		term: "Biased Ground Rules",
		aliases: ["biased-ground-rules"],
		definition:
			"An OCI concern where a firm shaped requirements in a way that unfairly favors its later proposal.",
		autoLink: false,
	},
	{
		id: "topic-brand-name-or-equal",
		term: "Brand Name Or Equal",
		aliases: ["brand-name-or-equal"],
		definition:
			"A specification that names a brand but allows equals meeting stated salient characteristics.",
		autoLink: false,
	},
	{
		id: "topic-bridge",
		term: "Bridge",
		definition:
			"A short-term contract or order used to keep services running while a follow-on competition completes.",
		autoLink: false,
	},
	{
		id: "topic-budget",
		term: "Budget",
		definition:
			"Planned funding for a requirement — necessary but not the same as an obligation or award.",
		autoLink: false,
	},
	{
		id: "topic-call-plan",
		term: "Call Plan",
		aliases: ["call-plan"],
		definition:
			"A structured outreach plan for customer and stakeholder engagement during capture.",
		autoLink: false,
	},
	{
		id: "topic-capture-craft",
		term: "Capture Craft",
		aliases: ["capture-craft"],
		definition:
			"The contractor’s internal process for positioning, bidding, and winning — gates, themes, and evidence.",
		autoLink: false,
	},
	{
		id: "topic-capture-practice",
		term: "Capture Practice",
		aliases: ["capture-practice"],
		definition:
			"Field practice for capture teams — how policy shows up in real pursuit decisions.",
		autoLink: false,
	},
	{
		id: "topic-cardinal-change",
		term: "Cardinal Change",
		aliases: ["cardinal-change"],
		definition:
			"An out-of-scope change so significant it is effectively a new procurement, not a modification.",
		autoLink: false,
	},
	{
		id: "topic-ceiling-burn",
		term: "Ceiling Burn",
		aliases: ["ceiling-burn"],
		definition:
			"How quickly an IDIQ or order ceiling is being consumed — a portfolio and delivery risk signal.",
		autoLink: false,
	},
	{
		id: "topic-channel-strategy",
		term: "Channel Strategy",
		aliases: ["channel-strategy"],
		definition:
			"How a firm reaches the buy: prime, subcontract, Schedule holder, or distributor path.",
		autoLink: false,
	},
	{
		id: "topic-cica-stay",
		term: "Cica Stay",
		aliases: ["cica-stay"],
		definition:
			"The automatic stay of performance after a timely GAO protest, absent an override.",
		autoLink: false,
	},
	{
		id: "topic-color-reviews",
		term: "Color Reviews",
		aliases: ["color-reviews"],
		definition:
			"Structured color-team proposal reviews (pink, red, gold, etc.) before submission.",
		autoLink: false,
	},
	{
		id: "topic-comments",
		term: "Comments",
		definition:
			"Industry feedback on draft solicitations or RFIs that can still shape the final RFP.",
		autoLink: false,
	},
	{
		id: "topic-competition",
		term: "Competition",
		definition:
			"Full and open or limited competition rules that govern who may bid and how awards are made.",
		autoLink: false,
	},
	{
		id: "topic-compliance",
		term: "Compliance",
		definition:
			"Meeting solicitation instructions and mandatory requirements — often scored pass/fail before quality.",
		autoLink: false,
	},
	{
		id: "topic-compliance-matrix",
		term: "Compliance Matrix",
		aliases: ["compliance-matrix"],
		definition:
			"A crosswalk that maps every solicitation requirement to proposal location and owner.",
		autoLink: false,
	},
	{
		id: "topic-consent",
		term: "Consent",
		definition:
			"Contracting officer consent required before certain subcontracts under the prime contract.",
		autoLink: false,
	},
	{
		id: "topic-continuing-resolution",
		term: "Continuing Resolution",
		aliases: ["continuing-resolution"],
		definition:
			"Temporary funding that generally continues existing operations and restricts new starts.",
		autoLink: false,
	},
	{
		id: "topic-contract",
		term: "Contract",
		definition:
			"A mutually binding legal relationship obligating the seller to furnish supplies/services and the buyer to pay.",
		autoLink: false,
	},
	{
		id: "topic-contrast",
		term: "Contrast",
		definition:
			"A contrast topic — clarifies two lookalike ideas by showing how they differ in practice.",
		autoLink: false,
	},
	{
		id: "topic-corrective-action",
		term: "Corrective Action",
		aliases: ["corrective-action"],
		definition:
			"Agency action after a protest sustain — amend, re-evaluate, re-solicit, or other remedies.",
		autoLink: false,
	},
	{
		id: "topic-cost-realism",
		term: "Cost Realism",
		aliases: ["cost-realism"],
		definition:
			"Evaluation of whether proposed costs are realistic for the work under cost-reimbursement awards.",
		autoLink: false,
	},
	{
		id: "topic-decision",
		term: "Decision",
		definition:
			"A decision topic — frames a choice capture teams make and the criteria that should drive it.",
		autoLink: false,
	},
	{
		id: "topic-definition",
		term: "Definition",
		definition:
			"A definition topic — introduces a core FAR or capture term and what it means in the field.",
		autoLink: false,
	},
	{
		id: "topic-discussions",
		term: "Discussions",
		definition:
			"Exchanges after establishing a competitive range that may lead to proposal revisions.",
		autoLink: false,
	},
	{
		id: "topic-draft-rfp",
		term: "Draft RFP",
		aliases: ["draft-rfp"],
		definition:
			"An early solicitation draft released for industry comment before the final RFP.",
		autoLink: false,
	},
	{
		id: "topic-early-discovery",
		term: "Early Discovery",
		aliases: ["early-discovery"],
		definition:
			"Pre-RFP research and engagement that shapes understanding of need, budget, and competitive position.",
		autoLink: false,
	},
	{
		id: "topic-early-exchange",
		term: "Early Exchange",
		aliases: ["early-exchange"],
		definition:
			"Permitted pre-solicitation exchanges such as industry days, one-on-ones, and draft RFPs.",
		autoLink: false,
	},
	{
		id: "topic-ebuy",
		term: "eBuy",
		definition:
			"GSA eBuy — the electronic RFQ tool commonly used for Schedule competitions.",
		autoLink: false,
	},
	{
		id: "topic-economics",
		term: "Economics",
		definition:
			"Price, cost, and margin realities that affect bid/no-bid and solution strategy.",
		autoLink: false,
	},
	{
		id: "topic-eligibility",
		term: "Eligibility",
		definition:
			"Whether a firm may compete — size status, vehicle holding, responsibility, and solicitation filters.",
		autoLink: false,
	},
	{
		id: "topic-escalation",
		term: "Escalation",
		definition:
			"Raising an issue to higher authority when local guidance or direction is unclear or improper.",
		autoLink: false,
	},
	{
		id: "topic-ethics",
		term: "Ethics",
		definition:
			"Procurement integrity and conflict rules that constrain contacts, gifts, and revolving-door moves.",
		autoLink: false,
	},
	{
		id: "topic-evaluation",
		term: "Evaluation",
		definition:
			"How the agency scores or rates offers against stated factors and subfactors.",
		autoLink: false,
	},
	{
		id: "topic-evidence",
		term: "Evidence",
		definition:
			"Proof in the proposal — past performance, resumes, data, and artifacts that support claims.",
		autoLink: false,
	},
	{
		id: "topic-exceptions",
		term: "Exceptions",
		definition:
			"Stated departures from solicitation terms — risky unless the solicitation allows them.",
		autoLink: false,
	},
	{
		id: "topic-expiration",
		term: "Expiration",
		definition:
			"End of a contract, option, or vehicle ordering period — leftover ceiling does not extend access.",
		autoLink: false,
	},
	{
		id: "topic-failure-mode",
		term: "Failure Mode",
		aliases: ["failure-mode"],
		definition:
			"A failure-mode topic — names a common mistake and how to spot or avoid it.",
		autoLink: false,
	},
	{
		id: "topic-fairness",
		term: "Fairness",
		definition:
			"Equal treatment of offerors — information leveling, consistent evaluation, and protest risk.",
		autoLink: false,
	},
	{
		id: "topic-far-9-6",
		term: "FAR 9.6",
		aliases: ["far-9-6"],
		definition:
			"FAR Subpart 9.6 on contractor team arrangements and related responsibility/OCI concerns.",
		autoLink: false,
	},
	{
		id: "topic-far-navigation",
		term: "FAR navigation",
		aliases: ["far-navigation"],
		definition:
			"How FAR citations are structured (part, subpart, section, paragraph) so you can find the rule.",
		autoLink: false,
	},
	{
		id: "topic-ffp",
		term: "FFP",
		definition:
			"Firm-fixed-price — the contractor bears cost risk for delivering the stated work at the agreed price.",
		autoLink: false,
	},
	{
		id: "topic-field-guide",
		term: "Field Guide",
		aliases: ["field-guide"],
		definition:
			"A field-guide topic — practical how-to framing for applying the idea in day-to-day capture work.",
		autoLink: false,
	},
	{
		id: "topic-filters",
		term: "Filters",
		definition:
			"Solicitation or vehicle constraints that shrink the competitive field (NAICS, set-aside, clearance).",
		autoLink: false,
	},
	{
		id: "topic-final-rfp",
		term: "Final RFP",
		aliases: ["final-rfp"],
		definition:
			"The official solicitation against which offers are submitted and evaluated.",
		autoLink: false,
	},
	{
		id: "topic-fiscal-law",
		term: "Fiscal Law",
		aliases: ["fiscal-law"],
		definition:
			"Purpose, time, and amount rules that constrain how appropriated funds may be used.",
		autoLink: false,
	},
	{
		id: "topic-forecast",
		term: "Forecast",
		definition:
			"An agency’s planned procurement notice — a market signal, not an award or obligation.",
		autoLink: false,
	},
	{
		id: "topic-forum-selection",
		term: "Forum Selection",
		aliases: ["forum-selection"],
		definition:
			"Choosing among agency protest, GAO, or COFC based on timing, remedy, and strategy.",
		autoLink: false,
	},
	{
		id: "topic-fpr",
		term: "FPR",
		definition:
			"Final proposal revision — the last offer submitted after discussions.",
		autoLink: false,
	},
	{
		id: "topic-funding",
		term: "Funding",
		definition:
			"Budget authority and obligation status — what is available versus what is committed on contract.",
		autoLink: false,
	},
	{
		id: "topic-funding-risk",
		term: "Funding Risk",
		aliases: ["funding-risk"],
		definition:
			"Risk that money will not arrive on time or in the amount assumed in the capture plan.",
		autoLink: false,
	},
	{
		id: "topic-gate-discipline",
		term: "Gate Discipline",
		aliases: ["gate-discipline"],
		definition:
			"Running bid/no-bid and color-team gates with real kill criteria, not rubber stamps.",
		autoLink: false,
	},
	{
		id: "topic-gates",
		term: "Gates",
		definition:
			"Formal capture decision points (pursue, bid, price-to-win) with exit criteria.",
		autoLink: false,
	},
	{
		id: "topic-ghostwriting",
		term: "Ghostwriting",
		definition:
			"Improperly drafting government requirements or documents in a way that creates OCI risk.",
		autoLink: false,
	},
	{
		id: "topic-hard-gate",
		term: "Hard Gate",
		aliases: ["hard-gate"],
		definition:
			"A must-pass constraint — miss it and the pursuit should stop regardless of PWin optimism.",
		autoLink: false,
	},
	{
		id: "topic-holder",
		term: "Holder",
		definition:
			"A firm awarded a place on a multi-award vehicle and therefore eligible for orders.",
		autoLink: false,
	},
	{
		id: "topic-impaired-objectivity",
		term: "Impaired Objectivity",
		aliases: ["impaired-objectivity"],
		definition:
			"An OCI where a firm’s judgment in performing work could be biased by other interests.",
		autoLink: false,
	},
	{
		id: "topic-incumbent",
		term: "Incumbent",
		definition:
			"The current performer — often advantaged on knowledge, but not automatically entitled to win.",
		autoLink: false,
	},
	{
		id: "topic-industry-day",
		term: "Industry Day",
		aliases: ["industry-day"],
		definition:
			"A public exchange event about an upcoming buy — a signal and Q&A forum, not an award.",
		autoLink: false,
	},
	{
		id: "topic-information-leveling",
		term: "Information Leveling",
		aliases: ["information-leveling"],
		definition:
			"Sharing material information with all offerors so no one has an unfair advantage.",
		autoLink: false,
	},
	{
		id: "topic-intervention",
		term: "Intervention",
		definition:
			"A successful offeror joining a protest to defend the award.",
		autoLink: false,
	},
	{
		id: "topic-investment-decision",
		term: "Investment Decision",
		aliases: ["investment-decision"],
		definition:
			"Whether the expected value of a pursuit justifies bid cost and opportunity cost.",
		autoLink: false,
	},
	{
		id: "topic-key-personnel",
		term: "Key Personnel",
		aliases: ["key-personnel"],
		definition:
			"Named individuals whose qualifications are evaluated; substitutions may need approval.",
		autoLink: false,
	},
	{
		id: "topic-large-prime",
		term: "Large Prime",
		aliases: ["large-prime"],
		definition:
			"A large-business prime role — shapes subcontracting plan, teaming, and set-aside strategy.",
		autoLink: false,
	},
	{
		id: "topic-leak",
		term: "Leak",
		definition:
			"Unauthorized disclosure of procurement-sensitive information — integrity and competition risk.",
		autoLink: false,
	},
	{
		id: "topic-lifecycle",
		term: "Lifecycle",
		definition:
			"The acquisition path from need through market research, solicitation, award, order, and performance.",
		autoLink: false,
	},
	{
		id: "topic-limited-sources",
		term: "Limited Sources",
		aliases: ["limited-sources"],
		definition:
			"Schedule ordering with fewer than the normally required sources, requiring justification.",
		autoLink: false,
	},
	{
		id: "topic-los",
		term: "LOS",
		definition:
			"Level of supply / related logistics shorthand in some vehicle contexts — confirm local usage.",
		autoLink: false,
	},
	{
		id: "topic-margin",
		term: "Margin",
		definition:
			"Profit left after cost — priced into FFP strategy and monitored on cost-type burn.",
		autoLink: false,
	},
	{
		id: "topic-market-research",
		term: "Market Research",
		aliases: ["market-research"],
		definition:
			"The Government’s process to understand industry capability before choosing an acquisition path.",
		autoLink: false,
	},
	{
		id: "topic-mitigation",
		term: "Mitigation",
		definition:
			"Actions to reduce OCI, risk, or proposal weakness to an acceptable level.",
		autoLink: false,
	},
	{
		id: "topic-nda",
		term: "NDA",
		definition:
			"Non-disclosure agreement used in teaming to protect pursuit-sensitive information.",
		autoLink: false,
	},
	{
		id: "topic-no-bid",
		term: "No Bid",
		aliases: ["no-bid"],
		definition:
			"A deliberate decision not to submit an offer after gate review.",
		autoLink: false,
	},
	{
		id: "topic-notice-types",
		term: "Notice Types",
		aliases: ["notice-types"],
		definition:
			"Categories of SAM.gov notices (sources sought, presolicitation, solicitation, award, etc.).",
		autoLink: false,
	},
	{
		id: "topic-notices",
		term: "Notices",
		definition:
			"Public procurement announcements that signal upcoming or active buying activity.",
		autoLink: false,
	},
	{
		id: "topic-on-ramp",
		term: "On Ramp",
		aliases: ["on-ramp"],
		definition:
			"A later opportunity to join an existing multi-award vehicle during its ordering period.",
		autoLink: false,
	},
	{
		id: "topic-one-on-one",
		term: "One On One",
		aliases: ["one-on-one"],
		definition:
			"A private exchange with the Government during market research — still subject to integrity rules.",
		autoLink: false,
	},
	{
		id: "topic-open-market",
		term: "Open Market",
		aliases: ["open-market"],
		definition:
			"Buying outside Schedule/GWAC procedures — generally fuller competition under FAR Part 15 or 13.",
		autoLink: false,
	},
	{
		id: "topic-open-market-items",
		term: "Open Market Items",
		aliases: ["open-market-items"],
		definition:
			"Items not on Schedule that may be added to a Schedule order only under tight conditions.",
		autoLink: false,
	},
	{
		id: "topic-options",
		term: "Options",
		definition:
			"Unilateral rights to extend term or buy more under stated option terms and funding.",
		autoLink: false,
	},
	{
		id: "topic-orals",
		term: "Orals",
		definition:
			"Oral presentations evaluated as part of the source selection.",
		autoLink: false,
	},
	{
		id: "topic-order-competition",
		term: "Order Competition",
		aliases: ["order-competition"],
		definition:
			"Competition among vehicle holders for a task or delivery order.",
		autoLink: false,
	},
	{
		id: "topic-ordering-guide",
		term: "Ordering Guide",
		aliases: ["ordering-guide"],
		definition:
			"The vehicle’s instructions for how agencies place and compete orders.",
		autoLink: false,
	},
	{
		id: "topic-ordering-period",
		term: "Ordering Period",
		aliases: ["ordering-period"],
		definition:
			"The window during which orders may be placed against a vehicle generation.",
		autoLink: false,
	},
	{
		id: "topic-ostensible-subcontractor",
		term: "Ostensible Subcontractor",
		aliases: ["ostensible-subcontractor"],
		definition:
			"A size-status affiliation risk where a sub is effectively performing as the prime.",
		autoLink: false,
	},
	{
		id: "topic-outcomes",
		term: "Outcomes",
		definition:
			"Mission results the agency cares about — distinct from contract outputs or activity metrics.",
		autoLink: false,
	},
	{
		id: "topic-ownership",
		term: "Ownership",
		definition:
			"Internal accountability for capture, proposal, pricing, and delivery decisions.",
		autoLink: false,
	},
	{
		id: "topic-palt",
		term: "PALT",
		definition:
			"Procurement Administrative Lead Time — how long the agency typically takes to award.",
		autoLink: false,
	},
	{
		id: "topic-partner-discovery",
		term: "Partner Discovery",
		aliases: ["partner-discovery"],
		definition:
			"Finding and vetting teammates who close capability, past performance, or socioeconomic gaps.",
		autoLink: false,
	},
	{
		id: "topic-past-performance",
		term: "Past Performance",
		aliases: ["past-performance"],
		definition:
			"Evidence of prior contract performance used in evaluation and responsibility determinations.",
		autoLink: false,
	},
	{
		id: "topic-performance-based-acquisition",
		term: "Performance Based Acquisition",
		aliases: ["performance-based-acquisition"],
		definition:
			"Structuring work around outcomes and metrics rather than prescribing how-to process.",
		autoLink: false,
	},
	{
		id: "topic-piid",
		term: "PIID",
		definition:
			"Procurement Instrument Identifier — the unique ID for a contract, order, or agreement.",
		autoLink: false,
	},
	{
		id: "topic-pipeline-hygiene",
		term: "Pipeline Hygiene",
		aliases: ["pipeline-hygiene"],
		definition:
			"Keeping pursuit data current — dates, amounts, stage, and kill status.",
		autoLink: false,
	},
	{
		id: "topic-portfolio",
		term: "Portfolio",
		definition:
			"The set of vehicles, bids, and contracts a firm manages as a whole.",
		autoLink: false,
	},
	{
		id: "topic-prejudice",
		term: "Prejudice",
		definition:
			"Protest showing that an error likely affected the protester’s chance of award.",
		autoLink: false,
	},
	{
		id: "topic-price-to-win",
		term: "Price To Win",
		aliases: ["price-to-win"],
		definition:
			"The competitive price target reverse-engineered from customer budget and rival positioning.",
		autoLink: false,
	},
	{
		id: "topic-pricing",
		term: "Pricing",
		definition:
			"How the offer is priced — structure, realism, and alignment to evaluation and cost risk.",
		autoLink: false,
	},
	{
		id: "topic-procurement-integrity",
		term: "Procurement Integrity",
		aliases: ["procurement-integrity"],
		definition:
			"Rules barring disclosing or obtaining contractor bid or proposal information improperly.",
		autoLink: false,
	},
	{
		id: "topic-protest-timing",
		term: "Protest Timing",
		aliases: ["protest-timing"],
		definition:
			"Strict deadlines for filing protests at GAO, the agency, or COFC.",
		autoLink: false,
	},
	{
		id: "topic-qualification",
		term: "Qualification",
		definition:
			"Meeting mandatory experience, clearance, or certification thresholds to be eligible.",
		autoLink: false,
	},
	{
		id: "topic-recompete",
		term: "Recompete",
		definition:
			"A follow-on competition for work currently performed under an expiring contract.",
		autoLink: false,
	},
	{
		id: "topic-regate",
		term: "Regate",
		definition:
			"Re-running a bid gate when facts change — budget, requirements, or competitive intel.",
		autoLink: false,
	},
	{
		id: "topic-related-notices",
		term: "Related Notices",
		aliases: ["related-notices"],
		definition:
			"Linked SAM notices that form one buy’s trail from forecast through award.",
		autoLink: false,
	},
	{
		id: "topic-repetitive-needs",
		term: "Repetitive Needs",
		aliases: ["repetitive-needs"],
		definition:
			"Recurring requirements that may justify BPAs or other streamlined ordering tools.",
		autoLink: false,
	},
	{
		id: "topic-responsibility",
		term: "Responsibility",
		definition:
			"FAR Part 9 determination that an offeror can perform — finances, integrity, capacity.",
		autoLink: false,
	},
	{
		id: "topic-revolving-door",
		term: "Revolving Door",
		aliases: ["revolving-door"],
		definition:
			"Post-government employment restrictions that limit certain contacts and representations.",
		autoLink: false,
	},
	{
		id: "topic-sam-data-bank",
		term: "SAM data bank",
		aliases: ["sam-data-bank"],
		definition:
			"SAM exclusions and related responsibility data used in award eligibility checks.",
		autoLink: false,
	},
	{
		id: "topic-sam-gov",
		term: "SAM.gov",
		aliases: ["sam-gov"],
		definition:
			"System for Award Management — registration, exclusions, and public opportunity notices.",
		autoLink: false,
	},
	{
		id: "topic-scope",
		term: "Scope",
		definition:
			"What the contract or order authorizes — out-of-scope work needs a new procurement path.",
		autoLink: false,
	},
	{
		id: "topic-source-selection",
		term: "Source Selection",
		aliases: ["source-selection"],
		definition:
			"The formal process and decision that chooses an awardee under stated evaluation criteria.",
		autoLink: false,
	},
	{
		id: "topic-stop-work",
		term: "Stop Work",
		aliases: ["stop-work"],
		definition:
			"An order pausing performance — common after protest stays or funding issues.",
		autoLink: false,
	},
	{
		id: "topic-subcontracting",
		term: "Subcontracting",
		definition:
			"Work performed by another firm under the prime — consent, flowdowns, and plans may apply.",
		autoLink: false,
	},
	{
		id: "topic-subcontracting-plan",
		term: "Subcontracting Plan",
		aliases: ["subcontracting-plan"],
		definition:
			"Required plan for large businesses on certain contracts describing small business participation.",
		autoLink: false,
	},
	{
		id: "topic-submission",
		term: "Submission",
		definition:
			"Delivering the proposal by the stated time, place, and format rules.",
		autoLink: false,
	},
	{
		id: "topic-sunk-cost",
		term: "Sunk Cost",
		aliases: ["sunk-cost"],
		definition:
			"Past bid investment that should not, by itself, justify continuing a weak pursuit.",
		autoLink: false,
	},
	{
		id: "topic-supplements",
		term: "Supplements",
		definition:
			"Agency FAR supplements (DFARS, etc.) that add to or implement the FAR.",
		autoLink: false,
	},
	{
		id: "topic-task-order",
		term: "Task Order",
		aliases: ["task-order"],
		definition:
			"An order for services under an IDIQ or similar vehicle.",
		autoLink: false,
	},
	{
		id: "topic-teaming",
		term: "Teaming",
		definition:
			"Structuring primes, subs, and teammates for capability, past performance, and compliance.",
		autoLink: false,
	},
	{
		id: "topic-teaming-agreement",
		term: "Teaming Agreement",
		aliases: ["teaming-agreement"],
		definition:
			"A pre-award agreement among teammates on roles, exclusivity, and proposal duties.",
		autoLink: false,
	},
	{
		id: "topic-timeliness",
		term: "Timeliness",
		definition:
			"Meeting filing, proposal, or debriefing deadlines — late is usually out.",
		autoLink: false,
	},
	{
		id: "topic-ucf",
		term: "UCF",
		definition:
			"Uniform Contract Format — standard solicitation/contract section layout (A–M) in many buys.",
		autoLink: false,
	},
	{
		id: "topic-unequal-access",
		term: "Unequal Access",
		aliases: ["unequal-access"],
		definition:
			"An OCI where a firm has nonpublic information that gives an unfair competitive advantage.",
		autoLink: false,
	},
	{
		id: "topic-usaspending",
		term: "Usaspending",
		definition:
			"Public spending data useful for competitor and customer intelligence.",
		autoLink: false,
	},
	{
		id: "topic-vehicle-access",
		term: "Vehicle Access",
		aliases: ["vehicle-access"],
		definition:
			"Whether your team can take orders on a vehicle — holding status, teaming, or CTA path.",
		autoLink: false,
	},
	{
		id: "topic-vehicle-selection",
		term: "Vehicle Selection",
		aliases: ["vehicle-selection"],
		definition:
			"Choosing which contract vehicle fits the requirement’s scope, buyers, and timeline.",
		autoLink: false,
	},
	{
		id: "topic-walk-away",
		term: "Walk Away",
		aliases: ["walk-away"],
		definition:
			"Leaving a pursuit when gates fail — protecting bid budget and capture focus.",
		autoLink: false,
	},
];
