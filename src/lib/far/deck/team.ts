import type { QuizQuestion } from "../types";

export const TEAM_QUESTIONS: QuizQuestion[] = [
	{
		"id": "team-gsa-cta-vs-prime-sub-privity",
		"unitId": "team",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "In a GSA Schedules Contractor Team Arrangement (CTA), how does each team member's relationship to the Government differ from a FAR 9.6 prime/subcontractor team?",
		"options": [
			{
				"id": "a",
				"text": "Each CTA member holds its own GSA Schedule contract and is in privity with the Government for the portion it performs; there is no prime/subcontractor hierarchy.",
				"correct": true
			},
			{
				"id": "b",
				"text": "One member is designated team lead, holds the order, and the others perform as its subcontractors with no privity to the Government.",
				"correct": false
			},
			{
				"id": "c",
				"text": "One member is the managing venturer of a joint venture that alone holds the order and signs on the team's behalf.",
				"correct": false
			},
			{
				"id": "d",
				"text": "SBA must approve the CTA and certify the combined team as a single small business before award.",
				"correct": false
			}
		],
		"explanation": "A GSA Schedules CTA is not a prime/sub arrangement: every teammate holds its own Schedule contract and deals directly with the Government for its portion. Option (b) describes the FAR 9.6 prime/subcontractor model, where only the prime has privity.",
		"citation": "FAR 9.601",
		"sourceUrl": "https://www.acquisition.gov/far/9.601",
		"tags": [
			"cta",
			"gsa-schedule",
			"privity",
			"prime-sub"
		]
	},
	{
		"id": "team-far-9601-two-forms",
		"unitId": "team",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "Under FAR 9.601, a 'contractor team arrangement' can take which two forms?",
		"options": [
			{
				"id": "a",
				"text": "(1) Two or more companies form a partnership or joint venture to act as a potential prime; or (2) a potential prime agrees with one or more companies to have them act as its subcontractors under a specified acquisition.",
				"correct": true
			},
			{
				"id": "b",
				"text": "(1) A prime and the Government jointly agree to share performance risk; or (2) two agencies combine their requirements into one contract.",
				"correct": false
			},
			{
				"id": "c",
				"text": "(1) A large business mentors a small business under an SBA agreement; or (2) two small businesses pool their past performance.",
				"correct": false
			},
			{
				"id": "d",
				"text": "(1) A prime hires temporary staff; or (2) a prime buys commercial items off a Schedule.",
				"correct": false
			}
		],
		"explanation": "FAR 9.601 defines a CTA as either a partnership/joint venture acting as a potential prime, or a potential prime plus one or more subcontractors teaming for a specified acquisition. Option (c) is the SBA mentor-protege construct, a different program.",
		"citation": "FAR 9.601",
		"sourceUrl": "https://www.acquisition.gov/far/9.601",
		"tags": [
			"cta",
			"definition",
			"joint-venture",
			"far-9-6"
		]
	},
	{
		"id": "team-losc-services-50-percent",
		"unitId": "team",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "Under the Limitations on Subcontracting clause (FAR 52.219-14) for a small-business set-aside for SERVICES (except construction), how much work must the prime keep?",
		"options": [
			{
				"id": "a",
				"text": "The prime may not pay more than 50% of the amount received for contract performance to firms that are not similarly situated entities.",
				"correct": true
			},
			{
				"id": "b",
				"text": "The prime must self-perform at least 15% of the cost of the contract.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The prime must self-perform at least 25% of the cost of the contract.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The prime must perform at least 51% of the total contract value, including the cost of materials.",
				"correct": false
			}
		],
		"explanation": "For services, 52.219-14 caps subcontracting to non-similarly-situated firms at 50% of the amount paid by the Government. The 15% figure is general construction and 25% is special-trade construction; the services test excludes materials.",
		"citation": "FAR 52.219-14",
		"sourceUrl": "https://www.acquisition.gov/far/52.219-14",
		"tags": [
			"limitations-on-subcontracting",
			"50-percent-rule",
			"services",
			"set-aside"
		]
	},
	{
		"id": "team-small-jv-size-rule",
		"unitId": "team",
		"format": "recall",
		"difficulty": "core",
		"scoring": "single-best",
		"prompt": "For a joint venture to qualify as small for a small-business set-aside, what is the size requirement for its members?",
		"options": [
			{
				"id": "a",
				"text": "Each member must individually qualify as small under the size standard, unless the JV is between an SBA-approved mentor and its protege, in which case the mentor may be large.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Only the managing venturer must be small; the other members can be any size.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The combined receipts or employees of all members, added together, must fall under the size standard.",
				"correct": false
			},
			{
				"id": "d",
				"text": "At least 51% of the JV must be owned by a small business, with no size limit on the minority members.",
				"correct": false
			}
		],
		"explanation": "Under 13 CFR 121.103(h), JV members are not aggregated; each must independently be small, with the sole exception of an SBA-approved mentor-protege JV (13 CFR 125.9), where the mentor can be other-than-small.",
		"citation": "13 CFR 121.103(h)",
		"sourceUrl": "https://www.ecfr.gov/current/title-13/section-121.103",
		"tags": [
			"joint-venture",
			"size",
			"mentor-protege",
			"small-business"
		]
	},
	{
		"id": "team-teaming-agreement-enforceability",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "single-best",
		"situation": "You signed a teaming agreement naming a specialty firm as your subcontractor for 40% of the work if you win, but the subcontract price and detailed statement of work are 'to be negotiated in good faith after award.' You win the prime contract. The teammate now demands a much higher price and threatens to walk.",
		"prompt": "What is the realistic legal posture of your teaming agreement?",
		"options": [
			{
				"id": "a",
				"text": "Teaming agreements that leave material terms (price, SOW) to be negotiated later are frequently held to be unenforceable 'agreements to agree,' so you may have no remedy to force the teammate onto the subcontract.",
				"correct": true
			},
			{
				"id": "b",
				"text": "FAR 9.6 makes the teaming agreement automatically binding on both parties the moment you win the prime contract.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The contracting officer will enforce the teaming agreement and direct the teammate to perform its 40%.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The teammate is bound to the Government by privity of contract and cannot back out.",
				"correct": false
			}
		],
		"explanation": "The Government recognizes CTAs but does not become a party to or enforce them (FAR 9.603 - 9.604); enforceability is a matter of contract law between the parties, and courts routinely void teaming agreements whose key terms were left open. The sub has no privity with the Government.",
		"citation": "FAR 9.603",
		"sourceUrl": "https://www.acquisition.gov/far/9.603",
		"tags": [
			"teaming-agreement",
			"enforceability",
			"privity",
			"risk"
		]
	},
	{
		"id": "team-large-prime-set-aside-participation",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "You are a large business. A juicy opportunity is being set aside for small business, so you cannot bid as prime on your own. You want to participate as much as possible.",
		"prompt": "Which approach legitimately maximizes your role?",
		"options": [
			{
				"id": "a",
				"text": "Enter an SBA-approved mentor-protege joint venture with your protege small business, and have the JV bid as the small-business prime.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Team as a subcontractor to a qualified small-business prime and take as large a workshare as the rules allow.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Form an ordinary (non-mentor-protege) 50/50 joint venture with a small business.",
				"tier": "disqualifying"
			},
			{
				"id": "d",
				"text": "Self-certify the team as small based on your small teammate's size and bid as prime.",
				"tier": "disqualifying"
			}
		],
		"explanation": "A large business cannot be the prime on a small-business set-aside. The approved mentor-protege JV (13 CFR 125.9) is the one path that lets the large firm lead while the JV still qualifies as small; a plain JV with a large member is not small, and self-certifying as small is fraud.",
		"citation": "13 CFR 125.9",
		"sourceUrl": "https://www.ecfr.gov/current/title-13/section-125.9",
		"tags": [
			"mentor-protege",
			"set-aside",
			"joint-venture",
			"large-prime",
			"eligibility"
		]
	},
	{
		"id": "team-similarly-situated-entities",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "You are a small-business prime on a services set-aside and want to keep only about 30% of the work in-house, pushing roughly 70% to teammates. The Limitations on Subcontracting clause (FAR 52.219-14) applies.",
		"prompt": "How do you allocate the 70% and stay compliant?",
		"options": [
			{
				"id": "a",
				"text": "Subcontract the 70% to a firm that holds the same small-business program status you do and is small for the NAICS code you assigned to the subcontract.",
				"tier": "best",
				"consequence": "Compliant: work by a similarly situated entity counts toward your side, so you + the SSE cover 100% and easily clear the 50% floor. You get the workshare flexibility you wanted."
			},
			{
				"id": "b",
				"text": "Subcontract the 70% to a large-business specialty firm that can do the work fastest.",
				"tier": "disqualifying",
				"consequence": "Violation: you self-perform only 30%, and the large sub is not similarly situated, so you breach the 50% limit. Risk of termination and False Claims exposure."
			},
			{
				"id": "c",
				"text": "Split the 70% among several other-than-small subcontractors so no single one is large.",
				"tier": "costly",
				"consequence": "Still noncompliant: all non-similarly-situated work counts against you regardless of how many firms you spread it across; you remain below 50% self-performance."
			},
			{
				"id": "d",
				"text": "Give the 70% to a small business that is small under a different NAICS code and a different program than yours.",
				"tier": "costly",
				"consequence": "Fails the test: it is not a 'similarly situated entity' for THIS award, so its work counts against your 50% and you are noncompliant."
			}
		],
		"explanation": "A 'similarly situated entity' is a subcontractor with the same small-business program status as the prime AND that is small for the NAICS the prime assigned to the subcontract. Work performed by an SSE is credited to the prime's side of the 50% calculation.",
		"citation": "FAR 52.219-14",
		"sourceUrl": "https://www.acquisition.gov/far/52.219-14",
		"tags": [
			"similarly-situated-entities",
			"limitations-on-subcontracting",
			"workshare",
			"compliance"
		]
	},
	{
		"id": "team-subcontracting-plan-threshold",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "confidence-bet",
		"situation": "You are a large (other-than-small) prime pursuing an unrestricted negotiated contract expected to be worth about $2 million, and the work has clear subcontracting opportunities.",
		"prompt": "What is true about a small-business subcontracting plan for this award?",
		"options": [
			{
				"id": "a",
				"text": "A subcontracting plan under FAR 19.702 / 52.219-9 is required, because the contract exceeds $900,000 and offers subcontracting possibilities and you are a large business.",
				"correct": true
			},
			{
				"id": "b",
				"text": "No plan is required because the value is above the simplified acquisition threshold, which exempts the contract.",
				"correct": false
			},
			{
				"id": "c",
				"text": "A plan is required only if the acquisition is set aside for small business.",
				"correct": false
			},
			{
				"id": "d",
				"text": "A plan is required only above $250,000, matching the simplified acquisition threshold.",
				"correct": false
			}
		],
		"explanation": "FAR 19.702 requires a subcontracting plan when a contract with a large business is expected to exceed $900,000 ($2 million for construction) and has subcontracting possibilities. Small-business primes and set-asides are exempt; the SAT ($250,000) is a different threshold.",
		"citation": "FAR 19.702",
		"sourceUrl": "https://www.acquisition.gov/far/19.702",
		"tags": [
			"subcontracting-plan",
			"far-19-7",
			"threshold",
			"large-prime"
		]
	}
];
