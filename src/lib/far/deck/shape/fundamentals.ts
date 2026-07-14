import type { QuizQuestion } from "../../types";

export const SHAPE_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "shape-rfi-response-status",
		unitId: "shape",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are a capture analyst at a large civilian prime. An agency RFI asks for capabilities, rough-order pricing, and delivery assumptions, and the account lead worries that answering could commit the company.",
		prompt: "What should you tell the account lead?",
		options: [
			{
				id: "a",
				text: "An RFI response is planning and market information, not an offer the Government can accept to form a contract",
				correct: true
			},
			{
				id: "b",
				text: "The response becomes a binding offer if it includes any pricing information",
				correct: false
			},
			{
				id: "c",
				text: "The response guarantees the company a place in the later competition",
				correct: false
			},
			{
				id: "d",
				text: "The company should treat the RFI as a final proposal because FAR requires the same format",
				correct: false
			}
		],
		explanation:
			"FAR 15.201(e) says an RFI is used when the Government does not presently intend to award a contract and wants planning or market information. Responses are not offers, cannot be accepted to form a binding contract, and have no required FAR format. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(e) (FAC 2026-01 baseline); RFO 15.101(c)(1)-(4) (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["rfi", "market-research", "nonbinding", "large-prime"]
	},
	{
		id: "shape-presolicitation-one-on-one",
		unitId: "shape",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are a business-development director preparing for a one-on-one about a future civilian case-management procurement. A teammate says private meetings with prospective offerors are prohibited.",
		prompt: "What should you tell the team about pre-solicitation one-on-ones?",
		options: [
			{
				id: "a",
				text: "FAR encourages early exchanges, including one-on-ones; the contracting officer should join discussions substantially involving potential contract terms",
				correct: true
			},
			{
				id: "b",
				text: "One-on-ones are allowed only after proposals are submitted",
				correct: false
			},
			{
				id: "c",
				text: "Only the incumbent may receive a one-on-one because it already holds the work",
				correct: false
			},
			{
				id: "d",
				text: "A one-on-one is lawful only if every competitor attends the same meeting",
				correct: false
			}
		],
		explanation:
			"FAR 15.201(a)-(c) encourages exchanges from the earliest identification of a requirement through receipt of proposals and expressly lists one-on-one meetings. A contracting officer should participate when the discussion substantially involves potential contract terms and conditions. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(a), (c)(4) (FAC 2026-01 baseline); RFO 15.101 (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["one-on-one", "presolicitation", "contracting-officer", "civilian"]
	},
	{
		id: "shape-sow-pws-soo-basics",
		unitId: "shape",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are a solutions architect advising a civilian program that wants vendors to propose innovative ways to improve claims-processing outcomes rather than follow a prescribed staffing recipe.",
		prompt: "Which requirements approach best supports that goal?",
		options: [
			{
				id: "a",
				text: "Use a SOO stating purpose, scope or mission, period and place, background, objectives, and constraints, then have offerors propose a measurable PWS",
				correct: true
			},
			{
				id: "b",
				text: "Use a detailed SOW prescribing each labor step and hour because that maximizes solution flexibility",
				correct: false
			},
			{
				id: "c",
				text: "Use a SOO that becomes the complete contract work statement without any offeror-developed PWS",
				correct: false
			},
			{
				id: "d",
				text: "Avoid performance standards so vendors can choose whether to measure results",
				correct: false
			}
		],
		explanation:
			"FAR 37.602 favors required results and measurable performance standards. A Government SOO, from which each offeror develops a proposed PWS, must include purpose, scope or mission, period and place of performance, background, performance objectives, and operating constraints. A prescriptive SOW is a poorer fit when the agency wants competing methods and innovation. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 37.602(a)-(c) (FAC 2026-01 baseline); RFO 37.102-1 (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/37.602",
		tags: ["sow", "pws", "soo", "performance-based-acquisition"]
	},
	{
		id: "shape-information-leveling",
		unitId: "shape",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "tiered",
		situation:
			"In a presolicitation call, a civilian agency employee tells your capture manager a nonpublic interface constraint that any offeror would need to prepare a sound proposal. The employee asks the team to keep it between them.",
		prompt: "How should the capture manager respond?",
		options: [
			{
				id: "a",
				text: "Stop relying on the detail and ask the contracting officer to release the acquisition information publicly to potential offerors",
				tier: "best"
			},
			{
				id: "b",
				text: "Record the detail, restrict it internally, and promptly ask company counsel how to notify the contracting officer",
				tier: "defensible"
			},
			{
				id: "c",
				text: "Use the detail but omit it from the proposal so evaluators cannot tell the company had it",
				tier: "disqualifying"
			},
			{
				id: "d",
				text: "Share it with one favored subcontractor and assume that levels the competitive field",
				tier: "costly"
			}
		],
		explanation:
			"FAR 15.201(f) permits disclosure of general mission information, but proposal-necessary information about a proposed acquisition disclosed to potential offerors must be made public as soon as practicable. The contracting officer is the right channel for leveling; the contractor should not exploit or privately redistribute the information. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(f) (FAC 2026-01 baseline); RFO 15.101(d) (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["information-leveling", "fairness", "procurement-integrity", "presolicitation"]
	},
	{
		id: "shape-call-plan-program-and-co",
		unitId: "shape",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"You are the civilian account executive building a call plan. The program office understands mission pain and desired outcomes, while the contracting office controls the acquisition process and future contract.",
		prompt: "What is the strongest call-plan design?",
		options: [
			{
				id: "a",
				text: "Run coordinated tracks: validate mission and outcomes with program stakeholders, and route acquisition strategy and contractual matters through the contracting officer",
				correct: true
			},
			{
				id: "b",
				text: "Work only with the program office because it can bind the Government once it selects a preferred solution",
				correct: false
			},
			{
				id: "c",
				text: "Work only with contracting and avoid end users because mission understanding is irrelevant before an RFP",
				correct: false
			},
			{
				id: "d",
				text: "Ask a program employee to promise award terms, then use that promise as contractual authority",
				correct: false
			}
		],
		explanation:
			"FAR 15.201(c) contemplates early exchange among industry, the program manager, the contracting officer, and other acquisition participants. Program stakeholders illuminate the need; under FAR 1.602-1, only contracting officers acting within delegated authority can bind the Government. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(c); FAR 1.602-1 (FAC 2026-01 baseline); RFO 15.101; RFO 1.402-1 (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/1.602-1",
		tags: ["call-plan", "program-office", "contracting-office", "authority"]
	}
];
