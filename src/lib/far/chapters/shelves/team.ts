import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Team & Subcontract shelf — structure → bind/screen → allocate → credibility → performance.
 * Paraphrase only; cite FAR/SBA/GSA/court anchors without inventing quote text.
 */
export const TEAM_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "name-team-you-built",
		unitId: "team",
		title: "Name the Team You Actually Built",
		summary: "FAR 9.601 JV vs prime-sub vs MAS CTA — privity and governance.",
		intro:
			"Capture slides love the word “team.” The FAR and GSA care about the legal form you actually built: who submits the offer, who signs, who holds privity with the Government, and who remains fully responsible for performance. Start here so every later chapter — workshare, past performance, flowdowns — attaches to the right structure.",
		tags: ["definition", "contrast", "far-9-6"],
		readingMinutes: 7,
		suggestedOrder: 1,
		pieces: [
			{
				id: "far-9601-two-forms",
				title: "Two FAR team forms — and a third MAS path",
				story:
					"The capture slide says “joint venture,” but only one company will submit the offer, sign the contract, and issue the other company a subcontract after award.",
				is: "FAR 9.601 recognizes two contractor team arrangements: (1) a partnership or joint venture that itself acts as the potential prime, or (2) a potential prime that teams with companies that will act as its subcontractors for a specified contract or acquisition program. A GSA Multiple Award Schedule Contractor Team Arrangement is a different model: each CTA member holds its own Schedule contract and acts as a prime for the portion it performs; the CTA lead does not turn the other members into its subcontractors.",
				isNot:
					"Team labeling is not a branding choice. A lead contractor that alone submits, signs, and bears prime risk is not a JV merely because the slide says so. An SBA mentor-protégé agreement is not itself one of the FAR 9.601 forms, and a MAS CTA is not a FAR 9.6 prime/sub team.",
				fits: "Open every pursuit by naming the structure out loud — JV as offeror, prime with named subs, or MAS CTA — before you assign workshare, proposal access, or eligibility claims.",
				judgment:
					"If shared prime-level governance, liability, accounting, and proposal responsibilities are missing, document a prime/sub team and disclose it that way.",
				checklist: [
					"Identify who submits the offer and who signs the award instrument",
					"Map privity: Government↔prime (or each MAS CTA member) vs prime↔sub only",
					"Confirm the label matches legal and operational reality before proposal text freezes",
				],
				citation: "FAR 9.601",
				sourceUrl: "https://www.acquisition.gov/far/9.601",
				sourceKind: "controlling-authority",
			},
			{
				id: "prime-owns-performance",
				title: "The prime still owns performance",
				is: "In a FAR 9.6 prime/sub team, the Government’s right to hold the prime fully responsible for performance is preserved regardless of the team arrangement. Naming or evaluating a subcontractor does not create a Government–subcontractor contract; the prime manages that relationship through its subcontract.",
				isNot:
					"Responsibility does not shift to whichever teammate performs the largest labor percentage, and agency evaluation of a sub does not create shared contractual accountability with the Government.",
				fits: "Keep this accountability frame on the wall when someone treats a named specialist as a second prime or assumes the agency will “manage the sub directly.”",
				citation: "FAR 9.604(e)",
				sourceUrl: "https://www.acquisition.gov/far/9.604",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 9.601 — Contractor team arrangements",
				url: "https://www.acquisition.gov/far/9.601",
				kind: "controlling-authority",
			},
			{
				label: "FAR 9.604 — Limitations",
				url: "https://www.acquisition.gov/far/9.604",
				kind: "controlling-authority",
			},
			{
				label: "GSA — MAS Contractor Team Arrangements",
				url: "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/schedule-features/contractor-team-arrangements",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "before-data-room",
		unitId: "team",
		title: "Before the Data Room Opens",
		summary: "NDA → controlled disclosure → definite teaming, workshare, and exclusivity.",
		intro:
			"Most teaming failures begin before the proposal outline exists: proprietary information moves without controls, workshare stays “approximately,” and exclusivity sprawls across an agency. Fix the paper and the process before the data room opens.",
		tags: ["field-guide", "decision", "teaming-agreement", "nda"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "nda-then-disclose",
				title: "Purpose-limited NDA, then controlled disclosure",
				story:
					"A prospective teammate asks for your solution architecture, labor build, and customer strategy before selection. The parties have only exchanged a generic one-line confidentiality email.",
				is: "An ordinary teammate exchange is not automatically protected by the FAR. Practical secrecy measures include a purpose-limited NDA, marking, need-to-know access, controlled sub-tier disclosure, and return or destruction terms. Federal trade-secret status under 18 U.S.C. § 1839(3) still requires the owner to take reasonable measures to keep qualifying information secret.",
				isNot:
					"A one-line “keep this confidential” email is not a substitute for reasonable measures, and the FAR does not create a blanket private NDA between teammates.",
				fits: "Gate proprietary solution and pricing detail behind signed NDAs and a disclosure log before any data-room upload.",
				checklist: [
					"Execute a purpose-limited NDA before architecture, pricing, or customer strategy leave the building",
					"Mark, compartment, and log what each teammate receives",
					"Define sub-tier disclosure rules and return/destruction on pursuit end",
				],
				citation: "18 U.S.C. § 1839(3)",
				sourceUrl:
					"https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title18-section1839",
				sourceKind: "controlling-authority",
			},
			{
				id: "definite-teaming-terms",
				title: "Definite teaming terms beat “agree to agree”",
				is: "FAR 9.603 recognizes identified, fully disclosed contractor teams; it does not supply missing private terms or decide enforceability. Whether a teaming agreement or a particular promise is enforceable depends on governing state law and the agreement’s language. Material workshare, price, statement of work, duration, and termination left for later “good-faith negotiation” often leave you with an agreement to agree — not a subcontract you can rely on in the proposal.",
				isNot:
					"FAR recognition of a team does not fill in missing subcontract terms, and naming a teammate in the proposal does not make the contracting officer the enforcer of your private workshare percentage.",
				fits: "Before proposal reliance, push for definite scope, workshare, exclusivity bounds, release triggers, and a counsel-reviewed governing-law clause.",
				judgment:
					"Broad exclusivity across an entire agency in exchange for undefined workshare is a capture tax, not a deal — narrow exclusivity to the pursuit and make workshare measurable.",
				citation: "FAR 9.603",
				sourceUrl: "https://www.acquisition.gov/far/9.603",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 9.603 — Policy",
				url: "https://www.acquisition.gov/far/9.603",
				kind: "controlling-authority",
			},
			{
				label: "Cyberlock Consulting v. Information Experts (CA4)",
				url: "https://www.ca4.uscourts.gov/Opinions/Unpublished/131599.U.pdf",
				kind: "decision",
			},
			{
				label: "DOJ — Antitrust laws and you",
				url: "https://www.justice.gov/atr/antitrust-laws-and-you",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "can-team-bid",
		unitId: "team",
		title: "Can This Team Bid This Work?",
		summary: "Size/status, set-aside structure, JV readiness, and affiliate OCI.",
		intro:
			"A teammate can be excellent and still be the wrong vehicle for this solicitation. Run eligibility as a gate — acquisition-specific size and status, lawful set-aside path, JV readiness, and affiliate-aware OCI — before you lock proposal access or represent the offeror.",
		tags: ["decision", "failure-mode", "set-aside", "oci"],
		readingMinutes: 9,
		suggestedOrder: 3,
		pieces: [
			{
				id: "set-aside-path",
				title: "Pick a lawful path for the actual offeror",
				story:
					"The teammate is described as “small,” has an approved mentor-protégé agreement, and the large company wants on the set-aside somehow.",
				is: "On a small-business set-aside, the offeror itself must be eligible for that acquisition. Practical large-company paths usually include subcontracting to an eligible small prime or forming a qualifying joint venture that is separately identified with its own UEI and CAGE in SAM. An approved mentor-protégé relationship may enable a qualifying JV; it is not a pursuit-ready JV by itself.",
				isNot:
					"Bidding in the large company’s name while using a small teammate’s status to represent the offeror as small is not a path. Small-business labels are not interchangeable across NAICS and programs, and “we have an MPA” is not “we have a JV that can submit.”",
				fits: "Decide the offeror identity and set-aside theory before solution architecture freezes around the wrong prime.",
				citation: "FAR 19.703",
				sourceUrl: "https://www.acquisition.gov/far/19.703",
				sourceKind: "controlling-authority",
			},
			{
				id: "affiliate-oci-gate",
				title: "Screen the corporate family, not just the logo",
				is: "Before locking a teammate, complete a documented organizational-conflict-of-interest review that reaches affiliates with advisory, requirements-development, or competitor-information roles at the target agency. Hold proposal access until counsel can determine whether disclosure, mitigation, firewall, or replacement is required. Under FAR 9.504, the contracting officer determines whether a significant potential conflict exists and must resolve it before award.",
				isNot:
					"Entity separation inside a corporate family is not an automatic OCI safe harbor, and assuming every affiliate relationship is automatically disqualifying — then concealing the teammate — is not diligence.",
				fits: "Run OCI as a precommitment gate alongside size/status, not as a last-week proposal appendix.",
				checklist: [
					"Map affiliates with advisory or requirements work at the customer",
					"Document conflict theory, mitigation, and disclosure plan before proposal access",
					"Keep make-or-buy, consent, and OCI as separate gates — one approval does not waive another",
				],
				citation: "FAR 9.504",
				sourceUrl: "https://www.acquisition.gov/far/9.504",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 19.703 — Eligibility",
				url: "https://www.acquisition.gov/far/19.703",
				kind: "controlling-authority",
			},
			{
				label: "SBA — Joint ventures",
				url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/joint-ventures",
				kind: "guidance",
			},
			{
				label: "FAR 9.504 — Contracting officer responsibilities",
				url: "https://www.acquisition.gov/far/9.504",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "workshare-compliance",
		unitId: "team",
		title: "Workshare Is Compliance Architecture",
		summary: "Limitation on subcontracting math plus ostensible-subcontractor risk.",
		intro:
			"Workshare is not a pie chart for the capture review. On set-asides it is compliance architecture: limitation-on-subcontracting math through lower tiers, and a separate ostensible-subcontractor test about who truly controls primary and vital performance.",
		tags: ["advanced", "contrast", "los", "ostensible-subcontractor"],
		readingMinutes: 10,
		suggestedOrder: 4,
		pieces: [
			{
				id: "los-math",
				title: "Model payments, not just first-tier percentages",
				story:
					"The percentages on the slide total 100%, but some work flows through a similarly situated entity and then back to the large teammate.",
				is: "Where FAR 52.219-14 (Limitation on Subcontracting) applies, compliance is measured against the applicable percentage of the amount paid by the Government for contract performance — including how work and payments move through similarly situated entities and lower tiers. Services and general construction are not identical regimes; model the rule that actually appears in the solicitation.",
				isNot:
					"A simple “prime self-performance %” on a first-tier chart is not the whole test, and routing work through a similarly situated entity does not automatically sanitize a large teammate’s downstream share.",
				fits: "Build LOS into solution design, pricing, and subcontract negotiations before the proposal promises a workshare the math cannot support.",
				citation: "FAR 52.219-14",
				sourceUrl: "https://www.acquisition.gov/far/52.219-14",
				sourceKind: "controlling-authority",
			},
			{
				id: "ostensible-sub",
				title: "Ostensible subcontractor is about control, not labels",
				is: "On covered small-business set-asides, SBA’s ostensible-subcontractor affiliation analysis asks whether a subcontractor is performing primary and vital requirements or the small prime is unusually reliant on the sub — looking at the totality of the circumstances (key managers, solution ownership, transition knowledge, staffing, and payment flows), not the contract label alone.",
				isNot:
					"Calling a large incumbent a “subcontractor” does not insulate a team that leaves the small prime unable to perform independently. Paying the large firm most of the contract dollars while it supplies nearly all key managers and technical staff is a warning pattern, not a footnote.",
				fits: "Pressure-test set-aside teams for both LOS arithmetic and ostensible-sub risk before you freeze the org chart.",
				judgment:
					"If the small prime cannot explain how it will manage, staff, and perform primary work without the large teammate, redesign before proposal submission.",
				citation: "13 CFR 121.103",
				sourceUrl: "https://www.ecfr.gov/current/title-13/section-121.103",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 52.219-14 — Limitation on Subcontracting",
				url: "https://www.acquisition.gov/far/52.219-14",
				kind: "controlling-authority",
			},
			{
				label: "13 CFR 121.103 — How does SBA determine affiliation?",
				url: "https://www.ecfr.gov/current/title-13/section-121.103",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "teammate-evaluatable",
		unitId: "team",
		title: "Make the Teammate Evaluatable",
		summary: "Past performance and personnel tied to actual work — plus required commitments.",
		intro:
			"A specialist on the slide is not yet an evaluated resource. Connect teammate past performance and key people to the work they will actually perform, and obtain every solicitation-required commitment document — a teaming agreement is not a substitute.",
		tags: ["field-guide", "past-performance", "key-personnel"],
		readingMinutes: 7,
		suggestedOrder: 5,
		pieces: [
			{
				id: "pp-tied-to-scope",
				title: "Past performance follows the work, not the logo",
				story:
					"Your large prime lacks one highly relevant reference. A proposed major subcontractor has excellent performance on nearly identical work, and capture wants to present it as the prime’s own record.",
				is: "Agencies evaluate past performance under the solicitation’s stated rules and may consider relevant information about the offeror, major subcontractors, predecessors, and key personnel when permitted. Strong teammate evidence belongs in the proposal when it is accurately attributed and clearly connected to that entity’s proposed share of the work.",
				isNot:
					"A teammate’s contracts do not merge into the prime’s record under FAR 9.6. Listing a specialist’s reference as the prime’s own contract — or claiming relevance from a logo with no meaningful assigned scope — invents evaluatable history the record does not support.",
				fits: "After workshare settles, build the past-performance volume as a map from entity → prior role → proposed role.",
				citation: "FAR 15.305",
				sourceUrl: "https://www.acquisition.gov/far/15.305",
				sourceKind: "controlling-authority",
			},
			{
				id: "commitment-letters",
				title: "Required commitments beat teaming language",
				is: "When Section L requires resumes and signed availability commitments for named key personnel — including people employed by a subcontractor — obtain and accurately document those commitments. Separately bind the teammate to availability, notice, and replacement duties in the subcontract or teaming vehicle.",
				isNot:
					"There is no general exemption for subcontractor key personnel. A teaming agreement that contains no commitment is not a substitute for a solicitation-required commitment letter.",
				fits: "Treat missing teammate commitment letters as a compliance stop, not a “we’ll clean it up in Red Team.”",
				citation: "IT Objects, LLC, B-418012, B-418012.2",
				sourceUrl: "https://www.gao.gov/products/b-418012%2Cb-418012.2",
				sourceKind: "decision",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.305 — Proposal evaluation",
				url: "https://www.acquisition.gov/far/15.305",
				kind: "controlling-authority",
			},
			{
				label: "IT Objects, LLC, B-418012",
				url: "https://www.gao.gov/products/b-418012%2Cb-418012.2",
				kind: "decision",
			},
		],
	}),

	chapter({
		id: "subcontracting-plan-promise",
		unitId: "team",
		title: "The Subcontracting Plan Is a Performance Promise",
		summary: "Goals, administration, reporting, and good faith — including commercial-plan FY scope.",
		intro:
			"On unrestricted awards that require a small-business subcontracting plan, the plan is not a marketing appendix. It commits the company to goals, methods, administration, records, and reporting — and proposed small businesses are not disposable after award.",
		tags: ["field-guide", "decision", "subcontracting-plan"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "plan-contents",
				title: "What the plan actually commits",
				story:
					"Capture treats the individual subcontracting plan as an aspirational percentage table that disappears after award.",
				is: "When an individual small-business subcontracting plan is required, FAR 19.704 expects goals by category, a description of the method used to develop those goals and to identify potential sources, efforts to ensure equitable opportunity, the name of an administrator, a description of records, and assurances on reporting and good-faith treatment of small businesses used in preparing the bid or proposal — among other required contents.",
				isNot:
					"One undifferentiated “small” goal is not a plan. A percentage table without administration, records, or reporting is not compliance. Proposed small businesses are not free options the prime may discard without consequence.",
				fits: "Negotiate the plan as an operational promise owned by contracts and supplier diversity, not as a capture artifact.",
				citation: "FAR 19.704",
				sourceUrl: "https://www.acquisition.gov/far/19.704",
				sourceKind: "controlling-authority",
			},
			{
				id: "commercial-plan-scope",
				title: "Commercial plans have a different clock",
				is: "A commercial subcontracting plan covers the company’s fiscal year commercial sales rather than a single contract’s life. Know which plan type the solicitation and your purchasing system actually require, and keep reporting aligned to that scope.",
				isNot:
					"Treating every plan as interchangeable — or assuming commercial-plan FY metrics satisfy an individual contract plan’s deal-specific goals without checking — invites reporting failure.",
				fits: "Confirm plan type at bid/no-bid and again at award kickoff before eSRS and supplier commitments diverge.",
				citation: "FAR 19.704; FAR 19.702",
				sourceUrl: "https://www.acquisition.gov/far/19.704",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 19.704 — Subcontracting plan requirements",
				url: "https://www.acquisition.gov/far/19.704",
				kind: "controlling-authority",
			},
			{
				label: "FAR 19.702 — Statutory requirements",
				url: "https://www.acquisition.gov/far/19.702",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "award-changes-paper",
		unitId: "team",
		title: "Award Changes the Paper, Not the Responsibility",
		summary: "Flowdowns, consent, CPSR, and member changes — the prime still owns performance.",
		intro:
			"Winning converts proposal promises into subcontract paper. Clause flowdowns, make-or-buy, consent, and purchasing-system controls are deliberate decisions — none of them create Government–sub privity or relieve the prime of performance responsibility.",
		tags: ["advanced", "field-guide", "flowdowns", "consent"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "flowdowns-consent",
				title: "Deliberate flowdowns and required consent",
				story:
					"The team wins. Someone suggests copying every prime clause into the subcontract because “our approved purchasing system covers consent anyway.”",
				is: "Build the subcontract clause by clause: flow down what the prime contract and law require for that subcontract type, support make-or-buy decisions when required, and obtain subcontract consent when FAR 52.244-2 or the contract demands it. An approved purchasing system may reduce consent events; it does not waive OCI diligence, make-or-buy duties, or the need to read the prime’s actual consent clause.",
				isNot:
					"Blanket copy-paste of every prime clause is not thoughtful flowdown. Purchasing-system approval is not Government endorsement of every subcontract term. Consent is not privity between the Government and the sub.",
				fits: "Run post-award subcontract negotiation as a contracts workstream with a clause matrix, not as a cut-and-paste from the prime.",
				citation: "FAR 52.244-2; FAR 44.402; FAR 15.407-2",
				sourceUrl: "https://www.acquisition.gov/far/52.244-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "member-changes",
				title: "Changing members still leaves the promise intact",
				is: "Post-award teammate replacement, MAS CTA member changes, and workshare shifts must follow the solicitation, contract, and vehicle rules that govern disclosure and consent. The performance promise the Government bought — and the prime’s responsibility for it — remains unless the contract is properly modified.",
				isNot:
					"Award does not license silent substitution of the evaluated team, and vehicle logos do not authorize member swaps without reading the ordering contract and CTA paperwork.",
				fits: "Treat team changes as acquisition events with the same seriousness as the original proposal disclosure.",
				checklist: [
					"Map required flowdowns before first subcontract draft",
					"Identify consent and notification triggers in the prime and ordering vehicle",
					"Document teammate changes with the same disclosure discipline used pre-award",
				],
				citation: "GSA MAS CTA guidance; FAR 9.604(e)",
				sourceUrl:
					"https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/schedule-features/contractor-team-arrangements",
				sourceKind: "guidance",
			},
		],
		furtherReading: [
			{
				label: "FAR 52.244-2 — Subcontracts",
				url: "https://www.acquisition.gov/far/52.244-2",
				kind: "controlling-authority",
			},
			{
				label: "FAR 44.402 — Policy (commercial products/services)",
				url: "https://www.acquisition.gov/far/44.402",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.407-2 — Make-or-buy programs",
				url: "https://www.acquisition.gov/far/15.407-2",
				kind: "controlling-authority",
			},
		],
	}),
];
