import type { QuizQuestion } from "./types";

/**
 * Capture-floor glossary for a large-Prime capture teammate: acronyms, vehicles,
 * solicitation types, and FAR concepts you need before running a deal.
 * Kept separate from lifecycle scenarios so the Basics slice can grow as a lexicon.
 */
export const FUNDAMENTALS_QUESTIONS: QuizQuestion[] = [
	{
		id: "fund-far-vs-dfars",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is the FAR, and how does the DFARS relate to it for DoD work?",
		options: [
			{
				id: "a",
				text: "The FAR is the governmentwide acquisition regulation; the DFARS supplements the FAR with DoD-unique requirements that apply in addition to the FAR on DoD contracts.",
				correct: true,
			},
			{
				id: "b",
				text: "The DFARS replaces the FAR entirely whenever the buyer is a DoD component.",
				correct: false,
			},
			{
				id: "c",
				text: "The FAR only covers civilian agencies; DoD uses a completely separate code with no FAR clauses.",
				correct: false,
			},
			{
				id: "d",
				text: "FAR and DFARS are interchangeable labels for the same set of clauses.",
				correct: false,
			},
		],
		explanation:
			"The Federal Acquisition Regulation (FAR) is the primary rulebook for executive-agency acquisitions. DoD implements it through the Defense FAR Supplement (DFARS), which adds DoD-unique prescriptions and clauses on top of the FAR — it does not wipe the FAR away.",
		citation: "FAR 1.101",
		sourceUrl: "https://www.acquisition.gov/far/1.101",
		tags: ["FAR", "DFARS", "definition"],
	},
	{
		id: "fund-naics-definition",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What does a NAICS code do on a federal solicitation?",
		options: [
			{
				id: "a",
				text: "It classifies the industry of the work and sets the small-business size standard used for set-aside eligibility and size protests.",
				correct: true,
			},
			{
				id: "b",
				text: "It is the accounting code the agency uses to obligate funds on the contract.",
				correct: false,
			},
			{
				id: "c",
				text: "It identifies which GSA Schedule SIN the contractor must hold.",
				correct: false,
			},
			{
				id: "d",
				text: "It is the contractor's Unique Entity Identifier in SAM.gov.",
				correct: false,
			},
		],
		explanation:
			"NAICS (North American Industry Classification System) codes classify business activity. On a solicitation the contracting officer assigns a NAICS code (FAR 19.303), which drives the applicable SBA size standard — critical for set-asides, self-certification, and size challenges.",
		citation: "FAR 19.303",
		sourceUrl: "https://www.acquisition.gov/far/19.303",
		tags: ["naics", "size-standard", "small-business"],
	},
	{
		id: "fund-uei-cage",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "In SAM.gov registration, what are the UEI and CAGE code?",
		options: [
			{
				id: "a",
				text: "UEI is the 12-character Unique Entity Identifier that replaced DUNS; CAGE is a five-character location code assigned through SAM for the entity's physical site.",
				correct: true,
			},
			{
				id: "b",
				text: "UEI is the contract number; CAGE is the NAICS code for your primary line of business.",
				correct: false,
			},
			{
				id: "c",
				text: "UEI and CAGE are both optional marketing codes used only on capability statements.",
				correct: false,
			},
			{
				id: "d",
				text: "UEI is issued by Dun & Bradstreet annually; CAGE is your tax ID.",
				correct: false,
			},
		],
		explanation:
			"Since April 2022 the Unique Entity Identifier (UEI) from SAM.gov replaced DUNS as the primary entity ID. A CAGE (Commercial and Government Entity) code identifies a specific physical location and is issued as part of SAM registration — both show up constantly on proposals, teaming paperwork, and award systems.",
		citation: "FAR 52.204-7",
		sourceUrl: "https://www.acquisition.gov/far/52.204-7",
		tags: ["UEI", "CAGE", "sam-registration"],
	},
	{
		id: "fund-solicitation-types",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "How do an RFP, an RFQ, and an IFB differ?",
		options: [
			{
				id: "a",
				text: "RFP = negotiated proposals; RFQ = request for quotations (often simplified/schedule ordering); IFB = sealed bidding where price-focused bids are opened publicly.",
				correct: true,
			},
			{
				id: "b",
				text: "They are three names for the same Part 15 negotiated solicitation.",
				correct: false,
			},
			{
				id: "c",
				text: "IFB is only used for GWACs; RFP is only used under the SAT.",
				correct: false,
			},
			{
				id: "d",
				text: "RFQ responses are binding offers; RFP responses are non-binding market research.",
				correct: false,
			},
		],
		explanation:
			"FAR 2.101: solicitations under negotiation are RFPs (responses are proposals/offers); sealed-bid solicitations are IFBs (bids); simplified acquisitions and many schedule/vehicle buys use RFQs, and a quotation is not an offer until the Government issues an order.",
		citation: "FAR 2.101",
		sourceUrl: "https://www.acquisition.gov/far/2.101",
		tags: ["RFP", "RFQ", "IFB", "solicitation"],
	},
	{
		id: "fund-rfi-vs-sources-sought",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "For capture, what is the practical difference between an RFI and a sources sought notice?",
		options: [
			{
				id: "a",
				text: "Both are market-research tools (not awards); sources sought often probes capability/set-aside interest, while RFIs more often seek industry input on approach, feasibility, or draft requirements.",
				correct: true,
			},
			{
				id: "b",
				text: "An RFI is a binding solicitation; a sources sought is only for small businesses.",
				correct: false,
			},
			{
				id: "c",
				text: "Responding to either one forms a contract if the agency likes your answer.",
				correct: false,
			},
			{
				id: "d",
				text: "Sources sought notices require priced proposals; RFIs never allow capability statements.",
				correct: false,
			},
		],
		explanation:
			"Both sit under market research (FAR Part 10 / 15.201 exchanges). Neither awards a contract. Capture teams use sources sought to get on the record as a capable source (often influencing set-aside decisions) and RFIs to shape requirements — still non-binding.",
		citation: "FAR 10.001",
		sourceUrl: "https://www.acquisition.gov/far/10.001",
		tags: ["rfi", "sources-sought", "market-research"],
	},
	{
		id: "fund-idiq-definition",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is an IDIQ contract?",
		options: [
			{
				id: "a",
				text: "An Indefinite Delivery/Indefinite Quantity contract that sets umbrella terms and a ceiling, then issues work later via task or delivery orders.",
				correct: true,
			},
			{
				id: "b",
				text: "A one-time firm-fixed-price buy of a definite quantity with no ordering period.",
				correct: false,
			},
			{
				id: "c",
				text: "A grant or cooperative agreement outside the FAR.",
				correct: false,
			},
			{
				id: "d",
				text: "A subcontracting plan template required of all large primes.",
				correct: false,
			},
		],
		explanation:
			"FAR 16.504 IDIQs establish terms, scope, and usually a maximum, without buying a fixed quantity up front. The real competed work — and where capture often lives after a vehicle award — is the task/delivery order.",
		citation: "FAR 16.504",
		sourceUrl: "https://www.acquisition.gov/far/16.504",
		tags: ["IDIQ", "task-order", "definition"],
	},
	{
		id: "fund-task-order",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a task order (TO) on a multiple-award IDIQ or GWAC?",
		options: [
			{
				id: "a",
				text: "An order for a discrete scope of services placed against the parent vehicle, usually competed among holders under fair opportunity.",
				correct: true,
			},
			{
				id: "b",
				text: "The base IDIQ award document itself.",
				correct: false,
			},
			{
				id: "c",
				text: "A protest filed at GAO against the parent contract.",
				correct: false,
			},
			{
				id: "d",
				text: "A modification that permanently changes the FAR.",
				correct: false,
			},
		],
		explanation:
			"On MAC/IDIQ/GWAC vehicles, agencies place task orders (services) or delivery orders (supplies) for specific work. For multiple-award contracts, FAR 16.505 fair opportunity normally requires competing those orders among contract holders.",
		citation: "FAR 16.505",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["task-order", "fair-opportunity", "IDIQ"],
	},
	{
		id: "fund-fair-opportunity",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What does “fair opportunity” mean under FAR 16.505?",
		options: [
			{
				id: "a",
				text: "Each multiple-award IDIQ holder generally must get a fair opportunity to be considered for task/delivery orders, subject to listed exceptions.",
				correct: true,
			},
			{
				id: "b",
				text: "The agency must always use full and open competition on SAM.gov for every order, ignoring the vehicle.",
				correct: false,
			},
			{
				id: "c",
				text: "Only the incumbent on the parent contract may receive orders.",
				correct: false,
			},
			{
				id: "d",
				text: "Small businesses automatically receive every order under $10 million.",
				correct: false,
			},
		],
		explanation:
			"Fair opportunity is the order-level competition rule for multiple-award IDIQs (FAR 16.505(b)). Capture on vehicles is often order capture: knowing when fair opportunity applies — and when an exception might be argued — is day-one literacy for a Prime.",
		citation: "FAR 16.505",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["fair-opportunity", "FAR-16.505", "task-order"],
	},
	{
		id: "fund-mas-vs-gwac",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "How does a GSA Multiple Award Schedule (MAS / GSA Schedule) differ from a GWAC?",
		options: [
			{
				id: "a",
				text: "MAS is GSA’s commercial catalog-style schedule (Part 8.4 ordering); a GWAC is a governmentwide IT IDIQ established by an executive agent for task-order use across agencies.",
				correct: true,
			},
			{
				id: "b",
				text: "They are identical vehicles with different marketing names.",
				correct: false,
			},
			{
				id: "c",
				text: "MAS can only be used by GSA; GWACs can only be used by NASA.",
				correct: false,
			},
			{
				id: "d",
				text: "GWACs sell only products; MAS sells only services.",
				correct: false,
			},
		],
		explanation:
			"GSA MAS (Schedule) is the Federal Supply Schedule program with SIN-based offerings and Part 8.4 procedures. GWACs (Alliant, SEWP, etc.) are separate governmentwide IT IDIQs. Capture teams track both because buying path changes competition, teaming, and pricing posture.",
		citation: "FAR 8.402",
		sourceUrl: "https://www.acquisition.gov/far/8.402",
		tags: ["MAS", "GSA-Schedule", "GWAC"],
	},
	{
		id: "fund-bpa-definition",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a BPA (Blanket Purchase Agreement)?",
		options: [
			{
				id: "a",
				text: "A simplified charge-account style agreement (often against a Schedule) for recurring needs; it is not a standalone funded contract until orders are placed.",
				correct: true,
			},
			{
				id: "b",
				text: "A type of sealed-bid IFB used only for construction.",
				correct: false,
			},
			{
				id: "c",
				text: "An automatic stay that pauses performance after a protest.",
				correct: false,
			},
			{
				id: "d",
				text: "SBA’s mentor-protégé approval document.",
				correct: false,
			},
		],
		explanation:
			"BPAs (FAR 13.303 / Schedule BPAs under 8.405-3) streamline recurring buys. Holding or chasing a BPA matters for capture, but the BPA itself usually creates no obligation until an order lands.",
		citation: "FAR 13.303",
		sourceUrl: "https://www.acquisition.gov/far/13.303",
		tags: ["BPA", "definition", "GSA-Schedule"],
	},
	{
		id: "fund-named-vehicles",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Which pairing correctly matches common vehicles a large-Prime capture team tracks?",
		options: [
			{
				id: "a",
				text: "Alliant (GSA GWAC for enterprise IT services); NASA SEWP (GWAC for IT products/services); OASIS+ (GSA professional-services multi-award IDIQ family).",
				correct: true,
			},
			{
				id: "b",
				text: "Alliant is only for construction; SEWP is only for medical supplies; OASIS+ is a small-business set-aside grant program.",
				correct: false,
			},
			{
				id: "c",
				text: "Alliant, SEWP, and OASIS+ are three SINs on the same GSA Schedule contract.",
				correct: false,
			},
			{
				id: "d",
				text: "These names refer to DFARS clauses, not contract vehicles.",
				correct: false,
			},
		],
		explanation:
			"Named vehicles dominate IT and professional-services capture. Alliant (now Alliant 3) is GSA’s enterprise IT services GWAC; SEWP is NASA’s IT GWAC; OASIS+ is GSA’s professional-services IDIQ suite. Primes map pursuits to the vehicle before writing a win theme.",
		citation: "FAR 2.101",
		sourceUrl: "https://www.acquisition.gov/far/2.101",
		tags: ["Alliant", "SEWP", "OASIS", "GWAC"],
	},
	{
		id: "fund-contract-types",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Which statement about common contract types is accurate?",
		options: [
			{
				id: "a",
				text: "FFP puts cost risk largely on the contractor; T&M/LH pays for labor hours at fixed rates with less cost risk transfer; cost-reimbursement pays allowable costs plus a fee and needs more Government oversight.",
				correct: true,
			},
			{
				id: "b",
				text: "All federal contracts must be firm-fixed-price.",
				correct: false,
			},
			{
				id: "c",
				text: "Cost-reimbursement contracts never require certified cost or pricing data.",
				correct: false,
			},
			{
				id: "d",
				text: "T&M means the contractor is paid only if the Government accepts a finished product.",
				correct: false,
			},
		],
		explanation:
			"FAR Part 16 families: FFP, T&M/labor-hour, and cost-reimbursement (CPFF, CPAF, etc.) allocate risk differently. Capture and pricing leads choose pursuit posture based on the typed RFP — especially fee, ceiling, and audit exposure on cost-type work.",
		citation: "FAR 16.101",
		sourceUrl: "https://www.acquisition.gov/far/16.101",
		tags: ["FFP", "T&M", "cost-reimbursement", "contract-type"],
	},
	{
		id: "fund-oci-types",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What are the three classic Organizational Conflict of Interest (OCI) patterns under FAR Subpart 9.5?",
		options: [
			{
				id: "a",
				text: "Unequal access to information; biased ground rules (shaping the competition); impaired objectivity (judging your own work).",
				correct: true,
			},
			{
				id: "b",
				text: "Price realism; technical leveling; auctioneering.",
				correct: false,
			},
			{
				id: "c",
				text: "Pre-award protest; post-award protest; size protest.",
				correct: false,
			},
			{
				id: "d",
				text: "FFP; T&M; cost-plus.",
				correct: false,
			},
		],
		explanation:
			"FAR 9.505 frames OCI around unfair competitive advantage and impaired objectivity. Capture must spot unequal access, biased ground rules, and impaired objectivity early — especially when a Prime’s advisory work touches a later competition.",
		citation: "FAR 9.505",
		sourceUrl: "https://www.acquisition.gov/far/9.505",
		tags: ["oci", "far-9-5", "definition"],
	},
	{
		id: "fund-teaming-forms",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Prime/sub, CTA, and JV — which description is right?",
		options: [
			{
				id: "a",
				text: "Prime/sub: one offeror holds the contract and flows work to subs; CTA: Schedule contractors agree how they will team on an order; JV: a separate legal entity (or formally recognized JV) bids as the offeror.",
				correct: true,
			},
			{
				id: "b",
				text: "CTA and JV are identical; both always create a new corporation.",
				correct: false,
			},
			{
				id: "c",
				text: "A subcontractor always has privity of contract with the Government.",
				correct: false,
			},
			{
				id: "d",
				text: "Only small businesses may be primes; large firms may only be CTAs.",
				correct: false,
			},
		],
		explanation:
			"Large-Prime capture lives in teaming structure. Subs generally lack privity with the Government. GSA CTAs (FAR 9.601 / Schedule practice) differ from SBA joint ventures and mentor-protégé JVs — pick the form that matches eligibility and workshare rules.",
		citation: "FAR 9.601",
		sourceUrl: "https://www.acquisition.gov/far/9.601",
		tags: ["teaming", "CTA", "joint-venture", "prime-sub"],
	},
	{
		id: "fund-limitations-on-subcontracting",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Why do Limitations on Subcontracting matter when a large Prime teams under a small-business set-aside?",
		options: [
			{
				id: "a",
				text: "The small prime generally must self-perform a required portion of the work (with similarly situated entity rules); a large sub cannot silently absorb most of the contract.",
				correct: true,
			},
			{
				id: "b",
				text: "Large businesses may perform 100% of a total small-business set-aside as long as they are listed as a sub.",
				correct: false,
			},
			{
				id: "c",
				text: "Limitations on subcontracting only apply to commercial item buys under the micro-purchase threshold.",
				correct: false,
			},
			{
				id: "d",
				text: "They only restrict travel costs, not labor.",
				correct: false,
			},
		],
		explanation:
			"FAR 52.219-14 / 13 CFR 125.6 limitations on subcontracting keep set-aside work from being passed wholesale to other-than-small firms. Capture workshare models must respect the small prime’s required performance share and similarly situated entity math.",
		citation: "FAR 52.219-14",
		sourceUrl: "https://www.acquisition.gov/far/52.219-14",
		tags: ["limitations-on-subcontracting", "set-aside", "workshare"],
	},
	{
		id: "fund-set-aside-programs",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Which socioeconomic set-aside labels should a capture person recognize on SAM.gov notices?",
		options: [
			{
				id: "a",
				text: "Small business, 8(a), HUBZone, SDVOSB, WOSB/EDWOSB — each with distinct eligibility rules that can lock a large Prime out as prime.",
				correct: true,
			},
			{
				id: "b",
				text: "Only “small business” exists; the other labels are informal marketing tags.",
				correct: false,
			},
			{
				id: "c",
				text: "8(a) and HUBZone are protest forums, not set-aside programs.",
				correct: false,
			},
			{
				id: "d",
				text: "SDVOSB and WOSB apply only to GSA Schedule BPAs, never to open solicitations.",
				correct: false,
			},
		],
		explanation:
			"FAR Part 19 programs (and SBA rules) drive who can bid as prime. Large-Prime capture reads the set-aside line first: unrestricted vs total SB vs 8(a)/HUBZone/SDVOSB/WOSB changes the entire teaming map.",
		citation: "FAR 19.000",
		sourceUrl: "https://www.acquisition.gov/far/19.000",
		tags: ["set-aside", "8a", "hubzone", "SDVOSB", "WOSB"],
	},
	{
		id: "fund-mentor-protege",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is an SBA mentor-protégé joint venture in capture terms?",
		options: [
			{
				id: "a",
				text: "An SBA-approved pairing that can let a JV bid as small for certain set-asides, with the large mentor supporting a small protégé — approval timing is often the critical path.",
				correct: true,
			},
			{
				id: "b",
				text: "A mandatory teaming form for every GWAC task order.",
				correct: false,
			},
			{
				id: "c",
				text: "A protest venue that replaces GAO for size issues.",
				correct: false,
			},
			{
				id: "d",
				text: "A type of cost-reimbursement contract fee.",
				correct: false,
			},
		],
		explanation:
			"SBA’s All Small Mentor-Protégé Program (and related JV rules) is a core large-Prime pathway onto set-asides — but approvals take time. Capture calendars must not assume an MPP JV can stand up inside a three-week RFP.",
		citation: "13 CFR 125.9",
		sourceUrl: "https://www.ecfr.gov/current/title-13/chapter-I/part-125/section-125.9",
		tags: ["mentor-protege", "joint-venture", "small-business"],
	},
	{
		id: "fund-past-performance-cpars",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is CPARS and why does capture care?",
		options: [
			{
				id: "a",
				text: "CPARS is the system where agencies record formal contractor performance assessments that later source selections pull as past-performance evidence.",
				correct: true,
			},
			{
				id: "b",
				text: "CPARS is the pricing spreadsheet template required in every Section L.",
				correct: false,
			},
			{
				id: "c",
				text: "CPARS is the GAO docketing system for bid protests.",
				correct: false,
			},
			{
				id: "d",
				text: "CPARS is GSA’s catalog of Schedule SINs.",
				correct: false,
			},
		],
		explanation:
			"Past performance is often a scored Section M factor. CPARS ratings and narratives travel with the company (and key affiliates/subs). Capture teams mine relevant CPARS early and fix weak stories before the RFP drops.",
		citation: "FAR 42.1502",
		sourceUrl: "https://www.acquisition.gov/far/42.1502",
		tags: ["CPARS", "past-performance"],
	},
	{
		id: "fund-best-value-lpta",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "On the best-value continuum, how does LPTA differ from a tradeoff?",
		options: [
			{
				id: "a",
				text: "LPTA awards to the lowest-priced proposal that is technically acceptable (no credit for exceeding minimums); tradeoff allows the Government to pay more for superior non-price factors.",
				correct: true,
			},
			{
				id: "b",
				text: "LPTA always ignores price; tradeoff always ignores technical.",
				correct: false,
			},
			{
				id: "c",
				text: "They are identical evaluation methods under FAR 15.101.",
				correct: false,
			},
			{
				id: "d",
				text: "Tradeoff is only allowed under the micro-purchase threshold.",
				correct: false,
			},
		],
		explanation:
			"FAR 15.101: LPTA vs tradeoff changes win strategy overnight. Gold-plating kills you on LPTA; under-investing in discriminators kills you on tradeoff. Capture must read Section M before solutioning.",
		citation: "FAR 15.101",
		sourceUrl: "https://www.acquisition.gov/far/15.101",
		tags: ["lpta", "best-value-continuum", "tradeoff"],
	},
	{
		id: "fund-pws-sow-soo",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a PWS compared with a traditional SOW or an SOO?",
		options: [
			{
				id: "a",
				text: "A PWS states required outcomes/performance standards; a SOW often prescribes tasks/methods; an SOO states objectives and invites the offeror to propose the PWS/approach.",
				correct: true,
			},
			{
				id: "b",
				text: "PWS, SOW, and SOO are three names for Section M evaluation factors.",
				correct: false,
			},
			{
				id: "c",
				text: "A PWS is only used on sealed-bid construction IFBs.",
				correct: false,
			},
			{
				id: "d",
				text: "An SOO is the contractor’s invoice format.",
				correct: false,
			},
		],
		explanation:
			"Performance-based acquisition (FAR 37.6) centers on outcomes. Capture and solution architects parse whether the Government wrote a PWS, a directive SOW, or an SOO — each changes how much room you have to shape the technical volume.",
		citation: "FAR 37.602",
		sourceUrl: "https://www.acquisition.gov/far/37.602",
		tags: ["PWS", "SOW", "SOO"],
	},
	{
		id: "fund-clin",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a CLIN?",
		options: [
			{
				id: "a",
				text: "A Contract Line Item Number — the priced, trackable line for a distinct supply/service (including options) on the schedule of the contract.",
				correct: true,
			},
			{
				id: "b",
				text: "The agency’s NAICS designation for the procurement.",
				correct: false,
			},
			{
				id: "c",
				text: "A type of organizational conflict of interest.",
				correct: false,
			},
			{
				id: "d",
				text: "The debriefing checklist in FAR 15.506.",
				correct: false,
			},
		],
		explanation:
			"CLINs structure price, funding, and delivery. Capture/pricing reads CLIN structure to spot optional years, ODCs, labor vs materials, and evaluation price models.",
		citation: "FAR 4.1001",
		sourceUrl: "https://www.acquisition.gov/far/4.1001",
		tags: ["CLIN", "definition"],
	},
	{
		id: "fund-co-cor",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is the difference between a Contracting Officer (CO/KO) and a COR?",
		options: [
			{
				id: "a",
				text: "The CO holds the warrant to bind the Government; the COR is typically designated to monitor technical performance and is not a substitute warranting authority.",
				correct: true,
			},
			{
				id: "b",
				text: "The COR awards contracts; the CO only writes the SOW.",
				correct: false,
			},
			{
				id: "c",
				text: "CO and COR are interchangeable titles in every agency.",
				correct: false,
			},
			{
				id: "d",
				text: "The COR is always an industry lobbyist, not a Government employee.",
				correct: false,
			},
		],
		explanation:
			"Only a warranted Contracting Officer can award/modify/obligate. CORs (FAR 1.602-2 / agency designation) support surveillance. Capture maps both stakeholders — program and contracting — without confusing who can commit the Government.",
		citation: "FAR 1.602-1",
		sourceUrl: "https://www.acquisition.gov/far/1.602-1",
		tags: ["CO", "COR", "definition"],
	},
	{
		id: "fund-responsiveness-responsibility",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Responsiveness vs responsibility — what’s the distinction?",
		options: [
			{
				id: "a",
				text: "Responsiveness is whether the offer conforms to material solicitation requirements; responsibility is whether the offeror can perform (finances, integrity, capacity, etc.).",
				correct: true,
			},
			{
				id: "b",
				text: "They mean the same thing under FAR Part 9.",
				correct: false,
			},
			{
				id: "c",
				text: "Responsibility is only about proposal formatting fonts and page counts.",
				correct: false,
			},
			{
				id: "d",
				text: "Responsiveness is decided only after CPARS is filed.",
				correct: false,
			},
		],
		explanation:
			"A nonresponsive bid/proposal can be rejected without reaching tradeoffs. Responsibility (FAR Subpart 9.1) is a separate go/no-go on the contractor. Capture compliance matrices chase responsiveness; contracts/BD chase responsibility risks.",
		citation: "FAR 9.103",
		sourceUrl: "https://www.acquisition.gov/far/9.103",
		tags: ["responsiveness", "responsibility"],
	},
	{
		id: "fund-full-and-open",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What does “full and open competition” mean under CICA/FAR Part 6?",
		options: [
			{
				id: "a",
				text: "All responsible sources are permitted to compete, unless a justified exception or set-aside applies.",
				correct: true,
			},
			{
				id: "b",
				text: "Only GSA Schedule holders may submit offers.",
				correct: false,
			},
			{
				id: "c",
				text: "The agency must award to every offeror that submits a proposal.",
				correct: false,
			},
			{
				id: "d",
				text: "Competition is limited to the incumbent and one challenger.",
				correct: false,
			},
		],
		explanation:
			"CICA’s baseline (FAR 6.101) is full and open competition. Set-asides, sole source, and other authorities are exceptions or alternative procedures — reading the competition line tells a Prime whether it can bid as prime at all.",
		citation: "FAR 6.101",
		sourceUrl: "https://www.acquisition.gov/far/6.101",
		tags: ["cica", "full-and-open", "competition"],
	},
	{
		id: "fund-sam-opportunities",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Where do federal contract opportunities (the old FedBizOpps lane) live now?",
		options: [
			{
				id: "a",
				text: "SAM.gov Contract Opportunities — the public notice board for most solicitations and market-research notices.",
				correct: true,
			},
			{
				id: "b",
				text: "Only on each agency’s private intranet, never publicly.",
				correct: false,
			},
			{
				id: "c",
				text: "Exclusively on USASpending.gov.",
				correct: false,
			},
			{
				id: "d",
				text: "Only inside CPARS.",
				correct: false,
			},
		],
		explanation:
			"FedBizOpps migrated into SAM.gov. Capture still starts with notices — sources sought, presolicitation, solicitation — plus vehicle-specific portals for many task orders.",
		citation: "FAR 5.102",
		sourceUrl: "https://www.acquisition.gov/far/5.102",
		tags: ["SAM.gov", "synopsis", "find"],
	},
	{
		id: "fund-pop-options",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What do period of performance (PoP) and option periods mean for capture?",
		options: [
			{
				id: "a",
				text: "PoP is the performance window; options are additional periods the Government may exercise — shaping recompete timing, incumbent advantage, and pricing of base-plus-options.",
				correct: true,
			},
			{
				id: "b",
				text: "Options are automatic renewals the contractor can force the Government to buy.",
				correct: false,
			},
			{
				id: "c",
				text: "PoP only applies to grants, not FAR contracts.",
				correct: false,
			},
			{
				id: "d",
				text: "Option years never appear in evaluation price.",
				correct: false,
			},
		],
		explanation:
			"Base plus options (FAR 17.2) defines how long an incumbent sits and when a recompete appears on the pipeline. Evaluation often includes option prices — capture and pricing must model the full evaluated PoP.",
		citation: "FAR 17.202",
		sourceUrl: "https://www.acquisition.gov/far/17.202",
		tags: ["PoP", "options", "incumbent"],
	},
	{
		id: "fund-incumbent-recompete",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "In capture slang, what is an incumbent on a recompete?",
		options: [
			{
				id: "a",
				text: "The contractor currently performing the work that is being re-solicited — often with knowledge, relationships, and transition advantages (and sometimes OCI/bias risks).",
				correct: true,
			},
			{
				id: "b",
				text: "Any company that protested the last award.",
				correct: false,
			},
			{
				id: "c",
				text: "The GAO attorney assigned to the file.",
				correct: false,
			},
			{
				id: "d",
				text: "The NAICS code from the prior contract.",
				correct: false,
			},
		],
		explanation:
			"Recompetes are a Prime’s bread and butter. Knowing who is incumbent shapes PWin, teaming, transition plans, and whether unequal-access OCI issues exist.",
		citation: "FAR 15.304",
		sourceUrl: "https://www.acquisition.gov/far/15.304",
		tags: ["incumbent", "recompete", "pwin"],
	},
	{
		id: "fund-key-personnel",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Why do RFPs call out key personnel?",
		options: [
			{
				id: "a",
				text: "Named individuals are often evaluated and may be contractually binding; swapping them later can need CO approval and can cost evaluation credit if weak.",
				correct: true,
			},
			{
				id: "b",
				text: "Key personnel are optional marketing bios that never affect scoring.",
				correct: false,
			},
			{
				id: "c",
				text: "Key personnel only apply to sealed-bid IFBs under $25,000.",
				correct: false,
			},
			{
				id: "d",
				text: "Key personnel means the Contracting Officer’s Representative only.",
				correct: false,
			},
		],
		explanation:
			"Capture and staffing leads treat key personnel as a win theme and a compliance risk. Section L resumes, letters of commitment, and substitution clauses are classic large-Prime proposal traps.",
		citation: "FAR 37.103",
		sourceUrl: "https://www.acquisition.gov/far/37.103",
		tags: ["key-personnel", "proposal-structure"],
	},
	{
		id: "fund-debriefing",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a post-award debriefing under FAR 15.506?",
		options: [
			{
				id: "a",
				text: "A required opportunity (when timely requested) for an offeror to learn evaluation specifics — and it can start protest clocks for GAO stays.",
				correct: true,
			},
			{
				id: "b",
				text: "An informal lunch that never affects protest deadlines.",
				correct: false,
			},
			{
				id: "c",
				text: "Only available to the awardee, never to unsuccessful offerors.",
				correct: false,
			},
			{
				id: "d",
				text: "A substitute for submitting a proposal.",
				correct: false,
			},
		],
		explanation:
			"Debriefs are both learning tools and legal triggers. Capture/contracts track the 3-day request window and the interplay with GAO’s protest/stay timing after a required debriefing.",
		citation: "FAR 15.506",
		sourceUrl: "https://www.acquisition.gov/far/15.506",
		tags: ["debriefing", "protest-forum"],
	},
	{
		id: "fund-protest-forums",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Which forums hear federal bid protests a capture/contracts team should know?",
		options: [
			{
				id: "a",
				text: "Agency-level protest, GAO, and the U.S. Court of Federal Claims (COFC) — with different timing, stays, and remedies.",
				correct: true,
			},
			{
				id: "b",
				text: "Only state small-claims court.",
				correct: false,
			},
			{
				id: "c",
				text: "Only the SBA size protest process covers all award challenges.",
				correct: false,
			},
			{
				id: "d",
				text: "Protests are no longer allowed after CICA was repealed.",
				correct: false,
			},
		],
		explanation:
			"FAR Part 33 and 4 CFR Part 21 (GAO) / COFC practice are part of capture risk planning. Size protests go to SBA — a different lane than GAO merits protests.",
		citation: "FAR 33.101",
		sourceUrl: "https://www.acquisition.gov/far/33.101",
		tags: ["gao", "cofc", "agency-protest", "protest-forum"],
	},
	{
		id: "fund-subcontracting-plan",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "When does a large business typically need a small-business subcontracting plan?",
		options: [
			{
				id: "a",
				text: "On covered solicitations expected to exceed $900,000 ($2M construction) with subcontracting possibilities — small-business offerors are generally exempt.",
				correct: true,
			},
			{
				id: "b",
				text: "On every purchase under the micro-purchase threshold.",
				correct: false,
			},
			{
				id: "c",
				text: "Only when the buyer is a state government.",
				correct: false,
			},
			{
				id: "d",
				text: "Never — subcontracting plans were eliminated from the FAR.",
				correct: false,
			},
		],
		explanation:
			"FAR 19.702 still centers subcontracting plans at the $900k / $2M construction triggers for other-than-small offerors when subcontracting possibilities exist. Large-Prime capture builds credible SB goals and mentor-protégé/sub pipelines into the pursuit, not as an afterthought.",
		citation: "FAR 19.702",
		sourceUrl: "https://www.acquisition.gov/far/19.702",
		tags: ["subcontracting-plan", "large-prime", "threshold"],
	},
	{
		id: "fund-cas-awareness",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What are Cost Accounting Standards (CAS) in a large-Prime context?",
		options: [
			{
				id: "a",
				text: "Rules on how contractors measure, assign, and allocate costs on covered contracts — a major compliance regime for larger cost-type / negotiated work.",
				correct: true,
			},
			{
				id: "b",
				text: "The color-team review checklist for proposal graphics.",
				correct: false,
			},
			{
				id: "c",
				text: "GSA’s customer satisfaction survey after Schedule sales.",
				correct: false,
			},
			{
				id: "d",
				text: "A type of set-aside for Alaska Native Corporations only.",
				correct: false,
			},
		],
		explanation:
			"CAS (41 U.S.C. chapter 15 / FAR Appendix) is why large primes involve pricing and compliance early on covered contracts. Capture does not need to audit CAS, but must know when a pursuit triggers CAS and Truthful Cost or Pricing Data exposure.",
		citation: "FAR 30.101",
		sourceUrl: "https://www.acquisition.gov/far/30.101",
		tags: ["CAS", "compliance", "large-prime"],
	},
	{
		id: "fund-truthful-cost-pricing",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What was commonly called “TINA” and what should capture remember?",
		options: [
			{
				id: "a",
				text: "Truthful Cost or Pricing Data requirements (formerly Truth in Negotiations Act) can require certified cost or pricing data on certain negotiated acquisitions above thresholds, with exceptions (e.g., adequate price competition, commercial products).",
				correct: true,
			},
			{
				id: "b",
				text: "TINA is the protest deadline at GAO.",
				correct: false,
			},
			{
				id: "c",
				text: "TINA requires every Schedule quote to include certified cost data.",
				correct: false,
			},
			{
				id: "d",
				text: "TINA only applies to micro-purchases.",
				correct: false,
			},
		],
		explanation:
			"FAR 15.403 governs when certified cost or pricing data are required. Capture/pricing must flag sole-source or insufficiently competed negotiated deals early — data room, audit, and timeline implications are real for a Prime.",
		citation: "FAR 15.403",
		sourceUrl: "https://www.acquisition.gov/far/15.403",
		tags: ["TINA", "cost-or-pricing-data", "compliance"],
	},
	{
		id: "fund-dcaa-dcma",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What do DCAA and DCMA do relative to a large DoD Prime?",
		options: [
			{
				id: "a",
				text: "DCAA audits costs/proposals/business systems; DCMA administers contracts (CORs, quality, property, etc.) for many DoD buys.",
				correct: true,
			},
			{
				id: "b",
				text: "Both agencies only buy commercial IT on SEWP.",
				correct: false,
			},
			{
				id: "c",
				text: "DCAA awards contracts; DCMA writes the FAR.",
				correct: false,
			},
			{
				id: "d",
				text: "They are industry associations for capture managers.",
				correct: false,
			},
		],
		explanation:
			"Defense Contract Audit Agency and Defense Contract Management Agency are standing interlocutors on DoD work. Capture involving cost-type or complex DoD pursuits should expect audit/admin touchpoints post-RFP and post-award.",
		citation: "FAR 42.101",
		sourceUrl: "https://www.acquisition.gov/far/42.101",
		tags: ["DCAA", "DCMA", "DoD"],
	},
	{
		id: "fund-facility-clearance",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Why does a facility security clearance (FCL) show up in capture gates?",
		options: [
			{
				id: "a",
				text: "Classified work often requires the prime (and sometimes teammates) to hold an appropriate FCL and cleared personnel — lacking it can be a hard no-bid.",
				correct: true,
			},
			{
				id: "b",
				text: "FCL is only required for GSA Schedule furniture buys.",
				correct: false,
			},
			{
				id: "c",
				text: "FCL is the same as a CAGE code.",
				correct: false,
			},
			{
				id: "d",
				text: "FCL means the proposal passed color-team review.",
				correct: false,
			},
		],
		explanation:
			"Cleared programs are a Prime staple. Capture checks FCL level, storage, and personnel clearances during bid/no-bid — teaming with a cleared partner is sometimes the only path.",
		citation: "FAR 4.402",
		sourceUrl: "https://www.acquisition.gov/far/4.402",
		tags: ["FCL", "security", "bid-readiness"],
	},
	{
		id: "fund-ota",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is an OTA (Other Transaction Authority) agreement in capture terms?",
		options: [
			{
				id: "a",
				text: "A non-FAR instrument some agencies (notably DoD) use for research/prototyping/production-like efforts — different competition and compliance rules than a standard FAR contract.",
				correct: true,
			},
			{
				id: "b",
				text: "Another name for a GSA Schedule BPA.",
				correct: false,
			},
			{
				id: "c",
				text: "A type of GAO protest.",
				correct: false,
			},
			{
				id: "d",
				text: "The Section L compliance matrix template.",
				correct: false,
			},
		],
		explanation:
			"OTAs are increasingly on Prime pipelines. They are not FAR contracts; pursuit strategy, IP, and teaming differ. Capture must not assume FAR Part 15 norms apply unchanged.",
		citation: "10 U.S.C. 4021-4022",
		sourceUrl: "https://www.acquisition.gov/",
		tags: ["OTA", "DoD", "definition"],
	},
	{
		id: "fund-color-teams-bp",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "In Prime capture/proposal shops, what are B&P and color-team reviews?",
		options: [
			{
				id: "a",
				text: "B&P is bid & proposal investment; color teams (e.g., Pink/Red/Gold) are structured reviews that stress-test strategy and draft volumes before submission.",
				correct: true,
			},
			{
				id: "b",
				text: "B&P is a DFARS clause; color teams are GAO hearing panels.",
				correct: false,
			},
			{
				id: "c",
				text: "Color teams replace the need for Section M compliance.",
				correct: false,
			},
			{
				id: "d",
				text: "B&P funds are paid by the Government before RFP release.",
				correct: false,
			},
		],
		explanation:
			"Large-Prime capture is a funded campaign. B&P burn, gate reviews, and color teams are how pursuits are managed — literacy expected of capture teammates even though these terms are industry practice rather than FAR definitions.",
		citation: "FAR 31.205-18",
		sourceUrl: "https://www.acquisition.gov/far/31.205-18",
		tags: ["B&P", "color-team", "capture"],
	},
	{
		id: "fund-lcat",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is an LCAT on services/IDIQ pursuits?",
		options: [
			{
				id: "a",
				text: "A labor category — a defined role with qualifications and a rate (or rate ceiling) used to price and staff the effort.",
				correct: true,
			},
			{
				id: "b",
				text: "A type of organizational conflict of interest.",
				correct: false,
			},
			{
				id: "c",
				text: "The local contract administration team at DCMA only.",
				correct: false,
			},
			{
				id: "d",
				text: "A protest timeliness doctrine.",
				correct: false,
			},
		],
		explanation:
			"LCAT mapping drives staffing, price, and compliance with solicitation qualification minima. Capture/solution teams align resumes and rates to the LCAT table early.",
		citation: "FAR 16.601",
		sourceUrl: "https://www.acquisition.gov/far/16.601",
		tags: ["LCAT", "pricing-strategy", "T&M"],
	},
	{
		id: "fund-psc",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "How does a PSC (Product and Service Code) differ from a NAICS code?",
		options: [
			{
				id: "a",
				text: "PSC describes what is being bought (product/service/R&D category in FPDS); NAICS classifies the industry/size standard for the contractor/solicitation.",
				correct: true,
			},
			{
				id: "b",
				text: "They are synonyms published by SBA.",
				correct: false,
			},
			{
				id: "c",
				text: "PSC replaces UEI on invoices.",
				correct: false,
			},
			{
				id: "d",
				text: "NAICS appears only on grants; PSC appears only on OTAs.",
				correct: false,
			},
		],
		explanation:
			"Pipeline and market-research tools filter on PSC and NAICS differently. Capture analysts use both when sizing addressable market and finding comparable awards.",
		citation: "FAR 4.606",
		sourceUrl: "https://www.acquisition.gov/far/4.606",
		tags: ["PSC", "naics", "market-research"],
	},
	{
		id: "fund-bridge-contract",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a “bridge” contract in recompete capture?",
		options: [
			{
				id: "a",
				text: "A short-term extension or interim award used to avoid a coverage gap when the follow-on competition slips — often sole-source or limited, and watched closely by challengers.",
				correct: true,
			},
			{
				id: "b",
				text: "A permanent 20-year IDIQ that cannot be protested.",
				correct: false,
			},
			{
				id: "c",
				text: "The formal name for a GSA Schedule SIN.",
				correct: false,
			},
			{
				id: "d",
				text: "A teaming agreement between two large primes only.",
				correct: false,
			},
		],
		explanation:
			"Bridges change PWin timelines and sometimes competition posture. Incumbents and challengers both track bridge justifications — they can help or hurt depending on your seat.",
		citation: "FAR 6.302",
		sourceUrl: "https://www.acquisition.gov/far/6.302",
		tags: ["bridge", "incumbent", "recompete"],
	},
	{
		id: "fund-competitive-range-fpr",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What are a competitive range and an FPR in Part 15 competitions?",
		options: [
			{
				id: "a",
				text: "Competitive range = offerors selected for discussions; FPR (final proposal revision) = the last proposal revision the CO requests after discussions.",
				correct: true,
			},
			{
				id: "b",
				text: "Competitive range means anyone who downloaded the RFP; FPR means the first draft pink-team review.",
				correct: false,
			},
			{
				id: "c",
				text: "Both terms apply only to sealed bidding under Part 14.",
				correct: false,
			},
			{
				id: "d",
				text: "FPR is the agency’s independent cost estimate.",
				correct: false,
			},
		],
		explanation:
			"FAR 15.306–15.307: surviving into the competitive range and managing FPR is late-stage capture/proposal warfare — pricing, weaknesses, and past-performance fixes land here.",
		citation: "FAR 15.306",
		sourceUrl: "https://www.acquisition.gov/far/15.306",
		tags: ["competitive-range", "FPR", "far-15"],
	},
	{
		id: "fund-similarly-situated",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What is a “similarly situated entity” in set-aside subcontracting math?",
		options: [
			{
				id: "a",
				text: "A subcontractor with the same small-business program status as the prime, whose work can count toward the prime’s self-performance under limitations-on-subcontracting rules.",
				correct: true,
			},
			{
				id: "b",
				text: "Any large-business subcontractor on a small-business prime contract.",
				correct: false,
			},
			{
				id: "c",
				text: "The incumbent’s affiliate automatically.",
				correct: false,
			},
			{
				id: "d",
				text: "A GAO mediator assigned to both parties.",
				correct: false,
			},
		],
		explanation:
			"Similarly situated entity rules (13 CFR 125.6) affect how much work a small prime can subcontract while staying compliant. Large-Prime workshare models on SB primes must understand what does — and does not — count.",
		citation: "13 CFR 125.6",
		sourceUrl: "https://www.ecfr.gov/current/title-13/section-125.6",
		tags: ["similarly-situated-entities", "limitations-on-subcontracting"],
	},
];
