import type { QuizQuestion } from "../../types";

const questions: QuizQuestion[] = [
	{
		"id": "team-make-buy-oci-gates",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "For a negotiated civilian procurement, the solicitation requires a make-or-buy program. The lowest-cost 'buy' source is a proposed teammate whose advisory affiliate helped the agency develop closely related requirements and may hold nonpublic competitor information.",
		"prompt": "How should your large prime make the sourcing decision?",
		"options": [
			{
				"id": "a",
				"text": "Evaluate the make-or-buy factors, complete OCI diligence before relying on the teammate in the offer, disclose any significant potential conflict and proposed mitigation, and obtain the contracting officer's determination before award.",
				"tier": "best",
				"consequence": "The make-or-buy rationale is supportable and the apparently attractive source does not bypass an independent eligibility gate."
			},
			{
				"id": "b",
				"text": "Choose another qualified source while the OCI facts cannot be resolved in time.",
				"tier": "defensible",
				"consequence": "You may give up some price advantage, but avoid building the proposal around an unresolved conflict."
			},
			{
				"id": "c",
				"text": "Select the lowest-cost teammate and treat the make-or-buy approval as Government acceptance of any OCI.",
				"tier": "disqualifying",
				"consequence": "Make-or-buy review, consent, purchasing-system review, and OCI resolution are separate actions; one does not waive another."
			},
			{
				"id": "d",
				"text": "Classify the work as 'must buy' without supporting analysis so the affiliate relationship need not be disclosed.",
				"tier": "disqualifying",
				"consequence": "The label does not cure the conflict and the unsupported categorization frustrates the required Government evaluation."
			}
		],
		"explanation": "FAR 15.407-2 makes the prime responsible for make-or-buy planning and separates that review from consent and purchasing-system approval. OCI review is a distinct gate: perform diligence before building the offer around the source, disclose significant potential conflicts and proposed mitigation, and remember that under FAR 9.504 the contracting officer determines whether a conflict exists and must resolve significant potential conflicts before award.",
		"citation": "FAR 15.407-2; FAR 9.504-9.505",
		"sourceUrl": "https://www.acquisition.gov/far/15.407-2",
		"tags": ["make-or-buy", "oci", "source-selection", "risk"]
	},
	{
		"id": "team-jv-versus-prime-sub-control",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "tiered",
		"situation": "On an unrestricted civilian opportunity, another large company proposes a 'joint venture' but wants your company alone to submit the offer, sign the contract, bear all Government performance risk, and issue it a subcontract after award.",
		"prompt": "How should you characterize and document the arrangement?",
		"options": [
			{
				"id": "a",
				"text": "Treat it as a prime/subcontractor team unless the companies genuinely form a partnership or JV that itself acts as the potential prime; disclose the actual relationships in the offer.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Pause and redesign a true JV only if shared prime-level governance, liability, accounting, and proposal responsibilities serve the pursuit.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Call it a JV in the proposal while documenting it as a subcontract everywhere else.",
				"tier": "disqualifying"
			},
			{
				"id": "d",
				"text": "Avoid disclosing the relationship because unrestricted acquisitions are outside FAR 9.6.",
				"tier": "disqualifying"
			}
		],
		"explanation": "FAR 9.601 distinguishes a partnership/JV acting as potential prime from a potential prime with subcontractors. FAR 9.603 recognizes arrangements when they are identified and relationships fully disclosed. Labels should match legal and operational reality; in a prime/sub team, your prime remains fully responsible to the Government under FAR 9.604(e).",
		"citation": "FAR 9.601; FAR 9.603-9.604",
		"sourceUrl": "https://www.acquisition.gov/far/9.601",
		"tags": ["joint-venture", "prime-sub", "disclosure", "governance"]
	},
	{
		"id": "team-large-sub-sse-downstream-math",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "confidence-bet",
		"situation": "On a services set-aside, the small prime plans to retain 40% of receipts, pay 10% to a qualifying first-tier similarly situated entity, and pay 50% to your large company. The similarly situated entity plans to subcontract half of its share to your company.",
		"prompt": "Does that allocation satisfy FAR 52.219-14?",
		"options": [
			{
				"id": "a",
				"text": "No. The 5% passed from the similarly situated entity to your large company counts toward the non-similarly-situated cap, making the total paid to non-similarly-situated firms 55%.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Yes. Every dollar first paid to a similarly situated entity remains credited to the prime regardless of further subcontracting.",
				"correct": false
			},
			{
				"id": "c",
				"text": "Yes. The rule measures only the small prime's self-performance, and it keeps 40%.",
				"correct": false
			},
			{
				"id": "d",
				"text": "No, but only because a similarly situated entity may never use any lower-tier subcontractor.",
				"correct": false
			}
		],
		"explanation": "The clause credits work performed by a first-tier similarly situated entity, but expressly says work that entity further subcontracts counts toward the prime's percentage that cannot be exceeded. From the large-sub seat, your direct and indirect shares must both be visible in the compliance model.",
		"citation": "FAR 52.219-14(e)(1)",
		"sourceUrl": "https://www.acquisition.gov/far/52.219-14",
		"tags": ["limitations-on-subcontracting", "similarly-situated", "lower-tier", "workshare"]
	},
	{
		"id": "team-ostensible-subcontractor-mitigation",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "tiered",
		"situation": "For a general-construction contract above the simplified acquisition threshold that is totally set aside for small business, the proposed small prime will employ the project manager and superintendent, manage and supervise the project, oversee performance, and coordinate every trade. Excluding materials, it plans to pay 80% of the amount paid by the Government to large, non-similarly-situated trade subcontractors.",
		"prompt": "What is the sound ostensible-subcontractor and workshare assessment?",
		"options": [
			{
				"id": "a",
				"text": "The structure can be defensible because general construction's primary and vital requirements are management, supervision, and oversight, and 80% is within the 85% payment cap, provided the prime actually performs those management functions.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Document the prime's management authority, personnel, supervision, subcontract coordination, and 13 CFR 125.6 calculation, then monitor the facts through performance.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Reject the structure because a small general contractor must itself perform most of the physical construction trades.",
				"tier": "disqualifying"
			},
			{
				"id": "d",
				"text": "Treat compliance with the 85% payment cap as permission for the large subcontractors to control project management and supervision.",
				"tier": "disqualifying"
			}
		],
		"explanation": "13 CFR 121.103(h)(3)(iv) defines the primary and vital requirements of a general-construction contract as management, supervision, and oversight, including coordination of subcontractors; it does not require the prime to perform every physical trade. Section 125.6(a)(3) permits payments up to 85% of the relevant amount to firms that are not similarly situated. The paragraph (iii) bright-line safe harbor applied in Bowhead, SIZ-6352, covers services, specialty-trade construction, and supplies, not general construction, so the prime must actually retain the paragraph (iv) functions as well as meet the payment limit.",
		"citation": "13 CFR 121.103(h)(3)(iii)-(iv); 13 CFR 125.6(a)(3); Bowhead, SBA No. SIZ-6352 (2025)",
		"sourceUrl": "https://www.ecfr.gov/current/title-13/section-121.103",
		"tags": ["ostensible-subcontractor", "mitigation", "affiliation", "primary-vital"]
	},
	{
		"id": "team-commercial-subcontracting-plan",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "single-best",
		"situation": "Your large company sells commercial services to several civilian agencies. One contracting team asks how an approved commercial small-business subcontracting plan differs from an individual plan.",
		"prompt": "Which answer is accurate without relying on a changing dollar threshold?",
		"options": [
			{
				"id": "a",
				"text": "A commercial plan covers the contractor's fiscal year and the entire production of commercial products and performance of commercial services by the company or covered segment, uses aggregate goals for that company or segment, and generally produces one annual Summary Subcontract Report for covered contracts.",
				"correct": true
			},
			{
				"id": "b",
				"text": "A commercial plan is written separately for each contract and excludes commercial sales outside that contract.",
				"correct": false
			},
			{
				"id": "c",
				"text": "A commercial plan contains no goals and needs no annual approval or reporting.",
				"correct": false
			},
			{
				"id": "d",
				"text": "A commercial plan is available only to small-business prime contractors.",
				"correct": false
			}
		],
		"explanation": "FAR 19.701 defines a commercial plan by its fiscal-year scope and the entire production of commercial products and performance of commercial services by the company or a covered portion such as a division, plant, or product line. Its goals are aggregate goals for that covered company or segment—not necessarily companywide. FAR 19.704(d) keeps an approved plan in effect across covered Government contracts for the fiscal year and requires one SSR for the contracts covered by the plan.",
		"citation": "FAR 19.701; FAR 19.704(d)",
		"sourceUrl": "https://www.acquisition.gov/far/19.704",
		"tags": ["commercial-plan", "subcontracting-plan", "goals", "esrs"]
	},
	{
		"id": "team-consent-approved-system-limits",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "single-best",
		"situation": "Your large prime has an approved purchasing system after a successful CPSR. Its civilian prime contract includes FAR 52.244-2 and specifically lists one critical subcontract as requiring contracting-officer consent.",
		"prompt": "What does the approved system change?",
		"options": [
			{
				"id": "a",
				"text": "It reduces routine consent requirements, but your company still needs written consent for the specifically listed subcontract, and consent does not relieve the prime of performance or cost responsibility.",
				"correct": true
			},
			{
				"id": "b",
				"text": "It eliminates every consent requirement in the contract, including listed critical subcontracts.",
				"correct": false
			},
			{
				"id": "c",
				"text": "It transfers responsibility for subcontract terms and cost allowability to the contracting officer.",
				"correct": false
			},
			{
				"id": "d",
				"text": "It converts all subcontractors into Government-approved sources with direct privity.",
				"correct": false
			}
		],
		"explanation": "Under FAR 44.201-1(a) and 52.244-2(d), an approved purchasing system does not erase consent for subcontracts the contracting officer specifically identifies. Paragraph 52.244-2(f) also says consent or system approval does not approve terms, determine cost allowability, or relieve the prime of responsibility.",
		"citation": "FAR 52.244-2(d), (f)",
		"sourceUrl": "https://www.acquisition.gov/far/52.244-2",
		"tags": ["consent-to-subcontract", "approved-purchasing-system", "cpsr", "prime-responsibility"]
	},
	{
		"id": "team-mas-cta-member-replacement",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "After award of a civilian MAS CTA order, one member can no longer perform its assigned portion. The CTA lead proposes quietly replacing it with the lead's ordinary subcontractor and billing all work through the lead.",
		"prompt": "How should the team handle the change?",
		"options": [
			{
				"id": "a",
				"text": "Follow the CTA agreement and seek the ordering activity's approval before replacing the member, then update responsibilities, Schedule coverage, pricing, invoicing, and award documentation.",
				"tier": "best",
				"consequence": "The revised team remains transparent and each CTA member's prime responsibility and Schedule scope can be validated."
			},
			{
				"id": "b",
				"text": "Ask whether the buyer will accept a contractual modification or another compliant structure before moving any work.",
				"tier": "defensible",
				"consequence": "Performance may pause, but the team avoids unilaterally changing the awarded contractor relationships."
			},
			{
				"id": "c",
				"text": "Substitute the lead's subcontractor without notice because a CTA lead is the sole prime for all work.",
				"tier": "disqualifying",
				"consequence": "That treats a MAS CTA like a FAR 9.6 prime/sub team and can place work, rates, and responsibility outside the evaluated arrangement."
			},
			{
				"id": "d",
				"text": "Keep the departed member's name on invoices while the new subcontractor performs.",
				"tier": "disqualifying",
				"consequence": "The records would misstate who performed and which Schedule contractor was responsible for the work."
			}
		],
		"explanation": "GSA lists buyer approval before replacing a party after order receipt as a minimum recommended element for the parties' MAS CTA agreement; the guidance does not present it as a clause command. The team should follow its agreement and coordinate any awarded-order change with the buyer. The CTA lead coordinates but is not automatically the sole prime over the members.",
		"citation": "GSA MAS CTA agreement guidance",
		"sourceUrl": "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/schedule-features/contractor-team-arrangements",
		"tags": ["gsa-mas", "cta", "member-replacement", "privity"]
	}
];

export default questions;
