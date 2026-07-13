import type { QuizQuestion } from "../../types";

export const CONTRACT_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "fund-contracts-ffp-risk",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Under a firm-fixed-price (FFP) contract, who generally bears the risk that performance costs more than expected?",
		options: [
			{
				id: "a",
				text: "The contractor, because the firm price is not adjusted based on the contractor's cost experience",
				correct: true,
			},
			{
				id: "b",
				text: "The Government, because it must reimburse every allowable cost overrun",
				correct: false,
			},
			{
				id: "c",
				text: "The parties equally, because every overrun automatically triggers a 50/50 price adjustment",
				correct: false,
			},
			{
				id: "d",
				text: "The contracting officer personally, because the awarded price is only an estimate",
				correct: false,
			},
		],
		explanation:
			"An FFP price does not change merely because the contractor's actual costs change. The contractor therefore assumes maximum cost risk and keeps the benefit of efficient performance, subject to any separate contractual adjustment clauses. Capture and pricing teams should not treat an FFP price as a reimbursable budget.",
		citation: "FAR 16.202-1",
		sourceUrl: "https://www.acquisition.gov/far/16.202-1",
		tags: ["contract-types", "FFP", "cost-risk", "pricing"],
	},
	{
		id: "fund-contracts-idiq-minimum-ceiling",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "What do the minimum and maximum quantities mean on an IDIQ contract?",
		options: [
			{
				id: "a",
				text: "The Government must order at least the stated minimum, while the maximum limits what may be ordered; winning the vehicle does not guarantee the ceiling",
				correct: true,
			},
			{
				id: "b",
				text: "The minimum is only a proposal target, while the Government guarantees every holder an equal share of the ceiling",
				correct: false,
			},
			{
				id: "c",
				text: "The ceiling is guaranteed revenue once the base IDIQ is awarded",
				correct: false,
			},
			{
				id: "d",
				text: "Both figures apply only to subcontractors and do not affect Government ordering",
				correct: false,
			},
		],
		explanation:
			"An IDIQ states a minimum the Government must order and a maximum it may not exceed. Especially on a multiple-award vehicle, the base award is often called a 'hunting license': beyond the contractual minimum, the holder still must capture and win orders rather than book the vehicle ceiling as backlog.",
		citation: "FAR 16.504(a)(1), 16.504(a)(4)(ii)",
		sourceUrl: "https://www.acquisition.gov/far/16.504",
		tags: ["IDIQ", "minimum", "ceiling", "hunting-license", "capture"],
	},
	{
		id: "fund-contracts-mas-vs-gwac",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt: "Which statement correctly distinguishes GSA MAS from a GWAC such as Alliant or NASA SEWP?",
		options: [
			{
				id: "a",
				text: "MAS is the Federal Supply Schedule program for commercial offerings ordered under FAR Subpart 8.4; a GWAC is a governmentwide task- or delivery-order contract for information technology",
				correct: true,
			},
			{
				id: "b",
				text: "MAS and GWAC are interchangeable names for the same underlying contract",
				correct: false,
			},
			{
				id: "c",
				text: "MAS may be used only by GSA employees, while a GWAC may be used only by its awarding agency",
				correct: false,
			},
			{
				id: "d",
				text: "MAS is always for services, while a GWAC is always for products",
				correct: false,
			},
		],
		explanation:
			"GSA MAS is the Federal Supply Schedule program, with ordering procedures in FAR Subpart 8.4. A GWAC is a separate governmentwide acquisition contract for IT; Alliant and NASA SEWP are examples. Vehicle access, scope, ordering rules, and holder pools therefore must be checked rather than inferred from a brand name.",
		citation: "FAR 2.101; FAR Subpart 8.4",
		sourceUrl: "https://www.acquisition.gov/far/2.101",
		tags: ["GSA-MAS", "GWAC", "Alliant", "NASA-SEWP", "vehicle-selection"],
	},
	{
		id: "fund-contracts-cost-accounting-system",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"You are the pricing lead for a civilian-agency pursuit. The draft RFP contemplates a cost-reimbursement contract, but the business unit has performed only FFP work and cannot yet show that its accounting system segregates and assigns costs to this contract.",
		prompt: "What is the most important readiness action before committing to this contract shape?",
		options: [
			{
				id: "a",
				text: "Have finance and contracts validate that the accounting system is adequate for determining costs applicable to the contract, and address gaps before proposal",
				correct: true,
			},
			{
				id: "b",
				text: "Proceed because an adequate accounting system is relevant only after final payment",
				correct: false,
			},
			{
				id: "c",
				text: "Convert internal cost records into fixed commercial catalog prices and ignore incurred-cost tracking",
				correct: false,
			},
			{
				id: "d",
				text: "Assume the Government bears all cost risk, so contractor accounting controls are unnecessary",
				correct: false,
			},
		],
		explanation:
			"A cost-reimbursement contract may be used only when the contractor's accounting system is adequate for determining costs applicable to the contract, among other findings. These contracts pay allowable incurred costs within an estimated-cost framework and require appropriate Government surveillance, so accounting readiness is a pursuit gate—not a post-award cleanup item.",
		citation: "FAR 16.301-1, 16.301-3(a)(3)",
		sourceUrl: "https://www.acquisition.gov/far/16.301-3",
		tags: ["cost-reimbursement", "accounting-system", "allowable-costs", "pricing"],
	},
	{
		id: "fund-contracts-orders-fair-opportunity",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the capture manager for a services requirement expected under OASIS+, a multiple-award IDIQ. A teammate calls it a 'delivery order' and assumes the agency can simply send it to the incumbent.",
		prompt: "How should you frame the opportunity?",
		options: [
			{
				id: "a",
				text: "Treat services as a task order and plan for fair-opportunity consideration among eligible holders, while checking the solicitation and any documented exception",
				tier: "best",
			},
			{
				id: "b",
				text: "Confirm the ordering guide and holder pool before spending heavily, but defer the task-versus-delivery distinction until the order is released",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Assume the incumbent receives the order automatically because it performed the predecessor work",
				tier: "costly",
			},
			{
				id: "d",
				text: "Market the work as a delivery order for supplies and tell the agency that fair opportunity never applies on a multiple-award IDIQ",
				tier: "disqualifying",
			},
		],
		explanation:
			"A task order is for services; a delivery order is for supplies. On a multiple-award contract, each eligible holder generally receives a fair opportunity to be considered for an order, subject to statutory and regulatory exceptions. Incumbency alone is not an exception, so capture should identify the correct pool and compete at order level.",
		citation: "FAR 2.101; FAR 16.505(b)(1)",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["task-order", "delivery-order", "fair-opportunity", "OASIS+", "capture"],
	},
	{
		id: "fund-contracts-bpa-orders",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"You are the contracts lead reviewing a proposed GSA MAS BPA for recurring program support. The pipeline lists the BPA's estimated value as guaranteed funded backlog on the day the BPA is established.",
		prompt: "What guidance should you give the team?",
		options: [
			{
				id: "a",
				text: "Treat the BPA as an ordering arrangement against MAS contracts; recognize revenue commitments only from actual orders and any enforceable minimum stated in the documents",
				tier: "best",
				consequence:
					"The pipeline reflects the legal instrument accurately: the BPA streamlines future ordering, while orders create the specific purchases and funding commitments.",
			},
			{
				id: "b",
				text: "Keep the full estimated value in weighted pipeline, but label it as potential order value rather than guaranteed backlog",
				tier: "defensible",
				consequence:
					"The forecast remains useful for capture planning, but finance still must prevent the estimate from being represented as an awarded obligation.",
			},
			{
				id: "c",
				text: "Book the estimate as guaranteed because a BPA is the same thing as a funded task order",
				tier: "disqualifying",
				consequence:
					"The company overstates backlog and collapses the distinction between the ordering arrangement and the later orders that buy work.",
			},
			{
				id: "d",
				text: "Remove the opportunity because a BPA can never lead to a binding order",
				tier: "costly",
				consequence:
					"The team abandons a valid recurring-sales channel; properly issued orders under the BPA can create binding purchases.",
			},
		],
		explanation:
			"A BPA is a streamlined method for filling anticipated repetitive needs, not the same instrument as each call or order placed under it. A Schedule BPA sits against underlying MAS contracts, and the agency makes specific purchases through orders. Capture may track estimated value, but contracts and finance should not confuse that estimate with obligated backlog.",
		citation: "FAR 8.405-3; FAR 13.303-1",
		sourceUrl: "https://www.acquisition.gov/far/8.405-3",
		tags: ["BPA", "GSA-MAS", "orders", "backlog", "contracts"],
	},
	{
		id: "fund-contracts-commercial-part-12",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"You are the solution lead for a civilian agency buying a commercially sold cloud support service. A teammate says that calling it a commercial service automatically makes it a GSA MAS order.",
		prompt: "Which correction is most accurate?",
		options: [
			{
				id: "a",
				text: "Part 12 provides policies and contract terms for acquiring commercial products and commercial services, but the agency must separately select and follow an authorized competition and ordering method",
				correct: true,
			},
			{
				id: "b",
				text: "Every commercial product or service must be ordered through GSA MAS",
				correct: false,
			},
			{
				id: "c",
				text: "Part 12 is a governmentwide IT IDIQ and only its contract holders may compete",
				correct: false,
			},
			{
				id: "d",
				text: "Commercial services are outside the FAR and cannot be acquired by contract",
				correct: false,
			},
		],
		explanation:
			"FAR Part 12 governs acquisition of commercial products and commercial services and is used with the applicable solicitation procedures in Parts 13, 14, or 15. Commercial status affects terms and acquisition approach; it does not by itself choose MAS, a GWAC, an agency IDIQ, or an open-market procurement.",
		citation: "FAR 12.102(b)",
		sourceUrl: "https://www.acquisition.gov/far/12.102",
		tags: ["commercial-products", "commercial-services", "FAR-Part-12", "solution"],
	},
	{
		id: "fund-contracts-tm-lh-ceiling",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"You are the pricing strategist for an uncertain-scope systems-integration effort. The draft solicitation proposes time-and-materials (T&M) CLINs, and the program team describes them as 'cost reimbursement with unlimited hours.'",
		prompt: "What advice best protects the pursuit?",
		options: [
			{
				id: "a",
				text: "Model fixed hourly rates and the contract ceiling, clarify material handling, and confirm the agency documented why no other contract type is suitable",
				tier: "best",
				consequence:
					"The team prices the actual T&M mechanics, recognizes that work above the ceiling is at contractor risk absent an increase, and respects T&M's least-preferred status.",
			},
			{
				id: "b",
				text: "Accept T&M but add internal burn controls and seek prompt notice and ceiling-increase procedures in the contract",
				tier: "defensible",
				consequence:
					"Operational controls reduce overrun risk, though the team still needs to validate labor-rate, materials, and contract-type assumptions before final pricing.",
			},
			{
				id: "c",
				text: "Price without a ceiling because T&M guarantees reimbursement for every hour worked",
				tier: "disqualifying",
				consequence:
					"The price ignores a mandatory T&M ceiling and exposes the contractor to uncompensated work above it.",
			},
			{
				id: "d",
				text: "Rename the T&M CLINs labor-hour and assume all materials will then be reimbursed at actual cost",
				tier: "costly",
				consequence:
					"A labor-hour contract is the T&M variation that does not supply materials; relabeling does not solve the scope or ceiling issue.",
			},
		],
		explanation:
			"T&M pays fixed hourly rates for direct labor and, when applicable, reimburses materials under the contract rules; labor-hour is the variation without contractor-furnished materials. Both require a ceiling the contractor exceeds at its own risk unless increased. Because T&M provides no positive profit incentive for cost control or labor efficiency, it may be used only when no other type is suitable and is the least-preferred contract type.",
		citation: "FAR 16.103(d)(1); FAR 16.601",
		sourceUrl: "https://www.acquisition.gov/far/16.601",
		tags: ["T&M", "labor-hour", "ceiling", "least-preferred", "pricing"],
	},
	{
		id: "fund-contracts-base-options-recompete",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"You are supporting capture on a one-year base plus four one-year options. Section M says evaluated price is the total of the base and all options. The account plan schedules the recompete immediately after the base year because options are 'new contracts.'",
		prompt: "Which planning assumption is strongest?",
		options: [
			{
				id: "a",
				text: "Price the full evaluated base-plus-options model, but treat option exercise as a Government choice and track the likely recompete near the end of the exercised performance horizon",
				correct: true,
			},
			{
				id: "b",
				text: "Price only the base year because evaluated options can never affect source selection",
				correct: false,
			},
			{
				id: "c",
				text: "Assume all four options are automatic renewals that the contractor may exercise",
				correct: false,
			},
			{
				id: "d",
				text: "Treat each option as a mandatory full-and-open recompete immediately after the preceding period",
				correct: false,
			},
		],
		explanation:
			"When the solicitation evaluates options, the Government generally adds their total price to the basic requirement for evaluation, but that evaluation does not obligate exercise. The contracting officer later must determine that exercise satisfies the option rules. Pipeline timing should therefore monitor option decisions and acquisition planning rather than assume either an automatic five-year term or an annual recompete.",
		citation: "FAR 17.206(a), 17.207",
		sourceUrl: "https://www.acquisition.gov/far/17.206",
		tags: ["base-period", "options", "evaluated-price", "recompete", "capture"],
	},
];
