import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Team & Subcontract shelf — structure → bind/screen → allocate → credibility → performance.
 * Paraphrase only; cite FAR/SBA/GSA/court anchors without inventing quote text.
 *
 * Reading shape: each piece is a definition card (term title + expanded glossary
 * teach + optional Watch for + citation/quote).
 */
export const TEAM_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "name-team-you-built",
		unitId: "team",
		title: "Contractor team arrangements, joint ventures, and prime–sub structures",
		summary:
			"Defines FAR 9.601 team forms and who owns performance and privity under each structure.",
		intro:
			"Terms for the legal structures behind “the team”: who submits, who signs, who holds privity with the Government, and who remains responsible for performance.",
		tags: ["far-9-6"],
		readingMinutes: 7,
		suggestedOrder: 1,
		pieces: [
			{
				id: "far-9601-two-forms",
				title: "Contractor team arrangement (FAR 9.601)",
				teach: "A contractor team arrangement under FAR 9.601 is one of two forms: (1) a partnership or joint venture that itself acts as the potential prime, or (2) a potential prime that teams with companies that will act as its subcontractors for a specified contract or acquisition program. A GSA Multiple Award Schedule Contractor Team Arrangement is a different model: each CTA member holds its own Schedule contract and acts as a prime for the portion it performs; the CTA lead does not turn the other members into its subcontractors. Name the structure — JV as offeror, prime with named subs, or MAS CTA — before assigning workshare, proposal access, or eligibility claims. Identify who submits the offer and who signs the award instrument, and map privity: Government↔prime (or each MAS CTA member) versus prime↔sub only.",
				watchFor:
					"Don’t treat “team” as a branding choice. A lead that alone submits, signs, and bears prime risk is not a JV because the slide says so. An SBA mentor-protégé agreement is not itself one of the FAR 9.601 forms, and a MAS CTA is not a FAR 9.6 prime/sub team. If shared prime-level governance, liability, accounting, and proposal responsibilities are missing, the structure is prime/sub — not a JV.",
				citation: "FAR 9.601",
				sourceUrl: "https://www.acquisition.gov/far/9.601",
				sourceKind: "controlling-authority",
			},
			{
				id: "prime-owns-performance",
				title: "Prime contractor performance responsibility",
				teach: "In a FAR 9.6 prime/sub team, the Government’s right to hold the prime fully responsible for performance is preserved regardless of the team arrangement. Naming or evaluating a subcontractor does not create a Government–subcontractor contract; the prime manages that relationship through its subcontract. Accountability stays with the prime even when a named specialist performs the largest share of the work.",
				watchFor:
					"Responsibility does not shift to whichever teammate performs the largest labor percentage, and agency evaluation of a sub does not create shared contractual accountability with the Government.",
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
		title: "NDAs, controlled disclosure, and definite teaming terms",
		summary:
			"Defines the pre-data-room sequence: purpose-limited NDA, controlled disclosure, then locked workshare and exclusivity.",
		intro:
			"Terms for protecting proprietary information and binding private teaming terms before proposal reliance.",
		tags: ["teaming-agreement", "nda"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "nda-then-disclose",
				title: "Purpose-limited NDA and controlled disclosure",
				teach: "A purpose-limited NDA is a confidentiality agreement that restricts use and disclosure of proprietary information to defined teaming purposes. An ordinary teammate exchange is not automatically protected by the FAR. Practical secrecy measures include marking, need-to-know access, controlled sub-tier disclosure, and return or destruction terms. Federal trade-secret status under 18 U.S.C. § 1839(3) still requires the owner to take reasonable measures to keep qualifying information secret. Execute the NDA before architecture, pricing, or customer strategy leave the building; mark, compartment, and log what each teammate receives.",
				watchFor:
					"A one-line “keep this confidential” email is not a substitute for reasonable measures, and the FAR does not create a blanket private NDA between teammates.",
				citation: "18 U.S.C. § 1839(3)",
				sourceUrl:
					"https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title18-section1839",
				sourceKind: "controlling-authority",
			},
			{
				id: "definite-teaming-terms",
				title: "Definite teaming terms",
				teach: "Definite teaming terms are concrete, enforceable commitments in a teaming agreement or subcontract — scope, workshare, price, duration, termination, and exclusivity bounds — rather than promises to negotiate later. FAR 9.603 recognizes identified, fully disclosed contractor teams; it does not supply missing private terms or decide enforceability. Whether a teaming agreement or a particular promise is enforceable depends on governing state law and the agreement’s language. Material terms left for later “good-faith negotiation” often leave an agreement to agree, not a subcontract you can rely on in the proposal.",
				watchFor:
					"FAR recognition of a team does not fill in missing subcontract terms, and naming a teammate in the proposal does not make the contracting officer the enforcer of your private workshare percentage. Broad exclusivity across an entire agency in exchange for undefined workshare is not a deal — narrow exclusivity to the pursuit and make workshare measurable.",
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
		title: "Team eligibility, set-aside paths, and affiliate OCI",
		summary:
			"Defines size/status, set-aside offeror structure, and affiliate organizational conflicts that can kill a team before bid.",
		intro:
			"Terms for whether the proposed offeror and teammates may bid this acquisition — size and status, eligibility path, teaming readiness, and affiliate-aware OCI.",
		tags: ["set-aside", "oci"],
		readingMinutes: 9,
		suggestedOrder: 3,
		pieces: [
			{
				id: "set-aside-path",
				title: "Small-business set-aside offeror path",
				teach: "A small-business set-aside offeror path is the lawful structure through which an eligible small business (or qualifying joint venture) submits the offer on a set-aside acquisition. On a small-business set-aside, the offeror itself must be eligible for that acquisition. Practical large-company paths usually include subcontracting to an eligible small prime or forming a qualifying joint venture that is separately identified with its own UEI and CAGE in SAM. An approved mentor-protégé relationship may enable a qualifying JV; it is not a pursuit-ready JV by itself.",
				watchFor:
					"Don’t bid in the large company’s name while using a small teammate’s status to represent the offeror as small. Small-business labels are not interchangeable across NAICS and programs, and “we have an MPA” is not “we have a JV that can submit.”",
				citation: "FAR 19.703",
				sourceUrl: "https://www.acquisition.gov/far/19.703",
				sourceKind: "controlling-authority",
			},
			{
				id: "affiliate-oci-gate",
				title: "Affiliate-aware organizational conflict of interest (OCI)",
				teach: "An affiliate-aware OCI review examines whether a teammate or its corporate affiliates hold advisory, requirements-development, or competitor-information roles at the target agency that could impair fair competition or contract performance. Under FAR 9.504, the contracting officer determines whether a significant potential conflict exists and must resolve it before award. Map affiliates with advisory or requirements work at the customer; document conflict theory, mitigation, and disclosure plan before proposal access. OCI screening is a precommitment gate alongside size and status — not a last-week proposal appendix.",
				watchFor:
					"Entity separation inside a corporate family is not an automatic OCI safe harbor — and assuming every affiliate relationship is automatically disqualifying, then concealing the teammate, is not diligence.",
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
		title: "Limitation on subcontracting and ostensible subcontractors",
		summary:
			"Defines LOS math and ostensible-subcontractor risk on set-aside teams.",
		intro:
			"Terms for workshare as compliance architecture on set-asides — limitation-on-subcontracting math and ostensible-subcontractor affiliation.",
		tags: ["los", "ostensible-subcontractor"],
		readingMinutes: 10,
		suggestedOrder: 4,
		pieces: [
			{
				id: "los-math",
				title: "Limitation on subcontracting (LOS)",
				teach: "Limitation on subcontracting (LOS) is the compliance rule in FAR 52.219-14 that caps how much of contract performance a small-business concern may subcontract, measured against the applicable percentage of the amount paid by the Government for contract performance — including how work and payments move through similarly situated entities and lower tiers. Services and general construction are not identical regimes; model the rule that actually appears in the solicitation. Build LOS into solution design, pricing, and subcontract negotiations before the proposal promises a workshare the math cannot support.",
				watchFor:
					"A simple “prime self-performance %” on a first-tier chart is not the whole test. Routing work through a similarly situated entity does not automatically sanitize a large teammate’s downstream share.",
				citation: "FAR 52.219-14",
				sourceUrl: "https://www.acquisition.gov/far/52.219-14",
				sourceKind: "controlling-authority",
			},
			{
				id: "ostensible-sub",
				title: "Ostensible subcontractor",
				teach: "An ostensible subcontractor is a subcontractor that SBA treats as affiliated with the small prime because it performs primary and vital requirements or the small prime is unusually reliant on the sub — looking at the totality of the circumstances (key managers, solution ownership, transition knowledge, staffing, and payment flows), not the contract label alone. On covered small-business set-asides, pressure-test teams for both LOS arithmetic and ostensible-sub risk before freezing the org chart. If the small prime cannot explain how it will manage, staff, and perform primary work without the large teammate, the structure needs redesign.",
				watchFor:
					"Calling a large incumbent a “subcontractor” does not insulate a team that leaves the small prime unable to perform independently. Paying the large firm most of the contract dollars while it supplies nearly all key managers and technical staff is a warning pattern, not a footnote.",
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
		title: "Teammate past performance and key-personnel commitments",
		summary:
			"Defines when teammate credentials are evaluable — tied to proposed work and backed by required commitment letters.",
		intro:
			"Terms for making teammate past performance and key personnel evaluatable under the solicitation — and obtaining required commitment documents.",
		tags: ["past-performance", "key-personnel"],
		readingMinutes: 7,
		suggestedOrder: 5,
		pieces: [
			{
				id: "pp-tied-to-scope",
				title: "Teammate past performance attribution",
				teach: "Teammate past performance attribution is the practice of connecting a subcontractor’s or partner’s prior contracts to the work that entity will actually perform under the proposal — accurately labeled and scoped — rather than presenting it as the prime’s own record. Agencies evaluate past performance under the solicitation’s stated rules and may consider relevant information about the offeror, major subcontractors, predecessors, and key personnel when permitted. After workshare settles, build the past-performance volume as a map from entity → prior role → proposed role.",
				watchFor:
					"A teammate’s contracts do not merge into the prime’s record under FAR 9.6. Listing a specialist’s reference as the prime’s own contract — or claiming relevance from a logo with no meaningful assigned scope — invents evaluatable history the record does not support.",
				citation: "FAR 15.305",
				sourceUrl: "https://www.acquisition.gov/far/15.305",
				sourceKind: "controlling-authority",
			},
			{
				id: "commitment-letters",
				title: "Key-personnel commitment letters",
				teach: "A key-personnel commitment letter is a signed document confirming that named individuals — including those employed by a subcontractor — are available to perform the proposed roles when Section L requires it. When the solicitation demands resumes and signed availability commitments, obtain and accurately document them. Separately bind the teammate to availability, notice, and replacement duties in the subcontract or teaming vehicle. A teaming agreement that contains no commitment is not a substitute for a solicitation-required commitment letter.",
				watchFor:
					"There is no general exemption for subcontractor key personnel.",
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
		title: "Individual and commercial small-business subcontracting plans",
		summary:
			"Defines plan contents, administration, reporting, and good-faith duties for individual and commercial plans.",
		intro:
			"Terms for what a small-business subcontracting plan commits the prime to — goals, administration, records, reporting, and good-faith treatment of proposed small businesses.",
		tags: ["subcontracting-plan"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "plan-contents",
				title: "Individual subcontracting plan contents",
				teach: "An individual small-business subcontracting plan is the contract-specific document required under FAR 19.704 when an unrestricted award triggers the plan requirement. It commits the company to goals by category, a description of the method used to develop those goals and to identify potential sources, efforts to ensure equitable opportunity, the name of an administrator, a description of records, and assurances on reporting and good-faith treatment of small businesses used in preparing the bid or proposal — among other required contents. It is an operational promise, not a capture artifact.",
				watchFor:
					"One undifferentiated “small” goal is not a plan. A percentage table without administration, records, or reporting is not compliance. Proposed small businesses are not free options the prime may discard without consequence.",
				citation: "FAR 19.704",
				sourceUrl: "https://www.acquisition.gov/far/19.704",
				sourceKind: "controlling-authority",
			},
			{
				id: "commercial-plan-scope",
				title: "Commercial subcontracting plan",
				teach: "A commercial subcontracting plan covers the company’s fiscal year commercial sales rather than a single contract’s life. Know which plan type the solicitation and your purchasing system actually require, and keep reporting aligned to that scope. Confirm plan type at bid/no-bid and again at award kickoff before eSRS and supplier commitments diverge.",
				watchFor:
					"Don’t treat every plan as interchangeable — or assume commercial-plan FY metrics satisfy an individual contract plan’s deal-specific goals without checking. That mix-up invites reporting failure.",
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
		title: "Subcontract flowdowns, consent, and post-award teammate changes",
		summary:
			"Defines clause flowdowns, consent/CPSR constraints, and how member changes still leave the prime responsible.",
		intro:
			"Terms for converting proposal promises into subcontract paper after award — clause flowdowns, consent, and teammate changes — without creating Government–sub privity.",
		tags: ["flowdowns", "consent"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "flowdowns-consent",
				title: "Subcontract clause flowdowns and consent",
				teach: "Subcontract clause flowdowns are the deliberate transfer of prime-contract and statutory terms to a subcontract, clause by clause, for that subcontract type. Subcontract consent under FAR 52.244-2 is the contracting officer’s approval of certain subcontracts when the prime contract or law requires it. Build the subcontract with a clause matrix: flow down what the prime contract and law require, support make-or-buy decisions when required, and obtain consent when demanded. An approved purchasing system may reduce consent events; it does not waive OCI diligence, make-or-buy duties, or the need to read the prime’s actual consent clause.",
				watchFor:
					"Blanket copy-paste of every prime clause is not thoughtful flowdown. Purchasing-system approval is not Government endorsement of every subcontract term. Consent is not privity between the Government and the sub.",
				citation: "FAR 52.244-2; FAR 44.402; FAR 15.407-2",
				sourceUrl: "https://www.acquisition.gov/far/52.244-2",
				sourceKind: "controlling-authority",
			},
			{
				id: "member-changes",
				title: "Post-award teammate changes",
				teach: "A post-award teammate change is a substitution, addition, or workshare shift among team members after contract award. Such changes must follow the solicitation, contract, and vehicle rules that govern disclosure and consent. The performance promise the Government bought — and the prime’s responsibility for it — remains unless the contract is properly modified. Map required flowdowns before first subcontract draft; identify consent and notification triggers in the prime and ordering vehicle; document teammate changes with the same disclosure discipline used pre-award.",
				watchFor:
					"Award does not license silent substitution of the evaluated team, and vehicle logos do not authorize member swaps without reading the ordering contract and CTA paperwork.",
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
