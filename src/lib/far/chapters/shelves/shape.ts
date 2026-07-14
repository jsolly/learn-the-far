import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Shape shelf — desk-reference chapters for lawful early exchange, usable market
 * evidence, outcome-focused requirements help, and OCI / integrity boundaries.
 */
export const SHAPE_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "early-exchange-lawful-limited",
		unitId: "shape",
		title: "Early Exchange Is Lawful—and Limited",
		summary: "Talk early with the right people — without confusing conversation with warrant authority.",
		intro:
			"FAR encourages exchanges from the earliest identification of a requirement through receipt of proposals, including one-on-ones, RFIs, and other market-research techniques. That permission is not a blank check: program stakeholders illuminate mission need, while only contracting officers acting within delegated authority can bind the Government. Citations in this shelf teach the codified FAR FAC 2026-01 baseline; an adopting agency’s RFO deviation may renumber or supersede individual sections — always check the solicitation and agency coverage you are actually under.",
		tags: ["early-exchange", "rfi", "one-on-one", "warrant", "call-plan"],
		readingMinutes: 8,
		suggestedOrder: 1,
		pieces: [
			{
				id: "rfi-and-one-on-ones",
				title: "RFIs and one-on-ones are tools, not awards",
				story:
					"An RFI asks for capabilities, rough-order pricing, and delivery assumptions. The account lead worries that answering “commits” the company. Separately, a teammate claims private pre-solicitation meetings are prohibited.",
				is: "FAR 15.201(e) uses an RFI when the Government does not presently intend to award a contract and wants planning or market information. Responses are not offers, cannot be accepted to form a binding contract, and have no required FAR format. FAR 15.201(a)–(c) encourages early exchanges and expressly lists one-on-one meetings; a contracting officer should participate when the discussion substantially involves potential contract terms and conditions.",
				isNot:
					"Including pricing in an RFI reply does not make it a binding offer. Answering does not guarantee a seat in the later competition. One-on-ones are not reserved for incumbents, not limited to post-proposal timing, and not unlawful merely because every competitor is not in the room.",
				fits: "Use RFIs to put decision-ready evidence in the market-research file. Use one-on-ones for mutual understanding — and bring the CO when terms are on the table.",
				judgment:
					"Treat early exchange as permitted engagement with clear nonbinding status, not as informal award negotiation.",
				checklist: [
					"Answer RFI questions with evidence; label assumptions.",
					"Invite or route to the CO when contract terms dominate the talk.",
					"Keep call notes distinct from “commitments” language.",
				],
				citation: "FAR 15.201(a), (c)(4), (e) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "program-vs-co-tracks",
				title: "Coordinate program mission tracks with contracting authority",
				story:
					"The program office knows the mission pain. The contracting office owns the acquisition process. Someone wants a single favorite program contact to “promise the deal.”",
				is: "FAR 15.201(c) contemplates early exchange among industry, the program manager, the contracting officer, and other acquisition participants. Program stakeholders illuminate need and outcomes. Under FAR 1.602-1, contracting officers may bind the Government only to the extent of authority delegated in writing.",
				isNot:
					"A program preference is not a warrant. Avoiding end users because “mission does not matter before RFP” wastes the point of early exchange. A program promise of award terms is not contractual authority.",
				fits: "Design the call plan as coordinated tracks: mission and outcomes with program; strategy and contractual matters through the CO.",
				judgment:
					"If the conversation turns into binding terms without a CO in the lane, stop and re-route.",
				checklist: [
					"Name program and contracting owners on the call plan.",
					"Separate mission discovery from contractual asks.",
					"Never treat a non-CO assurance as award authority.",
				],
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
		title: "Give the Government Decision-Ready Market Evidence",
		summary: "Shape with comparable facts, tradeoffs, and honest capacity — not brochure pressure.",
		intro:
			"Market research and early exchange work when industry returns something planners can use: evidence of capable sources, feasible approaches, transition risk, commercial practices, and measurable alternatives. Sales claims without support waste the opening. This chapter is how a large prime informs strategy without pretending to dictate it.",
		tags: ["market-research", "sources-sought", "rfi", "evidence", "large-prime"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "sources-sought-honest-evidence",
				title: "Supply honest evidence the agency can actually use",
				story:
					"A sources-sought notice asks about end-to-end capability, transition, and subcontracting. Capable small businesses are active. The eventual competition strategy is uncertain. Advocacy wants an unrestricted sermon.",
				is: "FAR 10.001 requires agencies to use market research to identify capable sources and determine whether small-business programs should be used. A large prime should submit specific, supportable evidence on scope integration, transition, capacity, commercial practices, and likely teaming — then plan for either prime or partner positioning. The response informs; it does not decide.",
				isNot:
					"Company-size labels and insistence that the agency “must” run unrestricted competition are weak evidence. Understating small-business capability to skew the record is an integrity and relationship failure. Silence is sometimes defensible process humility — and it still forfeits shaping value.",
				fits: "Treat sources-sought and similar market-research replies as contributions to the agency’s decision file, not as lobbying memos.",
				judgment:
					"If a sentence cannot be supported, cut it. If strategy is uncertain, keep both prime and partner paths alive.",
				checklist: [
					"Answer each posted question with dated, supportable facts.",
					"Address transition and subcontracting honestly.",
					"Plan capture for set-aside and unrestricted outcomes.",
				],
				citation: "FAR 10.001(a)(3) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/10.001",
				sourceKind: "controlling-authority",
			},
			{
				id: "rfi-architecture",
				title: "Architect RFI replies around questions, tradeoffs, and assumptions",
				story:
					"Color review on a civilian RFI: feasibility of a nationwide model, acquisition choices that drive risk, and performance measures the market can support. Someone wants to lead with corporate credentials and skip the hard questions.",
				is: "FAR 15.201(b) frames exchanges as improving mutual understanding of requirements and capabilities. FAR 10.001 uses market research to test sources, practices, and whether needs could be reasonably modified. The strongest reply answers each question with evidence, quantifies tradeoffs, distinguishes firm capabilities from assumptions, offers feasible alternatives, and marks proprietary material narrowly.",
				isNot:
					"Broad credentials without feasibility limits do not shape requirements. Unsupported “only our architecture works” claims undermine credibility. Skipping every hard question preserves accuracy but misses the chance to propose testable alternatives.",
				fits: "Use this architecture whenever the Government asks the market to help design a buyable requirement.",
				judgment:
					"Decision-ready means a planner can compare your answer to another offeror’s without decoding marketing fog.",
				checklist: [
					"Map each agency question to an evidence answer.",
					"State assumptions and gaps explicitly.",
					"Protect genuine proprietary content narrowly — not the whole reply.",
				],
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
		title: "Shape Outcomes, Not a Staffing Recipe",
		summary: "SOO, PWS, and SOW choices decide whether methods compete or headcount wins.",
		intro:
			"When the agency wants innovation on results, a prescriptive staffing SOW is the wrong instrument. Performance-based paths favor required results and measurable standards; a Government SOO can invite offerors to propose the PWS. This chapter is the vocabulary and the contractual handoff so shaping advice matches what the FAR actually structures.",
		tags: ["sow", "pws", "soo", "performance-based-acquisition", "outcomes"],
		readingMinutes: 7,
		suggestedOrder: 3,
		pieces: [
			{
				id: "soo-pws-when-innovation",
				title: "Prefer SOO-to-PWS when methods should compete",
				story:
					"A civilian program wants vendors to propose better claims-processing outcomes — not follow a prescribed staffing recipe. The draft still looks like a labor matrix with weak measures.",
				is: "FAR 37.602 favors required results and measurable performance standards. A Government SOO, from which each offeror develops a proposed PWS, must include purpose, scope or mission, period and place of performance, background, performance objectives, and operating constraints. A detailed SOW that prescribes each labor step is a poorer fit when the agency wants competing methods.",
				isNot:
					"A SOO is not the complete contract work statement by itself. Omitting performance standards does not create useful flexibility. “Staffing volume” as the primary reward is not outcome shaping.",
				fits: "Use this when advising requirements teams before the solicitation hardens: outcomes and measures first, methods second.",
				judgment:
					"If evaluators will score headcount more than results, the instrument and factors are fighting the stated goal.",
				checklist: [
					"Check for purpose, objectives, constraints, and measurable standards.",
					"Ask whether offerors should propose the how (PWS) from a SOO.",
					"Flag staffing recipes that crowd out outcome competition.",
				],
				citation: "FAR 37.602(a)–(c) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/37.602",
				sourceKind: "controlling-authority",
			},
			{
				id: "soo-does-not-become-contract",
				title: "The offeror’s PWS becomes the performance baseline — not the SOO",
				story:
					"The solicitation is built around a Government SOO. The solution lead asks which document carries promised method, standards, and measurable results into the contract.",
				is: "Under FAR 37.602, offerors use the SOO to develop a proposed PWS. The SOO does not become part of the contract. The PWS should express required results and measurable performance standards.",
				isNot:
					"The SOO does not automatically become the complete contract work statement. Replacing it with a staffing SOW that omits standards fights the performance-based model. The CO does not convert the SOO into each offeror’s technical proposal after award as a substitute for a PWS.",
				fits: "Teach proposal teams this handoff early so volumes and pricing speak to the contractual baseline they will actually live under.",
				judgment:
					"Write and price to the PWS you are proposing — trace it to the SOO’s objectives without treating the SOO as already contractual.",
				checklist: [
					"Trace proposed PWS results to SOO objectives.",
					"Include measurable standards the Government can administer.",
					"Do not assume SOO text rides into the award unchanged.",
				],
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
		title: "Make Comments Usable and Questions Fair",
		summary: "Draft-RFP comments and industry-day Q&A should help the buy — without private advantage.",
		intro:
			"Draft RFPs and industry days are authorized early-exchange techniques. They work when industry comments are precise, mission-based, and usable — and when questions that unlock proposal-necessary facts go through channels that can level the field. This chapter is the craft of helpful pressure without lock-in or secret answers.",
		tags: ["draft-rfp", "comments", "industry-day", "information-leveling", "fairness"],
		readingMinutes: 9,
		suggestedOrder: 4,
		pieces: [
			{
				id: "draft-rfp-comment-craft",
				title: "Write comments the acquisition team can act on",
				story:
					"The draft RFP rewards staffing volume and barely measures migration quality, continuity, or open interfaces. Capture wants change — without asking the agency to paste proprietary architecture into the PWS.",
				is: "Draft RFPs are an authorized technique under FAR 15.201(c). Effective comments identify mission risk, propose measurable outcome-focused language, and explain how each change improves competition or evaluation. They improve requirements without demanding vendor-specific lock-in or surrender of Government authorship.",
				isNot:
					"Vague outcome wishes with no section mapping are weak. Asking the agency to copy your proprietary solution into final requirements is lock-in pressure. Offering to privately rewrite the final PWS to match your delivery model crosses into ghostwriting risk.",
				fits: "Use comment matrices on every draft RFP review: cite the draft location, state the mission harm, propose usable alternate language, explain evaluation benefit.",
				judgment:
					"If the Government cannot paste or adapt your comment without adopting your product, rewrite the comment around measurable need.",
				checklist: [
					"Tie each comment to a draft section or factor.",
					"Propose measurable, mission-linked alternate text.",
					"Avoid proprietary lock-in and private authorship offers.",
				],
				citation: "FAR 15.201(c)(6) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "level-necessary-facts",
				title: "Route proposal-necessary facts for public leveling",
				story:
					"At industry day, a detailed question would reveal a data-retention constraint every bidder needs — but the ask also risks exposing confidential approach. Elsewhere, a program employee shares a nonpublic interface constraint and asks the team to keep it quiet.",
				is: "Under FAR 15.201(f), proposal-necessary acquisition information disclosed to a potential offeror must be made public as soon as practicable. Use the announced contracting-officer channel. Request context may be withheld only when disclosure would reveal confidential business strategy that is also protected under FAR 3.104 or subpart 24.2 — marking alone does not guarantee protection. The CO is the leveling channel; do not exploit or privately redistribute the edge.",
				isNot:
					"Private promises to keep proposal-necessary facts secret are not a fair process. Dumping your full solution logic in plenary to get an answer is unnecessary exposure. Staying silent forever is sometimes conservative — and it still leaves price and solution quality weaker when a leveling channel exists.",
				fits: "Apply this from first industry day through post-release Q&A: necessary acquisition facts get leveled; protectable strategy stays narrowly framed.",
				judgment:
					"If you would not want a competitor to lack the fact, do not treat private custody of it as a win.",
				checklist: [
					"Use the CO / published Q&A channel for material ambiguities.",
					"Give only necessary context; identify protection basis precisely.",
					"Ask the CO to release proposal-necessary facts publicly.",
				],
				citation: "FAR 15.201(f), FAR 3.104, FAR subpart 24.2 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "no-universal-blackout",
				title: "After RFP release, follow the CO channel — not a mythic blackout",
				story:
					"The RFP is out. A program employee invites a private call on a material ambiguity. A teammate insists FAR imposes an absolute communications blackout once the solicitation posts.",
				is: "FAR does not establish a universal solicitation-release blackout. FAR 15.201(f) makes the contracting officer the focal point after release and requires proposal-necessary acquisition information disclosed to potential offerors to be made public. Follow the RFP’s communication instructions and the CO’s Q&A process.",
				isNot:
					"Taking a private substantive program call because “leveling ended at release” is wrong. Refusing all contact of every kind because of a supposed universal blackout is also wrong. Promises to hide the call from the CO do not authorize it.",
				fits: "Post-release shaping is mostly clarifying through the solicitation channel — still engagement, newly constrained.",
				judgment:
					"Decline private material discussions; put the ambiguity on the official Q&A record.",
				checklist: [
					"Open the RFP communications instructions first.",
					"Submit ambiguities through the named CO process.",
					"Expect material answers to be leveled to the field.",
				],
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
		title: "Help Without Taking the Government’s Pen",
		summary: "Offer evidence and alternatives — not ready-to-paste PWS, J&A, or lock-in specs.",
		intro:
			"Industry may explain capabilities, feasibility, outcomes, and alternatives. The line is crossed when contractor material leads directly and predictably to the competitive work statement, or when a prospective contractor authors the agency’s justification and approval. This chapter is helpful shaping with Government ownership intact.",
		tags: ["ghostwriting", "biased-ground-rules", "ja", "brand-name-or-equal", "ownership"],
		readingMinutes: 9,
		suggestedOrder: 5,
		pieces: [
			{
				id: "bounded-requirements-help",
				title: "Give bounded evidence — not ready-to-paste requirements",
				story:
					"A deputy program manager asks for “ready-to-paste” requirements for a competition your company intends to bid. No Government team has framed outcomes or alternatives yet.",
				is: "FAR 15.201 encourages substantive early exchanges. Industry may provide documented mission data, benchmarks, alternative outcome measures, assumptions, and tradeoffs while stating that the Government must develop and control final requirements. Multiple inputs and Government ownership reduce biased-ground-rules risk under FAR 9.505-2.",
				isNot:
					"Silence is not required for every substantive exchange. Sending a complete PWS and evaluation scheme optimized for your solution with “paste unchanged” instructions is the wrong help. Capability briefings that avoid vendor-specific final language can be a safer middle path.",
				fits: "Use this whenever a customer asks you to write their competition for them: inform the authors; do not become the author of the competitive work statement you plan to bid.",
				judgment:
					"If the file would show your company as the primary drafter of the competitive PWS, stop and restructure the support.",
				checklist: [
					"Deliver facts, alternatives, and tradeoffs under Government control.",
					"State ownership of final requirements explicitly.",
					"Refuse paste-ready competitive work statements you intend to bid.",
				],
				citation: "FAR 15.201(c); FAR 9.505-2(b) (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/9.505-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "ja-facts-not-authorship",
				title: "Support J&A facts; do not develop, certify, or approve the J&A",
				story:
					"The customer believes only your prime can finish a time-sensitive migration and asks the account team to write the agency’s justification and approval for other than full and open competition.",
				is: "Under FAR 6.303-1(c), Government technical and requirements personnel provide and certify supporting data. FAR 6.303-2 specifies the J&A’s required content; FAR 6.304 requires approval at the authorized Government level. A prospective contractor may supply complete, supportable technical, schedule, market, and transition facts — and must stop there.",
				isNot:
					"Writing and approving the J&A because “you know your uniqueness” is not industry’s role. Asking the program to omit market research or interested sources is not helpful shaping. Your factual packet does not legally compel a sole-source decision.",
				fits: "Keep a bright line in sole-source conversations: facts from industry, judgment and certification from the Government.",
				judgment:
					"If you are drafting the rationale narrative or signature blocks, you have taken the Government’s pen.",
				checklist: [
					"Provide supportable facts the Government can verify.",
					"Leave J&A development, certification, and approval to authorized officials.",
					"Do not promise that your packet forces the strategy.",
				],
				citation: "FAR 6.303-1(c), 6.303-2, 6.304 (FAC 2026-01 baseline)",
				sourceUrl: "https://www.acquisition.gov/far/6.303-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "salient-characteristics-not-preference",
				title: "Describe measurable need for brand-name-or-equal — not preference",
				story:
					"A civilian customer likes your platform and asks what to put in a future brand-name-or-equal description without excluding legitimate equivalents.",
				is: "FAR 11.104 says brand-name-or-equal descriptions must state the salient physical, functional, or performance characteristics an equal item must meet. Performance specifications are preferred where suitable. Industry can explain measurable mission needs without turning preference into lock-in. (Agencies adopting an RFO Part 11 model deviation may remove or reserve related baseline coverage — verify the vehicle you are under.)",
				isNot:
					"Model number alone with no equal criteria is not enough. Proprietary implementation details unrelated to minimum need are not salient characteristics. “Only our product is acceptable because the program prefers it” is preference, not specification craft.",
				fits: "Use this when product teams are invited into requirements talks: mission-linked measures any equal can demonstrate.",
				judgment:
					"If an equal competitor could not know what to meet, the description is not ready.",
				checklist: [
					"List measurable physical, functional, or performance traits.",
					"Tie each trait to mission need.",
					"Drop vendor-only implementation trivia.",
				],
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
		title: "Diagnose the Conflict Before Choosing the Remedy",
		summary: "Name the OCI archetype first — then match avoidance, neutralization, or mitigation.",
		intro:
			"Organizational conflicts of interest are not one firewall away from cured. Biased ground rules, unequal access, and impaired objectivity present different facts and different remedies. Diagnose early, disclose through counsel, and let the contracting officer resolve significant conflicts — do not shop informal waivers from the program office.",
		tags: ["oci", "biased-ground-rules", "unequal-access", "impaired-objectivity", "mitigation"],
		readingMinutes: 10,
		suggestedOrder: 6,
		pieces: [
			{
				id: "three-archetypes",
				title: "Separate biased ground rules, unequal access, and impaired objectivity",
				story:
					"An advisory contract asks your team to draft the follow-on PWS your delivery business wants to bid. Elsewhere, advisory staff hold competitors’ proprietary roadmaps while capture wants the related competition. Separately, evaluation support would judge a product another division sells.",
				is: "FAR 9.505-2(b) addresses contractors whose work leads directly and predictably to a competitive work statement — biased ground rules risk, often resolved by avoidance or declining authorship unless an exception applies. FAR 9.505-4(b) addresses access to other companies’ proprietary information — unequal access, typically needing agreements and controls the CO can accept. FAR 9.505-3 addresses evaluating your own or a competitor’s offers — impaired objectivity, needing safeguards or removal of the conflicted role.",
				isNot:
					"One corporate firewall does not automatically cure all three. Moving PWS drafting to another internal division without telling the CO does not erase organizational interest. Late disclosure after selection does not undo ground-rules concern. Employee NDAs alone do not bind the agency to accept mitigation.",
				fits: "Run a short diagnostic whenever advisory work sits near a pursuit: which archetype, which facts, which remedy family.",
				judgment:
					"Match remedy to archetype. Avoidance for ground-rules authorship; controlled mitigation for information access; remove or safeguard conflicted evaluation.",
				checklist: [
					"Name the archetype before proposing a fix.",
					"Escalate potential OCI early through counsel to the CO.",
					"Offer bounded factual input under Government control when authorship is off-limits.",
				],
				citation: "FAR 9.505-2(b); FAR 9.505-3; FAR 9.505-4(b); FAR 9.504",
				sourceUrl: "https://www.acquisition.gov/far/9.505-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "portfolio-remedies-and-waiver",
				title: "Resolve significant OCIs early — waivers are Government acts",
				story:
					"A large prime acquires a consultancy that drafted a follow-on work statement, evaluates a product the prime sells, and holds prospective offerors’ proprietary data. Leadership wants one firewall and a program “waiver email.”",
				is: "FAR 9.504 directs contracting officers to identify and resolve significant OCIs early through avoidance, neutralization, or mitigation. Remedies are fact-specific. Under FAR 9.503, only the agency head or an authorized designee — never the contractor or program office — may approve a written waiver in the Government’s interest.",
				isNot:
					"Informal program assurance is not a waiver. Corporate restructuring does not erase prior access, work, or incentives. Declaring all conflicts cured with a single control set outruns the facts.",
				fits: "Use this in mergers, advisory portfolios, and multi-division pursuits: disclose early, separate analyses, propose matched remedies.",
				judgment:
					"If you need a waiver narrative, you need the Government’s authorized process — not a hallway blessing.",
				checklist: [
					"Disclose early and separate the OCI analyses.",
					"Propose avoidance, neutralization, or mitigation matched to facts.",
					"Never treat program informal assent as a FAR 9.503 waiver.",
				],
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
		title: "When Shaping Becomes an Integrity Incident",
		summary: "Stop, preserve, escalate — leaks, improper hiring, and protected information end shaping.",
		intro:
			"Most shaping is lawful exchange. Some moments are not: anonymous competitor proposal packets, protected source-selection notes, or hiring a former official into restricted capture duties without screening. This chapter is the stop-work discipline when integrity rules take the pen out of capture’s hand.",
		tags: ["procurement-integrity", "escalation", "revolving-door", "ethics", "leak"],
		readingMinutes: 8,
		suggestedOrder: 7,
		pieces: [
			{
				id: "accidental-protected-receipt",
				title: "Stop review the moment protected material is recognized",
				story:
					"Before award, a capture mailbox receives an anonymous attachment labeled with a competitor’s name. A reviewer opens the first page and sees proposal pricing and evaluation notes.",
				is: "41 U.S.C. § 2102(b) and FAR 3.104-3 prohibit knowingly obtaining protected bid, proposal, or source-selection information before award. Accidental receipt and a brief unintentional opening differ from knowingly continuing to review, copy, or disseminate after recognition. Stop review and distribution, preserve evidence, isolate recipients, and immediately notify company legal or ethics for coordinated disclosure to the contracting officer. FAR 3.104-7 requires the agency to assess possible impact and act.",
				isNot:
					"Reading the file fully “to see if it is useful” before reporting is knowing continued review. Deleting files and logs to avoid possession accusations destroys evidence. Forwarding to pricing with the name stripped is still misuse.",
				fits: "Post this as the team’s immediate response card for any suspected protected packet during shaping or propose.",
				judgment:
					"Speed of stop and escalate matters more than curiosity. Counsel drives notice; capture does not freelance remediation.",
				checklist: [
					"Stop reading and stop forwarding immediately.",
					"Preserve the message, metadata, and access list.",
					"Notify legal/ethics for CO-coordinated next steps.",
				],
				citation: "41 U.S.C. § 2102(b); FAR 3.104-3(b), 3.104-7; S&K Aerospace, LLC, B-411648 (Sept. 18, 2015)",
				sourceUrl: "https://www.gao.gov/products/b-411648",
				sourceKind: "decision",
			},
			{
				id: "former-official-screening",
				title: "Screen former officials before capture duties or compensation",
				story:
					"Recruiting wants to hire a recently departed civilian official who held senior acquisition duties involving contracts awarded to your company. The business unit wants immediate customer-facing capture work.",
				is: "FAR 3.104-3(d) imposes a one-year compensation restriction for certain former officials based on specified procurement roles and decisions. FAR 3.104-2 also flags separate 18 U.S.C. 207 post-employment representational restrictions. Applicability is fact-specific: obtain a documented legal and ethics review of roles, decisions, dates, contracts, and proposed duties, then impose any compensation or representational limits before committing.",
				isNot:
					"Restrictions do not all end the day Federal service ends. A hiring manager’s gut check about “what they remember” is not a screen. Parking the same work in a staffing affiliate does not avoid review.",
				fits: "Gate every former-official hire touching pursuit work through counsel before titles, comps, and call plans are set.",
				judgment:
					"If duties or pay are already promised, you may already be late — freeze activity and get counsel in.",
				checklist: [
					"Document prior roles, decisions, dates, and contracts.",
					"Compare proposed duties to compensation and representational limits.",
					"Impose written restrictions before customer-facing capture starts.",
				],
				citation: "FAR 3.104-3(d); FAR 3.104-2(b)(3)",
				sourceUrl: "https://www.acquisition.gov/far/3.104-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "unsolicited-not-a-shortcut",
				title: "Do not launder marketing as an unsolicited proposal",
				story:
					"Growth wants to stamp a standard cloud brochure “unsolicited proposal” for a civilian requirement already described in a published presolicitation.",
				is: "FAR 15.603 requires a valid unsolicited proposal to be innovative and unique, independently originated, prepared without Government direction, sufficiently detailed, and not an advance proposal for a known competitively acquirable or previously published requirement. Advertising and routine commercial offers are excluded. Use the agency’s market-research channel instead.",
				isNot:
					"“The Government did not request this exact PDF” is not enough. Binding firm-fixed pricing alone does not qualify a routine offer. Calling a brochure innovative does not make it so.",
				fits: "Keep shaping inside lawful exchange and market research when the requirement is already on the street.",
				judgment:
					"If the need is already published or competitively acquirable, you are in the wrong instrument.",
				checklist: [
					"Check whether the requirement is already published or forecast as competitive.",
					"Reserve true unsolicited proposals for unique, independently originated ideas.",
					"Route routine offers through market-research or solicitation channels.",
				],
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
			"Shape work succeeds when early exchange stays lawful, evidence stays usable, ownership stays with the Government, and integrity incidents get stopped cold. When the picture feels steadier, check yourself — or return to the shelf for another chapter.",
	}),
];
