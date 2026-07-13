import type { QuizQuestion } from "../types";

export const FIND_QUESTIONS: QuizQuestion[] = [
	{
		"id": "find-sam-registration-timing",
		"unitId": "find",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "Under FAR 52.204-7 (System for Award Management), when must an offeror be registered in SAM?",
		"options": [
			{
				"id": "a",
				"text": "When submitting the offer, and continuously through award, performance, and final payment.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Only after being selected as the apparent awardee, before the contract is signed.",
				"correct": false
			},
			{
				"id": "c",
				"text": "Within 30 days after contract award.",
				"correct": false
			},
			{
				"id": "d",
				"text": "Only for awards above the simplified acquisition threshold of $250,000.",
				"correct": false
			}
		],
		"explanation": "FAR 52.204-7(b) requires the offeror to be registered in SAM at the time it submits its offer and to remain registered through award, performance, and final payment. It is not deferred until after selection and is not tied to the SAT.",
		"citation": "FAR 52.204-7",
		"sourceUrl": "https://www.acquisition.gov/far/52.204-7",
		"tags": [
			"sam-registration",
			"52.204-7",
			"eligibility"
		]
	},
	{
		"id": "find-sources-sought-capture",
		"unitId": "find",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "A sources sought notice posts on SAM.gov for work your firm can perform. The requirement is currently unrestricted (no set-aside), and your company is a large business.",
		"prompt": "What is the strongest capture move?",
		"options": [
			{
				"id": "a",
				"text": "Respond with a tailored capability statement showing you are an interested, capable source, and use it to shape scope with the contracting shop.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Do nothing and wait for the formal RFP to drop.",
				"tier": "costly"
			},
			{
				"id": "c",
				"text": "Submit a full priced technical proposal in response to the notice.",
				"tier": "disqualifying"
			},
			{
				"id": "d",
				"text": "File a bid protest arguing the notice is defective.",
				"tier": "disqualifying"
			}
		],
		"explanation": "A sources sought is market research under FAR Part 10 — no award results from it. Responding with a capability statement puts a capable large business on record (informing the CO's set-aside decision) and opens the door to shape requirements. It is not a solicitation, so there is nothing to price and nothing to protest.",
		"citation": "FAR 10.002",
		"sourceUrl": "https://www.acquisition.gov/far/10.002",
		"tags": [
			"sources-sought",
			"market-research",
			"part-10"
		]
	},
	{
		"id": "find-large-biz-sb-setaside",
		"unitId": "find",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "You review a notice on SAM.gov that is a total small business set-aside under a NAICS code whose size standard your firm clearly exceeds. Proposals are due in three weeks.",
		"prompt": "How should you pursue this opportunity?",
		"options": [
			{
				"id": "a",
				"text": "Submit as prime anyway and argue your qualifications on the merits.",
				"tier": "disqualifying",
				"consequence": "Rejected as ineligible — only small businesses may compete on a total SB set-aside (FAR 19.502-2). Wasted B&D and a size protest waiting to happen."
			},
			{
				"id": "b",
				"text": "Team as a subcontractor to a qualified small business prime.",
				"tier": "best",
				"consequence": "You capture scope on the work, but the small prime must meet the limitations on subcontracting (self-perform the required share), capping how much you can take."
			},
			{
				"id": "c",
				"text": "Stand up an SBA mentor-protege joint venture with a small business and bid as the JV.",
				"tier": "costly",
				"consequence": "Legitimate path — an approved MPP JV can bid as small — but SBA approval takes months, so you almost certainly cannot get it in place before proposals are due."
			},
			{
				"id": "d",
				"text": "No-bid this one and position now for the next unrestricted follow-on.",
				"tier": "defensible",
				"consequence": "You concede this award but preserve B&D dollars and relationships for a competition you can actually win as prime."
			}
		],
		"explanation": "A total small business set-aside restricts prime eligibility to small businesses (FAR 19.502-2), and size is measured against the NAICS code assigned to the solicitation. A large firm's realistic near-term play is to subcontract to a small prime; an MPP joint venture is valid but too slow for a three-week deadline.",
		"citation": "FAR 19.502-2",
		"sourceUrl": "https://www.acquisition.gov/far/19.502-2",
		"tags": [
			"set-aside",
			"small-business",
			"naics",
			"teaming"
		]
	},
	{
		"id": "find-hubzone-identify",
		"unitId": "find",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "confidence-bet",
		"situation": "You are triaging set-aside notices. One restricts competition to firms whose principal office is located in a designated area and that have at least 35% of their employees residing in such an area.",
		"prompt": "Which set-aside program is this?",
		"options": [
			{
				"id": "a",
				"text": "HUBZone",
				"correct": true
			},
			{
				"id": "b",
				"text": "SDVOSB (Service-Disabled Veteran-Owned Small Business)",
				"correct": false
			},
			{
				"id": "c",
				"text": "8(a) Business Development",
				"correct": false
			},
			{
				"id": "d",
				"text": "WOSB (Women-Owned Small Business)",
				"correct": false
			}
		],
		"explanation": "The principal-office-in-a-HUBZone plus 35%-of-employees-residing-in-a-HUBZone test is unique to the HUBZone program (FAR 19.1303). SDVOSB keys on service-disabled veteran ownership and control, 8(a) on disadvantaged ownership plus SBA program admission, and WOSB on women ownership and control.",
		"citation": "FAR 19.1303",
		"sourceUrl": "https://www.acquisition.gov/far/19.1303",
		"tags": [
			"set-aside",
			"hubzone",
			"socioeconomic-programs"
		]
	}
];
