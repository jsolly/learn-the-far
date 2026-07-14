import type { QuizQuestion } from "../../types";

export const MAS_VEHICLE_QUESTIONS: QuizQuestion[] = [
	{
		id: "vehicle-mas-fundamentals",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A civilian account team calls GSA Multiple Award Schedule a single task-order contract and assumes winning one agency order makes the company a Schedule holder.",
		prompt: "Which description should replace that assumption?",
		options: [
			{
				id: "a",
				text: "MAS is GSA's governmentwide Federal Supply Schedule program for commercial products, services, and solutions; agencies place orders or establish BPAs against contractors' underlying Schedule contracts",
				correct: true,
			},
			{
				id: "b",
				text: "MAS is an agency-specific task order that becomes governmentwide after its first award",
				correct: false,
			},
			{
				id: "c",
				text: "MAS is a list of vendors that agencies may use without ordering procedures or a contract",
				correct: false,
			},
			{
				id: "d",
				text: "MAS is reserved for noncommercial research and development bought under FAR Part 35",
				correct: false,
			},
		],
		explanation:
			"MAS is the Federal Supply Schedule program. GSA awards underlying indefinite-delivery contracts for commercial offerings, and eligible ordering activities use FAR Subpart 8.4 to place orders or establish Schedule BPAs. An order award and a base Schedule contract are different instruments.",
		citation: "FAR 8.402(a), 8.404(a); GSA Multiple Award Schedule",
		sourceUrl:
			"https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule",
		tags: ["GSA-MAS", "Federal-Supply-Schedule", "commercial", "ordering"],
	},
	{
		id: "vehicle-mas-products-services",
		unitId: "vehicle",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"Which pairing correctly distinguishes the principal Schedule ordering procedures for products from those for services requiring a statement of work?",
		options: [
			{
				id: "a",
				text: "FAR 8.405-1 covers supplies and services that do not require an SOW; FAR 8.405-2 covers services requiring an SOW",
				correct: true,
			},
			{
				id: "b",
				text: "FAR 8.405-1 covers all services; FAR 8.405-2 covers only products",
				correct: false,
			},
			{
				id: "c",
				text: "FAR 8.405-1 is for open-market buys; FAR 8.405-2 is for sealed bidding",
				correct: false,
			},
			{
				id: "d",
				text: "The sections are interchangeable whenever the order is placed against MAS",
				correct: false,
			},
		],
		explanation:
			"FAR 8.405-1 governs ordering supplies and services that do not require a statement of work. FAR 8.405-2 adds procedures for services requiring an SOW, including a request describing the work and evaluation basis. Capture should not apply a product-quote playbook to an SOW-based services order.",
		citation: "FAR 8.405-1; FAR 8.405-2",
		sourceUrl: "https://www.acquisition.gov/far/subpart-8.4",
		tags: ["GSA-MAS", "products", "services", "SOW", "FAR-8.405"],
	},
	{
		id: "vehicle-mas-bpa-purpose",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"A civilian bureau expects similar analytics-support needs every quarter for several years. It is deciding whether to establish a Schedule BPA or issue a separate Schedule order whenever a need arises.",
		prompt: "When and why should the bureau favor the BPA?",
		options: [
			{
				id: "a",
				text: "Favor a BPA when the repetitive needs justify agreed ordering, invoicing, discount, delivery, and timing terms that will streamline later purchases; use a direct Schedule order for a discrete one-off need",
				tier: "best",
			},
			{
				id: "b",
				text: "If repetition and administrative benefit are still uncertain, place the immediate requirement through the applicable Schedule-order procedure and revisit a BPA when the pattern is supported",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Establish a BPA for a single isolated requirement because a larger estimated value automatically makes it more efficient than an order",
				tier: "costly",
			},
			{
				id: "d",
				text: "Use a BPA whenever the bureau wants to avoid the competition and best-value procedures that apply to Schedule buying",
				tier: "disqualifying",
			},
		],
		explanation:
			"FAR 8.405-3 authorizes Schedule BPAs to fill repetitive needs and requires them to address matters such as ordering frequency, invoicing, discounts, requirements, delivery locations, and time. Those standardized mechanics can make recurring purchases more efficient. A one-off need ordinarily does not justify building that recurring-order framework and can be purchased through the applicable Schedule-order procedure. A BPA does not erase the competition, best-value, documentation, or later ordering rules in FAR Subpart 8.4.",
		citation: "FAR 8.405-3(a)(1), 8.405-3(a)(4); FAR 8.405-1; FAR 8.405-2",
		sourceUrl: "https://www.acquisition.gov/far/8.405-3",
		tags: ["Schedule-BPA", "repetitive-needs", "ordering-efficiency", "one-off-order"],
	},
	{
		id: "vehicle-mas-limited-sources",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"A civilian program office wants to direct an SOW-based MAS order exceeding the simplified acquisition threshold to the incumbent because transition would be inconvenient. It asks your capture team to draft language saying that Schedule competition never applies.",
		prompt: "How should the prime respond?",
		options: [
			{
				id: "a",
				text: "Ask the contracting officer to assess whether a FAR 8.405-6 circumstance supports limiting sources and, if so, prepare the justification, obtain the value-based approval, and complete the applicable post-award posting",
				tier: "best",
				consequence:
					"The acquisition follows the Schedule-specific authority and documentation path instead of treating preference as an exception.",
			},
			{
				id: "b",
				text: "Provide factual transition and compatibility information while leaving the independent limited-sources decision to the contracting officer",
				tier: "defensible",
				consequence:
					"The prime supports the record without claiming that ordinary incumbent convenience automatically authorizes a directed order.",
			},
			{
				id: "c",
				text: "Tell the program office that incumbent status alone eliminates the need for competition and written justification",
				tier: "disqualifying",
				consequence:
					"The advice invents an exception and undermines the acquisition record.",
			},
			{
				id: "d",
				text: "Use a FAR Part 6 justification and ignore FAR 8.405-6 because all sole-source documents are interchangeable",
				tier: "costly",
				consequence:
					"The team applies the wrong procedural framework to a Schedule order and risks an inadequate justification.",
			},
		],
		explanation:
			"Because this order exceeds the simplified acquisition threshold, FAR 8.405-6 requires the prescribed limited-sources justification and approval. For a limited-sources action under 8.405-6(a), the agency generally must publish notice and post the redacted justification after award, subject to the rule's timing and security exceptions. A contractor may supply objective facts, but ordinary incumbent preference does not establish an authorized circumstance.",
		citation: "FAR 8.405-6",
		sourceUrl: "https://www.acquisition.gov/far/8.405-6",
		tags: ["limited-sources", "justification", "incumbent", "GSA-MAS"],
	},
	{
		id: "vehicle-mas-open-market-items",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A proposed MAS solution includes a necessary product that is not on any selected contractor's Schedule contract. The customer wants one order and asks the prime to hide the product inside a Schedule bundle.",
		prompt: "What is the compliant path if the agency keeps it on the same order?",
		options: [
			{
				id: "a",
				text: "Create and clearly label a compliant line item for the open-market product, follow the applicable acquisition regulations, include the clauses applicable to it, and have the contracting officer determine its price fair and reasonable",
				correct: true,
			},
			{
				id: "b",
				text: "Relabel the product as incidental labor so all MAS terms automatically apply",
				correct: false,
			},
			{
				id: "c",
				text: "Quote it as a Schedule item because inclusion in a total solution adds it to the prime's MAS contract",
				correct: false,
			},
			{
				id: "d",
				text: "Use a CTA, because a CTA converts every non-Schedule item into a Schedule item",
				correct: false,
			},
		],
		explanation:
			"FAR 8.402(f) permits non-Schedule items on a Schedule order only when all applicable acquisition regulations are followed, the items are clearly labeled as open market on new line items numbered under FAR Subpart 4.10, the contracting officer determines price fair and reasonable, and the order includes every clause applicable to those items. Bundling does not change contract coverage.",
		citation: "FAR 8.402(f); FAR Subpart 4.10",
		sourceUrl: "https://www.acquisition.gov/far/8.402",
		tags: ["open-market-items", "GSA-MAS", "price-reasonableness", "bundling"],
	},
	{
		id: "vehicle-mas-cta-prime-sub",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"Your company and another MAS holder have complementary SIN coverage for a civilian services order. The draft CTA names a lead but does not map requirements to each member's awarded offerings or explain who will quote, invoice, and remain responsible for each portion.",
		prompt: "What must the team resolve before submitting as a MAS CTA?",
		options: [
			{
				id: "a",
				text: "Map every requirement to the responsible member's awarded SINs and rates, then document proposal authority, ordering responsibility, invoicing, payment, and administration in the CTA",
				tier: "best",
			},
			{
				id: "b",
				text: "Ask the contracting officer to confirm the proposed CTA structure and any invoicing method before final submission",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Let the lead quote every labor category under its Schedule even where only another member holds the applicable awarded offering",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Leave work allocation and payment mechanics for post-award negotiation because the CTA label resolves them automatically",
				tier: "costly",
			},
		],
		explanation:
			"A MAS CTA works only when each member contributes products or services from its own Schedule contract and the written arrangement makes responsibilities operational. Before submission, the team should map scope and awarded coverage, identify who can quote each item, and settle ordering, invoicing, payment, and administration instead of relying on the CTA label.",
		citation: "GSA, MAS Contractor Team Arrangements",
		sourceUrl:
			"https://www.gsa.gov/sell-to-government/step-1-learn-about-government-contracting/how-to-access-contract-opportunities/help-with-mas-contracts-to-sell-to-government/team-up-with-other-mas-contractors",
		tags: ["MAS-CTA", "prime-sub", "privity", "SIN-coverage"],
	},
	{
		id: "vehicle-mas-part-84-vs-part-15",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A civilian MAS order request uses technical factors, past performance, and discussions-like exchanges. The proposal manager says every FAR Part 15 procedure now applies automatically.",
		prompt: "Which operating assumption is strongest?",
		options: [
			{
				id: "a",
				text: "The procurement remains governed by FAR Subpart 8.4, not Part 15; still follow every procedure and evaluation commitment the agency actually states in the request",
				correct: true,
			},
			{
				id: "b",
				text: "Any evaluation factor converts a Schedule order into a negotiated open-market procurement under Part 15",
				correct: false,
			},
			{
				id: "c",
				text: "Part 15 never applies, so the agency may disregard the evaluation scheme it announced",
				correct: false,
			},
			{
				id: "d",
				text: "Schedule holders may ignore quotation instructions because FAR 8.404 eliminates procedural requirements",
				correct: false,
			},
		],
		explanation:
			"FAR 8.404(a) says Parts 13, 14, 15, and 19 generally do not apply to MAS orders and BPAs, except where Subpart 8.4 directs otherwise. An agency may borrow familiar techniques, but that does not wholesale import Part 15. It must nevertheless evaluate consistently with the procedures and criteria it announced.",
		citation: "FAR 8.404(a); FAR 8.405-2(d)",
		sourceUrl: "https://www.acquisition.gov/far/8.404",
		tags: ["FAR-8.4", "FAR-Part-15", "evaluation", "Schedule-order"],
	},
	{
		id: "vehicle-mas-bpa-order-competition",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A civilian agency established a multiple-award Schedule BPA and expects orders exceeding the simplified acquisition threshold. The incumbent BPA holder says orders will rotate automatically and no order-level capture is needed.",
		prompt: "How should the capture director plan?",
		options: [
			{
				id: "a",
				text: "Plan for the agency to solicit all BPA holders offering the required supplies or services and fairly consider responses for each order unless a documented limited-sources exception applies; rotation alone is not enough",
				tier: "best",
			},
			{
				id: "b",
				text: "Build an order-level capture plan while confirming any stated rotation, down-select, or exception mechanics with the contracting officer's documents",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Book an equal share of the BPA ceiling because multiple award guarantees rotational revenue",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Treat BPA establishment as the final source selection for every future requirement regardless of the ordering procedures",
				tier: "costly",
			},
		],
		explanation:
			"For a multiple-award Schedule BPA order exceeding the simplified acquisition threshold, FAR 8.405-3 generally requires the ordering activity to provide the RFQ to all BPA holders offering the required supplies or services, allow quotes, and fairly consider responses, unless a limited-sources justification supports another path. Automatic rotation does not perform that order-level competition.",
		citation: "FAR 8.405-3(c)(2); FAR 8.405-6",
		sourceUrl: "https://www.acquisition.gov/far/8.405-3",
		tags: ["multiple-award-BPA", "order-competition", "fair-opportunity", "capture"],
	},
];
