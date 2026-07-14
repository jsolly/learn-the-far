import { chapter } from "../helpers";
import type { Chapter } from "../types";

/**
 * Vehicle shelf — acquisition paths, holder access, MAS/BPA/IDIQ mechanics, and
 * lifecycle boundaries. Pieces use citation + sourceUrl + sourceKind (no invented quotes).
 */
export const VEHICLE_SHELF_CHAPTERS: Chapter[] = [
	chapter({
		id: "buying-path-not-buzzword",
		unitId: "vehicle",
		title: "A Buying Path, Not a Buzzword",
		summary: "Confirm the agency’s channel—open market vs order—before treating a forecast as ‘on a vehicle.’",
		intro:
			"‘It’s on a vehicle’ is not an acquisition strategy. Civilian capture starts by naming the buying path: open-market solicitation under the generally applicable FAR procedures, or an order under an existing contract with defined scope, holders, and ordering rules. This chapter installs that distinction as the first shelf habit.",
		tags: ["acquisition-path", "open-market", "vehicle-access", "channel-strategy"],
		readingMinutes: 7,
		suggestedOrder: 1,
		pieces: [
			{
				id: "path-first",
				title: "Name the path before the logo",
				story:
					"An account executive says the opportunity is ‘on a vehicle.’ No vehicle is named. Your company holds several contracts. The requirement might also compete outside them. Pipeline optimism is not eligibility.",
				is: "Establish the agency’s intended acquisition path, the vehicle’s scope and authorized ordering activities, and whether the prime holds the required contract and pool. An IDIQ solicitation and contract must describe activities authorized to issue orders; Subpart 8.4 governs Schedule ordering. Fit is an early bid gate.",
				isNot:
					"It is not assuming any governmentwide contract you hold will let this agency order, not treating every federal buy as a task order, and not waiting until award to ask path questions that control competition and access.",
				fits: "Qualify pipeline stages on path + access + scope—not on customer enthusiasm alone.",
				checklist: [
					"Ask which instrument: open-market RFP/RFQ, MAS order/BPA, or named IDIQ/GWAC order",
					"Confirm authorized users and ordering guide if a vehicle is claimed",
					"Confirm your entity holds the pool / SIN / domain required",
				],
				citation: "FAR 16.504(a)(4)(v); FAR 16.505; FAR Subpart 8.4",
				sourceUrl: "https://www.acquisition.gov/far/16.504",
				sourceKind: "controlling-authority",
			},
			{
				id: "commercial-not-channel",
				title: "Commercial status is not a channel picker",
				is: "Part 12 sets commercial policy and terms; it does not automatically select MAS, simplified acquisition, or Part 15. Compare estimated value, mandatory sources, available coverage, competition needs, and each procedure’s ordering rules.",
				isNot:
					"It is not ‘all commercial services must use Subpart 8.4,’ not treating Part 13 as a contract you ‘hold,’ and not defaulting every competition to a negotiated open-market RFP.",
				fits: "Use channel comparison when the customer is still choosing—and when your team is tempted to pick the logo they know best.",
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
		title: "Access Belongs to the Holder",
		summary: "Only an eligible holder submits the prime order response—subcontract paths are real but different.",
		intro:
			"Corporate capability does not create privity on someone else’s IDIQ. This chapter separates holder-led prime pursuit from partner-led subcontract roles, and keeps pipeline labels honest when your company is not on the contract.",
		tags: ["vehicle-access", "holder", "subcontracting", "privity", "teaming"],
		readingMinutes: 6,
		suggestedOrder: 2,
		pieces: [
			{
				id: "holder-prime",
				title: "Who can receive the order",
				story:
					"You do not hold the named multiple-award pool. A qualified holder invites you to support its task-order bid. Listing yourself as prime because ‘we can do the work’ invents access the contract does not grant.",
				is: "Only an eligible contract holder can receive an order under that contract. A non-holder may pursue a properly structured subcontract or permitted team arrangement, subject to the holder’s bid decision and terms. Represent the opportunity as partner-led until workshare and bid authority are clear.",
				isNot:
					"It is not transferring the IDIQ to your company after award by assumption, not treating affiliation as automatic access, and not claiming prime status without the named contract.",
				fits: "Pipeline hygiene: separate ‘prime on vehicle’ from ‘sub under holder’ forecasts, win strategies, and approval gates.",
				judgment:
					"FAR 9.604(e) leaves the holder fully responsible for prime performance; Government representatives recognize lack of privity with subcontractors and route direction through the contracting officer to the prime.",
				checklist: [
					"Name the holding legal entity and pool/domain/SIN",
					"Document your role: prime holder vs sub/CTA member",
					"Confirm who submits the order response and who invoices",
				],
				citation: "FAR 9.604(e); FAR 42.505; FAR 44.101",
				sourceUrl: "https://www.acquisition.gov/far/42.505",
				sourceKind: "controlling-authority",
			},
			{
				id: "on-ramp-parallel",
				title: "Near-term role vs future access",
				is: "When a target vehicle is continuously open for on-ramps (for example GSA’s OASIS+ solicitations), pursue a compliant near-term role under an eligible holder while separately investing in a direct-access proposal—two decisions, two calendars.",
				isNot:
					"It is not representing the company as a future holder because ‘they’ll add us when demand rises,’ and not waiting until the task-order RFP to ask the agency to put you on the list.",
				fits: "Portfolio strategy for major civilian pipelines: access workstreams are capital projects; order capture is a different motion.",
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
		title: "Read the Contract Before the Logo",
		summary: "Ordering guides, scope, and fair-opportunity rules beat brand familiarity every time.",
		intro:
			"Alliant, SEWP, OASIS+, CIO-SP, and MAS share a marketplace vocabulary—and diverge on scope, holders, fees, and order procedures. This chapter trains capture to open the base contract and ordering guide before importing a Part 15 template or picking a famous logo.",
		tags: ["ordering-guide", "scope", "Alliant", "SEWP", "OASIS+", "NITAAC"],
		readingMinutes: 8,
		suggestedOrder: 3,
		pieces: [
			{
				id: "program-fit",
				title: "Map requirement to program scope",
				is: "Treat major vehicles as distinct programs. As of July 2026 desk notes in this unit: Alliant targets comprehensive IT solutions (Alliant 2 orderable through June 2028; Alliant 3 operational); NASA SEWP centers on IT, communications, and audiovisual products and solutions (SEWP V operating; SEWP VI planning dates are contingent); OASIS+ spans six IDIQs and 13 non-IT domains; NITAAC’s CIO-SP3 family remains the operating CIO-SP path through its published end date—not an un-operational CIO-SP4 rumor.",
				isNot:
					"It is not treating these as interchangeable ‘GSA IT schedules,’ not mapping OASIS+ as an IT GWAC for technology work, and not selecting by brand familiarity alone.",
				fits: "Start every vehicle recommendation with requirement → scope → eligible holder → ordering guide → customer authority.",
				citation: "GSA Alliant; NASA SEWP; GSA OASIS+; NITAAC CIO-SP3",
				sourceUrl: "https://www.sewp.nasa.gov/",
				sourceKind: "guidance",
			},
			{
				id: "order-procedures",
				title: "Build to 16.505 and the order request",
				is: "For multiple-award IDIQ orders, follow FAR 16.505, the base contract, ordering guide, and order request. Part 6 competition rules and Subpart 15.3 policies are excluded—but other applicable FAR provisions and incorporated terms still bind, including Part 15 pricing provisions when they apply. Above the micro-purchase threshold, fair opportunity is the default among eligible awardees unless a documented exception applies.",
				isNot:
					"It is not pasting a full open-market Part 15 template into every fair-opportunity response, not ignoring the base contract, and not assuming base-contract competition eliminates order-level consideration.",
				fits: "Proposal ops: maintain vehicle-specific playbooks; debrief and notice rules at high dollar thresholds still matter.",
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
		title: "MAS: Contract, Coverage, and Order",
		summary: "Schedule contract ≠ order; SINs and 8.405 procedures decide what you can sell and how.",
		intro:
			"GSA Multiple Award Schedule is a governmentwide Federal Supply Schedule program—not a single agency task order that somehow becomes your Schedule. This chapter separates the underlying Schedule contract, awarded coverage, and the Subpart 8.4 order (or BPA) that actually buys work.",
		tags: ["GSA-MAS", "Federal-Supply-Schedule", "SIN", "FAR-8.405", "open-market-items"],
		readingMinutes: 8,
		suggestedOrder: 4,
		pieces: [
			{
				id: "mas-instruments",
				title: "Three instruments, one program",
				is: "MAS is GSA’s Schedule program for commercial products, services, and solutions. GSA awards underlying indefinite-delivery Schedule contracts; eligible ordering activities place orders or establish Schedule BPAs under FAR Subpart 8.4. Winning an agency order does not make you a Schedule holder.",
				isNot:
					"It is not an agency-specific task order that becomes governmentwide after first award, not a vendor list without contracts, and not a Part 35 R&D vehicle.",
				fits: "Capture language: ‘we hold Schedule X / SIN Y’ versus ‘we won order Z’—different assets.",
				citation: "FAR 8.402(a), 8.404(a); GSA Multiple Award Schedule",
				sourceUrl:
					"https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule",
				sourceKind: "controlling-authority",
			},
			{
				id: "products-vs-services",
				title: "8.405-1 vs 8.405-2",
				is: "FAR 8.405-1 covers ordering supplies and services that do not require a statement of work. FAR 8.405-2 covers services requiring an SOW—including a request that describes the work and evaluation basis. Parts 13, 14, 15, and 19 generally do not apply to MAS orders except where Subpart 8.4 directs otherwise; still follow every procedure the agency announces.",
				isNot:
					"It is not applying a product-quote playbook to an SOW services order, not converting a Schedule buy into Part 15 wholesale because factors appear, and not ignoring announced evaluation criteria.",
				fits: "Proposal managers: match the RFQ type before choosing templates and page counts.",
				citation: "FAR 8.405-1; FAR 8.405-2; FAR 8.404(a)",
				sourceUrl: "https://www.acquisition.gov/far/subpart-8.4",
				sourceKind: "controlling-authority",
			},
			{
				id: "coverage-and-open-market",
				title: "SINs, CTAs, and open-market line items",
				is: "Quote only from awarded Schedule coverage. In a MAS Contractor Team Arrangement, map every requirement to the responsible member’s SINs and rates and document proposal, ordering, invoicing, and administration. Non-Schedule items on a Schedule order require FAR 8.402(f) discipline: clear open-market labeling, applicable regulations and clauses, and a contracting-officer price-reasonableness determination.",
				isNot:
					"It is not hiding open-market products inside a Schedule bundle, not letting a CTA ‘convert’ non-Schedule items, and not having the lead quote labor categories another member alone holds.",
				fits: "Solution design reviews should include a coverage map before price.",
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
		title: "A BPA Is a Framework, Not Revenue",
		summary: "Schedule BPAs streamline repetitive orders—they do not book the ceiling or cancel order competition.",
		intro:
			"Agencies establish Schedule BPAs to make recurring buys efficient—not to hand incumbents a rotational entitlement. This chapter keeps BPA purpose, order-level competition, and limited-sources rules in the same frame.",
		tags: ["Schedule-BPA", "order-competition", "limited-sources", "repetitive-needs"],
		readingMinutes: 7,
		suggestedOrder: 5,
		pieces: [
			{
				id: "bpa-purpose",
				title: "When a BPA earns its keep",
				is: "FAR 8.405-3 authorizes Schedule BPAs to fill repetitive needs and to nail down ordering frequency, invoicing, discounts, requirements, delivery, and timing. Favor a BPA when that recurring framework will streamline later purchases; use a direct Schedule order for a discrete one-off.",
				isNot:
					"It is not a way to avoid Subpart 8.4 competition and best-value procedures, and not automatically ‘more efficient’ because the estimated value is large.",
				fits: "Advise customers with pattern-of-need facts—not with a preference for locking out rivals.",
				citation: "FAR 8.405-3(a)",
				sourceUrl: "https://www.acquisition.gov/far/8.405-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "bpa-orders",
				title: "Orders still compete",
				story:
					"A multiple-award Schedule BPA is in place. The incumbent says orders will rotate and capture can stand down. That is how teams miss RFQs.",
				is: "For multiple-award BPA orders above the simplified acquisition threshold, the ordering activity generally must solicit BPA holders offering the required supplies or services and fairly consider responses unless a documented limited-sources path applies. Rotation alone does not perform that competition.",
				isNot:
					"It is not booking an equal share of the BPA ceiling as backlog, and not treating BPA establishment as the final source selection for every future requirement.",
				fits: "Keep order-level capture plans alive under BPAs—same seriousness as IDIQ fair opportunity.",
				checklist: [
					"Confirm single- vs multiple-award BPA structure",
					"Watch for RFQs to all holders offering the requirement",
					"Treat limited-sources claims as CO documentation problems—not account promises",
				],
				citation: "FAR 8.405-3(c)(2); FAR 8.405-6",
				sourceUrl: "https://www.acquisition.gov/far/8.405-3",
				sourceKind: "controlling-authority",
			},
			{
				id: "limited-sources",
				title: "Limited sources is a written exception",
				is: "When an agency seeks to limit sources on a Schedule order above the SAT, FAR 8.405-6—not casual incumbent convenience—governs justification, approval, and often post-award posting. Contractors may supply objective transition facts; they should not draft imaginary exceptions.",
				isNot:
					"It is not ‘incumbent status eliminates competition,’ and not swapping in a Part 6 J&A as if frameworks were interchangeable.",
				fits: "Capture ethics: help the record; do not invent authorities.",
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
		title: "Multiple-Award IDIQs Compete Twice",
		summary: "Base award wins a hunting license; fair opportunity (or a documented exception) wins the order.",
		intro:
			"Multiple-award IDIQ folklore says ‘we already competed.’ The FAR says eligible awardees generally get a fair opportunity on each order above the micro-purchase threshold. This chapter makes the two competitions—and the ceiling math—explicit.",
		tags: ["IDIQ", "fair-opportunity", "task-order", "ceiling-burn", "exceptions"],
		readingMinutes: 8,
		suggestedOrder: 6,
		pieces: [
			{
				id: "two-competitions",
				title: "Base pool vs order award",
				is: "Base-contract competition creates the holder pool and usually a minimum guarantee. Above the micro-purchase threshold, FAR 16.505(b) requires a fair opportunity for each eligible multiple-award contractor unless a listed exception applies with contracting-officer documentation. Incumbency is not an automatic follow-on right.",
				isNot:
					"It is not canceling the IDIQ to run Part 15 for every order, not awarding every order to the lowest base labor rate, and not letting a holder waive fair opportunity for everyone else.",
				fits: "Capture plans under IDIQs are order campaigns—budget and staffing them that way.",
				citation: "FAR 16.505(b)(1); FAR 16.505(b)(2)",
				sourceUrl: "https://www.acquisition.gov/far/16.505",
				sourceKind: "controlling-authority",
			},
			{
				id: "ceiling-burn",
				title: "Read the maximum the contract wrote",
				story:
					"A shared $5B maximum shows $3.8B in counted orders. Your company won $400M. A customer wants a $1.5B order. Your ‘remaining share’ math is wrong if the ceiling is vehicle-wide.",
				is: "FAR 16.504 requires stated minimums and maximums (often in dollars). Ceiling burn follows the contract: shared vs per-contract maximums, and which orders count. Advise capacity from remaining aggregate room—not from your wins alone—when the maximum is shared.",
				isNot:
					"It is not treating the maximum as a non-binding planning estimate, and not waiting until final payment to reduce remaining capacity.",
				fits: "Customer advising and bid/no-bid both need a current ordering report, not a slide from award day.",
				citation: "FAR 16.504(a)",
				sourceUrl: "https://www.acquisition.gov/far/16.504",
				sourceKind: "controlling-authority",
			},
			{
				id: "urgency-scope",
				title: "Exceptions track the rationale",
				is: "Listed exceptions—urgency, only one capable source, logical follow-on in the Government’s interest, satisfying a minimum guarantee, and others—require documentation. Urgent recovery work should not silently expand into years of routine operations without returning to fair opportunity when practicable.",
				isNot:
					"It is not program-office ‘high priority’ labels as a substitute for CO findings, and not skipping documentation because urgency ‘is obvious.’",
				fits: "Contracts and capture should size bridges to the emergency and protect the competition record for enduring work.",
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
		title: "Vehicles Have Lifecycles and Boundaries",
		summary: "Ordering periods, on-ramps, and scope limits—ceiling room does not cure a cardinal change.",
		intro:
			"Vehicles expire, on-ramp, and split into generations. Orders must stay inside base-contract scope, period, and maximum value. This chapter ties lifecycle awareness to scope discipline so teams neither sell a sunset vehicle nor perform out-of-scope work on email.",
		tags: ["lifecycle", "on-ramp", "scope", "cardinal-change", "ordering-period"],
		readingMinutes: 7,
		suggestedOrder: 7,
		pieces: [
			{
				id: "lifecycle-check",
				title: "Verify the operating vehicle",
				is: "Before promising access, confirm which generation is orderable, option/extension status, and whether a successor is planning versus operational. Treat agency ‘intent to extend’ and anticipated start dates as contingent until options and awards are effective.",
				isNot:
					"It is not using a non-operational successor as a current access path, and not assuming brand continuity means identical scope and holder lists.",
				fits: "Quarterly portfolio reviews should refresh vehicle end dates the way finance refreshes rates.",
				citation: "GSA / NASA / NITAAC program announcements (verify current dates)",
				sourceUrl: "https://www.gsa.gov/buy-through-us/products-and-services/professional-services/buy-services/oasis-plus",
				sourceKind: "guidance",
			},
			{
				id: "scope-both-layers",
				title: "Base scope and order scope",
				story:
					"Mid-order, the customer wants a major new mission function never competed and not reasonably in the IDIQ SOW. Labor categories already on the vehicle feel comforting. Comfort is not scope.",
				is: "An order must remain within the scope, period, and maximum value of the underlying contract. Material additions risk a cardinal change outside the original competition. Analyze both base-IDIQ and order layers; obtain contracting-officer direction before performing; steer out-of-scope needs to a competed or otherwise authorized path.",
				isNot:
					"It is not accepting work on program-office email because ‘we’re under ceiling,’ and not treating shared labor categories as proof of scope.",
				fits: "Contracts directors own the pause; capture owns the recompete or new-path conversation with the customer.",
				judgment:
					"GAO has treated materially different added services as improper sole-source awards outside the original contract’s scope—payment and protest risk travel together.",
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
		title: "When a GWAC Beats a Schedule",
		summary: "Pick the lane by scope, holders, and ordering mechanics—not by which brand the account team prefers.",
		intro:
			"Governmentwide acquisition contracts and GSA Schedules both move civilian work quickly—when they fit. This short chapter is a decision aid for choosing between a GWAC/IDIQ lane and a MAS lane once the requirement and customer authority are clear.",
		tags: ["GWAC", "GSA-MAS", "channel-strategy", "vehicle-selection"],
		readingMinutes: 5,
		suggestedOrder: 8,
		pieces: [
			{
				id: "lane-choice",
				title: "Choose on fit, not habit",
				is: "Prefer a GWAC or multiple-award IDIQ when the requirement maps cleanly to that program’s scope (for example broad IT solutions on Alliant, product-centered IT on SEWP, non-IT professional services on an OASIS+ domain), the eligible holder is on the right pool, and the customer will order under that contract’s guide. Prefer MAS when commercial Schedule coverage, SIN fit, and Subpart 8.4 ordering (or a Schedule BPA) better match value, competition needs, and authorized users.",
				isNot:
					"It is not ‘MAS for everything commercial,’ not ‘GWAC for everything IT,’ and not selecting by industrial funding fee or logo familiarity while ignoring holder and scope gaps.",
				fits: "Use after chapters on path, access, and MAS/IDIQ mechanics—this is the synthesis check before capture commits the pursuit to a lane.",
				checklist: [
					"Requirement maps to program SOW / SIN / domain without contortion",
					"Prime (or CTA/sub path) has real access on that instrument",
					"Customer ordering authority and timeline match the lane’s procedures",
					"Order-level competition rules are understood and staffed",
				],
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
