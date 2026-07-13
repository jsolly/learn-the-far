import type { QuizQuestion } from "../../types";

export const WIN_PROTEST_CORE: QuizQuestion[] = [
	{
		id: "win-protest-apparent-solicitation-defect",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"The final RFP facially contradicts itself on a material evaluation factor. Your team flags the conflict before proposals are due but wants to compete first and protest only if it loses.",
		prompt: "What is the GAO timeliness rule for that apparent defect?",
		options: [
			{
				id: "a",
				text: "Protest before the initial proposal closing time; if an amendment first creates the defect, protest before the next closing time",
				correct: true,
			},
			{
				id: "b",
				text: "Wait until award and file within 10 days after learning that the defect affected the evaluation",
				correct: false,
			},
			{
				id: "c",
				text: "Raise it within 5 days after any postaward debriefing, because a debriefing revives solicitation challenges",
				correct: false,
			},
			{
				id: "d",
				text: "Include a reservation of rights in the proposal and protest at any time during performance",
				correct: false,
			},
		],
		explanation:
			"Under 4 C.F.R. 21.2(a)(1), a protest based on an impropriety apparent before the initial closing time must be filed before that closing time. A later-incorporated apparent defect must be protested before the next closing time. Competing with knowledge of the defect and waiting for award generally forfeits that GAO ground; a reservation in the proposal does not extend the rule.",
		citation: "4 C.F.R. § 21.2(a)(1)",
		sourceUrl: "https://www.ecfr.gov/current/title-4/section-21.2",
		tags: ["solicitation-defect", "preaward", "GAO", "timeliness"],
	},
	{
		id: "win-protest-general-gao-timeliness",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"Your large-prime contracts director learns on Monday, from an agency email, of a protest basis unrelated to an apparent solicitation defect. No required debriefing applies. The team wants to wait for a monthly pipeline review.",
		prompt: "Which timing rule should drive the decision?",
		options: [
			{
				id: "a",
				text: "GAO generally requires filing within 10 calendar days after the basis is known or should have been known, whichever is earlier",
				correct: true,
			},
			{
				id: "b",
				text: "GAO allows 10 business days after the company finishes its internal investigation",
				correct: false,
			},
			{
				id: "c",
				text: "Every postaward issue may wait until 10 days after any optional or untimely debriefing",
				correct: false,
			},
			{
				id: "d",
				text: "There is no GAO filing deadline if performance has not begun",
				correct: false,
			},
		],
		explanation:
			"For grounds other than apparent solicitation improprieties, 4 C.F.R. 21.2(a)(2) generally uses 10 calendar days from actual or constructive knowledge. A specific exception addresses protests where a required debriefing is requested and, when requested, is required; it does not turn every optional, delayed, or untimely debriefing into a new clock. Internal reviews do not toll the deadline.",
		citation: "4 C.F.R. § 21.2(a)(2)",
		sourceUrl: "https://www.ecfr.gov/current/title-4/section-21.2",
		tags: ["GAO", "timeliness", "known-or-should-have-known", "debriefing-exception"],
	},
	{
		id: "win-protest-stay-versus-merits-clock",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"A required, timely requested civilian Part 15 debriefing has concluded. Assume the evaluation ground is otherwise timely under GAO's debriefing rule. Leadership asks whether filing on day 9 after the debriefing is equivalent to filing on day 4.",
		prompt: "How should counsel explain the two clocks?",
		options: [
			{
				id: "a",
				text: "File early enough that the agency receives GAO notice by the later of 10 days after award or 5 days after the offered date for the required debriefing, while separately satisfying GAO's merits deadline",
				tier: "best",
				consequence:
					"The team protects both objectives: a protest GAO can consider and, absent an authorized override, suspension or termination of performance under FAR 33.104(c).",
			},
			{
				id: "b",
				text: "File on day 9 because a protest timely on the merits always triggers the automatic stay",
				tier: "costly",
				consequence:
					"The team cannot assume either outcome: missing the 5-day-after-debriefing prong does not necessarily forfeit the stay if the later 10-day-after-award prong is still met, so counsel must check both.",
			},
			{
				id: "c",
				text: "File an agency protest first because that pauses every later GAO deadline",
				tier: "disqualifying",
				consequence:
					"FAR 33.103(f)(4) expressly warns that pursuing an agency protest does not extend the time for obtaining a GAO stay.",
			},
			{
				id: "d",
				text: "Wait for the awardee to mobilize, then ask GAO to make the stay retroactive",
				tier: "disqualifying",
				consequence:
					"The statutory stay depends on timely agency receipt of GAO notice; business impact does not create a retroactive automatic stay.",
			},
		],
		explanation:
			"GAO merits timeliness and the CICA stay are different tests. Under 31 U.S.C. § 3553(d), as implemented by FAR 33.104(c)(1), the agency must receive GAO's notice within 10 days after award or within 5 days after the offered date for a required debriefing, whichever is later. Filing early accounts for GAO's transmission time. A protest can be timely on the merits yet too late to trigger the automatic stay.",
		citation: "31 U.S.C. § 3553(d); FAR 33.104(c); 4 C.F.R. § 21.2(a)(2)",
		sourceUrl: "https://www.acquisition.gov/far/33.104",
		tags: ["CICA-stay", "merits-timeliness", "GAO", "debriefing"],
	},
	{
		id: "win-protest-unstated-criterion",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"The debrief says your proposal lost credit for not offering a feature the RFP never identified. The feature does not appear logically encompassed by any stated factor, and contemporaneous scoring shows the deduction changed the tradeoff.",
		prompt: "What is the strongest protest theory?",
		options: [
			{
				id: "a",
				text: "The agency used an unstated evaluation criterion, and the record supports competitive prejudice because the error could have changed the award",
				correct: true,
			},
			{
				id: "b",
				text: "Any consideration not quoted word-for-word in the RFP is automatically unlawful, even when logically encompassed by a stated factor",
				correct: false,
			},
			{
				id: "c",
				text: "The protest succeeds merely because the evaluator's business judgment differs from the proposal team's view",
				correct: false,
			},
			{
				id: "d",
				text: "No prejudice showing is needed once any documentation error is identified",
				correct: false,
			},
		],
		explanation:
			"FAR 15.305(a) requires evaluation solely on stated factors and subfactors. DCS explains that an agency may consider matters not expressly listed only when they are reasonably and logically encompassed by the stated criteria. The record must also show a reasonable possibility of competitive prejudice—typically that, but for the error, the protester had a substantial chance of award, as applied in Salient.",
		citation:
			"FAR 15.305(a); DCS Corp., B-423482.2; Salient CRGT, Inc., B-423640.2 et al. (prejudice)",
		sourceUrl: "https://www.gao.gov/products/b-423482.2",
		tags: ["unstated-criteria", "evaluation", "prejudice", "GAO"],
	},
	{
		id: "win-protest-unequal-discussions",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"After final proposal revisions, the agency let the awardee supply material missing pricing and used it in the selection. Your company, still in the competitive range, received no comparable opportunity. The capture team can identify specific price and technical revisions it would have made.",
		prompt: "How should the protest team develop this issue?",
		options: [
			{
				id: "a",
				text: "Frame the exchange as discussions, compare the opportunities given, and document the specific competitively useful revisions your company was denied",
				tier: "best",
			},
			{
				id: "b",
				text: "Challenge unequal treatment but preserve an alternative argument in case the record shows only a limited clarification",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Allege inequality without explaining how another revision could have improved your competitive position",
				tier: "costly",
			},
			{
				id: "d",
				text: "Argue that every communication with one offeror requires identical words to be sent to every other offeror",
				tier: "disqualifying",
			},
		],
		explanation:
			"FAR 15.306 distinguishes limited clarifications from discussions that permit material proposal revision. Discussions are tailored, not identical, but must be conducted with each offeror in the competitive range and may not favor one offeror. GAO also requires prejudice: the protester should explain concretely how the denied opportunity could have improved its competitive standing.",
		citation: "FAR 15.306(d)-(e); Ohio KePRO, Inc., B-417836.4 et al.",
		sourceUrl: "https://www.gao.gov/products/b-417836.4%2Cb-417836.5",
		tags: ["discussions", "unequal-treatment", "prejudice", "FAR-15.306"],
	},
	{
		id: "win-protest-misevaluation-prejudice",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"An evaluator assigned your proposal a weakness for omitting a staffing commitment that appears on a cited proposal page. Correcting the weakness would put your lower-priced proposal close to the awardee in the documented tradeoff.",
		prompt: "What makes the protest ground strongest?",
		options: [
			{
				id: "a",
				text: "Cite the exact proposal and evaluation record, show the agency overlooked or irrationally assessed the information, and connect correction to a substantial chance of award",
				correct: true,
			},
			{
				id: "b",
				text: "Argue only that your internal color team assigned the proposal a higher adjectival rating",
				correct: false,
			},
			{
				id: "c",
				text: "List every favorable proposal statement without connecting any one to the challenged weakness or award decision",
				correct: false,
			},
			{
				id: "d",
				text: "Show a minor clerical error but concede that correcting it could not affect the competitive result",
				correct: false,
			},
		],
		explanation:
			"GAO does not substitute a protester's judgment for a reasonable agency evaluation. A winning misevaluation ground identifies a concrete inconsistency with the solicitation or record and demonstrates competitive prejudice. Adjectival labels matter less than the underlying evaluated differences and their role in the source-selection decision.",
		citation: "FAR 15.305(a); Leidos, Inc., B-421252.4",
		sourceUrl: "https://www.gao.gov/products/b-421252.4",
		tags: ["misevaluation", "record", "prejudice", "source-selection"],
	},
	{
		id: "win-protest-awardee-intervention",
		unitId: "win-protest",
		format: "recall",
		difficulty: "core",
		scoring: "single-best",
		prompt:
			"After award, who is the intervenor recognized by GAO's bid-protest rules, and what should a large-prime awardee normally do?",
		options: [
			{
				id: "a",
				text: "The awardee; promptly request intervention and use qualified outside counsel where protected source-selection material will be involved",
				correct: true,
			},
			{
				id: "b",
				text: "Any subcontractor on the winning team; it automatically controls the agency's defense",
				correct: false,
			},
			{
				id: "c",
				text: "Only the contracting officer; an awardee may never participate in a GAO protest",
				correct: false,
			},
			{
				id: "d",
				text: "Every unsuccessful offeror; all become intervenors without requesting permission",
				correct: false,
			},
		],
		explanation:
			"Under 4 C.F.R. 21.0(b), when award has been made, the intervenor is the awardee. The agency must give the awardee notice under 21.3(a), while the agency-report, document-production, and comment procedures are governed by 21.3(c)-(i). Participation involving protected material is governed by 21.4, so company personnel generally cannot receive protected competitor or source-selection information merely because the company won.",
		citation: "4 C.F.R. §§ 21.0(b), 21.3(a), (c)-(i), 21.4",
		sourceUrl: "https://www.ecfr.gov/current/title-4/part-21",
		tags: ["awardee", "intervention", "protective-order", "GAO"],
	},
	{
		id: "win-protest-corrective-action",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"Two weeks into a GAO protest, the civilian agency says it will take corrective action, reevaluate proposals, and make a new source-selection decision. GAO is expected to dismiss the protest as academic.",
		prompt: "What should the pursuit executive assume?",
		options: [
			{
				id: "a",
				text: "Treat corrective action as a new acquisition event: confirm its scope, preserve the record and deadlines, and prepare for reevaluation, revised submissions, or a new protest basis",
				tier: "best",
			},
			{
				id: "b",
				text: "Cooperate with the agency's stated process while asking counsel to assess whether the action provides the promised remedy",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Assume corrective action is a merits admission and book the contract as won",
				tier: "costly",
			},
			{
				id: "d",
				text: "Ignore all revised notices because the original GAO filing permanently preserves every later challenge",
				tier: "disqualifying",
			},
		],
		explanation:
			"FAR 33.102(b) authorizes agencies to take corrective action when a protest could be sustained, but corrective action often ends the pending GAO case without a merits decision or admission. As JSToogood illustrates, its timing and scope can also affect protest-cost issues. The team must read the actual action and calculate timeliness under 4 C.F.R. 21.2(a) from later solicitation, evaluation, or award events; an old filing does not automatically preserve a new challenge.",
		citation: "FAR 33.102(b); 4 C.F.R. § 21.2(a); JSToogood, LLC, B-423600.3",
		sourceUrl: "https://www.gao.gov/products/b-423600.3",
		tags: ["corrective-action", "reevaluation", "new-award", "timeliness"],
	},
	{
		id: "win-protest-civilian-task-order-jurisdiction",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"A civilian agency awards a task order under a multiple-award IDIQ. Counsel confirms the order exceeds the current statutory protest threshold, and the challenge concerns the order evaluation rather than an increase in the parent contract's scope, period, or maximum value.",
		prompt: "Where should the company pursue this permitted task-order protest?",
		options: [
			{
				id: "a",
				text: "At GAO, following GAO filing rules and separately checking any stay deadline",
				tier: "best",
				consequence:
					"The company uses the forum Congress designated for a qualifying civilian task-order protest and preserves the possibility of CICA relief if all conditions are met.",
			},
			{
				id: "b",
				text: "At the Court of Federal Claims because every task-order evaluation dispute falls within ordinary court bid-protest jurisdiction",
				tier: "disqualifying",
				consequence:
					"The task-order protest bar and GAO-specific statutory grant create a jurisdiction problem for the evaluation challenge as framed.",
			},
			{
				id: "c",
				text: "At SBA because the order was issued under a multiple-award contract",
				tier: "disqualifying",
				consequence:
					"SBA is not the ordinary forum for a task-order evaluation challenge; its specialized role concerns matters such as size or program status.",
			},
			{
				id: "d",
				text: "Nowhere, because no task-order protest is ever authorized",
				tier: "costly",
				consequence:
					"The company abandons a protest Congress permits for orders above the applicable threshold and for specified scope-type challenges.",
			},
		],
		explanation:
			"For agencies other than DoD, NASA, and the Coast Guard, FAR 16.505(a)(10) implements 41 U.S.C. 4106(f): task- and delivery-order protests are generally barred except for specified scope-type grounds or orders exceeding the current statutory threshold. A protest permitted because it exceeds that threshold may be filed only at GAO. Checking the live threshold avoids hard-coding a value into long-lived pursuit guidance.",
		citation: "FAR 16.505(a)(10); 41 U.S.C. § 4106(f)",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["task-order", "civilian-agency", "jurisdiction", "GAO"],
	},
	{
		id: "win-protest-sba-size-status-lane",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A large-prime capture director is mapping protest risk on a civilian recompete set aside for small business. An eligible offeror believes the apparently successful concern is not small under the solicitation's size standard.",
		prompt: "Which lane handles that challenge?",
		options: [
			{
				id: "a",
				text: "A specific, timely size protest delivered to the contracting officer for referral to SBA; program-status protests likewise follow their applicable SBA rules",
				correct: true,
			},
			{
				id: "b",
				text: "An ordinary GAO evaluation protest, because GAO makes the initial size determination",
				correct: false,
			},
			{
				id: "c",
				text: "A COFC complaint filed whenever convenient, with no need to use SBA's size process",
				correct: false,
			},
			{
				id: "d",
				text: "An anonymous CPARS comment about the apparent awardee",
				correct: false,
			},
		],
		explanation:
			"FAR 19.302 sends small-business size protests to SBA under 13 C.F.R. part 121. For a negotiated acquisition, an interested-party protest generally must reach the contracting officer by close of business on the fifth business day after the special notice identifying the apparent successful offeror; the contracting officer forwards it to SBA. Socioeconomic status challenges have separate program-specific SBA procedures, so the team must identify the exact lane rather than relabel the issue as an ordinary bid protest.",
		citation: "FAR 19.302; 13 C.F.R. §§ 121.1001, 121.1004",
		sourceUrl: "https://www.acquisition.gov/far/19.302",
		tags: ["SBA", "size-protest", "status-protest", "separate-lane"],
	},
];
