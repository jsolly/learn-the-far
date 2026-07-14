import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Basics shelf — focused chapters for the fundamentals unit.
 * Public-domain quote text is copied only from verified excerpts previously
 * checked against the FAR / GAO glossary; other pieces use paraphrase + source trail.
 */
export const FUNDAMENTALS_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "need-not-yet-contract",
		unitId: "fundamentals",
		title: "Name the acquisition station you’re actually in",
		summary:
			"Learn to separate need, market research, solicitation, award, order, and performance — so a forecast or hallway conversation never gets booked as a deal.",
		intro:
			"Capture teams collapse language. A forecast line, a sources-sought reply, a draft RFP, an award notice, and a funded order all get called “the opportunity.” This chapter separates those stations so later chapters — who may bind, how money moves, what an award actually is — have somewhere to sit.",
		tags: ["lifecycle", "definition", "field-guide"],
		readingMinutes: 6,
		suggestedOrder: 1,
		pieces: [
			{
				id: "lifecycle-stations",
				title: "The stations of an acquisition",
				story:
					"A program office says it “needs cyber support next fiscal year.” Your pipeline already shows revenue. Nothing on SAM.gov yet matches the story.",
				is: "A federal acquisition moves through distinct stations: a mission need and planning inputs; market research and notices that gather capability; a solicitation that requests offers or quotations; an award that creates a mutually binding relationship; orders or modifications that authorize specific work and funding; and performance that creates the record the next competition will read.",
				isNot:
					"A need is not a solicitation. A solicitation is not a contract. A vehicle award is not funded backlog. A forecast or budget line is not an obligation. Calling every stage “the deal” hides which instrument — if any — actually exists.",
				fits: "Use this map at opportunity intake and at every gate: name the station you are in, what evidence you have, and what still has to happen before money and performance can move.",
				judgment:
					"If you cannot point to the operative instrument for the claim you are making — notice, solicitation, contract, order, or modification — you are still upstream of that claim.",
				checklist: [
					"Label the current station: need, research, solicitation, award, order, or performance",
					"Separate pipeline optimism from instruments that bind or authorize",
					"Ask what must change before the next station is real",
				],
				citation: "FAR 2.101 (contract; solicitation); FAR Part 10 (market research)",
				sourceUrl: "https://www.acquisition.gov/far/2.101",
				sourceKind: "controlling-authority",
			},
			{
				id: "signals-are-not-awards",
				title: "Market signals are not awards",
				is: "Forecasts, sources-sought notices, RFIs, draft solicitations, and industry days are orientation tools. They help the Government and industry learn about capability, timing, and acquisition strategy before anyone is asked for a binding offer.",
				isNot:
					"They are not promises of funding, set-aside outcomes, or award. A strong customer conversation does not convert a forecast into an obligation.",
				fits: "Place signal work in Find and Shape: gather evidence and shape fair competition without treating the signal as booked work.",
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
			"The rest of this shelf fills each station with sharper vocabulary. Start here when a teammate treats a need, a notice, or a vehicle as if the money were already yours.",
	}),

	chapter({
		id: "who-may-speak-who-may-bind",
		unitId: "fundamentals",
		title: "Know who can speak — and who can bind the Government",
		summary:
			"Learn the CO warrant, COR limits, and Government PM role so scope-change asks land with the people who actually have authority.",
		intro:
			"Titles fill the room — PM, COR, branch chief, “the customer.” Only some of them can speak for the Government on technical performance. Fewer can bind it. Capture and contracts both fail when those roles blur.",
		tags: ["authority", "contracting-officer", "cor", "government-pm", "definition"],
		readingMinutes: 8,
		suggestedOrder: 2,
		pieces: [
			{
				id: "warranted-co",
				title: "The contracting officer’s written authority",
				story:
					"Imagine a Friday afternoon call: a program office wants you to “just start” extra work. Senior people are on the line. Only one kind of authority can bind the Government to a contract action.",
				is: "A contracting officer (often called a KO) may enter into, administer, or terminate contracts only to the extent of the authority delegated in writing. Industry commonly calls that appointment a warrant; the FAR itself speaks in terms of appointment and written limits (see also SF 1402 practice under FAR 1.603-3). The practical check is that written delegation and its limits — not seniority or budget control.",
				isNot:
					"It is not “whoever seems in charge,” not the program manager by title alone, and not a COR email. A meeting introduction or a customer relationship does not create contracting authority.",
				fits: "This sits at the front of every capture and contracts conversation: before you treat direction as contractual, ask who has the written authority to bind the Government for that action.",
				judgment:
					"When direction would change price, quantity, delivery, or other terms, stop and route it to an official whose written delegation covers the change.",
				checklist: [
					"Identify the CO (or other authorized official) for the action",
					"Ask what written authority covers the requested change",
					"Do not treat verbal urgency as a substitute for a mod or order",
				],
				quote: {
					text: "Contracting officers may bind the Government only to the extent of the authority delegated to them. Contracting officers shall receive from the appointing authority clear instructions in writing regarding the limits of their authority.",
					citation: "FAR 1.602-1(a)",
					sourceUrl: "https://www.acquisition.gov/far/1.602-1",
				},
			},
			{
				id: "cor",
				title: "The contracting officer’s representative (COR)",
				story:
					"The COR is often the person you talk to most on a live contract — technical monitoring, site visits, invoice review. That closeness is useful. It is also where unauthorized commitments are born.",
				is: "A COR assists in the technical monitoring or administration of a contract under a written designation from the contracting officer. The COR keeps a file that includes that designation and documents actions taken within the delegated authority.",
				isNot:
					"A COR is not a second contracting officer. Delegation for technical monitoring does not include authority to change scope, obligate funds, or invent new workstreams outside the contract. “Subordinate to the warrant” is shorthand for that limit — not an org-chart reporting claim.",
				fits: "Place the COR beside the CO on your org sketch: closest to performance reality, still limited to the written designation for anything that changes the deal.",
				judgment:
					"Treat COR guidance as performance insight; treat contractual direction as coming only from someone with authority to change the instrument.",
				quote: {
					text: "A contracting officer’s representative (COR) assists in the technical monitoring or administration of a contract (see 1.602-2(d)). The COR shall maintain a file for each assigned contract.",
					citation: "FAR 1.604",
					sourceUrl: "https://www.acquisition.gov/far/1.604",
				},
			},
			{
				id: "government-pm",
				title: "The Government program manager",
				is: "A Government program manager (or requiring-activity lead) typically owns mission need, outcomes, stakeholder coordination, and much of the requirements dialogue. FAR 15.201 recognizes the program manager as a participant in early exchanges. Exact duties are agency-specific.",
				isNot:
					"The PM title does not, by itself, confer authority to enter into or change a contract. Budget visibility is not contracting authority. A PM preference is not a modification.",
				fits: "In capture, treat the PM as a primary voice on need and success criteria — and still confirm contractual direction through the CO or another official whose written delegation covers the action.",
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
		title: "Read the FAR stack: citations, supplements, and the solicitation",
		summary:
			"Learn citation anatomy, agency supplements and deviations, and where provisions vs clauses live — including when UCF Sections L and M control.",
		intro:
			"Teams argue about “the FAR” while reading the wrong layer. Citations, supplements, deviations, and solicitation text are a stack. Proposal instructions live in one place; evaluation factors in another — when the Uniform Contract Format is in play.",
		tags: ["far-navigation", "supplements", "solicitation", "ucf", "definition"],
		readingMinutes: 7,
		suggestedOrder: 3,
		pieces: [
			{
				id: "far-citations",
				title: "How FAR citations are built",
				is: "The FAR is divided into parts, subparts, sections, and subsections. Digits left of the decimal are the part; digits right of the decimal identify subpart and section; numbers after a dash identify a subsection. Part 52 holds provision and clause text keyed to subject parts (see also FAR 52.101 for how that numbering works).",
				isNot:
					"“Part,” “subpart,” “section,” and “clause” are not interchangeable labels. A Part 52 number is not “just another section” of the subject part — it is the prescribed text living in subpart 52.2.",
				fits: "Whenever you cite a rule in a review or a proposal narrative, this grammar tells a reader where to look — and whether you mean a prescription or the clause text itself.",
				quote: {
					text: "The FAR is divided into subchapters, parts (each of which covers a separate aspect of acquisition), subparts, sections, and subsections. … The digits to the left of the decimal point represent the part number. The numbers to the right of the decimal point and to the left of the dash represent, in order, the subpart (one or two digits), and the section (two digits). The number to the right of the dash represents the subsection.",
					citation: "FAR 1.105-2(a)–(b)",
					sourceUrl: "https://www.acquisition.gov/far/1.105-2",
				},
			},
			{
				id: "supplements",
				title: "FAR, agency supplements, deviations, and the solicitation",
				is: "Agencies may issue acquisition regulations that implement or supplement the FAR. Your baseline for a civilian buy is usually the FAR plus that agency’s supplement (for example GSAM/GSAR or VAAR), plus any authorized deviation identified for the acquisition, plus the operative solicitation’s own terms.",
				isNot:
					"An agency supplement does not replace the FAR wholesale. A supplemental provision is not automatically a “deviation,” and deviations are not free-form agency preferences — they are authorized departures from FAR coverage. Reading only the FAR (or only the supplement) without the solicitation leaves gaps.",
				fits: "At opportunity kickoff, put four tabs in your binder: FAR, agency supplement, identified deviations, and the solicitation package as amended.",
				checklist: [
					"Name the buying agency’s supplement",
					"Scan for class or solicitation-specific deviations",
					"Treat the amended solicitation as controlling for proposal instructions",
				],
				quote: {
					text: "Subject to the authorities in paragraph (c) of this section and other statutory authority, an agency head may issue or authorize the issuance of agency acquisition regulations that implement or supplement the FAR and incorporate, together with the FAR, agency policies, procedures, contract clauses, solicitation provisions, and forms that govern the contracting process…",
					citation: "FAR 1.301(a)(1)",
					sourceUrl: "https://www.acquisition.gov/far/1.301",
				},
			},
			{
				id: "solicitation-provision-clause",
				title: "Solicitation, provision, and clause",
				story:
					"Proposal teams live in RFPs. Performance teams live in contracts. The vocabulary that bridges them prevents you from arguing about the wrong document.",
				is: "A solicitation is any request to submit offers or quotations. A solicitation provision applies only before award. A contract clause is a term used in contracts, or in both solicitations and contracts, applying after award or both before and after award. When a negotiated solicitation uses the Uniform Contract Format, Section L typically carries instructions to offerors and Section M carries evaluation factors for award — that L/M split is a UCF mapping, not a universal label for every instrument.",
				isNot:
					"A solicitation is not already a contract. A provision is not a post-award performance rule. A clause is not “just numbering.” Sections labeled “L” and “M” outside UCF (or in non-UCF vehicles) may mean something else — read the document’s own map.",
				fits: "Read the solicitation’s instruction and evaluation sections with this split in mind: some text dies at award; some text rides with you for years.",
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
		title: "Follow the money from appropriation to obligation",
		summary:
			"Learn appropriation vs obligation vs outlay, purpose/time/amount discipline, and why an IGCE or vehicle ceiling is not funding you can spend.",
		intro:
			"Capture slides love the word “funded.” Budget language is more precise — and mixing the words is how teams misread whether an agency can actually buy, and how much work a contractor may safely perform.",
		tags: ["funding", "appropriation", "obligation", "igce", "fiscal-law"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "money-flow",
				title: "Appropriation, obligation, outlay",
				story:
					"A forecast says the program is “fully funded.” Finance asks whether that means authority to obligate, a signed commitment, or cash already paid.",
				is: "An appropriation is budget authority to incur obligations and make payments for specified purposes. An obligation is a definite commitment that creates a legal liability (for example, signing a contract). An outlay (disbursement) is the payment that liquidates that obligation. Treat “expenditure” carefully — do not assume every speaker uses it as a perfect synonym for outlay.",
				isNot:
					"An appropriation is not cash sitting in a drawer with your company name on it. An obligation is not the same event as payment. Winning a vehicle or seeing a forecast line is not an obligation.",
				fits: "Use this sequence whenever someone asks “is it funded?” — authority to obligate, then the binding commitment, then the money moving.",
				quote: {
					text: "Appropriations. Budget authority to incur obligations and to make payments from the Treasury for specified purposes. … Appropriations do not represent cash actually set aside in the Treasury for purposes specified in the appropriation act; they represent amounts that agencies may obligate during the period of time specified in the respective appropriation acts.",
					citation: "GAO, A Glossary of Terms Used in the Federal Budget Process (GAO-05-734SP)",
					sourceUrl: "https://www.gao.gov/assets/a76916.html",
				},
			},
			{
				id: "purpose-time-amount",
				title: "Purpose, time, and amount",
				is: "Legal use of appropriations turns on three controls: purpose (the account may fund only authorized objects), time (obligation only during availability and for a proper need), and amount (obligations and expenditures within applicable limits). “Color of money” is useful shorthand for those controls — not a license to move funds between accounts.",
				isNot:
					"A contract ceiling does not invent budget authority. Program preference does not rewrite statutory purpose. A continuing resolution does not automatically authorize every new start.",
				fits: "When a customer informally describes accounts as different colors, capture should surface mismatches to contracts and the customer — not design a proposal that assumes accounts are interchangeable.",
				citation:
					"GAO Red Book, Availability of Appropriations: Purpose; 31 U.S.C. §§ 1301(a), 1502(a), 1341(a)",
				sourceUrl: "https://www.gao.gov/assets/gao-17-797sp.pdf",
				sourceKind: "guidance",
			},
			{
				id: "igce-vs-funding",
				title: "IGCE versus funding and price",
				is: "An Independent Government Cost Estimate is an agency tool for analyzing proposed prices or costs. FAR 15.404-1 recognizes comparison with independent Government estimates as one proposal-analysis technique. It can shape affordability views; it does not itself obligate funds.",
				isNot:
					"The IGCE is not a promise of funding, not the contractor’s basis of estimate, and not a score key the offeror must match digit-for-digit.",
				fits: "Pricing builds a credible cost and price story from the solution; any lawful affordability signal informs strategy without replacing the company’s own estimate or inventing an obligated ceiling.",
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
		title: "Turn market signals into the right solicitation instrument",
		summary:
			"Learn to classify sources sought, RFI, RFQ, RFP, and IFB; use UCF L/M when they apply; and choose SOW, PWS, or SOO for the requirements shape.",
		intro:
			"The path from market research to an operative solicitation is where capture either builds a clean baseline — or invents one from webinars and hallway talk. Instrument vocabulary matters before a single page of proposal is written.",
		tags: ["notices", "solicitation", "ucf", "sow", "pws", "field-guide"],
		readingMinutes: 9,
		suggestedOrder: 5,
		pieces: [
			{
				id: "notice-types",
				title: "Sources sought, RFI, RFQ, RFP, and IFB",
				story:
					"A civilian agency posts a sources-sought notice, then signals that the next release could be an RFI, RFQ, RFP, or IFB. The capture lead asks what each would mean for the team’s response posture.",
				is: "Sources-sought notices and RFIs support market research and planning; RFI responses are not offers when the Government does not presently intend to award. An RFQ requests a quotation (and, depending on its terms, sometimes an offer). An RFP requests proposals in a negotiated acquisition. An IFB requests sealed bids evaluated without discussions.",
				isNot:
					"Every posted notice is not a solicitation capable of immediate award. An RFQ response is not automatically a binding offer unless the instrument makes it one. An IFB is not an invitation to negotiate after bid opening.",
				fits: "Classify the notice before staffing a response factory. Wait for each document’s instructions before deciding whether the agency expects capability data, a quote, a proposal, or a bid.",
				checklist: [
					"Name the notice type and its purpose",
					"Confirm whether responses are offers, quotations, or market research",
					"Hold proposal-grade process until a true solicitation controls",
				],
				citation: "FAR 15.201(e); FAR 13.004; FAR 14.101",
				sourceUrl: "https://www.acquisition.gov/far/15.201",
				sourceKind: "controlling-authority",
			},
			{
				id: "ucf-l-m",
				title: "When UCF Sections L and M apply",
				is: "Under the Uniform Contract Format for negotiated acquisitions, Section L contains instructions, conditions, and notices to offerors or respondents; Section M contains evaluation factors for award. Crosswalk every L instruction to the associated M factor, while also tracing requirements and terms in Sections C, H, I, and J.",
				isNot:
					"L and M are not universal labels for every FAR buy. Non-UCF packages (including many vehicle orders) use different sectioning — follow that document’s map, not muscle memory from Part 15 UCF.",
				fits: "Build the compliance matrix from the operative solicitation’s instruction and evaluation sections — after confirming UCF or an alternate structure.",
				citation: "FAR 15.204-1, Table 15-1",
				sourceUrl: "https://www.acquisition.gov/far/15.204-1",
				sourceKind: "controlling-authority",
			},
			{
				id: "sow-pws-soo",
				title: "SOW, PWS, and SOO",
				is: "A statement of work (SOW) typically specifies tasks and how work is to be done. A performance work statement (PWS) emphasizes outcomes and measurable performance standards. A statement of objectives (SOO) states overall objectives and leaves maximum flexibility for offerors to propose an approach — often including an offeror-developed PWS.",
				isNot:
					"Calling every requirements attachment a “SOW” does not make it one. A SOO is not a detailed Government PWS. The solicitation’s instructions control which artifact the offeror must submit.",
				fits: "In Shape and Propose, match solution depth to the requirements shape: method-heavy for many SOWs, metrics-heavy for PWS, offeror-architected for SOO.",
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
		title: "See how competition becomes a source-selection decision",
		summary:
			"Learn SSA vs evaluation-team roles and the paths of full-and-open, set-aside, and sole-source before anyone scores a proposal.",
		intro:
			"Color teams and “the board picked the winner” dominate folklore. The FAR assigns decision responsibility more carefully — and acquisition strategy chooses who may compete before anyone scores a volume.",
		tags: ["source-selection", "ssa", "competition", "set-aside", "decision"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "ssa-sseb",
				title: "Source selection authority vs. evaluation team",
				story:
					"Color teams, SSEBs, and “the evaluators” dominate proposal folklore. The FAR is clearer about who decides and who advises.",
				is: "The source selection authority (SSA) — often the contracting officer unless the agency head appoints someone else — establishes an evaluation team, ensures evaluation against the solicitation’s factors, considers advisory recommendations, and selects the source whose proposal is the best value to the Government.",
				isNot:
					"The evaluation team does not replace the SSA’s decision. Scoring every proposal alone is not the SSA’s default job description, and “the board picked the winner” is not how the regulation assigns responsibility.",
				fits: "In Part 15 negotiated acquisitions, this split explains why your proposal must speak to stated factors: the team evaluates against those factors; the SSA owns the selection judgment.",
				quote: {
					text: "The source selection authority shall— … Ensure that proposals are evaluated based solely on the factors and subfactors contained in the solicitation … Select the source or sources whose proposal is the best value to the Government.",
					citation: "FAR 15.303(b)",
					sourceUrl: "https://www.acquisition.gov/far/15.303",
				},
			},
			{
				id: "competition-paths",
				title: "Full and open, set-aside, and sole-source",
				is: "For open-market acquisitions within Part 6’s scope, full and open competition is the general rule. A small-business set-aside limits eligibility under Part 19 without requiring a separate Part 6 justification. A sole-source path needs an applicable FAR 6.302 authority and, when required, a written justification and approval — not program-office preference alone. Orders and other acquisitions outside Part 6 follow their own limited-source or fair-opportunity rules.",
				isNot:
					"A set-aside is not the same instrument as a sole-source award. Full and open does not mean a large business must be allowed to win a total small-business set-aside. Vehicle brand names do not rewrite competition rules.",
				fits: "At strategy time, name the competition path and the eligibility consequences for your prime structure — before you spend B&P as if the field were already fixed.",
				judgment:
					"Large primes should answer market research with facts and a credible small-business story; they should not treat OSDBU conversations as guarantees of full and open.",
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
		title: "Recognize what the Government actually awards",
		summary:
			"Learn what counts as a FAR contract, place FFP risk without false binaries, and contrast MAS vs GWAC so “we won the vehicle” stops being fuzzy.",
		intro:
			"Award language gets loose: “we won the vehicle,” “it’s FFP so we’re safe,” “MAS and GWAC are the same GSA thing.” This chapter tightens the instrument vocabulary capture and contracts share.",
		tags: ["contract", "ffp", "mas", "gwac", "definition", "contrast"],
		readingMinutes: 9,
		suggestedOrder: 7,
		pieces: [
			{
				id: "contract",
				title: "What a contract is",
				is: "A contract is a mutually binding legal relationship obligating the seller to furnish supplies or services and the buyer to pay for them. In the FAR sense it includes written commitments that obligate the Government to spend appropriated funds — awards, orders that become effective by acceptance or performance, and bilateral modifications, among other instruments.",
				isNot:
					"It is not a grant or cooperative agreement under 31 U.S.C. 6301 et seq. It is not a handshake, a slide deck, or an email that merely discusses future scope. It is not identical to a solicitation. And the acquisition system does not wait for a signed contract before every dispute: pre-award protests can challenge a solicitation or exclusion before a contract exists.",
				fits: "Clauses, modifications, invoices, and post-award protests assume a binding relationship. Pre-award protest work assumes a live competition and an operative solicitation. Name which world you are in.",
				judgment:
					"If you cannot point to an instrument — or to a solicitation defect you intend to challenge — you are still narrating upstream hope.",
				quote: {
					text: "Contract means a mutually binding legal relationship obligating the seller to furnish the supplies or services (including construction) and the buyer to pay for them. It includes all types of commitments that obligate the Government to an expenditure of appropriated funds and that, except as otherwise authorized, are in writing. … Contracts do not include grants and cooperative agreements covered by 31 U.S.C.6301, et seq.",
					citation: "FAR 2.101",
					sourceUrl: "https://www.acquisition.gov/far/2.101",
				},
			},
			{
				id: "ffp",
				title: "Firm-fixed-price risk",
				is: "A firm-fixed-price (FFP) contract provides a price that is not adjusted based on the contractor’s cost experience. It places maximum cost risk and full responsibility for profit or loss on the contractor, and it creates strong incentive to control costs.",
				isNot:
					"FFP is not a reimbursable budget. Cost overruns do not automatically become the Government’s problem. An FFP price is not “just an estimate the CO will fix later” unless a separate adjustment clause actually applies. FFP is also not the only alternative to cost-reimbursement — Part 16 includes T&M, labor-hour, incentive, EPA, and hybrid structures.",
				fits: "When pricing and capture argue about risk, place FFP on the fixed end of a spectrum of types — then name the actual type (or CLIN mix) in the solicitation before modeling margin.",
				quote: {
					text: "A firm-fixed-price contract provides for a price that is not subject to any adjustment on the basis of the contractor’s cost experience in performing the contract. This contract type places upon the contractor maximum risk and full responsibility for all costs and resulting profit or loss.",
					citation: "FAR 16.202-1",
					sourceUrl: "https://www.acquisition.gov/far/16.202-1",
				},
			},
			{
				id: "mas-vs-gwac",
				title: "MAS versus GWAC",
				is: "GSA Multiple Award Schedule (MAS) is the Federal Supply Schedule program for commercial offerings, with ordering procedures in FAR Subpart 8.4. A governmentwide acquisition contract (GWAC) is a separate governmentwide task- or delivery-order contract for information technology — Alliant and NASA SEWP are examples, not synonyms for MAS.",
				isNot:
					"MAS and GWAC are not interchangeable names for one underlying contract. Commercial status under Part 12 does not automatically select MAS. A GWAC is not limited to its awarding agency’s own buyers in the way a single-agency IDIQ often is — but access, scope, and pools still must be checked.",
				fits: "At vehicle selection, classify the buying path before chasing a brand: open-market negotiated, MAS order, GWAC/IDIQ order, or another authorized method.",
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
		title: "Treat ceilings and options as potential — not authorized work",
		summary:
			"Learn IDIQ minimums and ceilings, base vs options, and CLIN funding limits so you never perform or book work the Government hasn’t authorized.",
		intro:
			"Pipeline loves ceilings, option years, and CLIN totals. Delivery lives on allotted funding and written exercise. Confusing those numbers is how teams book backlog they cannot bill — or perform work they cannot get paid for.",
		tags: ["idiq", "options", "funding", "clin", "contrast", "failure-mode"],
		readingMinutes: 8,
		suggestedOrder: 8,
		pieces: [
			{
				id: "idiq-min-ceiling",
				title: "IDIQ minimum and ceiling",
				is: "An indefinite-delivery indefinite-quantity (IDIQ) contract states a minimum the Government must order and a maximum it may not exceed. Especially on a multiple-award vehicle, industry often calls the base award a “hunting license” — a metaphor, not FAR text: beyond the contractual minimum, the holder still must capture and win orders rather than book the vehicle ceiling as backlog.",
				isNot:
					"The ceiling is not guaranteed revenue. The minimum is not a proposal target shared equally among holders. Winning a seat on the vehicle is not winning every order under it.",
				fits: "Price and forecast the minimum honestly; treat the remainder of the ceiling as competitive potential that still requires order wins.",
				judgment:
					"Label “hunting license” as industry metaphor in reviews so finance never mistakes it for a FAR guarantee.",
				citation: "FAR 16.504(a)(1), 16.504(a)(4)(ii)",
				sourceUrl: "https://www.acquisition.gov/far/16.504",
				sourceKind: "controlling-authority",
			},
			{
				id: "base-and-options",
				title: "Base periods and options",
				is: "A base-plus-options structure may be evaluated across priced periods, but an option is not automatic backlog. The contracting officer must exercise the option by written notice within the time specified; a preliminary notice of intent preserves the process without committing the Government. Funds availability and continued need are among the exercise findings.",
				isNot:
					"Evaluated option prices are not a promise the option will be exercised. Preliminary notice is not exercise. Unexercised option value is not authorized work.",
				fits: "Model staffing and revenue with option-exercise risk while still pricing every evaluated period the solicitation requires.",
				citation: "FAR 17.207; FAR 52.217-9",
				sourceUrl: "https://www.acquisition.gov/far/17.207",
				sourceKind: "controlling-authority",
			},
			{
				id: "clin-funding",
				title: "CLIN value versus allotted funding",
				story:
					"CLIN 0001 shows a large estimated cost. Funded SLIN 0001AA shows a smaller allotted amount. The COR says keep the full team working — funds are “coming Monday.”",
				is: "CLINs and SLINs organize deliverables, pricing, accounting, funding, and performance periods. On an incrementally funded cost-reimbursement contract, the amount actually allotted — not the total estimated cost, ceiling, or option value — is the operative limit on paid and payable cost under the Limitation of Funds framework.",
				isNot:
					"Estimated CLIN value is not interchangeable with funded ceiling. Expected funding is not funded authority. COR urgency is not a funding modification.",
				fits: "Hand the win to delivery by preserving total potential value, estimated cost, obligated/allotted funding, and the specific work each funded line covers as separate columns.",
				checklist: [
					"Reconcile allotted funding to covered work and burn",
					"Give advance notice before hitting the allotted limit",
					"Stop or realign only on written CO funding direction",
				],
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
		title: "Run capture decisions with Pwin, price-to-win, and gates",
		summary:
			"Learn this course’s working Pwin definition, separate price-to-win from cost, and run gates and color reviews as house practice — not FAR mandates.",
		intro:
			"Not every Basics concept lives in the FAR. Capture still needs shared language for investment decisions. This chapter marks where regulation ends and disciplined house practice begins.",
		tags: ["pwin", "price-to-win", "gates", "capture-practice", "decision"],
		readingMinutes: 9,
		suggestedOrder: 9,
		pieces: [
			{
				id: "pwin",
				title: "Probability of win (Pwin) — course working definition",
				story:
					"Leadership asks for “the Pwin” as if it were a FAR metric. The room freezes between optimism and a fake decimal.",
				is: "In this course’s working definition, Pwin is an evidence-based decision input: a living judgment about win likelihood that updates when customer, competitive, solution, price, past-performance, and execution evidence changes. Neither the FAR nor a single industry body mandates one universal numeric formula — organizations must define and apply a documented method consistently.",
				isNot:
					"It is not a sales promise, not a quota, not a number frozen when B&P is approved, and not a count of meetings held. It is not a substitute for cost, price-to-win, or eligibility analysis.",
				fits: "Use it beside price-to-win and cost estimating: Pwin asks “can we win?”, price-to-win asks “what position wins?”, cost asks “what does performance cost us?” — three different questions.",
				judgment:
					"Say “course working definition” or “our method” out loud in gates so nobody mistakes Pwin for a regulatory score.",
				citation: "Industry capture practice; APMP Winning Business Ecosystem",
				sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
				sourceKind: "capture-practice",
			},
			{
				id: "price-to-win",
				title: "Price-to-win versus cost estimate",
				is: "Price-to-win estimates the competitive price or value position needed to win, given customer budget signals, evaluation method, and likely competitors. A cost estimate forecasts what the proposed solution will cost the company to perform. Pricing leadership must reconcile the two.",
				isNot:
					"Price-to-win is not the cost estimate plus maximum profit. It is not the IGCE. The terms are not interchangeable because the solicitation uses best-value tradeoff.",
				fits: "A winning target below executable cost is a warning to redesign or stop — not permission to invent savings in the pricing volume.",
				citation: "Industry capture practice",
				sourceUrl:
					"https://www.apmp.org/Common/Uploaded%20files/APMP/Certification/APMP%20Practitioner%20OTE%20Preparation%20Guide%202026%20-v3.pdf",
				sourceKind: "capture-practice",
			},
			{
				id: "gates-and-reviews",
				title: "Gates and color reviews (house convention)",
				is: "Bid/no-bid gates and color-team reviews (often called Pink, Red, and Gold) are common industry conventions for deciding whether to continue investing and for testing proposal maturity. Under one common house design, Pink tests planned content early, Red evaluates a substantially complete proposal as the customer would, and Gold confirms executive readiness and remaining risk before submit. Label this as capture practice — not FAR procedure.",
				isNot:
					"Gates are not ceremonial status meetings. Color names are not FAR-required. Gold approval cannot waive solicitation requirements. Sunk B&P is not a reason to continue a deteriorating pursuit.",
				fits: "Run gates on evidence and remaining cost-to-bid; run reviews on maturity questions so authors get useful feedback instead of three rounds of the same copyedit.",
				checklist: [
					"State the house gate criteria in writing",
					"Give each color review a distinct purpose",
					"Kill or bound recoveries when evidence collapses",
				],
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
		title: "Build the next proposal from today’s performance record",
		summary:
			"Learn to treat CPARS and delivery evidence as capture currency, and connect option exercise to recompete readiness before the next competition.",
		intro:
			"The opening chapter’s stations do not end at award. Performance creates the past-performance currency, customer trust, and option story the next competition will score — or the next protest will ignore if you waited until year four to care.",
		tags: ["cpars", "options", "recompete", "past-performance", "field-guide"],
		readingMinutes: 7,
		suggestedOrder: 10,
		pieces: [
			{
				id: "cpars-as-currency",
				title: "CPARS as future capture currency",
				story:
					"Kickoff for a covered multi-year services contract. Capture has moved on. Delivery proposes waiting until the recompete year to assemble past-performance evidence.",
				is: "Past performance is relevant to future source selections. For covered contracts and orders above applicable thresholds, evaluations are required at least annually and at completion, entered in CPARS (subject to type, order, threshold, and reporting exceptions). Delivery therefore creates competitive evidence from day one.",
				isNot:
					"CPARS is not a protest substitute. Waiting until year four is not a strategy. Asking capture to ghostwrite ratings for the CO is not integrity-preserving practice.",
				fits: "Map CPARS factors and customer outcomes to owners, evidence, quality controls, and regular reviews while performance can still improve — then hand a clean record to the next capture team.",
				checklist: [
					"Confirm whether the contract/order is CPARS-covered",
					"Assign evidence owners at kickoff",
					"Address issues while ratings can still change",
				],
				citation: "FAR 42.1501; FAR 42.1502; FAR 42.1503",
				sourceUrl: "https://www.acquisition.gov/far/42.1502",
				sourceKind: "controlling-authority",
			},
			{
				id: "options-and-recompete",
				title: "Options, continuity, and recompete",
				is: "Option exercise can extend performance when the CO follows the contract’s notice and exercise rules and finds funds, continued need, and advantage. Recompete planning backcasts from successor timing, PALT, and whether options or bridges are uncertainties — not certainties.",
				isNot:
					"Preliminary option notice is not exercise. A bridge is not permanent sole-source. Strong CPARS does not eliminate competition or protest risk on the follow-on.",
				fits: "Close the Basics shelf by tying delivery discipline to Find/Shape timing: today’s performance file is tomorrow’s proposal volume and tomorrow’s responsibility record.",
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
			"You now have a shelf, not a single anthology card: need versus contract, who may bind, where rules live, how money moves, how solicitations form, how competition decides, what awards are, what value is authorized, how contractors decide, and how performance seeds the next fight. Reading still does not clear the pie — check yourself when the map feels steadier.",
	}),
];
