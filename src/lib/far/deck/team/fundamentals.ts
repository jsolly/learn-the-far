import type { QuizQuestion } from "../../types";

const questions: QuizQuestion[] = [
	{
		"id": "team-far-9601-two-forms",
		"unitId": "team",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "From a large civilian contractor's capture seat, which two structures does FAR 9.601 call contractor team arrangements?",
		"options": [
			{
				"id": "a",
				"text": "Companies form a partnership or joint venture to act as the potential prime, or a potential prime teams with companies that will act as its subcontractors for a specified acquisition.",
				"correct": true
			},
			{
				"id": "b",
				"text": "A prime forms either a GSA Schedule CTA or an SBA mentor-protege agreement.",
				"correct": false
			},
			{
				"id": "c",
				"text": "Two agencies combine requirements, or two contracting officers share source-selection authority.",
				"correct": false
			},
			{
				"id": "d",
				"text": "A prime either hires contingent employees or buys commercial products from a distributor.",
				"correct": false
			}
		],
		"explanation": "FAR 9.601 covers two forms: a partnership or joint venture acting as the potential prime, and a potential prime with proposed subcontractors for a specified contract or acquisition program. An SBA mentor-protege relationship may enable a qualifying JV, but it is not itself one of the FAR 9.601 forms.",
		"citation": "FAR 9.601",
		"sourceUrl": "https://www.acquisition.gov/far/9.601",
		"tags": ["far-9-6", "joint-venture", "prime-sub", "team-structure"]
	},
	{
		"id": "team-prime-sub-privity-accountability",
		"unitId": "team",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "Your large company will prime and a specialist will subcontract. Who is contractually accountable to the civilian agency for the team's performance?",
		"options": [
			{
				"id": "a",
				"text": "Your company remains fully responsible to the Government; the subcontractor normally has contractual privity only with your company.",
				"correct": true
			},
			{
				"id": "b",
				"text": "The agency shares responsibility equally with the prime because it evaluated the subcontractor.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The subcontractor becomes directly responsible to the agency for its workshare once named in the proposal.",
				"correct": false
			},
			{
				"id": "d",
				"text": "Responsibility shifts to whichever team member performs the largest percentage of labor.",
				"correct": false
			}
		],
		"explanation": "FAR 9.604(e) preserves the Government's right to hold the prime fully responsible regardless of its team arrangement. Naming or evaluating a subcontractor does not create a Government-subcontractor contract; the prime manages that relationship through its subcontract.",
		"citation": "FAR 9.604(e)",
		"sourceUrl": "https://www.acquisition.gov/far/9.604",
		"tags": ["prime-sub", "privity", "accountability", "far-9-6"]
	},
	{
		"id": "team-gsa-mas-cta-privity",
		"unitId": "team",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "How is a GSA Multiple Award Schedule Contractor Team Arrangement different from your usual FAR 9.6 prime/sub team?",
		"options": [
			{
				"id": "a",
				"text": "Each MAS CTA member holds its own Schedule contract and acts as a prime for the portion it performs; the CTA lead does not turn the other members into its subcontractors.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Only the CTA lead needs a Schedule contract, and every other member performs without privity as its subcontractor.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The CTA automatically creates a joint venture that alone holds the Schedule order.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The CTA is an SBA-approved mentor-protege relationship available only on set-asides.",
				"correct": false
			}
		],
		"explanation": "GSA states that FAR subpart 9.6 does not apply to MAS CTA agreements. Every CTA participant must be a MAS contractor, remains an independent contractor, and operates as a prime for its own portion. A lead may coordinate invoicing and administration without becoming the sole prime over subcontractor members.",
		"citation": "GSA MAS CTA guidance",
		"sourceUrl": "https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule/schedule-features/contractor-team-arrangements",
		"tags": ["gsa-mas", "cta", "privity", "schedule"]
	},
	{
		"id": "team-small-business-status-map",
		"unitId": "team",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "Your supplier-diversity lead labels every qualifying teammate simply 'small.' Which status map is accurate for capture and subcontracting-plan decisions?",
		"options": [
			{
				"id": "a",
				"text": "Size is determined under the subcontract's applicable NAICS standard; plans use separate goals for small business, VOSB, SDVOSB, HUBZone, SDB, and WOSB, while 8(a) and EDWOSB are not separate FAR 19.704 plan-goal categories.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Any firm that is small under one NAICS code automatically holds every small-business program status.",
				"correct": false
			},
			{
				"id": "c",
				"text": "SDB and 8(a) are interchangeable labels, and neither depends on being small for the acquisition.",
				"correct": false
			},
			{
				"id": "d",
				"text": "WOSB, HUBZone, and SDVOSB are evaluation preferences for large businesses rather than statuses of small concerns.",
				"correct": false
			}
		],
		"explanation": "Size and socioeconomic or program status are separate checks. FAR 19.703 governs representations for subcontracting-plan credit, and FAR 19.704(a) lists the plan-goal categories. An 8(a) participant may also qualify for small-business and SDB credit, and an EDWOSB may qualify for WOSB credit, but 8(a) and EDWOSB are not additional standalone plan-goal columns. Capture must verify the representation relevant to the subcontract and the opportunity.",
		"citation": "FAR 19.703; FAR 19.704(a)(1)",
		"sourceUrl": "https://www.acquisition.gov/far/19.703",
		"tags": ["small-business", "socioeconomic-status", "naics", "supplier-diversity"]
	},
	{
		"id": "team-large-sub-los-sse-basics",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"situation": "A small-business prime asks your large company to perform most of the services on a total small-business set-aside. FAR 52.219-14 applies.",
		"prompt": "What must your capture team recognize before accepting the proposed workshare?",
		"options": [
			{
				"id": "a",
				"text": "Your large company is not a similarly situated entity, so amounts paid to it count against the prime's 50% cap on payments to non-similarly-situated subcontractors.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Any subcontractor named in the proposal is similarly situated, regardless of size or program status.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The clause limits only second-tier subcontracting, so your first-tier workshare is unrestricted.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The clause requires the small prime itself to perform exactly 50%, even when qualified similarly situated entities perform part of the work.",
				"correct": false
			}
		],
		"explanation": "For services, the clause limits what the small prime may pay to firms that are not similarly situated. A qualifying first-tier similarly situated entity can count on the prime's side of the calculation, but a large subcontractor cannot. The large-prime capture team should model its proposed share against the clause before promising scope.",
		"citation": "FAR 52.219-14(b), (e)(1)",
		"sourceUrl": "https://www.acquisition.gov/far/52.219-14",
		"tags": ["limitations-on-subcontracting", "similarly-situated", "large-sub", "set-aside"]
	}
];

export default questions;
