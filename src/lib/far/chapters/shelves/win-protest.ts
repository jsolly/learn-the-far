import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Win & Protest shelf — chronological from apparent defects through corrective action.
 * Civilian Part 15 baseline; task-order / SBA / COFC / CPARS as bounded branches.
 * Reading shape: each piece is a definition card (term title + expanded glossary
 * teach + optional Watch for + citation/quote).
 */
export const WIN_PROTEST_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "deadline-already-missed",
		unitId: "win-protest",
		title: "Apparent solicitation improprieties and protest timeliness",
		summary:
			"Defines solicitation defects that must be protested before offers are due — waiting until after award usually forfeits the ground.",
		intro:
			"Timeliness rules that determine which objections remain live after award — patent solicitation defects versus later-known grounds.",
		tags: ["advanced", "failure-mode", "decision", "timeliness"],
		readingMinutes: 8,
		suggestedOrder: 1,
		pieces: [
			{
				id: "apparent-vs-later",
				title: "Apparent solicitation improprieties",
				teach: "Under GAO timeliness rules (4 CFR 21.2), protests based on alleged solicitation improprieties that are apparent before bid opening or the time set for receipt of proposals generally must be filed before that deadline. Other protest grounds ordinarily must be filed within ten days after the protester knew or should have known the basis for protest — subject to separate required-debriefing rules that can extend that clock. Before building a post-award theory, inventory each potential ground with the date it became (or should have become) apparent, and flag patent solicitation defects separately from evaluation or award grounds. Internal investigation, management review, or continued agency appeal does not automatically stop GAO’s clock.",
				watchFor:
					"Don’t treat submission as a reservation of every possible objection. If a defect was patent on the face of the RFP, the protest ground may already be gone — counsel must confirm before leadership builds on it. Blue & Gold Fleet and related waiver doctrine reinforce that competitors cannot sit on patent solicitation errors and raise them only after award.",
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
		title: "Postaward notices and the three-day debriefing request",
		summary:
			"Defines the difference between award notice and debriefing, and the written three-day request that preserves protest timing.",
		intro:
			"The unsuccessful-offeror notice and the three-day window to request a required postaward debriefing under FAR Part 15.",
		tags: ["definition", "decision", "debriefing"],
		readingMinutes: 5,
		suggestedOrder: 2,
		pieces: [
			{
				id: "notice-vs-debrief",
				title: "Required postaward debriefing request",
				teach: "FAR 15.503(b) generally requires written postaward notice within three days after award to each offeror whose proposal was in the competitive range but was not selected — identifying the competition and award and giving general reasons for nonselection while protecting confidential business information. Receipt of that notice starts the clock for a required postaward debriefing under FAR 15.506(a): the agency must receive the written debriefing request within three days after the offeror receives the notice. Record the date and time the notice was received, send the written debrief request within that window, and confirm whether the acquisition actually uses FAR 15.506 debriefing rules — not every federal acquisition method carries a required Part 15 debriefing.",
				watchFor:
					"Don’t confuse the notice with the debriefing. The notice does not entitle the loser to the awardee’s proposal, cost buildup, profit, or indirect rates. An oral request or a request filed only inside GAO’s ordinary ten-day period does not preserve the FAR 15.506 entitlement.",
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
		title: "Required postaward debriefing content and completion dates",
		summary:
			"Defines what FAR 15.506(d) requires in a debriefing, why completion date matters, and what not to import from DoD-only rules.",
		intro:
			"What a civilian Part 15 debriefing must cover, what it cannot disclose, and why follow-up questions are not automatic clock extenders.",
		tags: ["field-guide", "contrast", "debriefing"],
		readingMinutes: 7,
		suggestedOrder: 3,
		pieces: [
			{
				id: "bounded-content",
				title: "Postaward debriefing content (FAR 15.506(d))",
				teach: "FAR 15.506(d) calls for significant weaknesses or deficiencies in the debriefed offeror’s proposal, the overall evaluated cost or price and technical rating of the successful offeror and the debriefed offeror, the overall ranking of offerors when one was developed, a summary of the rationale for award, and reasonable responses to relevant questions about whether source-selection procedures in the solicitation were followed. A debriefing supplies leads and dates for protest triage — not courtroom discovery or a negotiation to reopen the competition.",
				watchFor:
					"Don’t expect point-by-point comparisons with other offerors’ proposals or disclosure of protected trade secrets, confidential commercial information, cost breakdowns, profit, indirect rates, or names of individuals providing reference information — FAR 15.506(e) bars those.",
				citation: "FAR 15.506(d)–(e)",
				sourceUrl: "https://www.acquisition.gov/far/15.506",
				sourceKind: "controlling-authority",
			},
			{
				id: "civilian-follow-up",
				title: "Debriefing completion date",
				teach: "On civilian FAR Part 15 procurements, ordinary written follow-up questions do not import the DoD enhanced-debriefing regime or extend filing or stay clocks by themselves. Ask precise process questions, document what the agency says about when the debriefing is complete, and calculate each protest and stay deadline under the rules actually applicable to that procurement. Capture owns the question list; counsel owns the calendar.",
				watchFor:
					"Don’t assume follow-up correspondence tolls GAO’s merits clock or the CICA stay window on a civilian buy.",
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
		title: "Protest elements: rule, record error, and competitive prejudice",
		summary:
			"Defines the three elements of a viable protest theory — disappointment alone is not enough.",
		intro:
			"The three-part structure of a credible bid protest — rule, record evidence, and competitive prejudice.",
		tags: ["decision", "field-guide", "prejudice", "evaluation"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "rule-record-prejudice",
				title: "Competitive prejudice",
				teach: "A credible protest theory connects three elements: (1) the governing solicitation provision or procurement rule, (2) contemporaneous record evidence the agency departed from it — for example an unstated evaluation criterion, unequal discussions, or a misevaluation that overlooked proposal content — and (3) competitive prejudice showing a reasonable possibility that, but for the error, the protester would have had a substantial chance of award. Agency-level protests under FAR 33.103 similarly expect a detailed statement of legal and factual grounds, including copies of relevant documents. Disagreement with agency judgment alone, a list of unfavorable comments, or proof of a harmless clerical mistake is not a theory.",
				watchFor:
					"Don’t treat “the agency was wrong” as complete without prejudice. Filing to punish a loss is not a business case — name the rule allegedly violated, point to the evaluation record (not post-hoc speculation), and state how correction could change the competitive outcome.",
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
		title: "Agency, GAO, COFC, SBA, and task-order protest forums",
		summary:
			"Defines which protest forum has jurisdiction and remedies for the dispute you actually have.",
		intro:
			"Forums for bid protests — agency, GAO, Court of Federal Claims, SBA size/status, and task-order limits.",
		tags: ["contrast", "decision", "advanced", "forum-selection"],
		readingMinutes: 9,
		suggestedOrder: 5,
		pieces: [
			{
				id: "agency-gao-cofc",
				title: "Agency protest, GAO, and COFC",
				teach: "FAR 33.103 provides a relatively informal agency-level protest process decided by the agency. GAO offers independent review on a statutory decision schedule and, when separate stay conditions are met, possible CICA performance-stay consequences. The Court of Federal Claims has bid-protest jurisdiction under 28 U.S.C. § 1491(b), but stopping performance requires court relief or Government agreement rather than an automatic CICA stay. Each forum solves different problems — speed, stay potential, cost, or injunctive relief — and they are not interchangeable.",
				watchFor:
					"Don’t treat COFC as a universal cure for missed or waived GAO grounds. Finishing every agency appeal does not automatically preserve a later GAO filing if GAO’s own timeliness rules were already blown.",
				citation: "FAR 33.103–33.105",
				sourceUrl: "https://www.acquisition.gov/far/33.104",
				sourceKind: "controlling-authority",
			},
			{
				id: "special-lanes",
				title: "Task-order and SBA protest lanes",
				teach: "Qualifying protests of civilian task or delivery orders under multiple-award IDIQs may be limited to GAO under FAR 16.505(a)(10) and 41 U.S.C. § 4106(f) — subject to statutory dollar and scope thresholds. Size and socioeconomic-status challenges generally belong in SBA’s procedures under FAR 19.302 and 13 CFR Part 121, not in an ordinary evaluation protest. Before drafting, confirm jurisdiction: evaluation error, size/status, or task-order lane.",
				watchFor:
					"Don’t send ordinary evaluation protests to SBA, or size protests to GAO as if it made the initial size determination. Filing in the wrong window wastes the right one.",
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
		title: "Merits timeliness versus the CICA performance stay",
		summary:
			"Defines the separate clocks for a timely protest on the merits and for triggering the CICA stay of performance.",
		intro:
			"Why filing inside the GAO merits window does not automatically trigger a CICA performance stay.",
		tags: ["failure-mode", "advanced", "cica-stay", "timeliness"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "two-clocks",
				title: "CICA performance stay",
				teach: "GAO merits timeliness under 4 CFR 21.2 and the CICA performance-stay trigger under 31 U.S.C. § 3553(d) and FAR 33.104(c) are separate calculations. A stay generally depends on the agency’s receipt of notice from GAO within the statutory window measured from award or from the offered date of a required debriefing — not merely from when the protester presses submit. Build a dated chronology covering award, notice, debriefing, knowledge, filing, and expected GAO notice to the agency. If the business case depends on a stay, file early enough that GAO notice can reach the agency inside the statutory window.",
				watchFor:
					"Don’t assume a timely protest invariably triggers a stay. An agency protest does not automatically preserve the later GAO stay window. Informal customer discussions do not toll either clock.",
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
		title: "GAO intervention, stop-work orders, and awardee continuity",
		summary:
			"Defines awardee defense steps: intervene, preserve the record, and follow CO direction under FAR 52.233-3 stop-work.",
		intro:
			"Terms for the awardee side — GAO intervention, record preservation, stop-work, and continuity of services.",
		tags: ["field-guide", "advanced", "intervention", "stop-work"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "intervene-preserve",
				title: "GAO intervention",
				teach: "When a protest targets your award, assess intervention promptly under GAO’s rules (4 CFR Part 21), engage qualified protest counsel, preserve proposal and evaluation-related records you control, and centralize customer communications. Intervention protects proprietary and competitive interests; it does not authorize company personnel to browse protected material freely or to lobby evaluators into a new rationale.",
				watchFor:
					"Don’t treat winning as license to create post-hoc justifications, control the incumbent’s workforce, or rewrite the source-selection record through protest response.",
				citation: "4 CFR 21.0, 21.3, 21.4; FAR 33.104(a)",
				sourceUrl: "https://www.ecfr.gov/current/title-4/part-21",
				sourceKind: "controlling-authority",
			},
			{
				id: "stop-work-continuity",
				title: "Stop-work order (FAR 52.233-3)",
				teach: "If the contracting officer issues a written stop-work order under FAR 52.233-3, comply. Transition planning should maintain executable continue, pause, and restart paths, mitigate and segregate affected costs, and use continuity clauses such as FAR 52.237-3 when they apply — without assuming every protest-related cost will be reimbursed. Performance direction comes from the contracting officer, not from protest counsel or program-office optimism.",
				watchFor:
					"Don’t keep the team fully productive on contract tasks after a stop-work order to sort allowability later. Ignoring the stay or stop-work while hoping for a quick dismissal is not risk management.",
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
		title: "Agency corrective action and CPARS versus protest",
		summary:
			"Defines how corrective action can reset evaluation and award clocks, and why CPARS rebuttals are not a protest substitute.",
		intro:
			"Corrective action as a fresh acquisition event, and why CPARS belongs in a separate lane from bid protest.",
		tags: ["advanced", "decision", "corrective-action", "cpars"],
		readingMinutes: 8,
		suggestedOrder: 8,
		pieces: [
			{
				id: "scope-controls-next",
				title: "Corrective action (FAR 33.102)",
				teach: "Agencies may take corrective action under FAR 33.102(b). The actual scope — amend, reevaluate, discuss, re-solicit, reaward — controls remaining rights. A reaward is a new decision with a new record and potentially new debriefing, merits, and stay clocks. The original protest does not automatically preserve every challenge to a later reaward; decode the corrective-action notice like a new solicitation event.",
				watchFor:
					"Don’t treat corrective action as an award to the protester, or dismissal as academic as a win on the merits.",
				citation: "FAR 33.102(b); 4 CFR 21.2",
				sourceUrl: "https://www.acquisition.gov/far/33.102",
				sourceKind: "controlling-authority",
			},
			{
				id: "cpars-lane",
				title: "CPARS versus bid protest",
				teach: "Performance evaluations under FAR 42.1503 can shape the next competition. Handle CPARS factually, meet rebuttal deadlines, and keep the record accurate. That work sits beside protest strategy; it does not replace a timely protest of the award decision.",
				watchFor:
					"Don’t treat a CPARS rebuttal as a substitute for a timely bid protest, or turn it into an accusation-driven protest brief filed in the wrong system.",
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
