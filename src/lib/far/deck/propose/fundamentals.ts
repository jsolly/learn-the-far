import type { QuizQuestion } from "../../types";

export const PROPOSE_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "propose-sections-l-m-matrix",
		unitId: "propose",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are the proposal manager for a large civilian-agency prime. At kickoff, an author says Section L is the scoring plan and Section M is merely a formatting checklist.",
		prompt: "How should you structure the compliance matrix and writing plan?",
		options: [
			{
				id: "a",
				text: "Map every Section L preparation/submission instruction and every Section M evaluation factor to an owner, volume, and proposal location",
				correct: true,
			},
			{
				id: "b",
				text: "Use Section L only, because following the instructions necessarily earns the highest evaluation rating",
				correct: false,
			},
			{
				id: "c",
				text: "Use Section M only, because evaluators may waive any Section L instruction after receipt",
				correct: false,
			},
			{
				id: "d",
				text: "Treat both sections as background and organize solely around the incumbent contract",
				correct: false,
			},
		],
		explanation:
			"Under the Uniform Contract Format, Section L contains instructions, conditions, and notices to offerors; Section M contains evaluation factors for award. A useful compliance matrix tracks both: compliance gets the proposal evaluated, while alignment to the stated factors makes it scoreable. Neither section guarantees a rating by itself.",
		citation: "FAR 15.204-5(b), (c)",
		sourceUrl: "https://www.acquisition.gov/far/15.204-5",
		tags: ["section-l", "section-m", "compliance-matrix", "proposal-management"],
	},
	{
		id: "propose-evaluation-finding-severity",
		unitId: "propose",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"As capture lead, you hear reviewers use four terms: strength, weakness, significant weakness, and deficiency. One gap materially increases performance risk but does not violate a material solicitation requirement.",
		prompt: "Which finding best fits that gap under FAR 15.001?",
		options: [
			{
				id: "a",
				text: "A significant weakness, because it appreciably increases the risk of unsuccessful contract performance",
				correct: true,
			},
			{
				id: "b",
				text: "A deficiency, because every material increase in risk is automatically a material failure to meet a requirement",
				correct: false,
			},
			{
				id: "c",
				text: "A strength, because evaluators documented the issue in detail",
				correct: false,
			},
			{
				id: "d",
				text: "An ordinary weakness only, because significant weaknesses exist only in cost proposals",
				correct: false,
			},
		],
		explanation:
			"FAR 15.001 defines a weakness as a flaw increasing performance risk, a significant weakness as one that appreciably increases that risk, and a deficiency as a material failure to meet a requirement or a combination of significant weaknesses creating unacceptable risk. The current FAR does not separately define 'strength'; agency evaluation rules often do, while FAR 15.305(a) requires the relative strengths supporting the evaluation to be documented.",
		citation: "FAR 15.001; FAR 15.305(a)",
		sourceUrl: "https://www.acquisition.gov/far/15.001",
		tags: ["strength", "weakness", "significant-weakness", "deficiency"],
	},
	{
		id: "propose-lpta-versus-tradeoff",
		unitId: "propose",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "tiered",
		situation:
			"You are the solution lead. The draft design costs 11% more than a compliant baseline because it adds capabilities beyond every stated minimum. Section M says award is LPTA: technical proposals are acceptable or unacceptable, and no additional credit is available for exceeding minimums.",
		prompt: "What solution strategy best matches the announced source-selection method?",
		options: [
			{
				id: "a",
				text: "Offer the lowest-priced, clearly compliant design and preserve evidence that every minimum is met",
				tier: "best",
			},
			{
				id: "b",
				text: "Keep only enhancements that reduce evaluated price or materially lower the risk of being found unacceptable",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Keep the 11% premium and expect the agency to trade superior capability against price",
				tier: "costly",
			},
			{
				id: "d",
				text: "Delete a mandatory feature to become the lowest offeror, expecting to cure it after award",
				tier: "disqualifying",
			},
		],
		explanation:
			"LPTA permits no tradeoff: among technically acceptable offers, the lowest evaluated price wins. In a tradeoff procurement, a higher-priced superior proposal may win if the solicitation permits and the source-selection decision reasonably documents the tradeoff. Here, uncredited extras generally add price without adding evaluated value; missing a minimum risks unacceptability.",
		citation: "FAR 15.101-1; FAR 15.101-2",
		sourceUrl: "https://www.acquisition.gov/far/15.101-2",
		tags: ["lpta", "tradeoff", "solution-strategy", "best-value"],
	},
	{
		id: "propose-exchange-types",
		unitId: "propose",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are the contracts lead. After initial evaluation, with award without discussions contemplated and before a competitive range is established, the contracting officer asks you to confirm a clerical reference number and expressly says no proposal revision is permitted.",
		prompt: "Which FAR exchange category most closely describes the request?",
		options: [
			{
				id: "a",
				text: "A clarification: a limited exchange that does not permit proposal revision",
				correct: true,
			},
			{
				id: "b",
				text: "A communication: an exchange only for offerors already inside the competitive range",
				correct: false,
			},
			{
				id: "c",
				text: "A discussion: bargaining that necessarily permits a final proposal revision",
				correct: false,
			},
			{
				id: "d",
				text: "An amendment: a unilateral change to the solicitation issued to one offeror",
				correct: false,
			},
		],
		explanation:
			"Clarifications are limited exchanges when award without discussions is contemplated and do not give an offeror an opportunity to revise its proposal. Communications occur before competitive-range establishment for limited purposes described in FAR 15.306(b). Discussions are negotiations after competitive-range establishment and are undertaken with the intent of allowing proposal revision.",
		citation: "FAR 15.306(a)-(d)",
		sourceUrl: "https://www.acquisition.gov/far/15.306",
		tags: ["clarifications", "communications", "discussions", "contracts"],
	},
	{
		id: "propose-color-team-purposes",
		unitId: "propose",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are the proposal manager on a compressed pursuit with too few senior reviewers to attend every working session. Leadership still wants useful Pink, Red, Green, and Gold checkpoints without turning reviewers into emergency authors.",
		prompt: "How should you allocate scarce reviewers across the proposal calendar?",
		options: [
			{
				id: "a",
				text: "Define each checkpoint's purpose, then assign reviewers with matching expertise and independence—for example, solution reviewers early, evaluator-style reviewers for draft scoring, pricing specialists for price, and executives for final approval",
				correct: true,
			},
			{
				id: "b",
				text: "Save every senior reviewer for Gold so leadership can rewrite unresolved strategy, compliance, and price issues immediately before submission",
				correct: false,
			},
			{
				id: "c",
				text: "Assign the same copyedit team to every review and defer evaluator scoring until after final production",
				correct: false,
			},
			{
				id: "d",
				text: "Invite Government evaluators to the internal reviews because FAR requires contracting-officer participation in color teams",
				correct: false,
			},
		],
		explanation:
			"Color reviews are contractor governance conventions, not FAR requirements, and their names, timing, and reviewer assignments vary by organization. The cited Entellect presenter deck describes one Shipley-derived convention in which Pink, Red, Green, and Gold reviews serve different proposal, price, and approval purposes. Match expertise and independence to the purpose your process assigns each checkpoint; a compressed calendar does not make a final executive rewrite a sound substitute for earlier reviews.",
		citation:
			"Entellect, LLC, Bid Decision Gate Reviews (2016), presenter deck hosted by the U.S. Department of Energy",
		sourceUrl: "https://www.energy.gov/sites/prod/files/2016/08/f33/Bid_Decision_Gate.pdf",
		tags: ["color-teams", "pink-team", "red-team", "green-team", "gold-team"],
	},
];
