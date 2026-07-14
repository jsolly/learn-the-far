import type { QuizQuestion } from "../../types";

export const FIND_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "find-notice-type-market-research",
		unitId: "find",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A capture analyst at a large civilian prime finds a SAM.gov notice labeled “Sources Sought.” It asks for capability information and rough order-of-magnitude data but contains no proposal instructions.",
		prompt: "How should the analyst classify the notice?",
		options: [
			{
				id: "a",
				text: "Market research that can inform the acquisition strategy; it is not yet a solicitation for offers",
				correct: true
			},
			{
				id: "b",
				text: "A solicitation that will produce an award if the company submits the lowest price",
				correct: false
			},
			{
				id: "c",
				text: "An award notice announcing that the agency selected an incumbent",
				correct: false
			},
			{
				id: "d",
				text: "A justification and approval authorizing an already-decided sole-source award",
				correct: false
			}
		],
		explanation:
			"SAM.gov distinguishes Sources Sought from Solicitation, Award Notice, and Justification notice types. A sources-sought response supports agency market research and may affect acquisition planning, but the notice itself does not request an offer or result in award.",
		citation: "SAM.gov Opportunity Management API — Notice Types; FAR 10.002",
		sourceUrl: "https://open.gsa.gov/api/opportunities-api/",
		tags: ["sam-gov", "notice-types", "sources-sought", "market-research"]
	},
	{
		id: "find-sam-filter-stack",
		unitId: "find",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "tiered",
		situation:
			"A BD lead receives a broad alert containing hundreds of civilian opportunities. The account team covers one department, two relevant NAICS codes, and only notices whose response deadlines have not passed.",
		prompt: "What is the strongest first-pass search method?",
		options: [
			{
				id: "a",
				text: "Combine department or office, NAICS, notice type, posted-date range, and response-deadline filters, then save the search and inspect the results",
				tier: "best"
			},
			{
				id: "b",
				text: "Filter only by one broad keyword and manually read every result",
				tier: "costly"
			},
			{
				id: "c",
				text: "Filter only for solicitation notices so the team never sees presolicitations, sources sought, or justifications",
				tier: "disqualifying"
			},
			{
				id: "d",
				text: "Start with the department and posted-date range, then add NAICS and notice-type filters if the result set remains noisy",
				tier: "defensible"
			}
		],
		explanation:
			"SAM.gov’s official Contract Opportunities page supports advanced search and explains that a signed-in user can save searches. Intersecting organization, NAICS, notice-type, posted-date, and response-date filters improves precision without treating one keyword as authoritative. A broader staged search is defensible when agency coding is inconsistent, but excluding early notice types creates a capture blind spot.",
		citation: "SAM.gov — Contract Opportunities: Advanced Search and Saved Searches",
		sourceUrl: "https://sam.gov/opportunities",
		tags: ["sam-gov", "filters", "naics", "response-deadline", "search"]
	},
	{
		id: "find-forecast-osdbu",
		unitId: "find",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A capture manager wants civilian opportunities earlier than the normal SAM.gov solicitation window. The team has target agencies but no specific procurement numbers yet.",
		prompt: "Which official source should the team add to its discovery routine?",
		options: [
			{
				id: "a",
				text: "Agency acquisition forecasts and the agency OSDBU or small-business office, followed by validation against newer acquisition evidence",
				correct: true
			},
			{
				id: "b",
				text: "Only final award notices, because forecasts cannot contain useful pre-solicitation information",
				correct: false
			},
			{
				id: "c",
				text: "Only the incumbent’s marketing site, because agencies do not publish procurement forecasts",
				correct: false
			},
			{
				id: "d",
				text: "A list of expiring state and local contracts, because civilian federal agencies use the same procurement pipeline",
				correct: false
			}
		],
		explanation:
			"Acquisition.gov links recurring procurement forecasts, business-opportunity pages, vendor communication plans, and agency small-business offices across civilian agencies. FAR 5.404-1(b)(3) requires released long-range estimates to state that they use the best available information, are subject to modification, and are not binding on the Government. Forecast dates, competition strategy, and scope therefore require validation as newer market research and notices emerge.",
		citation: "Acquisition.gov — Agency Recurring Procurement Forecasts; FAR 5.404-1(b)(3)",
		sourceUrl: "https://www.acquisition.gov/procurement-forecast",
		tags: ["forecast", "osdbu", "civilian-agency", "early-discovery"]
	},
	{
		id: "find-ebuy-visibility",
		unitId: "find",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A BD lead cannot find a rumored agency RFQ in public SAM.gov search. The customer says it was released through GSA eBuy under a specific Schedule category.",
		prompt: "What most likely explains the missing public result?",
		options: [
			{
				id: "a",
				text: "eBuy requests are visible through the relevant acquisition vehicle and category to eligible contract holders, so the team must check through an authorized holder profile",
				correct: true
			},
			{
				id: "b",
				text: "Every eBuy request must also appear as a public SAM.gov solicitation on the same day",
				correct: false
			},
			{
				id: "c",
				text: "The RFQ cannot exist because civilian agencies are prohibited from using eBuy",
				correct: false
			},
			{
				id: "d",
				text: "Only the incumbent can see eBuy requests, regardless of which companies hold the applicable vehicle category",
				correct: false
			}
		],
		explanation:
			"GSA eBuy is a request tool for supported vehicles. Sellers generally see requests associated with categories or SINs awarded to their contracts, and BPA-specific requests may be visible only to BPA holders. A public SAM.gov search is therefore not a complete view of vehicle-only demand.",
		citation: "GSA Vendor Support Center — GSA eBuy",
		sourceUrl: "https://vsc.gsa.gov/drupal/node/120",
		tags: ["ebuy", "vehicle", "visibility", "gsa-schedule", "sin"]
	},
	{
		id: "find-contract-data-system-map",
		unitId: "find",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A contracts analyst is asked where to research a civilian agency’s incumbent awards in 2026. A legacy playbook still directs the team to FPDS ezSearch.",
		prompt: "Which answer reflects the current public-data landscape?",
		options: [
			{
				id: "a",
				text: "Public FPDS search has transitioned to SAM.gov Contract Awards and Data Bank; USAspending provides official spending analysis using procurement data derived from that reporting stream",
				correct: true
			},
			{
				id: "b",
				text: "FPDS ezSearch remains the only current public source, while SAM.gov contains only pre-award notices",
				correct: false
			},
			{
				id: "c",
				text: "USAspending contains only grants and loans, so it cannot support contract research",
				correct: false
			},
			{
				id: "d",
				text: "SAM.gov Data Bank contains acquisition forecasts but no awarded-contract records or modifications",
				correct: false
			}
		],
		explanation:
			"GSA completed the public-facing FPDS transition in 2026: contract-award search and reports now live in SAM.gov, including Data Bank reports. USAspending remains the official open source for federal spending and receives procurement data derived from federal contract reporting. Analysts should preserve “FPDS” as data lineage and legacy vocabulary, not as the current ezSearch destination.",
		citation: "SAM.gov — Contract Award Data in SAM.gov",
		sourceUrl: "https://sam.gov/fpds",
		tags: ["fpds", "sam-data-bank", "contract-awards", "usaspending", "data-lineage"]
	}
];
