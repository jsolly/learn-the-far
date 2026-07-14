import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Win & Protest shelf — chronological from apparent defects through corrective action.
 * Civilian Part 15 baseline; task-order / SBA / COFC / CPARS as bounded branches.
 * Paraphrase only; cite FAR/GAO/eCFR/statute anchors without inventing quote text.
 */
export const WIN_PROTEST_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "deadline-already-missed",
		unitId: "win-protest",
		title: "The deadline you may already have missed",
		summary: "Separate live protest grounds from forfeited solicitation defects.",
		intro:
			"Protest planning begins before award angst. Some grounds had to be raised when the solicitation defect was apparent; others run from knowledge of the basis for protest. A post-submission review that does not sort live issues from forfeited ones wastes counsel time and invents false hope.",
		tags: ["advanced", "failure-mode", "decision", "timeliness"],
		readingMinutes: 8,
		suggestedOrder: 1,
		pieces: [
			{
				id: "apparent-vs-later",
				title: "Apparent solicitation defects vs. later-known grounds",
				story:
					"Hours after proposals close, someone notices that two material evaluation instructions contradict each other. The team suggests saving the objection in case it loses.",
				is: "GAO’s timeliness rules generally require protests based on alleged solicitation improprieties that are apparent before bid opening or the time set for receipt of proposals to be filed before that deadline. Other protest grounds ordinarily must be filed within ten days after the protester knew or should have known the basis for protest — subject to the separate required-debriefing rules that can extend that clock.",
				isNot:
					"Submission is not a reservation of every possible objection. Internal investigation, management review, or continued agency appeal does not automatically stop GAO’s clock. Blue & Gold Fleet and related waiver doctrine reinforce that competitors cannot sit on patent solicitation errors and raise them only after award.",
				fits: "Open the post-award playbook only after a dated inventory of which objections are still live.",
				judgment:
					"If the defect was patent on the face of the RFP, assume the protest ground may already be gone — then have counsel confirm before leadership builds a theory on it.",
				checklist: [
					"List each potential ground and the date it became (or should have become) apparent",
					"Flag patent solicitation defects separately from evaluation/award grounds",
					"Do not treat internal review as a tolling agreement",
				],
				citation: "4 CFR 21.2(a); Blue & Gold Fleet, L.P. v. United States, 492 F.3d 1308",
				sourceUrl: "https://www.ecfr.gov/current/title-4/section-21.2",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "4 CFR 21.2 — Time for filing",
				url: "https://www.ecfr.gov/current/title-4/section-21.2",
				kind: "controlling-authority",
			},
			{
				label: "Blue & Gold Fleet, L.P. v. United States (CAFC)",
				url: "https://www.cafc.uscourts.gov/6-26-2007-2006-5064-blue-gold-fleet-lp-v-us-06-5064/",
				kind: "decision",
			},
		],
	}),

	chapter({
		id: "notice-three-day-window",
		unitId: "win-protest",
		title: "The notice opens a three-day window",
		summary: "Postaward notice is not a debrief — request the debrief in writing within three days.",
		intro:
			"For newcomers landing after award, start here. The unsuccessful-offeror notice starts a short operational sprint: on covered negotiated procurements, a required postaward debriefing generally must be requested in writing within three days after you receive that notice.",
		tags: ["start-here", "definition", "decision", "debriefing"],
		readingMinutes: 5,
		suggestedOrder: 2,
		startHere: true,
		pieces: [
			{
				id: "notice-vs-debrief",
				title: "Notice first — then the three-day request",
				story:
					"The award email names the winner but says almost nothing about why the proposal lost.",
				is: "FAR 15.503(b) generally requires written postaward notice within three days after award to each offeror whose proposal was in the competitive range but was not selected — identifying the competition and award and giving general reasons for nonselection while protecting confidential business information. Receipt of that notice starts the clock for a required postaward debriefing under FAR 15.506(a): the agency must receive the written debriefing request within three days after the offeror receives the notice.",
				isNot:
					"The notice is not the debriefing. It does not entitle the loser to the awardee’s proposal, cost buildup, profit, or indirect rates. Not every federal acquisition method carries a required FAR Part 15 debriefing, and an oral request or a request filed only inside GAO’s ordinary ten-day period does not preserve the FAR 15.506 entitlement.",
				fits: "Immediately after award, contracts should confirm notice receipt date, send the written debrief request, and calendar protest and stay analyses in parallel.",
				checklist: [
					"Record the date/time the FAR 15.503(b) notice was received",
					"Send a written debriefing request within three days",
					"Confirm whether this acquisition actually uses FAR 15.506 debriefing rules",
				],
				citation: "FAR 15.503(b); FAR 15.506(a)",
				sourceUrl: "https://www.acquisition.gov/far/15.503",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.503 — Notifications to unsuccessful offerors",
				url: "https://www.acquisition.gov/far/15.503",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.506 — Postaward debriefing of offerors",
				url: "https://www.acquisition.gov/far/15.506",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "debrief-signal-not-discovery",
		unitId: "win-protest",
		title: "Debrief for signal, not discovery",
		summary: "Bounded evaluation explanation — do not import DoD enhanced-debrief rules.",
		intro:
			"A debriefing supplies leads and dates; it is not courtroom discovery. Ask for what FAR 15.506 requires, protect your own clocks, and on civilian procurements do not assume DoD enhanced-debriefing follow-up rules apply.",
		tags: ["field-guide", "contrast", "debriefing"],
		readingMinutes: 7,
		suggestedOrder: 3,
		pieces: [
			{
				id: "bounded-content",
				title: "Seek the required content — expect the limits",
				story:
					"The team arrives with fifty questions and expects a courtroom-style comparison against the winning proposal.",
				is: "FAR 15.506(d) calls for significant weaknesses or deficiencies in the debriefed offeror’s proposal, the overall evaluated cost or price and technical rating of the successful offeror and the debriefed offeror, the overall ranking of offerors when one was developed, a summary of the rationale for award, and reasonable responses to relevant questions about whether source-selection procedures in the solicitation were followed. Use that menu to sharpen a protest theory — not to litigate the room.",
				isNot:
					"FAR 15.506(e) bars point-by-point comparisons with other offerors’ proposals and disclosure of protected trade secrets, confidential commercial information, cost breakdowns, profit, indirect rates, and names of individuals providing reference information. A debriefing is not a negotiation to reopen the competition.",
				fits: "Between notice and protest triage: harvest signal, confirm the debriefing completion date, and keep counsel’s clocks independent of hallway optimism.",
				citation: "FAR 15.506(d)–(e)",
				sourceUrl: "https://www.acquisition.gov/far/15.506",
				sourceKind: "controlling-authority",
			},
			{
				id: "civilian-follow-up",
				title: "Civilian follow-ups are not automatic clock extenders",
				is: "Ask precise process questions and document what the agency says about when the debriefing is complete. Calculate each protest and stay deadline under the rules actually applicable to that procurement.",
				isNot:
					"On a civilian FAR Part 15 procurement, ordinary written follow-up questions should not be assumed to import the DoD enhanced-debriefing regime or to extend filing or stay clocks by themselves.",
				fits: "Capture owns the question list; counsel owns the calendar — do not merge the two jobs.",
				citation: "FAR 15.506",
				sourceUrl: "https://www.acquisition.gov/far/15.506",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.506 — Postaward debriefing of offerors",
				url: "https://www.acquisition.gov/far/15.506",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "protest-theory",
		unitId: "win-protest",
		title: "Turn disappointment into a protest theory",
		summary: "Governing rule + record error + competitive prejudice.",
		intro:
			"Anger is not a ground. A credible protest connects a solicitation or procurement rule, contemporaneous record evidence of agency error, and competitive prejudice — a plausible path to a different competitive result.",
		tags: ["decision", "field-guide", "prejudice", "evaluation"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "rule-record-prejudice",
				title: "Three parts of a theory",
				story:
					"The debrief contains an odd evaluator comment. Leadership is angry, but nobody can yet explain which rule was violated or whether correction could change the award.",
				is: "Build the theory as: (1) the governing solicitation provision or procurement rule, (2) record evidence the agency departed from it — for example an unstated evaluation criterion, unequal discussions, or a misevaluation that overlooked proposal content — and (3) competitive prejudice showing a reasonable possibility that, but for the error, the protester would have had a substantial chance of award. Agency-level protests under FAR 33.103 similarly expect a detailed statement of legal and factual grounds, including copies of relevant documents.",
				isNot:
					"Disagreement with agency judgment, a list of every unfavorable comment, or proof of a harmless clerical mistake is not a theory. “The agency was wrong” is incomplete without prejudice. Filing to punish a loss is not a business case.",
				fits: "After the debrief and before forum selection — a rapid counsel-led merits and business-case review.",
				checklist: [
					"Name the rule or solicitation text allegedly violated",
					"Point to the contemporaneous evaluation record, not post-hoc speculation",
					"State how correction could change the competitive outcome",
				],
				citation: "FAR 33.103(b), (d)(2); FAR 15.305(a); FAR 15.306(d)–(e)",
				sourceUrl: "https://www.acquisition.gov/far/33.103",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 33.103 — Protests to the agency",
				url: "https://www.acquisition.gov/far/33.103",
				kind: "controlling-authority",
			},
			{
				label: "DCS Corp., B-423482.2 (unstated criteria pattern)",
				url: "https://www.gao.gov/products/b-423482.2",
				kind: "decision",
			},
			{
				label: "Ohio KePRO, B-417836.4 (discussions)",
				url: "https://www.gao.gov/products/b-417836.4%2Cb-417836.5",
				kind: "decision",
			},
			{
				label: "Leidos, B-421252.4 (misevaluation / prejudice)",
				url: "https://www.gao.gov/products/b-421252.4",
				kind: "decision",
			},
		],
	}),

	chapter({
		id: "choose-right-lane",
		unitId: "win-protest",
		title: "Choose the right lane",
		summary: "Agency, GAO, COFC, SBA, and task-order jurisdiction are not interchangeable.",
		intro:
			"Forum selection is strategy. Agency protests, GAO, the Court of Federal Claims, SBA size/status procedures, and task-order protest limits each solve different problems — and choosing the wrong lane can waive the right one.",
		tags: ["contrast", "decision", "advanced", "forum-selection"],
		readingMinutes: 9,
		suggestedOrder: 5,
		pieces: [
			{
				id: "agency-gao-cofc",
				title: "Agency, GAO, and COFC",
				story:
					"One executive wants an agency protest, another wants GAO, and a third says every dispute can simply go to court.",
				is: "FAR 33.103 provides a relatively informal agency-level protest process decided by the agency. GAO offers independent review on a statutory decision schedule and, when separate stay conditions are met, possible CICA performance-stay consequences. The Court of Federal Claims has bid-protest jurisdiction under 28 U.S.C. § 1491(b), but stopping performance requires court relief or Government agreement rather than an automatic CICA stay.",
				isNot:
					"The forums are not interchangeable. COFC is not a universal cure for missed or waived GAO grounds. Finishing every agency appeal does not automatically preserve a later GAO filing if GAO’s own timeliness rules were already blown.",
				fits: "Pick the lane after you have a supportable theory and a clear business objective — speed, stay potential, cost, or injunctive relief.",
				citation: "FAR 33.103–33.105",
				sourceUrl: "https://www.acquisition.gov/far/33.104",
				sourceKind: "controlling-authority",
			},
			{
				id: "special-lanes",
				title: "Task orders and SBA are special lanes",
				is: "Qualifying protests of civilian task or delivery orders under multiple-award IDIQs may be limited to GAO under FAR 16.505(a)(10) and 41 U.S.C. § 4106(f) — subject to the statutory dollar and scope thresholds. Size and socioeconomic-status challenges generally belong in SBA’s procedures under FAR 19.302 and 13 CFR Part 121, not in an ordinary evaluation protest.",
				isNot:
					"SBA does not decide ordinary evaluation protests. Filing a size protest at GAO — or an evaluation protest at SBA — is the wrong window.",
				fits: "Before drafting, confirm jurisdiction: evaluation error, size/status, or task-order lane.",
				citation: "FAR 16.505(a)(10); FAR 19.302; 13 CFR 121.1001, 121.1004",
				sourceUrl: "https://www.acquisition.gov/far/16.505",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 33.104 — Protests to GAO",
				url: "https://www.acquisition.gov/far/33.104",
				kind: "controlling-authority",
			},
			{
				label: "FAR 16.505 — Ordering (task-order protest limits)",
				url: "https://www.acquisition.gov/far/16.505",
				kind: "controlling-authority",
			},
			{
				label: "FAR 19.302 — Protesting a small business representation",
				url: "https://www.acquisition.gov/far/19.302",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "timely-may-miss-stay",
		unitId: "win-protest",
		title: "A timely protest may still miss the stay",
		summary: "Merits timeliness and the CICA stay are separate clocks.",
		intro:
			"Filing inside the merits window is necessary and not sufficient for a performance stay. CICA stay timing turns on when the agency receives notice from GAO — often a tighter operational sprint than the merits deadline suggests.",
		tags: ["failure-mode", "advanced", "cica-stay", "timeliness"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "two-clocks",
				title: "Merits clock ≠ stay clock",
				story:
					"Counsel believes the merits deadline is ten days away, so leadership assumes there is no difference between filing on day four and day nine.",
				is: "GAO merits timeliness under 4 CFR 21.2 and the CICA performance-stay trigger under 31 U.S.C. § 3553(d) and FAR 33.104(c) are separate calculations. A stay generally depends on the agency’s receipt of notice from GAO within the statutory window measured from award or from the offered date of a required debriefing — not merely from when the protester presses submit. Build a dated chronology covering award, notice, debriefing, knowledge, filing, and expected GAO notice to the agency.",
				isNot:
					"A timely protest does not invariably trigger a stay. An agency protest does not automatically preserve the later GAO stay window. Informal customer discussions do not toll either clock.",
				fits: "The final decision gate immediately before filing: merits recommendation plus stay probability on one one-page timeline.",
				judgment:
					"If the business case depends on a stay, file early enough that GAO notice can reach the agency inside the statutory window — do not spend the margin on executive alignment meetings.",
				checklist: [
					"Plot merits deadline and stay-trigger deadline on the same calendar",
					"Confirm whether a required debriefing affects either clock",
					"Plan filing time for GAO processing and agency notice receipt",
				],
				citation: "31 U.S.C. § 3553(d); FAR 33.104(c); 4 CFR 21.2(a)(2)–(3)",
				sourceUrl: "https://www.acquisition.gov/far/33.104",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 33.104(c) — Protests after award (stay)",
				url: "https://www.acquisition.gov/far/33.104",
				kind: "controlling-authority",
			},
			{
				label: "4 CFR 21.2 — Time for filing",
				url: "https://www.ecfr.gov/current/title-4/section-21.2",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "defend-win",
		unitId: "win-protest",
		title: "Defend the win without rewriting the record",
		summary: "Intervene, preserve records, and follow the CO on performance and stop-work.",
		intro:
			"When you are the awardee, the job shifts: protect the award and proprietary interests, preserve the contemporaneous record, and execute continue / pause / restart paths only as the contracting officer directs — without inventing post-hoc justifications.",
		tags: ["field-guide", "advanced", "intervention", "stop-work"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "intervene-preserve",
				title: "Intervene and preserve — do not rewrite",
				story:
					"The winner receives protest notice while transition is underway and protected evaluation material will be central to the case.",
				is: "Assess intervention promptly under GAO’s rules (4 CFR Part 21), engage qualified protest counsel, preserve proposal and evaluation-related records you control, and centralize customer communications. Intervention protects proprietary and competitive interests; it does not authorize company personnel to browse protected material freely or to lobby evaluators into a new rationale.",
				isNot:
					"Winning does not authorize creating post-hoc justifications, controlling the incumbent’s workforce, or treating protest response as a rewrite of the source-selection record.",
				fits: "Stand up an awardee war room with counsel ownership of filings and contracts ownership of performance direction.",
				citation: "4 CFR 21.0, 21.3, 21.4; FAR 33.104(a)",
				sourceUrl: "https://www.ecfr.gov/current/title-4/part-21",
				sourceKind: "controlling-authority",
			},
			{
				id: "stop-work-continuity",
				title: "Performance follows the contracting officer",
				is: "If the contracting officer issues a written stop-work order under FAR 52.233-3, comply. Transition planning should maintain executable continue, pause, and restart paths, mitigate and segregate affected costs, and use continuity clauses such as FAR 52.237-3 when they apply — without assuming every protest-related cost will be reimbursed.",
				isNot:
					"Keeping the team “fully productive on contract tasks” after a stop-work order to sort allowability later is not compliance. Ignoring the stay or stop-work while hoping for a quick dismissal is not risk management.",
				fits: "Delivery, finance, and contracts share one performance-status board keyed to CO direction.",
				checklist: [
					"Decide intervention with counsel within the GAO window",
					"Freeze document retention and customer-communication lanes",
					"Build continue / pause / restart plans keyed to CO orders",
				],
				citation: "FAR 52.233-3; FAR 52.237-3",
				sourceUrl: "https://www.acquisition.gov/far/52.233-3",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "4 CFR Part 21 — GAO bid protest regulations",
				url: "https://www.ecfr.gov/current/title-4/part-21",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.233-3 — Protest After Award",
				url: "https://www.acquisition.gov/far/52.233-3",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.237-3 — Continuity of Services",
				url: "https://www.acquisition.gov/far/52.237-3",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "corrective-action-event",
		unitId: "win-protest",
		title: "Corrective action is another acquisition event",
		summary: "Reevaluation and reaward reset clocks; CPARS is not a protest substitute.",
		intro:
			"Corrective action can end the current case without a merits ruling — and still leave both sides with a new competition. Treat reevaluation and reaward as fresh acquisition events with new records and new clocks, and keep CPARS in its own lane.",
		tags: ["advanced", "decision", "corrective-action", "cpars"],
		readingMinutes: 8,
		suggestedOrder: 8,
		pieces: [
			{
				id: "scope-controls-next",
				title: "Scope of corrective action controls what happens next",
				story:
					"The agency announces reevaluation, GAO dismisses the protest as academic, and both competitors declare victory.",
				is: "Agencies may take corrective action under FAR 33.102(b). The actual scope — amend, reevaluate, discuss, re-solicit, reaward — controls remaining rights. A reaward is a new decision with a new record and potentially new debriefing, merits, and stay clocks. Preserve fresh rights against the corrective action actually taken; do not assume the original filing covers every later error.",
				isNot:
					"Corrective action is not an award to the protester. Dismissal as academic is not a win on the merits. The original protest does not automatically preserve every challenge to a later reaward.",
				fits: "Return to the lifecycle: decode the corrective-action notice like a new solicitation event, then re-run notice/debrief/timeliness discipline.",
				citation: "FAR 33.102(b); 4 CFR 21.2",
				sourceUrl: "https://www.acquisition.gov/far/33.102",
				sourceKind: "controlling-authority",
			},
			{
				id: "cpars-lane",
				title: "CPARS shapes the next fight — it is not this protest",
				is: "Performance evaluations under FAR 42.1503 can shape the next competition. Handle CPARS factually, meet rebuttal deadlines, and keep the record accurate. That work sits beside protest strategy; it does not replace a timely protest of the award decision.",
				isNot:
					"A CPARS rebuttal is not a substitute for a timely bid protest and should not become an accusation-driven protest brief filed in the wrong system.",
				fits: "Close the chapter by reconnecting award → performance record → recompete — the same lifecycle the Basics shelf opens.",
				checklist: [
					"Read the corrective-action notice for actual scope and deadlines",
					"Recalculate debrief / merits / stay clocks from the new decision",
					"Keep CPARS rebuttals factual and on their own calendar",
				],
				citation: "FAR 42.1503(d)",
				sourceUrl: "https://www.acquisition.gov/far/42.1503",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 33.102 — General (corrective action)",
				url: "https://www.acquisition.gov/far/33.102",
				kind: "controlling-authority",
			},
			{
				label: "JSToogood, B-423600.3",
				url: "https://www.gao.gov/products/b-423600.3",
				kind: "decision",
			},
			{
				label: "Wright Brothers Aero, B-423326.2",
				url: "https://www.gao.gov/products/b-423326.2",
				kind: "decision",
			},
			{
				label: "FAR 42.1503 — Procedures (CPARS)",
				url: "https://www.acquisition.gov/far/42.1503",
				kind: "controlling-authority",
			},
		],
	}),
];
