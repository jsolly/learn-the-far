import type { QuizQuestion } from "../../types";

export const BID_NO_BID_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "bid-no-bid-gate-not-advocacy",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"At the first formal gate, the capture manager presents an exciting customer meeting and asks the board to approve a full proposal budget.",
		prompt: "What is the gate board's primary job?",
		options: [
			{ id: "a", text: "Test the pursuit against agreed evidence, hard gates, win probability, and economics", correct: true },
			{ id: "b", text: "Reward the capture team's enthusiasm so momentum is not lost", correct: false },
			{ id: "c", text: "Approve every technically feasible pursuit and sort priorities after the RFP", correct: false },
			{ id: "d", text: "Judge only whether the company has performed similar work before", correct: false },
		],
		explanation:
			"Capture craft—not a FAR rule: a bid gate is an investment decision. The board should challenge evidence, eligibility, readiness, Pwin, and return before authorizing more B&P; enthusiasm and technical feasibility alone do not establish a sound bid.",
		citation: "Capture craft (internal bid-gate discipline); FAR 31.205-18",
		sourceUrl: "https://www.acquisition.gov/far/31.205-18",
		tags: ["capture-craft", "gate-discipline", "investment-decision"],
	},
	{
		id: "bid-no-bid-why-triad",
		unitId: "bid-no-bid",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Which statement correctly distinguishes why change, why now, and why us at a bid gate?",
		options: [
			{
				id: "a",
				text: "Why change is the customer's problem or opportunity; why now is the consequence or trigger; why us is our evidenced discriminator",
				correct: true,
			},
			{ id: "b", text: "Why change is our growth target; why now is our fiscal year end; why us is our logo", correct: false },
			{ id: "c", text: "All three are different names for the technical solution", correct: false },
			{ id: "d", text: "Why us matters, but why change and why now are irrelevant after an RFP posts", correct: false },
		],
		explanation:
			"Capture craft—not a prescribed FAR framework: the triad tests whether the customer has a compelling need, a reason to act in this acquisition window, and a source-selection-relevant reason to choose this team. Unsupported slogans are not discriminators.",
		citation: "Capture craft (customer-value framing); FAR 15.304",
		sourceUrl: "https://www.acquisition.gov/far/15.304",
		tags: ["capture-craft", "why-us", "why-change", "why-now"],
	},
	{
		id: "bid-no-bid-responsibility-readiness",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A team says, 'We are a major contractor, so responsibility is automatic.' The opportunity will require financing, specialized facilities, and an aggressive start date.",
		prompt: "Which gate check best reflects FAR 9.104-1?",
		options: [
			{
				id: "a",
				text: "Document adequate financial resources or the ability to obtain them; schedule capacity considering all commercial and Government commitments; satisfactory performance, integrity, and ethics records; necessary organization, experience, accounting and operational controls, and technical skills or the ability to obtain them; necessary production, construction, and technical equipment and facilities or the ability to obtain them; and legal qualification and eligibility",
				correct: true,
			},
			{ id: "b", text: "Check only whether annual revenue exceeds the contract value", correct: false },
			{ id: "c", text: "Treat technical acceptability as conclusive proof of responsibility", correct: false },
			{ id: "d", text: "Defer every responsibility issue until after award", correct: false },
		],
		explanation:
			"FAR 9.104-1 lists the general standards of responsibility. Large size and past awards do not make readiness automatic; the gate should identify evidence and remediation owners for resources, schedule, record, integrity, controls, equipment, facilities, and eligibility.",
		citation: "FAR 9.104-1",
		sourceUrl: "https://www.acquisition.gov/far/9.104-1",
		tags: ["responsibility", "far-9.104", "readiness", "hard-gate"],
	},
	{
		id: "bid-no-bid-section-m-method",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"Two otherwise similar civilian RFPs arrive. One uses LPTA; the other permits a best-value tradeoff and makes technical approach significantly more important than price.",
		prompt: "How should that difference affect the bid decision?",
		options: [
			{
				id: "a",
				text: "For LPTA, test whether we can meet or exceed every acceptability standard at the lowest evaluated price; for the tradeoff, test whether evaluated strengths justify our price",
				correct: true,
			},
			{ id: "b", text: "Use the same premium solution and price strategy for both", correct: false },
			{ id: "c", text: "Ignore Section M because evaluators may use unstated preferences", correct: false },
			{ id: "d", text: "Assume the lowest price wins both competitions", correct: false },
		],
		explanation:
			"FAR 15.101-2 requires LPTA award on the basis of the lowest evaluated price among proposals meeting or exceeding the solicitation's non-cost acceptability standards; tradeoffs are not permitted. FAR 15.101-1 permits the Government to trade price against nonprice merit when the solicitation states that method. The gate must model the competition Section M actually creates.",
		citation: "FAR 15.101-1; FAR 15.101-2",
		sourceUrl: "https://www.acquisition.gov/far/15.101-2",
		tags: ["section-m", "lpta", "tradeoff", "bid-strategy"],
	},
	{
		id: "bid-no-bid-bp-economic-question",
		unitId: "bid-no-bid",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A pursuit is eligible and winnable, but the remaining proposal effort will consume scarce solution architects needed on two stronger bids.",
		prompt: "Which statement is the soundest basis for the gate decision?",
		options: [
			{
				id: "a",
				text: "Compare incremental B&P and opportunity cost with expected risk-adjusted contribution, then prioritize the portfolio",
				correct: true,
			},
			{ id: "b", text: "Bid because B&P is always reimbursed directly by the agency running the competition", correct: false },
			{ id: "c", text: "Bid because eligibility and technical capability make economics irrelevant", correct: false },
			{ id: "d", text: "Ignore internal labor because only external consultant invoices count as bid cost", correct: false },
		],
		explanation:
			"Capture craft: gates allocate finite B&P and specialist capacity across a portfolio. FAR 31.205-18 defines and addresses allowability of B&P costs, but it does not make a particular agency reimburse each losing bid or erase the opportunity cost of internal labor.",
		citation: "Capture craft (portfolio economics); FAR 31.205-18",
		sourceUrl: "https://www.acquisition.gov/far/31.205-18",
		tags: ["bp", "portfolio", "opportunity-cost", "confidence"],
	},
];
