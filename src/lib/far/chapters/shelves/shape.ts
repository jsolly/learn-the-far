import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Shape shelf — desk-reference chapters for lawful early exchange, usable market
 * evidence, outcome-focused requirements help, and OCI / integrity boundaries.
 *
 * Reading shape: each piece is a definition card (term title + expanded glossary
 * teach + optional Watch for + citation/quote).
 */
export const SHAPE_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "early-exchange-lawful-limited",
		unitId: "shape",
		title: "RFIs, one-on-one meetings, and early-exchange roles",
		summary:
			"Defines lawful pre-solicitation exchanges and the split between program-office need dialogue and contracting-officer acquisition constraints.",
		intro:
			"Terms for lawful pre-solicitation exchange: RFIs, one-on-ones, and who may bind the Government. Citations reflect the codified FAR FAC 2026-01 baseline; an adopting agency’s RFO deviation may renumber or supersede individual sections — verify the solicitation and agency coverage you are under.",
		tags: ["early-exchange", "rfi", "one-on-one", "warrant", "call-plan"],
		readingMinutes: 8,
		suggestedOrder: 1,
		pieces: [
			{
				id: "rfi-and-one-on-ones",
				title: "Request for information (RFI) and one-on-one meetings",
				teach: "An RFI under FAR 15.201(e) is used when the Government does not presently intend to award a contract and wants planning or market information. Responses are not offers, cannot be accepted to form a binding contract, and have no required FAR format. FAR 15.201(a)–(c) encourages early exchanges with industry and expressly lists one-on-one meetings; a contracting officer should participate when the discussion substantially involves potential contract terms and conditions. RFIs put decision-ready evidence in the market-research file; one-on-ones build mutual understanding — with the CO in the lane when terms are on the table.",
				watchFor:
					"Don't treat pricing in an RFI reply as a binding offer, or answering as a guaranteed seat in the later competition. One-on-ones are not reserved for incumbents, not limited to post-proposal timing, and not unlawful merely because every competitor is not in the room.",
				citation: "FAR 15.201(a), (c)(4), (e) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "program-vs-co-tracks",
				title: "Program office versus contracting officer in early exchange",
				teach: "FAR 15.201(c) contemplates early exchange among industry, the program manager, the contracting officer, and other acquisition participants. Program stakeholders illuminate mission need and outcomes; under FAR 1.602-1, contracting officers may bind the Government only to the extent of authority delegated in writing. A coordinated call plan runs mission and outcomes with program and routes strategy and contractual matters through the CO. If the conversation turns into binding terms without a CO in the lane, stop and re-route.",
				watchFor:
					"Don't confuse a program preference with a warrant, skip end users because “mission does not matter before RFP,” or treat a program promise of award terms as contractual authority.",
				citation: "FAR 15.201(c); FAR 1.602-1 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/1.602-1",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.201 — Exchanges with industry before receipt of proposals",
				url: "https://www.acquisition.gov/far/15.201",
				kind: "controlling-authority",
			},
			{
				label: "FAR 1.602-1 — Authority",
				url: "https://www.acquisition.gov/far/1.602-1",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "decision-ready-market-evidence",
		unitId: "shape",
		title: "Sources-sought evidence and decision-ready RFI replies",
		summary:
			"Defines what makes market-research input usable to the agency: comparable facts, tradeoffs, and honest capacity — not brochure pressure.",
		intro:
			"Vocabulary for market-research replies that planners can actually use: capable sources, feasible approaches, transition risk, and measurable alternatives.",
		tags: ["market-research", "sources-sought", "rfi", "large-prime"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "sources-sought-honest-evidence",
				title: "Sources-sought and market-research evidence",
				teach: "FAR 10.001 requires agencies to use market research to identify capable sources and determine whether small-business programs should be used. A sources-sought or similar market-research reply should supply specific, supportable evidence on scope integration, transition, capacity, commercial practices, and likely teaming — then plan for either prime or partner positioning. The response informs the agency’s decision file; it does not decide strategy. Answer each posted question with dated, supportable facts; address transition and subcontracting honestly; plan capture for set-aside and unrestricted outcomes.",
				watchFor:
					"Company-size labels and insistence that the agency “must” run unrestricted competition are weak evidence. Understating small-business capability to skew the record is an integrity and relationship failure. Silence can be process humility — and it still forfeits shaping value.",
				citation: "FAR 10.001(a)(3) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/10.001",
				sourceKind: "controlling-authority",
			},
			{
				id: "rfi-architecture",
				title: "Decision-ready RFI reply",
				teach: "A decision-ready RFI reply answers each agency question with evidence the planner can compare to another offeror’s without decoding marketing fog. FAR 15.201(b) frames exchanges as improving mutual understanding of requirements and capabilities; FAR 10.001 uses market research to test sources, practices, and whether needs could be reasonably modified. The strongest reply quantifies tradeoffs, distinguishes firm capabilities from assumptions, offers feasible alternatives, and marks proprietary material narrowly. Map each agency question to an evidence answer; state assumptions and gaps explicitly.",
				watchFor:
					"Broad credentials without feasibility limits do not shape requirements. Unsupported “only our architecture works” claims undermine credibility. Skipping every hard question preserves accuracy but misses the chance to propose testable alternatives.",
				citation: "FAR 15.201(b), (e); FAR 10.001(a)(3) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 10.001 — Policy",
				url: "https://www.acquisition.gov/far/10.001",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "shape-outcomes-not-staffing",
		unitId: "shape",
		title: "Statements of objectives, performance work statements, and offeror-developed PWS",
		summary:
			"Defines SOO, PWS, and related shapes so capture knows whether methods, staffing, or outcomes are what compete.",
		intro:
			"Requirements instruments when the agency wants competing methods and measurable results rather than a prescriptive staffing recipe.",
		tags: ["sow", "pws", "soo", "performance-based-acquisition", "outcomes"],
		readingMinutes: 7,
		suggestedOrder: 3,
		pieces: [
			{
				id: "soo-pws-when-innovation",
				title: "Statement of objectives (SOO) to performance work statement (PWS)",
				teach: "FAR 37.602 favors required results and measurable performance standards. A Government statement of objectives (SOO), from which each offeror develops a proposed PWS, must include purpose, scope or mission, period and place of performance, background, performance objectives, and operating constraints. A detailed statement of work that prescribes each labor step is a poorer fit when the agency wants competing methods. Reach for SOO-to-PWS when advising requirements teams before the solicitation hardens: outcomes and measures first, methods second.",
				watchFor:
					"A SOO is not the complete contract work statement by itself. Omitting performance standards does not create useful flexibility. “Staffing volume” as the primary reward is not outcome shaping.",
				citation: "FAR 37.602(a)–(c) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/37.602",
				sourceKind: "controlling-authority",
			},
			{
				id: "soo-does-not-become-contract",
				title: "Offeror-developed performance work statement",
				teach: "Under FAR 37.602, offerors use the Government SOO to develop a proposed PWS. The SOO does not become part of the contract. The PWS should express required results and measurable performance standards — the contractual baseline the offeror will live under after award. Write and price to the PWS you are proposing; trace it to the SOO’s objectives without treating the SOO as already contractual.",
				watchFor:
					"Don't assume the SOO automatically becomes the complete contract work statement, replace it with a staffing SOW that omits standards, or expect the CO to convert the SOO into each offeror’s technical proposal after award as a substitute for a PWS.",
				citation: "FAR 37.602(a), (c) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/37.602",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 37.602 — Performance work statement",
				url: "https://www.acquisition.gov/far/37.602",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "comments-usable-questions-fair",
		unitId: "shape",
		title: "Draft RFP comments, leveled Q&A, and post-release communications",
		summary:
			"Defines how industry comments and questions should improve the buy without creating private advantage after release.",
		intro:
			"Terms for draft-RFP comment craft and the contracting-officer channel that levels proposal-necessary facts after release.",
		tags: ["draft-rfp", "industry-day", "information-leveling"],
		readingMinutes: 9,
		suggestedOrder: 4,
		pieces: [
			{
				id: "draft-rfp-comment-craft",
				title: "Draft RFP comments",
				teach: "Draft RFPs are an authorized early-exchange technique under FAR 15.201(c). Effective comments identify mission risk, propose measurable outcome-focused language, and explain how each change improves competition or evaluation — tied to a draft section or factor, with mission-linked alternate text. They improve requirements without demanding vendor-specific lock-in or surrender of Government authorship. If the Government cannot paste or adapt your comment without adopting your product, rewrite the comment around measurable need.",
				watchFor:
					"Vague outcome wishes with no section mapping are weak. Asking the agency to copy your proprietary solution into final requirements is lock-in pressure. Offering to privately rewrite the final PWS to match your delivery model crosses into ghostwriting risk.",
				citation: "FAR 15.201(c)(6) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "level-necessary-facts",
				title: "Proposal-necessary acquisition information",
				teach: "Under FAR 15.201(f), proposal-necessary acquisition information disclosed to a potential offeror must be made public as soon as practicable. Use the announced contracting-officer channel. Request context may be withheld only when disclosure would reveal confidential business strategy that is also protected under FAR 3.104 or subpart 24.2 — marking alone does not guarantee protection. The CO is the leveling channel; necessary acquisition facts get leveled from first industry day through post-release Q&A.",
				watchFor:
					"Private promises to keep proposal-necessary facts secret are not a fair process. Dumping your full solution logic in plenary to get an answer is unnecessary exposure. Staying silent forever can be conservative — and it still leaves price and solution quality weaker when a leveling channel exists.",
				citation: "FAR 15.201(f), FAR 3.104, FAR subpart 24.2 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "no-universal-blackout",
				title: "Post-release solicitation communications",
				teach: "FAR does not establish a universal solicitation-release blackout. FAR 15.201(f) makes the contracting officer the focal point after release and requires proposal-necessary acquisition information disclosed to potential offerors to be made public. Post-release shaping is mostly clarifying through the solicitation’s communication instructions and the CO’s Q&A process — still engagement, newly constrained. Submit ambiguities through the named CO process; expect material answers to be leveled to the field.",
				watchFor:
					"Don't take a private substantive program call because “leveling ended at release,” refuse all contact of every kind because of a supposed universal blackout, or rely on promises to hide the call from the CO.",
				citation: "FAR 15.201(f) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.201 — Exchanges with industry",
				url: "https://www.acquisition.gov/far/15.201",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "help-without-governments-pen",
		unitId: "shape",
		title: "Requirements support, J&A assistance, and brand-name-or-equal descriptions",
		summary:
			"Defines the line between helpful industry input and writing the Government’s PWS, justification, or lock-in specifications.",
		intro:
			"Boundaries for industry help: evidence and alternatives stay with the Government; competitive work statements and J&As stay with authorized officials.",
		tags: ["ghostwriting", "biased-ground-rules", "ja", "brand-name-or-equal"],
		readingMinutes: 9,
		suggestedOrder: 5,
		pieces: [
			{
				id: "bounded-requirements-help",
				title: "Bounded requirements support",
				teach: "FAR 15.201 encourages substantive early exchanges. Industry may provide documented mission data, benchmarks, alternative outcome measures, assumptions, and tradeoffs while the Government develops and controls final requirements. Multiple inputs and Government ownership reduce biased-ground-rules risk under FAR 9.505-2. Deliver facts, alternatives, and tradeoffs under Government control; refuse paste-ready competitive work statements you intend to bid. If the file would show your company as the primary drafter of the competitive PWS, restructure the support.",
				watchFor:
					"Silence is not required for every substantive exchange. Sending a complete PWS and evaluation scheme optimized for your solution with “paste unchanged” instructions is the wrong help. Capability briefings that avoid vendor-specific final language can be a safer middle path.",
				citation: "FAR 15.201(c); FAR 9.505-2(b) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/9.505-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "ja-facts-not-authorship",
				title: "Justification and approval (J&A) support",
				teach: "Under FAR 6.303-1(c), Government technical and requirements personnel provide and certify supporting data. FAR 6.303-2 specifies the J&A’s required content; FAR 6.304 requires approval at the authorized Government level. A prospective contractor may supply complete, supportable technical, schedule, market, and transition facts — and must stop there. Facts from industry; judgment, development, certification, and approval from the Government.",
				watchFor:
					"Writing and approving the J&A because “you know your uniqueness” is not industry’s role. Asking the program to omit market research or interested sources is not helpful shaping. Your factual packet does not legally compel a sole-source decision.",
				citation: "FAR 6.303-1(c), 6.303-2, 6.304 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/6.303-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "salient-characteristics-not-preference",
				title: "Brand-name-or-equal description",
				teach: "FAR 11.104 says brand-name-or-equal descriptions must state the salient physical, functional, or performance characteristics an equal item must meet. Performance specifications are preferred where suitable. Industry can explain measurable mission needs without turning preference into lock-in. (Agencies adopting an RFO Part 11 model deviation may remove or reserve related baseline coverage — verify the vehicle you are under.) List measurable physical, functional, or performance traits tied to mission need; drop vendor-only implementation trivia.",
				watchFor:
					"Model number alone with no equal criteria is not enough. Proprietary implementation details unrelated to minimum need are not salient characteristics. “Only our product is acceptable because the program prefers it” is preference, not specification craft.",
				citation: "FAR 11.104 and 52.211-6 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/11.104",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 9.505-2 — Preparing specifications or work statements",
				url: "https://www.acquisition.gov/far/9.505-2",
				kind: "controlling-authority",
			},
			{
				label: "FAR 6.303-2 — Content",
				url: "https://www.acquisition.gov/far/6.303-2",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "diagnose-oci-before-remedy",
		unitId: "shape",
		title: "Organizational conflict of interest types, remedies, and waivers",
		summary:
			"Defines OCI archetypes and the matching toolkit of avoidance, neutralization, mitigation, or waiver.",
		intro:
			"Three OCI archetypes and the remedies the contracting officer applies — not informal program waivers.",
		tags: ["oci", "biased-ground-rules", "unequal-access", "impaired-objectivity"],
		readingMinutes: 10,
		suggestedOrder: 6,
		pieces: [
			{
				id: "three-archetypes",
				title: "OCI archetypes",
				teach: "Organizational conflicts of interest fall into three FAR families. FAR 9.505-2(b) addresses contractors whose work leads directly and predictably to a competitive work statement — biased ground rules risk, often resolved by avoidance or declining authorship unless an exception applies. FAR 9.505-4(b) addresses access to other companies’ proprietary information — unequal access, typically needing agreements and controls the CO can accept. FAR 9.505-3 addresses evaluating your own or a competitor’s offers — impaired objectivity, needing safeguards or removal of the conflicted role. Name the archetype before proposing a fix; escalate early through counsel to the CO.",
				watchFor:
					"One corporate firewall does not automatically cure all three. Moving PWS drafting to another internal division without telling the CO does not erase organizational interest. Late disclosure after selection does not undo ground-rules concern. Employee NDAs alone do not bind the agency to accept mitigation.",
				citation: "FAR 9.505-2(b); FAR 9.505-3; FAR 9.505-4(b); FAR 9.504",
				sourceUrl: "https://www.acquisition.gov/far/9.505-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "portfolio-remedies-and-waiver",
				title: "OCI remedies and waiver",
				teach: "FAR 9.504 directs contracting officers to identify and resolve significant OCIs early through avoidance, neutralization, or mitigation. Remedies are fact-specific. Under FAR 9.503, only the agency head or an authorized designee — never the contractor or program office — may approve a written waiver in the Government’s interest. Disclose early, separate analyses, and propose matched remedies in mergers, advisory portfolios, and multi-division pursuits.",
				watchFor:
					"Informal program assurance is not a waiver. Corporate restructuring does not erase prior access, work, or incentives. Declaring all conflicts cured with a single control set outruns the facts.",
				citation: "FAR 9.504; FAR 9.503",
				sourceUrl: "https://www.acquisition.gov/far/9.504",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 9.504 — Contracting officer responsibilities",
				url: "https://www.acquisition.gov/far/9.504",
				kind: "controlling-authority",
			},
			{
				label: "FAR 9.505-2 — Preparing specifications or work statements",
				url: "https://www.acquisition.gov/far/9.505-2",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "shaping-integrity-incident",
		unitId: "shape",
		title: "Protected procurement information, former officials, and unsolicited proposals",
		summary:
			"Defines integrity stop-points during shaping: protected information, compensation restrictions, and mishandled unsolicited proposals.",
		intro:
			"Terms for protected procurement information, former-official restrictions, and the unsolicited-proposal instrument.",
		tags: ["procurement-integrity", "revolving-door"],
		readingMinutes: 8,
		suggestedOrder: 7,
		pieces: [
			{
				id: "accidental-protected-receipt",
				title: "Protected procurement information",
				teach: "41 U.S.C. § 2102(b) and FAR 3.104-3 prohibit knowingly obtaining protected bid, proposal, or source-selection information before award. Accidental receipt and a brief unintentional opening differ from knowingly continuing to review, copy, or disseminate after recognition. On recognition: stop review and distribution, preserve the message and access list, isolate recipients, and immediately notify company legal or ethics for coordinated disclosure to the contracting officer. FAR 3.104-7 requires the agency to assess possible impact and act.",
				watchFor:
					"Reading the file fully “to see if it is useful” before reporting is knowing continued review. Deleting files and logs to avoid possession accusations destroys evidence. Forwarding to pricing with the name stripped is still misuse.",
				citation: "41 U.S.C. § 2102(b); FAR 3.104-3(b), 3.104-7; S&K Aerospace, LLC, B-411648 (Sept. 18, 2015)",
				sourceUrl: "https://www.gao.gov/products/b-411648",
				sourceKind: "decision",
			},
			{
				id: "former-official-screening",
				title: "Former official compensation restriction",
				teach: "FAR 3.104-3(d) imposes a one-year compensation restriction for certain former officials based on specified procurement roles and decisions. FAR 3.104-2 also flags separate 18 U.S.C. 207 post-employment representational restrictions. Applicability is fact-specific: obtain a documented legal and ethics review of roles, decisions, dates, contracts, and proposed duties, then impose any compensation or representational limits before committing. Gate every former-official hire touching pursuit work through counsel before titles, comps, and call plans are set.",
				watchFor:
					"Restrictions do not all end the day Federal service ends. A hiring manager’s gut check about “what they remember” is not a screen. Parking the same work in a staffing affiliate does not avoid review.",
				citation: "FAR 3.104-3(d); FAR 3.104-2(b)(3)",
				sourceUrl: "https://www.acquisition.gov/far/3.104-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "unsolicited-not-a-shortcut",
				title: "Unsolicited proposal",
				teach: "FAR 15.603 requires a valid unsolicited proposal to be innovative and unique, independently originated, prepared without Government direction, sufficiently detailed, and not an advance proposal for a known competitively acquirable or previously published requirement. Advertising and routine commercial offers are excluded. Use the agency’s market-research channel when the requirement is already on the street. Reserve true unsolicited proposals for unique, independently originated ideas.",
				watchFor:
					"“The Government did not request this exact PDF” is not enough. Binding firm-fixed pricing alone does not qualify a routine offer. Calling a brochure innovative does not make it so.",
				citation: "FAR 15.603 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.603",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 3.104-3 — Statutory and related prohibitions",
				url: "https://www.acquisition.gov/far/3.104-3",
				kind: "controlling-authority",
			},
			{
				label: "S&K Aerospace, LLC, B-411648",
				url: "https://www.gao.gov/products/b-411648",
				kind: "decision",
			},
			{
				label: "FAR 15.603 — General",
				url: "https://www.acquisition.gov/far/15.603",
				kind: "controlling-authority",
			},
		],
		closing:
			"Shape work succeeds when early exchange stays lawful, evidence stays usable, ownership stays with the Government, and integrity incidents get stopped cold.",
	}),
];
