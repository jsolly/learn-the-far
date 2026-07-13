import type { QuizQuestion } from "../../types";

export const BID_NO_BID_CORE: QuizQuestion[] = [
	{
		id: "bid-no-bid-evidence-based-pwin",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"The CRM says Pwin is 65%. The capture lead explains that the number came from last quarter and has not been revisited since the draft RFP changed the evaluation method.",
		prompt: "How should the gate board treat the stale Pwin estimate?",
		options: [
			{
				id: "a",
				text: "Rebuild Pwin from current evidence by factor, competitor, customer, solution, price, and gate risk; record assumptions and owners",
				tier: "best",
			},
			{
				id: "b",
				text: "Use the 65% temporarily but approve only a limited next tranche tied to named evidence checks",
				tier: "defensible",
			},
			{ id: "c", text: "Average the CRM number with the capture lead's intuition", tier: "costly" },
			{ id: "d", text: "Treat 65% as objective because it appears in an approved system", tier: "disqualifying" },
		],
		explanation:
			"Capture craft—not a FAR formula: Pwin should be a traceable forecast, not a confidence slogan. Reassess when Section M, competitors, customer conditions, price, or hard gates change; use conditional funding only when uncertainty can be retired cheaply and quickly.",
		citation: "Capture craft (evidence-based Pwin); FAR 15.304",
		sourceUrl: "https://www.acquisition.gov/far/15.304",
		tags: ["capture-craft", "pwin", "evidence", "assumptions"],
	},
	{
		id: "bid-no-bid-sam-offer-gate",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"Final proposals are due Friday. The legal-entity record is correct, but the offeror's SAM registration is inactive and the activation date is uncertain.",
		prompt: "What is the correct bid-gate treatment?",
		options: [
			{
				id: "a",
				text: "Check the solicitation and FAR 4.1102: under basic 52.204-7, require active SAM at submission and award; proceed without it only when a listed exception or the prescribed Alternate I applies",
				correct: true,
			},
			{ id: "b", text: "Submit now because SAM is required only at award", correct: false },
			{ id: "c", text: "Use the SAM registration of an affiliated company that is not the offeror", correct: false },
			{ id: "d", text: "Replace the UEI in the proposal with the incumbent contract number", correct: false },
		],
		explanation:
			"FAR 4.1102 requires SAM registration at submission subject to its listed exceptions. Basic FAR 52.204-7 separately requires registration at submission and award. For the unusual-or-compelling-urgency exception at 4.1102(a)(5), prescribed Alternate I requires registration as soon as possible and, if registration is not possible at submission, registration under FAR 52.204-13: within 30 days after award or three days before the first invoice, whichever is earlier. FAR 52.204-13 then requires maintenance during performance through final payment.",
		citation: "FAR 4.1102; FAR 4.1105; FAR 52.204-7; FAR 52.204-13",
		sourceUrl: "https://www.acquisition.gov/far/52.204-7",
		tags: ["sam", "offeror", "eligibility", "hard-gate"],
	},
	{
		id: "bid-no-bid-cost-type-accounting",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"A civilian agency's released RFP expressly classifies the requirement as a commercial service acquired under FAR Part 12 but requires offerors to propose a cost-plus-fixed-fee contract. Proposals are not yet due.",
		prompt: "How should the bid gate handle the defective contract-type term?",
		options: [
			{
				id: "a",
				text: "Use the solicitation's authorized Q&A or contracting-officer channel immediately to cite the prohibition and seek an amendment to an authorized Part 12 type; have counsel preserve any timely preaward challenge, then re-gate on the agency's written resolution",
				tier: "best",
			},
			{
				id: "b",
				text: "Authorize only limited, reversible pursuit work while awaiting a written agency response and counsel's deadline for challenging the apparent solicitation impropriety",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Submit the CPFF proposal as written and plan to negotiate a lawful contract type only after award",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Treat accounting-system readiness as the only gate because an adequate system makes CPFF permissible for commercial services",
				tier: "costly",
			},
		],
		explanation:
			"FAR 16.301-3(b) prohibits cost-reimbursement contracts for commercial products and commercial services. FAR 12.207 authorizes firm-fixed-price or fixed-price with economic price adjustment and permits T&M or labor-hour only under stated conditions; CPFF is not an authorized Part 12 type. After solicitation release, the contracting officer is the focal point for exchanges. Because the defect is apparent on the RFP's face, the team should seek a written correction through the authorized channel, preserve the preaward challenge deadline with counsel, and re-gate against the agency's final written terms rather than solve the wrong problem with accounting readiness.",
		citation: "FAR 16.301-3(b); FAR 12.207; FAR 15.201(f); FAR 33.103(e)",
		sourceUrl: "https://www.acquisition.gov/far/16.301-3",
		tags: ["commercial-services", "CPFF", "preaward-challenge", "Q&A", "regate"],
	},
	{
		id: "bid-no-bid-past-performance-inventory",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"Section M emphasizes recent, relevant performance and permits prime, affiliate, predecessor, and major-subcontractor examples. For affiliate past performance, the proposal must show that committed affiliate resources will affect contract performance and establish meaningful involvement. The gate package lists only two contracts remembered by the capture lead.",
		prompt: "What is the best next action?",
		options: [
			{
				id: "a",
				text: "Build a verified inventory of eligible references, scope and recency, CPARS records, customer contacts, and risks; for each affiliate example, identify committed workforce, management, facilities, or other resources showing meaningful involvement in performance",
				tier: "best",
				consequence:
					"The gate sees the evidence evaluators may actually consider and can select references that match Section M.",
			},
			{
				id: "b",
				text: "Use the two remembered contracts and ask writers to make their relevance sound stronger",
				tier: "costly",
				consequence: "The team may miss stronger references and risks unsupported relevance claims.",
			},
			{
				id: "c",
				text: "List every corporate contract without checking whether Section M permits or connects it",
				tier: "costly",
				consequence: "Volume substitutes for admissible evidence; evaluators may give examples little or no weight.",
			},
			{
				id: "d",
				text: "Assume evaluators can search CPARS and will select the most favorable records for you",
				tier: "disqualifying",
				consequence: "The proposal fails to present its case and ignores adverse or missing information the agency may consider.",
			},
		],
		explanation:
			"FAR 15.305(a)(2) permits evaluation of relevant past performance and information from sources beyond the offeror's submission. Under Eagle Eye Electric, affiliate past performance may be attributed only when the proposal shows that committed affiliate resources—workforce, management, facilities, or others—will be provided or relied upon so the affiliate has meaningful involvement; the solicitation still controls whether the agency must consider it. Inventory the evidence early and reconcile it with CPARS and Section M.",
		citation: "FAR 15.305(a)(2); Eagle Eye Electric, LLC, B-415562, B-415562.3",
		sourceUrl: "https://www.gao.gov/products/b-415562%2Cb-415562.3",
		tags: ["past-performance", "cpars", "inventory", "section-m"],
	},
	{
		id: "bid-no-bid-rule-of-two-decision",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"The final acquisition strategy is a total small-business set-aside after market research supported the rule of two. Your company is an other-than-small civilian prime. A qualified small business offers you a compliant subcontract role, but its maximum workshare leaves your forecast below the corporate return hurdle.",
		prompt: "What is the correct final pursuit decision?",
		options: [
			{
				id: "a",
				text: "No-bid unless a compliant team structure can clear the return hurdle; do not prime an opportunity for which the company is ineligible",
				correct: true,
			},
			{ id: "b", text: "Bid as prime because the rule of two concerns market research, not offeror eligibility", correct: false },
			{ id: "c", text: "Accept the uneconomic subcontract because any revenue improves the portfolio", correct: false },
			{ id: "d", text: "Have the small prime pass through most service revenue to the large subcontractor", correct: false },
		],
		explanation:
			"This unit's decision occurs after the strategy is clear. FAR 52.219-6 solicits offers only from small business concerns, states that offers from concerns that are not small shall be considered nonresponsive and rejected, and limits award to a small business concern. A service-contract team must also account for FAR 52.219-14's limit on payments to subcontractors that are not similarly situated. If a compliant subcontract role fails economics, no-bid is the disciplined answer.",
		citation: "FAR 19.502-2; FAR 52.219-6; FAR 52.219-14",
		sourceUrl: "https://www.acquisition.gov/far/52.219-6",
		tags: ["rule-of-two", "large-prime", "teaming", "economics"],
	},
	{
		id: "bid-no-bid-incumbent-black-hat",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"You are challenging a well-rated incumbent. The capture plan calls customer dissatisfaction 'high' because one stakeholder complained, but CPARS themes, recompete structure, and most interviews indicate continuity is valued.",
		prompt: "Which Pwin judgment is best supported?",
		options: [
			{
				id: "a",
				text: "Treat incumbent advantage as real until broader evidence identifies a consequential weakness and a discriminator the evaluation will reward",
				correct: true,
			},
			{ id: "b", text: "Assume every recompete favors the challenger because agencies must rotate vendors", correct: false },
			{ id: "c", text: "Treat the single complaint as proof that the customer plans to replace the incumbent", correct: false },
			{ id: "d", text: "Ignore the incumbent because only our technical compliance affects award", correct: false },
		],
		explanation:
			"Capture craft: a black hat should model the strongest competitor from multiple observable signals and separate facts from assumptions. Incumbency is neither an automatic win nor loss; the decision turns on the solicitation's factors, credible customer evidence, transition risk, price, and discriminators.",
		citation: "Capture craft (competitive black hat); FAR 15.305",
		sourceUrl: "https://www.acquisition.gov/far/15.305",
		tags: ["black-hat", "incumbent", "challenger", "pwin"],
	},
	{
		id: "bid-no-bid-price-to-win-walk-away",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"Competitive analysis supports a price-to-win range of $92–96M. Finance says the lowest price that meets requirements and the company's risk-adjusted margin floor is $101M.",
		prompt: "How should the gate board resolve the gap between price-to-win and the walk-away price?",
		options: [
			{
				id: "a",
				text: "No-bid or redesign the solution if time permits; do not confuse the market's likely winning price with the company's walk-away price",
				tier: "best",
				consequence: "The company preserves its economic floor while allowing a fact-based redesign to close the gap.",
			},
			{
				id: "b",
				text: "Approve a short redesign sprint with explicit cost, compliance, and deadline checks before the final gate",
				tier: "defensible",
				consequence: "A bounded investment may find a lawful, executable cost reduction without committing to a loss.",
			},
			{
				id: "c",
				text: "Bid $94M and plan to recover the margin through changes after award",
				tier: "disqualifying",
				consequence: "The bid knowingly crosses the economic floor and relies on uncertain post-award events.",
			},
			{
				id: "d",
				text: "Bid $101M but leave Pwin unchanged because the technical solution is strong",
				tier: "costly",
				consequence: "The company protects margin but ignores evidence that its price position materially lowers Pwin.",
			},
		],
		explanation:
			"Capture craft—not a Government pricing formula: price-to-win estimates the competitive award zone; walk-away is the seller's minimum acceptable economics and risk. A defensible gate keeps the two separate, tests lawful redesign, and updates Pwin when price position changes.",
		citation: "Capture craft (competitive pricing); FAR 15.404-1",
		sourceUrl: "https://www.acquisition.gov/far/15.404-1",
		tags: ["price-to-win", "walk-away", "margin", "capture-craft"],
	},
	{
		id: "bid-no-bid-hard-gate-register",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"An order competition is limited to holders of a named IDIQ. The RFP also requires an agency authorization and specified personnel clearances at proposal submission. Your affiliate holds the IDIQ, while the intended offeror does not; several clearances are still pending.",
		prompt: "How should the board treat these facts?",
		options: [
			{
				id: "a",
				text: "Map each requirement to the actual offeror and due date, obtain written evidence or a solicitation-supported cure path, and no-bid if any hard gate cannot be met",
				tier: "best",
			},
			{
				id: "b",
				text: "Fund only the work needed to confirm whether the affiliate can submit and whether pending approvals satisfy the solicitation",
				tier: "defensible",
			},
			{ id: "c", text: "Assume corporate affiliation transfers vehicle access and certifications", tier: "disqualifying" },
			{ id: "d", text: "Submit and explain all missing gates in an assumptions volume", tier: "costly" },
		],
		explanation:
			"Vehicle access, clearances, licenses, and certifications are entity- and solicitation-specific. FAR 16.505 governs order competitions among contract holders, but the RFP controls the stated proposal gates. The board should verify evidence and timing instead of treating affiliates or planned approvals as interchangeable.",
		citation: "FAR 16.505; solicitation-specific eligibility terms",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["vehicle", "clearance", "certification", "hard-gate"],
	},
	{
		id: "bid-no-bid-final-rfp-regate",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"The team passed its draft-RFP gate. The final RFP changes the contract type, makes transition a pass/fail factor, shortens the start date, and removes the technical factor that carried your main discriminator.",
		prompt: "What is the right governance response?",
		options: [
			{
				id: "a",
				text: "Run a new gate against the final terms, refresh compliance, solution, price, Pwin, staffing, and economics, and be willing to no-bid",
				correct: true,
			},
			{ id: "b", text: "Continue automatically because the draft-RFP gate already authorized the bid", correct: false },
			{ id: "c", text: "Update only the compliance matrix; strategic assumptions should remain fixed", correct: false },
			{ id: "d", text: "Wait until color-team reviews to decide whether the changes matter", correct: false },
		],
		explanation:
			"Capture craft: authorization based on draft terms does not survive material changes by inertia. FAR 15.203 makes the solicitation the Government's request for proposals; the final terms therefore reset the evidence for eligibility, evaluation, execution, price, and expected return.",
		citation: "Capture craft (final-RFP re-gate); FAR 15.203",
		sourceUrl: "https://www.acquisition.gov/far/15.203",
		tags: ["final-rfp", "regate", "change-control", "confidence"],
	},
	{
		id: "bid-no-bid-key-person-availability",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"Section M heavily evaluates three named key personnel and requires signed commitment letters. Forty-eight hours before submission, the proposed program manager declines the role and no signed commitment exists.",
		prompt: "What is the best decision?",
		options: [
			{
				id: "a",
				text: "Replace the person with an available, qualified candidate and compliant commitment if the proposal can still be credibly updated; otherwise no-bid",
				tier: "best",
				consequence: "The offer reflects a real, evaluable team and avoids betting the bid on an unavailable key person.",
			},
			{
				id: "b",
				text: "Use the solicitation's authorized contracting-officer channel to confirm whether a qualified replacement can be submitted compliantly; replace the person if permitted, otherwise no-bid",
				tier: "defensible",
				consequence: "A timely answer may preserve a compliant path, but the schedule may still force a no-bid.",
			},
			{
				id: "c",
				text: "Submit the unavailable person's resume and obtain a signature after selection",
				tier: "disqualifying",
				consequence: "The proposal lacks the required commitment and materially misstates the team the agency is evaluating.",
			},
			{
				id: "d",
				text: "Rename the deputy as program manager without checking minimum qualifications or rewriting the solution",
				tier: "costly",
				consequence: "The substitution may fail stated qualifications and leaves proposal claims inconsistent.",
			},
		],
		explanation:
			"Key-personnel availability is a bid gate when the solicitation makes named people or commitments material. FAR 15.305 requires evaluation against the solicitation, and IT Objects sustained a protest where the awardee omitted a required key-person commitment letter; the record did not support treating another agreement as a substitute. Use only an authorized contracting-officer channel for clarification, and rely on a replacement only when qualified and solicitation-compliant.",
		citation: "FAR 15.305(a); IT Objects, LLC, B-418012, B-418012.2",
		sourceUrl: "https://www.gao.gov/products/b-418012%2Cb-418012.2",
		tags: ["key-personnel", "availability", "commitment", "hard-gate"],
	},
];
