import type { QuizQuestion } from "../../types";

export const PROPOSE_CORE: QuizQuestion[] = [
	{
		id: "propose-late-is-late",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"You are the proposal manager. The civilian agency's portal closes at 2:00 p.m. local time. At 1:56, your first upload fails because the final file exceeds the stated size limit; a compliant file reaches the designated portal at 2:03. Nothing indicates Government mishandling or an applicable solicitation exception.",
		prompt: "What is the most accurate assessment and risk response?",
		options: [
			{
				id: "a",
				text: "Treat the proposal as late, preserve the transmission record, notify the contracting officer, and do not assume acceptance",
				tier: "best",
				consequence:
					"This recognizes the default late-is-late rule while preserving facts for counsel to assess against the solicitation's exact provision and any narrow exception.",
			},
			{
				id: "b",
				text: "Argue that starting the upload before 2:00 automatically makes the proposal timely",
				tier: "costly",
				consequence:
					"Timeliness ordinarily turns on receipt at the designated Government office or system, not when the offeror began transmitting.",
			},
			{
				id: "c",
				text: "Assert that three minutes is immaterial and the contracting officer must waive it",
				tier: "disqualifying",
				consequence:
					"A contracting officer generally lacks discretion to waive a late proposal merely because the delay was short; accepting it can compromise equal treatment.",
			},
			{
				id: "d",
				text: "Backdate the upload confirmation and ask the portal administrator to correct the timestamp",
				tier: "disqualifying",
				consequence:
					"Falsifying submission evidence creates serious integrity exposure and does not make the proposal timely.",
			},
		],
		explanation:
			"FAR 52.215-1(c)(3), when included, generally makes an offeror responsible for timely receipt and bars late proposals except under narrow stated exceptions. FAR 15.208 directs handling of late submissions. Portal trouble, file-size mistakes, and last-minute transmission usually remain the offeror's risk. The right operational control is an early, validated submission—not reliance on post-deadline discretion.",
		citation: "FAR 15.208; FAR 52.215-1(c)(3)",
		sourceUrl: "https://www.acquisition.gov/far/52.215-1",
		tags: ["late-is-late", "submission", "portal", "proposal-management"],
	},
	{
		id: "propose-competitive-range",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"You are the capture lead. The RFP anticipates discussions. After evaluation, the contracting officer says only the most highly rated proposals will enter the competitive range; your proposal is excluded.",
		prompt: "What does competitive-range exclusion generally mean for the pursuit?",
		options: [
			{
				id: "a",
				text: "The agency generally will not conduct discussions with you, and it must provide the required exclusion notice",
				correct: true,
			},
			{
				id: "b",
				text: "You remain entitled to the same discussion questions as every offeror that submitted",
				correct: false,
			},
			{
				id: "c",
				text: "The exclusion is automatically improper unless the range includes at least three offerors",
				correct: false,
			},
			{
				id: "d",
				text: "The agency has made an award and must immediately provide a post-award debriefing",
				correct: false,
			},
		],
		explanation:
			"The contracting officer establishes a competitive range of the most highly rated proposals, considering all stated evaluation factors, before competitive discussions. The range can be reduced further for efficiency if the solicitation gave notice. An excluded offeror receives notice under FAR 15.503(a) and may request a preaward debriefing under FAR 15.505; exclusion is not itself an award.",
		citation: "FAR 15.306(c); FAR 15.503(a)",
		sourceUrl: "https://www.acquisition.gov/far/15.306",
		tags: ["competitive-range", "exclusion", "discussions", "capture"],
	},
	{
		id: "propose-meaningful-discussions-fpr",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"You are the solution lead inside the competitive range. The agency opens discussions and sends evaluation notices (ENs) identifying a material architecture failure and a staffing risk. It invites a final proposal revision (FPR) after responses.",
		prompt: "How should the team use this exchange?",
		options: [
			{
				id: "a",
				text: "Resolve each identified deficiency and significant weakness in the proposal itself, check for related impacts, and submit a complete timely FPR",
				tier: "best",
				consequence:
					"The agency evaluates the revised proposal; a traceable cure addresses the discussion notice without assuming the evaluator will infer changes from an EN response alone.",
			},
			{
				id: "b",
				text: "Answer only in a cover email and leave the conflicting technical and staffing volumes unchanged",
				tier: "costly",
				consequence:
					"Unless the instructions make the response part of the revised proposal, evaluators may reasonably rely on the unchanged proposal and retain the findings.",
			},
			{
				id: "c",
				text: "Use the FPR to replace the solution without checking price, staffing, transition, or cross-volume consistency",
				tier: "costly",
				consequence:
					"A cure that creates new contradictions or unsupported cost and staffing assumptions can generate new weaknesses even after the original issue is fixed.",
			},
			{
				id: "d",
				text: "Ignore the ENs because meaningful discussions require the agency to draft the exact cure for you",
				tier: "disqualifying",
				consequence:
					"Discussions must lead an offeror into material problem areas, but the agency need not spoon-feed a solution or identify every ordinary weakness.",
			},
		],
		explanation:
			"When discussions occur, the contracting officer must, at minimum, identify deficiencies, significant weaknesses, and qualifying adverse past-performance information not previously addressed. Discussions must be meaningful, not exhaustive. At their conclusion, each remaining offeror receives an opportunity for a final proposal revision, and the contracting officer sets a common cutoff date.",
		citation: "FAR 15.306(d)(3), (e); FAR 15.307(b)",
		sourceUrl: "https://www.acquisition.gov/far/15.306",
		tags: ["evaluation-notice", "meaningful-discussions", "fpr", "solution"],
	},
	{
		id: "propose-reasonableness-versus-realism",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"You are the pricing lead on a civilian cost-reimbursement procurement. An executive says price reasonableness and cost realism are two names for the same test and both ask whether your proposed amount is too high.",
		prompt: "Which distinction should govern your pricing review?",
		options: [
			{
				id: "a",
				text: "Reasonableness asks whether the price is too high; cost realism asks whether proposed costs are realistic for the work and may support a probable-cost adjustment",
				correct: true,
			},
			{
				id: "b",
				text: "Reasonableness asks whether the price is too low; realism asks only whether profit is excessive",
				correct: false,
			},
			{
				id: "c",
				text: "Both tests apply only to sealed bids and never to negotiated procurements",
				correct: false,
			},
			{
				id: "d",
				text: "Cost realism lets the agency rewrite an offeror's fixed price for award in every fixed-price competition",
				correct: false,
			},
		],
		explanation:
			"Price analysis supports a determination that the final agreed price is fair and reasonable—principally guarding against paying too much. Cost realism independently tests whether estimated costs are realistic, reflect a clear understanding, and match the offeror's approach; for cost-reimbursement work, evaluated probable cost is used for source selection. Fixed-price realism is available only when the solicitation provides for it and does not convert the offered fixed price into a Government-adjusted award price.",
		citation: "FAR 15.404-1(a), (b), (d)",
		sourceUrl: "https://www.acquisition.gov/far/15.404-1",
		tags: ["price-reasonableness", "cost-realism", "probable-cost", "pricing"],
	},
	{
		id: "propose-unbalanced-pricing",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the contracts lead reviewing a five-year fixed-price schedule. To improve early cash flow, the team materially overprices transition CLINs and underprices later option-year CLINs. Total evaluated price remains competitive, but workload timing is uncertain.",
		prompt: "What advice best addresses the unbalanced-pricing risk?",
		options: [
			{
				id: "a",
				text: "Rebalance line-item prices to their reasonable cost allocation and document legitimate differences by period",
				tier: "best",
			},
			{
				id: "b",
				text: "Retain modest period differences only where supported by actual cost, risk, escalation, or learning assumptions",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Keep the front-loaded structure because only total evaluated price can ever be examined",
				tier: "costly",
			},
			{
				id: "d",
				text: "Move nearly all profit into the first invoice so the Government bears the risk of not exercising options",
				tier: "disqualifying",
			},
		],
		explanation:
			"Unbalanced pricing exists when one or more line-item prices are significantly over or understated, as indicated by cost or price analysis, despite an acceptable total evaluated price. It does not require a paired pattern of overstated and understated items. The contracting officer must analyze the risk of paying unreasonably high prices and may reject an offer if the imbalance poses an unacceptable risk. Differences supported by how costs are actually incurred are not automatically improper.",
		citation: "FAR 15.404-1(g)",
		sourceUrl: "https://www.acquisition.gov/far/15.404-1",
		tags: ["unbalanced-pricing", "front-loading", "clins", "contracts"],
	},
	{
		id: "propose-professional-compensation",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"You are the staffing lead. FAR 52.222-46 is in a civilian professional-services RFP. Your labor rates assume salaries 18% below current incumbent compensation, but your technical volume promises near-total incumbent capture and very low attrition.",
		prompt: "How should you reconcile staffing and price before submission?",
		options: [
			{
				id: "a",
				text: "Build a compensation plan covering salaries and fringe benefits, test it against recruiting and retention claims, and align the proposal volumes",
				tier: "best",
				consequence:
					"A coherent, supportable plan lets the agency evaluate whether compensation is realistic and whether the firm understands the professional workforce needed.",
			},
			{
				id: "b",
				text: "Explain a documented lower-cost talent model, with evidence that it can still recruit and retain the promised skill mix",
				tier: "defensible",
				consequence:
					"Below-incumbent compensation is not automatically unacceptable, but the proposal needs credible support and must remain consistent with the technical approach.",
			},
			{
				id: "c",
				text: "Omit fringe benefits because the clause evaluates salary only",
				tier: "costly",
				consequence:
					"The provision expressly addresses total compensation, including salaries and fringe benefits; omission undermines the required evaluation.",
			},
			{
				id: "d",
				text: "Keep the low rates and promise incumbent retention, assuming the Service Contract Labor Standards wage determination alone proves adequacy",
				tier: "disqualifying",
				consequence:
					"Professional compensation analysis is distinct from minimum wage compliance; internally inconsistent promises can support an adverse evaluation.",
			},
		],
		explanation:
			"FAR 52.222-46 requires evaluation of professional compensation plans for covered service procurements. The agency assesses salaries and fringe benefits for realism and their impact on recruiting, retention, continuity, and service quality. Compensation below incumbent levels may be evaluated adversely, but the provision does not create a categorical ban; the facts and the solicitation's evaluation scheme matter.",
		citation: "FAR 52.222-46",
		sourceUrl: "https://www.acquisition.gov/far/52.222-46",
		tags: ["professional-compensation", "staffing", "retention", "52.222-46"],
	},
	{
		id: "propose-past-performance-sources",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the proposal manager for a newly formed business unit with no directly relevant prime contracts. The RFP says the agency may evaluate relevant past performance of the offeror, major subcontractors, predecessor companies, and key personnel. A strong teammate will perform 45% of the work.",
		prompt: "What is the best past-performance strategy?",
		options: [
			{
				id: "a",
				text: "Submit the strongest relevant permitted examples and clearly connect each entity's prior role to its proposed share of the work",
				tier: "best",
			},
			{
				id: "b",
				text: "Use the teammate's relevant record but accurately describe scope, role, recency, and which proposed resources carry that experience",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Present the teammate's contracts as the prime offeror's own contracts to avoid a neutral rating",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Submit only unrelated prime work because agencies must ignore subcontractor and key-personnel past performance",
				tier: "costly",
			},
		],
		explanation:
			"The agency evaluates past performance under the solicitation's stated rules and may consider relevant information from sources beyond the references submitted. FAR 15.305(a)(2)(iii) permits predecessor, key-personnel, and major-subcontractor information when relevant. If the offeror has no relevant record, it may not be rated favorably or unfavorably; that neutral treatment does not require the agency to ignore permitted teammate evidence or credit experience disconnected from proposed performance.",
		citation: "FAR 15.305(a)(2)(ii)-(iv)",
		sourceUrl: "https://www.acquisition.gov/far/15.305",
		tags: ["past-performance", "neutral-rating", "teammate", "predecessor"],
	},
	{
		id: "propose-key-personnel-commitment",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"You are the capture lead. The RFP evaluates named key personnel but does not require letters of commitment. A recruiter identifies a highly rated incumbent employee who has not agreed to join; the draft says the person is committed and available on day one.",
		prompt: "What is the soundest course under GAO's material-misrepresentation principles?",
		options: [
			{
				id: "a",
				text: "Do not claim commitment without a reasonable basis; obtain and accurately document consent or propose someone you reasonably expect to furnish",
				correct: true,
			},
			{
				id: "b",
				text: "Name the person and state a signed offer exists because letters are not expressly required by the RFP",
				correct: false,
			},
			{
				id: "c",
				text: "Use any name freely because post-award substitution can never affect a source-selection evaluation",
				correct: false,
			},
			{
				id: "d",
				text: "Assume every later personnel change is automatically a prohibited bait-and-switch",
				correct: false,
			},
		],
		explanation:
			"GAO does not treat every post-award substitution as bait-and-switch; actual performance is generally contract administration. The protest concern arises when an offeror knowingly or negligently represents reliance on specific personnel it lacks a reasonable basis to expect to furnish, the agency relies on that representation, and the reliance materially affects evaluation. Avoid unsupported claims and follow any solicitation-specific commitment requirements.",
		citation: "Knight Point Systems, LLC, B-416602, B-416602.2 (Oct. 26, 2018)",
		sourceUrl: "https://www.gao.gov/products/b-416602%2Cb-416602.2",
		tags: ["key-personnel", "commitment", "bait-and-switch", "misrepresentation"],
	},
	{
		id: "propose-amendment-acknowledgment",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"You are the pricing lead. The agency posts Q&A through Amendment 0004, changes labor quantities, extends the due date, and requires acknowledgment. Your price model still uses the original quantities.",
		prompt: "What should happen before submission?",
		options: [
			{
				id: "a",
				text: "Incorporate the amended requirements, update all affected volumes and price, and acknowledge the amendment as instructed",
				correct: true,
			},
			{
				id: "b",
				text: "Acknowledge the amendment but retain the old quantities because Q&A can never change an RFP",
				correct: false,
			},
			{
				id: "c",
				text: "Use the old model and explain after award that the amendment was posted too close to the deadline",
				correct: false,
			},
			{
				id: "d",
				text: "Answer only the Q&A questions relevant to price; formal acknowledgment is unnecessary when requested",
				correct: false,
			},
		],
		explanation:
			"After issuance, changes to requirements or terms are made by written amendment, and amendments are provided to all prospective offerors. Material Q&A changes should be embodied in an amendment. Offerors must track the operative solicitation, acknowledge amendments as instructed, and flow changes through technical, staffing, contracts, and price volumes; failure to accept a material amendment can make a proposal unacceptable.",
		citation: "FAR 15.206(a)-(d); FAR 52.215-1(b)",
		sourceUrl: "https://www.acquisition.gov/far/15.206",
		tags: ["amendments", "q-and-a", "acknowledgment", "pricing"],
	},
	{
		id: "propose-page-limit-risk",
		unitId: "propose",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the solution lead. Section L caps the technical volume at 80 pages and states excess pages will not be read. Your draft is 86 pages; the only proof for two mandatory capabilities appears on pages 83-85.",
		prompt: "How should the team cure the page-limit problem before submission?",
		options: [
			{
				id: "a",
				text: "Edit to 80 compliant pages and place proof for every evaluated requirement within the pages the agency will read",
				tier: "best",
			},
			{
				id: "b",
				text: "Use permitted appendices only for content the solicitation expressly excludes from the limit",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Submit 86 pages and expect evaluators to choose the six least useful pages to discard",
				tier: "costly",
			},
			{
				id: "d",
				text: "Hide the extra content in unreadably small text or altered margins that violate formatting instructions",
				tier: "disqualifying",
			},
		],
		explanation:
			"Offerors assume the risk that pages beyond a clear limit will not be considered, and an agency need not curate which excess pages to remove. If omission of excess pages leaves required content unsupported, the proposal may be downgraded or found unacceptable. The exact consequence follows the solicitation: GAO has cautioned against automatic rejection where the RFP merely says the agency 'may' reject and there is no additional reasonable basis.",
		citation:
			"ManTech Advanced Systems International, Inc., B-409596, B-409596.2 (June 13, 2014); Macfadden & Associates, Inc., B-275502 (Feb. 27, 1997)",
		sourceUrl: "https://www.gao.gov/products/b-275502",
		tags: ["page-limits", "section-l", "gao", "solution"],
	},
];
