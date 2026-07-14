import type { QuizQuestion } from "../../types";

export const CRAFT_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "fund-craft-pwin-evidence",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "In disciplined capture management, what is probability of win (Pwin) primarily used for?",
		options: [
			{
				id: "a",
				text: "An evidence-based decision input that is updated as customer, competitive, solution, price, and execution evidence changes",
				correct: true
			},
			{
				id: "b",
				text: "A sales commitment that becomes fixed once leadership authorizes capture spending",
				correct: false
			},
			{
				id: "c",
				text: "A substitute for estimating the revenue and margin of the opportunity",
				correct: false
			},
			{
				id: "d",
				text: "A score calculated only from the number of customer meetings held",
				correct: false
			}
		],
		explanation:
			"Pwin supports investment and bid decisions; it is not a promise or a sales quota. A useful Pwin is traceable to current evidence about the customer, competition, solution, price, past performance, and ability to execute, and it changes when that evidence changes. Neither the FAR nor APMP prescribes one universal numeric Pwin formula; organizations must define and apply a documented method consistently.",
		citation: "Industry capture practice; APMP Winning Business Ecosystem",
		sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
		tags: ["pwin", "evidence", "decision-support", "capture"]
	},
	{
		id: "fund-craft-price-to-win",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What distinguishes a price-to-win assessment from a cost estimate?",
		options: [
			{
				id: "a",
				text: "Price to win estimates the competitive price or value position needed to win; a cost estimate forecasts what the proposed solution will cost the company to perform",
				correct: true
			},
			{
				id: "b",
				text: "Price to win is the cost estimate with the maximum allowable profit automatically added",
				correct: false
			},
			{
				id: "c",
				text: "Price to win is the Government's independent cost estimate, while a cost estimate is the incumbent's historical price",
				correct: false
			},
			{
				id: "d",
				text: "The terms are interchangeable whenever the solicitation uses best-value tradeoff",
				correct: false
			}
		],
		explanation:
			"A cost estimate starts with the solution and predicts the resources and costs needed to deliver it. Price to win starts with the customer, evaluation method, budget, competitors, and likely trade space to estimate the position needed to win. Pricing leadership must reconcile the two; a winning target below executable cost is a warning to redesign or stop, not permission to invent savings.",
		citation: "Industry capture practice",
		sourceUrl:
			"https://www.apmp.org/Common/Uploaded%20files/APMP/Certification/APMP%20Practitioner%20OTE%20Preparation%20Guide%202026%20-v3.pdf",
		tags: ["price-to-win", "cost-estimate", "pricing", "strategy"]
	},
	{
		id: "fund-craft-gate-kill",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You lead capture for a civilian-agency recompete. At the next gate, the team still lacks customer access, a credible discriminator, an executable staffing plan, and evidence that its price can compete. Pwin has fallen while the remaining B&P request has doubled.",
		prompt: "What recommendation best preserves disciplined capture investment?",
		options: [
			{
				id: "a",
				text: "Recommend no-bid and release the people and B&P unless leadership identifies new, time-bound evidence that changes the decision",
				tier: "best"
			},
			{
				id: "b",
				text: "Conditionally hold the pursuit for a short recovery sprint with named evidence thresholds and an automatic stop date",
				tier: "defensible"
			},
			{
				id: "c",
				text: "Continue through proposal submission because prior capture spending would otherwise be wasted",
				tier: "costly"
			},
			{
				id: "d",
				text: "Raise the reported Pwin until the gate approves the additional B&P, then revisit the weaknesses later",
				tier: "disqualifying"
			}
		],
		explanation:
			"A gate is a decision point, not a ceremonial status meeting. Weak evidence, deteriorating Pwin, and rising investment can justify killing a pursuit; sunk cost is not a reason to continue. A tightly bounded recovery sprint can be defensible, but only with measurable exit criteria rather than optimism or manipulated scoring.",
		citation: "Industry capture practice",
		sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
		tags: ["gate-review", "no-bid", "pwin", "b-and-p", "sunk-cost"]
	},
	{
		id: "fund-craft-capture-call-plan",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"Your capture plan says the agency values low transition risk, but that belief rests on an old recompete debrief. A program executive meeting is available next week, before the draft RFP.",
		prompt: "How should the capture lead use the capture plan and call plan together?",
		options: [
			{
				id: "a",
				text: "Use the capture plan to record the hypothesis and strategy; use a common call-plan template covering objectives, questions, roles, boundaries, and follow-up to test it, then update the capture plan with sourced findings",
				correct: true
			},
			{
				id: "b",
				text: "Replace the capture plan with a meeting agenda because customer calls make written strategy unnecessary",
				correct: false
			},
			{
				id: "c",
				text: "Use the call to present a finished solution and avoid questions that could challenge the current strategy",
				correct: false
			},
			{
				id: "d",
				text: "Keep the meeting notes outside the capture plan so leadership continues to see the original Pwin assumptions",
				correct: false
			}
		],
		explanation:
			"The capture plan is the living record of customer, competition, capability, strategy, actions, and evidence. One common industry call-plan convention covers desired outcomes, questions, participants, roles, legal boundaries, and follow-up; it is a useful template, not a canonical APMP rule or FAR-required format. The call tests assumptions, and its sourced results feed the broader capture plan rather than becoming an isolated contact report.",
		citation: "Common industry convention; APMP Practitioner OTE Preparation Guide v4.2 (2026)",
		sourceUrl:
			"https://www.apmp.org/Common/Uploaded%20files/APMP/Certification/APMP%20Practitioner%20OTE%20Preparation%20Guide%202026%20-v3.pdf",
		tags: ["capture-plan", "call-plan", "customer-engagement", "evidence"]
	},
	{
		id: "fund-craft-color-team-purpose",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"As proposal manager, you have enough reviewers for three distinct reviews on a large civilian proposal. Authors are asking what Pink, Red, and Gold should accomplish.",
		prompt: "Which review design best gives each color team a distinct purpose?",
		options: [
			{
				id: "a",
				text: "Under one common review design, Pink tests planned content and storyboards; Red evaluates a substantially complete proposal as the customer would; Gold confirms executive readiness, remaining risk, and authority to submit",
				tier: "best",
				consequence:
					"Each review answers a different maturity question, so authors receive useful feedback without treating every review as copyediting."
			},
			{
				id: "b",
				text: "Pink performs grammar edits, Red selects the win strategy, and Gold writes missing technical sections",
				tier: "costly",
				consequence:
					"Strategy arrives too late, senior reviewers become emergency authors, and no review tests the proposal at the right maturity."
			},
			{
				id: "c",
				text: "Use all three teams to score the same final draft against the same checklist",
				tier: "defensible",
				consequence:
					"Repeated scrutiny can find defects, but duplicated reviews waste scarce expertise and miss early structural correction."
			},
			{
				id: "d",
				text: "Treat Gold approval as permission to ignore unresolved solicitation requirements if leadership accepts the business risk",
				tier: "disqualifying",
				consequence:
					"An internal approval cannot waive Government instructions; knowingly submitting noncompliant content can remove the proposal from consideration."
			}
		],
		explanation:
			"Color names are industry conventions, not FAR mandates. The useful distinction is maturity and purpose: Pink validates planned content and approach early, Red assesses a near-complete proposal for compliance and persuasiveness from the evaluator's viewpoint, and Gold is a final executive readiness and risk decision—not a late rewrite or a waiver of RFP requirements.",
		citation: "Common industry review convention; APMP Winning Business Ecosystem",
		sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
		tags: ["pink-team", "red-team", "gold-team", "proposal-review"]
	},
	{
		id: "fund-craft-themes-discriminators",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A proposal writer drafts this headline: 'We have 20 years of experience.' The capture record also shows your transition method cut service interruptions by 40% on three comparable civilian programs, while the likely incumbent lacks an integrated transition tool.",
		prompt: "Which revision best turns the raw strength into a supported discriminator and customer-focused win theme while using supported indirect competitive positioning?",
		options: [
			{
				id: "a",
				text: "Protect mission continuity with our proven integrated transition method, which reduced interruptions 40% on three comparable programs—evaluate whether every approach offers the same measured control",
				correct: true
			},
			{
				id: "b",
				text: "We have 20 years of experience and are therefore the obvious low-risk choice",
				correct: false
			},
			{
				id: "c",
				text: "The incumbent lacks our transition tool and will probably disrupt agency operations",
				correct: false
			},
			{
				id: "d",
				text: "Our integrated transition method is unique, best in class, and guaranteed to eliminate all interruptions",
				correct: false
			}
		],
		explanation:
			"Experience alone is a strength. A discriminator is a relevant, supported difference competitors cannot readily claim. A win theme connects that difference and proof to a customer benefit. Supported indirect competitive positioning highlights a decision criterion or risk that favors your approach without naming a competitor or making unsupported claims about one.",
		citation: "Industry capture practice; APMP Practitioner OTE Preparation Guide v4.2 (2026)",
		sourceUrl:
			"https://www.apmp.org/Common/Uploaded%20files/APMP/Certification/APMP%20Practitioner%20OTE%20Preparation%20Guide%202026%20-v3.pdf",
		tags: ["win-theme", "discriminator", "strength", "competitive-positioning", "proof"]
	},
	{
		id: "fund-craft-bp-vs-ird",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"Pricing leadership is reviewing labor charges at a large prime. One team built proposal-specific mockups and technical data solely to support an agency bid. A separate lab has been developing a reusable analytics method, independent of any particular solicitation or contract.",
		prompt: "How should the work be characterized under FAR 31.205-18?",
		options: [
			{
				id: "a",
				text: "Treat the proposal-specific effort as B&P and evaluate the independent reusable research against the IR&D definition, with finance confirming allocation and allowability",
				tier: "best"
			},
			{
				id: "b",
				text: "Treat both efforts as IR&D because each involved technical employees and experimentation",
				tier: "costly"
			},
			{
				id: "c",
				text: "Treat both efforts as B&P because the company hopes every technical investment eventually helps win work",
				tier: "costly"
			},
			{
				id: "d",
				text: "Charge the proposal mockups directly to an unrelated active contract because the customer may later benefit",
				tier: "disqualifying"
			}
		],
		explanation:
			"FAR 31.205-18 defines B&P as preparing, submitting, and supporting bids and proposals. IR&D covers qualifying independent research or development, but expressly excludes technical effort used to develop and prepare technical data specifically for a bid or proposal. Classification does not by itself settle allowability or allocation, so finance must apply the full cost principles and accounting practices.",
		citation: "FAR 31.205-18",
		sourceUrl: "https://www.acquisition.gov/far/31.205-18",
		tags: ["b-and-p", "ir-and-d", "far-31.205-18", "cost-accounting"]
	},
	{
		id: "fund-craft-black-hat-provenance",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"During a Black Hat review for a civilian procurement, a teammate provides an unmarked spreadsheet said to contain a competitor's labor rates and an evaluator's preliminary scores. The teammate will not identify the source. Public award data, competitor filings, agency forecasts, and your own debriefs are also available.",
		prompt: "How should the capture leader handle the competitive intelligence?",
		options: [
			{
				id: "a",
				text: "Quarantine the spreadsheet, stop its use, notify legal or ethics, document the provenance issue, and build the Black Hat from lawful, attributable sources",
				tier: "best",
				consequence:
					"The team preserves a useful competitor simulation without contaminating the pursuit with information it may be prohibited from obtaining."
			},
			{
				id: "b",
				text: "Use the spreadsheet only to brief pricing leadership orally, keeping it out of the capture repository",
				tier: "disqualifying",
				consequence:
					"Changing the transmission method does not cure knowing receipt or use of protected procurement information."
			},
			{
				id: "c",
				text: "Exclude the spreadsheet but run the Black Hat from documented public records, lawful interviews, debriefs, and clearly labeled analyst assumptions",
				tier: "defensible",
				consequence:
					"The analysis remains lawful and useful, though failing to alert legal or ethics leaves the suspicious receipt insufficiently addressed."
			},
			{
				id: "d",
				text: "Use every data point because an unmarked document cannot be contractor bid information or source-selection information",
				tier: "disqualifying",
				consequence:
					"Protected status does not depend solely on markings; knowingly obtaining protected pre-award information can violate procurement-integrity rules."
			}
		],
		explanation:
			"A Black Hat is an industry technique for simulating competitors' likely strategies; it is not a license to acquire secrets. Record each source and distinguish facts from assumptions. FAR 3.104-3 prohibits knowingly obtaining contractor bid or proposal information or source-selection information before award, so suspicious, source-less material should be quarantined and escalated.",
		citation: "Industry capture practice; FAR 3.104-3",
		sourceUrl: "https://www.acquisition.gov/far/3.104-3",
		tags: ["black-hat", "competitive-intelligence", "provenance", "procurement-integrity"]
	},
	{
		id: "fund-craft-cpars-kickoff",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"You are the delivery executive at kickoff for a covered five-year civilian-agency services contract above the applicable CPARS reporting threshold, with no reporting exception, that is likely to be recompeted. The capture team has moved on, and the program manager proposes waiting until year four to assemble past-performance evidence.",
		prompt: "What operating approach best treats CPARS as future capture currency?",
		options: [
			{
				id: "a",
				text: "Start recompete readiness at kickoff: map CPARS factors and customer outcomes to owners, evidence, quality controls, and regular customer reviews, then address issues while performance can still improve",
				tier: "best",
				consequence:
					"The delivery record produces contemporaneous proof and stronger CPARS narratives, giving the future capture team credible past-performance currency."
			},
			{
				id: "b",
				text: "Focus only on contractual deliverables until the recompete forecast appears, then reconstruct success stories from email",
				tier: "costly",
				consequence:
					"Contract compliance may continue, but missing contemporaneous metrics and narratives weakens both CPARS engagement and the recompete evidence base."
			},
			{
				id: "c",
				text: "Track outcomes from kickoff but discuss CPARS only after the annual evaluation is final to avoid influencing the customer",
				tier: "defensible",
				consequence:
					"Early evidence helps, but delaying performance conversations forfeits opportunities to resolve misunderstandings and improve results before ratings are written."
			},
			{
				id: "d",
				text: "Ask capture to draft favorable CPARS ratings for the contracting officer and promise not to challenge them if used",
				tier: "disqualifying",
				consequence:
					"Contractors may provide factual input and comments, but the agency prepares the evaluation; bargaining for ratings undermines the integrity of the record."
			}
		],
		explanation:
			"FAR 42.1501 makes past performance relevant to future source selections. For covered contracts and orders above the applicable reporting threshold, FAR 42.1502 requires evaluations at least annually and at completion, entered in CPARS, subject to its contract-type, order, threshold, and reporting exceptions. Delivery therefore creates future competitive evidence from day one. Managing outcomes, proof, relationships, and corrective action at kickoff is sound execution—not premature proposal writing.",
		citation: "FAR 42.1501; FAR 42.1502(a)-(h); FAR 42.1503",
		sourceUrl: "https://www.acquisition.gov/far/42.1502",
		tags: ["cpars", "past-performance", "recompete", "delivery", "kickoff"]
	}
];
