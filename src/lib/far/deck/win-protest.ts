import type { QuizQuestion } from "../types";

export const WIN_PROTEST_QUESTIONS: QuizQuestion[] = [
	{
		"id": "win-protest-debrief-request-window",
		"unitId": "win-protest",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "After losing a competitive award, your team wants a required post-award debriefing so you can see how you were scored. By when must you request it to be entitled to one?",
		"options": [
			{
				"id": "a",
				"text": "In writing, within 3 days after receiving notification of contract award",
				"correct": true
			},
			{
				"id": "b",
				"text": "In writing, within 5 days after receiving notification of contract award",
				"correct": false
			},
			{
				"id": "c",
				"text": "In writing, within 10 days after receiving notification of contract award",
				"correct": false
			},
			{
				"id": "d",
				"text": "Any time before you file a GAO protest",
				"correct": false
			}
		],
		"explanation": "FAR 15.506(a) requires the written debriefing request to reach the contracting officer within 3 days after the offeror receives notification of contract award; a required, timely-requested debriefing is what unlocks the more generous protest and CICA-stay clocks. The 5- and 10-day figures are protest/stay deadlines, not the debriefing-request deadline.",
		"citation": "FAR 15.506(a)",
		"sourceUrl": "https://www.acquisition.gov/far/15.506",
		"tags": [
			"debriefing",
			"post-award",
			"far-15"
		]
	},
	{
		"id": "win-protest-preaward-solicitation-defect",
		"unitId": "win-protest",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "The RFP contains an evaluation criterion you believe is unduly restrictive and improper on its face. To keep a GAO protest of that solicitation defect timely, when must you file?",
		"options": [
			{
				"id": "a",
				"text": "Before the closing time for receipt of proposals",
				"correct": true
			},
			{
				"id": "b",
				"text": "Within 10 days after contract award",
				"correct": false
			},
			{
				"id": "c",
				"text": "Within 10 days after you learn who won",
				"correct": false
			},
			{
				"id": "d",
				"text": "Within 5 days after your post-award debriefing",
				"correct": false
			}
		],
		"explanation": "Alleged solicitation improprieties apparent on the face of the solicitation must be protested before the deadline for receipt of proposals (FAR 33.104; GAO timeliness rules at 4 CFR 21.2(a)(1)). You cannot sit on a known solicitation defect, compete, lose, and then raise it post-award — that ground is waived. The 10-day and 5-day windows apply to other-than-solicitation grounds and the stay, not to face-of-the-solicitation defects.",
		"citation": "FAR 33.104",
		"sourceUrl": "https://www.acquisition.gov/far/33.104",
		"tags": [
			"gao-protest",
			"pre-award",
			"timeliness",
			"far-33"
		]
	},
	{
		"id": "win-protest-forum-choice",
		"unitId": "win-protest",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "Two days after a post-award debriefing you're convinced the agency misapplied the stated evaluation criteria. You want an independent review, a realistic shot at halting performance, and to keep cost and time low. You're still inside the window that would trigger an automatic suspension of performance.",
		"prompt": "Which protest forum best fits these goals right now?",
		"options": [
			{
				"id": "a",
				"text": "File a protest at GAO within the stay window",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "File an agency-level protest with the contracting agency",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "File a bid-protest action at the Court of Federal Claims",
				"tier": "costly"
			},
			{
				"id": "d",
				"text": "File a complaint with the SBA and the agency Inspector General",
				"tier": "disqualifying"
			}
		],
		"explanation": "GAO is the sweet spot here: an independent forum, a statutory ~100-day decision clock, low relative cost, and — filed inside the window — the CICA automatic stay (FAR 33.104). An agency-level protest is faster and cheaper but decided by the same agency (FAR 33.103). COFC is a legitimate forum but has no automatic stay and is slower/costlier — better as a fallback if GAO deadlines lapse. SBA/IG complaints are not bid-protest forums at all and give you no protest relief.",
		"citation": "FAR 33.104",
		"sourceUrl": "https://www.acquisition.gov/far/33.104",
		"tags": [
			"protest-forum",
			"gao",
			"agency-protest",
			"cofc",
			"far-33"
		]
	},
	{
		"id": "win-protest-cica-stay-timing",
		"unitId": "win-protest",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "You lost a $40M award. You timely requested and received a required post-award debriefing, which closed today. You have a strong evaluation-error protest ground and — critically — you want to stop the awardee from performing while GAO decides. Cash and schedule pressure mean an automatic suspension of performance is worth more to you than the protest itself.",
		"prompt": "What filing action best protects your position?",
		"options": [
			{
				"id": "a",
				"text": "File the protest at GAO within 5 days after the close of the required debriefing",
				"tier": "best",
				"consequence": "Triggers the CICA automatic stay under 31 U.S.C. 3553(d) — the agency must suspend the awardee's performance pending GAO's decision, exactly the leverage you wanted."
			},
			{
				"id": "b",
				"text": "File the protest at GAO on the 9th day after the debriefing (still inside GAO's 10-day merits deadline)",
				"tier": "defensible",
				"consequence": "Protest is timely and GAO hears it on the merits, but you blew the 5-day stay window — no automatic stay, so the awardee keeps performing and any win may be hollow."
			},
			{
				"id": "c",
				"text": "Skip GAO and file suit at the Court of Federal Claims",
				"tier": "costly",
				"consequence": "COFC is a valid forum but grants no automatic stay — you'd have to separately win a preliminary injunction (higher bar, slower, costlier), so performance continues in the meantime."
			},
			{
				"id": "d",
				"text": "Wait until you receive GAO's docketing notice, about 15 days after the debriefing, then file",
				"tier": "disqualifying",
				"consequence": "Untimely — past both the 5-day stay window and GAO's 10-day merits deadline; the protest is dismissed, no stay and no review."
			}
		],
		"explanation": "To get the CICA automatic stay you must file with GAO within the later of 10 days after award or 5 days after a required, timely-requested debriefing (31 U.S.C. 3553(d); FAR 33.104). After a required debriefing, the 5-day post-debriefing clock is the operative one — miss it and you may still have a timely protest but lose the suspension of performance.",
		"citation": "FAR 33.104",
		"sourceUrl": "https://www.acquisition.gov/far/33.104",
		"tags": [
			"cica-stay",
			"gao-protest",
			"post-award",
			"far-33"
		]
	}
];
