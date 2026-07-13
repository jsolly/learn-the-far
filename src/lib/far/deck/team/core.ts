import type { QuizQuestion } from "../../types";

const questions: QuizQuestion[] = [
	{
		"id": "team-agreement-specificity-enforceability",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "confidence-bet",
		"situation": "Your large prime signed a two-page teaming agreement saying a specialist will receive 'approximately 35%' after award, while price, statement of work, duration, and termination remain subject to later good-faith negotiation. The agreement selects a state's law.",
		"prompt": "What is the sound capture/legal assessment?",
		"options": [
			{
				"id": "a",
				"text": "Have counsel analyze the selected state's contract law and make the promised scope, workshare, pricing mechanics, duration, termination, and subcontract terms definite before relying on the agreement.",
				"correct": true
			},
			{
				"id": "b",
				"text": "FAR 9.603 automatically supplies every missing subcontract term once the Government recognizes the team.",
				"correct": false
			},
			{
				"id": "c",
				"text": "The contracting officer must enforce the 35% allocation because the teammate appeared in the proposal.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The specialist gains privity with the Government at award and can compel its workshare directly.",
				"correct": false
			}
		],
		"explanation": "FAR 9.603 recognizes identified, fully disclosed contractor teams; it does not supply missing private terms or decide enforceability. Whether a teaming agreement or a particular promise is enforceable depends on the governing state law and the agreement's language. For example, applying Virginia law, Cyberlock and Navar treated the commitments before them as unenforceable agreements to agree because material subcontract terms remained for future negotiation; those decisions are representative authority, not a nationwide rule. Counsel should assess the selected law before proposal reliance.",
		"citation": "FAR 9.603; Cyberlock Consulting, Inc. v. Information Experts, Inc., 939 F. Supp. 2d 572 (E.D. Va. 2013), aff'd, 549 F. App'x 211 (4th Cir. 2014); Navar, Inc. v. Federal Business Council, 291 Va. 338, 784 S.E.2d 296 (2016)",
		"sourceUrl": "https://www.ca4.uscourts.gov/Opinions/Unpublished/131599.U.pdf",
		"tags": ["teaming-agreement", "enforceability", "specificity", "workshare"]
	},
	{
		"id": "team-nda-proprietary-exchange",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "reveal-tradeoff",
		"situation": "A prospective teammate asks for your solution architecture, labor build, and customer strategy before selection. The parties have only exchanged a generic one-line confidentiality email.",
		"prompt": "How should your large-prime capture lead proceed?",
		"options": [
			{
				"id": "a",
				"text": "Execute a purpose-limited NDA, mark the material, restrict access to need-to-know personnel, control approved sub-tier sharing, and define return or destruction before disclosure.",
				"tier": "best",
				"consequence": "The exchange is usable for capture while ownership, permitted use, access, and disposition are documented."
			},
			{
				"id": "b",
				"text": "Share only a high-level capability summary now and defer sensitive details until an NDA is signed.",
				"tier": "defensible",
				"consequence": "You preserve confidentiality but may slow solution integration until the agreement is complete."
			},
			{
				"id": "c",
				"text": "Send the full package because all information exchanged for a federal pursuit is automatically protected by the FAR.",
				"tier": "disqualifying",
				"consequence": "The FAR does not create a blanket private NDA between teammates; you may lose practical control over valuable information."
			},
			{
				"id": "d",
				"text": "Send the files unmarked and rely on a footer added to the final joint proposal.",
				"tier": "costly",
				"consequence": "A later proposal marking does not repair weak controls over material already disclosed to another company."
			}
		],
		"explanation": "An ordinary teammate exchange is not automatically protected by the FAR. Under 18 U.S.C. § 1839(3), federal trade-secret status requires the owner to take reasonable measures to keep qualifying information secret. A purpose-limited NDA, marking, need-to-know access, controlled sub-tier disclosure, and return or destruction terms are practical secrecy measures; they do not by themselves guarantee that every item is a trade secret.",
		"citation": "18 U.S.C. § 1839(3)",
		"sourceUrl": "https://uscode.house.gov/view.xhtml?edition=prelim&num=0&req=granuleid%3AUSC-prelim-title18-section1839",
		"tags": ["nda", "proprietary-data", "confidentiality", "information-handling"]
	},
	{
		"id": "team-exclusivity-workshare-negotiation",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "A niche teammate wants your large prime to grant broad exclusivity across an entire civilian agency in exchange for an undefined workshare on one pursuit.",
		"prompt": "What negotiating position best protects the pursuit and your pipeline?",
		"options": [
			{
				"id": "a",
				"text": "Limit reciprocal exclusivity to the named acquisition and a defined period, state a specific scope or allocation method, and include carveouts, release triggers, and termination consequences.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Offer narrow pursuit-only exclusivity now, conditioned on completing a detailed workshare exhibit before proposal submission.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Grant agency-wide exclusivity but leave workshare entirely to post-award negotiation.",
				"tier": "costly"
			},
			{
				"id": "d",
				"text": "Promise the same exclusive scope to multiple teammates and decide which promise to honor after award.",
				"tier": "disqualifying"
			}
		],
		"explanation": "Neither FAR 9.603 nor 9.604 mandates exclusivity or a particular workshare. Narrow, reciprocal, acquisition-specific terms with definite release events are prudent capture practice, not FAR requirements. Enforceability and remedies depend on the governing state law, and competitor exclusivity can have fact-specific antitrust effects; DOJ notes that exclusive contracts that reduce competition may violate the Sherman Act.",
		"citation": "FAR 9.603-9.604; DOJ, The Antitrust Laws",
		"sourceUrl": "https://www.justice.gov/atr/antitrust-laws-and-you",
		"tags": ["exclusivity", "workshare", "negotiation", "teaming-agreement"]
	},
	{
		"id": "team-large-prime-setaside-paths",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "Your large civilian prime wants meaningful work on a total small-business set-aside. The proposal window opens soon, and your company has an SBA-approved mentor-protege agreement with one qualified small protege but no pursuit-specific JV yet.",
		"prompt": "Which valid path is usually fastest and lowest in execution risk for this near-term pursuit?",
		"options": [
			{
				"id": "a",
				"text": "Pursue a subcontract under a qualified small prime now, with workshare modeled to the applicable limitation on subcontracting.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "If timing permits, form a compliant mentor-protege JV in which the small protege is managing venturer, and submit the offer in the separately identified JV's own name after completing its written agreement, SAM registration, UEI, and CAGE code.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Create an ordinary JV with the small firm and let your large company control management because it contributes more resources.",
				"tier": "disqualifying"
			},
			{
				"id": "d",
				"text": "Bid in the large company's name and use the small teammate's status to represent the offeror as small.",
				"tier": "disqualifying"
			}
		],
		"explanation": "Subcontracting to an eligible small prime is generally the fastest, lowest-execution-risk path when the proposal window is short. A mentor-protege JV is also valid when the protege is small for the acquisition and the team satisfies 13 CFR 125.8 and 125.9, but SBA guidance requires the JV to be separately identified in its own name with its own UEI and CAGE code in SAM. An approved mentor-protege relationship alone is not a pursuit-ready JV.",
		"citation": "13 CFR 125.8-125.9; SBA Joint Ventures guidance",
		"sourceUrl": "https://www.sba.gov/federal-contracting/contracting-assistance-programs/joint-ventures",
		"tags": ["mentor-protege", "joint-venture", "set-aside", "large-prime"]
	},
	{
		"id": "team-ostensible-subcontractor-warning",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "reveal-tradeoff",
		"situation": "On a services contract above the simplified acquisition threshold that is totally set aside for small business, the proposed small prime would pay your large incumbent 55% of the amount paid by the Government for contract performance. No similarly situated subcontractor will perform work. Your company would also provide nearly all key managers, the solution, transition knowledge, and technical staff.",
		"prompt": "From your large-subcontractor capture seat, what is the central eligibility risk?",
		"options": [
			{
				"id": "a",
				"text": "The plan exceeds the services limitation on payments to non-similarly-situated firms, so the regulatory safe harbor is unavailable; the management, solution, and staffing facts also support an ostensible-subcontractor risk.",
				"tier": "best",
				"consequence": "The concerns may be treated as joint venturers and affiliated for size, so capture should first bring the payment model into compliance and then reassess the relationship facts."
			},
			{
				"id": "b",
				"text": "There is no concern if your subcontract price remains below half of the total.",
				"tier": "disqualifying",
				"consequence": "Keeping one subcontract below 50% does not by itself prove full compliance with 13 CFR 125.6, which counts payments to all non-similarly-situated subcontractors; if the prime demonstrates full compliance, Bowhead's bright-line safe harbor applies."
			},
			{
				"id": "c",
				"text": "The only issue is whether your company has a current subcontracting plan.",
				"tier": "costly",
				"consequence": "A subcontracting plan does not address whether the small prime is actually dependent on a large subcontractor."
			},
			{
				"id": "d",
				"text": "The arrangement is protected because incumbent knowledge always qualifies as ordinary vendor support.",
				"tier": "disqualifying",
				"consequence": "Incumbent dependence is a fact considered in the totality; labels do not insulate a team that leaves the small prime unable to perform independently."
			}
		],
		"explanation": "For services, specialty-trade construction, and supplies, 13 CFR 121.103(h)(3)(iii) directs SBA to find no ostensible subcontractor when the small prime demonstrates that it, together with qualifying small subcontractors, will meet 13 CFR 125.6. Bowhead, SIZ-6352, applied that rule as a bright-line safe harbor. Here, paying 55% to the large, non-similarly-situated subcontractor fails the services limit, so the safe harbor is unavailable and SBA can assess primary-and-vital performance or unusual reliance under paragraph (i). General construction is different: paragraph (iv) defines its primary and vital requirements as management, supervision, and oversight.",
		"citation": "13 CFR 121.103(h)(3)(i), (iii)-(iv); 13 CFR 125.6(a)(1); Bowhead, SBA No. SIZ-6352 (2025)",
		"sourceUrl": "https://www.ecfr.gov/current/title-13/section-121.103",
		"tags": ["ostensible-subcontractor", "affiliation", "set-aside", "large-sub"]
	},
	{
		"id": "team-subcontracting-plan-goals",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "single-best",
		"situation": "Your large prime is negotiating an individual small-business subcontracting plan for an unrestricted civilian contract. The plan requirement is already established; the team is deciding what the plan actually commits the company to do.",
		"prompt": "Which statement is accurate?",
		"options": [
			{
				"id": "a",
				"text": "The plan includes separate goals for the listed small-business categories, methods and efforts supporting those goals, administration and records, and required reporting; failure to make a good-faith effort can be a material breach.",
				"correct": true
			},
			{
				"id": "b",
				"text": "The plan is an aspirational marketing attachment with no reporting or performance consequences after award.",
				"correct": false
			},
			{
				"id": "c",
				"text": "One combined 'small business' percentage replaces all category-specific goals and supporting methods.",
				"correct": false
			},
			{
				"id": "d",
				"text": "The prime may omit firms used to prepare its proposal from the awarded scope without explanation because goals are never tied to identified sources.",
				"correct": false
			}
		],
		"explanation": "FAR 19.704 requires category goals, planned dollars, sourcing methods, equitable-opportunity efforts, an administrator, records, and eSRS reporting. It also requires good-faith treatment of small businesses used in preparing the offer and an explanation when promised use does not occur. FAR 19.702 makes failure to comply in good faith a material breach with possible liquidated damages.",
		"citation": "FAR 19.704(a); FAR 19.702(c)",
		"sourceUrl": "https://www.acquisition.gov/far/19.704",
		"tags": ["subcontracting-plan", "goals", "good-faith", "esrs"]
	},
	{
		"id": "team-teammate-past-performance",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "confidence-bet",
		"situation": "Your large prime lacks one highly relevant reference. A proposed major subcontractor has excellent performance on nearly identical civilian work, and capture wants to present it as if it automatically becomes the prime's own record.",
		"prompt": "How should the proposal team treat that past performance?",
		"options": [
			{
				"id": "a",
				"text": "Follow the solicitation's stated evaluation method, tie the reference to work the subcontractor will actually perform, and explain its relevance; the agency may consider major or critical subcontractor past performance but does not automatically impute it to the prime.",
				"correct": true
			},
			{
				"id": "b",
				"text": "List it as the prime's contract because all teammate references merge under FAR 9.6.",
				"correct": false
			},
			{
				"id": "c",
				"text": "Exclude it because agencies are prohibited from considering any subcontractor performance.",
				"correct": false
			},
			{
				"id": "d",
				"text": "Use it without assigning meaningful scope; relevance depends only on the teammate's logo and rating.",
				"correct": false
			}
		],
		"explanation": "FAR 15.305(a)(2)(iii) says an evaluation should consider subcontractor performance when the subcontractor will perform major or critical aspects and the information is relevant. The solicitation controls what may be submitted and how it will be credited. Workshare and reference relevance should tell one credible story.",
		"citation": "FAR 15.305(a)(2)(ii)-(iii)",
		"sourceUrl": "https://www.acquisition.gov/far/15.305",
		"tags": ["past-performance", "major-subcontractor", "relevance", "proposal"]
	},
	{
		"id": "team-sub-key-personnel-commitment",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "reveal-tradeoff",
		"situation": "Section L requires resumes and signed availability commitments for named key personnel. Two critical candidates are employees of your proposed subcontractor, which will not sign anything beyond the teaming agreement.",
		"prompt": "What should your large-prime proposal manager do?",
		"options": [
			{
				"id": "a",
				"text": "Obtain the solicitation-required commitments from the subcontractor and named people, confirm availability through the expected start, and align the subcontract obligation before submission.",
				"tier": "best",
				"consequence": "The proposal supplies the required evidence and makes the teammate responsible for preserving the staffing commitment."
			},
			{
				"id": "b",
				"text": "Replace them with available qualified candidates whose commitments can be documented before the deadline.",
				"tier": "defensible",
				"consequence": "You may lose some resume strength, but avoid submitting an unsupported mandatory commitment."
			},
			{
				"id": "c",
				"text": "Submit the resumes without commitments because subcontractor personnel are exempt from Section L.",
				"tier": "disqualifying",
				"consequence": "The proposal omits required evidence; the agency evaluates the offer against the same stated instructions and factors."
			},
			{
				"id": "d",
				"text": "Have the prime sign for the individuals without asking them or their employer.",
				"tier": "costly",
				"consequence": "The representation is unsupported and creates staffing, evaluation, and potential misrepresentation risk."
			}
		],
		"explanation": "There is no general exemption for subcontractor key personnel. In IT Objects, GAO sustained a protest because the awardee omitted a solicitation-required commitment letter for an individual supplied through a teammate; a teaming agreement containing no commitment was not a substitute. Follow the solicitation exactly, and separately bind the teammate to availability, notice, and replacement duties.",
		"citation": "IT Objects, LLC, B-418012, B-418012.2 (Jan. 2, 2020); FAR 15.305(a)",
		"sourceUrl": "https://www.gao.gov/products/b-418012%2Cb-418012.2",
		"tags": ["key-personnel", "commitment-letter", "subcontractor", "proposal-compliance"]
	},
	{
		"id": "team-teammate-oci-affiliate-diligence",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "tiered",
		"situation": "Before locking your large-prime team, you learn that the teammate belongs to a corporate family with several advisory contracts at the target civilian agency. The teammate says only its own legal entity matters.",
		"prompt": "What diligence should capture perform?",
		"options": [
			{
				"id": "a",
				"text": "Map relevant contracts, scopes, employees, information access, firewalls, and affiliates; assess the facts under all OCI types and raise significant potential conflicts and mitigation with the contracting officer.",
				"tier": "best"
			},
			{
				"id": "b",
				"text": "Temporarily hold the teammate outside proposal access while legal completes a documented conflict review.",
				"tier": "defensible"
			},
			{
				"id": "c",
				"text": "Accept the legal-entity assurance without checking shared staff, systems, management, or nonpublic information.",
				"tier": "costly"
			},
			{
				"id": "d",
				"text": "Assume every affiliate relationship is automatically disqualifying and conceal the teammate from the proposal.",
				"tier": "disqualifying"
			}
		],
		"explanation": "OCI analysis is fact-specific. FAR 9.505 supplies general rules, while FAR 9.504 requires the contracting officer to identify and evaluate potential OCIs as early as possible and avoid, neutralize, or mitigate significant potential conflicts before award. Corporate affiliation is neither an automatic safe harbor nor automatic exclusion; shared personnel, information, management, and contract roles must be surfaced so the contracting officer can make the determination.",
		"citation": "FAR 9.504-9.505",
		"sourceUrl": "https://www.acquisition.gov/far/9.504",
		"tags": ["oci", "affiliates", "due-diligence", "teammate-screening"]
	},
	{
		"id": "team-flowdowns-consent-cpsr-basics",
		"unitId": "team",
		"format": "scenario",
		"difficulty": "core",
		"scoring": "single-best",
		"situation": "Your contracts lead is drafting a major commercial-services subcontract under a civilian prime contract and proposes copying every prime clause into it because 'our approved purchasing system covers consent anyway.'",
		"prompt": "Which correction is sound?",
		"options": [
			{
				"id": "a",
				"text": "Build a clause-by-clause flowdown matrix for the subcontract type and tier; treat consent to subcontract and purchasing-system approval as separate controls, and check any consent items stated in FAR 52.244-2.",
				"correct": true
			},
			{
				"id": "b",
				"text": "Flow every prime clause unchanged, because all FAR clauses automatically apply at every subcontract tier.",
				"correct": false
			},
			{
				"id": "c",
				"text": "Omit all clauses from a commercial-services subcontract because commercial work is outside the FAR.",
				"correct": false
			},
			{
				"id": "d",
				"text": "Assume a successful CPSR means the contracting officer can never require consent for a named or sensitive subcontract.",
				"correct": false
			}
		],
		"explanation": "Flowdowns depend on each clause's text, subcontract type, subject, value trigger, and tier; FAR 44.402 limits clauses imposed on commercial-product and commercial-service subcontracts. An approved purchasing system changes the normal consent framework, but FAR 44.201-1 and 52.244-2 preserve consent for subcontracts specifically identified by the contracting officer.",
		"citation": "FAR 44.201-1; FAR 44.402",
		"sourceUrl": "https://www.acquisition.gov/far/44.402",
		"tags": ["flowdowns", "consent-to-subcontract", "cpsr", "commercial-services"]
	}
];

export default questions;
