import type { QuizQuestion } from "../types";

export const PROPOSE_QUESTIONS: QuizQuestion[] = [
	{
		"id": "propose-l-vs-m-sections",
		"unitId": "propose",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "In a negotiated RFP structured under the Uniform Contract Format (FAR 15.204-5), what does Section L tell offerors versus Section M?",
		"options": [
			{
				"id": "a",
				"text": "Section L gives instructions on how to prepare and submit the proposal; Section M states the factors and subfactors the Government will use to evaluate and make the award decision.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Section L lists the evaluation factors for award; Section M gives instructions on proposal format and submission.",
				"correct": false
			},
			{
				"id": "c",
				"text": "Section L contains the contract clauses; Section M contains the representations and certifications.",
				"correct": false
			},
			{
				"id": "d",
				"text": "Section L is the statement of work; Section M is the pricing schedule.",
				"correct": false
			}
		],
		"explanation": "Under FAR 15.204-5, Section L = 'Instructions, conditions, and notices to offerors' (how to write and submit) and Section M = 'Evaluation factors for award' (how you'll be scored). Writing to L but ignoring M is the classic proposal error — you must build the proposal around the Section M factors while obeying the Section L instructions.",
		"citation": "FAR 15.204-5",
		"sourceUrl": "https://www.acquisition.gov/far/15.204-5",
		"tags": [
			"section-l",
			"section-m",
			"ucf",
			"proposal-structure"
		]
	},
	{
		"id": "propose-lpta-gold-plating",
		"unitId": "propose",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "The RFP's Section M states award will be made on a lowest-price, technically-acceptable (LPTA) basis, with technical rated only Acceptable/Unacceptable against defined minimum requirements. Your solution architects want to propose a premium, higher-availability design that beats every minimum, at a price about 12% above what a bare-minimum-compliant bid would cost.",
		"prompt": "As capture lead, how do you steer the bid strategy?",
		"options": [
			{
				"id": "a",
				"text": "Propose the leanest fully-compliant solution that clearly meets every stated minimum as 'Acceptable,' and drive price as low as defensible, since under LPTA nothing above acceptable earns credit.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Propose a solid compliant baseline but include one or two low-cost enhancements clearly framed as no-added-cost, to differentiate on acceptability margin.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Propose the premium high-availability design at the 12% higher price and rely on its technical superiority to justify the delta.",
				"tier": "costly"
			},
			{
				"id": "d",
				"text": "Bid below the minimum on a couple of requirements to win on price, planning to negotiate the gaps after award.",
				"tier": "disqualifying"
			}
		],
		"explanation": "FAR 15.101-2 LPTA makes tradeoffs impermissible: award goes to the lowest-priced proposal rated technically acceptable, so exceeding the minimums buys no evaluation credit and only raises your price. Meet every minimum cleanly and compete on price; a bid that misses a minimum is technically unacceptable and ineligible for award.",
		"citation": "FAR 15.101-2",
		"sourceUrl": "https://www.acquisition.gov/far/15.101-2",
		"tags": [
			"lpta",
			"best-value-continuum",
			"pricing-strategy"
		]
	},
	{
		"id": "propose-shall-compliance-matrix",
		"unitId": "propose",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "Two days before the deadline, your compliance matrix flags one Section L 'shall': the past-performance volume 'shall be limited to five references, each no more than two pages.' Your draft has seven references and several run three pages. Section M says non-conforming proposals may be rejected without evaluation.",
		"prompt": "What do you do with the past-performance volume?",
		"options": [
			{
				"id": "a",
				"text": "Cut to your five strongest, most-relevant references and trim each to two pages before submitting.",
				"tier": "best",
				"consequence": "Fully compliant and responsive; the volume is evaluated on your best evidence and the proposal stays in the competition."
			},
			{
				"id": "b",
				"text": "Keep all seven but trim each to two pages, betting the evaluators want more data points.",
				"tier": "costly",
				"consequence": "Violates the five-reference 'shall'; the CO may reject the volume or count only the first five, and you've spent effort on references that won't be scored."
			},
			{
				"id": "c",
				"text": "Submit five references but leave them at three pages each because the content is strong.",
				"tier": "costly",
				"consequence": "Breaches the page 'shall'; evaluators may refuse to read past page two or find the volume non-conforming, so your strongest evidence goes unscored."
			},
			{
				"id": "d",
				"text": "Submit all seven at three pages and add a note asking the CO to waive the limit given your strong record.",
				"tier": "disqualifying",
				"consequence": "Doubly non-compliant with a 'shall'; the CO can reject the proposal without evaluation and there is no obligation to waive a stated limit."
			}
		],
		"explanation": "In a Section L compliance matrix, every 'shall' is a mandatory instruction; a proposal that ignores one is non-conforming and may be rejected or have the offending material disregarded. Being responsive to the instructions is a threshold gate — winning content that violates a 'shall' can be thrown out before it's ever scored.",
		"citation": "FAR 15.204-5",
		"sourceUrl": "https://www.acquisition.gov/far/15.204-5",
		"tags": [
			"compliance-matrix",
			"shall",
			"responsiveness",
			"section-l"
		]
	},
	{
		"id": "propose-neutral-past-performance",
		"unitId": "propose",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "confidence-bet",
		"situation": "You're pursuing a new market where your firm has no relevant prior contracts. A competitor's BD lead tells you not to bother bidding because 'no past performance means an automatic low score that kills you.'",
		"prompt": "Under FAR 15.305, how is an offeror with no relevant past-performance record supposed to be treated in the past-performance evaluation?",
		"options": [
			{
				"id": "a",
				"text": "It must be evaluated neither favorably nor unfavorably on past performance — a neutral/unknown-confidence rating.",
				"correct": true
			},
			{
				"id": "b",
				"text": "It automatically receives the lowest past-performance rating, since absence of a record is treated as poor performance.",
				"correct": false
			},
			{
				"id": "c",
				"text": "It is found ineligible for award because past performance is a mandatory pass/fail responsibility gate.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The Government must substitute the past performance of the offeror's proposed subcontractors as if it were the prime's own.",
				"correct": false
			}
		],
		"explanation": "FAR 15.305(a)(2)(iv) requires that an offeror without a relevant past-performance record 'may not be evaluated favorably or unfavorably' — a neutral rating, not a penalty. The competitor's claim is a myth; a lack of history is a differentiator problem, not a disqualifier.",
		"citation": "FAR 15.305",
		"sourceUrl": "https://www.acquisition.gov/far/15.305",
		"tags": [
			"past-performance",
			"neutral-rating",
			"new-entrant"
		]
	}
];
