import type { QuizQuestion } from "../../types";

export const FIND_CORE: QuizQuestion[] = [
	{
		id: "find-sources-sought-large-prime",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"A capture manager at a large civilian prime finds a sources-sought notice for a recompete the company can perform. The agency asks about relevant past performance, vehicle access, transition risk, and possible acquisition approaches.",
		prompt: "What response best advances early capture?",
		options: [
			{
				id: "a",
				text: "Submit a concise, evidence-backed response that answers every question, demonstrates credible capacity, identifies workable vehicles, and offers specific requirement or transition insights",
				tier: "best"
			},
			{
				id: "b",
				text: "Send a generic corporate capability statement without mapping it to the agency’s questions",
				tier: "costly"
			},
			{
				id: "c",
				text: "Treat the notice as an RFP and submit binding pricing plus a full technical proposal",
				tier: "disqualifying"
			},
			{
				id: "d",
				text: "Respond to the requested questions and past-performance areas, but omit speculative pricing the agency did not request",
				tier: "defensible"
			}
		],
		explanation:
			"FAR Part 10 permits agencies to contact knowledgeable industry sources and use their input to determine capabilities, customary practices, competition, and acquisition strategy. For a large prime, a tailored response creates useful evidence that capable sources and viable buying paths exist. A generic brochure wastes the opening, while a sources sought is not a request for a binding offer.",
		citation: "FAR 10.002(b)(2)",
		sourceUrl: "https://www.acquisition.gov/far/10.002",
		tags: ["sources-sought", "large-prime", "market-research", "response-strategy"]
	},
	{
		id: "find-setaside-naics-early-triage",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"A BD lead at a large prime sees an agency forecast six months before the planned solicitation. It currently identifies a total small-business set-aside and a NAICS code under which the company is other than small. The scope strongly matches the company’s capabilities.",
		prompt: "What should the lead do at this early discovery stage?",
		options: [
			{
				id: "a",
				text: "Mark the company currently ineligible to prime, validate the NAICS and set-aside signals, and map qualified small-business partners and feasible workshare",
				tier: "best",
				consequence:
					"The pipeline reflects the present eligibility gate while capture preserves a compliant path to participate if the strategy holds. Partner discovery starts early enough to assess capability and workshare instead of forcing a last-minute arrangement."
			},
			{
				id: "b",
				text: "Keep it as an unrestricted prime opportunity because the forecast is not yet a solicitation",
				tier: "costly",
				consequence:
					"The forecast can change, but ignoring its set-aside and NAICS fields inflates the prime pipeline and delays the partner search. The team spends against a path that current evidence does not support."
			},
			{
				id: "c",
				text: "Prepare to certify the large company as small when the solicitation arrives because the scope is a strong fit",
				tier: "disqualifying",
				consequence:
					"Capability does not change size status under the solicitation’s assigned NAICS code. A false size representation creates serious eligibility and integrity risk."
			},
			{
				id: "d",
				text: "Archive the lead permanently because a forecasted set-aside can never change and a large prime cannot participate at any tier",
				tier: "costly",
				consequence:
					"This avoids false prime-pipeline value, but it gives up legitimate subcontracting and early partner options and overstates the certainty of a pre-solicitation forecast."
			}
		],
		explanation:
			"FAR 19.102 ties the applicable size standard to the NAICS code assigned to the acquisition, and a total small-business set-aside excludes an other-than-small concern from competing as prime. Find-stage triage should record that eligibility signal and discover partner paths early. This is not the final bid/no-bid decision and does not require repeating the rule-of-two analysis.",
		citation: "FAR 19.102; FAR 19.502-2",
		sourceUrl: "https://www.acquisition.gov/far/19.102",
		tags: ["set-aside", "naics", "eligibility", "partner-discovery", "large-prime"]
	},
	{
		id: "find-palt-backsolve",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A capture analyst is estimating a civilian recompete window. The incumbent ends September 30, 2028. The agency wants the successor awarded by June 30, 2028 for a three-month transition, and its planning assumption is eight months from solicitation issuance to award.",
		prompt: "What solicitation date should anchor the analyst’s backcast?",
		options: [
			{
				id: "a",
				text: "October 30, 2027 — eight calendar months before the required June 30, 2028 award",
				correct: true
			},
			{
				id: "b",
				text: "January 31, 2028 — because only the final five months count toward PALT",
				correct: false
			},
			{
				id: "c",
				text: "June 30, 2028 — because transition occurs after solicitation issuance",
				correct: false
			},
			{
				id: "d",
				text: "September 30, 2028 — because PALT begins when the incumbent contract expires",
				correct: false
			}
		],
		explanation:
			"Backsolve from the successor award date, not the incumbent expiration date: subtracting eight calendar months from June 30 gives October 30 of the prior year. GAO describes PALT as the time from solicitation of offers to contract award; it does not include acquisition planning before solicitation, so meaningful capture discovery and shaping must begin earlier than this anchor.",
		citation: "GAO-24-106528 — Defense Contracts: Award Lead Times",
		sourceUrl: "https://www.gao.gov/products/gao-24-106528",
		tags: ["palt", "expiration", "recompete", "backcast", "transition"]
	},
	{
		id: "find-incumbent-award-history",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A contracts analyst must identify the likely incumbent, current period of performance, competition history, and obligation pattern for a Department of Commerce services recompete.",
		prompt: "Which research path is strongest?",
		options: [
			{
				id: "a",
				text: "Search SAM.gov Contract Awards or Data Bank and USAspending by agency, keywords, NAICS or PSC, then follow the PIID and modifications to validate recipient, dates, and obligations",
				correct: true
			},
			{
				id: "b",
				text: "Use the first matching SAM.gov opportunity title and assume its listed vendor is the incumbent",
				correct: false
			},
			{
				id: "c",
				text: "Search only the agency’s current budget request and infer the incumbent from the largest program account",
				correct: false
			},
			{
				id: "d",
				text: "Add all potential contract values in search results and treat that sum as the incumbent’s obligated revenue",
				correct: false
			}
		],
		explanation:
			"Current SAM.gov contract-award search and Data Bank reports expose reported award and modification data, while USAspending supports award and transaction analysis. A defensible incumbent profile follows identifiers and modifications, distinguishes parent vehicles from orders, and separates potential value from obligations. Titles and budget accounts alone are not reliable identity keys.",
		citation: "SAM.gov — Contract Data",
		sourceUrl: "https://sam.gov/contract-data",
		tags: ["incumbent", "sam-data-bank", "usaspending", "piid", "modifications"]
	},
	{
		id: "find-bridge-ja-signal",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"A capture manager finds a SAM.gov justification notice supporting a nine-month sole-source extension to the incumbent because the replacement competition is delayed.",
		prompt: "How should the manager use this discovery?",
		options: [
			{
				id: "a",
				text: "Treat it as a documented timing and continuity signal, update the estimated recompete window, and monitor related notices and customer updates",
				tier: "best",
				consequence:
					"The team uses the public justification for what it proves: a near-term noncompetitive action and a stated delay. It preserves the recompete as a hypothesis requiring continued validation."
			},
			{
				id: "b",
				text: "Declare the follow-on permanently sole-source and remove every challenger from the competitive map",
				tier: "costly",
				consequence:
					"A bridge can preserve continuity while a competition is delayed. Treating a temporary extension as proof of the final acquisition strategy can cause the team to abandon a live follow-on."
			},
			{
				id: "c",
				text: "Ignore the justification because post-award notices have no capture value",
				tier: "disqualifying",
				consequence:
					"The team misses an authoritative explanation of schedule movement, incumbent continuity, and the agency’s stated rationale."
			},
			{
				id: "d",
				text: "Update the incumbent end-date estimate but wait for another official signal before changing the opportunity stage",
				tier: "defensible",
				consequence:
					"This keeps the record conservative and captures the likely runway extension, but may underuse explicit evidence about the agency’s replacement timeline."
			}
		],
		explanation:
			"Posting authority depends on the action. FAR 6.305 governs public availability of Part 6 justifications required by 6.303-1; Federal Supply Schedule orders and BPAs instead use the limited-sources posting rules in 8.405-6(a)(2), and multiple-award orders issued without fair opportunity use 16.505(b)(2)(ii)(D). Under the applicable regime, a posted bridge justification can reveal continuity need, delay rationale, and extension period, but does not prove that a planned competition is canceled or that later dates will hold.",
		citation: "FAR 5.406; FAR 6.305; FAR 8.405-6(a)(2); FAR 16.505(b)(2)(ii)(D)",
		sourceUrl: "https://www.acquisition.gov/far/5.406",
		tags: ["bridge", "justification", "sole-source", "recompete", "timing-signal"]
	},
	{
		id: "find-budget-signal-triangulation",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A proposal strategist finds a new modernization initiative in a civilian agency’s congressional budget justification. Congress has not enacted the requested funding, and no acquisition forecast or SAM.gov notice exists.",
		prompt: "How strong is this as an opportunity signal?",
		options: [
			{
				id: "a",
				text: "It is directional evidence of mission intent, not proof of funded procurement; track appropriations, budget execution, forecasts, and acquisition notices before upgrading it",
				correct: true
			},
			{
				id: "b",
				text: "It is a funded solicitation because an agency may obligate the requested amount as soon as the justification is published",
				correct: false
			},
			{
				id: "c",
				text: "It has no discovery value until an award appears in USAspending",
				correct: false
			},
			{
				id: "d",
				text: "It proves the work will be competed unrestricted under the NAICS code used by the incumbent",
				correct: false
			}
		],
		explanation:
			"A budget request signals a program priority but is not an appropriation, acquisition strategy, or contract action. FAR 32.702 bars obligations in excess of or in advance of available appropriations unless authorized. Capture should triangulate enacted funding and execution evidence with forecasts, market research, and notices.",
		citation: "FAR 32.702",
		sourceUrl: "https://www.acquisition.gov/far/32.702",
		tags: ["budget", "appropriations", "funding", "signal-strength", "civilian-agency"]
	},
	{
		id: "find-pipeline-hygiene-evidence",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"A BD lead hears at an industry conference that a civilian bureau “may modernize grants systems next year.” There is no named buyer, forecast entry, funding line, acquisition vehicle, or date.",
		prompt: "How should the lead enter this in the pipeline?",
		options: [
			{
				id: "a",
				text: "Create an unvalidated lead with the source and date, explicit unknowns, a named owner, and a time-bound next validation action",
				tier: "best"
			},
			{
				id: "b",
				text: "Create a qualified opportunity at the speaker’s implied value and assign a high probability because the mission need sounds real",
				tier: "disqualifying"
			},
			{
				id: "c",
				text: "Keep it out of the system until a final RFP appears",
				tier: "costly"
			},
			{
				id: "d",
				text: "Create an early lead with a low confidence rating and revisit it at the next account review",
				tier: "defensible"
			}
		],
		explanation:
			"As core capture practice, disciplined teams separate a discoverable lead from a qualified opportunity and record source, freshness, assumptions, owner, and next evidence. APMP’s Winning Business Ecosystem reflects this evidence-driven discipline at a high level; neither FAR nor APMP mandates this exact company pipeline workflow. Waiting for an RFP forfeits early positioning, while promoting unsupported value and probability corrupts investment decisions.",
		citation: "Core capture practice; APMP Winning Business Ecosystem (high-level)",
		sourceUrl: "https://www.apmp.org/Web/Web/About-Us/Winning-Business-Ecosystem.aspx",
		tags: ["pipeline-hygiene", "qualification", "evidence", "ownership", "industry-practice"]
	},
	{
		id: "find-related-notice-chain",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A capture analyst finds an award notice whose title is generic. The team wants the original requirements, amendments, and market-research history behind it to prepare for the next recompete.",
		prompt: "What should the analyst do next?",
		options: [
			{
				id: "a",
				text: "Use the solicitation or notice identifiers and SAM.gov related-notice links to reconstruct the chain across sources sought, presolicitation, solicitation, amendments, justification, and award",
				correct: true
			},
			{
				id: "b",
				text: "Search only the awardee’s legal business name because notices for one acquisition cannot be related across types",
				correct: false
			},
			{
				id: "c",
				text: "Assume the award notice contains the full statement of work and all solicitation amendments",
				correct: false
			},
			{
				id: "d",
				text: "Discard all pre-award notices because their content is superseded and cannot inform recompete research",
				correct: false
			}
		],
		explanation:
			"SAM.gov opportunity data supports relationships among notice types. Reconstructing the chain can recover requirement evolution, response dates, set-aside signals, attachments, and acquisition-strategy changes that a terse award notice omits. The analyst should still distinguish historical facts from assumptions about the next procurement.",
		citation: "SAM.gov Opportunity Management API — Related Notices",
		sourceUrl: "https://open.gsa.gov/api/opportunities-api/",
		tags: ["sam-gov", "related-notices", "award-history", "recompete-research"]
	},
	{
		id: "find-foia-competitive-intelligence-ethics",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"A proposal manager is building a competitor profile. The team has lawfully released FOIA records and public award data. A consultant then offers an unredacted, nonpublic source-selection worksheet for an active procurement and will not identify the source.",
		prompt: "What is the right competitive-intelligence boundary?",
		options: [
			{
				id: "a",
				text: "Use lawfully public records, refuse and do not circulate the nonpublic worksheet, preserve the facts, and escalate immediately to legal or ethics",
				tier: "best",
				consequence:
					"The team continues legitimate public-source analysis while containing a potential procurement-integrity issue and enabling counsel to direct any required notice or remediation."
			},
			{
				id: "b",
				text: "Use the worksheet if the consultant promises the company did not ask a government employee for it",
				tier: "disqualifying",
				consequence:
					"Knowing receipt or use of protected bid, proposal, or source-selection information can create procurement-integrity exposure regardless of who first solicited it."
			},
			{
				id: "c",
				text: "Delete the worksheet silently and continue without notifying anyone",
				tier: "costly",
				consequence:
					"Deletion may destroy evidence and leaves legal, ethics, and potential disclosure obligations unevaluated. Containment without escalation is not enough."
			},
			{
				id: "d",
				text: "Pause use of the worksheet and ask legal or ethics to determine whether it is public or protected before the team proceeds",
				tier: "defensible",
				consequence:
					"This protects the active procurement and gets expert review, though the team should also clearly refuse further transmission and preserve the circumstances of receipt."
			}
		],
		explanation:
			"FOIA releases, SAM.gov records, USAspending data, and other lawfully public sources are legitimate inputs. The Procurement Integrity Act and FAR 3.104-3 prohibit knowingly obtaining protected contractor bid or proposal information or source-selection information before award except as provided by law. Refusal, containment, preservation, and prompt escalation describe a prudent company legal-and-ethics procedure supported by those restrictions; they are not a government-mandated workflow, and company counsel should direct any notice or remediation.",
		citation: "Procurement Integrity Act, 41 U.S.C. § 2102; FAR 3.104-3",
		sourceUrl: "https://www.acquisition.gov/far/3.104-3",
		tags: ["foia", "competitive-intelligence", "procurement-integrity", "ethics", "public-data"]
	},
	{
		id: "find-forecast-staleness",
		unitId: "find",
		format: "scenario",
		difficulty: "core",
		scoring: "single-best",
		situation:
			"A capture manager sees a nine-month-old agency forecast predicting a second-quarter unrestricted solicitation. The quarter has passed, no notice is posted, and an official vendor-communication update says the acquisition strategy and schedule are under review.",
		prompt: "How should the manager represent the opportunity?",
		options: [
			{
				id: "a",
				text: "Retain it as a lead, lower timing and strategy confidence, record the conflicting dated sources, and assign a next validation action",
				correct: true
			},
			{
				id: "b",
				text: "Keep the original solicitation date and unrestricted status as committed facts until the agency publishes a cancellation",
				correct: false
			},
			{
				id: "c",
				text: "Delete it because a missed forecast date proves the requirement no longer exists",
				correct: false
			},
			{
				id: "d",
				text: "Advance it to qualified because schedule slippage gives the company more capture time",
				correct: false
			}
		],
		explanation:
			"FAR 5.404-1(b)(3) requires released long-range acquisition estimates to state that they use the best available information, are subject to modification, and are not binding on the Government. When a newer official update conflicts with an old forecast, pipeline confidence and dates should change while the underlying mission need remains open for validation. Preserving source dates and next actions keeps the record auditable without converting uncertainty into either certainty or deletion.",
		citation: "FAR 5.404-1(b)(3)",
		sourceUrl: "https://www.acquisition.gov/far/5.404-1",
		tags: ["forecast", "staleness", "pipeline-hygiene", "confidence", "validation"]
	}
];
