import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Basics shelf — focused chapters for the fundamentals unit.
 * Public-domain quote text is copied only from verified excerpts previously
 * checked against the FAR / GAO glossary; other pieces use paraphrase + source trail.
 *
 * Reading shape: each piece is a definition card (term title + expanded glossary
 * teach + optional Watch for + citation/quote).
 */
export const FUNDAMENTALS_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "need-not-yet-contract",
		unitId: "fundamentals",
		title: "Federal acquisition stages from need to performance",
		summary:
			"Defines need, market research, solicitation, award, order, and performance — and why forecasts and industry days are signals, not awards.",
		intro:
			"Terms for the stages of a federal acquisition. A forecast line, a sources-sought reply, a draft RFP, an award notice, and a funded order are not the same thing.",
		tags: ["market-research", "solicitation", "forecast"],
		readingMinutes: 6,
		suggestedOrder: 1,
		pieces: [
			{
				id: "lifecycle-stations",
				title: "Acquisition stages (need through performance)",
				teach: "An acquisition stage is a distinct station in a federal buy: mission need and planning; market research and capability notices; a solicitation that requests offers or quotations; an award that creates a mutually binding relationship; orders or modifications that authorize specific work and funding; and performance that creates the record the next competition will read. At opportunity intake and at every gate, name the station you’re in, what evidence you have, and what still must happen before money and performance can move. If you cannot point to the operative instrument — notice, solicitation, contract, order, or modification — you are still upstream of that claim.",
				watchFor:
					"Don’t collapse every stage into “the deal.” A need is not a solicitation, a solicitation is not a contract, a vehicle award is not funded backlog, and a forecast or budget line is not an obligation.",
				citation: "FAR 2.101 (contract; solicitation); FAR Part 10 (market research)",
				sourceUrl: "https://www.acquisition.gov/far/2.101",
				sourceKind: "controlling-authority",
			},
			{
				id: "signals-are-not-awards",
				title: "Market signals",
				teach: "Market signals are orientation tools — forecasts, sources-sought notices, RFIs, draft solicitations, and industry days — that help the Government and industry learn about capability, timing, and acquisition strategy before anyone is asked for a binding offer. They belong in Find and Shape: gather evidence and shape fair competition without treating the signal as booked work.",
				watchFor:
					"Don’t treat a forecast, sources-sought reply, or warm customer conversation as a promise of funding, set-aside outcome, or award. A strong customer conversation does not convert a forecast into an obligation.",
				citation: "FAR 15.201; FAR 10.001",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 2.101 — Definitions",
				url: "https://www.acquisition.gov/far/2.101",
				kind: "controlling-authority",
			},
			{
				label: "FAR Part 10 — Market Research",
				url: "https://www.acquisition.gov/far/part-10",
				kind: "controlling-authority",
			},
		],
		closing:
			"Later chapters fill each station with sharper vocabulary. Return here when a teammate treats a need, a notice, or a vehicle as if the money were already yours.",
	}),

	chapter({
		id: "who-may-speak-who-may-bind",
		unitId: "fundamentals",
		title: "Contracting officer warrants, COR limits, and program managers",
		summary:
			"Defines who can bind the Government versus who monitors performance or owns mission need — so scope changes go to the right authority.",
		intro:
			"Roles that speak for the Government on technical performance versus roles that can bind it to a contract action.",
		tags: ["contracting-officer", "cor", "government-pm"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "warranted-co",
				title: "Contracting officer (warrant / written authority)",
				teach: "A contracting officer — often abbreviated CO or KO — may enter into, administer, or terminate contracts only to the extent of authority delegated in writing — industry often calls that a warrant; the FAR speaks of appointment and written limits. KO is especially common in DoD and other military settings: “CO” already means Commanding Officer, so acquisition uses KO, drawing on the legal shorthand “K” for contract. The check that matters is the written delegation and its limits, not seniority or budget control. When direction would change price, quantity, delivery, or other terms, route it to an official whose written delegation covers the change — do not treat verbal urgency as a substitute for a mod or order.",
				watchFor:
					"Don’t confuse seniority, a PM title, a COR email, or a warm customer relationship with contracting authority. None of those bind the Government.",
				quote: {
					text: "Contracting officers may bind the Government only to the extent of the authority delegated to them. Contracting officers shall receive from the appointing authority clear instructions in writing regarding the limits of their authority.",
					citation: "FAR 1.602-1(a)",
					sourceUrl: "https://www.acquisition.gov/far/1.602-1",
				},
			},
			{
				id: "cor",
				title: "Contracting officer’s representative (COR)",
				teach: "A COR assists in the technical monitoring or administration of a contract under a written designation from the contracting officer. The COR keeps a file that includes that designation and documents actions taken within the delegated authority. Place the COR beside the CO on your org sketch: closest to performance reality, still limited to the written designation for anything that changes the deal. Treat COR guidance as performance insight; treat contractual direction as coming only from someone with authority to change the instrument.",
				watchFor:
					"Don’t treat the COR as a second contracting officer. Technical-monitoring delegation does not include authority to change scope, obligate funds, or invent new workstreams outside the contract. “Subordinate to the warrant” is shorthand for that limit — not an org-chart reporting claim.",
				quote: {
					text: "A contracting officer’s representative (COR) assists in the technical monitoring or administration of a contract (see 1.602-2(d)). The COR shall maintain a file for each assigned contract.",
					citation: "FAR 1.604",
					sourceUrl: "https://www.acquisition.gov/far/1.604",
				},
			},
			{
				id: "government-pm",
				title: "Government program manager",
				teach: "A Government program manager (or requiring-activity lead) typically owns mission need, outcomes, stakeholder coordination, and much of the requirements dialogue. FAR 15.201 recognizes the program manager as a participant in early exchanges; exact duties are agency-specific. In capture, treat the PM as a primary voice on need and success criteria — and still confirm contractual direction through the CO or another official whose written delegation covers the action.",
				watchFor:
					"Don’t confuse the PM title, budget visibility, or a PM preference with authority to enter into or change a contract. A preference is not a modification.",
				citation: "FAR 15.201(c); FAR 1.602-1(a)",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 1.602-1 — Authority",
				url: "https://www.acquisition.gov/far/1.602-1",
				kind: "controlling-authority",
			},
			{
				label: "FAR 1.603-3 — Appointment (SF 1402 practice)",
				url: "https://www.acquisition.gov/far/1.603-3",
				kind: "controlling-authority",
			},
			{
				label: "FAR 1.604 — Contracting officer’s representative",
				url: "https://www.acquisition.gov/far/1.604",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "where-the-rules-live",
		unitId: "fundamentals",
		title: "FAR citations, agency supplements, provisions, and clauses",
		summary:
			"Explains how FAR citations are numbered, how agency supplements and deviations stack on top, and the difference between pre-award provisions and post-award clauses.",
		intro:
			"Layers of the acquisition rule stack: FAR citations, agency supplements, deviations, and the operative solicitation.",
		tags: ["far-navigation", "supplements", "solicitation", "ucf"],
		readingMinutes: 7,
		suggestedOrder: 3,
		pieces: [
			{
				id: "far-citations",
				title: "FAR citation anatomy",
				teach: "The FAR is divided into parts, subparts, sections, and subsections. Digits left of the decimal are the part; digits right of the decimal identify subpart and section; numbers after a dash identify a subsection. Part 52 holds provision and clause text keyed to subject parts (see also FAR 52.101). This grammar tells a reader where to look — and whether you mean a prescription or the clause text itself.",
				watchFor:
					"Don’t treat “part,” “subpart,” “section,” and “clause” as interchangeable labels. A Part 52 number is not “just another section” of the subject part — it is the prescribed text living in subpart 52.2.",
				quote: {
					text: "The FAR is divided into subchapters, parts (each of which covers a separate aspect of acquisition), subparts, sections, and subsections. … The digits to the left of the decimal point represent the part number. The numbers to the right of the decimal point and to the left of the dash represent, in order, the subpart (one or two digits), and the section (two digits). The number to the right of the dash represents the subsection.",
					citation: "FAR 1.105-2(a)–(b)",
					sourceUrl: "https://www.acquisition.gov/far/1.105-2",
				},
			},
			{
				id: "supplements",
				title: "Agency supplements and deviations",
				teach: "Agencies may issue acquisition regulations that implement or supplement the FAR. Your baseline for a civilian buy is usually the FAR plus that agency’s supplement (for example GSAM/GSAR or VAAR), plus any authorized deviation identified for the acquisition, plus the operative solicitation’s own terms. At opportunity kickoff, put four tabs in your binder: FAR, agency supplement, identified deviations, and the solicitation package as amended.",
				watchFor:
					"Don’t read an agency supplement as replacing the FAR wholesale, and don’t call every supplemental provision a “deviation.” Deviations are authorized departures from FAR coverage — not free-form agency preferences.",
				quote: {
					text: "Subject to the authorities in paragraph (c) of this section and other statutory authority, an agency head may issue or authorize the issuance of agency acquisition regulations that implement or supplement the FAR and incorporate, together with the FAR, agency policies, procedures, contract clauses, solicitation provisions, and forms that govern the contracting process…",
					citation: "FAR 1.301(a)(1)",
					sourceUrl: "https://www.acquisition.gov/far/1.301",
				},
			},
			{
				id: "solicitation-provision-clause",
				title: "Solicitation, provision, and clause",
				teach: "A solicitation is any request to submit offers or quotations. A solicitation provision applies only before award. A contract clause is a term used in contracts, or in both solicitations and contracts, applying after award or both before and after award. When a negotiated solicitation uses the Uniform Contract Format, Section L typically carries instructions to offerors and Section M carries evaluation factors for award — that L/M split is a UCF mapping, not a universal label for every instrument. Some text dies at award; some text rides with you for years.",
				watchFor:
					"Don’t treat a solicitation as already a contract, a provision as a post-award performance rule, or a clause as “just numbering.” Sections labeled “L” and “M” outside UCF (or in non-UCF vehicles) may mean something else — read the document’s own map.",
				quote: {
					text: "Solicitation means any request to submit offers or quotations to the Government. … Solicitation provision or provision means a term or condition used only in solicitations and applying only before contract award. … Contract clause or “clause” means a term or condition used in contracts or in both solicitations and contracts, and applying after contract award or both before and after award.",
					citation: "FAR 2.101",
					sourceUrl: "https://www.acquisition.gov/far/2.101",
				},
			},
		],
		furtherReading: [
			{
				label: "FAR 52.101 — Using Part 52",
				url: "https://www.acquisition.gov/far/52.101",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.204-1 — Uniform contract format",
				url: "https://www.acquisition.gov/far/15.204-1",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "how-money-becomes-authority",
		unitId: "fundamentals",
		title: "Appropriations, obligations, outlays, and the IGCE",
		summary:
			"Defines appropriation, obligation, and outlay; purpose/time/amount limits; and why an Independent Government Cost Estimate is analysis, not funding.",
		intro:
			"Budget vocabulary that answers “is it funded?” — authority to obligate, the binding commitment, then money moving.",
		tags: ["funding", "appropriation", "obligation", "igce", "fiscal-law"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "money-flow",
				title: "Appropriation, obligation, outlay",
				teach: "An appropriation is budget authority to incur obligations and make payments for specified purposes. An obligation is a definite commitment that creates a legal liability (for example, signing a contract). An outlay (disbursement) is the payment that liquidates that obligation. Treat “expenditure” carefully — do not assume every speaker uses it as a perfect synonym for outlay. Use this sequence whenever someone asks “is it funded?” — authority to obligate, then the binding commitment, then the money moving.",
				watchFor:
					"Don’t treat an appropriation as cash sitting in a drawer with your company name on it, or confuse obligation with payment. Winning a vehicle or seeing a forecast line is not an obligation.",
				quote: {
					text: "Appropriations. Budget authority to incur obligations and to make payments from the Treasury for specified purposes. … Appropriations do not represent cash actually set aside in the Treasury for purposes specified in the appropriation act; they represent amounts that agencies may obligate during the period of time specified in the respective appropriation acts.",
					citation: "GAO, A Glossary of Terms Used in the Federal Budget Process (GAO-05-734SP)",
					sourceUrl: "https://www.gao.gov/assets/a76916.html",
				},
			},
			{
				id: "purpose-time-amount",
				title: "Purpose, time, and amount",
				teach: "Legal use of appropriations turns on three controls: purpose (the account may fund only authorized objects), time (obligation only during availability and for a proper need), and amount (obligations and expenditures within applicable limits). “Color of money” is useful shorthand for those controls — not a license to move funds between accounts. When a customer informally describes accounts as different colors, capture should surface mismatches to contracts and the customer — not design a proposal that assumes accounts are interchangeable.",
				watchFor:
					"Don’t let a contract ceiling invent budget authority, program preference rewrite statutory purpose, or a continuing resolution automatically authorize every new start. Colors are not interchangeable transfer authority.",
				citation:
					"GAO Red Book, Availability of Appropriations: Purpose; 31 U.S.C. §§ 1301(a), 1502(a), 1341(a)",
				sourceUrl: "https://www.gao.gov/assets/gao-17-797sp.pdf",
				sourceKind: "guidance",
			},
			{
				id: "igce-vs-funding",
				title: "Independent Government Cost Estimate (IGCE)",
				teach: "An Independent Government Cost Estimate is an agency tool for analyzing proposed prices or costs. FAR 15.404-1 recognizes comparison with independent Government estimates as one proposal-analysis technique. It can shape affordability views; it does not itself obligate funds. Pricing builds a credible cost and price story from the solution; any lawful affordability signal informs strategy without replacing the company’s own estimate or inventing an obligated ceiling.",
				watchFor:
					"Don’t treat the IGCE as a promise of funding, the contractor’s basis of estimate, or a score key the offeror must match digit-for-digit.",
				citation: "FAR 15.404-1(b)(2)(v), (c)(2)(iii)(D)",
				sourceUrl: "https://www.acquisition.gov/far/15.404-1",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "GAO Glossary of Budget Terms",
				url: "https://www.gao.gov/assets/a76916.html",
				kind: "guidance",
			},
			{
				label: "FAR 15.404-1 — Proposal analysis techniques",
				url: "https://www.acquisition.gov/far/15.404-1",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "market-signal-to-solicitation",
		unitId: "fundamentals",
		title: "Sources sought, RFIs, RFQs, RFPs, IFBs, and SOW/PWS/SOO",
		summary:
			"Defines each notice and solicitation type, when UCF Sections L and M apply, and how SOW, PWS, and SOO shape the requirements document.",
		intro:
			"Instrument vocabulary from market research through the operative solicitation — before a single page of proposal is written.",
		tags: ["solicitation", "ucf", "sow", "pws"],
		readingMinutes: 9,
		suggestedOrder: 5,
		pieces: [
			{
				id: "notice-types",
				title: "Sources sought, RFI, RFQ, RFP, and IFB",
				teach: "Sources-sought notices and RFIs support market research and planning; RFI responses are not offers when the Government does not presently intend to award. An RFQ requests a quotation (and, depending on its terms, sometimes an offer). An RFP requests proposals in a negotiated acquisition. An IFB requests sealed bids evaluated without discussions. Classify the notice before staffing a response — wait for each document’s instructions before deciding whether the agency expects capability data, a quote, a proposal, or a bid.",
				watchFor:
					"Don’t treat every posted notice as a solicitation capable of immediate award. An RFQ response is not automatically a binding offer unless the instrument makes it one. An IFB is not an invitation to negotiate after bid opening.",
				citation: "FAR 15.201(e); FAR 13.004; FAR 14.101",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "ucf-l-m",
				title: "Uniform Contract Format Sections L and M",
				teach: "Under the Uniform Contract Format for negotiated acquisitions, Section L contains instructions, conditions, and notices to offerors or respondents; Section M contains evaluation factors for award. Crosswalk every L instruction to the associated M factor, while also tracing requirements and terms in Sections C, H, I, and J. Build the compliance matrix from the operative solicitation’s instruction and evaluation sections — after confirming UCF or an alternate structure.",
				watchFor:
					"Don’t assume L and M are universal labels for every FAR buy. Non-UCF packages (including many vehicle orders) use different sectioning — follow that document’s map, not muscle memory from Part 15 UCF.",
				citation: "FAR 15.204-1, Table 15-1",
				sourceUrl: "https://www.acquisition.gov/far/15.204-1",
				sourceKind: "controlling-authority",
			},
			{
				id: "sow-pws-soo",
				title: "SOW, PWS, and SOO",
				teach: "A statement of work (SOW) typically specifies tasks and how work is to be done. A performance work statement (PWS) emphasizes outcomes and measurable performance standards. A statement of objectives (SOO) states overall objectives and leaves maximum flexibility for offerors to propose an approach — often including an offeror-developed PWS. Match solution depth to the requirements shape: method-heavy for many SOWs, metrics-heavy for PWS, offeror-architected for SOO.",
				watchFor:
					"Don’t call every requirements attachment a “SOW” and assume that makes it one. A SOO is not a detailed Government PWS. The solicitation’s instructions control which artifact the offeror must submit.",
				citation: "FAR 37.602; FAR 11.101–11.104",
				sourceUrl: "https://www.acquisition.gov/far/37.602",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.201 — Exchanges with industry before receipt of proposals",
				url: "https://www.acquisition.gov/far/15.201",
				kind: "controlling-authority",
			},
			{
				label: "FAR 15.206 — Amending the solicitation",
				url: "https://www.acquisition.gov/far/15.206",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "competition-becomes-decision",
		unitId: "fundamentals",
		title: "Source selection authority and competition paths",
		summary:
			"Defines the SSA versus the evaluation team, and the differences among full and open competition, set-asides, and sole-source.",
		intro:
			"Who decides in source selection, and which competition path was chosen before anyone scores a proposal.",
		tags: ["source-selection", "ssa", "set-aside"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "ssa-sseb",
				title: "Source selection authority (SSA)",
				teach: "The source selection authority (SSA) — often the contracting officer unless the agency head appoints someone else — establishes an evaluation team, ensures evaluation against the solicitation’s factors, considers advisory recommendations, and selects the source whose proposal is the best value to the Government. In Part 15 negotiated acquisitions, the team evaluates against stated factors; the SSA owns the selection judgment.",
				watchFor:
					"Don’t let “the board picked the winner” replace the SSA’s decision. Scoring every proposal alone is not the SSA’s default job, and the evaluation team does not own the selection.",
				quote: {
					text: "The source selection authority shall— … Ensure that proposals are evaluated based solely on the factors and subfactors contained in the solicitation … Select the source or sources whose proposal is the best value to the Government.",
					citation: "FAR 15.303(b)",
					sourceUrl: "https://www.acquisition.gov/far/15.303",
				},
			},
			{
				id: "competition-paths",
				title: "Full and open, set-aside, and sole-source",
				teach: "For open-market acquisitions within Part 6’s scope, full and open competition is the general rule. A small-business set-aside limits eligibility under Part 19 without requiring a separate Part 6 justification. A sole-source path needs an applicable FAR 6.302 authority and, when required, a written justification and approval — not program-office preference alone. Orders and other acquisitions outside Part 6 follow their own limited-source or fair-opportunity rules. At strategy time, name the competition path and the eligibility consequences for your prime structure before you spend B&P as if the field were already fixed.",
				watchFor:
					"Don’t confuse a set-aside with a sole-source award. Full and open does not mean a large business must be allowed to win a total small-business set-aside. Vehicle brand names do not rewrite competition rules.",
				citation: "FAR 6.101; FAR 6.203; FAR 6.302; FAR Part 19",
				sourceUrl: "https://www.acquisition.gov/far/6.101",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 15.303 — Responsibilities",
				url: "https://www.acquisition.gov/far/15.303",
				kind: "controlling-authority",
			},
			{
				label: "FAR 6.101 — Full and open competition policy",
				url: "https://www.acquisition.gov/far/6.101",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "what-government-awards",
		unitId: "fundamentals",
		title: "Contracts, firm-fixed-price, MAS, and GWACs",
		summary:
			"Defines a FAR contract, how firm-fixed-price allocates cost risk, and why Multiple Award Schedule and GWAC are different buying lanes.",
		intro:
			"Instrument vocabulary for awards: contract, firm-fixed-price risk, and schedule vs GWAC buying paths.",
		tags: ["ffp", "mas", "gwac"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "contract",
				title: "Contract",
				teach: "A contract is a mutually binding legal relationship obligating the seller to furnish supplies or services and the buyer to pay for them. In the FAR sense it includes written commitments that obligate the Government to spend appropriated funds — awards, orders that become effective by acceptance or performance, and bilateral modifications, among other instruments. Clauses, modifications, invoices, and post-award protests assume a binding relationship; pre-award protest work assumes a live competition and an operative solicitation. If you cannot point to an instrument — or to a solicitation defect you intend to challenge — you are still narrating upstream hope.",
				watchFor:
					"Don’t confuse a contract with a grant or cooperative agreement under 31 U.S.C. 6301 et seq., a handshake, a slide deck, or an email that merely discusses future scope. It is not identical to a solicitation. Pre-award protests can challenge a solicitation or exclusion before a contract exists.",
				quote: {
					text: "Contract means a mutually binding legal relationship obligating the seller to furnish the supplies or services (including construction) and the buyer to pay for them. It includes all types of commitments that obligate the Government to an expenditure of appropriated funds and that, except as otherwise authorized, are in writing. … Contracts do not include grants and cooperative agreements covered by 31 U.S.C.6301, et seq.",
					citation: "FAR 2.101",
					sourceUrl: "https://www.acquisition.gov/far/2.101",
				},
			},
			{
				id: "ffp",
				title: "Firm-fixed-price (FFP)",
				teach: "A firm-fixed-price (FFP) contract provides a price that is not adjusted based on the contractor’s cost experience. It places maximum cost risk and full responsibility for profit or loss on the contractor, and it creates strong incentive to control costs. When pricing and capture argue about risk, place FFP on the fixed end of a spectrum of types — then name the actual type (or CLIN mix) in the solicitation before modeling margin.",
				watchFor:
					"Don’t treat FFP as a reimbursable budget, or assume cost overruns automatically become the Government’s problem. An FFP price is not “just an estimate the CO will fix later” unless a separate adjustment clause actually applies. FFP is also not the only alternative to cost-reimbursement — Part 16 includes T&M, labor-hour, incentive, EPA, and hybrid structures.",
				quote: {
					text: "A firm-fixed-price contract provides for a price that is not subject to any adjustment on the basis of the contractor’s cost experience in performing the contract. This contract type places upon the contractor maximum risk and full responsibility for all costs and resulting profit or loss.",
					citation: "FAR 16.202-1",
					sourceUrl: "https://www.acquisition.gov/far/16.202-1",
				},
			},
			{
				id: "mas-vs-gwac",
				title: "MAS versus GWAC",
				teach: "GSA Multiple Award Schedule (MAS) is the Federal Supply Schedule program for commercial offerings, with ordering procedures in FAR Subpart 8.4. A governmentwide acquisition contract (GWAC) is a separate governmentwide task- or delivery-order contract for information technology — Alliant and NASA SEWP are examples, not synonyms for MAS. At vehicle selection, classify the buying path before chasing a brand: open-market negotiated, MAS order, GWAC/IDIQ order, or another authorized method.",
				watchFor:
					"Don’t treat MAS and GWAC as interchangeable names for one underlying contract. Commercial status under Part 12 does not automatically select MAS. A GWAC is not limited to its awarding agency’s own buyers in the way a single-agency IDIQ often is — but access, scope, and pools still must be checked.",
				citation: "FAR 2.101; FAR Subpart 8.4",
				sourceUrl: "https://www.acquisition.gov/far/subpart-8.4",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 16.202 — Firm-fixed-price contracts",
				url: "https://www.acquisition.gov/far/16.202-1",
				kind: "controlling-authority",
			},
			{
				label: "GSA Multiple Award Schedule overview",
				url: "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "potential-value-not-authorized-work",
		unitId: "fundamentals",
		title: "IDIQ ceilings, options, and CLIN funding limits",
		summary:
			"Defines IDIQ minimums and ceilings, base periods versus options, and why allotted CLIN funding — not estimated line value — authorizes performance.",
		intro:
			"Numbers that look like backlog — ceilings, option years, CLIN totals — versus allotted funding and written exercise.",
		tags: ["idiq", "options", "funding", "clin"],
		readingMinutes: 8,
		suggestedOrder: 8,
		pieces: [
			{
				id: "idiq-min-ceiling",
				title: "IDIQ minimum and ceiling",
				teach: "An indefinite-delivery indefinite-quantity (IDIQ) contract states a minimum the Government must order and a maximum it may not exceed. Especially on a multiple-award vehicle, industry often calls the base award a “hunting license” — a metaphor, not FAR text: beyond the contractual minimum, the holder still must capture and win orders rather than book the vehicle ceiling as backlog. Price and forecast the minimum honestly; treat the remainder of the ceiling as competitive potential that still requires order wins. Label “hunting license” as industry metaphor so finance never mistakes it for a FAR guarantee.",
				watchFor:
					"Don’t treat the ceiling as guaranteed revenue, the minimum as a proposal target shared equally among holders, or a seat on the vehicle as winning every order under it.",
				citation: "FAR 16.504(a)(1), 16.504(a)(4)(ii)",
				sourceUrl: "https://www.acquisition.gov/far/16.504",
				sourceKind: "controlling-authority",
			},
			{
				id: "base-and-options",
				title: "Base periods and options",
				teach: "A base-plus-options structure may be evaluated across priced periods, but an option is not automatic backlog. The contracting officer must exercise the option by written notice within the time specified; a preliminary notice of intent preserves the process without committing the Government. Funds availability and continued need are among the exercise findings. Model staffing and revenue with option-exercise risk while still pricing every evaluated period the solicitation requires.",
				watchFor:
					"Don’t confuse evaluated option prices with a promise the option will be exercised. Preliminary notice is not exercise. Unexercised option value is not authorized work.",
				citation: "FAR 17.207; FAR 52.217-9",
				sourceUrl: "https://www.acquisition.gov/far/17.207",
				sourceKind: "controlling-authority",
			},
			{
				id: "clin-funding",
				title: "CLIN value versus allotted funding",
				teach: "CLINs and SLINs organize deliverables, pricing, accounting, funding, and performance periods. On an incrementally funded cost-reimbursement contract, the amount actually allotted — not the total estimated cost, ceiling, or option value — is the operative limit on paid and payable cost under the Limitation of Funds framework. Preserve total potential value, estimated cost, obligated/allotted funding, and the specific work each funded line covers as separate columns. Reconcile allotted funding to covered work and burn; stop or realign only on written CO funding direction.",
				watchFor:
					"Don’t treat estimated CLIN value as interchangeable with funded ceiling, or expected funding as funded authority. COR urgency is not a funding modification.",
				citation: "FAR 52.232-22; FAR 32.703-1",
				sourceUrl: "https://www.acquisition.gov/far/52.232-22",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 16.504 — Indefinite-quantity contracts",
				url: "https://www.acquisition.gov/far/16.504",
				kind: "controlling-authority",
			},
			{
				label: "FAR 52.232-22 — Limitation of Funds",
				url: "https://www.acquisition.gov/far/52.232-22",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "contractor-decision-system",
		unitId: "fundamentals",
		title: "Probability of win, price-to-win, and color-team reviews",
		summary:
			"Defines this course’s Pwin method, price-to-win versus cost estimating, and bid gates / color reviews as house capture practice — not FAR mandates.",
		intro:
			"Capture-practice vocabulary for investment decisions — where regulation ends and house method begins.",
		tags: ["pwin", "price-to-win"],
		readingMinutes: 9,
		suggestedOrder: 9,
		pieces: [
			{
				id: "pwin",
				title: "Probability of win (Pwin)",
				teach: "In this course’s working definition, Pwin is an evidence-based decision input: a living judgment about win likelihood that updates when customer, competitive, solution, price, past-performance, and execution evidence changes. Neither the FAR nor a single industry body mandates one universal numeric formula — organizations must define and apply a documented method consistently. Use it beside price-to-win and cost estimating: Pwin asks “can we win?”, price-to-win asks “what position wins?”, cost asks “what does performance cost us?” — three different questions. Say “course working definition” or “our method” in gates so nobody mistakes Pwin for a regulatory score.",
				watchFor:
					"Don’t treat Pwin as a sales promise, a quota, a number frozen when B&P is approved, or a count of meetings held. It is not a substitute for cost, price-to-win, or eligibility analysis.",
				citation: "Industry capture practice; APMP Winning Business Ecosystem",
				sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				sourceKind: "capture-practice",
			},
			{
				id: "price-to-win",
				title: "Price-to-win versus cost estimate",
				teach: "Price-to-win estimates the competitive price or value position needed to win, given customer budget signals, evaluation method, and likely competitors. A cost estimate forecasts what the proposed solution will cost the company to perform. Pricing leadership must reconcile the two — a winning target below executable cost is a warning to redesign or stop, not permission to invent savings in the pricing volume.",
				watchFor:
					"Don’t treat price-to-win as the cost estimate plus maximum profit, or as the IGCE. The terms are not interchangeable just because the solicitation uses best-value tradeoff.",
				citation: "Industry capture practice",
				sourceUrl:
					"https://www.apmp.org/Common/Uploaded%20files/APMP/Certification/APMP%20Practitioner%20OTE%20Preparation%20Guide%202026%20-v3.pdf",
				sourceKind: "capture-practice",
			},
			{
				id: "gates-and-reviews",
				title: "Gates and color reviews",
				teach: "Bid/no-bid gates and color-team reviews (often called Pink, Red, and Gold) are common industry conventions for deciding whether to continue investing and for testing proposal maturity. Under one common house design, Pink tests planned content early, Red evaluates a substantially complete proposal as the customer would, and Gold confirms executive readiness and remaining risk before submit. Label this as capture practice — not FAR procedure. Run gates on evidence and remaining cost-to-bid; run reviews on maturity questions so authors get useful feedback instead of three rounds of the same copyedit.",
				watchFor:
					"Don’t run gates as ceremonial status meetings. Color names are not FAR-required. Gold approval cannot waive solicitation requirements. Sunk B&P is not a reason to continue a deteriorating pursuit.",
				citation: "Common industry review convention; APMP Winning Business Ecosystem",
				sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				sourceKind: "capture-practice",
			},
		],
		furtherReading: [
			{
				label: "APMP Winning Business Ecosystem",
				url: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				kind: "capture-practice",
			},
		],
		closing:
			"When a teammate cites “APMP says” or “FAR requires Pink Team,” separate controlling authority from house convention before you rearrange the schedule.",
	}),

	chapter({
		id: "performance-becomes-next-proposal",
		unitId: "fundamentals",
		title: "CPARS ratings, option exercise, and recompete timing",
		summary:
			"Defines how contractor performance information becomes past-performance currency, and how options and recompete timing connect this award to the next competition.",
		intro:
			"Terms that connect today’s performance to the next competition’s past-performance and option story.",
		tags: ["cpars", "options", "recompete", "past-performance"],
		readingMinutes: 7,
		suggestedOrder: 10,
		pieces: [
			{
				id: "cpars-as-currency",
				title: "CPARS (contractor performance information)",
				teach: "Past performance is relevant to future source selections. For covered contracts and orders above applicable thresholds, evaluations are required at least annually and at completion, entered in CPARS (subject to type, order, threshold, and reporting exceptions). Delivery therefore creates competitive evidence from day one. Map CPARS factors and customer outcomes to owners, evidence, quality controls, and regular reviews while performance can still improve — then hand a clean record to the next capture team.",
				watchFor:
					"Don’t treat CPARS as a protest substitute, wait until year four to assemble evidence, or ask capture to ghostwrite ratings for the CO.",
				citation: "FAR 42.1501; FAR 42.1502; FAR 42.1503",
				sourceUrl: "https://www.acquisition.gov/far/42.1502",
				sourceKind: "controlling-authority",
			},
			{
				id: "options-and-recompete",
				title: "Options, continuity, and recompete",
				teach: "Option exercise can extend performance when the CO follows the contract’s notice and exercise rules and finds funds, continued need, and advantage. Recompete planning backcasts from successor timing, PALT, and whether options or bridges are uncertainties — not certainties. Today’s performance file is tomorrow’s proposal volume and tomorrow’s responsibility record.",
				watchFor:
					"Don’t confuse preliminary option notice with exercise, a bridge with permanent sole-source, or strong CPARS with elimination of competition or protest risk on the follow-on.",
				citation: "FAR 17.207; FAR 42.1503(d)",
				sourceUrl: "https://www.acquisition.gov/far/17.207",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR Subpart 42.15 — Contractor Performance Information",
				url: "https://www.acquisition.gov/far/subpart-42.15",
				kind: "controlling-authority",
			},
			{
				label: "CPARS guidance (official)",
				url: "https://www.cpars.gov/",
				kind: "guidance",
			},
		],
		closing:
			"You now have a shelf of definitions: stations, who may bind, where rules live, how money moves, solicitation instruments, competition paths, awards, authorized value, capture decisions, and performance as next-proposal currency.",
	}),
];
