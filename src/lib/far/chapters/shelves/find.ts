import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Find shelf — desk-reference chapters for spotting, validating, and staging
 * opportunities before a solicitation exists.
 */
export const FIND_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "lead-not-solicitation",
		unitId: "find",
		title: "A Lead Is Not Yet a Solicitation",
		summary: "Classify the notice before you spend capture hours treating it like an RFP.",
		intro:
			"Most early pipeline errors start with a misread label. Sources sought, forecasts, and award notices can all be valuable — but only a solicitation asks for an offer you can accept into a binding contract. This chapter draws the line between a discoverable lead and a live competition so your team invests against the right document.",
		tags: ["sources-sought", "notice-types", "market-research", "sam-gov"],
		readingMinutes: 7,
		suggestedOrder: 1,
		startHere: true,
		pieces: [
			{
				id: "notice-type-before-spend",
				title: "Classify the notice before you treat it as demand",
				story:
					"A Friday SAM.gov alert lands with the right agency name and a familiar mission phrase. Someone forwards it as “the RFP.” The analyst who opens the notice first still has one job: name the notice type before anyone starts a full proposal plan.",
				is: "A sources-sought or similar market-research notice asks for capability, capacity, and planning input. It can shape acquisition strategy, but it does not request an offer the Government can accept to form a contract. A solicitation is the instrument that invites offers or quotations for award.",
				isNot:
					"It is not automatic award if you answer first, not a guarantee of a later competition structure, and not a cue to submit binding price and a full technical volume unless the notice actually asks for offers.",
				fits: "Use this at intake: label the lead by notice type, then decide response depth. Market-research answers earn early positioning; solicitation responses earn evaluation.",
				judgment:
					"If the notice has no proposal instructions and asks for capability or ROM data, treat it as research input — valuable, nonbinding, and still worth doing well.",
				checklist: [
					"Record notice type, solicitation number if any, and response due date.",
					"Answer every research question with evidence mapped to the ask.",
					"Do not invent award probability from a sources-sought reply.",
				],
				citation: "SAM.gov Opportunity Management API — Notice Types; FAR 10.002",
				sourceUrl: "https://open.gsa.gov/api/opportunities-api/",
				sourceKind: "guidance",
			},
			{
				id: "sources-sought-as-evidence",
				title: "A tailored sources-sought reply is market evidence",
				story:
					"The recompete looks familiar. Leadership wants “something in” before the week ends. A generic capability brochure is the fastest path — and the least useful one.",
				is: "Under FAR Part 10, agencies may contact knowledgeable industry sources and use that input to judge capabilities, customary practices, competition, and acquisition approach. A concise, evidence-backed response that answers the posted questions creates a usable market-research record.",
				isNot:
					"It is not a binding proposal, not a place to dump unrequested firm pricing, and not a substitute for later Section L/M compliance when a real solicitation arrives.",
				fits: "Place this beside early capture: the reply is how you show capable sources and viable buying paths without pretending the notice is already an RFP.",
				judgment:
					"Prefer specific past performance, vehicle access, and transition insight over corporate brochure language. Omit speculative pricing the agency did not request.",
				checklist: [
					"Map each agency question to a short evidence answer.",
					"Name workable vehicles and credible teaming hypotheses.",
					"Keep ROM or pricing only if the notice asked for it — and label assumptions.",
				],
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
		title: "Build a Radar, Not a Keyword Search",
		summary: "Stack filters, forecasts, and vehicle channels so early demand is not luck.",
		intro:
			"A single keyword across all of SAM.gov is a flood, not a radar. Civilian capture needs intersecting filters, saved searches, agency forecasts, small-business office channels, and vehicle-only tools like eBuy. This chapter is about coverage design: see the right notices early without drowning the account team.",
		tags: ["sam-gov", "filters", "forecast", "ebuy", "early-discovery"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "filter-stack-first-pass",
				title: "Intersect organization, NAICS, notice type, and dates",
				story:
					"The BD lead’s inbox has hundreds of civilian hits. The account covers one department, two NAICS codes, and only live response windows. Reading every title by hand is not a method.",
				is: "SAM.gov advanced search supports combining department or office, NAICS, notice type, posted-date range, and response-deadline filters. Signed-in users can save searches. Intersecting those dimensions raises precision without treating one keyword as authoritative.",
				isNot:
					"It is not “filter only for solicitations and ignore everything earlier,” and not “one broad keyword plus heroic manual reading” as the standing operating picture.",
				fits: "Build this as the standing radar for each account. Broaden temporarily when agency coding is noisy; do not permanently exclude presolicitations, sources sought, or justifications.",
				judgment:
					"If the first pass is still noisy, add NAICS and notice-type cuts after organization and date — not instead of them.",
				checklist: [
					"Save the account filter stack and review it on a fixed cadence.",
					"Include early notice types in the radar, not only final RFPs.",
					"Spot-check NAICS and office coding when results look thin or wrong.",
				],
				citation: "SAM.gov — Contract Opportunities: Advanced Search and Saved Searches",
				sourceUrl: "https://sam.gov/opportunities",
				sourceKind: "guidance",
			},
			{
				id: "forecast-and-vehicle-channels",
				title: "Add forecasts and vehicle-only demand to the radar",
				story:
					"The team waits for public SAM.gov solicitations and keeps missing work that was visible months earlier — or only visible to holders of a Schedule category.",
				is: "Agency acquisition forecasts and OSDBU / small-business office channels surface civilian demand earlier than many solicitations. FAR 5.404-1(b)(3) requires released long-range estimates to say they use the best available information, are subject to modification, and are not binding. Separately, GSA eBuy requests are generally visible to eligible contract holders for the relevant category or SIN — not necessarily as same-day public SAM.gov solicitations.",
				isNot:
					"A forecast date is not a committed solicitation date. An eBuy RFQ is not “nonexistent” because a public SAM.gov search is empty. Incumbent marketing pages and state/local expiration lists are not substitutes for federal forecast and vehicle channels.",
				fits: "Put three tabs on the account desk: public notices, agency forecasts / vendor updates, and vehicle portals for the categories you or partners hold.",
				judgment:
					"Validate forecast fields against newer notices and vendor-communication updates. For rumored eBuy work, check through an authorized holder profile before declaring the RFQ missing.",
				checklist: [
					"Subscribe to target-agency forecast and OSDBU pages.",
					"Record forecast freshness and conflicting later updates.",
					"Map SINs / categories your company or trusted partners can see.",
				],
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
		title: "Follow the Identifiers Through the Evidence",
		summary: "PIID, related notices, and award transactions beat titles and folklore.",
		intro:
			"Titles lie; identifiers travel. Incumbent research, recompete prep, and obligation patterns become reliable only when you follow solicitation numbers, related-notice links, PIIDs, and modifications across SAM.gov Contract Awards / Data Bank and USAspending. This chapter is the evidence path from a vague award blurb to a usable history.",
		tags: ["piid", "related-notices", "sam-data-bank", "usaspending", "incumbent"],
		readingMinutes: 9,
		suggestedOrder: 3,
		pieces: [
			{
				id: "award-data-landscape",
				title: "Use the current award-data landscape, not legacy folklore",
				story:
					"A playbook still says “pull it from FPDS ezSearch.” The analyst needs incumbent awards for a 2026 civilian recompete and cannot afford a dead link as the method.",
				is: "Public FPDS search has transitioned to SAM.gov Contract Awards and Data Bank. USAspending remains the official open source for federal spending analysis and receives procurement data derived from that reporting stream. Treat “FPDS” as lineage vocabulary, not as the current public destination.",
				isNot:
					"SAM.gov is not “pre-award only.” USAspending is not “grants only.” Data Bank is not limited to forecasts with no awards or modifications.",
				fits: "Start every incumbent or spend reconstruction here: current SAM.gov award search / reports, then USAspending for transaction and spending analysis.",
				judgment:
					"Preserve old FPDS references in notes as data lineage when helpful, but update the team’s click path to SAM.gov and USAspending.",
				checklist: [
					"Search awards by agency, NAICS/PSC, and keywords, then lock on identifiers.",
					"Open Data Bank reports when you need repeatable award extracts.",
					"Cross-check obligation patterns in USAspending before briefing leadership.",
				],
				citation: "SAM.gov — Contract Award Data in SAM.gov",
				sourceUrl: "https://sam.gov/fpds",
				sourceKind: "guidance",
			},
			{
				id: "related-notice-and-transaction-chain",
				title: "Reconstruct the chain: related notices, then transactions",
				story:
					"The award notice title is generic. The team wants the original requirements, amendments, and market-research history for the next recompete — and a clean read of what was actually obligated.",
				is: "SAM.gov related-notice links can connect sources sought, presolicitation, solicitation, amendments, justification, and award for one acquisition story. For spend posture, separate parent IDVs from task orders, follow award and transaction records, net obligations including deobligations, and treat potential value as a ceiling rather than revenue.",
				isNot:
					"The awardee’s legal name alone is not a reliable identity key across notice types. An award notice does not contain the full SOW and every amendment. Potential value plus every child order is not “incumbent revenue.” Negative obligations are not automatic proof of failed performance.",
				fits: "Use identifiers when building recompete binders: notice chain for requirement evolution; PIID / modification trail for dates and money.",
				judgment:
					"Distinguish historical facts from assumptions about the next procurement. Ceiling is not spend; continuity is not customer sentiment.",
				checklist: [
					"Walk related notices before drafting the recompete story.",
					"Separate IDV ceiling from order obligations.",
					"Net mods and deobligations before stating “what they got.”",
				],
				citation: "SAM.gov Opportunity Management API — Related Notices; USAspending — Analyst’s Guide to Federal Spending Data",
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
		title: "Backcast the Recompete Window",
		summary: "Work backward from award need — and treat bridges as timing signals, not destiny.",
		intro:
			"Recompete calendars fail when teams anchor on incumbent expiration alone or treat every bridge as permanent sole source. Backcast from the needed successor award date using a realistic solicitation-to-award lead time, then keep validating options, forecasts, and posted justifications. This chapter is the timing math and the discipline around delay evidence.",
		tags: ["palt", "recompete", "bridge", "forecast", "expiration"],
		readingMinutes: 9,
		suggestedOrder: 4,
		pieces: [
			{
				id: "palt-backsolve",
				title: "Backsolve from award need, not from expiration folklore",
				story:
					"The incumbent ends September 30, 2028. The agency wants the successor awarded by June 30, 2028 for transition, and planning assumes eight months from solicitation to award. Someone still puts “solicitation = expiration day” on the whiteboard.",
				is: "GAO describes PALT as the time from solicitation of offers to contract award — not acquisition planning before solicitation. Backsolve solicitation timing from the required award date using the agency’s planning assumption, then start discovery and shaping earlier than that anchor. Prefer a newer forecast award target over assuming the current end date can never move or that every option will be exercised.",
				isNot:
					"PALT does not begin at incumbent expiration. An ultimate potential end date does not prove every option will be exercised. Adding lead time after performance ends is not how solicitation-to-award math works.",
				fits: "Use this whenever a recompete enters the pipeline: provisional award anchor → subtract PALT → set early-capture milestones upstream of that date.",
				judgment:
					"Track remaining options and bridge evidence as validation points. Update the provisional window when newer official signals conflict with the old one.",
				checklist: [
					"Write the successor award need date and the PALT assumption explicitly.",
					"Subtract calendar months to a solicitation anchor — then start earlier.",
					"Log option, forecast, and bridge updates that move the window.",
				],
				citation: "GAO-24-106528 — Defense Contracts: Award Lead Times; SAM.gov — Contract Data",
				sourceUrl: "https://www.gao.gov/products/gao-24-106528",
				sourceKind: "guidance",
			},
			{
				id: "bridge-as-timing-signal",
				title: "Read bridge justifications as timing and continuity evidence",
				story:
					"A nine-month sole-source extension posts because the replacement competition is delayed. Half the team declares the follow-on “locked sole source.” The other half ignores the notice as “post-award noise.”",
				is: "Posted justifications — under the applicable regime in FAR 6.305, 8.405-6(a)(2), or 16.505(b)(2)(ii)(D) — can reveal continuity need, delay rationale, and extension period. Successive bridges raise schedule-risk and incumbent-continuity assumptions and should move your backcast to the newest documented runway while you intensify monitoring.",
				isNot:
					"A bridge is not proof the planned competition is canceled forever. Repeated bridges do not by themselves authorize every future award as permanent sole source. Ignoring posted justifications is not disciplined capture.",
				fits: "Fold bridge notices into the same recompete timeline you backcasted: update dates, raise risk flags, keep the replacement competition as a live hypothesis.",
				judgment:
					"Use the document for what it proves. Do not invent a final acquisition strategy the justification does not establish.",
				checklist: [
					"Capture extension end date and stated delay rationale.",
					"Update pipeline timing and schedule risk.",
					"Watch for solicitation, another bridge, or strategy change.",
				],
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
		title: "Separate Mission Intent From Available Funds",
		summary: "Budget language is directional; obligation authority is what enables award.",
		intro:
			"Congressional budget justifications and modernization narratives feel like demand. They are not appropriations, and they are not contract actions. Find-stage teams need a clean split between mission intent and available funds — especially under continuing resolutions — so forecast value does not outrun fiscal reality.",
		tags: ["budget", "appropriations", "continuing-resolution", "funding-risk"],
		readingMinutes: 7,
		suggestedOrder: 5,
		pieces: [
			{
				id: "cbj-is-directional",
				title: "A budget request is mission intent, not funded procurement",
				story:
					"A civilian CBJ describes a new modernization initiative. Congress has not enacted the request. No forecast line and no SAM.gov notice exist. The pipeline still wants a big number.",
				is: "A budget request signals program priority. It is not an appropriation, acquisition strategy, or contract action. FAR 32.702 bars obligations in excess of or in advance of available appropriations unless authorized. Capture should triangulate enacted funding and execution evidence with forecasts, market research, and notices before upgrading the lead.",
				isNot:
					"Publication of a justification does not authorize obligation of the requested amount. Absence of an award in USAspending does not mean the CBJ has zero discovery value. A CBJ does not prove unrestricted competition under an incumbent’s NAICS.",
				fits: "Park CBJ-driven ideas as directional leads with explicit funding unknowns until appropriations and acquisition artifacts appear.",
				judgment:
					"Keep the mission on the radar; keep the dollars provisional until you can point to authority and a buying path.",
				checklist: [
					"Tag the lead as mission-intent until funding is validated.",
					"Track appropriations, execution, forecasts, and notices as separate evidence.",
					"Do not promote to qualified on CBJ narrative alone.",
				],
				citation: "FAR 32.702",
				sourceUrl: "https://www.acquisition.gov/far/32.702",
				sourceKind: "controlling-authority",
			},
			{
				id: "cr-lowers-confidence",
				title: "Continuing resolutions lower near-term confidence — they do not auto-cancel need",
				story:
					"The fiscal year opens under a CR. The regular appropriation is not enacted. A proposed new-start modernization still sits in the account plan with last quarter’s Pwin.",
				is: "Continuing resolutions are temporary appropriations whose exact restrictions and exceptions depend on enacted text. They commonly constrain or delay new activities. FAR 32.702 still requires available funds or authorized conditioning before contract execution, so lower near-term funding and award confidence and verify the actual CR and program authority.",
				isNot:
					"A presidential budget request does not fund the award. A CR does not permanently prohibit every new contract. Appropriations status is not irrelevant to obligation timing.",
				fits: "Adjust confidence and timing when fiscal instruments change; keep validating rather than deleting the underlying mission need by assumption.",
				judgment:
					"Read the CR text and any program-specific anomaly language before briefing “funded” or “dead.”",
				checklist: [
					"Note CR status and any known new-start constraints.",
					"Lower near-term award confidence until authority is verified.",
					"Revisit when full-year appropriations or exceptions land.",
				],
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
		title: "Find an Eligible Path to the Work",
		summary: "NAICS, set-asides, and vehicle access decide whether you prime, partner, or pass.",
		intro:
			"Capability without an eligible path is a expensive hobby. Find-stage triage records size status under the assigned NAICS, set-aside signals, and vehicle visibility so the company either primes compliantly, partners early, or stops pretending. This chapter is eligibility before romance.",
		tags: ["set-aside", "naics", "eligibility", "ebuy", "partner-discovery"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "setaside-naics-triage",
				title: "Record the eligibility gate, then map partners early",
				story:
					"A forecast six months out shows a total small-business set-aside and a NAICS under which the large prime is other than small. The scope is a perfect fit. Someone wants it kept as an unrestricted prime opportunity “because it is only a forecast.”",
				is: "FAR 19.102 ties the applicable size standard to the NAICS assigned to the acquisition. A total small-business set-aside excludes an other-than-small concern from priming. Early triage should mark current ineligibility to prime, validate the NAICS and set-aside signals, and discover qualified small-business partners and feasible workshare while the window is still open.",
				isNot:
					"Forecast status does not erase the current eligibility signal. Capability does not authorize a false size representation. Archiving forever is not required — subcontract and partner paths may still be live — but ignoring the gate inflates the prime pipeline.",
				fits: "Use this at forecast intake for large primes: eligibility first, partner map second, bid/no-bid later.",
				judgment:
					"Keep the lead if a compliant path exists. Do not count it as unrestricted prime revenue on hope.",
				checklist: [
					"Capture NAICS, size status, and set-aside field with source dates.",
					"List eligible partner primes and rough workshare hypotheses.",
					"Revalidate when the solicitation or strategy updates.",
				],
				citation: "FAR 19.102; FAR 19.502-2",
				sourceUrl: "https://www.acquisition.gov/far/19.102",
				sourceKind: "controlling-authority",
			},
			{
				id: "vehicle-access-or-partner",
				title: "If you cannot see the vehicle request, find who can",
				story:
					"The RFQ will compete in eBuy under a Schedule category the large prime does not hold. Trusted partners do. Someone jokes about “borrowing a login.”",
				is: "eBuy visibility and response rights follow supported contracts and categories. Without applicable access, identify eligible holders who can prime, assess coverage of the requirement, and pursue a compliant subcontract role before the request window closes.",
				isNot:
					"Sharing holder credentials so you can submit as if you held the category is not a path. Waiting passively for a future open-market competition is optional strategy, not the strongest find-stage move when partners already have access. A Schedule CTA does not cure lack of an applicable awarded category for your own quoted work.",
				fits: "Treat vehicle mismatch like set-aside mismatch: mark direct ineligibility, then staff a partner path with time left on the clock.",
				judgment:
					"Confirm the category mismatch in writing in the pipeline, then hand a named owner the partner pursuit.",
				checklist: [
					"Verify which holders can see and respond.",
					"Assess which partner can cover the requirement as prime.",
					"Pursue subcontract scope early — do not wait for the last day.",
				],
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
		title: "Promote Evidence, Not Optimism",
		summary: "Pipeline stages move on dated evidence — and integrity bounds what you may use.",
		intro:
			"Conference hallway rumors and attractive mission fit do not qualify revenue. Disciplined find practice records source, freshness, unknowns, ownership, and next validation actions — then promotes only when the company’s evidence gate is met. Competitive intelligence stays inside lawfully public sources; protected bid, proposal, or source-selection information is an integrity stop, not a shortcut.",
		tags: ["pipeline-hygiene", "qualification", "evidence", "procurement-integrity"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "lead-vs-qualified",
				title: "Keep leads honest until qualification evidence arrives",
				story:
					"Someone heard a bureau “may modernize grants systems next year.” No named buyer, forecast entry, funding line, vehicle, or date. Leadership still wants it in the qualified forecast this quarter.",
				is: "As capture practice, separate a discoverable lead from a qualified opportunity. Record source and date, explicit unknowns, a named owner, and a time-bound next validation action. Promote only when company qualification criteria — customer problem, funding, vehicle, competition type, incumbent timing, eligible path — are supported by evidence. Stale forecasts that conflict with newer official updates should lower confidence while remaining open for validation.",
				isNot:
					"Mission fit alone is not qualification. Waiting for a final RFP before any pipeline entry forfeits early positioning. Deleting every uncertain lead is not the same as hygiene. A missed forecast date does not prove the requirement vanished.",
				fits: "This is house pipeline method — labeled capture practice, not a FAR stage model. Use it to protect investment decisions and forecast credibility.",
				judgment:
					"If material unknowns lack owners and deadlines, the opportunity is not ready for the committed forecast — no matter how good the story sounds.",
				checklist: [
					"Enter unvalidated leads with source, date, unknowns, owner, and next action.",
					"Keep confidence ratings visible when sources conflict.",
					"Promote only against written qualification criteria.",
				],
				citation: "Core capture practice; APMP Winning Business Ecosystem (high-level)",
				sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				sourceKind: "capture-practice",
			},
			{
				id: "public-intel-integrity-line",
				title: "Public records are fair game; protected information is not",
				story:
					"The team has FOIA releases and public award data for a competitor profile. A consultant then offers an unredacted, nonpublic source-selection worksheet for an active procurement and will not name the source.",
				is: "Lawfully public records — FOIA releases, SAM.gov, USAspending, and similar — are legitimate competitive-intelligence inputs. The Procurement Integrity Act and FAR 3.104-3 prohibit knowingly obtaining protected contractor bid or proposal information or source-selection information before award except as provided by law. Refuse and do not circulate the nonpublic material, preserve the facts of receipt, and escalate immediately to legal or ethics.",
				isNot:
					"A consultant’s assurance that “we did not ask a government employee” does not clear use. Silent deletion without escalation is not containment. Pausing for counsel is wise; continuing to review after recognizing protected content is not.",
				fits: "Draw this line at every find-stage CI task: public evidence builds strategy; protected packets end the conversation and start counsel.",
				judgment:
					"When in doubt, stop, preserve, escalate. Company counsel directs notice or remediation — this workflow is prudent practice supporting the statutory and FAR restrictions, not a substitute for legal advice.",
				checklist: [
					"Prefer documented public sources with retrieval dates.",
					"Refuse unknown-source nonpublic bid or source-selection materials.",
					"Preserve receipt facts and escalate to legal/ethics immediately.",
				],
				citation: "Procurement Integrity Act, 41 U.S.C. § 2102; FAR 3.104-3",
				sourceUrl: "https://www.acquisition.gov/far/3.104-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "incumbent-posture-without-invented-pain",
				title: "Describe incumbent strength without inventing dissatisfaction",
				story:
					"Public data show repeated options and steady obligations. Users say continuity matters. The challenger team has no lawful evidence the customer is unhappy — but the color team wants a “customer is done with them” story.",
				is: "As capture practice, use public award history for tenure, obligations, and contractual continuity. Treat continuity and switching cost as evidence-backed incumbent strengths, mark dissatisfaction as unknown, and seek lawful customer evidence before claiming a challenger discriminator.",
				isNot:
					"Option exercises do not prove the incumbent cannot lose. A recompete does not prove the agency wants a replacement. Invented dissatisfaction is not strategy.",
				fits: "Hold this posture when building challenger plans: facts, hypotheses, and unknowns stay labeled separately.",
				judgment:
					"Build the case for change value against documented transition risk — not against a sentiment you wish were true.",
				checklist: [
					"List incumbent continuity facts with sources.",
					"Label customer sentiment unknown until validated lawfully.",
					"Write challenger hypotheses as provisional until evidence lands.",
				],
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
			"Find work ends when the opportunity is classified, timed, funded enough to matter, reachable through an eligible path, and promoted only on evidence. Reading this shelf does not clear quiz progress. When the picture feels steadier, check yourself — or open the next Find chapter.",
	}),
];
