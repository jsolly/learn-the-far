import type { QuizQuestion } from "../../types";

export const IDIQ_VEHICLE_QUESTIONS: QuizQuestion[] = [
	{
		id: "vehicle-idiq-minimum-ceiling",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A multiple-award IDIQ states a $5 billion maximum shared across all holders. The official ordering report shows $3.8 billion in orders that count against that maximum, including $400 million won by your company. A customer asks whether it can place a new $1.5 billion order on the vehicle.",
		prompt: "What ceiling-burn analysis should the holder give the customer?",
		options: [
			{
				id: "a",
				text: "Only $1.2 billion of shared ordering capacity remains, so the proposed $1.5 billion order does not fit as stated without a lawful ceiling increase or a different acquisition approach",
				correct: true,
			},
			{
				id: "b",
				text: "Your company has $4.6 billion remaining because only the $400 million it won reduces its share of the ceiling",
				correct: false,
			},
			{
				id: "c",
				text: "All $5 billion remains because awarded orders count against the ceiling only after final payment",
				correct: false,
			},
			{
				id: "d",
				text: "The customer may place the full order because an IDIQ maximum is only a planning estimate and never constrains ordering",
				correct: false,
			},
		],
		explanation:
			"FAR 16.504 requires an IDIQ to state its minimum and maximum, and those quantities may be expressed as dollar values. Ceiling burn must follow the actual contract: first determine whether the maximum is shared across the vehicle or applies separately to each contract and which orders count against it. Here the contract expressly uses a shared maximum, so aggregate counted orders—not this holder's individual wins—leave $5.0 billion minus $3.8 billion, or $1.2 billion, of ordering capacity.",
		citation: "FAR 16.504(a), 16.504(a)(1), 16.504(a)(4)(ii)",
		sourceUrl: "https://www.acquisition.gov/far/16.504",
		tags: ["IDIQ", "vehicle-ceiling", "ceiling-burn", "ordering-capacity"],
	},
	{
		id: "vehicle-idiq-civilian-landscape",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "confidence-bet",
		situation:
			"A civilian portfolio review groups Alliant, NASA SEWP, OASIS+, and NITAAC's CIO-SP family together as interchangeable 'GSA IT schedules.'",
		prompt: "Which correction is accurate as of July 2026?",
		options: [
			{
				id: "a",
				text: "As of July 2026, Alliant 2 remains orderable through June 2028 and Alliant 3 is operational; SEWP V remains the current vehicle while NASA plans a January 2027 extension and anticipates SEWP VI in November 2026; OASIS+ has six IDIQs across 13 non-IT domains; CIO-SP3 and CIO-SP3 Small Business are both operating through October 29, 2026, while CIO-SP4 is not operational",
				correct: true,
			},
			{
				id: "b",
				text: "All four are SINs on the same GSA MAS contract and use identical ordering rules",
				correct: false,
			},
			{
				id: "c",
				text: "OASIS+ is NASA's hardware catalog, while SEWP is GSA's non-IT professional-services vehicle",
				correct: false,
			},
			{
				id: "d",
				text: "NITAAC is a private reseller and CIO-SP is an open-market solicitation method",
				correct: false,
			},
		],
		explanation:
			"These are distinct programs, not Schedule SINs. GSA's Alliant 2 ordering period continues through June 30, 2028, and Alliant 3 became operational March 10, 2026. NASA says it intends to extend SEWP V through January 31, 2027 and anticipates SEWP VI beginning November 1, 2026; those future dates are planning statements, not completed lifecycle events. GSA identifies six OASIS+ IDIQs and 13 non-IT service domains. NITAAC currently lists both CIO-SP3 and CIO-SP3 Small Business as operating through October 29, 2026 and does not list CIO-SP4 among its operating GWACs.",
		citation:
			"GSA Alliant 2 and Alliant 3; NASA SEWP announcements; GSA OASIS+; NITAAC CIO-SP3 and GWACs",
		sourceUrl:
			"https://www.sewp.nasa.gov/",
		tags: ["Alliant", "NASA-SEWP", "OASIS+", "NITAAC", "CIO-SP"],
	},
	{
		id: "vehicle-idiq-fair-opportunity",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"Your firm holds the eligible pool on a civilian multiple-award IDIQ. The incumbent says the agency can send it every follow-on order because all holders already competed for the base awards.",
		prompt: "What is the default order-level rule?",
		options: [
			{
				id: "a",
				text: "Above the micro-purchase threshold, each eligible awardee must receive a fair opportunity to be considered for an order, unless a FAR 16.505 exception applies",
				correct: true,
			},
			{
				id: "b",
				text: "The incumbent receives every follow-on automatically until the IDIQ ceiling is reached",
				correct: false,
			},
			{
				id: "c",
				text: "The agency must cancel the IDIQ and conduct a new open-market Part 15 competition for each order",
				correct: false,
			},
			{
				id: "d",
				text: "The contractor with the lowest base-contract labor rate must receive every order",
				correct: false,
			},
		],
		explanation:
			"Above the micro-purchase threshold, FAR 16.505(b) requires fair opportunity for each multiple-award contractor eligible for an order, subject to listed exceptions. Base-contract competition creates the holder pool; it does not normally eliminate order-level consideration or make incumbency an automatic award right.",
		citation: "FAR 16.505(b)(1)",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["fair-opportunity", "multiple-award-IDIQ", "task-order", "incumbent"],
	},
	{
		id: "vehicle-idiq-fair-opportunity-exceptions",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"A civilian contracting officer asks whether fair opportunity can ever be bypassed for an order under a multiple-award IDIQ. The account team answers, 'Only if the incumbent agrees.'",
		prompt: "Which response better reflects FAR 16.505?",
		options: [
			{
				id: "a",
				text: "The contracting officer may use a listed exception, such as urgency, only one capable source, logical follow-on in the Government's interest, or satisfying a minimum guarantee, with required documentation",
				correct: true,
			},
			{
				id: "b",
				text: "Any holder may waive fair opportunity on behalf of every other contractor",
				correct: false,
			},
			{
				id: "c",
				text: "Fair opportunity has no exceptions once more than one base contract is awarded",
				correct: false,
			},
			{
				id: "d",
				text: "A program manager may create an exception by labeling an order high priority",
				correct: false,
			},
		],
		explanation:
			"FAR 16.505(b)(2) lists the circumstances that permit an exception to fair opportunity and requires the contracting officer to document the basis. Contractor consent and program preference are not substitutes. The capture team should identify facts, not promise a directed award.",
		citation: "FAR 16.505(b)(2)",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["fair-opportunity", "exceptions", "documentation", "IDIQ"],
	},
	{
		id: "vehicle-idiq-alliant-sewp-fit",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"In July 2026, a civilian agency is choosing between a broad enterprise IT integration effort and a product-centered buy for servers, networking, software, and related solution support. Your company has relevant access to Alliant and NASA SEWP.",
		prompt: "What is the strongest initial mapping?",
		options: [
			{
				id: "a",
				text: "Evaluate operational Alliant 2 or Alliant 3 for the broad IT integration and current SEWP V for the product-centered solution; validate scope and treat NASA's intended January 2027 SEWP V extension and anticipated November 2026 SEWP VI start as contingent",
				correct: true,
			},
			{
				id: "b",
				text: "Use Alliant only for commodities and SEWP only for non-IT management consulting",
				correct: false,
			},
			{
				id: "c",
				text: "Treat both as MAS SINs and select whichever has the lower Schedule industrial funding fee",
				correct: false,
			},
			{
				id: "d",
				text: "Select either solely from the vehicle name because holder pool, scope, and ordering guide cannot differ",
				correct: false,
			},
		],
		explanation:
			"Alliant is designed for comprehensive IT solutions, while NASA SEWP supports IT, communications, and audiovisual products and solutions. Alliant 2 remains active for ordering through June 30, 2028, and Alliant 3 has accepted orders since March 10, 2026. SEWP V remains the operating NASA vehicle; NASA's stated intent to extend it through January 31, 2027 and anticipated November 1, 2026 SEWP VI start should be treated as transition planning until the relevant options and awards are effective.",
		citation: "GSA Alliant 2 and Alliant 3; NASA SEWP announcements",
		sourceUrl: "https://www.sewp.nasa.gov/",
		tags: ["Alliant", "NASA-SEWP", "IT-solutions", "products"],
	},
	{
		id: "vehicle-idiq-task-order-protest",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"Your company loses an $18 million task order under a multiple-award IDIQ awarded by a Title 41 civilian agency other than NASA or the Coast Guard. Counsel is screening an evaluation protest and a separate allegation that the order exceeds the base contract's scope.",
		prompt: "How should the team frame protest jurisdiction?",
		options: [
			{
				id: "a",
				text: "Use the IDIQ awarding agency to identify 41 U.S.C. 4106(f): the order exceeds $10 million, so GAO has exclusive jurisdiction over the value-authorized evaluation protest; analyze the distinct scope exception separately because it may reach the Court of Federal Claims if Tucker Act jurisdiction and other requirements are met",
				tier: "best",
				consequence:
					"The team applies the governing civilian authority and separates GAO's exclusive value-based jurisdiction from the scope exception's potentially different forum analysis.",
			},
			{
				id: "b",
				text: "Have protest counsel promptly verify the order value, IDIQ-awarding agency, allegation type, and current statute before selecting a forum",
				tier: "defensible",
				consequence:
					"The team avoids a forum assumption, though it should recognize GAO's special civilian task-order role at the outset.",
			},
			{
				id: "c",
				text: "File any task-order protest at the Court of Federal Claims because it hears every federal bid protest",
				tier: "disqualifying",
				consequence:
					"The filing ignores the statutory task-order protest bar and risks dismissal for lack of jurisdiction.",
			},
			{
				id: "d",
				text: "Abandon the scope allegation because task orders can never be protested at any forum",
				tier: "costly",
				consequence:
					"The company discards an expressly recognized jurisdictional path for allegations that an order increases scope, period, or maximum value.",
			},
		],
		explanation:
			"The authority governing the task-order protest bar follows the agency that awarded the underlying IDIQ. For this Title 41 contract, 41 U.S.C. 4106(f) authorizes a value-based protest above $10 million and gives GAO exclusive jurisdiction over that value exception. A protest alleging that the order increases the contract's scope, period, or maximum value is a separate statutory exception; it may be heard at the Court of Federal Claims if the claim independently satisfies 28 U.S.C. 1491(b) and other jurisdictional requirements. Counsel must confirm forum, standing, and timeliness.",
		citation:
			"41 U.S.C. 4106(f); 28 U.S.C. 1491(b); FAR 16.505(a)(10)",
		sourceUrl:
			"https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title41-section4106&num=0&edition=prelim",
		tags: ["task-order-protest", "GAO", "civilian-agency", "jurisdiction", "scope"],
	},
	{
		id: "vehicle-idiq-urgent-exception",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"A civilian mission system has failed. The agency says delay in competing the immediate recovery order would cause unacceptable harm, but it also wants to direct three years of routine operations to the recovery contractor.",
		prompt: "What advice best respects the fair-opportunity exception?",
		options: [
			{
				id: "a",
				text: "Limit the urgent exception to the justified immediate need and compete the longer-term requirement when the urgency no longer prevents fair opportunity",
				tier: "best",
				consequence:
					"The agency can address the emergency without using temporary urgency to shield routine follow-on work from competition.",
			},
			{
				id: "b",
				text: "Support a short, documented bridge sized to restore service while acquisition planning proceeds for the enduring order",
				tier: "defensible",
				consequence:
					"The bridge may be supportable if its duration and scope track the actual urgency and the contracting officer documents the exception.",
			},
			{
				id: "c",
				text: "Use the urgent exception for all future operations because the first outage involved the same system",
				tier: "disqualifying",
				consequence:
					"The rationale extends beyond the period in which delay would cause the identified unacceptable harm.",
			},
			{
				id: "d",
				text: "Skip contracting-officer documentation because urgency is self-proving",
				tier: "costly",
				consequence:
					"The record lacks the written basis required for an exception to fair opportunity.",
			},
		],
		explanation:
			"The urgency exception applies when the need is so urgent that providing fair opportunity would cause unacceptable delay. The order's scope and duration should track that rationale, and the contracting officer must document the exception. Enduring work should return to fair opportunity when practicable.",
		citation: "FAR 16.505(b)(2)(i)(A), 16.505(b)(2)(ii)",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["urgency", "fair-opportunity-exception", "bridge", "documentation"],
	},
	{
		id: "vehicle-idiq-order-procedures",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"A proposal team imports its full open-market Part 15 template into a NITAAC CIO-SP3 task-order response, even though the ordering guide and request call for a shorter fair-opportunity submission.",
		prompt: "What should the proposal director require?",
		options: [
			{
				id: "a",
				text: "Build to FAR 16.505, the base contract, ordering guide, and order request; Part 6 competition rules and Subpart 15.3 policies are excluded, but follow other provisions that apply or are incorporated, including Part 15 pricing provisions when applicable",
				correct: true,
			},
			{
				id: "b",
				text: "Apply every Part 15 form and procedure because all task-order competitions are negotiated procurements",
				correct: false,
			},
			{
				id: "c",
				text: "Ignore the base contract because only the task-order request can impose requirements on holders",
				correct: false,
			},
			{
				id: "d",
				text: "Ignore the order request because winning the base CIO-SP3 contract guarantees order awards",
				correct: false,
			},
		],
		explanation:
			"FAR 16.505 gives ordering officers broad discretion and excludes the competition requirements of Part 6 and the policies of Subpart 15.3—not all of Part 15. The team must follow provisions made applicable by the FAR and those incorporated through the base contract, ordering guide, or order request. Other Part 15 rules, such as applicable Subpart 15.4 pricing requirements, can still govern. For orders exceeding $7.5 million, FAR 16.505(b)(6) also requires postaward notice to unsuccessful awardees and applies the prescribed debriefing procedures.",
		citation: "FAR 16.505(b)(1)(ii), 16.505(b)(6); FAR Subpart 15.4",
		sourceUrl: "https://www.acquisition.gov/far/16.505",
		tags: ["NITAAC", "CIO-SP3", "ordering-guide", "FAR-16.505", "FAR-Part-15"],
	},
];
