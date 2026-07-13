import type { QuizQuestion } from "../types";

export const BID_NO_BID_QUESTIONS: QuizQuestion[] = [
	{
		"id": "bid-no-bid-rule-of-two-trigger",
		"unitId": "bid-no-bid",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "Under the \"rule of two\" (FAR 19.502-2), when must a contracting officer set aside an acquisition above the simplified acquisition threshold for small business?",
		"options": [
			{
				"id": "a",
				"text": "When there is a reasonable expectation of offers from at least two responsible small business concerns and award will be made at fair market prices",
				"correct": true
			},
			{
				"id": "b",
				"text": "When at least two 8(a)-certified firms have expressed interest through a sources-sought notice",
				"correct": false
			},
			{
				"id": "c",
				"text": "When any two firms of any size are expected to submit compliant proposals",
				"correct": false
			},
			{
				"id": "d",
				"text": "When two or more small businesses are already on the incumbent contract's team",
				"correct": false
			}
		],
		"explanation": "FAR 19.502-2(b) requires a set-aside when the CO reasonably expects offers from at least two responsible small businesses AND award at fair market prices. Both prongs must hold; the rule is not limited to 8(a) firms and 'any size' or incumbency does not trigger it.",
		"citation": "FAR 19.502-2",
		"sourceUrl": "https://www.acquisition.gov/far/19.502-2",
		"tags": [
			"rule-of-two",
			"set-aside",
			"small-business",
			"eligibility"
		]
	},
	{
		"id": "bid-no-bid-sam-responsibility-gate",
		"unitId": "bid-no-bid",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "Proposals are due in eight days on a competitive RFP you want to win. During your bid-readiness check you discover your SAM.gov registration lapsed last month and has not been renewed.",
		"prompt": "What is the right move to protect the bid?",
		"options": [
			{
				"id": "a",
				"text": "Renew and fully activate the SAM registration now so it is active at time of offer, then submit",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Submit the proposal on time and complete the SAM renewal before award is announced",
				"tier": "disqualifying"
			},
			{
				"id": "c",
				"text": "No-bid this one and prioritize keeping SAM current for the next opportunity",
				"tier": "defensible"
			},
			{
				"id": "d",
				"text": "Ask the contracting officer for a blanket waiver of the SAM requirement given your long track record",
				"tier": "costly"
			}
		],
		"explanation": "FAR 52.204-7 requires an offeror to be registered in SAM at the time it submits its offer and continuously through award; it is a gating matter, not a curable post-submission item. Renewing before offer preserves the bid; submitting unregistered risks elimination, and COs cannot simply waive the requirement.",
		"citation": "FAR 52.204-7",
		"sourceUrl": "https://www.acquisition.gov/far/52.204-7",
		"tags": [
			"sam-registration",
			"responsibility",
			"gate",
			"bid-readiness"
		]
	},
	{
		"id": "bid-no-bid-large-prime-on-setaside",
		"unitId": "bid-no-bid",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "You run capture at a large prime. The sources-sought responses show at least three capable small businesses that do this exact work, and the draft RFP signals a total small-business set-aside under the rule of two. The requirement is squarely in your wheelhouse and you want in.",
		"prompt": "How do you position the company to capture work on this set-aside?",
		"options": [
			{
				"id": "a",
				"text": "Submit as prime and argue your past performance justifies an exception to the set-aside",
				"tier": "disqualifying",
				"consequence": "Proposal is found ineligible as an other-than-small concern on a total set-aside; B&P is wasted and you signal to the customer you don't understand the acquisition."
			},
			{
				"id": "b",
				"text": "Team as a subcontractor under a capable small-business prime",
				"tier": "best",
				"consequence": "You are eligible for the work, but the small prime must meet the limitations on subcontracting (perform at least 50% of the cost of services itself), capping your share."
			},
			{
				"id": "c",
				"text": "Stand up an SBA mentor-protege joint venture so the JV can compete as small",
				"tier": "defensible",
				"consequence": "Viable and lets you share prime-level scope, but only if an SBA-approved mentor-protege agreement and JV are in place before offer — usually too little lead time on an imminent RFP."
			},
			{
				"id": "d",
				"text": "File an agency-level protest challenging the set-aside decision to force full-and-open",
				"tier": "costly",
				"consequence": "Rarely succeeds once the rule of two is met on the record, delays the deal, and burns the customer relationship you need for the next opportunity."
			}
		],
		"explanation": "On a total small-business set-aside a large business cannot prime; the reliable eligible path is subcontracting under a small prime (subject to FAR 52.219-14 limitations on subcontracting). A mentor-protege JV works only if approved and structured in advance; protesting a valid rule-of-two set-aside is a low-odds, relationship-damaging move.",
		"citation": "FAR 19.502-2",
		"sourceUrl": "https://www.acquisition.gov/far/19.502-2",
		"tags": [
			"set-aside",
			"teaming",
			"subcontracting",
			"mentor-protege",
			"large-prime"
		]
	},
	{
		"id": "bid-no-bid-incumbent-recompete-pwin",
		"unitId": "bid-no-bid",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "confidence-bet",
		"situation": "You are the challenger on an incumbent recompete. Section M is a best-value tradeoff where past performance on this specific scope is the highest-weighted factor, the incumbent is well-regarded by the customer, and the requirements read as tightly aligned to how the incumbent already operates. Your relevant past performance is thin and you have no clear technical or price discriminator.",
		"prompt": "What is the strongest single reason to no-bid this pursuit?",
		"options": [
			{
				"id": "a",
				"text": "Section M weights same-scope past performance highest, the incumbent holds that advantage, and you have no discriminator — probability of win is too low to justify the B&P investment",
				"correct": true
			},
			{
				"id": "b",
				"text": "You can technically meet every minimum requirement listed in Section L",
				"correct": false
			},
			{
				"id": "c",
				"text": "You could bid the lowest price and win on cost",
				"correct": false
			},
			{
				"id": "d",
				"text": "Incumbents statistically almost always lose on recompete, so the odds favor you",
				"correct": false
			}
		],
		"explanation": "In a tradeoff source selection (FAR 15.101-1), low Pwin driven by the most-weighted factor plus no discriminator is the classic no-bid signal. Meeting Section L minimums is table stakes, price is not the deciding lever in a best-value tradeoff, and 'incumbents always lose' is a false generalization.",
		"citation": "FAR 15.101-1",
		"sourceUrl": "https://www.acquisition.gov/far/15.101-1",
		"tags": [
			"incumbent",
			"pwin",
			"section-m",
			"tradeoff",
			"no-bid"
		]
	}
];
