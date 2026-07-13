import type { QuizQuestion } from "../types";

export const VEHICLE_QUESTIONS: QuizQuestion[] = [
	{
		"id": "vehicle-thresholds-recall",
		"unitId": "vehicle",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "In federal contracting, the micro-purchase threshold and the simplified acquisition threshold (SAT) are, respectively:",
		"options": [
			{
				"id": "a",
				"text": "$10,000 and $250,000",
				"correct": true
			},
			{
				"id": "b",
				"text": "$3,500 and $150,000",
				"correct": false
			},
			{
				"id": "c",
				"text": "$10,000 and $150,000",
				"correct": false
			},
			{
				"id": "d",
				"text": "$25,000 and $250,000",
				"correct": false
			}
		],
		"explanation": "FAR 2.101 sets the micro-purchase threshold at $10,000 and the simplified acquisition threshold at $250,000. The $3,500/$150,000 pair is the pre-2018 values; knowing the current numbers tells you which streamlined buying path a requirement can ride.",
		"citation": "FAR 2.101",
		"sourceUrl": "https://www.acquisition.gov/far/2.101",
		"tags": [
			"thresholds",
			"micro-purchase",
			"SAT",
			"FAR-2.101"
		]
	},
	{
		"id": "vehicle-gwac-definition",
		"unitId": "vehicle",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "Which best describes a Governmentwide Acquisition Contract (GWAC), such as Alliant 2, 8(a) STARS III, or VETS 2?",
		"options": [
			{
				"id": "a",
				"text": "A pre-established, multiple-award IDIQ contract for IT solutions that any federal agency can place task orders against",
				"correct": true
			},
			{
				"id": "b",
				"text": "A GSA Multiple Award Schedule (MAS) contract offering commercial products and services at negotiated ceiling prices",
				"correct": false
			},
			{
				"id": "c",
				"text": "A single-agency IDIQ contract available only to the agency that awarded it",
				"correct": false
			},
			{
				"id": "d",
				"text": "A Blanket Purchase Agreement established against a schedule to fill recurring needs",
				"correct": false
			}
		],
		"explanation": "FAR 2.101 defines a GWAC as a task-order or delivery-order contract for information technology, established by one agency for governmentwide use. It is an IDIQ vehicle any agency can order from, which is what distinguishes it from an agency-specific IDIQ, a Schedule (MAS), or a BPA.",
		"citation": "FAR 2.101",
		"sourceUrl": "https://www.acquisition.gov/far/2.101",
		"tags": [
			"GWAC",
			"IDIQ",
			"IT",
			"FAR-2.101"
		]
	},
	{
		"id": "vehicle-idiq-fair-opportunity",
		"unitId": "vehicle",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "single-best",
		"situation": "Your firm is one of five awardees on a multiple-award IDIQ contract. A new $2M requirement arises that falls squarely within the IDIQ's scope. Your capture lead asks how the agency will decide who gets the work.",
		"prompt": "How is a task order of this size awarded under a multiple-award IDIQ?",
		"options": [
			{
				"id": "a",
				"text": "The agency must give each awardee a fair opportunity to be considered, typically through a task-order competition among the IDIQ holders",
				"correct": true
			},
			{
				"id": "b",
				"text": "The agency may sole-source it to any one awardee, since all holders already won the base IDIQ",
				"correct": false
			},
			{
				"id": "c",
				"text": "It must be re-competed on the open market under FAR Part 15 full-and-open competition",
				"correct": false
			},
			{
				"id": "d",
				"text": "It is awarded automatically to whichever awardee holds the lowest base IDIQ pricing",
				"correct": false
			}
		],
		"explanation": "FAR 16.505 requires that each awardee on a multiple-award IDIQ be given a fair opportunity to be considered for orders above the micro-purchase threshold, absent a documented exception. For a $2M order that means a task-order competition among the holders, not a sole source or a fresh open-market buy.",
		"citation": "FAR 16.505",
		"sourceUrl": "https://www.acquisition.gov/far/16.505",
		"tags": [
			"IDIQ",
			"task-order",
			"fair-opportunity",
			"FAR-16.505"
		]
	},
	{
		"id": "vehicle-cta-vs-subcontract",
		"unitId": "vehicle",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "A GSA Schedule task order needs both cybersecurity engineering and cloud migration labor. Your firm holds a MAS contract covering the cyber work but not the cloud labor categories. A partner firm holds its own MAS contract that does cover the cloud categories. Neither the underlying requirement nor the order is set aside for any socioeconomic program.",
		"prompt": "What is the strongest way to team so both companies contribute and get paid under the Schedule order?",
		"options": [
			{
				"id": "a",
				"text": "Form a Schedules Contractor Team Arrangement (CTA) where each member holds a MAS contract and contributes its own SINs and pricing to the order",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Bring the partner in as a subcontractor under your prime Schedule order",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Stand up an 8(a) joint venture to pursue the order together",
				"tier": "costly"
			},
			{
				"id": "d",
				"text": "Add the partner's cloud labor to your order as open-market items",
				"tier": "disqualifying"
			}
		],
		"explanation": "A Schedules CTA lets each teammate contribute the labor categories from its own MAS contract, so the customer buys everything at negotiated Schedule pricing and both firms have privity for their portion (FAR 9.601 contractor team arrangement). A subcontract works but buries the partner's Schedule pricing under yours; an 8(a) JV is a set-aside socioeconomic construct irrelevant to an unrestricted order; adding the partner's labor as open-market defeats the point of using the Schedule and misrepresents it.",
		"citation": "FAR 9.601",
		"sourceUrl": "https://www.acquisition.gov/far/9.601",
		"tags": [
			"CTA",
			"teaming",
			"GSA-Schedule",
			"subcontract",
			"FAR-9.601"
		]
	},
	{
		"id": "vehicle-open-market-on-schedule",
		"unitId": "vehicle",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "You hold a GSA MAS (Schedule) contract. A customer wants to place a single order: most of the items map to your Schedule SINs, but two line items are products you do not carry on your Schedule (open-market items). The customer wants it all on one order to save time.",
		"prompt": "How do you steer the deal?",
		"options": [
			{
				"id": "a",
				"text": "Identify the two non-Schedule line items as open-market on the order and make sure the CO establishes their price reasonableness and follows simplified acquisition procedures for them",
				"tier": "best",
				"consequence": "Clean order: the Schedule items ride your MAS terms and the open-market items are documented separately per FAR 8.402(f). You keep the full sale and no compliance flag."
			},
			{
				"id": "b",
				"text": "Roll the two open-market items onto the order as if they were Schedule items to keep it a single, simple Schedule buy",
				"tier": "disqualifying",
				"consequence": "Selling open-market goods at Schedule terms misrepresents your contract; the order can be cancelled and your MAS contract flagged in a GSA audit."
			},
			{
				"id": "c",
				"text": "Tell the customer to issue a separate open-market purchase elsewhere for the two items",
				"tier": "defensible",
				"consequence": "Compliant, but you hand that revenue to a competitor and add procurement lead time the customer wanted to avoid."
			},
			{
				"id": "d",
				"text": "Decline the whole order because a Schedule order cannot include non-Schedule items",
				"tier": "costly",
				"consequence": "You walk away from revenue you could have kept: FAR expressly permits open-market items on a Schedule order when they are identified and handled under Part 13."
			}
		],
		"explanation": "FAR 8.402(f) allows a CO to add open-market (non-Schedule) items to a Schedule order only when they are clearly labeled as open-market and the applicable acquisition rules (competition, price reasonableness) are followed for those items. Mixing them silently into Schedule pricing is a misrepresentation.",
		"citation": "FAR 8.402(f)",
		"sourceUrl": "https://www.acquisition.gov/far/8.402",
		"tags": [
			"GSA-Schedule",
			"MAS",
			"open-market",
			"FAR-8.402"
		]
	}
];
