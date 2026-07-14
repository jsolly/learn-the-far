import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Write the Proposal shelf — decode → controls → evidence → price → lock → submit → exchanges.
 * Paraphrase only; cite FAR/GAO anchors without inventing quote text.
 */
export const PROPOSE_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "rfp-as-evaluation-machine",
		unitId: "propose",
		title: "Read the RFP as an Evaluation Machine",
		summary: "Sections L and M together; LPTA vs tradeoff; weakness and deficiency vocabulary.",
		intro:
			"A proposal is written for evaluators who must follow the solicitation’s machine: instructions that get you evaluated, factors that get you scored, and a source-selection method that decides whether extras help or hurt. Start here before anyone opens a volume template.",
		tags: ["definition", "field-guide", "section-l", "section-m"],
		readingMinutes: 7,
		suggestedOrder: 1,
		pieces: [
			{
				id: "l-and-m-together",
				title: "Instructions and factors are different jobs",
				story:
					"At kickoff, one author says Section L is the scoring plan and Section M is merely a formatting checklist.",
				is: "When the solicitation uses the Uniform Contract Format, Section L contains instructions, conditions, and notices to offerors; Section M contains evaluation factors for award. A useful compliance matrix tracks both: L-compliance gets the proposal into evaluation; M-alignment makes it scoreable against the stated factors.",
				isNot:
					"Following Section L does not by itself earn the highest rating, and evaluators may not be assumed to waive material L instructions after receipt. Organizing solely around the incumbent contract while treating L and M as background is not a source-selection strategy.",
				fits: "Build the writing plan as owner → volume → proposal location for every L instruction and every M factor before themes are drafted.",
				citation: "FAR 15.204-5(b), (c)",
				sourceUrl: "https://www.acquisition.gov/far/15.204-5",
				sourceKind: "controlling-authority",
			},
			{
				id: "method-and-findings",
				title: "Match the method — and the finding vocabulary",
				is: "Under LPTA, technical proposals are typically acceptable or unacceptable and no trade credit is available for exceeding minimums — so the offer should be the lowest-priced clearly compliant design with evidence that every minimum is met. Under tradeoff, evaluated advantages can justify a premium when the solicitation’s logic supports it. FAR 15.001 distinguishes a weakness (increases performance risk), a significant weakness (appreciably increases that risk), and a deficiency (material failure to meet a requirement, or a combination of significant weaknesses creating unacceptable risk).",
				isNot:
					"Paying an 11% premium for extras under LPTA does not create a tradeoff the solicitation refused to run. Every material risk increase is not automatically a deficiency, and “strength” is often an agency evaluation-plan term rather than a separately defined FAR 15.001 label.",
				fits: "Choose solution ambition from the announced method, then write so evaluators can apply the finding vocabulary without inventing criteria.",
				checklist: [
					"Confirm LPTA vs tradeoff (or other stated method) before solution premium debates",
					"Map every minimum that can produce a deficiency if missed",
					"Train reviewers to use weakness / significant weakness / deficiency consistently",
				],
				citation: "FAR 15.101-2; FAR 15.001",
				sourceUrl: "https://www.acquisition.gov/far/15.001",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.204-5 — Part IV solicitation provisions",
				url: "https://www.acquisition.gov/far/15.204-5",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.101-2 — LPTA",
				url: "https://www.acquisition.gov/far/15.101-2",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.001 — Definitions",
				url: "https://www.acquisition.gov/far/15.001",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "proposal-control-system",
		unitId: "propose",
		title: "Build the Proposal’s Control System",
		summary: "Compliance matrix, ownership, and purpose-specific reviews — not ritual color names.",
		intro:
			"Compressed schedules punish teams that treat every review as a general editing party. Establish the control system early: a living compliance matrix, named owners, cross-volume dependencies, and purpose-specific reviews at the right maturity.",
		tags: ["field-guide", "decision", "compliance-matrix", "color-reviews"],
		readingMinutes: 7,
		suggestedOrder: 2,
		pieces: [
			{
				id: "matrix-and-owners",
				title: "Matrix, ownership, and cross-volume locks",
				story:
					"The schedule is compressed, reviewers are scarce, and leadership wants every review to solve every problem.",
				is: "A proposal control system starts with a compliance matrix that assigns every Section L instruction and Section M factor to an owner, volume, and proposal location — then tracks cross-volume dependencies (staffing claims that must match price, past-performance entities that must match workshare, orals that must match written claims).",
				isNot:
					"A shared drive full of drafts is not a control system. Waiting until Gold Team to discover missing L items or contradictory volumes is not management.",
				fits: "Stand the matrix up the day after solicitation decode; it governs the calendar more than the color names do.",
				citation: "FAR 15.204-5",
				sourceUrl: "https://www.acquisition.gov/far/15.204-5",
				sourceKind: "controlling-authority",
			},
			{
				id: "purpose-specific-reviews",
				title: "Purpose-specific reviews beat ritual colors",
				is: "House-convention color or gate reviews work when each gate has a stated purpose and the right expertise: early solution and win-strategy review, mid-course evaluator-style evidence review, pricing/integration review, and final compliance/production readiness. Use scarce senior time against the risk that gate is meant to catch.",
				isNot:
					"Ritual color names, copyediting at every gate, or a final executive rewrite as a substitute for early solution review are not a control system. This course treats detailed color-purpose playbooks as capture practice, not FAR text.",
				fits: "Publish the review charter with the kickoff schedule so “Pink/Red/Gold” means a job, not a date on a slide.",
				judgment:
					"If a review cannot name the decision it must make, cancel it or redesign it — do not burn authors for atmosphere.",
				citation: "DOE Bid Decision Gate Reviews (guidance)",
				sourceUrl: "https://www.energy.gov/sites/prod/files/2016/08/f33/Bid_Decision_Gate.pdf",
				sourceKind: "guidance",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.204-5 — Solicitation organization",
				url: "https://www.acquisition.gov/far/15.204-5",
				kind: "controlling-authority",
			},
			{
				label: "DOE — Bid Decision Gate Reviews PDF",
				url: "https://www.energy.gov/sites/prod/files/2016/08/f33/Bid_Decision_Gate.pdf",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "write-evidence-not-adjectives",
		unitId: "propose",
		title: "Write Evidence, Not Adjectives",
		summary: "Feature → mechanism → benefit → support; attributed past performance; orals as evidence.",
		intro:
			"Evaluators cannot score “best-in-class.” They can score a feature that works through a mechanism, produces an evaluated benefit, and is supported by evidence the solicitation allows. Write that chain — and treat orals, when authorized, as another evidence channel with ground rules.",
		tags: ["field-guide", "evidence", "past-performance", "orals"],
		readingMinutes: 8,
		suggestedOrder: 3,
		pieces: [
			{
				id: "feature-mechanism-benefit",
				title: "The scoreable evidence chain",
				story:
					"The draft repeats “best-in-class” and “low risk,” while the staffing model and automation mechanism remain unexplained.",
				is: "Traceable proposal writing connects feature → mechanism → evaluated benefit → support. Support may include accurately attributed past performance, process artifacts, metrics, and personnel commitments that the solicitation permits. Relative strengths that support the evaluation must be grounded in the proposal record, not in adjectives.",
				isNot:
					"Repetition is not proof. Borrowed experience presented as the offeror’s own is not support. Unsupported key-personnel commitments are not strengths waiting to be believed.",
				fits: "Use evaluator-style review to strike claims that cannot survive the chain — before page count forces worse cuts.",
				citation: "FAR 15.305(a)",
				sourceUrl: "https://www.acquisition.gov/far/15.305",
				sourceKind: "controlling-authority",
			},
			{
				id: "pp-personnel-orals",
				title: "Attribution, commitments, and orals",
				is: "Submit the strongest relevant permitted past-performance examples and clearly connect each entity’s prior role to its proposed share of the work. Do not claim key-personnel commitment without a reasonable basis — obtain and accurately document consent, or propose someone you reasonably expect to furnish. When oral presentations are authorized, rehearse proposed presenters against stated factors, keep oral and written claims consistent, obey content limits, and preserve the agency’s Q&A record.",
				isNot:
					"Orals are not an informal sales pitch that silently revises price or staffing. Presenting a teammate’s contracts as the prime’s own to avoid a neutral rating is not attribution. FAR 15.102 permits evaluated orals; it does not license new price data the RFP bars.",
				fits: "Align technical narrative, past-performance volume, resumes, and orals as one evidence system.",
				checklist: [
					"Every major claim names its mechanism and support location",
					"Past-performance entities match proposed workshare",
					"Key-personnel commitments exist as required documents, not hopes",
				],
				citation: "FAR 15.305; FAR 15.102; FAR 52.222-46",
				sourceUrl: "https://www.acquisition.gov/far/15.102",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.305 — Proposal evaluation",
				url: "https://www.acquisition.gov/far/15.305",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.102 — Oral presentations",
				url: "https://www.acquisition.gov/far/15.102",
				kind: "controlling-authority",
			},
			{
				label: "Knight Point Systems, B-416602",
				url: "https://www.gao.gov/products/b-416602%2Cb-416602.2",
				kind: "decision",
			},
			{
				label: "FAR 52.222-46 — Evaluation of Compensation",
				url: "https://www.acquisition.gov/far/52.222-46",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "one-solution-staffing-price",
		unitId: "propose",
		title: "One Solution, One Staffing Story, One Price",
		summary: "Integrate solution, labor, and CLINs — reasonableness is not realism.",
		intro:
			"Technical, staffing, and price volumes are one offer. If the technical story retains the incumbent workforce while price assumes far lower compensation, evaluators will notice — and cost realism, unbalanced pricing, and tradeoff value analysis each ask different questions.",
		tags: ["contrast", "decision", "pricing", "cost-realism"],
		readingMinutes: 9,
		suggestedOrder: 4,
		pieces: [
			{
				id: "reasonableness-vs-realism",
				title: "Reasonableness and realism are different tests",
				story:
					"The technical volume promises near-total incumbent retention while the price assumes compensation far below incumbent levels. An executive says price reasonableness and cost realism are two names for the same test.",
				is: "Price reasonableness asks whether the price is too high. Cost realism (typically on cost-reimbursement work) asks whether proposed costs are realistic for the work and may support a probable-cost adjustment. Professional-compensation evaluation under FAR 52.222-46 separately probes whether compensation undermines the staffing story you sold.",
				isNot:
					"Reasonableness and realism are not synonyms, and “technical importance” does not compel the agency to accept any premium under a tradeoff. Hiding cash-flow preferences through materially unbalanced CLIN pricing is not a pricing strategy — it is a risk finding.",
				fits: "Run an integrated green-team/pricing review that reads solution, labor, compensation, and CLIN allocation as one model before final production.",
				judgment:
					"If the staffing narrative cannot survive the compensation and hours in the price volume, change one of them — do not hope evaluators miss the seam.",
				citation: "FAR 15.404-1; FAR 52.222-46; FAR 15.308",
				sourceUrl: "https://www.acquisition.gov/far/15.404-1",
				sourceKind: "controlling-authority",
			},
			{
				id: "tradeoff-premium",
				title: "Pay only for evaluated value",
				is: "Under a tradeoff, a premium belongs in the offer only when it maps to strengths the solicitation’s factors can credit and the source-selection decision can document. Under LPTA, extras that raise price without reducing the risk of unacceptability are usually dead weight.",
				isNot:
					"Front-loading transition CLINs to improve cash flow while underpricing uncertain later work is not “aggressive pricing” when the solicitation and FAR unbalanced-pricing analysis can treat it as risk.",
				fits: "Tie every dollar of premium to an M-factor benefit someone can defend in the SSEB narrative.",
				citation: "FAR 15.404-1(g); FAR 15.308",
				sourceUrl: "https://www.acquisition.gov/far/15.404-1",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.404-1 — Proposal analysis techniques",
				url: "https://www.acquisition.gov/far/15.404-1",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.222-46 — Evaluation of Compensation for Professional Employees",
				url: "https://www.acquisition.gov/far/52.222-46",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.308 — Source selection decision",
				url: "https://www.acquisition.gov/far/15.308",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "freeze-operative-solicitation",
		unitId: "propose",
		title: "Freeze Against the Operative Solicitation",
		summary: "Amendments, page limits, validity, and cross-volume lock before upload.",
		intro:
			"The operative solicitation is the baseline plus every amendment that applies. Final production is a compliance freeze: acknowledgments, page and format rules, acceptance period, supplier and teammate authority, and every cross-volume effect of the last change.",
		tags: ["failure-mode", "field-guide", "amendments", "compliance"],
		readingMinutes: 8,
		suggestedOrder: 5,
		pieces: [
			{
				id: "amendments-and-pages",
				title: "Amendments and page limits are material",
				story:
					"Amendment 0004 changes labor quantities, the technical proof is beyond the page limit, and someone suggests “evaluators will find the appendix.”",
				is: "Offerors must acknowledge and conform to amendments that apply. Page and formatting limits in Section L are compliance rules: required proof that lives only beyond the limit is often treated as if it were not submitted. Rebuild the compliance matrix against the operative solicitation before upload.",
				isNot:
					"Signature collection alone is not amendment compliance. Hiding required proof in excess pages is not a workaround. Assuming the agency will waive page limits after receipt is not a plan.",
				fits: "Treat the last amendment as a full re-gate of solution, price, and production — not a cover-page checkbox.",
				citation: "FAR 15.206; Macfadden & Associates, B-275502",
				sourceUrl: "https://www.acquisition.gov/far/15.206",
				sourceKind: "controlling-authority",
			},
			{
				id: "validity-period",
				title: "Validity must cover the acceptance period",
				is: "If the RFP requires proposals to remain available for Government acceptance for a stated period, secure internal, teammate, and supplier authority for that full period — or raise the issue before closing rather than inserting an unapproved shorter validity term.",
				isNot:
					"Supplier quotes and key-person commitments do not automatically extend to match the Government period. A quiet 60-day exception in fine print is not a free pass when the solicitation demanded 120.",
				fits: "Put acceptance-period authority on the final readiness checklist beside amendment acknowledgments.",
				checklist: [
					"Diff every amendment into the matrix and price model",
					"Re-count pages against the operative L instructions",
					"Confirm teammate/supplier authority through the required acceptance period",
				],
				citation: "FAR 52.215-1",
				sourceUrl: "https://www.acquisition.gov/far/52.215-1",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.206 — Amendments",
				url: "https://www.acquisition.gov/far/15.206",
				kind: "controlling-authority",
			},
			{
				label: "Macfadden & Associates, B-275502",
				url: "https://www.gao.gov/products/b-275502",
				kind: "decision",
			},
			{
				label: "FAR 52.215-1 — Instructions to Offerors—Competitive Acquisition",
				url: "https://www.acquisition.gov/far/52.215-1",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "submitted-means-received",
		unitId: "propose",
		title: "Submitted Means Received",
		summary: "Early validated receipt; late is late; narrow portal exceptions only.",
		intro:
			"“Clicked Send” is not receipt. Submission discipline is an operations problem: early validated upload, preserved evidence, and the exact solicitation provision that governs any narrow electronic exception.",
		tags: ["failure-mode", "decision", "timeliness", "submission"],
		readingMinutes: 6,
		suggestedOrder: 6,
		pieces: [
			{
				id: "late-is-late",
				title: "Late is late — plan for validated receipt",
				story:
					"The first upload begins four minutes before closing; the compliant file reaches the portal three minutes late.",
				is: "Under the late-proposal rules typically incorporated through FAR 52.215-1 and discussed in FAR 15.208, a proposal that arrives after the exact time set for receipt is late unless a narrow stated exception applies. Operational excellence means finishing validated receipt early enough to cure portal, file-type, and naming failures — and preserving timestamps and confirmation records.",
				isNot:
					"A materiality judgment about “only a few minutes” is not an exception. There is no general electronic-transmission grace period beyond what the applicable provision states. Starting the upload near the deadline is not a submission plan.",
				fits: "Treat portal submission like a flight departure: buffer, checklist, two-person confirmation, evidence retained.",
				judgment:
					"If the team cannot show a receipt confirmation before the deadline, assume the proposal is late until counsel proves an exception.",
				checklist: [
					"Complete a dry-run upload on the actual portal with the actual file set",
					"Finish validated receipt with margin for re-upload",
					"Preserve confirmation emails, screenshots, and hashes",
				],
				citation: "FAR 52.215-1; FAR 15.208",
				sourceUrl: "https://www.acquisition.gov/far/15.208",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.208 — Submission, modification, revision, and withdrawal",
				url: "https://www.acquisition.gov/far/15.208",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.215-1 — Instructions to Offerors",
				url: "https://www.acquisition.gov/far/52.215-1",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "proposal-after-submission",
		unitId: "propose",
		title: "The Proposal After Submission",
		summary: "Clarifications → discussions → FPR — labels are not substance.",
		intro:
			"After receipt, the proposal enters a controlled exchange lifecycle. Clarifications, communications, competitive-range decisions, discussions, and final proposal revisions each permit different changes. Trust the substance of what the agency allows you to revise — not the label on the calendar invite.",
		tags: ["advanced", "field-guide", "discussions", "fpr"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "exchange-map",
				title: "Know which exchange you are in",
				story:
					"The agency calls an exchange a clarification but lets one competitor replace a noncompliant résumé.",
				is: "FAR 15.306 distinguishes clarifications (limited exchanges that may resolve minor or clerical errors without being discussions), communications before establishing the competitive range, and discussions with offerors in the competitive range aimed at obtaining proposal revisions that maximize the Government’s ability to obtain best value. Competitive-range exclusion is a decision with notice consequences; remaining offerors should expect evaluation notices that identify deficiencies and significant weaknesses when discussions are conducted.",
				isNot:
					"The agency’s informal label does not control whether discussions occurred. Clarifications are not a license for material rewrite. Offerors outside the competitive range do not get to keep revising as if they were still in discussions.",
				fits: "Contracts and capture should log every exchange against the FAR 15.306 map and preserve what changed.",
				citation: "FAR 15.306",
				sourceUrl: "https://www.acquisition.gov/far/15.306",
				sourceKind: "controlling-authority",
			},
			{
				id: "fpr-cutoff",
				title: "Final revisions have a common cutoff",
				is: "When the agency requests final proposal revisions, FAR 15.307 contemplates a common cutoff date and time. After that cutoff, an offeror may not keep revising while competitors are frozen — unless the agency properly reopens discussions.",
				isNot:
					"Discussions will not write your cure for you, and “we thought of something better on Monday” does not reopen the competition. Unequal revision opportunities are protest fuel for a reason.",
				fits: "Treat the FPR instruction as a hard production event with the same discipline as initial submission.",
				checklist: [
					"Classify each agency contact as clarification, communication, or discussion",
					"Map evaluation notices to owners and a single revision baseline",
					"Hit the common FPR cutoff with validated receipt — then stop",
				],
				citation: "FAR 15.307; Raytheon Co., B-404998",
				sourceUrl: "https://www.acquisition.gov/far/15.307",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.306 — Exchanges with offerors after receipt",
				url: "https://www.acquisition.gov/far/15.306",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.307 — Proposal revisions",
				url: "https://www.acquisition.gov/far/15.307",
				kind: "controlling-authority",
			},
			{
				label: "Raytheon Co., B-404998",
				url: "https://www.gao.gov/assets/b-404998.pdf",
				kind: "decision",
			},
		],
	}),
];
