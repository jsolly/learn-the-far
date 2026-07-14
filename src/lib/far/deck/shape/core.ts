import type { QuizQuestion } from "../../types";

export const SHAPE_CORE: QuizQuestion[] = [
	{
		id: "shape-sources-sought-market-evidence",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"You lead capture for a large prime on a civilian recompete. A sources-sought notice asks about end-to-end capability, transition risk, and subcontracting. Several capable small businesses are active in the market, so the eventual competition strategy is uncertain.",
		prompt: "How should your team use the response to shape strategy?",
		options: [
			{
				id: "a",
				text: "Submit specific, supportable evidence on scope integration, transition, capacity, commercial practices, and your likely team, then plan for either prime or partner positioning",
				tier: "best",
				consequence:
					"You add credible facts to the market-research record without pretending to control the agency's decision, and your capture plan remains viable across acquisition strategies."
			},
			{
				id: "b",
				text: "Describe only company size and insist that the agency must run an unrestricted competition",
				tier: "costly",
				consequence:
					"Labels and advocacy provide little evidence about capable sources or reasonable requirement design, so the response has limited shaping value."
			},
			{
				id: "c",
				text: "Understate small-business capabilities to make the market appear unable to perform",
				tier: "disqualifying",
				consequence:
					"A misleading response creates integrity and relationship risk; market research should be informed by accurate, supportable facts."
			},
			{
				id: "d",
				text: "Skip the notice because the contracting officer alone decides the acquisition strategy",
				tier: "defensible",
				consequence:
					"The contracting officer does decide, but silence forfeits your opportunity to supply evidence the agency uses to identify sources and select an acquisition approach."
			}
		],
		explanation:
			"FAR 10.001 requires agencies to use market research to identify capable sources and determine whether small-business programs should be used. A large prime should supply honest evidence relevant to those judgments and adapt its strategy; the response does not dictate the final set-aside or competition decision. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation: "FAR 10.001(a)(3) (FAC 2026-01 baseline)",
		sourceUrl: "https://www.acquisition.gov/far/10.001",
		tags: ["sources-sought", "market-research", "acquisition-strategy", "large-prime"]
	},
	{
		id: "shape-draft-rfp-comments",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are the capture manager reviewing a draft RFP for a civilian data-modernization program. The draft rewards staffing volume but barely measures migration quality, service continuity, or open interfaces.",
		prompt: "What is the best comment strategy?",
		options: [
			{
				id: "a",
				text: "Submit traceable comments that identify mission risk, propose measurable outcome-focused language, and explain how each change improves competition or evaluation",
				tier: "best"
			},
			{
				id: "b",
				text: "Recommend outcome measures but provide little rationale or mapping to the draft sections",
				tier: "defensible"
			},
			{
				id: "c",
				text: "Ask the agency to copy your proprietary solution architecture into the final requirements",
				tier: "costly"
			},
			{
				id: "d",
				text: "Offer to privately rewrite the final PWS so it precisely matches your delivery model",
				tier: "disqualifying"
			}
		],
		explanation:
			"Draft RFPs are an authorized early-exchange technique under FAR 15.201(c). Effective comments are precise, mission-based, and usable by the acquisition team. They improve requirements or evaluation without asking the Government to adopt vendor-specific lock-in or surrender authorship of the solicitation. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(c)(6) (FAC 2026-01 baseline); RFO 15.101(b) (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["draft-rfp", "comments", "evaluation-criteria", "outcomes"]
	},
	{
		id: "shape-industry-day-leveling",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"At an industry day, your technical director wants to ask a detailed question about an unstated data-retention constraint. The answer would be necessary for every bidder to design and price a compliant solution, but your reason for asking reveals part of your confidential approach.",
		prompt: "How should the team handle the question?",
		options: [
			{
				id: "a",
				text: "Use the announced contracting-officer channel, give only the context necessary, and specifically identify the confidential business strategy and its basis for protection under FAR 3.104 or subpart 24.2; do not assume a marking guarantees protection",
				tier: "best",
				consequence:
					"The agency can level the proposal-necessary constraint while withholding request context only if it would reveal confidential business strategy that is also protected under FAR 3.104 or subpart 24.2; the label alone does not establish protection."
			},
			{
				id: "b",
				text: "Ask the program manager privately and request that both the constraint and your question remain secret",
				tier: "disqualifying",
				consequence:
					"Keeping proposal-necessary acquisition information from other potential offerors would create an unfair advantage and cannot be promised."
			},
			{
				id: "c",
				text: "Ask the question in the plenary session and disclose your complete solution logic to explain it",
				tier: "costly",
				consequence:
					"The field receives the necessary answer, but you unnecessarily expose protectable business strategy."
			},
			{
				id: "d",
				text: "Remain silent and price a large contingency for the unknown constraint",
				tier: "defensible",
				consequence:
					"This avoids disclosure but weakens price and solution quality when FAR provides a channel for the agency to answer and level material information."
			}
		],
		explanation:
			"Under FAR 15.201(f), proposal-necessary acquisition information disclosed to a potential offeror must be made public as soon as practicable. Request context should be withheld only when disclosure would reveal confidential business strategy and the information is also protected under FAR 3.104 or subpart 24.2. Use the announced contracting-officer channel, provide only necessary context, and identify the protection basis precisely; marking alone does not guarantee protection. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.201(f), FAR 3.104, FAR subpart 24.2 (FAC 2026-01 baseline); RFO 15.101(a), (d) (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["industry-day", "information-leveling", "confidential-strategy", "fairness"]
	},
	{
		id: "shape-unsolicited-proposal-fit",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"Your growth team wants to label a standard cloud-services brochure an 'unsolicited proposal' and send it for a civilian requirement already described in a published presolicitation notice.",
		prompt: "What is the correct advice?",
		options: [
			{
				id: "a",
				text: "Do not submit it as an unsolicited proposal; use the agency's market-research channel because routine marketing and an advance offer for a published requirement do not qualify",
				correct: true
			},
			{
				id: "b",
				text: "Any contractor-created document qualifies if the Government did not request that exact document",
				correct: false
			},
			{
				id: "c",
				text: "It qualifies only if the brochure includes binding firm-fixed pricing",
				correct: false
			},
			{
				id: "d",
				text: "Calling the brochure innovative is enough even when it offers a routine commercial service",
				correct: false
			}
		],
		explanation:
			"FAR 15.603 requires a valid unsolicited proposal to be innovative and unique, independently originated, prepared without Government direction, sufficiently detailed, and not an advance proposal for a known competitively acquirable or previously published requirement. Advertising and routine commercial offers are excluded. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation:
			"FAR 15.603 (FAC 2026-01 baseline); RFO 15.503-1 (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/15.603",
		tags: ["unsolicited-proposal", "innovation", "published-requirement", "marketing"]
	},
	{
		id: "shape-brand-name-or-equal",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"You are a product strategist at a large prime. A civilian customer likes your platform and asks what to put in a future 'brand name or equal' description without excluding legitimate equivalents.",
		prompt: "What input should you provide?",
		options: [
			{
				id: "a",
				text: "Mission-linked, measurable physical, functional, or performance characteristics that any equal product can demonstrate",
				correct: true
			},
			{
				id: "b",
				text: "Your full model number alone, with no explanation of what an equal must satisfy",
				correct: false
			},
			{
				id: "c",
				text: "Proprietary implementation details unrelated to the agency's minimum need",
				correct: false
			},
			{
				id: "d",
				text: "A statement that only your product is acceptable because the program office prefers it",
				correct: false
			}
		],
		explanation:
			"FAR 11.104 says brand-name-or-equal descriptions must state the salient physical, functional, or performance characteristics an equal item must meet. Performance specifications are preferred where suitable. Industry can help explain measurable mission needs without turning preference into vendor lock-in. For an agency adopting the RFO Part 11 model deviation, RFO Part 11 removes the baseline 11.104 rule and RFO Part 52 reserves 52.211-6.",
		citation:
			"FAR 11.104 and 52.211-6 (FAC 2026-01 baseline); RFO Part 11 and RFO 52.211-6 [Reserved] (adopting agencies)",
		sourceUrl: "https://www.acquisition.gov/far/11.104",
		tags: ["brand-name-or-equal", "salient-characteristics", "competition", "product"]
	},
	{
		id: "shape-budget-cycle-timing",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"You are a civilian portfolio lead. The agency expects a major modernization need in a future fiscal year, but requirements, funding assumptions, and the acquisition team are still forming.",
		prompt: "When and how should capture engagement begin?",
		options: [
			{
				id: "a",
				text: "Engage early around mission outcomes, affordability, market evidence, and acquisition lead time while the agency integrates need, fiscal, technical, legal, and contracting inputs",
				tier: "best"
			},
			{
				id: "b",
				text: "Wait for appropriations and a final RFP, because acquisition planning should not begin before the award fiscal year",
				tier: "costly"
			},
			{
				id: "c",
				text: "Press the program office to promise funds and award before fiscal and contracting personnel participate",
				tier: "disqualifying"
			},
			{
				id: "d",
				text: "Share a rough implementation roadmap now, but defer detailed evidence until the acquisition team has clearer questions",
				tier: "defensible"
			}
		],
		explanation:
			"FAR 7.104(a) says acquisition planning should begin when the need is identified, preferably well before the fiscal year of award, using a cross-functional team. Capture is strongest before choices harden, but industry input should inform—not purport to control—agency budgeting or approvals. This teaches codified FAR FAC 2026-01; an adopting agency's RFO deviation may renumber or supersede it.",
		citation: "FAR 7.104(a) (FAC 2026-01 baseline)",
		sourceUrl: "https://www.acquisition.gov/far/7.104",
		tags: ["budget-cycle", "acquisition-planning", "timing", "civilian"]
	},
	{
		id: "shape-biased-ground-rules-oci",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"Your large prime supports a civilian program under an advisory contract. The customer asks the advisory team to draft the complete PWS for a competitive follow-on that your delivery business wants to pursue.",
		prompt: "What is the best corporate response?",
		options: [
			{
				id: "a",
				text: "Escalate the potential OCI, decline follow-on authorship unless eligibility is resolved, and offer bounded market or performance input under Government control",
				tier: "best",
				consequence:
					"You avoid creating biased ground rules while preserving a lawful channel for factual industry input and an early contracting-officer OCI decision."
			},
			{
				id: "b",
				text: "Draft the PWS and disclose that fact only after your proposal is selected",
				tier: "disqualifying",
				consequence:
					"Late disclosure does not undo the concern that your company shaped the work statement to favor itself."
			},
			{
				id: "c",
				text: "Have another internal division draft the PWS without telling the contracting officer",
				tier: "disqualifying",
				consequence:
					"Moving work inside the same company does not eliminate the organizational interest or give the contracting officer a chance to resolve it."
			},
			{
				id: "d",
				text: "Withdraw from the follow-on immediately without asking whether an exception or other resolution applies",
				tier: "defensible",
				consequence:
					"Avoidance protects the procurement, but it may surrender an opportunity before the contracting officer analyzes the actual facts and FAR exceptions."
			}
		],
		explanation:
			"Under FAR 9.505-2(b), a contractor that prepares or assists with a competitive work statement—or provides material leading directly, predictably, and without delay to it—may not supply the system, its major components, or the services. The restriction does not apply when the contractor is the sole source, participated in development and design work, or was one of multiple contractors preparing the work statement; development-and-design contractors are not otherwise prohibited.",
		citation: "FAR 9.505-2(b)",
		sourceUrl: "https://www.acquisition.gov/far/9.505-2",
		tags: ["oci", "biased-ground-rules", "pws", "avoidance"]
	},
	{
		id: "shape-unequal-access-oci",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"An advisory-services team inside your company legitimately receives competitors' proprietary roadmaps to support a civilian agency. A separate capture team wants to bid a related competition.",
		prompt: "What should the company do first?",
		options: [
			{
				id: "a",
				text: "Disclose through counsel, propose documented controls and separation, and ensure properly executed use-and-disclosure agreements with the proprietary owners are provided to the contracting officer",
				tier: "best"
			},
			{
				id: "b",
				text: "Quarantine the advisory staff and data immediately while counsel develops a mitigation proposal",
				tier: "defensible"
			},
			{
				id: "c",
				text: "Let capture interview advisory staff as long as no competitor documents are copied",
				tier: "disqualifying"
			},
			{
				id: "d",
				text: "Assume employee nondisclosure agreements automatically bind the agency to accept your mitigation",
				tier: "costly"
			}
		],
		explanation:
			"FAR 9.505-4(b) requires an advisory-and-assistance contractor with access to other companies' proprietary information to agree with those owners to prevent unauthorized use or disclosure while the information remains proprietary and to use it only for the furnished purpose. The contracting officer obtains copies and ensures the agreements are properly executed; additional controls may mitigate unequal access but are not self-approving.",
		citation: "FAR 9.504; FAR 9.505-4(b)",
		sourceUrl: "https://www.acquisition.gov/far/9.505-4",
		tags: ["oci", "unequal-access", "firewall", "proprietary-information"]
	},
	{
		id: "shape-impaired-objectivity-oci",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"Your advisory business is asked to support a civilian source selection by evaluating offers for products used across a benefits system. One offer is from another division of your company.",
		prompt: "Which OCI concern is most directly presented?",
		options: [
			{
				id: "a",
				text: "Impaired objectivity, because the company could be judging its own product and may need safeguards or removal of that evaluation role",
				correct: true
			},
			{
				id: "b",
				text: "Biased ground rules, solely because your company employs more than one division",
				correct: false
			},
			{
				id: "c",
				text: "Unequal access, even if the evaluator receives no competitor or source-selection information",
				correct: false
			},
			{
				id: "d",
				text: "No OCI, because organizational conflicts apply only when a company writes an RFP",
				correct: false
			}
		],
		explanation:
			"FAR 9.505-3 prohibits awarding evaluation work that requires a contractor to evaluate its own or a competitor's offers without proper safeguards for objectivity. This is the impaired-objectivity archetype, distinct from writing ground rules or gaining nonpublic competitive information.",
		citation: "FAR 9.505-3",
		sourceUrl: "https://www.acquisition.gov/far/9.505-3",
		tags: ["oci", "impaired-objectivity", "evaluation", "safeguards"]
	},
	{
		id: "shape-leaked-competitor-information",
		unitId: "shape",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"Before award, a capture-team mailbox receives an anonymous attachment labeled with a competitor's name. A reviewer opens the first page and sees proposal pricing and evaluation notes.",
		prompt: "What is the proper immediate response?",
		options: [
			{
				id: "a",
				text: "Stop review and distribution, preserve the evidence, isolate recipients, and immediately notify company legal or ethics personnel for coordinated disclosure to the contracting officer",
				correct: true
			},
			{
				id: "b",
				text: "Read the file fully to determine whether it is useful before reporting it",
				correct: false
			},
			{
				id: "c",
				text: "Delete the file and all logs so the team cannot be accused of possessing it",
				correct: false
			},
			{
				id: "d",
				text: "Send it to the pricing team but omit the competitor's name",
				correct: false
			}
		],
		explanation:
			"41 U.S.C. § 2102(b) and FAR 3.104-3 prohibit knowingly obtaining protected bid, proposal, or source-selection information before award. Accidental receipt and a brief unintentional opening differ from knowingly continuing to review, copy, or disseminate the material after recognizing it. S&K Aerospace found no knowing receipt where the employee immediately reported the discovery and closed the file without saving or printing; FAR 3.104-7 requires the agency to assess possible impact and act. Preserve evidence, isolate access, and escalate immediately.",
		citation:
			"41 U.S.C. § 2102(b); FAR 3.104-3(b), 3.104-7; S&K Aerospace, LLC, B-411648 (Sept. 18, 2015)",
		sourceUrl: "https://www.gao.gov/products/b-411648",
		tags: ["procurement-integrity", "leak", "competitor-information", "escalation"]
	}
];
