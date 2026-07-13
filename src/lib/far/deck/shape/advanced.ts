import type { QuizQuestion } from "../../types";

export const SHAPE_ADVANCED: QuizQuestion[] = [
	{
		id: "shape-oci-resolution-portfolio",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"Your large prime acquires a consultancy whose civilian-agency work includes drafting a follow-on work statement, evaluating a product your prime sells, and accessing prospective offerors' proprietary data. The prime wants to pursue the follow-on.",
		prompt: "What is the strongest integration and capture decision?",
		options: [
			{
				id: "a",
				text: "Disclose early and separate the three OCI analyses: consider avoidance for ground-rules work, remove or safeguard conflicted evaluation, and propose controlled mitigation for unequal access",
				tier: "best",
				consequence:
					"This matches remedies to the facts and gives the contracting officer time to avoid, neutralize, or mitigate significant conflicts before award."
			},
			{
				id: "b",
				text: "Apply one corporate firewall to every issue and declare all three conflicts cured",
				tier: "costly",
				consequence:
					"A firewall may address information flow, but it does not necessarily restore objective judgment or undo a company-authored competitive work statement."
			},
			{
				id: "c",
				text: "Ask the customer program manager for an informal waiver and proceed without contracting-office review",
				tier: "disqualifying",
				consequence:
					"Only the agency's authorized waiver process can waive FAR subpart 9.5 rules; an informal program assurance is not a waiver."
			},
			{
				id: "d",
				text: "Assume the acquisition erased the consultancy's history because the conflicted contracts predate the transaction",
				tier: "disqualifying",
				consequence:
					"Corporate restructuring does not erase the underlying access, work, or organizational incentives that the agency must evaluate."
			}
		],
		explanation:
			"FAR 9.504 directs contracting officers to identify and resolve significant OCIs early through avoidance, neutralization, or mitigation. Remedies are fact-specific. Under FAR 9.503, only the agency head or an authorized designee—never the contractor or program office—may approve a written waiver in the Government's interest.",
		citation: "FAR 9.504; FAR 9.503",
		sourceUrl: "https://www.acquisition.gov/far/9.504",
		tags: ["oci", "mitigation", "avoidance", "waiver", "merger"]
	},
	{
		id: "shape-requirements-without-ghostwriting",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A civilian deputy program manager asks your capture lead to email 'ready-to-paste' requirements for an upcoming competition. Your company intends to bid, and no Government team has yet framed the outcomes or alternatives.",
		prompt: "How should the capture lead help without ghostwriting the competition?",
		options: [
			{
				id: "a",
				text: "Provide documented mission data, industry benchmarks, alternative outcome measures, assumptions, and tradeoffs while stating that the Government must develop and control its final requirements",
				tier: "best"
			},
			{
				id: "b",
				text: "Offer a capability briefing and examples from public contracts, but avoid supplying any vendor-specific final language",
				tier: "defensible"
			},
			{
				id: "c",
				text: "Send a complete PWS and evaluation scheme optimized for your solution, with instructions to paste it unchanged",
				tier: "disqualifying"
			},
			{
				id: "d",
				text: "Refuse every substantive exchange because any presolicitation industry input creates an OCI",
				tier: "costly"
			}
		],
		explanation:
			"FAR 15.201 encourages substantive early exchanges, so industry may explain capabilities, feasibility, outcomes, and alternatives. The boundary is not silence: FAR 9.505-2 creates risk when contractor material leads directly and predictably to the competitive work statement. Government ownership, multiple inputs, and bounded evidence reduce that risk. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(c) (FAC 2026-01 baseline); RFO 15.101 (adopting agencies); FAR 9.505-2(b)",
		sourceUrl: "https://www.acquisition.gov/far/9.505-2",
		tags: ["requirements-shaping", "ghostwriting", "biased-ground-rules", "government-ownership"]
	},
	{
		id: "shape-ja-support-boundary",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"A civilian customer believes only your prime can complete a time-sensitive legacy migration and asks your account team to write the agency's justification and approval (J&A) for other than full and open competition.",
		prompt: "What is the proper shaping role for the company?",
		options: [
			{
				id: "a",
				text: "Provide complete, supportable technical, schedule, market, and transition facts; let authorized Government personnel develop, certify, and approve the J&A",
				correct: true
			},
			{
				id: "b",
				text: "Write and approve the J&A because the proposed contractor knows its unique qualifications best",
				correct: false
			},
			{
				id: "c",
				text: "Ask the program office to omit market research and interested sources so the rationale is shorter",
				correct: false
			},
			{
				id: "d",
				text: "Promise that your factual submission legally requires the contracting officer to select a sole-source strategy",
				correct: false
			}
		],
		explanation:
			"Under FAR 6.303-1(c), Government technical and requirements personnel provide and certify the necessary supporting data; FAR 6.303-2 specifies the J&A's facts, rationale, market research, interested sources, fair-and-reasonable determination, and certifications; and FAR 6.304 requires approval by the authorized Government level. A prospective contractor may supply accurate facts but cannot develop, certify, or approve the agency's J&A. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 6.303-1(c), 6.303-2, 6.304 (FAC 2026-01 baseline); RFO 6.104, 6.104-1, 6.104-2 (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/6.303-2",
		tags: ["ja", "sole-source", "market-research", "government-approval"]
	},
	{
		id: "shape-hiring-former-official",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"Your recruiting lead wants to hire a recently departed civilian official who held senior acquisition duties involving contracts awarded to your company. The business unit wants the person to start customer-facing capture work immediately.",
		prompt: "What must happen before the company commits to duties or compensation?",
		options: [
			{
				id: "a",
				text: "Obtain a documented legal and ethics review of the person's roles, decisions, dates, contracts, and proposed duties, then impose any compensation or representational restrictions",
				correct: true
			},
			{
				id: "b",
				text: "Proceed because all restrictions end the day an official leaves Federal service",
				correct: false
			},
			{
				id: "c",
				text: "Let the hiring manager decide based only on whether the former official remembers nonpublic information",
				correct: false
			},
			{
				id: "d",
				text: "Avoid review by employing the person through a staffing affiliate while assigning the same work",
				correct: false
			}
		],
		explanation:
			"FAR 3.104-3(d) imposes a one-year compensation restriction for certain former officials based on specified procurement roles and decisions. FAR 3.104-2 also flags separate 18 U.S.C. 207 post-employment representational restrictions. Applicability is fact-specific, so counsel must screen before duties are set.",
		citation: "FAR 3.104-3(d); FAR 3.104-2(b)(3)",
		sourceUrl: "https://www.acquisition.gov/far/3.104-3",
		tags: ["revolving-door", "former-official", "post-employment", "ethics"]
	},
	{
		id: "shape-no-blackout-myth",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"After a civilian agency releases its RFP but before proposals are due, a program employee invites your solution lead to a private call about a material ambiguity. A teammate says FAR creates an absolute communications blackout once the RFP is posted.",
		prompt: "What is the accurate course?",
		options: [
			{
				id: "a",
				text: "Do not take the private substantive call; route the ambiguity through the contracting officer's solicitation channel so any proposal-necessary answer can be leveled",
				correct: true
			},
			{
				id: "b",
				text: "Take the call because information-leveling duties end when the solicitation is released",
				correct: false
			},
			{
				id: "c",
				text: "Refuse all contact of every kind because FAR imposes a universal post-release blackout",
				correct: false
			},
			{
				id: "d",
				text: "Take the call if the program employee promises not to tell the contracting officer",
				correct: false
			}
		],
		explanation:
			"FAR does not establish a universal solicitation-release blackout. FAR 15.201(f) instead makes the contracting officer the focal point after release and requires proposal-necessary acquisition information disclosed to potential offerors to be made public. Follow the RFP's communication instructions and use the contracting officer's Q&A process. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(f) (FAC 2026-01 baseline); RFO 15.201(c)(1), 15.101(d) (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["communications", "no-blackout", "solicitation", "contracting-officer"]
	},
	{
		id: "shape-rfi-response-architecture",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"You chair a large-prime color review for a civilian RFI. The notice asks whether a nationwide service model is feasible, what acquisition choices drive risk, and which performance measures the market can support.",
		prompt: "Which response architecture best shapes the eventual requirement?",
		options: [
			{
				id: "a",
				text: "Answer each question with evidence, quantify tradeoffs, distinguish firm capabilities from assumptions, offer feasible alternatives, and mark proprietary material narrowly",
				tier: "best",
				consequence:
					"The agency receives decision-ready market evidence it can compare and use while your company protects genuine proprietary content."
			},
			{
				id: "b",
				text: "Lead with broad corporate credentials and avoid discussing feasibility limits or acquisition tradeoffs",
				tier: "costly",
				consequence:
					"The response markets the company but gives planners little usable information for shaping requirements or strategy."
			},
			{
				id: "c",
				text: "State that only your proprietary architecture can work and omit the evidence behind that conclusion",
				tier: "disqualifying",
				consequence:
					"Unsupported exclusivity claims undermine credibility and do not help the agency evaluate capable sources or reasonable alternatives."
			},
			{
				id: "d",
				text: "Provide a concise evidence-based answer only to the questions where the team has validated data, identifying gaps explicitly",
				tier: "defensible",
				consequence:
					"Accuracy is preserved, but the company misses opportunities to propose assumptions, testable alternatives, or follow-up research for the unresolved areas."
			}
		],
		explanation:
			"FAR 15.201(b) frames exchanges as a way to improve mutual understanding of requirements and capabilities, while FAR 10.001 uses market research to test sources, practices, and whether needs could be reasonably modified. Evidence and transparent assumptions shape better than unsupported sales claims. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(b), (e); FAR 10.001(a)(3) (FAC 2026-01 baseline); RFO 15.101(a), (c) (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["rfi", "response-strategy", "evidence", "tradeoffs"]
	},
	{
		id: "shape-soo-to-pws-contract",
		unitId: "shape",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"Your proposal team receives a civilian solicitation built around a Government SOO. The solution lead asks which document should translate your promised method, standards, and measurable results into the contractual performance baseline.",
		prompt: "Which answer is correct under FAR 37.602?",
		options: [
			{
				id: "a",
				text: "The offeror develops a proposed PWS from the SOO; the SOO itself does not become part of the contract",
				correct: true
			},
			{
				id: "b",
				text: "The SOO automatically becomes the complete contract work statement without an offeror-developed PWS",
				correct: false
			},
			{
				id: "c",
				text: "The offeror must replace the SOO with a staffing-level SOW that omits performance standards",
				correct: false
			},
			{
				id: "d",
				text: "The contracting officer converts the SOO into each offeror's technical proposal after award",
				correct: false
			}
		],
		explanation:
			"FAR 37.602(a) permits a Government SOO from which the offeror proposes the PWS. Paragraph (c) says offerors use the SOO to develop the PWS and the SOO does not become part of the contract. The PWS should express required results and measurable performance standards. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 37.602(a), (c) (FAC 2026-01 baseline); RFO 37.102-1 (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/37.602",
		tags: ["soo", "pws", "contract-baseline", "performance-standards"]
	}
];
