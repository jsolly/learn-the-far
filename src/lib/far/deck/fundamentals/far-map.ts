import type { QuizQuestion } from "../../types";

export const FAR_MAP_FUNDAMENTALS: QuizQuestion[] = [
	{
		id: "fund-map-citation-anatomy",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"Which reading of FAR citations correctly distinguishes a part, subpart, section, and a Part 52 provision or clause?",
		options: [
			{
				id: "a",
				text: "FAR part 15 is a part; subpart 15.2 is a subpart; 15.204 is a section; and a number such as 52.215-1 identifies provision or clause text in subpart 52.2, keyed to the related subject part.",
				correct: true,
			},
			{
				id: "b",
				text: "FAR 15 is a clause; 15.2 is its paragraph; 15.204 is a contract; and every number beginning with 52 is an agency deviation.",
				correct: false,
			},
			{
				id: "c",
				text: "The digits before the decimal identify the subpart, the digits after it identify the agency, and the number after the dash identifies the contract type.",
				correct: false,
			},
			{
				id: "d",
				text: "Part, subpart, section, and clause are interchangeable labels; only the full title determines where a rule sits.",
				correct: false,
			},
		],
		explanation:
			"The FAR hierarchy runs from parts to subparts, sections, subsections, and lower-level paragraphs. Provisions and clauses use a separate Part 52 numbering convention: their text sits in subpart 52.2, and the digits after 52 generally key the text to the FAR subject part where its use is prescribed. A clause is therefore not simply another level below a section.",
		citation: "FAR 1.105-2; FAR 52.101",
		sourceUrl: "https://www.acquisition.gov/far/1.105-2",
		tags: ["far-navigation", "citations", "part-52", "provisions-and-clauses"],
	},
	{
		id: "fund-map-civilian-supplements",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"For a civilian-agency opportunity, how should a capture team use the FAR, agency supplements such as the GSAM/GSAR or VAAR, and deviations?",
		options: [
			{
				id: "a",
				text: "Read the FAR together with the buying agency's applicable supplement and any authorized deviation identified for the acquisition; supplements add agency coverage, while a deviation is an authorized departure from FAR coverage.",
				correct: true,
			},
			{
				id: "b",
				text: "Use only the agency supplement because the GSAM/GSAR or VAAR replaces the FAR for that agency.",
				correct: false,
			},
			{
				id: "c",
				text: "Treat every supplemental provision as a deviation and assume it is optional unless the solicitation repeats the FAR text.",
				correct: false,
			},
			{
				id: "d",
				text: "Ignore deviations because only Congress can authorize an agency to depart from the FAR.",
				correct: false,
			},
		],
		explanation:
			"FAR 1.301 permits agencies to issue acquisition regulations that implement or supplement the FAR. GSA publishes the GSAM/GSAR and VA publishes the VAAR; neither displaces the governmentwide FAR. Under FAR 1.401, a deviation is an authorized inconsistency, omission, or other departure from FAR coverage, so the capture baseline is the FAR plus the applicable agency supplement, solicitation terms, and any identified deviation.",
		citation: "FAR 1.301; FAR 1.401",
		sourceUrl: "https://www.acquisition.gov/gsam",
		tags: ["civilian-agencies", "GSAM", "GSAR", "VAAR", "deviations"],
	},
	{
		id: "fund-map-solicitation-contract-terms",
		unitId: "fundamentals",
		format: "recall",
		difficulty: "fundamentals",
		scoring: "single-best",
		prompt:
			"Which statement correctly separates a solicitation from a contract and a solicitation provision from a contract clause?",
		options: [
			{
				id: "a",
				text: "A solicitation requests offers or quotations; a contract is the resulting mutually binding legal relationship. A provision applies only before award, while a clause applies after award or both before and after award.",
				correct: true,
			},
			{
				id: "b",
				text: "A solicitation and a contract are legally identical once posted; provisions and clauses differ only in numbering.",
				correct: false,
			},
			{
				id: "c",
				text: "A provision governs performance after award, while a clause is merely an instruction for preparing the proposal.",
				correct: false,
			},
			{
				id: "d",
				text: "Only an IFB is a solicitation; an RFP and RFQ are contracts that become binding when downloaded.",
				correct: false,
			},
		],
		explanation:
			"FAR 2.101 defines a solicitation as a request for offers or quotations and a contract as a mutually binding legal relationship. It also defines a solicitation provision as a term used only in solicitations and applying only before award, while a contract clause is used in contracts or in both solicitations and contracts and applies after award or both before and after award.",
		citation: "FAR 2.101",
		sourceUrl: "https://www.acquisition.gov/far/2.101",
		tags: ["solicitation", "contract", "provision", "clause"],
	},
	{
		id: "fund-map-notice-instrument-choice",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "tiered",
		situation:
			"A civilian agency first posts a sources-sought notice asking for capabilities and business size, then signals that its next release could be an RFI, RFQ, RFP, or IFB. Your capture lead asks what each release would mean.",
		prompt: "Which briefing gives the team the most reliable map?",
		options: [
			{
				id: "a",
				text: "Sources sought and RFIs support market research rather than award; an RFQ requests a quotation or, depending on its terms, an offer; an RFP requests proposals in a negotiated acquisition; and an IFB requests sealed bids evaluated without discussions.",
				tier: "best",
			},
			{
				id: "b",
				text: "Treat the sources-sought response as capture shaping, but wait for each later document's instructions before deciding whether the agency expects a quote, offer, proposal, or bid.",
				tier: "defensible",
			},
			{
				id: "c",
				text: "Assume every RFQ response is a binding offer and build the same submission and approval process used for a negotiated RFP.",
				tier: "costly",
			},
			{
				id: "d",
				text: "Treat the RFI and sources-sought notices as solicitations capable of immediate award, and treat an IFB as an invitation to negotiate after bid opening.",
				tier: "disqualifying",
			},
		],
		explanation:
			"FAR 15.201 says an RFI is for planning when the Government does not presently intend to award; responses are not offers. Sources-sought notices likewise gather market capability, often including data used for set-aside decisions. Under FAR 13.004, a quotation generally is not an offer, although the actual RFQ controls and simplified solicitations may request an offer. RFPs seek proposals under negotiated procedures, while IFBs use sealed bids, public opening, and evaluation without discussions.",
		citation: "FAR 15.201(e); FAR 13.004; FAR 14.101",
		sourceUrl: "https://www.acquisition.gov/far/15.201",
		tags: ["RFI", "sources-sought", "RFQ", "RFP", "IFB", "market-research"],
	},
	{
		id: "fund-map-ucf-l-m",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "confidence-bet",
		situation:
			"A GSA negotiated RFP uses the Uniform Contract Format, Sections A through M. The solution team has read the scope in Section C but has not built its compliance matrix or win themes.",
		prompt: "Where should the team look next to learn how to respond and how the response will be scored?",
		options: [
			{
				id: "a",
				text: "Section L for proposal instructions and conditions, then Section M for the evaluation factors for award",
				correct: true,
			},
			{
				id: "b",
				text: "Section B for proposal instructions, then Section D for the evaluation factors",
				correct: false,
			},
			{
				id: "c",
				text: "Section I for proposal page limits, then Section J for the source-selection weighting",
				correct: false,
			},
			{
				id: "d",
				text: "Section K for the statement of work, then Section A for the technical evaluation factors",
				correct: false,
			},
		],
		explanation:
			"Table 15-1 maps the UCF from A through M. Section L contains instructions, conditions, and notices to offerors or respondents; Section M contains evaluation factors for award. Capture and proposal teams should crosswalk every Section L instruction to the associated Section M factor, while also tracing the requirement and contract terms in Sections C, H, I, and J.",
		citation: "FAR 15.204-1, Table 15-1",
		sourceUrl: "https://www.acquisition.gov/far/15.204-1",
		tags: ["UCF", "section-L", "section-M", "compliance-matrix", "evaluation"],
	},
	{
		id: "fund-map-sf30-qa",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "core",
		scoring: "reveal-tradeoff",
		situation:
			"During an RFP question period, the program manager says on a public webinar that a key staffing minimum is relaxed. The posted solicitation still states the original minimum. Two days later, the contracting officer issues SF 30 Amendment 0003 and incorporates a written Q&A carrying the relaxed requirement.",
		prompt: "How should the proposal team control its baseline?",
		options: [
			{
				id: "a",
				text: "Use the relaxed requirement only after Amendment 0003 incorporates it, update the compliance baseline, and acknowledge the amendment as instructed.",
				tier: "best",
				consequence:
					"The team follows the contracting officer's formal amendment, aligns every volume to the incorporated change, and preserves evidence that it used the operative solicitation.",
			},
			{
				id: "b",
				text: "Keep the original minimum until the amendment is reviewed, while flagging the webinar statement as a likely pending change.",
				tier: "defensible",
				consequence:
					"The team avoids relying on an informal statement, but must turn the amendment review quickly enough to revise staffing and obtain approvals before submission.",
			},
			{
				id: "c",
				text: "Follow any answer in the written Q&A even if it is posted separately and never incorporated into an amendment.",
				tier: "costly",
				consequence:
					"The proposal may rely on guidance that never changed the solicitation's requirements, creating a preventable compliance risk.",
			},
			{
				id: "d",
				text: "Ignore Amendment 0003 because the original RFP controls and an SF 30 can modify only an awarded contract.",
				tier: "disqualifying",
				consequence:
					"The proposal misses an operative solicitation change and may also fail to acknowledge the amendment, jeopardizing acceptability.",
			},
		],
		explanation:
			"When the Government changes a solicitation requirement or term, FAR 15.206 requires the contracting officer to amend the solicitation. SF 30 may be used for negotiated-solicitation amendments as well as contract modifications. Webinar remarks or stand-alone Q&A are not substitutes for an amendment; the capture team should treat changed Q&A as controlling when the contracting officer formally incorporates it into the solicitation.",
		citation: "FAR 15.206; FAR 15.210(b); FAR 53.243",
		sourceUrl: "https://www.acquisition.gov/far/15.206",
		tags: ["SF30", "amendment", "questions-and-answers", "solicitation-baseline"],
	},
	{
		id: "fund-map-requirements-document",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "tiered",
		situation:
			"A VA draft RFP includes a short Government-written document stating mission outcomes and overall performance objectives, and asks each offeror to propose its own measurable performance solution. One reviewer calls it a detailed SOW; another calls it a PWS.",
		prompt: "What is the best capture interpretation?",
		options: [
			{
				id: "a",
				text: "It is a SOO: the Government states overall objectives and leaves maximum flexibility for offerors to propose an innovative approach, often including an offeror-developed PWS with measurable outcomes.",
				tier: "best",
			},
			{
				id: "b",
				text: "Treat it as performance-oriented and build measurable results and standards, but confirm the requested proposal artifact and terminology in the RFP instructions.",
				tier: "defensible",
			},
			{
				id: "c",
				text: "It must be a PWS because every performance-oriented requirement document is Government-written and prescribes the contractor's detailed tasks.",
				tier: "costly",
			},
			{
				id: "d",
				text: "It is a detailed design SOW, so the proposal should repeat Government-directed labor steps and avoid offering outcome measures or an innovative solution.",
				tier: "disqualifying",
			},
		],
		explanation:
			"FAR 2.101 defines a PWS as a statement of work for performance-based acquisitions that describes required results in objective terms with measurable outcomes. A SOO is a Government-prepared solicitation document stating overall performance objectives and maximizing offeror flexibility. A conventional SOW may describe the work or tasks more directly. Here, the short objectives plus a request for an offeror-designed measurable solution point to a SOO, not a prescriptive task SOW.",
		citation: "FAR 2.101; FAR 11.101",
		sourceUrl: "https://www.acquisition.gov/far/2.101",
		tags: ["PWS", "SOW", "SOO", "performance-based-acquisition", "VA"],
	},
	{
		id: "fund-map-competition-path",
		unitId: "fundamentals",
		format: "scenario",
		difficulty: "advanced",
		scoring: "confidence-bet",
		situation:
			"An HHS capture brief says the recompete may be unrestricted, may become a total small-business set-aside after market research, or may go directly to one source because the program office prefers continuity. Your company is a large incumbent.",
		prompt: "Which interpretation should drive the capture plan?",
		options: [
			{
				id: "a",
				text: "Full and open competition is the baseline; a set-aside limits eligibility to qualifying small businesses without requiring a separate Part 6 J&A; and a sole-source path needs a valid FAR 6.302 authority plus the required justification and approval, not program-office preference alone.",
				correct: true,
			},
			{
				id: "b",
				text: "A set-aside and a sole-source award are the same exclusion of large businesses, so both require the agency to prepare the same J&A.",
				correct: false,
			},
			{
				id: "c",
				text: "Incumbent continuity is itself a FAR 6.302 exception, allowing HHS to bypass competition whenever transition risk is mentioned.",
				correct: false,
			},
			{
				id: "d",
				text: "Full and open competition means every firm must be allowed to win, including a large business on a total small-business set-aside.",
				correct: false,
			},
		],
		explanation:
			"FAR 6.101 makes full and open competition the general rule. FAR 6.203 permits competition after excluding other-than-small firms and says a separate justification under Part 6 is not required for a small-business set-aside; FAR Part 19 supplies the set-aside rules. A sole-source action is different: the contracting officer needs an applicable FAR 6.302 exception and, when required, a written, certified, approved J&A. Lack of planning, expiring funds, or customer preference is not enough.",
		citation: "FAR 6.101; FAR 6.203; FAR 6.301; FAR 6.303-1",
		sourceUrl: "https://www.acquisition.gov/far/6.303-1",
		tags: ["full-and-open", "set-aside", "sole-source", "J&A", "large-prime"],
	},
];
