import type { QuizQuestion } from "../../types";

export const WIN_PROTEST_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "win-protest-award-notice",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"Your large-prime capture team loses a negotiated civilian-agency competition after making the competitive range. The award email says only that another company won.",
		prompt: "What should the contracts lead know about the FAR 15.503 postaward notice?",
		options: [
			{
				id: "a",
				text: "The contracting officer generally must send the written notice within 3 days after award and include basic competition, award, price, and general nonselection information while protecting confidential business information",
				correct: true,
			},
			{
				id: "b",
				text: "The agency has 30 days to provide only the awardee's name, and may never state why the proposal was not accepted",
				correct: false,
			},
			{
				id: "c",
				text: "The notice must disclose the awardee's complete technical proposal, cost breakdown, profit, and indirect rates",
				correct: false,
			},
			{
				id: "d",
				text: "No written notice is due to an unsuccessful offeror that remained in the competitive range",
				correct: false,
			},
		],
		explanation:
			"FAR 15.503(b)(1) generally requires written notification within 3 days after award to each unsuccessful competitive-range offeror not previously notified. It identifies the competition and award and gives general reasons for nonselection, but expressly protects cost breakdowns, profit, overhead rates, trade secrets, manufacturing methods, and other confidential business information. This notice is not the same as a debriefing.",
		citation: "FAR 15.503(b)",
		sourceUrl: "https://www.acquisition.gov/far/15.503",
		tags: ["award-notice", "FAR-15.503", "unsuccessful-offeror", "confidentiality"],
	},
	{
		id: "win-protest-debrief-entitlement",
		unitId: "win-protest",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"On a negotiated procurement covered by FAR 15.506, what preserves an unsuccessful offeror's entitlement to a required postaward debriefing?",
		options: [
			{
				id: "a",
				text: "A written request received by the agency within 3 days after the offeror receives its FAR 15.503(b) award notice",
				correct: true,
			},
			{
				id: "b",
				text: "An oral request made within 5 days after the agency posts the award publicly",
				correct: false,
			},
			{
				id: "c",
				text: "A written request filed any time within GAO's ordinary 10-day protest period",
				correct: false,
			},
			{
				id: "d",
				text: "No request; every federal award automatically carries a required FAR Part 15 debriefing",
				correct: false,
			},
		],
		explanation:
			"Under FAR 15.506(a)(1), the agency must receive the written request within 3 days after the offeror receives the FAR 15.503(b) notice. An agency may accommodate an untimely request, but that does not automatically extend protest deadlines. The entitlement is tied to covered negotiated procurements; not every acquisition method or award requires a FAR Part 15 debriefing.",
		citation: "FAR 15.506(a)",
		sourceUrl: "https://www.acquisition.gov/far/15.506",
		tags: ["debriefing", "request", "timeliness", "FAR-15.506"],
	},
	{
		id: "win-protest-debrief-content-limits",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"Before a civilian Part 15 debriefing, the capture VP asks for the awardee's entire proposal and a line-by-line comparison against your proposal.",
		prompt: "What information should the team expect—and not expect—from the debriefing?",
		options: [
			{
				id: "a",
				text: "Seek the required evaluation and award information and ask relevant process questions, but do not expect point-by-point comparisons or the awardee's protected proprietary information",
				correct: true,
			},
			{
				id: "b",
				text: "The agency must provide the awardee's full proposal, cost buildup, profit, indirect rates, and reference-provider names",
				correct: false,
			},
			{
				id: "c",
				text: "A debriefing may disclose only your final adjectival rating and nothing about the award rationale or evaluated prices",
				correct: false,
			},
			{
				id: "d",
				text: "The agency must negotiate proposal improvements with you and reopen the competition during the debriefing",
				correct: false,
			},
		],
		explanation:
			"FAR 15.506(d) calls for significant weaknesses or deficiencies in the debriefed offeror's proposal, applicable evaluated prices and ratings, ranking if one was developed, a summary rationale, and reasonable answers to relevant process questions. FAR 15.506(e) bars point-by-point comparisons and protected trade-secret, confidential commercial, cost-breakdown, profit, indirect-rate, and reference-source information.",
		citation: "FAR 15.506(d)-(e)",
		sourceUrl: "https://www.acquisition.gov/far/15.506",
		tags: ["debriefing", "content", "proprietary-information", "FAR-15.506"],
	},
	{
		id: "win-protest-forum-basics",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "tiered",
		situation:
			"After a required debriefing, counsel identifies a supportable evaluation error. The business wants independent review, a defined decision schedule, lower litigation cost than court, and the possibility of a statutory performance stay if the separate stay deadline is met.",
		prompt: "Which forum choice best matches those objectives?",
		options: [
			{
				id: "a",
				text: "File at GAO while separately confirming both merits timeliness and the CICA stay deadline",
				tier: "best",
			},
			{
				id: "b",
				text: "Use the agency protest process for its relatively informal, inexpensive review, accepting that the agency decides it",
				tier: "defensible",
			},
			{
				id: "c",
				text: "File at the Court of Federal Claims and seek injunctive relief, accepting formal litigation and no automatic CICA stay",
				tier: "costly",
			},
			{
				id: "d",
				text: "Send the evaluation challenge to SBA as though SBA were the ordinary bid-protest forum",
				tier: "disqualifying",
			},
		],
		explanation:
			"GAO is an independent, comparatively expeditious protest forum and decides protests under a statutory schedule; a timely postaward filing can also produce a CICA stay when the separate stay conditions are satisfied. FAR 33.103 provides an agency-level process. COFC has bid-protest jurisdiction under 28 U.S.C. 1491(b), but stopping performance requires court relief or Government agreement rather than an automatic CICA stay. SBA decides specialized size and status matters, not ordinary evaluation protests.",
		citation: "FAR 33.103-33.105",
		sourceUrl: "https://www.acquisition.gov/far/33.104",
		tags: ["forum-selection", "GAO", "agency-protest", "COFC"],
	},
	{
		id: "win-protest-business-case",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "reveal-tradeoff",
		situation:
			"The account executive is angry after a loss and wants an immediate protest 'to show the customer we fight.' The debrief revealed one odd comment, but the team has not connected it to a solicitation rule or a changed award outcome.",
		prompt: "What should the large-prime pursuit leader do first?",
		options: [
			{
				id: "a",
				text: "Preserve every deadline, run a rapid counsel-led merits and prejudice review, and weigh likely relief against cost, transition effects, and the long-term customer relationship",
				tier: "best",
				consequence:
					"The company makes a timely, evidence-based decision and can pursue a focused protest without turning a legal remedy into customer retaliation.",
			},
			{
				id: "b",
				text: "Ask the contracting officer to clarify the odd comment while counsel keeps all filing clocks running",
				tier: "defensible",
				consequence:
					"A professional question may improve the record and relationship, but informal exchanges do not suspend GAO or agency deadlines.",
			},
			{
				id: "c",
				text: "File every conceivable allegation immediately and decide later whether any error could have changed the result",
				tier: "costly",
				consequence:
					"The filing preserves some timing but spends credibility and money on speculation; weak grounds can obscure a later supportable issue.",
			},
			{
				id: "d",
				text: "Threaten program staff with public criticism unless they reverse the award",
				tier: "disqualifying",
				consequence:
					"The tactic damages the customer relationship, bypasses the contracting channel, and does nothing to establish a valid protest ground or prejudice.",
			},
		],
		explanation:
			"A protest is a business and legal tool, not a punishment for losing. FAR 33.103 encourages open, frank efforts to resolve concerns, while a valid protest must identify legal and factual grounds and resulting prejudice. Leadership should preserve deadlines, assess record support and achievable relief, and communicate professionally with the customer.",
		citation: "FAR 33.103(b), (d)(2)",
		sourceUrl: "https://www.acquisition.gov/far/33.103",
		tags: ["protest-decision", "prejudice", "customer-relationship", "tradeoffs"],
	},
];
