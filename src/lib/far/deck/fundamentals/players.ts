import type { QuizQuestion } from "../../types";

export const PLAYERS_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "fund-players-co-warrant-authority",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"As a proposal coordinator, which statement best identifies when a contracting officer (CO, often called a KO) can bind the Government in a contract action?",
		options: [
			{
				id: "a",
				text: "A warranted contracting officer acting within delegated authority, or another Government official acting within separately delegated authority",
				correct: true,
			},
			{
				id: "b",
				text: "Any Government program manager who controls the requirement or program budget",
				correct: false,
			},
			{
				id: "c",
				text: "Any COR once the contracting officer has introduced that person to the contractor",
				correct: false,
			},
			{
				id: "d",
				text: "The most senior Government employee attending the meeting, regardless of written authority",
				correct: false,
			},
		],
		explanation:
			"A contracting officer may bind the Government only within the authority delegated in the appointment commonly called a warrant. Do not assume that a title, seniority, budget role, or customer relationship carries contracting authority. Another official can bind the Government when law or a valid delegation gives that official authority, so the practical check is the person's written authority and its limits—not the label alone.",
		citation: "FAR 1.602-1(a); FAR 1.603-3",
		sourceUrl: "https://www.acquisition.gov/far/1.602-1",
		tags: ["contracting-officer", "warrant", "binding-authority", "government-roles"],
	},
	{
		id: "fund-players-government-pm-authority",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"As a delivery program manager supporting recompete capture, what is the safest distinction between the Government PM's program role and acquisition authority?",
		options: [
			{
				id: "a",
				text: "The Government PM can define mission needs and manage program outcomes, but contract commitments or changes must come from an official with the required delegated authority",
				correct: true,
			},
			{
				id: "b",
				text: "The Government PM automatically has the same authority as the contracting officer because both work for the agency",
				correct: false,
			},
			{
				id: "c",
				text: "The Government PM may change scope whenever funds are available, provided the contractor documents the discussion",
				correct: false,
			},
			{
				id: "d",
				text: "The Government PM has no legitimate role in requirements, acquisition planning, or performance oversight",
				correct: false,
			},
		],
		explanation:
			"FAR 15.201(c) recognizes the program manager as a participant in early acquisition exchanges, but a Government PM's exact duties are agency-specific. PMs and requiring-activity leaders may shape requirements, coordinate stakeholders, and oversee mission outcomes; those responsibilities and the PM title do not by themselves confer authority to enter into or change a contract. Confirm contractual direction through the contracting officer or another official whose written delegation covers the action.",
		citation: "FAR 15.201(c); FAR 1.602-1(a)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["government-pm", "acquisition-authority", "requirements", "role-boundaries"],
	},
	{
		id: "fund-players-ssa-sseb-roles",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"As a solution architect preparing for color-team review, how should you distinguish the source selection authority (SSA) from the evaluation team often called the SSEB?",
		options: [
			{
				id: "a",
				text: "The evaluation team applies the solicitation factors and develops findings; the SSA considers that work and makes the source selection decision",
				correct: true,
			},
			{
				id: "b",
				text: "The SSA scores every proposal alone, while the evaluation team only checks page limits",
				correct: false,
			},
			{
				id: "c",
				text: "The evaluation team selects the winner, and the SSA may only approve that recommendation without independent judgment",
				correct: false,
			},
			{
				id: "d",
				text: "The SSA and the evaluation team are contractor roles assigned by the proposal manager",
				correct: false,
			},
		],
		explanation:
			"The SSA establishes an appropriately skilled evaluation team, ensures evaluation against the solicitation's stated factors, considers advisory recommendations, and selects the best-value source. The evaluation team documents evaluated strengths, weaknesses, risks, and other findings; it informs but does not replace the SSA's decision responsibility.",
		citation: "FAR 15.303(b); FAR 15.308",
		sourceUrl: "https://www.acquisition.gov/far/15.303",
		tags: ["ssa", "sseb", "source-selection", "evaluation"],
	},
	{
		id: "fund-players-cor-unauthorized-commitment",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the prime's contracts manager. The COR emails Friday evening: “Start an additional workstream Monday; we will fix the scope and funding in the next modification.” The work is outside the current statement of work.",
		prompt: "How should you respond?",
		options: [
			{
				id: "a",
				text: "Pause the added work, preserve the email, and route the request through the contracting officer or other duly authorized official for contractual direction before performance",
				tier: "best",
			},
			{
				id: "b",
				text: "Decline the added work in a reply to the COR and ask the COR to obtain contracting-officer direction, while continuing only the work already authorized by the contract",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Start the work under a reservation-of-rights email because the agency clearly needs it",
				tier: "costly",
			},
			{
				id: "d",
				text: "Start now and ask the COR to backdate a modification after funding arrives",
				tier: "disqualifying",
			},
		],
		explanation:
			"A COR's written designation defines limited authority, and a COR may not make commitments or changes affecting price, quality, quantity, delivery, or other contract terms. Starting out-of-scope work on the COR's request risks an unauthorized commitment and uncompensated performance. The prime should document, escalate, remain responsive, and wait for direction from an official whose delegated authority covers the change.",
		citation: "FAR 1.602-2(d)(5); FAR 1.602-3",
		sourceUrl: "https://www.acquisition.gov/far/1.602-2",
		tags: ["cor", "unauthorized-commitment", "scope-change", "contracts"],
	},
	{
		id: "fund-players-sba-osdbu-influence",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the small-business capture lead at a large prime. A civilian agency's sources-sought notice signals that the acquisition strategy is still forming, and market feedback could support a set-aside or a less bundled requirement.",
		prompt: "Which capture posture best reflects SBA and agency OSDBU influence?",
		options: [
			{
				id: "a",
				text: "Submit evidence-based market research, engage credible small-business partners, and account for SBA PCR and OSDBU recommendations while recognizing that acquisition officials retain the decision",
				tier: "best",
			},
			{
				id: "b",
				text: "Coordinate an OSDBU capability discussion and partner plan, but wait for the contracting office's published strategy before making firm pursuit assumptions",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Treat a positive OSDBU conversation as assurance that the procurement will remain full and open for the large prime",
				tier: "costly",
			},
			{
				id: "d",
				text: "Ask SBA or OSDBU to promise the prime an award because those offices control source selection",
				tier: "disqualifying",
			},
		],
		explanation:
			"SBA assists small businesses and acquisition personnel, while an agency OSDBU advocates for small-business participation and can recommend set-asides, review subcontracting plans, and challenge unnecessary consolidation or bundling. Those offices can materially influence strategy but do not award the contract or guarantee a particular outcome. A large prime should answer market research with facts and build a credible small-business participation strategy.",
		citation: "FAR 19.201(a), (c)",
		sourceUrl: "https://www.acquisition.gov/far/19.201",
		tags: ["sba", "osdbu", "small-business", "market-research", "acquisition-strategy"],
	},
	{
		id: "fund-players-responsibility-fapiis-sam",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"You are the proposal manager. A compliance questionnaire reveals that the prime's recently acquired affiliate has an old integrity matter, and the team has not checked whether any related exclusion or FAPIIS record remains relevant.",
		prompt: "What is the best next step before representations and final submission?",
		options: [
			{
				id: "a",
				text: "Escalate to Contracts, Legal, and Compliance to verify SAM exclusions and relevant FAPIIS information, make accurate disclosures, and prepare any responsibility context for the contracting officer",
				correct: true,
			},
			{
				id: "b",
				text: "Delete the affiliate from the organization chart so the contracting officer cannot consider its record",
				correct: false,
			},
			{
				id: "c",
				text: "Assume an old matter is irrelevant because only proposal evaluation factors—not present responsibility—may affect award",
				correct: false,
			},
			{
				id: "d",
				text: "Self-declare the prime nonresponsible and withdraw without checking the record or seeking advice",
				correct: false,
			},
		],
		explanation:
			"The contracting officer makes the responsibility determination and, when FAR 9.104-6 applies, reviews FAPIIS information that includes SAM exclusions and CPARS data, using judgment about relevance and mitigation. The capture team should not conceal, dismiss, or adjudicate the issue itself. Internal specialists should verify the facts, ensure representations are accurate, and assemble a supportable explanation for the authorized Government decision-maker.",
		citation: "FAR 9.104-6(a)-(c)",
		sourceUrl: "https://www.acquisition.gov/far/9.104-6",
		tags: ["responsibility", "sam-exclusions", "fapiis", "integrity", "compliance"],
	},
	{
		id: "fund-players-prime-internal-ownership",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"You are a new capture analyst on a major civilian-agency pursuit. The draft proposal contains an aggressive price, an exception to a contract term, and a solution assumption that operations has not validated.",
		prompt: "Which ownership model is the safest starting point, subject to the prime's delegation-of-authority policy?",
		options: [
			{
				id: "a",
				text: "Capture owns win strategy; Proposal owns compliant integration; Pricing owns the cost/price model; Contracts owns terms and exceptions; Program/operations validates executability; an authorized corporate signer makes binding commitments",
				correct: true,
			},
			{
				id: "b",
				text: "Capture owns every decision and may bind the company whenever the pursuit deadline is near",
				correct: false,
			},
			{
				id: "c",
				text: "Proposal owns contract exceptions and pricing certifications because it controls the final document",
				correct: false,
			},
			{
				id: "d",
				text: "Pricing owns the technical solution and customer relationship because price is part of every volume",
				correct: false,
			},
		],
		explanation:
			"The FAR does not prescribe a prime contractor's capture, proposal, pricing, contracts, or program org chart; the company must define those accountabilities. A sound large-prime model separates specialist ownership, forces cross-functional validation, and reserves binding commitments for an authorized signer. FAR 4.102 reinforces the external boundary: the person signing for a corporation must have authority to bind it.",
		citation: "FAR 4.102(c)",
		sourceUrl: "https://www.acquisition.gov/far/4.102",
		tags: ["capture", "proposal", "pricing", "contracts", "program-management", "delegation"],
	},
	{
		id: "fund-players-protest-forum-tradeoff",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"A training slide says an agency protest, a GAO protest, and a Court of Federal Claims action are interchangeable reviews that all produce binding judicial orders.",
		prompt: "Which correction accurately assigns each institution's authority and role?",
		options: [
			{
				id: "a",
				text: "The procuring agency decides an agency-level protest and may take corrective action; GAO provides an independent administrative forum that issues recommendations and generally decides within 100 days; COFC exercises judicial bid-protest authority and may award declaratory or injunctive relief",
				tier: "best",
				consequence:
					"The slide now distinguishes an internal executive-agency process, GAO's recommendation-based forum, and a court empowered to issue judicial relief.",
			},
			{
				id: "b",
				text: "Remove the claim that the forums are interchangeable and require protest counsel to verify the governing forum, deadlines, and available relief before describing a specific case",
				tier: "defensible",
				consequence:
					"This prevents a false equivalence, but it does not yet teach the audience which institution decides, recommends, or grants judicial relief.",
			},
			{
				id: "c",
				text: "GAO is the protest court, its recommendations are injunctions, and COFC merely gives nonbinding acquisition advice",
				tier: "costly",
				consequence:
					"The slide reverses the legal character of the two independent forums and misstates their remedies.",
			},
			{
				id: "d",
				text: "The contracting officer controls all three processes and can overrule any GAO decision or COFC judgment without further action",
				tier: "disqualifying",
				consequence:
					"This erases institutional independence and wrongly places judicial and GAO authority inside the contracting office.",
			},
		],
		explanation:
			"An agency protest remains with the procuring agency, which may provide review above the contracting officer and may take corrective action. GAO is an independent legislative-branch forum: it resolves protests through recommendations, ordinarily within 100 days, rather than issuing court injunctions. COFC exercises Tucker Act judicial review and may grant declaratory and injunctive relief. These institutional roles are separate from the fact-specific legal decision about where and when to file.",
		citation: "FAR 33.102; FAR 33.103; FAR 33.104(f); 28 U.S.C. § 1491(b)(2)",
		sourceUrl: "https://www.acquisition.gov/far/33.102",
		tags: ["bid-protest", "agency-protest", "GAO", "COFC", "institutional-authority"],
	},
	{
		id: "fund-players-ig-suspension-debarment",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"You are the business development vice president. An agency IG report raises integrity concerns about a proposed teammate, but the company is not currently shown as excluded in SAM. The exclusive teaming agreement is due today.",
		prompt: "How should the company handle the teammate integrity signal before signing?",
		options: [
			{
				id: "a",
				text: "Pause the commitment, escalate to Legal, Ethics, Contracts, and Compliance, verify SAM and the underlying facts, and assess mitigation and teaming risk without treating the IG report itself as a debarment decision",
				correct: true,
			},
			{
				id: "b",
				text: "Sign immediately because absence from SAM proves the IG findings cannot affect responsibility or future suspension and debarment",
				correct: false,
			},
			{
				id: "c",
				text: "Publicly announce that the teammate is debarred because an IG report automatically excludes a contractor governmentwide",
				correct: false,
			},
			{
				id: "d",
				text: "Ask the capture team to negotiate privately with the IG for permission to use the teammate",
				correct: false,
			},
		],
		explanation:
			"An agency IG may investigate and refer integrity matters, but the agency's suspending and debarring official follows the procedures in FAR subpart 9.4 and makes the exclusion decision. A public report is therefore not itself proof of debarment, while a clean SAM check does not erase responsibility, reputational, disclosure, or future-action risk. The prime should preserve facts and use its formal diligence and escalation channels before committing.",
		citation: "FAR 9.406-3(a), (d); FAR 9.407-3; FAR 9.405",
		sourceUrl: "https://www.acquisition.gov/far/9.407-3",
		tags: ["inspector-general", "suspension", "debarment", "sam-exclusions", "due-diligence"],
	},
];
