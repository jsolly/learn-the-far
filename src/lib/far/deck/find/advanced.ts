import type { QuizQuestion } from "../../types";

export const FIND_ADVANCED: QuizQuestion[] = [
	{
		id: "find-recompete-window-math",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"A contracts analyst finds a current contract end date of March 31, 2028 and an ultimate potential end date of March 31, 2029 in public award data. A newer agency forecast targets successor award for January 31, 2029, and the account team assumes a ten-month solicitation-to-award PALT.",
		prompt: "Which date logic should drive the initial recompete backcast?",
		options: [
			{
				id: "a",
				text: "Use January 31, 2029 as the provisional award anchor and backcast solicitation to March 31, 2028, while tracking the remaining option and any bridge evidence",
				correct: true
			},
			{
				id: "b",
				text: "Assume the recompete must award on March 31, 2028 because the current end date can never move",
				correct: false
			},
			{
				id: "c",
				text: "Assume March 31, 2029 is guaranteed because an ultimate potential end date proves every option will be exercised",
				correct: false
			},
			{
				id: "d",
				text: "Add ten months to the ultimate potential end date because PALT begins after incumbent performance ends",
				correct: false
			}
		],
		explanation:
			"The newer forecast provides a provisional successor-award anchor consistent with use of the remaining option. GAO-24-106528 defines PALT as the time between soliciting offers and contract award, so ten months before January 31, 2029 is March 31, 2028. SAM.gov Contract Data is the official public source for validating reported award and modification dates. Neither a current end date nor an ultimate potential end date guarantees what the agency will do, so option exercises, modifications, notices, and bridge actions remain validation points.",
		citation: "GAO-24-106528; SAM.gov — Contract Data",
		sourceUrl: "https://www.gao.gov/products/gao-24-106528",
		tags: ["expiration-math", "palt", "options", "forecast", "recompete"]
	},
	{
		id: "find-incumbent-recompete-posture",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"A capture manager at a large prime is challenging a well-established incumbent on a civilian recompete. Public data shows repeated option exercises and steady obligations, while user interviews confirm mission continuity matters. The team has no lawful evidence that the customer is dissatisfied.",
		prompt: "How should the manager frame the incumbent posture?",
		options: [
			{
				id: "a",
				text: "Treat continuity and switching cost as evidence-backed incumbent strengths, mark dissatisfaction as unknown, and seek lawful customer evidence for a challenger discriminator",
				tier: "best",
				consequence:
					"The strategy respects known facts, exposes the missing customer insight, and focuses capture on proving that change produces enough value to overcome transition risk."
			},
			{
				id: "b",
				text: "Assume the agency is dissatisfied because every recompete is intended to replace the incumbent",
				tier: "disqualifying",
				consequence:
					"The team builds a challenger story on an unsupported premise and may attack an incumbent relationship the customer values."
			},
			{
				id: "c",
				text: "Conclude the incumbent cannot lose because options were exercised and obligations remained steady",
				tier: "costly",
				consequence:
					"Historical continuity is an advantage, not a guarantee. The team may abandon a contest where a validated discriminator or acquisition change could matter."
			},
			{
				id: "d",
				text: "Record incumbent continuity as a strength and develop provisional challenger hypotheses pending customer validation",
				tier: "defensible",
				consequence:
					"This avoids inventing dissatisfaction and allows strategy work to start, but the hypotheses must remain visibly unvalidated until evidence supports them."
			}
		],
		explanation:
			"As core capture practice, teams use public award history for tenure, obligations, and contractual continuity without treating it as customer sentiment. APMP’s Winning Business Ecosystem supports evidence-led positioning at a high level, but neither FAR nor APMP mandates this exact incumbent-posture workflow. Separating facts, hypotheses, and unknowns avoids both incumbent fatalism and invented dissatisfaction.",
		citation: "Core capture practice; APMP Winning Business Ecosystem (high-level)",
		sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
		tags: ["incumbent", "recompete", "challenger", "evidence", "industry-practice"]
	},
	{
		id: "find-ebuy-no-vehicle-partner",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A BD lead confirms that an upcoming civilian RFQ will be competed in GSA eBuy under a category the large prime does not hold. Several trusted partners do hold the applicable Schedule category and can see the request.",
		prompt: "What is the strongest find-stage response?",
		options: [
			{
				id: "a",
				text: "Identify eligible holders, assess which can prime and cover the requirement, and pursue a compliant subcontract role before the request window closes",
				tier: "best"
			},
			{
				id: "b",
				text: "Ask a holder to share access credentials so the large prime can submit its own quote in eBuy",
				tier: "disqualifying"
			},
			{
				id: "c",
				text: "Track the requirement but wait for a future open-market competition rather than test a partner path",
				tier: "costly"
			},
			{
				id: "d",
				text: "Confirm the visibility and category mismatch, mark the company ineligible to lead directly, and refer the lead to the partner team",
				tier: "defensible"
			}
		],
		explanation:
			"eBuy visibility and response rights follow supported contracts and categories. A company without the applicable access should not masquerade as a holder or borrow credentials. Early discovery should identify eligible primes and a compliant subcontract path; a Schedule CTA would not cure the large prime’s lack of an applicable awarded category for its own quoted work.",
		citation: "GSA Vendor Support Center — GSA eBuy",
		sourceUrl: "https://vsc.gsa.gov/drupal/node/120",
		tags: ["ebuy", "vehicle-access", "partner-discovery", "subcontract", "eligibility"]
	},
	{
		id: "find-repeat-bridge-ja",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "reveal-tradeoff",
		situation:
			"A contracts lead reconstructs two successive public justifications extending the same incumbent. Each cites a delayed replacement competition, and the newest extension ends in seven months. No successor solicitation is posted.",
		prompt: "What is the most useful capture interpretation?",
		options: [
			{
				id: "a",
				text: "Raise schedule-risk and incumbent-continuity assumptions, backcast from the newest extension end, and intensify monitoring for a solicitation, another bridge, or a changed strategy",
				tier: "best",
				consequence:
					"The pipeline reflects repeated, authoritative evidence of delay without pretending the next outcome is known. The team focuses collection on the decision points that would move the window again."
			},
			{
				id: "b",
				text: "Treat the second bridge as proof that the agency has lawfully converted the requirement to a permanent sole source",
				tier: "disqualifying",
				consequence:
					"A repeated bridge does not itself authorize all future awards or erase the agency’s stated replacement competition. The conclusion outruns the documents."
			},
			{
				id: "c",
				text: "Keep the original recompete date unchanged because extensions are separate awards and should not affect pipeline timing",
				tier: "costly",
				consequence:
					"The team preserves a date contradicted by public actions, corrupting resource plans and capture milestones."
			},
			{
				id: "d",
				text: "Move the estimated window to the latest extension end and label another delay as a material risk",
				tier: "defensible",
				consequence:
					"This corrects the timing and acknowledges uncertainty, though it should also trigger active monitoring of the agency’s acquisition-strategy signals."
			}
		],
		explanation:
			"Posting authority depends on the action. FAR 6.305 applies to Part 6 justifications required by 6.303-1; Federal Supply Schedule limited-sources justifications are posted under 8.405-6(a)(2), and multiple-award order fair-opportunity justifications under 16.505(b)(2)(ii)(D). Under the applicable regime, successive posted bridge justifications are strong evidence of actions and stated rationale already documented. Repetition raises schedule and continuity risk but does not establish the legal or acquisition strategy for the next action.",
		citation: "FAR 5.406; FAR 6.305; FAR 8.405-6(a)(2); FAR 16.505(b)(2)(ii)(D)",
		sourceUrl: "https://www.acquisition.gov/far/5.406",
		tags: ["bridge", "j-and-a", "schedule-risk", "incumbent", "recompete"]
	},
	{
		id: "find-continuing-resolution-signal",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"A capture analyst tracks a proposed new-start civilian modernization effort. The fiscal year begins under a continuing resolution, the regular appropriation is not enacted, and the team has found no program-specific anomaly or other funding authority.",
		prompt: "How should this change the opportunity assessment?",
		options: [
			{
				id: "a",
				text: "Lower near-term funding and award confidence and verify the actual CR and program authority, but do not assume the requirement is canceled",
				correct: true
			},
			{
				id: "b",
				text: "Mark the award fully funded because a presidential budget request permits agencies to obligate the requested amount",
				correct: false
			},
			{
				id: "c",
				text: "Delete the opportunity because every continuing resolution permanently prohibits every new contract",
				correct: false
			},
			{
				id: "d",
				text: "Leave timing and Pwin unchanged because appropriations status has no relationship to contract obligations",
				correct: false
			}
		],
		explanation:
			"Continuing resolutions are temporary appropriations whose exact restrictions and exceptions depend on enacted text. They commonly constrain or delay new activities, but they do not prove permanent cancellation. FAR 32.702 still requires available funds or authorized conditioning before contract execution, so capture should lower confidence and validate specific authority rather than apply an absolute rule.",
		citation: "FAR 32.702; GAO-09-879",
		sourceUrl: "https://www.acquisition.gov/far/32.702",
		tags: ["continuing-resolution", "appropriations", "funding-risk", "new-start", "confidence"]
	},
	{
		id: "find-qualification-evidence-gate",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A capture manager reviews a high-value forecast lead. Mission fit is strong, but the team has not validated the customer problem, funding, acquisition vehicle, competition type, incumbent end date, or an eligible prime path. Leadership wants it counted in the qualified pipeline this quarter.",
		prompt: "What is the strongest pipeline recommendation?",
		options: [
			{
				id: "a",
				text: "Keep it unqualified, assign owners and deadlines for each material unknown, and promote it only when the company’s qualification criteria are supported by evidence",
				tier: "best"
			},
			{
				id: "b",
				text: "Qualify it now at the forecast value because mission fit outweighs missing acquisition and eligibility evidence",
				tier: "disqualifying"
			},
			{
				id: "c",
				text: "Delete it because any lead with unknown vehicle and funding cannot become a real opportunity",
				tier: "costly"
			},
			{
				id: "d",
				text: "Retain it in an early discovery stage with explicit confidence ratings and a validation plan, outside the committed qualified forecast",
				tier: "defensible"
			}
		],
		explanation:
			"As core capture practice, qualification controls investment and forecast credibility rather than rewarding attractive scope. APMP’s Winning Business Ecosystem reflects disciplined qualification at a high level, but neither FAR nor APMP mandates this exact evidence gate or company stage model. Named evidence actions for material unknowns preserve upside without presenting assumptions as qualified revenue.",
		citation: "Core capture practice; APMP Winning Business Ecosystem (high-level)",
		sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
		tags: ["qualification", "pipeline-hygiene", "evidence-gate", "forecast", "industry-practice"]
	},
	{
		id: "find-award-transaction-reconstruction",
		unitId: "find",
		format: "scenario",
		difficulty: "advanced",
		scoring: "single-best",
		situation:
			"A contracts analyst sees a parent IDV, several task orders, positive and negative modifications, a large potential value, and much smaller obligations in USAspending. The team wants the incumbent’s actual recompete posture.",
		prompt: "Which analysis is methodologically sound?",
		options: [
			{
				id: "a",
				text: "Separate parent vehicle from task orders, analyze award and transaction records, net obligations including deobligations, and treat potential value as a ceiling rather than spend",
				correct: true
			},
			{
				id: "b",
				text: "Add the IDV ceiling to every task-order potential value and call the total incumbent revenue",
				correct: false
			},
			{
				id: "c",
				text: "Ignore modifications because only the original award transaction can change period of performance or obligated value",
				correct: false
			},
			{
				id: "d",
				text: "Treat every negative obligation as evidence that the incumbent failed performance",
				correct: false
			}
		],
		explanation:
			"USAspending distinguishes award summaries from transactions and defines obligations as government promises to spend; negative obligations can correct or reduce prior commitments. Parent IDVs and child orders must not be double-counted, and potential or ceiling values are not the same as obligated revenue. Recompete research should follow identifiers, dates, and modifications before drawing performance conclusions.",
		citation: "USAspending — Analyst’s Guide to Federal Spending Data",
		sourceUrl: "https://www.usaspending.gov/federal-spending-guide",
		tags: ["usaspending", "idv", "task-order", "obligations", "deobligations", "incumbent"]
	}
];
