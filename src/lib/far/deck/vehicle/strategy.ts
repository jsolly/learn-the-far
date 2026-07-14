import type { QuizQuestion } from "../../types";

export const STRATEGY_VEHICLE_QUESTIONS: QuizQuestion[] = [
	{
		id: "vehicle-strategy-open-market-or-vehicle",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "fundamentals",
		scoring: "single-best",
		situation:
			"A civilian account executive says a forecast opportunity is 'on a vehicle.' The agency has not named one, your company holds several contracts, and the requirement may also be competed outside them.",
		prompt: "What should the capture lead establish first?",
		options: [
			{
				id: "a",
				text: "Confirm the agency's intended acquisition path, vehicle scope and authorized users, and whether the prime holds the required contract and pool",
				correct: true,
			},
			{
				id: "b",
				text: "Assume any governmentwide contract the company holds will let the agency issue the order",
				correct: false,
			},
			{
				id: "c",
				text: "Treat the opportunity as a task order because every federal solicitation must use an existing vehicle",
				correct: false,
			},
			{
				id: "d",
				text: "Wait until award because acquisition-path questions do not affect capture eligibility or competition",
				correct: false,
			},
		],
		explanation:
			"An open-market procurement is competed under the generally applicable FAR solicitation procedures; an order under an existing contract is limited by that contract's scope, ordering rules, authorized ordering activities, and holder pool. FAR 16.504(a)(4)(v) requires an IDIQ solicitation and contract to describe the activities authorized to issue orders. Vehicle fit is therefore an early bid gate, not a label inferred from the customer or requirement.",
		citation:
			"FAR 16.504(a)(4)(v), 16.505(a)(2), 16.505(b); FAR Subpart 8.4",
		sourceUrl: "https://www.acquisition.gov/far/16.504",
		tags: ["acquisition-path", "open-market", "vehicle-access", "capture"],
	},
	{
		id: "vehicle-strategy-access-gap",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"Your large civilian prime does not hold the multiple-award IDIQ pool named in a draft acquisition plan. A qualified holder invites your company to support its task-order bid as a subcontractor.",
		prompt: "How should the opportunity be represented in the pipeline?",
		options: [
			{
				id: "a",
				text: "Pursue under the holder as a prospective subcontractor, subject to its bid decision and subcontract terms; do not present your company as the order prime",
				tier: "best",
				consequence:
					"The team uses a real path to the order while accurately distinguishing the IDIQ holder's prime relationship from your subcontract role.",
			},
			{
				id: "b",
				text: "Track it as a partner-led opportunity until the holder confirms the workshare, customer strategy, and bid authority",
				tier: "defensible",
				consequence:
					"The qualification remains cautious, although the team should promptly document that only the holder can submit the prime task-order offer.",
			},
			{
				id: "c",
				text: "List your company as prime because its corporate capabilities satisfy the requirement even without the named contract",
				tier: "disqualifying",
				consequence:
					"Technical capability does not create contract access; a non-holder cannot submit the prime order response.",
			},
			{
				id: "d",
				text: "Assume the holder can transfer its IDIQ to your company after task-order award",
				tier: "costly",
				consequence:
					"The capture model depends on an unsupported transfer and leaves privity, proposal authority, and workshare unresolved.",
			},
		],
		explanation:
			"Only an eligible IDIQ holder can receive an order under that contract. A non-holder may participate through a properly structured subcontract or permitted team arrangement, but FAR 9.604(e) leaves the holder fully responsible for prime-contract performance. FAR 42.505 also requires Government representatives to recognize the lack of privity with subcontractors and route prime-contract direction through the contracting officer to the prime.",
		citation: "FAR 9.604(e); FAR 42.505; FAR 44.101",
		sourceUrl: "https://www.acquisition.gov/far/42.505",
		tags: ["vehicle-access", "subcontracting", "privity", "holder"],
	},
	{
		id: "vehicle-strategy-commercial-sap",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A civilian customer needs a commercial help-desk service. The acquisition team is comparing an open-market simplified RFQ, a GSA MAS order, and a negotiated Part 15 RFP. Your account team wants to pick MAS solely because the service is commercial.",
		prompt: "Which channel-selection advice is strongest?",
		options: [
			{
				id: "a",
				text: "Compare estimated value, scope, mandatory sources, available vehicle coverage, competition needs, and each procedure's ordering rules; commercial status alone does not select the channel",
				correct: true,
			},
			{
				id: "b",
				text: "Use MAS automatically because all commercial services must be purchased under FAR Subpart 8.4",
				correct: false,
			},
			{
				id: "c",
				text: "Use simplified procedures automatically because Part 13 is a contract vehicle that your company already holds",
				correct: false,
			},
			{
				id: "d",
				text: "Use Part 15 automatically because competition for commercial services always requires a negotiated RFP",
				correct: false,
			},
		],
		explanation:
			"Commercial status determines the Part 12 policy and terms, not the buying channel. An open-market simplified acquisition follows Part 13 when authorized, a MAS order follows Subpart 8.4 and requires applicable Schedule coverage, and a negotiated open-market RFP follows Part 15. Capture should test access, scope, value, competition, and customer authority before choosing a lane.",
		citation: "FAR 8.404(a); FAR 12.102(b); FAR 13.003; FAR 15.000",
		sourceUrl: "https://www.acquisition.gov/far/8.404",
		tags: ["channel-strategy", "commercial-services", "SAP", "MAS", "Part-15"],
	},
	{
		id: "vehicle-strategy-oasis-nitaac-fit",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A civilian customer is weighing a broad, non-IT professional-services transformation against an IT modernization requirement. Your firm has access to an OASIS+ domain and to a NITAAC CIO-SP3 or CIO-SP3 Small Business contract through different business units.",
		prompt: "What vehicle advice is strongest?",
		options: [
			{
				id: "a",
				text: "Map the non-IT work to one of OASIS+'s 13 domains under the applicable one of six IDIQs; for IT, assess CIO-SP3 and CIO-SP3 Small Business, both operating through October 29, 2026, rather than treating CIO-SP4 as operational, then verify holder access and ordering guidance",
				tier: "best",
			},
			{
				id: "b",
				text: "Use either vehicle only after comparing scope, eligible contract holder, ordering process, fees, and customer authority",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Select OASIS+ for all technology because every professional-service vehicle is automatically an IT GWAC",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Select CIO-SP for the non-IT transformation solely because the customer is a civilian agency",
				tier: "costly",
			},
		],
		explanation:
			"As of July 2026, GSA describes OASIS+ as six distinct IDIQ contracts spanning 13 domains of non-IT services. NITAAC lists both CIO-SP3 and CIO-SP3 Small Business as operating through October 29, 2026; CIO-SP4 is not an operating GWAC and should not be used as a current access path. Brand familiarity does not replace a requirement-to-scope mapping, holder check, lifecycle check, or ordering-guide review.",
		citation: "GSA OASIS+; NITAAC CIO-SP3, CIO-SP3 Small Business, and GWACs",
		sourceUrl: "https://nitaac.nih.gov/gwacs/cio-sp3",
		tags: ["OASIS+", "NITAAC", "CIO-SP", "scope", "vehicle-selection"],
	},
	{
		id: "vehicle-strategy-cardinal-change",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"Midway through a civilian task order, the customer proposes adding a major new mission function that was neither described in the order competition nor reasonably encompassed by the base IDIQ's statement of work.",
		prompt: "What should the prime's contracts director do before accepting the work?",
		options: [
			{
				id: "a",
				text: "Perform and document both base-IDIQ and task-order scope analyses, and direct the customer toward a competed or otherwise authorized acquisition if the addition is outside scope",
				tier: "best",
				consequence:
					"The prime protects payment and protest positions by testing the change against both contractual layers before performance.",
			},
			{
				id: "b",
				text: "Pause the added work and request a written contracting-officer determination addressing scope and authority",
				tier: "defensible",
				consequence:
					"The pause controls unauthorized-work risk, though the prime should also build its own facts-based scope analysis.",
			},
			{
				id: "c",
				text: "Accept the work on program-office email because any modification is permissible below the IDIQ ceiling",
				tier: "disqualifying",
				consequence:
					"The ceiling does not cure an out-of-scope order or cardinal change, and program personnel may lack authority to bind the Government.",
			},
			{
				id: "d",
				text: "Treat the change as in scope because it uses the same labor categories already priced on the vehicle",
				tier: "costly",
				consequence:
					"Shared labor categories do not decide scope; the nature, magnitude, and original competitive field still matter.",
			},
		],
		explanation:
			"An order must stay within the scope, period, and maximum value of the underlying contract. A material modification also risks becoming a cardinal change outside the competition that produced the order. In B-237434, GAO treated materially different added services as an improper sole-source award outside the original contract's scope. The prime should analyze both contractual layers and obtain direction from an authorized contracting officer before performing.",
		citation: "FAR 16.505(a)(2); FAR 43.102(a); GAO B-237434",
		sourceUrl: "https://www.gao.gov/products/b-237434",
		tags: ["scope", "cardinal-change", "task-order", "unauthorized-commitment"],
	},
	{
		id: "vehicle-strategy-on-ramp",
		unitId: "vehicle",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A major civilian pipeline target is expected under OASIS+, which your company does not hold. Business development proposes waiting on rumor instead of acting on GSA's current continuously open OASIS+ solicitations or engaging current holders.",
		prompt: "What portfolio strategy is strongest?",
		options: [
			{
				id: "a",
				text: "Pursue a compliant near-term role under an eligible holder while separately using GSA's official continuously open OASIS+ solicitation process and building the qualifications for the applicable IDIQ and domain",
				tier: "best",
			},
			{
				id: "b",
				text: "Qualify current holders and likely workshare now, while keeping any future prime-access pursuit as a separate investment decision",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Represent the company as a future holder because the agency may add contractors whenever demand increases",
				tier: "disqualifying",
			},
			{
				id: "d",
				text: "Ignore the access gap until the task-order solicitation appears, then ask the agency to add the company to the holder list",
				tier: "costly",
			},
		],
		explanation:
			"GSA states that, as of January 12, 2026, all six OASIS+ solicitations are continuously open for proposals under 13 total domains, with rolling evaluation and no fixed award timeline. That official process creates a real access path but not immediate or assured award. The company should separate near-term participation under a holder from its direct-access proposal.",
		citation: "GSA, OASIS+ Solicitations (continuously open)",
		sourceUrl:
			"https://www.gsa.gov/buy-through-us/products-and-services/professional-services/buy-services/oasis-plus/sellers-guide/solicitations-continuously-open",
		tags: ["on-ramp", "vehicle-access", "teaming", "portfolio-strategy"],
	},
];
