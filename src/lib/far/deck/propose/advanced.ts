import type { QuizQuestion } from "../../types";

export const PROPOSE_ADVANCED: QuizQuestion[] = [
	{
		id: "propose-orals-ground-rules",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"You are the contracts lead for a civilian-agency procurement using oral presentations. The RFP says orals supplement the written proposal, identifies evaluated topics, limits presenters to proposed personnel, bars new price data, and says the agency will video-record the session.",
		prompt: "How should the team prepare and conduct the oral presentation?",
		options: [
			{
				id: "a",
				text: "Rehearse the proposed presenters against the stated factors, keep oral and written claims consistent, obey content limits, and preserve the agency's Q&A record",
				tier: "best",
				consequence:
					"The team presents scoreable evidence through authorized speakers while respecting the solicitation's stated relationship between oral and written material.",
			},
			{
				id: "b",
				text: "Use backup subject-matter experts only if the contracting officer confirms the RFP permits substitutions or additional speakers",
				tier: "defensible",
				consequence:
					"Seeking a written ruling avoids an unauthorized-presenter problem; the solicitation controls who may present and what may be presented.",
			},
			{
				id: "c",
				text: "Introduce a lower price and a new staffing model orally because spoken statements supersede the written proposal",
				tier: "disqualifying",
				consequence:
					"The RFP bars new price data, and orals do not silently revise written proposal terms unless the solicitation and exchange procedures allow it.",
			},
			{
				id: "d",
				text: "Treat the session as an informal sales pitch because the agency cannot evaluate or record oral statements",
				tier: "disqualifying",
				consequence:
					"FAR 15.102 expressly permits evaluated oral presentations, and the contracting officer must maintain a record of what the Government relied upon in the source-selection decision.",
			},
		],
		explanation:
			"Oral presentations may substitute for or augment written information. FAR 15.102(d) requires the solicitation to provide sufficient information for offerors to prepare and says it may describe particulars such as content and evaluation factors, presenter qualifications, media limits, logistics, timing, and the scope of exchanges. FAR 15.102(e) separately requires the contracting officer to maintain a record of what the Government relied upon, but it leaves the method and detail to the source selection authority and does not require the solicitation to state the recording method. The presentation does not revise the written offer unless a change is submitted through authorized proposal-revision procedures.",
		citation: "FAR 15.102",
		sourceUrl: "https://www.acquisition.gov/far/15.102",
		tags: ["orals", "oral-presentations", "record", "contracts"],
	},
	{
		id: "propose-validity-period",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"You are the staffing lead. The RFP requires proposals to remain available for Government acceptance for 120 calendar days after the closing date. Your teaming agreement, salary approvals, and supplier quotes expire after 60 days.",
		prompt: "What is the correct pre-submission response?",
		options: [
			{
				id: "a",
				text: "Secure internal and teammate authority for the full 120-day acceptance period or raise the issue before closing rather than inserting an unapproved shorter validity term",
				correct: true,
			},
			{
				id: "b",
				text: "Submit a 60-day validity exception in fine print because acceptance periods never affect proposal acceptability",
				correct: false,
			},
			{
				id: "c",
				text: "Assume all supplier quotes and key-person commitments automatically extend to match the Government period",
				correct: false,
			},
			{
				id: "d",
				text: "Leave validity unaddressed and plan to withdraw the proposal on day 61 without consequence",
				correct: false,
			},
		],
		explanation:
			"FAR 52.215-1(d), when included, says proposals remain valid for the number of days on the solicitation cover sheet unless the offeror proposes a different period. Here, however, the RFP expressly requires 120 days, so a unilateral shorter period takes exception to that instruction and can create acceptability risk. Align corporate approvals, teammate commitments, quotes, escalation assumptions, and key-person availability or seek a pre-closing change.",
		citation: "FAR 52.215-1(d)",
		sourceUrl: "https://www.acquisition.gov/far/52.215-1",
		tags: ["proposal-validity", "acceptance-period", "staffing", "teaming"],
	},
	{
		id: "propose-substantiated-strengths",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"You are the solution lead on a tradeoff procurement. The draft repeats 'low risk,' 'best-in-class,' and 'unique' but gives no metrics, customer outcome, implementation detail, or link to a Section M factor. The underlying solution genuinely automates a high-risk manual control.",
		prompt: "How do you turn that feature into a credible evaluated discriminator?",
		options: [
			{
				id: "a",
				text: "Tie the feature to a stated factor, explain the mechanism and customer benefit, quantify supportable impact, and provide evidence or a verifiable basis",
				tier: "best",
			},
			{
				id: "b",
				text: "Describe the benefit conservatively with a traceable assumption and validation method when historical metrics are unavailable",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Repeat 'unique discriminator' in every section so evaluators must treat it as a strength",
				tier: "costly",
			},
			{
				id: "d",
				text: "Claim guaranteed zero defects without analysis because proposal claims are presumed accurate",
				tier: "disqualifying",
			},
		],
		explanation:
			"Agencies evaluate relative qualities solely against the solicitation's factors, and offerors bear the burden of submitting an adequately written proposal. A feature becomes a useful discriminator when the evaluator can trace feature → mechanism → relevant benefit → evidence. Unsupported superlatives do not compel a strength and can damage credibility; substantiation should be specific without promising results the firm cannot support.",
		citation: "FAR 15.305(a)",
		sourceUrl: "https://www.acquisition.gov/far/15.305",
		tags: ["strengths", "discriminators", "substantiation", "solution"],
	},
	{
		id: "propose-tradeoff-value-strategy",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"You are the pricing lead. Section M uses a best-value tradeoff: technical is significantly more important than price, but its importance declines as proposals become technically equal. Your solution has a defensible automation advantage worth about $3 million to the agency; your evaluated price premium is $9 million.",
		prompt: "How should you position the final solution and price?",
		options: [
			{
				id: "a",
				text: "Rework price and scope so the premium is supportable by evaluated, documented benefits under the stated factors",
				tier: "best",
				consequence:
					"This gives the source-selection authority a rational record for paying more, while recognizing that 'technical more important' is not a blank check.",
			},
			{
				id: "b",
				text: "Retain the premium only if additional supportable benefits, risk reductions, or discriminators plausibly justify it under Section M",
				tier: "defensible",
				consequence:
					"A higher price can win a tradeoff, but only when the evaluated superiority and award rationale justify the price difference.",
			},
			{
				id: "c",
				text: "Keep the $9 million premium because the agency must select the highest technical rating whenever technical outweighs price",
				tier: "costly",
				consequence:
					"The solicitation's weighting permits—not mandates—payment of any premium; the decision must compare benefits against the actual price difference.",
			},
			{
				id: "d",
				text: "Delete required cost support and tell the agency to estimate the premium's value itself",
				tier: "disqualifying",
				consequence:
					"An unsupported proposal can lose evaluated credit or become unacceptable; the agency need not invent the offeror's value case.",
			},
		],
		explanation:
			"In a tradeoff process, the perceived benefits of a higher-priced proposal must merit the additional cost, and the rationale for tradeoffs must be documented. The offeror's job is to make evaluated superiority concrete and price the premium proportionately. Technical importance affects the decision framework, but it does not force selection of the highest-rated proposal regardless of price.",
		citation: "FAR 15.101-1(c); FAR 15.308",
		sourceUrl: "https://www.acquisition.gov/far/15.308",
		tags: ["tradeoff", "value", "price-premium", "source-selection"],
	},
	{
		id: "propose-clarification-becomes-discussion",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"You are the contracts lead. After establishing a competitive range, the agency labels an exchange with a competitor a 'clarification' but lets that firm replace a noncompliant key-person resume and materially improve its proposal. Your firm receives no similar opportunity.",
		prompt: "What principle is most relevant?",
		options: [
			{
				id: "a",
				text: "The substance controls: permitting a material proposal revision is characteristic of discussions, which generally must be conducted with all offerors in the competitive range",
				correct: true,
			},
			{
				id: "b",
				text: "The label controls, so any exchange called a clarification can permit unlimited revisions for one offeror",
				correct: false,
			},
			{
				id: "c",
				text: "Equal-treatment rules apply only to price exchanges and never to technical revisions",
				correct: false,
			},
			{
				id: "d",
				text: "A communication before competitive-range establishment always permits an offeror to cure a material deficiency",
				correct: false,
			},
		],
		explanation:
			"GAO looks to what the parties were allowed to do, not merely the agency's label. Clarifications do not permit proposal revision; discussions are exchanges intended to allow revision, including changes needed for acceptability or material enhancement. If an agency conducts discussions with one offeror, FAR 15.306(d)(1) requires discussions with every offeror in the competitive range, though the content may be tailored.",
		citation: "Raytheon Company, B-404998 (July 25, 2011); FAR 15.306(d)(1)",
		sourceUrl: "https://www.gao.gov/assets/b-404998.pdf",
		tags: ["clarifications", "discussions", "equal-treatment", "gao"],
	},
	{
		id: "propose-electronic-late-exception",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"You are the proposal manager evaluating a late electronic submission. The RFP includes FAR 52.215-1 without changing its late-proposal terms. The offeror transmitted through an authorized electronic-commerce method, and Government logs show receipt at the initial point of entry to Government infrastructure by 4:30 p.m. one working day before the deadline, although routing delivered it to the contracting office after closing.",
		prompt: "Which statement most accurately describes the cited electronic-commerce exception?",
		options: [
			{
				id: "a",
				text: "The proposal may be considered if the contracting officer determines the clause's stated conditions are met, including timely receipt at the Government infrastructure entry point",
				correct: true,
			},
			{
				id: "b",
				text: "Every electronically transmitted proposal is timely whenever the offeror clicked Send before closing",
				correct: false,
			},
			{
				id: "c",
				text: "The exception applies whenever the proposal reaches any private email server within three days after closing",
				correct: false,
			},
			{
				id: "d",
				text: "No late electronic proposal can ever be considered under FAR 52.215-1",
				correct: false,
			},
		],
		explanation:
			"FAR 52.215-1(c)(3)(ii)(A)(1) contains a narrow exception for an authorized electronic-commerce transmission received at the initial point of entry to Government infrastructure no later than 5:00 p.m. one working day before the specified receipt date. It is not a general grace period. The contracting officer must apply the exact solicitation provision and evidence; clicking Send is not enough.",
		citation: "FAR 52.215-1(c)(3)(ii)(A)(1)",
		sourceUrl: "https://www.acquisition.gov/far/52.215-1",
		tags: ["late-proposal", "electronic-commerce", "exception", "submission"],
	},
	{
		id: "propose-fpr-common-cutoff",
		unitId: "propose",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"You are the capture lead. Discussions have concluded, and the contracting officer requests FPRs from every remaining offeror by Friday at noon. On Monday, a key candidate asks to replace her resume with a stronger version, but the agency has not reopened discussions or requested another revision.",
		prompt: "What should the team assume?",
		options: [
			{
				id: "a",
				text: "The Friday FPR is the proposal of record; do not submit an unsolicited material revision unless the contracting officer reopens the process on an authorized basis",
				correct: true,
			},
			{
				id: "b",
				text: "An offeror may revise any evaluated volume until award as long as the change improves the proposal",
				correct: false,
			},
			{
				id: "c",
				text: "Send the new resume privately to the evaluator because key-person changes are never proposal revisions",
				correct: false,
			},
			{
				id: "d",
				text: "Withdraw the FPR automatically because every post-FPR staffing development makes the earlier proposal false",
				correct: false,
			},
		],
		explanation:
			"At the conclusion of discussions, each remaining offeror receives an opportunity to submit a final proposal revision by a common cutoff. An offeror has no unilateral right to keep improving its evaluated proposal afterward. A later personnel development should be assessed under the solicitation, the accuracy of existing representations, and contracting-officer instructions; it does not automatically prove a bait-and-switch, but neither does it authorize a private revision.",
		citation: "FAR 15.307(b)",
		sourceUrl: "https://www.acquisition.gov/far/15.307",
		tags: ["fpr", "common-cutoff", "key-personnel", "capture"],
	},
];
