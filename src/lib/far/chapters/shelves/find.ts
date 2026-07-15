import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Find shelf — desk-reference chapters for spotting, validating, and staging
 * opportunities before a solicitation exists.
 *
 * Reading shape: each piece is a definition card (term title + expanded glossary
 * teach + optional Watch for + citation/quote).
 */
export const FIND_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "lead-not-solicitation",
		unitId: "find",
		title: "Sources-sought notices, RFIs, and true solicitations",
		summary:
			"Defines how to classify a posted notice so capture does not treat market-research responses like an RFP.",
		intro:
			"Terms for distinguishing a discoverable lead from a live competition — sources sought, forecasts, and solicitations are not interchangeable.",
		tags: ["sources-sought", "notice-types", "market-research", "sam-gov"],
		readingMinutes: 6,
		suggestedOrder: 1,
		pieces: [
			{
				id: "notice-type-before-spend",
				title: "Notice type classification",
				teach:
					"Notice type classification is the intake step of naming what a SAM.gov or agency posting actually is before staffing a response. A sources-sought or similar market-research notice asks for capability, capacity, and planning input — it can shape acquisition strategy but does not request an offer the Government can accept to form a contract. A solicitation is the instrument that invites offers or quotations for award. Label the lead by notice type at intake, then decide response depth: market-research answers earn early positioning; solicitation responses earn evaluation. If the notice has no proposal instructions and asks only for capability or ROM data, treat it as research input — valuable, nonbinding, and still worth doing well.",
				watchFor:
					"Don't treat a sources sought as automatic award if you answer first, as a guarantee of later competition structure, or as a cue to submit binding price and a full technical volume when the notice only asks for capability or ROM data.",
				citation: "SAM.gov Opportunity Management API — Notice Types; FAR 10.002",
				sourceUrl: "https://open.gsa.gov/api/opportunities-api/",
				sourceKind: "guidance",
			},
			{
				id: "sources-sought-as-evidence",
				title: "Sources-sought response",
				teach:
					"A sources-sought response is an evidence-backed reply to a market-research notice under FAR Part 10. Agencies may contact knowledgeable industry sources and use that input to judge capabilities, customary practices, competition, and acquisition approach. A concise answer that maps each posted question to past performance, vehicle access, and transition insight creates a usable market-research record — how you show capable sources and viable buying paths without pretending the notice is already an RFP. Prefer specific evidence over corporate brochure language; keep ROM or pricing only if the notice asked for it and label assumptions.",
				watchFor:
					"Don't confuse a sources-sought reply with a binding proposal. It is not a place to dump unrequested firm pricing, and it is not a substitute for later Section L/M compliance when a real solicitation arrives.",
				citation: "FAR 10.002(b)(2)",
				sourceUrl: "https://www.acquisition.gov/far/10.002",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 10.002 — Procedures",
				url: "https://www.acquisition.gov/far/10.002",
				kind: "controlling-authority",
			},
			{
				label: "SAM.gov Contract Opportunities",
				url: "https://sam.gov/opportunities",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "radar-not-keyword",
		unitId: "find",
		title: "SAM.gov filters, agency forecasts, and vehicle channels",
		summary:
			"Defines a practical discovery setup: filter stacks, forecasts, and vehicle/eBuy channels that surface early demand systematically.",
		intro:
			"Vocabulary for coverage design — intersecting filters, saved searches, agency forecasts, and vehicle-only portals.",
		tags: ["sam-gov", "filters", "forecast", "ebuy", "early-discovery"],
		readingMinutes: 7,
		suggestedOrder: 2,
		pieces: [
			{
				id: "filter-stack-first-pass",
				title: "SAM.gov filter stack",
				teach:
					"A SAM.gov filter stack combines department or office, NAICS, notice type, posted-date range, and response-deadline filters in advanced search. Signed-in users can save searches. Intersecting those dimensions raises precision without treating one keyword as authoritative — the standing radar for each account. Broaden temporarily when agency coding is noisy; do not permanently exclude presolicitations, sources sought, or justifications. If the first pass is still noisy, add NAICS and notice-type cuts after organization and date — not instead of them.",
				watchFor:
					"Don't filter only for solicitations and ignore everything earlier, or treat one broad keyword plus heroic manual reading as the standing operating picture.",
				citation: "SAM.gov — Contract Opportunities: Advanced Search and Saved Searches",
				sourceUrl: "https://sam.gov/opportunities",
				sourceKind: "guidance",
			},
			{
				id: "forecast-and-vehicle-channels",
				title: "Forecast and vehicle channels",
				teach:
					"Forecast and vehicle channels are discovery paths beyond public SAM.gov solicitations. Agency acquisition forecasts and OSDBU / small-business office channels surface civilian demand earlier than many solicitations. FAR 5.404-1(b)(3) requires released long-range estimates to say they use the best available information, are subject to modification, and are not binding. GSA eBuy requests are generally visible to eligible contract holders for the relevant category or SIN — not necessarily as same-day public SAM.gov solicitations. Maintain three tabs per account: public notices, agency forecasts / vendor updates, and vehicle portals for the categories you or partners hold.",
				watchFor:
					"Don't treat a forecast date as a committed solicitation date, or call an eBuy RFQ nonexistent because a public SAM.gov search is empty. Incumbent marketing pages and state/local expiration lists are not substitutes for federal forecast and vehicle channels.",
				citation: "Acquisition.gov — Agency Recurring Procurement Forecasts; FAR 5.404-1(b)(3); GSA Vendor Support Center — GSA eBuy",
				sourceUrl: "https://www.acquisition.gov/procurement-forecast",
				sourceKind: "guidance",
			},
		],
		furtherReading: [
			{
				label: "FAR 5.404-1 — Release of long-range acquisition estimates",
				url: "https://www.acquisition.gov/far/5.404-1",
				kind: "controlling-authority",
			},
			{
				label: "GSA Vendor Support Center — GSA eBuy",
				url: "https://vsc.gsa.gov/drupal/node/120",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "follow-identifiers",
		unitId: "find",
		title: "PIIDs, related notices, and award transaction data",
		summary:
			"Defines the identifiers and award-data sources that tell you which acquisition you are actually tracking.",
		intro:
			"Terms for following solicitation numbers, related-notice links, PIIDs, and modifications across SAM.gov and USAspending.",
		tags: ["piid", "related-notices", "sam-data-bank", "usaspending", "incumbent"],
		readingMinutes: 8,
		suggestedOrder: 3,
		pieces: [
			{
				id: "award-data-landscape",
				title: "Award data sources",
				teach:
					"Award data sources are the current public destinations for incumbent and spend reconstruction. Public FPDS search has transitioned to SAM.gov Contract Awards and Data Bank; USAspending remains the official open source for federal spending analysis and receives procurement data derived from that reporting stream. Treat FPDS as lineage vocabulary, not as the current public destination. Start every incumbent or spend reconstruction with SAM.gov award search / reports, then USAspending for transaction and spending analysis.",
				watchFor:
					"Don't confuse SAM.gov with pre-award only, USAspending with grants only, or Data Bank with forecasts that have no awards or modifications.",
				citation: "SAM.gov — Contract Award Data in SAM.gov",
				sourceUrl: "https://sam.gov/fpds",
				sourceKind: "guidance",
			},
			{
				id: "related-notice-and-transaction-chain",
				title: "Related notices and transaction chain",
				teach:
					"A related-notice chain connects sources sought, presolicitation, solicitation, amendments, justification, and award for one acquisition story in SAM.gov. A transaction chain follows PIIDs, parent IDVs, task orders, award and modification records, net obligations including deobligations, and potential value as a ceiling rather than revenue. Use the notice chain for requirement evolution when building recompete binders; use the PIID / modification trail for dates and money. Distinguish historical facts from assumptions about the next procurement — ceiling is not spend; continuity is not customer sentiment.",
				watchFor:
					"Don't treat the awardee's legal name alone as a reliable identity key, assume an award notice holds the full SOW and every amendment, or count potential value plus every child order as incumbent revenue. Negative obligations are not automatic proof of failed performance.",
				citation: "SAM.gov Opportunity Management API — Related Notices; USAspending — Analyst's Guide to Federal Spending Data",
				sourceUrl: "https://open.gsa.gov/api/opportunities-api/",
				sourceKind: "guidance",
			},
		],
		furtherReading: [
			{
				label: "SAM.gov Contract Data",
				url: "https://sam.gov/contract-data",
				kind: "guidance",
			},
			{
				label: "USAspending federal spending guide",
				url: "https://www.usaspending.gov/federal-spending-guide",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "backcast-recompete",
		unitId: "find",
		title: "Procurement lead time, recompete schedules, and bridges",
		summary:
			"Defines PALT and bridge justifications so recompete timing is planned backward from award need — not assumed from incumbency.",
		intro:
			"Terms for backsolving solicitation timing from a required award date and reading bridge justifications as schedule evidence.",
		tags: ["palt", "recompete", "bridge", "forecast", "expiration"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "palt-backsolve",
				title: "Procurement administrative lead time (PALT)",
				teach:
					"Procurement administrative lead time (PALT) is the time from solicitation of offers to contract award — not acquisition planning before solicitation. Backsolve solicitation timing from the required successor award date using the agency's planning assumption, then start discovery and shaping earlier than that anchor. Prefer a newer forecast award target over assuming the current end date can never move or that every option will be exercised. Track remaining options and bridge evidence as validation points; update the provisional window when newer official signals conflict with the old one.",
				watchFor:
					"Don't start PALT at incumbent expiration, treat an ultimate potential end date as proof every option will be exercised, or add lead time after performance ends — that is not how solicitation-to-award math works.",
				citation: "GAO-24-106528 — Defense Contracts: Award Lead Times; SAM.gov — Contract Data",
				sourceUrl: "https://www.gao.gov/products/gao-24-106528",
				sourceKind: "guidance",
			},
			{
				id: "bridge-as-timing-signal",
				title: "Bridge justification",
				teach:
					"A bridge justification is a posted document — under the applicable regime in FAR 6.305, 8.405-6(a)(2), or 16.505(b)(2)(ii)(D) — that can reveal continuity need, delay rationale, and extension period when a replacement competition is delayed. Successive bridges raise schedule-risk and incumbent-continuity assumptions and should move your backcast to the newest documented runway while you intensify monitoring. Use the document for what it proves; do not invent a final acquisition strategy the justification does not establish.",
				watchFor:
					"Don't read a bridge as proof the planned competition is canceled forever, treat repeated bridges as authorization for every future award as permanent sole source, or ignore posted justifications as if they had no capture value.",
				citation: "FAR 5.406; FAR 6.305; FAR 8.405-6(a)(2); FAR 16.505(b)(2)(ii)(D)",
				sourceUrl: "https://www.acquisition.gov/far/5.406",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "GAO-24-106528 — Award lead times",
				url: "https://www.gao.gov/products/gao-24-106528",
				kind: "guidance",
			},
			{
				label: "FAR 6.305 — Availability of the justification",
				url: "https://www.acquisition.gov/far/6.305",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "mission-vs-funds",
		unitId: "find",
		title: "Budget justifications, continuing resolutions, and obligation authority",
		summary:
			"Defines CBJ language versus CR limits versus obligation authority — mission intent is not the same as funding to award.",
		intro:
			"Terms for separating congressional budget language from appropriations and obligation authority — especially under continuing resolutions.",
		tags: ["budget", "appropriations", "continuing-resolution", "funding-risk"],
		readingMinutes: 6,
		suggestedOrder: 5,
		pieces: [
			{
				id: "cbj-is-directional",
				title: "Congressional budget justification (CBJ)",
				teach:
					"A congressional budget justification (CBJ) is an agency document that signals program priority in a budget request. It is not an appropriation, acquisition strategy, or contract action. FAR 32.702 bars obligations in excess of or in advance of available appropriations unless authorized. Capture should triangulate enacted funding and execution evidence with forecasts, market research, and notices before upgrading the lead. Keep the mission on the radar; keep the dollars provisional until you can point to authority and a buying path.",
				watchFor:
					"Don't confuse publication of a justification with authority to obligate the requested amount, treat absence of an award in USAspending as zero discovery value, or read a CBJ as proof of unrestricted competition under an incumbent's NAICS.",
				citation: "FAR 32.702",
				sourceUrl: "https://www.acquisition.gov/far/32.702",
				sourceKind: "controlling-authority",
			},
			{
				id: "cr-lowers-confidence",
				title: "Continuing resolution (CR)",
				teach:
					"A continuing resolution (CR) is a temporary appropriation whose exact restrictions and exceptions depend on enacted text. CRs commonly constrain or delay new activities. FAR 32.702 still requires available funds or authorized conditioning before contract execution, so a CR lowers near-term funding and award confidence until you verify the actual CR text and any program-specific anomaly language. Adjust confidence and timing when fiscal instruments change; keep validating rather than deleting the underlying mission need by assumption.",
				watchFor:
					"Don't treat a presidential budget request as funding for the award, assume a CR permanently prohibits every new contract, or leave timing and Pwin unchanged as if appropriations status had no relationship to obligation timing.",
				citation: "FAR 32.702; GAO-09-879",
				sourceUrl: "https://www.acquisition.gov/far/32.702",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 32.702 — Policy",
				url: "https://www.acquisition.gov/far/32.702",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "eligible-path",
		unitId: "find",
		title: "NAICS codes, set-asides, and vehicle access rules",
		summary:
			"Defines eligibility factors that decide whether you can prime, must partner, or should pass.",
		intro:
			"Terms for triaging size status under assigned NAICS, set-aside signals, and vehicle visibility before capture investment.",
		tags: ["set-aside", "naics", "eligibility", "ebuy", "partner-discovery"],
		readingMinutes: 7,
		suggestedOrder: 6,
		pieces: [
			{
				id: "setaside-naics-triage",
				title: "Set-aside and NAICS eligibility",
				teach:
					"Set-aside and NAICS eligibility is the gate that determines whether a concern may prime. FAR 19.102 ties the applicable size standard to the NAICS assigned to the acquisition. A total small-business set-aside excludes an other-than-small concern from priming. Early triage should mark current ineligibility to prime, validate the NAICS and set-aside signals, and discover qualified small-business partners and feasible workshare while the window is still open. Keep the lead if a compliant path exists; do not count it as unrestricted prime revenue on hope.",
				watchFor:
					"Don't erase the current eligibility signal because the notice is only a forecast, invent a false size representation from capability fit, or archive forever when subcontract and partner paths may still be live — ignoring the gate inflates the prime pipeline.",
				citation: "FAR 19.102; FAR 19.502-2",
				sourceUrl: "https://www.acquisition.gov/far/19.102",
				sourceKind: "controlling-authority",
			},
			{
				id: "vehicle-access-or-partner",
				title: "Vehicle access and eBuy visibility",
				teach:
					"Vehicle access and eBuy visibility determine who can see and respond to Schedule-category requests. eBuy visibility and response rights follow supported contracts and categories. Without applicable access, identify eligible holders who can prime, assess coverage of the requirement, and pursue a compliant subcontract role before the request window closes. Treat vehicle mismatch like set-aside mismatch: mark direct ineligibility, then staff a partner path with time left on the clock.",
				watchFor:
					"Don't share holder credentials so you can submit as if you held the category, wait passively for a future open-market competition when partners already have access, or assume a Schedule CTA cures lack of an applicable awarded category for your own quoted work.",
				citation: "GSA Vendor Support Center — GSA eBuy",
				sourceUrl: "https://vsc.gsa.gov/drupal/node/120",
				sourceKind: "guidance",
			},
		],
		furtherReading: [
			{
				label: "FAR 19.102 — Size standards",
				url: "https://www.acquisition.gov/far/19.102",
				kind: "controlling-authority",
			},
			{
				label: "FAR 19.502-2 — Total small business set-asides",
				url: "https://www.acquisition.gov/far/19.502-2",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "promote-evidence",
		unitId: "find",
		title: "Qualified opportunities, procurement integrity, and incumbent posture",
		summary:
			"Defines when a lead becomes a qualified opportunity, what integrity rules bound usable information, and how to treat incumbent status as a fact.",
		intro:
			"Capture-practice vocabulary for pipeline qualification, procurement integrity, and incumbent posture — house method, not FAR stages.",
		tags: ["pipeline-hygiene", "qualification", "evidence", "procurement-integrity"],
		readingMinutes: 8,
		suggestedOrder: 7,
		pieces: [
			{
				id: "lead-vs-qualified",
				title: "Lead vs qualified opportunity",
				teach:
					"A lead is a discoverable opportunity with recorded source and date, explicit unknowns, a named owner, and a time-bound next validation action. A qualified opportunity meets company qualification criteria — customer problem, funding, vehicle, competition type, incumbent timing, eligible path — supported by evidence. This is house pipeline method, not a FAR stage model: promote only when the evidence gate is met. Stale forecasts that conflict with newer official updates should lower confidence while remaining open for validation.",
				watchFor:
					"Don't qualify on mission fit alone, wait for a final RFP before any pipeline entry (that forfeits early positioning), treat deleting every uncertain lead as hygiene, or treat a missed forecast date as proof the requirement vanished.",
				citation: "Core capture practice; APMP Winning Business Ecosystem (high-level)",
				sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				sourceKind: "capture-practice",
			},
			{
				id: "public-intel-integrity-line",
				title: "Procurement integrity (public vs protected information)",
				teach:
					"The procurement integrity line separates lawfully public competitive-intelligence inputs — FOIA releases, SAM.gov, USAspending, and similar — from protected contractor bid or proposal information and source-selection information. The Procurement Integrity Act and FAR 3.104-3 prohibit knowingly obtaining protected information before award except as provided by law. Refuse and do not circulate nonpublic material, preserve the facts of receipt, and escalate immediately to legal or ethics. When in doubt, stop, preserve, escalate — company counsel directs notice or remediation.",
				watchFor:
					"Don't clear use on a consultant's assurance that we did not ask a government employee, treat silent deletion without escalation as containment, or keep reviewing after recognizing protected content — pause for counsel instead.",
				citation: "Procurement Integrity Act, 41 U.S.C. § 2102; FAR 3.104-3",
				sourceUrl: "https://www.acquisition.gov/far/3.104-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "incumbent-posture-without-invented-pain",
				title: "Incumbent posture",
				teach:
					"Incumbent posture is a capture-practice framing for challenger strategy: use public award history for tenure, obligations, and contractual continuity; treat continuity and switching cost as evidence-backed incumbent strengths; mark customer dissatisfaction as unknown until validated lawfully. Build the case for change value against documented transition risk — not against a sentiment you wish were true. Facts, hypotheses, and unknowns stay labeled separately.",
				watchFor:
					"Don't read option exercises as proof the incumbent cannot lose, treat a recompete as proof the agency wants a replacement, or invent dissatisfaction as strategy.",
				citation: "Core capture practice; APMP Winning Business Ecosystem (high-level)",
				sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				sourceKind: "capture-practice",
			},
		],
		furtherReading: [
			{
				label: "FAR 3.104-3 — Statutory and related prohibitions",
				url: "https://www.acquisition.gov/far/3.104-3",
				kind: "controlling-authority",
			},
			{
				label: "APMP Winning Business Ecosystem",
				url: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				kind: "capture-practice",
			},
		],
		closing:
			"Find work ends when the opportunity is classified, timed, funded enough to matter, reachable through an eligible path, and promoted only on evidence. When the picture feels steadier, check yourself — or open the next Find chapter.",
	}),
];
