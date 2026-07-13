import type { QuizQuestion } from "../../types";

export const WIN_PROTEST_ADVANCED: QuizQuestion[] = [
	{
		id: "win-protest-protect-the-win",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"Your large prime wins a mission-critical civilian contract. The loser files at GAO, and the agency notifies you that protected evaluation material will be central to the case. Transition work has started but no stop-work direction has arrived.",
		prompt: "What is the strongest awardee response?",
		options: [
			{
				id: "a",
				text: "Engage protest counsel, request intervention, preserve proposal and evaluation-related records, centralize customer communications, and perform only as the contracting officer directs",
				tier: "best",
			},
			{
				id: "b",
				text: "Continue authorized work while preparing a rapid pause plan and giving counsel the factual record needed to defend the evaluation",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Lobby program evaluators directly to rewrite contemporaneous notes in support of the award",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Decline to intervene and assume the agency will protect every awardee-specific argument and proprietary interest",
				tier: "costly",
			},
		],
		explanation:
			"FAR 33.104 requires agency notice to the awardee and provides for participating interested parties and protective orders. Intervention gives the winner a voice while counsel protects restricted information. The company should preserve the contemporaneous record, avoid coaching evaluators or creating post hoc support, keep communications through authorized channels, and remain ready to obey a suspension or stop-work direction.",
		citation: "FAR 33.104(a)(2), (a)(5)",
		sourceUrl: "https://www.acquisition.gov/far/33.104",
		tags: ["protect-the-win", "intervention", "records", "customer-communications"],
	},
	{
		id: "win-protest-phase-in-continuity",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"Your company has won a follow-on services contract, hired key staff, and begun phase-in. A protest may pause the award while the incumbent's contract contains FAR 52.237-3, Continuity of Services.",
		prompt: "Which transition plan best protects mission continuity and the company?",
		options: [
			{
				id: "a",
				text: "Build executable continue, pause, and restart paths; retain key staff where practical; coordinate all handoffs through the contracting officer; and track only authorized, allocable costs",
				tier: "best",
				consequence:
					"The team can comply quickly with a stay while preserving a credible transition and giving the agency options to maintain vital services.",
			},
			{
				id: "b",
				text: "Ask the contracting officer for written priorities and use reversible onboarding steps until protest posture is clear",
				tier: "defensible",
				consequence:
					"The company reduces stranded cost and customer disruption, although it still needs a fuller staffing and restart plan.",
			},
			{
				id: "c",
				text: "Direct the incumbent's employees and demand its records immediately because the new award transfers operational control",
				tier: "disqualifying",
				consequence:
					"The winner interferes without contractual authority; the incumbent's continuity obligations run through its contract and contracting officer.",
			},
			{
				id: "d",
				text: "Accelerate all hiring and noncancelable commitments before a possible stay so the agency must reimburse them",
				tier: "costly",
				consequence:
					"The company creates avoidable exposure: costs are not automatically reimbursable merely because management chose to front-load them.",
			},
		],
		explanation:
			"FAR 52.237-3 can require an incumbent to furnish phase-in training, cooperate with a successor, and provide ordered phase-in or phase-out services so vital work continues. It does not give the successor unilateral control over the incumbent. A winner facing protest risk should pair customer-directed continuity planning with reversible staffing, cost discipline, and a realistic restart sequence.",
		citation: "FAR 52.237-3",
		sourceUrl: "https://www.acquisition.gov/far/52.237-3",
		tags: ["phase-in", "continuity", "incumbent", "transition"],
	},
	{
		id: "win-protest-cpars-recompete-positioning",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"After a turbulent transition, your incumbent program receives a draft CPARS narrative that omits a documented recovery and overstates schedule impact. The recompete RFP is expected soon.",
		prompt: "What is the best positioning move?",
		options: [
			{
				id: "a",
				text: "Submit a timely, factual CPARS response with contract citations, metrics, root cause, corrective action, recovery results, and requested corrections; align the recompete past-performance narrative to that record",
				correct: true,
			},
			{
				id: "b",
				text: "Ignore CPARS because source-selection officials may not use contractor performance evaluations in future awards",
				correct: false,
			},
			{
				id: "c",
				text: "Use the response only to accuse the customer of bad faith and omit supporting performance data",
				correct: false,
			},
			{
				id: "d",
				text: "Wait until proposals are due, then privately rewrite the Government's CPARS narrative inside the recompete proposal",
				correct: false,
			},
		],
		explanation:
			"FAR 42.1503(d) affords the contractor up to 14 calendar days after notification to submit comments, rebutting statements, or additional information and provides for review above the contracting officer when the parties disagree. The evaluation, contractor response, and review comments stay together and may support future award decisions. A concise evidence-based response protects both the record and the recompete story.",
		citation: "FAR 42.1503(d)",
		sourceUrl: "https://www.acquisition.gov/far/42.1503",
		tags: ["CPARS", "recompete", "past-performance", "contractor-comments"],
	},
	{
		id: "win-protest-stop-work-termination-awareness",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"After a postaward protest, the contracting officer issues a written stop-work order under FAR 52.233-3. Your delivery lead wants to keep the team fully productive on contract tasks and sort out allowability later.",
		prompt: "What should the program do?",
		options: [
			{
				id: "a",
				text: "Comply immediately, minimize and segregate affected costs, preserve schedule and staffing evidence, and be ready for written direction to resume or for termination and settlement procedures",
				correct: true,
			},
			{
				id: "b",
				text: "Continue performance because only GAO, not the contracting officer, can direct work to stop",
				correct: false,
			},
			{
				id: "c",
				text: "Release every employee and dispose of all work product because a stop-work order automatically terminates the contract",
				correct: false,
			},
			{
				id: "d",
				text: "Charge all idle time without mitigation because every cost incurred during a protest is automatically reimbursable",
				correct: false,
			},
		],
		explanation:
			"FAR 52.233-3 requires immediate compliance with the written protest stop-work order and reasonable steps to minimize allocable costs. After the protest, the contracting officer either cancels the order or terminates the covered work. If the order is canceled, an equitable adjustment may be available when the clause's conditions and assertion timing are met; recovery is not automatic.",
		citation: "FAR 52.233-3",
		sourceUrl: "https://www.acquisition.gov/far/52.233-3",
		tags: ["stop-work", "termination", "cost-mitigation", "protest-after-award"],
	},
	{
		id: "win-protest-agency-gao-cofc-sequencing",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"Your company filed a timely agency protest. The agency takes initial adverse action, but an internal agency appeal remains available. A vice president says the team can finish every agency appeal, file at GAO whenever that ends, and use COFC if GAO calls the protest late.",
		prompt: "What guidance is most accurate?",
		options: [
			{
				id: "a",
				text: "Calculate GAO's 10-day clock from actual or constructive knowledge of initial adverse agency action, and assess COFC separately rather than treating it as a universal cure for missed or waived grounds",
				tier: "best",
			},
			{
				id: "b",
				text: "Use the remaining agency review only if counsel can preserve any parallel GAO deadline and the business accepts the forum tradeoff",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Assume every internal agency appeal tolls GAO timeliness until the agency issues its last possible decision",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Ignore timeliness and patent-defect waiver because COFC must hear every protest GAO dismisses",
				tier: "costly",
			},
		],
		explanation:
			"FAR 33.103(d)(4) warns that an agency appellate review does not extend GAO timeliness; a later GAO protest generally must be filed within 10 days after knowledge of initial adverse agency action. COFC is a distinct judicial forum under 28 U.S.C. § 1491(b), not a blanket safe harbor. Under Blue & Gold, a party that had an opportunity to object to a patent solicitation defect ordinarily waives that objection by waiting past proposal submission or the close of bidding—not merely by waiting until award.",
		citation:
			"FAR 33.103(d)(4); 4 C.F.R. § 21.2(a)(3); Blue & Gold Fleet, L.P. v. United States, 492 F.3d 1308 (Fed. Cir. 2007)",
		sourceUrl:
			"https://www.cafc.uscourts.gov/6-26-2007-2006-5064-blue-gold-fleet-lp-v-us-06-5064/",
		tags: ["agency-protest", "GAO", "COFC", "initial-adverse-action"],
	},
	{
		id: "win-protest-civilian-debrief-strategy",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"Your large prime timely requested a required debriefing on a civilian FAR Part 15 procurement. The team has heard that written follow-up questions always keep a debriefing open and extend protest clocks.",
		prompt: "What should the debrief lead do?",
		options: [
			{
				id: "a",
				text: "Prepare focused questions tied to stated factors and procedure, confirm the agency's offered debriefing date and closure, and have counsel calculate deadlines without importing DoD enhanced-debriefing rules",
				correct: true,
			},
			{
				id: "b",
				text: "Assume any question emailed within two business days automatically extends every civilian GAO and stay deadline",
				correct: false,
			},
			{
				id: "c",
				text: "Demand a point-by-point comparison and the awardee's confidential cost buildup because follow-up questions override FAR 15.506(e)",
				correct: false,
			},
			{
				id: "d",
				text: "Skip the debriefing because asking questions can never reveal a protest basis or improve future proposals",
				correct: false,
			},
		],
		explanation:
			"For this civilian procurement, FAR 15.506 governs the required content and limits. It calls for reasonable responses to relevant process questions but does not itself create the DoD enhanced-debriefing follow-up regime or state that any later email extends filing or stay clocks. The team should ask precise questions, document what the agency says about the debriefing date, and calculate each deadline under the rules actually applicable to that procurement.",
		citation: "FAR 15.506(d)-(e)",
		sourceUrl: "https://www.acquisition.gov/far/15.506",
		tags: ["civilian-agency", "debriefing", "questions", "deadline-discipline"],
	},
	{
		id: "win-protest-post-corrective-action-reaward",
		unitId: "win-protest",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"An agency takes corrective action after your company protests, terminates the original award, reevaluates, and again awards to the same competitor. The new notice and debriefing reveal a different, potentially prejudicial rationale.",
		prompt: "How should the pursuit team respond?",
		options: [
			{
				id: "a",
				text: "Treat the reaward as a new decision, request any available debriefing on time, evaluate the new record, and file any new challenge within the applicable merits and stay clocks",
				tier: "best",
				consequence:
					"The team focuses on the operative decision, preserves fresh rights, and can challenge whether the corrective action actually produced a lawful evaluation.",
			},
			{
				id: "b",
				text: "Ask focused questions about the changed rationale while counsel preserves filing deadlines and the account team maintains professional customer communications",
				tier: "defensible",
				consequence:
					"The company may sharpen the issue without sacrificing the relationship, provided informal dialogue is never mistaken for tolling.",
			},
			{
				id: "c",
				text: "Rely on the dismissed original protest because it automatically covers every later reaward ground",
				tier: "disqualifying",
				consequence:
					"The original case no longer supplies a live challenge to the new award, and fresh deadlines can expire.",
			},
			{
				id: "d",
				text: "Publicly accuse the customer of predetermining the result before reviewing the new contemporaneous record",
				tier: "costly",
				consequence:
					"The company harms the account relationship and substitutes rhetoric for the legal and prejudice analysis needed to test the reaward.",
			},
		],
		explanation:
			"Corrective action can produce a genuinely new source-selection decision and new protest bases. Under 4 C.F.R. 21.2(a), timeliness runs from the operative events and knowledge; Wright Brothers Aero dismissed a post-corrective-action reaward protest filed more than 10 days after the protester knew or should have known its basis. The company must analyze the new record and separately recalculate debriefing, GAO merits, and CICA stay dates rather than relying on the dismissed case.",
		citation:
			"FAR 33.104(c); 4 C.F.R. § 21.2(a); Wright Brothers Aero, Inc., B-423326.2",
		sourceUrl: "https://www.gao.gov/products/b-423326.2",
		tags: ["corrective-action", "reaward", "new-protest-basis", "customer-relationship"],
	},
];
