import type { QuizQuestion } from "../../types";

export const BID_NO_BID_ADVANCED: QuizQuestion[] = [
	{
		id: "bid-no-bid-sunk-cost-regate",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"The company has spent $1.4M of B&P. The final RFP eliminates your discriminator, adds an unpriced transition obligation, and drives risk-adjusted Pwin below the approved floor. The remaining proposal spend is $600K.",
		prompt: "How should the executive gate decide?",
		options: [
			{
				id: "a",
				text: "Evaluate the remaining $600K and future contract economics using current evidence; no-bid if the revised case fails, regardless of the $1.4M already spent",
				tier: "best",
				consequence: "The decision avoids throwing additional scarce resources after costs that cannot be recovered.",
			},
			{
				id: "b",
				text: "Authorize a small, time-boxed fact check only if one unresolved assumption could restore the business case",
				tier: "defensible",
				consequence: "A bounded option buys decisive evidence without treating the full proposal budget as inevitable.",
			},
			{
				id: "c",
				text: "Continue because stopping would waste the $1.4M already invested",
				tier: "disqualifying",
				consequence: "Past spend is unrecoverable; using it to justify another $600K is the sunk-cost fallacy.",
			},
			{
				id: "d",
				text: "Hold Pwin constant so the original gate decision remains internally consistent",
				tier: "costly",
				consequence: "The forecast becomes governance theater and hides material changes in the competition.",
			},
		],
		explanation:
			"Capture craft: prior B&P is sunk for the current decision. The board should compare remaining cost and opportunity cost with the present risk-adjusted value of bidding, while preserving a narrow option only when cheap evidence could materially change the outcome.",
		citation: "Capture craft (sunk-cost discipline); FAR 31.205-18",
		sourceUrl: "https://www.acquisition.gov/far/31.205-18",
		tags: ["sunk-cost", "gate-discipline", "bp", "regate"],
	},
	{
		id: "bid-no-bid-setaside-team-economics",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"The final RFP is an 8(a) set-aside. Your large business is not prime-eligible. An eligible 8(a) offers a subcontract role that complies with the solicitation and limitations on subcontracting, but demands exclusivity, transfers uncompensated solution risk to you, and yields a return below your approved floor.",
		prompt: "What is the strongest final decision?",
		options: [
			{
				id: "a",
				text: "No-bid the role unless negotiations produce a compliant allocation with acceptable risk and return",
				tier: "best",
			},
			{
				id: "b",
				text: "Negotiate a short-fuse, nonexclusive or risk-adjusted structure and re-gate against a stated walk-away",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Accept because subcontract revenue on a set-aside is always strategically profitable",
				tier: "costly",
			},
			{
				id: "d",
				text: "Submit the large business as prime and describe the 8(a) as a qualifying subcontractor",
				tier: "disqualifying",
			},
		],
		explanation:
			"Once the set-aside strategy is final, this unit owns the business decision—not market shaping. A large firm may pursue a lawful subcontract role, but eligibility of the prime and FAR 52.219-14 compliance do not make poor risk allocation or below-floor economics acceptable.",
		citation: "FAR 19.805-2; FAR 52.219-14; capture craft (team economics)",
		sourceUrl: "https://www.acquisition.gov/far/19.805-2",
		tags: ["set-aside", "large-prime", "team-or-no-bid", "economics"],
	},
	{
		id: "bid-no-bid-ambiguity-protest-decision",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"Ten days before proposals are due, Section M says LPTA while another controlling provision describes a technical-price tradeoff. The agency's Q&A repeats both provisions without resolving the conflict. Your likely solution and price differ materially by method.",
		prompt: "What should the gate board do now?",
		options: [
			{
				id: "a",
				text: "Escalate immediately for legal and executive review and decide whether to file a preaward agency-level or GAO protest before the proposal deadline",
				tier: "best",
				consequence: "The company preserves a timely challenge to an apparent solicitation impropriety and makes a deliberate relationship-versus-prejudice decision.",
			},
			{
				id: "b",
				text: "Submit another focused question while preserving enough time for counsel to recommend a timely protest if the agency does not amend",
				tier: "defensible",
				consequence: "The agency gets a final chance to clarify, but the team does not let Q&A consume the protest deadline.",
			},
			{
				id: "c",
				text: "Choose the interpretation that favors your proposal and protest after award if the agency uses the other one",
				tier: "disqualifying",
				consequence: "A post-award challenge to an apparent preaward defect is generally untimely under GAO's rule.",
			},
			{
				id: "d",
				text: "Price both approaches into one offer without explaining the ambiguity",
				tier: "costly",
				consequence: "The proposal becomes expensive or internally inconsistent while the legal defect remains unresolved.",
			},
		],
		explanation:
			"Under 4 C.F.R. 21.2(a)(1), a protest based on an apparent solicitation impropriety must be filed before the time set for initial proposals; a timely agency-level path also requires attention to FAR 33.103 and GAO follow-on timing. Filing is a counsel-led business decision, but waiting past closing can waive the issue.",
		citation: "4 C.F.R. 21.2(a)(1); FAR 33.103",
		sourceUrl: "https://www.ecfr.gov/current/title-4/chapter-I/subchapter-B/part-21/section-21.2",
		tags: ["ambiguity", "preaward-protest", "timeliness", "gate-decision"],
	},
	{
		id: "bid-no-bid-pwin-weighted-evidence",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"A tradeoff RFP weights technical approach, then past performance, then price. Your gate package shows strong customer access, but the proposed approach has one unmitigated weakness, relevant past performance is merely satisfactory, and your modeled price is 14% above the strongest competitor.",
		prompt: "Which Pwin treatment is most defensible?",
		options: [
			{
				id: "a",
				text: "Score the current evidence against the stated factors and competitor positions, model dependencies, and lower Pwin unless named actions can change the technical or price gap",
				correct: true,
			},
			{ id: "b", text: "Keep Pwin high because customer access outweighs all stated evaluation factors", correct: false },
			{ id: "c", text: "Use the historical win rate for all civilian bids regardless of this competition", correct: false },
			{ id: "d", text: "Count every favorable fact independently even when the facts rely on the same assumption", correct: false },
		],
		explanation:
			"Capture craft: evidence-based Pwin aligns to Section M, competitor position, and dependencies. Customer access may improve information quality but does not itself erase an evaluated weakness or price gap. Correlated assumptions should not be double-counted as independent evidence.",
		citation: "Capture craft (evidence-based Pwin); FAR 15.304; FAR 15.305",
		sourceUrl: "https://www.acquisition.gov/far/15.305",
		tags: ["pwin", "section-m", "evidence", "dependencies"],
	},
	{
		id: "bid-no-bid-black-hat-decision-use",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A black hat concludes that the incumbent can neutralize your main feature, has lower transition risk, and can likely price within 2% of your target. The capture lead wants to relabel each finding 'low confidence' and proceed unchanged.",
		prompt: "How should the board use the black-hat result?",
		options: [
			{
				id: "a",
				text: "Separate facts from assumptions, assign owners to test the decisive uncertainties, and re-gate the discriminator, transition, price, and Pwin case",
				tier: "best",
			},
			{
				id: "b",
				text: "Authorize only targeted actions that could create a new evaluated advantage before the final gate",
				tier: "defensible",
			},
			{ id: "c", text: "Ignore the result because black hats are designed to be pessimistic", tier: "costly" },
			{ id: "d", text: "Lower the competitor score until the pursuit clears the corporate Pwin floor", tier: "disqualifying" },
		],
		explanation:
			"Capture craft: black hat is useful when it changes decisions. The board should challenge source quality on both favorable and unfavorable claims, then fund actions that can alter an evaluated outcome. Renaming adverse evidence or tuning scores to a threshold defeats the control.",
		citation: "Capture craft (black-hat decision support); FAR 15.305",
		sourceUrl: "https://www.acquisition.gov/far/15.305",
		tags: ["black-hat", "incumbent", "challenger", "regate"],
	},
	{
		id: "bid-no-bid-accounting-evidence",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"For a cost-reimbursement RFP, finance says the accounting system is 'DCAA compliant' because a different segment passed a review six years ago. The proposing segment has since changed ERP, indirect-rate structures, and timekeeping.",
		prompt: "What evidence should the gate require?",
		options: [
			{
				id: "a",
				text: "Current, entity- and system-specific evidence that costs can be identified and accumulated as required, plus a realistic path to the Government's adequacy determination",
				correct: true,
			},
			{ id: "b", text: "The old review alone, because adequacy transfers permanently across segments and systems", correct: false },
			{ id: "c", text: "A capture-manager certification that the ERP is commercially available", correct: false },
			{ id: "d", text: "A plan to reconstruct direct and indirect costs manually after invoices are rejected", correct: false },
		],
		explanation:
			"FAR 16.301-3(a)(3) requires an accounting system adequate for determining costs applicable to the contract or order. 'DCAA compliant' is not a permanent generic status; the gate needs current evidence tied to the proposing entity, configured system, controls, and anticipated pre-award determination.",
		citation: "FAR 16.301-3(a)(3); FAR 16.104(i)",
		sourceUrl: "https://www.acquisition.gov/far/16.301-3",
		tags: ["accounting-system", "cost-type", "evidence", "confidence"],
	},
	{
		id: "bid-no-bid-final-decision-stack",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"At the final gate, the offeror is eligible, SAM is active, vehicle access is confirmed, key people are committed, and the solution is compliant. However, the final RFP erased why us, customer urgency is unproven, Pwin is below floor, and price-to-win is below walk-away.",
		prompt: "What is the disciplined portfolio decision?",
		options: [
			{
				id: "a",
				text: "No-bid: passing hard gates is necessary but does not overcome a failed value, win, and economic case",
				correct: true,
			},
			{ id: "b", text: "Bid because compliance and eligibility guarantee the proposal will be competitive", correct: false },
			{ id: "c", text: "Bid because final-gate no-bids damage capture-team morale", correct: false },
			{ id: "d", text: "Bid below walk-away and rely on the customer's urgency emerging after award", correct: false },
		],
		explanation:
			"Capture craft: bid/no-bid is a stack, not a checklist where one passed layer cures another. Eligibility, responsibility readiness, and compliance are necessary; the company must also retain a credible why-change/why-now/why-us case, evidence-based Pwin, executable resources, and acceptable risk-adjusted economics.",
		citation: "Capture craft (final portfolio gate); FAR 9.104-1; FAR 15.305",
		sourceUrl: "https://www.acquisition.gov/far/9.104-1",
		tags: ["final-gate", "portfolio", "why-us", "no-bid"],
	},
];
