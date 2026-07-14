import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Bid / No-Bid shelf — investment gates, eligibility, Pwin, price, and re-gate
 * discipline. Pieces use citation + sourceUrl + sourceKind (no invented quotes).
 */
export const BID_NO_BID_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "gate-is-investment",
		unitId: "bid-no-bid",
		title: "The Gate Is an Investment Decision",
		summary: "A bid gate spends scarce B&P—test evidence, hard gates, and return before cheering the chase.",
		intro:
			"Capture boards exist to allocate money, specialists, and calendar against a portfolio—not to rubber-stamp excitement. This chapter frames the first formal gate as an investment control: what must be true before the company buys more pursuit, and what enthusiasm cannot substitute for.",
		tags: ["gate-discipline", "investment-decision", "bp", "portfolio"],
		readingMinutes: 7,
		suggestedOrder: 1,
		startHere: true,
		pieces: [
			{
				id: "gate-purpose",
				title: "What the board is deciding",
				story:
					"A capture lead walks in with a glowing customer meeting and asks for a full proposal budget. The room wants to say yes to momentum. The board’s job is narrower and harder.",
				is: "A bid gate is a staged investment decision: authorize the next tranche of bid and proposal (B&P) effort only when eligibility, readiness, win likelihood, and risk-adjusted economics clear agreed thresholds. The board challenges evidence and owners—not vibes.",
				isNot:
					"It is not a pep rally, not a reward for customer access alone, and not a promise that every technically feasible pursuit deserves a full color-team cycle. Technical capability without a path to award and return is incomplete.",
				fits: "Use this lens at every tranche—from early capture spend through final proposal authorization. Portfolio capacity (solution architects, pricing, proposal ops) is finite; one weak yes starves stronger bids.",
				judgment:
					"If the package cannot name the hard gates, the Section M method, the competitor picture, and the remaining B&P versus expected contribution, the board is not ready to fund—it is being asked to hope.",
				checklist: [
					"Name the next spend tranche and what evidence it must retire",
					"List hard gates (entity, SAM, vehicle, set-aside, clearances) with owners and dates",
					"State opportunity cost against competing pursuits in the same window",
				],
				citation: "FAR 31.205-18 (B&P costs); capture craft (gate as investment)",
				sourceUrl: "https://www.acquisition.gov/far/31.205-18",
				sourceKind: "controlling-authority",
			},
			{
				id: "why-triad",
				title: "Why change, why now, why us",
				is: "Disciplined capture separates three customer questions: why change (problem or opportunity the buyer must solve), why now (trigger, consequence, or funding/acquisition window that forces action), and why us (a discriminator the evaluation will actually reward).",
				isNot:
					"It is not ‘why our growth target,’ ‘why our fiscal year end,’ or ‘why our logo.’ A slogans-only triad collapses under Section M scrutiny.",
				fits: "Park the triad next to evaluation factors: if ‘why us’ cannot map to stated factors and evidence, the pursuit’s value case is marketing theater.",
				citation: "FAR 15.304 (evaluation factors); capture craft (customer-value framing)",
				sourceUrl: "https://www.acquisition.gov/far/15.304",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 31.205-18 — Bid and proposal costs",
				url: "https://www.acquisition.gov/far/31.205-18",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.304 — Evaluation factors and significant subfactors",
				url: "https://www.acquisition.gov/far/15.304",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "case-agency-will-score",
		unitId: "bid-no-bid",
		title: "Build the Case the Agency Will Score",
		summary: "Model the competition Section M creates—LPTA vs tradeoff, past performance inventory, black-hat reality.",
		intro:
			"Eligibility gets you in the room; evaluation decides the award. This chapter ties the gate package to the solicitation’s actual method, admissible past-performance evidence, and a competitor picture that can change the bid—not a capture narrative the agency never scores.",
		tags: ["section-m", "lpta", "tradeoff", "past-performance", "black-hat"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "section-m-method",
				title: "LPTA versus tradeoff changes the bid",
				story:
					"Two RFPs look similar on scope. One is lowest price technically acceptable; the other weights technical approach above price in a best-value tradeoff. Same solution and price strategy for both is how teams lose twice.",
				is: "Under LPTA, the gate tests whether the team can meet or exceed every acceptability standard at a competitive evaluated price—tradeoffs against price are not the award logic. Under a stated tradeoff, the gate tests whether evaluated strengths can justify the price position against named competitors.",
				isNot:
					"It is not ‘evaluators will use unstated preferences,’ and it is not ‘lowest price always wins.’ The solicitation’s method controls what a strength is worth.",
				fits: "Rewrite Pwin, solution shape, and pricing when Section M (or its Subpart 8.4 / 16.505 analogue) changes—method is a hard input, not a style preference.",
				checklist: [
					"Quote the stated basis of award and relative importance of factors",
					"Map each discriminator to a scored factor or subfactor",
					"Refuse ‘premium solution’ defaults under LPTA without a compliance reason",
				],
				citation: "FAR 15.101-1; FAR 15.101-2",
				sourceUrl: "https://www.acquisition.gov/far/15.101-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "past-performance-inventory",
				title: "Inventory what evaluators may weigh",
				is: "Build a verified inventory of eligible references—scope, recency, CPARS themes, customer contacts, and risks—before writers ‘make relevance sound stronger.’ When affiliate past performance is allowed, show committed affiliate resources and meaningful involvement as the solicitation and case law require.",
				isNot:
					"It is not two contracts the capture lead remembers, not dumping every corporate award without Section M fit, and not assuming the agency will mine CPARS for your best story.",
				fits: "Run this inventory early enough to drive teaming and reference selection—not as a compliance scramble after Pink Team.",
				judgment:
					"If the inventory cannot support the factors that dominate Section M, either fix the case or lower Pwin—do not paper over a thin record.",
				citation: "FAR 15.305(a)(2); Eagle Eye Electric, LLC, B-415562, B-415562.3",
				sourceUrl: "https://www.gao.gov/products/b-415562%2Cb-415562.3",
				sourceKind: "decision",
			},
			{
				id: "black-hat-use",
				title: "Use the black hat to change decisions",
				is: "A black hat models the strongest competitor from observable signals—incumbency, transition risk, price band, neutralizing features—and forces the board to separate facts from assumptions with owners and tests.",
				isNot:
					"It is not permission to relabel adverse findings ‘low confidence’ and proceed unchanged, and it is not automatic ‘incumbent always wins / always loses.’",
				fits: "Feed black-hat outputs into discriminator design, transition narrative, price-to-win, and Pwin—or into a no-bid—before color teams polish a losing case.",
				citation: "FAR 15.305; capture craft (competitive black hat)",
				sourceUrl: "https://www.acquisition.gov/far/15.305",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.101 — Best value continuum",
				url: "https://www.acquisition.gov/far/15.101",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.305 — Proposal evaluation",
				url: "https://www.acquisition.gov/far/15.305",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "actual-offeror-ready",
		unitId: "bid-no-bid",
		title: "Prove the Actual Offeror Is Ready",
		summary: "Entity-specific hard gates: responsibility, SAM, vehicle access, accounting, key people—no affiliate magic.",
		intro:
			"‘We are a major contractor’ is not a responsibility determination. This chapter insists the gate package prove readiness for the legal entity that will submit—and for the solicitation’s stated submission gates—before B&P assumes the company can bid.",
		tags: ["responsibility", "sam", "hard-gate", "key-personnel", "accounting-system"],
		readingMinutes: 9,
		suggestedOrder: 3,
		pieces: [
			{
				id: "responsibility-standards",
				title: "FAR 9.104-1 is a readiness checklist",
				is: "General standards of responsibility cover adequate financial resources (or ability to obtain them); ability to comply with schedule considering all commitments; satisfactory performance, integrity, and ethics records; necessary organization, experience, accounting and operational controls, and technical skills (or ability to obtain them); necessary equipment and facilities (or ability to obtain them); and legal qualification and eligibility.",
				isNot:
					"It is not ‘annual revenue exceeds contract value,’ not technical acceptability alone, and not something you safely defer until after award when the RFP already demands evidence of readiness.",
				fits: "Assign owners and remediation paths for each gap at the gate—especially financing, facilities, and schedule compression on aggressive starts.",
				citation: "FAR 9.104-1",
				sourceUrl: "https://www.acquisition.gov/far/9.104-1",
				sourceKind: "controlling-authority",
			},
			{
				id: "sam-and-entity-gates",
				title: "SAM, vehicle, and clearance belong to the offeror",
				story:
					"Proposals are due Friday. The legal entity is correct, but SAM is inactive. An affiliate holds the named IDIQ; clearances are ‘pending.’ Affiliation does not transfer eligibility.",
				is: "Map every hard gate—active SAM under FAR 4.1102 / 52.204-7 (and listed exceptions or Alternate I where they apply), vehicle or Schedule access, licenses, clearances, set-aside size status—to the actual offeror and the due date. Proceed only on written evidence or a solicitation-supported cure path.",
				isNot:
					"It is not using an affiliate’s SAM or contract as if it were yours, not explaining missing gates in an assumptions volume, and not treating planned approvals as present facts.",
				fits: "Keep a hard-gate register beside the compliance matrix; any red item without a timed cure is a no-bid candidate.",
				checklist: [
					"Confirm offeror UEI / SAM status against the solicitation’s timing rule",
					"Confirm the submitting entity holds the named vehicle pool or Schedule coverage",
					"Confirm clearances/certs required at submission—not ‘at kickoff’",
				],
				citation: "FAR 4.1102; FAR 52.204-7; FAR 16.505",
				sourceUrl: "https://www.acquisition.gov/far/52.204-7",
				sourceKind: "controlling-authority",
			},
			{
				id: "accounting-and-keys",
				title: "Cost-type systems and named keys",
				is: "For cost-reimbursement work, require current, entity- and system-specific evidence that costs can be identified and accumulated as required—not a six-year-old review of a different segment after ERP and rate changes. When Section M demands named keys with commitment letters, require available, qualified people and compliant commitments before submission.",
				isNot:
					"‘DCAA compliant’ as a permanent brand is not evidence. Submitting an unavailable key person and ‘signing later’ is not a strategy—it is a protest risk.",
				fits: "Treat accounting adequacy and key-person availability as bid gates when the solicitation makes them material; redesign or no-bid when they fail late.",
				citation: "FAR 16.301-3; FAR 15.305(a); IT Objects, LLC, B-418012, B-418012.2",
				sourceUrl: "https://www.acquisition.gov/far/16.301-3",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 9.104-1 — General standards",
				url: "https://www.acquisition.gov/far/9.104-1",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.204-7 — System for Award Management",
				url: "https://www.acquisition.gov/far/52.204-7",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "pwin-evidence-model",
		unitId: "bid-no-bid",
		title: "Pwin Is an Evidence Model, Not a Mood",
		summary: "Rebuild win probability from factors, competitors, and dependencies—CRM folklore is not a forecast.",
		intro:
			"Pwin is capture craft, not a FAR formula. Used well, it is a living forecast aligned to Section M and competitor position. Used poorly, it is a frozen CRM number that legitimizes sunk spend. This chapter makes the evidence model explicit.",
		tags: ["pwin", "evidence", "capture-craft", "section-m"],
		readingMinutes: 7,
		suggestedOrder: 4,
		pieces: [
			{
				id: "pwin-rebuild",
				title: "Rebuild when the competition changes",
				story:
					"The CRM still says 65%. The draft RFP changed the evaluation method months ago. Nobody refreshed the number. The board is about to fund a full proposal on a museum piece.",
				is: "Evidence-based Pwin scores current customer, competitive, solution, price, past-performance, and hard-gate evidence against the stated factors; records assumptions and owners; and updates when Section M, competitors, or gates change.",
				isNot:
					"It is not a sales promise, not a quota, not a number frozen at B&P approval, and not an average of CRM folklore and the capture lead’s optimism. A system field is not objective by virtue of being stored.",
				fits: "Park Pwin beside price-to-win and cost estimating: three different questions—can we win, what price position wins, what does performance cost.",
				judgment:
					"Conditional funding is acceptable only when cheap, fast evidence can retire named uncertainty—not as a way to postpone a no-bid.",
				checklist: [
					"List factors in evaluation order and score current evidence against each",
					"Model the strongest competitor explicitly",
					"Flag correlated assumptions so they are not double-counted",
				],
				citation: "Capture craft (evidence-based Pwin); FAR 15.304; FAR 15.305",
				sourceUrl: "https://www.acquisition.gov/far/15.305",
				sourceKind: "capture-practice",
			},
			{
				id: "pwin-weighted",
				title: "Weight evidence the way the agency weights factors",
				is: "On a tradeoff, customer access that improves information quality still does not erase an evaluated technical weakness or a material price gap. Lower Pwin unless named actions can close the gaps the solicitation will score.",
				isNot:
					"It is not ‘relationship outweighs stated factors,’ not a company-wide historical win rate pasted onto this competition, and not counting every favorable fact as independent when they share one assumption.",
				fits: "Force the gate to either fund actions that change scored outcomes or accept a lower forecast—governance theater that holds Pwin constant after material change is a control failure.",
				citation: "Capture craft (weighted Pwin); FAR 15.304; FAR 15.305",
				sourceUrl: "https://www.acquisition.gov/far/15.304",
				sourceKind: "capture-practice",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.304 — Evaluation factors",
				url: "https://www.acquisition.gov/far/15.304",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "winning-vs-walkaway-price",
		unitId: "bid-no-bid",
		title: "Winning Price Is Not the Walk-Away Price",
		summary: "Separate price-to-win from the company’s economic floor—close the gap by redesign or no-bid.",
		intro:
			"Competitive analysis may show where awards cluster. Finance may show the lowest executable price that clears risk-adjusted margin. Those numbers answer different questions. Confusing them is how companies buy losses—or lose while protecting margin they never modeled into Pwin.",
		tags: ["price-to-win", "walk-away", "margin", "economics"],
		readingMinutes: 6,
		suggestedOrder: 5,
		pieces: [
			{
				id: "two-prices",
				title: "Two numbers, one gate",
				story:
					"Black hat says $92–96M wins. Finance says $101M is the walk-away. Bidding $94M ‘to stay in it’ and recovering margin through changes is not a pricing strategy—it is a hope.",
				is: "Price-to-win estimates the competitive award zone given method, competitors, and solution. Walk-away is the seller’s minimum acceptable economics and risk. A sound gate keeps them separate, tests lawful redesign to close a gap, and updates Pwin when price position moves.",
				isNot:
					"It is not bidding below walk-away to ‘win then recover,’ not freezing Pwin while bidding above the competitive zone, and not treating Government price-analysis rules as a substitute for the company’s own floor.",
				fits: "Escalate gap closures as redesign sprints with compliance and deadline checks—or no-bid. Portfolio economics also compare incremental B&P and specialist opportunity cost to risk-adjusted contribution.",
				checklist: [
					"State price-to-win range with competitor and method assumptions",
					"State walk-away with risk-adjusted margin and contingency",
					"If gap remains, choose redesign, no-bid, or explicit Pwin reduction—not silent hope",
				],
				citation: "Capture craft (competitive pricing); FAR 15.404-1",
				sourceUrl: "https://www.acquisition.gov/far/15.404-1",
				sourceKind: "capture-practice",
			},
			{
				id: "set-aside-team-economics",
				title: "Eligibility does not cure bad economics",
				is: "When the company is ineligible to prime (for example a small-business or 8(a) set-aside), a compliant subcontract role still needs acceptable workshare, risk allocation, and return. No-bid the role if negotiations cannot clear the floor.",
				isNot:
					"It is not priming while ineligible, not ‘any set-aside subcontract revenue is strategic,’ and not accepting exclusivity-plus-uncompensated risk just to stay on the chart.",
				fits: "After strategy is final, this unit owns the business decision—market shaping is upstream; team economics are the gate.",
				citation: "FAR 52.219-6; FAR 52.219-14; FAR 19.805-2",
				sourceUrl: "https://www.acquisition.gov/far/52.219-6",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.404-1 — Proposal analysis techniques",
				url: "https://www.acquisition.gov/far/15.404-1",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.219-14 — Limitations on subcontracting",
				url: "https://www.acquisition.gov/far/52.219-14",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "regate-willing-to-stop",
		unitId: "bid-no-bid",
		title: "Re-Gate What Changed—and Be Willing to Stop",
		summary: "Final RFP and sunk cost do not lock the bid; material change resets the case—including no-bid.",
		intro:
			"Draft-RFP authorization is not a lifetime pass. When the final solicitation erases your discriminator, changes contract type, or compresses transition, the company must re-run the stack. Prior B&P is sunk. Stopping can be the disciplined win.",
		tags: ["regate", "final-rfp", "sunk-cost", "protest-timing", "no-bid"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "final-rfp-regate",
				title: "Final terms reset the evidence",
				is: "When the final RFP materially changes contract type, evaluation, transition, or schedule, run a new gate: refresh compliance, solution, price, Pwin, staffing, and economics—and be willing to no-bid. The solicitation is the Government’s request; draft assumptions do not survive by inertia.",
				isNot:
					"It is not ‘continue because we already approved,’ not updating only the compliance matrix while strategy stays frozen, and not waiting for color teams to notice that the deal changed.",
				fits: "Treat final RFP drop as a mandatory control point on the pursuit calendar—same seriousness as the first investment gate.",
				citation: "Capture craft (final-RFP re-gate); FAR 15.203",
				sourceUrl: "https://www.acquisition.gov/far/15.203",
				sourceKind: "capture-practice",
			},
			{
				id: "sunk-cost",
				title: "Ignore spent B&P; judge the remainder",
				story:
					"$1.4M is gone. The final RFP killed the discriminator and drove Pwin below floor. Another $600K would finish the proposal. ‘We can’t waste the $1.4M’ is the fallacy talking.",
				is: "Compare remaining proposal cost and opportunity cost with the present risk-adjusted value of bidding. No-bid if the revised case fails. Authorize only a small, time-boxed fact check when one unresolved assumption could restore the business case.",
				isNot:
					"It is not continuing to justify past spend, and it is not holding Pwin constant for ‘internal consistency’ after the competition changed.",
				fits: "Executives own this control; capture teams escalate early when the case is failing so the board can stop while options remain.",
				citation: "Capture craft (sunk-cost discipline); FAR 31.205-18",
				sourceUrl: "https://www.acquisition.gov/far/31.205-18",
				sourceKind: "capture-practice",
			},
			{
				id: "ambiguity-and-stack",
				title: "Ambiguity deadlines and the full stack",
				is: "Apparent solicitation improprieties (for example conflicting LPTA vs tradeoff text that Q&A fails to resolve) demand timely counsel-led decisions—preaward protest clocks generally run before initial proposals. Separately, at the final gate, passing hard gates is necessary but not sufficient: if why-us, urgency, Pwin, and economics fail, no-bid.",
				isNot:
					"It is not choosing the interpretation that favors you and protesting after award, and it is not bidding because eligibility and compliance ‘guarantee competitiveness.’",
				fits: "Keep legal timing and portfolio economics on the same gate agenda—either can end the pursuit cleanly.",
				checklist: [
					"Calendar protest / clarification deadlines against proposal due date",
					"Re-score the full stack: eligibility → value case → Pwin → price → return",
					"Record the no-bid rationale so the next gate learns",
				],
				citation: "4 C.F.R. 21.2(a)(1); FAR 33.103; capture craft (final portfolio gate)",
				sourceUrl: "https://www.ecfr.gov/current/title-4/chapter-I/subchapter-B/part-21/section-21.2",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.203 — Requests for proposals",
				url: "https://www.acquisition.gov/far/15.203",
				kind: "controlling-authority",
			},
			{
				label: "FAR 33.103 — Protests to the agency",
				url: "https://www.acquisition.gov/far/33.103",
				kind: "controlling-authority",
			},
		],
	}),
];
