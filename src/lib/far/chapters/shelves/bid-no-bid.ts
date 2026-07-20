import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Bid / No-Bid shelf — investment gates, eligibility, Pwin, price, and re-gate
 * discipline. Reading shape: each piece is a definition card (term title +
 * expanded glossary teach + optional Watch for + citation/source trail).
 */
export const BID_NO_BID_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "gate-is-investment",
		unitId: "bid-no-bid",
		title: "Bid gates as B&P investment decisions",
		summary:
			"Defines the bid gate: evidence, hard gates, and expected return before committing capture spend.",
		intro:
			"Terms for the first formal gate: what the board decides, and the customer-value triad that must map to evaluation.",
		tags: ["gate-discipline", "bp"],
		readingMinutes: 7,
		suggestedOrder: 1,
		pieces: [
			{
				id: "gate-purpose",
				title: "Bid gate",
				teach: "A bid gate is a staged investment decision that authorizes the next tranche of bid and proposal (B&P) effort only when eligibility, readiness, win likelihood, and risk-adjusted economics clear agreed thresholds. The board challenges evidence and owners — not momentum. Apply that lens at every tranche, from early capture spend through final proposal authorization. Portfolio capacity (solution architects, pricing, proposal ops) is finite; compare incremental B&P and specialist opportunity cost with expected risk-adjusted contribution before funding the chase. FAR 31.205-18 addresses allowability of B&P costs; it does not reimburse each losing bid or erase internal opportunity cost.",
				watchFor:
					"Don't treat the gate as a pep rally, a reward for customer access alone, or a promise that every technically feasible pursuit deserves a full color-team cycle. Technical capability without a path to award and return is incomplete.",
				citation: "FAR 31.205-18 (B&P costs); capture craft (gate as investment)",
				sourceUrl: "https://www.acquisition.gov/far/31.205-18",
				sourceKind: "controlling-authority",
			},
			{
				id: "why-triad",
				title: "Why change, why now, why us",
				teach: "A disciplined capture triad separates three customer questions: why change (the problem or opportunity the buyer must solve), why now (the trigger, consequence, or funding/acquisition window that forces action), and why us (a discriminator the evaluation will actually reward). Park the triad beside evaluation factors under FAR 15.304 — if why us cannot map to stated factors and evidence, the pursuit's value case is marketing theater.",
				watchFor:
					"Don't collapse the triad into why our growth target, why our fiscal year end, or why our logo. A slogans-only triad fails under Section M scrutiny. Why change and why now do not become irrelevant just because an RFP has posted.",
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
		title: "LPTA versus tradeoff, past performance, and competitive analysis",
		summary:
			"Defines the evaluation case Section M will score — including LPTA vs tradeoff, past-performance inventory, and black-hat competitor views.",
		intro:
			"Terms for building a gate package the agency will actually score — method, past performance, and competitor position.",
		tags: ["section-m", "lpta", "tradeoff", "past-performance", "black-hat"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "section-m-method",
				title: "LPTA versus tradeoff",
				teach: "Lowest price technically acceptable (LPTA) under FAR 15.101-2 tests whether the team can meet or exceed every acceptability standard at a competitive evaluated price — tradeoffs against price are not the award logic. A stated best-value tradeoff under FAR 15.101-1 tests whether evaluated strengths can justify the price position against named competitors. Rewrite Pwin, solution shape, and pricing when Section M (or its Subpart 8.4 / 16.505 analogue) changes — method is a hard input, not a style preference.",
				watchFor:
					"Don't assume evaluators will use unstated preferences, that lowest price always wins, or that one premium solution and price strategy fits both LPTA and tradeoff competitions.",
				citation: "FAR 15.101-1; FAR 15.101-2",
				sourceUrl: "https://www.acquisition.gov/far/15.101-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "past-performance-inventory",
				title: "Past-performance inventory",
				teach: "A past-performance inventory is a verified list of eligible references — scope, recency, CPARS themes, customer contacts, and risks — built before writers make relevance sound stronger. When affiliate past performance is allowed, show committed affiliate resources and meaningful involvement as the solicitation and case law require (see Eagle Eye Electric). Run the inventory early enough to drive teaming and reference selection, not as a compliance scramble after Pink Team. FAR 15.305(a)(2) permits evaluation of relevant past performance and information from sources beyond the offeror's submission.",
				watchFor:
					"Don't rely on two contracts the capture lead remembers, dump every corporate award without Section M fit, or assume the agency will mine CPARS for your best story. Affiliate examples without committed resources showing meaningful involvement may get little or no weight.",
				citation: "FAR 15.305(a)(2); Eagle Eye Electric, LLC, B-415562, B-415562.3",
				sourceUrl: "https://www.gao.gov/products/b-415562%2Cb-415562.3",
				sourceKind: "decision",
			},
			{
				id: "black-hat-use",
				title: "Black hat (competitive analysis)",
				teach: "A black hat models the strongest competitor from observable signals — incumbency, transition risk, price band, neutralizing features — and forces the board to separate facts from assumptions with owners and tests. Feed black-hat outputs into discriminator design, transition narrative, price-to-win, and Pwin — or into a no-bid — before color teams polish a losing case. Incumbency is neither an automatic win nor loss; the decision turns on the solicitation's factors, credible customer evidence, and discriminators the evaluation will reward.",
				watchFor:
					"Don't relabel adverse findings low confidence and proceed unchanged, treat a single stakeholder complaint as proof the customer will replace the incumbent, or assume every recompete favors the challenger because agencies must rotate vendors.",
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
		title: "Responsibility standards, SAM status, vehicle access, and accounting readiness",
		summary:
			"Defines entity-specific hard gates that decide whether this offeror can actually submit and perform.",
		intro:
			"Terms for proving the legal entity that will submit can meet responsibility standards and stated submission gates.",
		tags: ["responsibility", "sam", "hard-gate", "key-personnel", "accounting-system"],
		readingMinutes: 9,
		suggestedOrder: 3,
		pieces: [
			{
				id: "responsibility-standards",
				title: "Standards of responsibility (FAR 9.104-1)",
				teach: "FAR 9.104-1's general standards of responsibility cover adequate financial resources (or ability to obtain them); ability to comply with schedule considering all commitments; satisfactory performance, integrity, and ethics records; necessary organization, experience, accounting and operational controls, and technical skills (or ability to obtain them); necessary equipment and facilities (or ability to obtain them); and legal qualification and eligibility. Assign owners and remediation paths for each gap at the gate — especially financing, facilities, and schedule compression on aggressive starts. Large size and past awards do not make readiness automatic.",
				watchFor:
					"Don't check only whether annual revenue exceeds contract value, treat technical acceptability as conclusive proof of responsibility, or defer every responsibility issue until after award when the RFP already demands evidence of readiness.",
				citation: "FAR 9.104-1",
				sourceUrl: "https://www.acquisition.gov/far/9.104-1",
				sourceKind: "controlling-authority",
			},
			{
				id: "sam-and-entity-gates",
				title: "Hard gates (SAM, vehicle, clearance)",
				teach: "Hard gates are non-negotiable submission requirements mapped to the actual offeror and the due date — active SAM under FAR 4.1102 / 52.204-7 (and listed exceptions or Alternate I where they apply), vehicle or Schedule access, licenses, clearances, set-aside size status. Proceed only on written evidence or a solicitation-supported cure path. Keep a hard-gate register beside the compliance matrix; any red item without a timed cure is a no-bid candidate. Under basic 52.204-7, active SAM is required at submission and award unless a listed exception or the prescribed Alternate I applies. Affiliation does not transfer eligibility.",
				watchFor:
					"Don't use an affiliate's SAM or contract as if it were yours, explain missing gates in an assumptions volume, treat planned approvals as present facts, or assume SAM is required only at award when the solicitation and basic clause require it at submission.",
				citation: "FAR 4.1102; FAR 52.204-7; FAR 16.505",
				sourceUrl: "https://www.acquisition.gov/far/52.204-7",
				sourceKind: "controlling-authority",
			},
			{
				id: "accounting-and-keys",
				title: "Accounting system adequacy and key personnel",
				teach: "For cost-reimbursement work, FAR 16.301-3 requires an accounting system adequate for determining costs applicable to the contract. Require current, entity- and system-specific evidence that costs can be identified and accumulated as required — not a six-year-old review of a different segment after ERP and rate changes. When Section M demands named keys with commitment letters, require available, qualified people and compliant commitments before submission (see IT Objects). Treat accounting adequacy and key-person availability as bid gates when the solicitation makes them material; redesign or no-bid when they fail late.",
				watchFor:
					"Don't treat DCAA compliant as a permanent brand that transfers across segments and systems. Submitting an unavailable key person and signing later is a protest risk, not a strategy. Renaming a deputy as program manager without checking minimum qualifications or rewriting the solution leaves the proposal inconsistent.",
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
		title: "Evidence-based and factor-weighted probability of win",
		summary:
			"Defines Pwin as a living, evidence-weighted judgment — not a CRM folklore number.",
		intro:
			"Capture-practice vocabulary for Pwin as a living forecast aligned to Section M — not a frozen CRM number.",
		tags: ["pwin", "capture-craft", "section-m"],
		readingMinutes: 7,
		suggestedOrder: 4,
		pieces: [
			{
				id: "pwin-rebuild",
				title: "Evidence-based Pwin",
				teach: "Evidence-based Pwin is a living capture forecast that scores current customer, competitive, solution, price, past-performance, and hard-gate evidence against the stated factors; records assumptions and owners; and updates when Section M, competitors, or gates change. Park Pwin beside price-to-win and cost estimating: three different questions — can we win, what price position wins, what does performance cost. Conditional funding is acceptable only when cheap, fast evidence can retire named uncertainty — not as a way to postpone a no-bid.",
				watchFor:
					"Don't treat Pwin as a sales promise, a quota, a number frozen at B&P approval, or an average of CRM folklore and the capture lead's optimism. A system field is not objective by virtue of being stored.",
				citation: "Capture craft (evidence-based Pwin); FAR 15.304; FAR 15.305",
				sourceUrl: "https://www.acquisition.gov/far/15.305",
				sourceKind: "capture-practice",
			},
			{
				id: "pwin-weighted",
				title: "Factor-weighted Pwin",
				teach: "Factor-weighted Pwin scores current evidence against the stated factors and competitor positions in evaluation order, models dependencies so correlated assumptions are not double-counted, and lowers the forecast unless named actions can close gaps the solicitation will score. On a tradeoff, customer access that improves information quality still does not erase an evaluated technical weakness or a material price gap. Force the gate to either fund actions that change scored outcomes or accept a lower forecast.",
				watchFor:
					"Don't claim relationship outweighs stated factors, paste a company-wide historical win rate onto this competition, count every favorable fact as independent when they share one assumption, or hold Pwin constant after material change for governance consistency.",
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
		title: "Price-to-win targets versus walk-away economics",
		summary:
			"Defines competitive price-to-win versus the company’s economic floor, including set-aside subcontract math.",
		intro:
			"Terms for two different price numbers — competitive award zone versus the seller's minimum acceptable economics.",
		tags: ["price-to-win", "walk-away"],
		readingMinutes: 6,
		suggestedOrder: 5,
		pieces: [
			{
				id: "two-prices",
				title: "Price-to-win and walk-away price",
				teach: "Price-to-win estimates the competitive award zone given evaluation method, competitors, and solution. Walk-away price is the seller's minimum acceptable economics and risk. A sound gate keeps them separate, tests lawful redesign to close a gap, and updates Pwin when price position moves. Escalate gap closures as redesign sprints with compliance and deadline checks — or no-bid. Portfolio economics also compare incremental B&P and specialist opportunity cost to risk-adjusted contribution.",
				watchFor:
					"Don't treat \"bid below walk-away and recover later\" as a cleared gate — it is a familiar but risky pressure move. Also don't freeze Pwin while bidding above the competitive zone, or treat Government price-analysis rules (FAR 15.404-1) as a substitute for the company's own floor.",
				citation: "Capture craft (competitive pricing); FAR 15.404-1",
				sourceUrl: "https://www.acquisition.gov/far/15.404-1",
				sourceKind: "capture-practice",
			},
			{
				id: "set-aside-team-economics",
				title: "Set-aside subcontract economics",
				teach: "When the company is ineligible to prime (for example a small-business or 8(a) set-aside), a compliant subcontract role still needs acceptable workshare, risk allocation, and return. FAR 52.219-6 solicits offers only from small business concerns; FAR 52.219-14 limits payments to subcontractors that are not similarly situated. No-bid the role if negotiations cannot clear the floor. After strategy is final, this unit owns the business decision — market shaping is upstream; team economics are the gate.",
				watchFor:
					"Don't prime while ineligible, treat any set-aside subcontract revenue as always strategic, accept exclusivity-plus-uncompensated risk just to stay on the chart, or have a small prime pass through most service revenue to a large subcontractor in violation of limitations on subcontracting.",
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
		title: "Final-RFP re-gates, sunk B&P, and no-bid discipline",
		summary:
			"Defines when material RFP change resets the bid case — including disciplined no-bid despite sunk cost.",
		intro:
			"Terms for re-gating when the final solicitation changes, ignoring sunk B&P, and the full bid/no-bid stack.",
		tags: ["regate", "rfp", "sunk-cost", "protest-timing", "no-bid"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "final-rfp-regate",
				title: "Final-RFP re-gate",
				teach: "A final-RFP re-gate is a mandatory control point when the final solicitation materially changes contract type, evaluation, transition, or schedule — refresh compliance, solution, price, Pwin, staffing, and economics, and be willing to no-bid. FAR 15.203 makes the solicitation the Government's request for proposals; draft assumptions do not survive by inertia. Treat final RFP drop with the same seriousness as the first investment gate.",
				watchFor:
					"Don't continue because the draft-RFP gate already authorized the bid, update only the compliance matrix while strategy stays frozen, or wait for color teams to notice that the deal changed.",
				citation: "Capture craft (final-RFP re-gate); FAR 15.203",
				sourceUrl: "https://www.acquisition.gov/far/15.203",
				sourceKind: "capture-practice",
			},
			{
				id: "sunk-cost",
				title: "Sunk B&P discipline",
				teach: "Sunk B&P discipline compares remaining proposal cost and opportunity cost with the present risk-adjusted value of bidding — past spend does not justify future spend. No-bid if the revised case fails. Authorize only a small, time-boxed fact check when one unresolved assumption could restore the business case. Executives own this control; capture teams escalate early when the case is failing so the board can stop while options remain.",
				watchFor:
					"Don't continue to justify past spend (stopping would waste the money already invested), or hold Pwin constant for internal consistency after the competition changed.",
				citation: "Capture craft (sunk-cost discipline); FAR 31.205-18",
				sourceUrl: "https://www.acquisition.gov/far/31.205-18",
				sourceKind: "capture-practice",
			},
			{
				id: "ambiguity-and-stack",
				title: "Bid/no-bid stack and protest timing",
				teach: "The bid/no-bid stack is a layered decision: hard gates, value case, Pwin, price, and return — passing one layer does not cure another. Apparent solicitation improprieties (for example conflicting LPTA vs tradeoff text that Q&A fails to resolve) demand timely counsel-led decisions — under 4 C.F.R. 21.2(a)(1), protests based on apparent solicitation improprieties generally must be filed before the time set for initial proposals; also attend to FAR 33.103 for agency-level paths. At the final gate, eligibility and compliance are necessary but not sufficient: if why-us, urgency, Pwin, and economics fail, no-bid.",
				watchFor:
					"Don't choose the interpretation that favors you and protest after award (generally untimely for an apparent preaward defect), or bid because eligibility and compliance guarantee competitiveness.",
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
