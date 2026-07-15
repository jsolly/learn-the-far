import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Vehicle shelf — acquisition paths, holder access, MAS/BPA/IDIQ mechanics, and
 * lifecycle boundaries. Pieces use citation + sourceUrl + sourceKind (no invented quotes).
 *
 * Reading shape: each piece is a definition card (term title + expanded glossary
 * teach + optional Watch for + citation/quote).
 */
export const VEHICLE_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "buying-path-not-buzzword",
		unitId: "vehicle",
		title: "Open-market acquisitions versus vehicle orders and commercial status",
		summary:
			"Defines whether the agency is buying open-market or ordering under a vehicle, and when Part 12 commercial status applies.",
		intro:
			"Terms for open-market procurement versus order under an existing contract — before a forecast line gets treated as vehicle access.",
		tags: ["acquisition-path", "open-market", "vehicle-access", "channel-strategy"],
		readingMinutes: 7,
		suggestedOrder: 1,
		pieces: [
			{
				id: "path-first",
				title: "Acquisition path (open market vs vehicle order)",
				teach: "An acquisition path is either open-market procurement under the generally applicable FAR solicitation procedures, or an order under an existing contract limited by that contract’s scope, ordering rules, authorized ordering activities, and holder pool. FAR 16.504(a)(4)(v) requires an IDIQ solicitation and contract to describe the activities authorized to issue orders; Subpart 8.4 governs Schedule ordering. At opportunity intake, qualify pipeline stages on path, access, and scope — not customer enthusiasm alone. Confirm which instrument applies (open-market RFP/RFQ, MAS order/BPA, or named IDIQ/GWAC order), whether authorized users and the ordering guide support the claimed vehicle, and whether your entity holds the required pool, SIN, or domain.",
				watchFor:
					"Don’t assume any governmentwide contract you hold will let this agency order; treat every federal buy as a task order; or wait until award to ask path questions that control competition and access.",
				citation: "FAR 16.504(a)(4)(v); FAR 16.505; FAR Subpart 8.4",
				sourceUrl: "https://www.acquisition.gov/far/16.504",
				sourceKind: "controlling-authority",
			},
			{
				id: "commercial-not-channel",
				title: "Commercial status",
				teach: "Commercial status determines Part 12 policy and terms, not the buying channel. An open-market simplified acquisition follows Part 13 when authorized; a MAS order follows Subpart 8.4 and needs applicable Schedule coverage; a negotiated open-market RFP follows Part 15. When the customer is still choosing — or your team is tempted to pick the logo it knows best — compare estimated value, mandatory sources, available coverage, competition needs, and each procedure’s ordering rules before locking a lane.",
				watchFor:
					"Don’t treat ‘all commercial services must use Subpart 8.4’ as law; treat Part 13 as a contract you ‘hold’; or default every competition to a negotiated open-market RFP because the work is commercial.",
				citation: "FAR 8.404(a); FAR 12.102(b); FAR 13.003; FAR 15.000",
				sourceUrl: "https://www.acquisition.gov/far/8.404",
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
				label: "FAR Subpart 8.4 — Federal Supply Schedules",
				url: "https://www.acquisition.gov/far/subpart-8.4",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "access-belongs-to-holder",
		unitId: "vehicle",
		title: "Contract holders, privity, and vehicle on-ramps",
		summary:
			"Defines who may submit a prime order response, how on-ramps add holders, and how subcontract paths differ in privity.",
		intro:
			"Who may receive an order on a vehicle contract versus who may support as subcontractor or team member.",
		tags: ["vehicle-access", "holder", "subcontracting", "privity", "teaming"],
		readingMinutes: 6,
		suggestedOrder: 2,
		pieces: [
			{
				id: "holder-prime",
				title: "Contract holder (prime on vehicle)",
				teach: "Only an eligible contract holder can receive an order under that contract. A non-holder may pursue a properly structured subcontract or permitted team arrangement, subject to the holder’s bid decision and terms. FAR 9.604(e) leaves the holder fully responsible for prime performance; Government representatives recognize lack of privity with subcontractors and route direction through the contracting officer to the prime. Pipeline hygiene separates ‘prime on vehicle’ from ‘sub under holder’ forecasts, win strategies, and approval gates — name the holding legal entity and pool/domain/SIN, document role as prime holder versus sub/CTA member, and confirm who submits the order response and who invoices.",
				watchFor:
					"Don’t transfer the IDIQ to your company after award by assumption; treat affiliation as automatic access; or claim prime status without the named contract.",
				citation: "FAR 9.604(e); FAR 42.505; FAR 44.101",
				sourceUrl: "https://www.acquisition.gov/far/42.505",
				sourceKind: "controlling-authority",
			},
			{
				id: "on-ramp-parallel",
				title: "On-ramp (continuous vehicle access)",
				teach: "An on-ramp is a continuously open vehicle solicitation that lets new offerors seek direct holder access outside the original base award. When a target vehicle is continuously open for on-ramps (for example GSA’s OASIS+ solicitations), treat near-term participation and direct access as two decisions on two calendars: pursue a compliant role under an eligible holder while separately investing in a direct-access proposal. Access workstreams are capital projects; order capture is a different motion.",
				watchFor:
					"Don’t represent the company as a future holder because ‘they’ll add us when demand rises’; or wait until the task-order RFP to ask the agency to put you on the list.",
				citation: "GSA, OASIS+ Solicitations (continuously open)",
				sourceUrl:
					"https://www.gsa.gov/buy-through-us/products-and-services/professional-services/buy-services/oasis-plus/sellers-guide/solicitations-continuously-open",
				sourceKind: "guidance",
			},
		],
		furtherReading: [
			{
				label: "FAR 42.505 — Subcontracting",
				url: "https://www.acquisition.gov/far/42.505",
				kind: "controlling-authority",
			},
			{
				label: "GSA OASIS+ continuously open solicitations",
				url: "https://www.gsa.gov/buy-through-us/products-and-services/professional-services/buy-services/oasis-plus/sellers-guide/solicitations-continuously-open",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "read-contract-before-logo",
		unitId: "vehicle",
		title: "Ordering guides, program scope, and fair-opportunity rules",
		summary:
			"Defines the documents and FAR 16.505 rules that control order competition — independent of vehicle brand names.",
		intro:
			"Major vehicles share marketplace vocabulary but diverge on scope, holders, fees, and order procedures.",
		tags: ["ordering-guide", "scope", "Alliant", "SEWP", "OASIS+", "NITAAC"],
		readingMinutes: 8,
		suggestedOrder: 3,
		pieces: [
			{
				id: "program-fit",
				title: "GWAC and IDIQ program scope",
				teach: "A governmentwide acquisition contract or multiple-award IDIQ is a distinct program with its own scope, holder pool, and ordering guide — not an interchangeable logo. Start every recommendation with requirement → scope → eligible holder → ordering guide → customer authority. As of July 2026 desk notes in this unit: Alliant targets comprehensive IT solutions (Alliant 2 orderable through June 2028; Alliant 3 operational); NASA SEWP centers on IT, communications, and audiovisual products and solutions (SEWP V operating; SEWP VI planning dates are contingent); OASIS+ spans six IDIQs and 13 non-IT domains; NITAAC’s CIO-SP3 family remains the operating CIO-SP path through its published end date — not an un-operational CIO-SP4 rumor.",
				watchFor:
					"Don’t treat these as interchangeable ‘GSA IT schedules’; map OASIS+ as an IT GWAC for technology work; or select by brand familiarity alone.",
				citation: "GSA Alliant; NASA SEWP; GSA OASIS+; NITAAC CIO-SP3",
				sourceUrl: "https://www.sewp.nasa.gov/",
				sourceKind: "guidance",
			},
			{
				id: "order-procedures",
				title: "Fair opportunity (16.505 ordering)",
				teach: "Fair opportunity is the default procedure for multiple-award IDIQ orders above the micro-purchase threshold: build to FAR 16.505, the base contract, ordering guide, and order request — not a pasted open-market Part 15 template. Part 6 competition rules and Subpart 15.3 policies are excluded, but other applicable FAR provisions and incorporated terms still bind, including Part 15 pricing provisions when they apply. Above the micro-purchase threshold, eligible awardees generally must receive fair opportunity unless a documented exception applies. Maintain vehicle-specific playbooks; debrief and notice rules at high dollar thresholds still matter.",
				watchFor:
					"Don’t paste a full open-market Part 15 template into every fair-opportunity response; ignore the base contract; or assume base-contract competition eliminates order-level consideration.",
				citation: "FAR 16.505(b)",
				sourceUrl: "https://www.acquisition.gov/far/16.505",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 16.505 — Ordering",
				url: "https://www.acquisition.gov/far/16.505",
				kind: "controlling-authority",
			},
			{
				label: "NASA SEWP",
				url: "https://www.sewp.nasa.gov/",
				kind: "guidance",
			},
			{
				label: "NITAAC CIO-SP3",
				url: "https://nitaac.nih.gov/gwacs/cio-sp3",
				kind: "guidance",
			},
		],
	}),

	chapter({
		id: "mas-contract-coverage-order",
		unitId: "vehicle",
		title: "GSA Multiple Award Schedule contracts, SINs, and ordering procedures",
		summary:
			"Defines the Schedule contract versus an order, SIN coverage, and FAR 8.405-1 versus 8.405-2 ordering methods.",
		intro:
			"The underlying Schedule contract, awarded SIN coverage, and the Subpart 8.4 order (or BPA) that actually buys work.",
		tags: ["GSA-MAS", "Federal-Supply-Schedule", "SIN", "FAR-8.405", "open-market-items"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "mas-instruments",
				title: "Multiple Award Schedule (MAS)",
				teach: "MAS is GSA’s governmentwide Federal Supply Schedule program for commercial products, services, and solutions. GSA awards underlying indefinite-delivery Schedule contracts; eligible ordering activities place orders or establish Schedule BPAs under FAR Subpart 8.4. Capture language must separate ‘we hold Schedule X / SIN Y’ from ‘we won order Z’ — winning an agency order does not make you a Schedule holder.",
				watchFor:
					"Don’t call MAS an agency-specific task order that becomes governmentwide after first award; treat it as a vendor list without contracts; or label it a Part 35 R&D vehicle.",
				citation: "FAR 8.402(a), 8.404(a); GSA Multiple Award Schedule",
				sourceUrl:
					"https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule",
				sourceKind: "controlling-authority",
			},
			{
				id: "products-vs-services",
				title: "FAR 8.405-1 versus 8.405-2",
				teach: "FAR 8.405-1 covers ordering supplies and services that do not require a statement of work. FAR 8.405-2 covers services requiring an SOW — including a request that describes the work and evaluation basis. Parts 13, 14, 15, and 19 generally do not apply to MAS orders except where Subpart 8.4 directs otherwise, but you still follow every procedure the agency announces. Match the RFQ type before choosing templates and page counts.",
				watchFor:
					"Don’t apply a product-quote playbook to an SOW services order; convert a Schedule buy into Part 15 wholesale because evaluation factors appear; or ignore announced evaluation criteria.",
				citation: "FAR 8.405-1; FAR 8.405-2; FAR 8.404(a)",
				sourceUrl: "https://www.acquisition.gov/far/subpart-8.4",
				sourceKind: "controlling-authority",
			},
			{
				id: "coverage-and-open-market",
				title: "SIN coverage and open-market line items",
				teach: "SIN coverage is the awarded Schedule scope from which you may quote. Quote only from awarded Schedule coverage. In a MAS Contractor Team Arrangement, map every requirement to the responsible member’s SINs and rates and document proposal, ordering, invoicing, and administration before submission. Non-Schedule items on a Schedule order require FAR 8.402(f) discipline: clear open-market labeling, applicable regulations and clauses, and a contracting-officer price-reasonableness determination. Solution design reviews should include a coverage map before price.",
				watchFor:
					"Don’t hide open-market products inside a Schedule bundle; let a CTA ‘convert’ non-Schedule items; or have the lead quote labor categories another member alone holds.",
				citation: "FAR 8.402(f); GSA MAS Contractor Team Arrangements",
				sourceUrl: "https://www.acquisition.gov/far/8.402",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "GSA Multiple Award Schedule",
				url: "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule",
				kind: "guidance",
			},
			{
				label: "FAR 8.402 — General",
				url: "https://www.acquisition.gov/far/8.402",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "bpa-framework-not-revenue",
		unitId: "vehicle",
		title: "Schedule blanket purchase agreements and BPA orders",
		summary:
			"Defines Schedule BPAs, how BPA orders work, and limited-sources rules — a BPA is not booked revenue.",
		intro:
			"Schedule BPA purpose, order-level competition, and limited-sources rules — framework, not booked revenue.",
		tags: ["Schedule-BPA", "order-competition", "limited-sources", "repetitive-needs"],
		readingMinutes: 7,
		suggestedOrder: 5,
		pieces: [
			{
				id: "bpa-purpose",
				title: "Schedule blanket purchase agreement (BPA)",
				teach: "A Schedule BPA is a framework under FAR 8.405-3 that streamlines repetitive Schedule buys by fixing ordering frequency, invoicing, discounts, requirements, delivery, and timing. Favor a BPA when that recurring framework will streamline later purchases; use a direct Schedule order for a discrete one-off. Advise customers with pattern-of-need facts — not with a preference for locking out rivals.",
				watchFor:
					"Don’t use a BPA to avoid Subpart 8.4 competition and best-value procedures; or treat a large estimated value as automatically ‘more efficient’ than an order for a one-off need.",
				citation: "FAR 8.405-3(a)",
				sourceUrl: "https://www.acquisition.gov/far/8.405-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "bpa-orders",
				title: "BPA orders (Schedule)",
				teach: "A BPA order is a purchase under an established Schedule BPA — and for multiple-award BPAs above the simplified acquisition threshold, the ordering activity generally must solicit BPA holders offering the required supplies or services and fairly consider responses unless a documented limited-sources path applies. Rotation alone does not perform that competition. Keep order-level capture plans alive under BPAs — same seriousness as IDIQ fair opportunity. Confirm single- versus multiple-award BPA structure, watch for RFQs to all holders offering the requirement, and treat limited-sources claims as CO documentation problems — not account promises.",
				watchFor:
					"Don’t book an equal share of the BPA ceiling as backlog; or treat BPA establishment as the final source selection for every future requirement.",
				citation: "FAR 8.405-3(c)(2); FAR 8.405-6",
				sourceUrl: "https://www.acquisition.gov/far/8.405-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "limited-sources",
				title: "Limited sources (Schedule orders)",
				teach: "Limited sources on a Schedule order above the SAT is a written exception path under FAR 8.405-6 — not casual incumbent convenience — governing justification, approval, and often post-award posting. Contractors may supply objective transition facts; they should not draft imaginary exceptions. Help the record; do not invent authorities.",
				watchFor:
					"Don’t treat ‘incumbent status eliminates competition’ as law; or swap in a Part 6 J&A as if frameworks were interchangeable.",
				citation: "FAR 8.405-6",
				sourceUrl: "https://www.acquisition.gov/far/8.405-6",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 8.405-3 — Blanket purchase agreements",
				url: "https://www.acquisition.gov/far/8.405-3",
				kind: "controlling-authority",
			},
			{
				label: "FAR 8.405-6 — Limiting sources",
				url: "https://www.acquisition.gov/far/8.405-6",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "idiq-compete-twice",
		unitId: "vehicle",
		title: "Multiple-award IDIQ pools, ceilings, and fair opportunity",
		summary:
			"Defines base-pool award versus order award, IDIQ ceilings, and fair-opportunity exceptions.",
		intro:
			"Two competitions on multiple-award IDIQs — base pool placement and order-level fair opportunity — plus ceiling math.",
		tags: ["IDIQ", "fair-opportunity", "task-order", "ceiling-burn", "exceptions"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "two-competitions",
				title: "Base pool versus order award",
				teach: "On a multiple-award IDIQ, base-contract competition creates the holder pool and usually a minimum guarantee; order-level competition awards specific work. Above the micro-purchase threshold, FAR 16.505(b) requires a fair opportunity for each eligible multiple-award contractor unless a listed exception applies with contracting-officer documentation. Incumbency is not an automatic follow-on right. Capture plans under IDIQs are order campaigns — budget and staff them that way.",
				watchFor:
					"Don’t cancel the IDIQ to run Part 15 for every order; award every order to the lowest base labor rate; or let a holder waive fair opportunity for everyone else.",
				citation: "FAR 16.505(b)(1); FAR 16.505(b)(2)",
				sourceUrl: "https://www.acquisition.gov/far/16.505",
				sourceKind: "controlling-authority",
			},
			{
				id: "ceiling-burn",
				title: "IDIQ ceiling",
				teach: "An IDIQ ceiling is the stated maximum the Government may not exceed under FAR 16.504 — often in dollars, sometimes shared across holders. Ceiling burn follows the contract: shared versus per-contract maximums, and which orders count. When the maximum is shared, advise capacity from remaining aggregate room — not from your wins alone. Customer advising and bid/no-bid both need a current ordering report, not a slide from award day.",
				watchFor:
					"Don’t treat the maximum as a non-binding planning estimate; wait until final payment to reduce remaining capacity; or calculate remaining room from your wins alone on a shared ceiling.",
				citation: "FAR 16.504(a)",
				sourceUrl: "https://www.acquisition.gov/far/16.504",
				sourceKind: "controlling-authority",
			},
			{
				id: "urgency-scope",
				title: "Fair-opportunity exceptions",
				teach: "Fair-opportunity exceptions are listed rationales in FAR 16.505(b)(2) — urgency, only one capable source, logical follow-on in the Government’s interest, satisfying a minimum guarantee, and others — each requiring contracting-officer documentation. Urgent recovery work should not silently expand into years of routine operations without returning to fair opportunity when practicable. Size bridges to the emergency and protect the competition record for enduring work.",
				watchFor:
					"Don’t treat program-office ‘high priority’ labels as a substitute for CO findings; skip documentation because urgency ‘is obvious’; or use the first outage to shield all future operations from fair opportunity.",
				citation: "FAR 16.505(b)(2)",
				sourceUrl: "https://www.acquisition.gov/far/16.505",
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
				label: "FAR 16.505 — Ordering",
				url: "https://www.acquisition.gov/far/16.505",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "vehicle-lifecycles-boundaries",
		unitId: "vehicle",
		title: "Vehicle ordering periods and in-scope order limits",
		summary:
			"Defines vehicle lifecycle windows and when an order stays within base-contract scope — leftover ceiling does not cure a cardinal change.",
		intro:
			"Vehicle generations, ordering periods, and scope limits — ceiling room does not cure a cardinal change.",
		tags: ["lifecycle", "on-ramp", "scope", "cardinal-change", "ordering-period"],
		readingMinutes: 7,
		suggestedOrder: 7,
		pieces: [
			{
				id: "lifecycle-check",
				title: "Vehicle lifecycle",
				teach: "Vehicle lifecycle is the operating period of a contract generation — including option/extension status and whether a successor is planning versus operational. Before promising access, confirm which generation is orderable. Treat agency ‘intent to extend’ and anticipated start dates as contingent until options and awards are effective. Quarterly portfolio reviews should refresh vehicle end dates the way finance refreshes rates.",
				watchFor:
					"Don’t use a non-operational successor as a current access path; or assume brand continuity means identical scope and holder lists.",
				citation: "GSA / NASA / NITAAC program announcements (verify current dates)",
				sourceUrl: "https://www.gsa.gov/buy-through-us/products-and-services/professional-services/buy-services/oasis-plus",
				sourceKind: "guidance",
			},
			{
				id: "scope-both-layers",
				title: "Order scope (within base contract)",
				teach: "Order scope is the work authorized under a specific order, which must remain within the scope, period, and maximum value of the underlying contract. Material additions risk a cardinal change outside the original competition — GAO has treated materially different added services as improper sole-source awards outside the original contract’s scope, with payment and protest risk traveling together. Analyze both base-IDIQ and order layers; obtain contracting-officer direction before performing; steer out-of-scope needs to a competed or otherwise authorized path.",
				watchFor:
					"Don’t accept work on program-office email because ‘we’re under ceiling’; or treat shared labor categories as proof of scope.",
				citation: "FAR 16.505(a)(2); FAR 43.102(a); GAO B-237434",
				sourceUrl: "https://www.gao.gov/products/b-237434",
				sourceKind: "decision",
			},
		],
		furtherReading: [
			{
				label: "FAR 16.505(a) — General ordering",
				url: "https://www.acquisition.gov/far/16.505",
				kind: "controlling-authority",
			},
			{
				label: "FAR 43.102 — Policy (modifications)",
				url: "https://www.acquisition.gov/far/43.102",
				kind: "controlling-authority",
			},
		],
	}),

	chapter({
		id: "gwac-vs-schedule-lane",
		unitId: "vehicle",
		title: "Choosing between a GWAC and a GSA Schedule",
		summary:
			"Defines how GWAC and MAS lanes differ by scope, holders, and ordering mechanics.",
		intro:
			"Choosing between a GWAC/IDIQ lane and a MAS lane once requirement, access, and customer authority are clear.",
		tags: ["GWAC", "GSA-MAS", "channel-strategy", "vehicle-selection"],
		readingMinutes: 5,
		suggestedOrder: 8,
		pieces: [
			{
				id: "lane-choice",
				title: "GWAC versus MAS lane selection",
				teach: "Lane selection is the choice between a GWAC/multiple-award IDIQ path and a MAS path based on scope fit, holder access, and ordering mechanics — not brand habit. Prefer a GWAC or multiple-award IDIQ when the requirement maps cleanly to that program’s scope (for example broad IT solutions on Alliant, product-centered IT on SEWP, non-IT professional services on an OASIS+ domain), the eligible holder is on the right pool, and the customer will order under that contract’s guide. Prefer MAS when commercial Schedule coverage, SIN fit, and Subpart 8.4 ordering (or a Schedule BPA) better match value, competition needs, and authorized users. Confirm requirement maps to program SOW/SIN/domain without contortion, prime (or CTA/sub path) has real access, customer ordering authority and timeline match the lane’s procedures, and order-level competition rules are understood and staffed.",
				watchFor:
					"Don’t default to ‘MAS for everything commercial’ or ‘GWAC for everything IT’; or select by industrial funding fee or logo familiarity while ignoring holder and scope gaps.",
				citation: "FAR 8.404; FAR 16.505; GSA MAS; agency GWAC program pages",
				sourceUrl: "https://www.acquisition.gov/far/8.404",
				sourceKind: "controlling-authority",
			},
		],
		furtherReading: [
			{
				label: "FAR 8.404 — Use of Federal Supply Schedules",
				url: "https://www.acquisition.gov/far/8.404",
				kind: "controlling-authority",
			},
			{
				label: "GSA Multiple Award Schedule",
				url: "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule",
				kind: "guidance",
			},
		],
	}),
];
