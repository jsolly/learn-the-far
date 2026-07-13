import type { QuizQuestion } from "../types";

export const SHAPE_QUESTIONS: QuizQuestion[] = [
	{
		"id": "shape-rfi-nonbinding",
		"unitId": "shape",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "Under FAR 15.201, what is the legal status of your company's response to a Request for Information (RFI)?",
		"options": [
			{
				"id": "a",
				"text": "It is not an offer and cannot be accepted by the Government to form a binding contract",
				"correct": true
			},
			{
				"id": "b",
				"text": "It is a binding offer the Government may accept at any time within 30 days",
				"correct": false
			},
			{
				"id": "c",
				"text": "It obligates the Government to include your firm on the resulting solicitation's bidders list",
				"correct": false
			},
			{
				"id": "d",
				"text": "It is a formal proposal that will be evaluated and scored for award",
				"correct": false
			}
		],
		"explanation": "FAR 15.201(e) states RFIs are used when the Government does not presently intend to award a contract but wants planning/market information; responses are not offers and cannot be accepted to form a binding contract. An RFI is market research, not a solicitation.",
		"citation": "FAR 15.201(e)",
		"sourceUrl": "https://www.acquisition.gov/far/15.201",
		"tags": [
			"rfi",
			"market-research",
			"far-15.201",
			"non-binding"
		]
	},
	{
		"id": "shape-rule-of-two-threshold",
		"unitId": "shape",
		"format": "recall",
		"difficulty": "fundamentals",
		"scoring": "single-best",
		"prompt": "Under the 'rule of two' (FAR 19.502-2(b)), when must the contracting officer set aside an acquisition exceeding the simplified acquisition threshold for small business?",
		"options": [
			{
				"id": "a",
				"text": "When there is a reasonable expectation of offers from at least two responsible small businesses and award will be at fair market price",
				"correct": true
			},
			{
				"id": "b",
				"text": "Whenever at least two large businesses have expressed interest in the requirement",
				"correct": false
			},
			{
				"id": "c",
				"text": "Only when the acquisition is below the $10,000 micro-purchase threshold",
				"correct": false
			},
			{
				"id": "d",
				"text": "When at least three small businesses submit capability statements, regardless of price",
				"correct": false
			}
		],
		"explanation": "FAR 19.502-2(b) requires set-aside of acquisitions over the simplified acquisition threshold ($250,000) when the CO reasonably expects offers from at least two responsible small business concerns and award at fair market price. This 'two + fair price' test is the leverage point a small prime targets with its sources-sought response.",
		"citation": "FAR 19.502-2(b)",
		"sourceUrl": "https://www.acquisition.gov/far/19.502-2",
		"tags": [
			"rule-of-two",
			"set-aside",
			"far-19.502-2",
			"small-business"
		]
	},
	{
		"id": "shape-unequal-access-oci",
		"unitId": "shape",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "Your firm holds an advisory support contract that gives your staff access to other offerors' proprietary data and nonpublic Government procurement-sensitive information. A related competitive requirement is coming that you want to bid on.",
		"prompt": "What's the right move to preserve your eligibility?",
		"options": [
			{
				"id": "a",
				"text": "Proactively propose a firewall / nondisclosure mitigation plan and get the contracting officer's agreement before pursuing the new opportunity",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Voluntarily wall off and recuse the exposed staff, forgoing any use of that team on the bid",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Bid and quietly use the nonpublic information to sharpen your proposal",
				"tier": "disqualifying"
			},
			{
				"id": "d",
				"text": "Assume there's no conflict because access to information is only an OCI if you wrote the specification",
				"tier": "disqualifying"
			}
		],
		"explanation": "FAR 9.505-4 (unequal access to information) triggers when a firm gains access to nonpublic information that would give it a competitive advantage. Unlike biased ground rules, this type CAN be mitigated — an approved firewall/NDA plan agreed with the CO is the standard cure; misusing the info or ignoring the conflict is disqualifying.",
		"citation": "FAR 9.505-4",
		"sourceUrl": "https://www.acquisition.gov/far/9.505-4",
		"tags": [
			"oci",
			"unequal-access",
			"far-9.505-4",
			"mitigation"
		]
	},
	{
		"id": "shape-naics-steering",
		"unitId": "shape",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "single-best",
		"situation": "The NAICS code the agency plans to assign carries a size standard under which your firm would be 'other than small.' A different, defensible NAICS code for the same work carries a higher size standard that would keep you small.",
		"prompt": "What is the best way to pursue the more favorable NAICS designation?",
		"options": [
			{
				"id": "a",
				"text": "Advocate the appropriate NAICS during market research/RFI exchanges, and if the CO still designates an incorrect one, file a NAICS appeal with SBA OHA within 10 days of the solicitation",
				"correct": true
			},
			{
				"id": "b",
				"text": "You cannot influence the NAICS code; it is fixed by the product/service and never reviewable",
				"correct": false
			},
			{
				"id": "c",
				"text": "File a NAICS appeal with GAO within 10 days of award",
				"correct": false
			},
			{
				"id": "d",
				"text": "Simply self-certify under whichever NAICS keeps you small when you submit your proposal",
				"correct": false
			}
		],
		"explanation": "The CO designates the NAICS code (FAR 19.303), which sets the size standard. You influence it early through market-research input; a formal challenge is a NAICS appeal to the SBA Office of Hearings and Appeals (OHA), filed within 10 calendar days after the solicitation is issued — not GAO, and not by unilateral self-certification.",
		"citation": "FAR 19.303(c)",
		"sourceUrl": "https://www.acquisition.gov/far/19.303",
		"tags": [
			"naics",
			"size-standard",
			"far-19.303",
			"sba-oha"
		]
	},
	{
		"id": "shape-biased-ground-rules-oci",
		"unitId": "shape",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "An agency program office you've been courting asks your firm to draft the full Statement of Work and specifications for an upcoming competitive RFP 'as a trusted advisor,' free of charge. You fully intend to bid on that RFP once it's released.",
		"prompt": "How do you respond?",
		"options": [
			{
				"id": "a",
				"text": "Decline to author the SOW, but submit a capability statement and an unsolicited white paper recommending requirements and outcomes",
				"tier": "best",
				"consequence": "Shapes the requirement toward your strengths while keeping you eligible to compete — the intended play."
			},
			{
				"id": "b",
				"text": "Draft the complete SOW and specifications exactly as requested to build goodwill",
				"tier": "disqualifying",
				"consequence": "Creates a 'biased ground rules' OCI under FAR 9.505-2; you'd be excluded from competing on the resulting RFP."
			},
			{
				"id": "c",
				"text": "Have a separate corporate subsidiary write the SOW so your bidding entity stays clean",
				"tier": "costly",
				"consequence": "OCI is generally imputed across the corporate family; a firewall rarely cures biased ground rules, so you likely still get excluded."
			},
			{
				"id": "d",
				"text": "Write the SOW and simply disclose it in your proposal, assuming disclosure cures the conflict",
				"tier": "disqualifying",
				"consequence": "Disclosure doesn't cure biased ground rules — the standard remedy is avoidance/exclusion, so you're out."
			}
		],
		"explanation": "FAR 9.505-2 (biased ground rules) generally bars a firm that prepared the specs/SOW from competing, because it could skew the requirement to itself. This OCI type is avoided, not mitigated; disclosure or a firewall won't save the bid. Shape through RFI/white-paper input instead of authoring the actual solicitation.",
		"citation": "FAR 9.505-2",
		"sourceUrl": "https://www.acquisition.gov/far/9.505-2",
		"tags": [
			"oci",
			"biased-ground-rules",
			"far-9.505-2",
			"shaping"
		]
	},
	{
		"id": "shape-sources-sought-set-aside",
		"unitId": "shape",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "confidence-bet",
		"situation": "You're a small business. The agency posts a sources-sought notice for a $1.2M requirement and internal signals suggest it's leaning toward a full-and-open competition. You'd rather see it set aside for small business.",
		"prompt": "What is the single most effective action to steer the acquisition toward a small-business set-aside?",
		"options": [
			{
				"id": "a",
				"text": "Submit a sources-sought response documenting your firm's capability and relevant past performance so the CO can find a reasonable expectation of two-plus capable small businesses",
				"correct": true
			},
			{
				"id": "b",
				"text": "File a size-standard protest with the SBA before any solicitation exists",
				"correct": false
			},
			{
				"id": "c",
				"text": "Submit a binding priced offer in response to the sources-sought notice",
				"correct": false
			},
			{
				"id": "d",
				"text": "Wait for the RFP and then protest the lack of a set-aside to GAO",
				"correct": false
			}
		],
		"explanation": "The rule of two (FAR 19.502-2(b)) turns on the CO's market-research finding that two-plus responsible small businesses will offer at a fair price. A strong, capability-rich sources-sought response is exactly the evidence that supports that finding — the pre-solicitation window is where a set-aside is won. A sources-sought response is not an offer, and protests come far too late (and cost less leverage) than shaping the market research.",
		"citation": "FAR 19.502-2(b)",
		"sourceUrl": "https://www.acquisition.gov/far/19.502-2",
		"tags": [
			"sources-sought",
			"set-aside",
			"rule-of-two",
			"far-19.502-2"
		]
	},
	{
		"id": "shape-draft-rfp-industry-day",
		"unitId": "shape",
		"format": "scenario",
		"difficulty": "advanced",
		"scoring": "reveal-tradeoff",
		"situation": "The agency releases a Draft RFP and schedules an industry day. You want the final RFP's evaluation factors and SOW to reward your firm's genuine discriminators.",
		"prompt": "What's your play?",
		"options": [
			{
				"id": "a",
				"text": "Submit written comments on the Draft RFP recommending evaluation factors and outcomes that map to your real strengths",
				"tier": "best",
				"consequence": "Legitimately shapes the RFP; the final terms are visible to all offerors, so no OCI — and your P-win improves."
			},
			{
				"id": "b",
				"text": "Offer privately to rewrite sections of the SOW for the CO after industry day",
				"tier": "disqualifying",
				"consequence": "Authoring the SOW is a biased-ground-rules OCI (FAR 9.505-2); you're excluded from the competition."
			},
			{
				"id": "c",
				"text": "Ask the CO one-on-one for the incumbent's nonpublic contract terms and pricing",
				"tier": "disqualifying",
				"consequence": "Seeking procurement-sensitive/proprietary data creates an unequal-access OCI and integrity concerns — poisons your bid."
			},
			{
				"id": "d",
				"text": "Stay silent to avoid any OCI risk and just respond to the final RFP",
				"tier": "costly",
				"consequence": "Safe, but forfeits the cheapest window to shape terms; competitors who commented set the ground rules against you."
			}
		],
		"explanation": "FAR 15.201 encourages pre-solicitation exchanges precisely so industry can improve the requirement; commenting on a Draft RFP or at industry day is the sanctioned, OCI-free way to shape terms because the resulting solicitation is public to all. Authoring the SOW or extracting nonpublic data crosses into FAR 9.5 OCI territory.",
		"citation": "FAR 15.201",
		"sourceUrl": "https://www.acquisition.gov/far/15.201",
		"tags": [
			"draft-rfp",
			"industry-day",
			"far-15.201",
			"oci",
			"shaping"
		]
	}
];
