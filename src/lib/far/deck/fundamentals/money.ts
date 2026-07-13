import type { QuizQuestion } from "../../types";

export const MONEY_FUNDAMENTALS: QuizQuestion[] = [
  {
    id: "fund-money-appropriation-obligation-expenditure",
    unitId: "fundamentals",
    format: "recall",
    difficulty: "fundamentals",
    scoring: "single-best",
    prompt:
      "For a civilian-agency capture team, which statement correctly distinguishes an appropriation, an obligation, and an expenditure (outlay)?",
    options: [
      {
        id: "a",
        text: "An appropriation provides legal budget authority; an obligation is a Government commitment creating a legal liability; an expenditure or outlay is the payment that liquidates that obligation.",
        correct: true,
      },
      {
        id: "b",
        text: "An appropriation is an invoice, an obligation is the payment, and an expenditure is the agency's acquisition forecast.",
        correct: false,
      },
      {
        id: "c",
        text: "An appropriation and an obligation are the same event, while an expenditure occurs when an offeror submits its proposal.",
        correct: false,
      },
      {
        id: "d",
        text: "An appropriation is cash reserved for one named contractor, and no obligation is created until that contractor is paid.",
        correct: false,
      },
    ],
    explanation:
      "Congressional appropriations generally provide authority to incur obligations and make payments for specified purposes. A contract award or other binding action can create an obligation before cash moves; the later disbursement is the expenditure or outlay. Capture teams should therefore distinguish an agency's budget authority, the amount actually obligated on an award, and the cash eventually paid.",
    citation:
      "GAO, A Glossary of Terms Used in the Federal Budget Process, GAO-05-734SP, pp. 13–14, 70, 85",
    sourceUrl: "https://www.gao.gov/assets/a76916.html",
    tags: [
      "appropriation",
      "obligation",
      "expenditure",
      "outlay",
      "capture",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-purpose-time-amount",
    unitId: "fundamentals",
    format: "recall",
    difficulty: "fundamentals",
    scoring: "single-best",
    prompt:
      "When a civilian-agency customer informally describes different accounts as different 'colors of money,' what three fiscal controls should the capture lead recognize?",
    options: [
      {
        id: "a",
        text: "Purpose: the account may fund only authorized objects; time: it may be obligated only during its availability and for a proper need; amount: obligations and expenditures must remain within applicable limits.",
        correct: true,
      },
      {
        id: "b",
        text: "Purpose: the program office may choose any use; time: all funds last indefinitely; amount: a contract ceiling automatically supplies budget authority.",
        correct: false,
      },
      {
        id: "c",
        text: "Purpose applies only to DoD accounts, time applies only to grants, and amount applies only after the contractor invoices.",
        correct: false,
      },
      {
        id: "d",
        text: "A color is only an internal label, so funds may be moved among accounts whenever the capture strategy requires it.",
        correct: false,
      },
    ],
    explanation:
      "Purpose, time, and amount all must be satisfied for an obligation or expenditure to be legal. 'Color of money' is useful shorthand, not transfer authority: civilian accounts have their own statutory purpose, availability period, and amount restrictions. Capture should surface a funding mismatch to the customer and contracts team, not design a proposal that assumes accounts are interchangeable.",
    citation:
      "GAO Red Book, 4th ed., ch. 3, Availability of Appropriations: Purpose, pp. 3-3–3-4; 31 U.S.C. §§ 1301(a), 1502(a), 1341(a)",
    sourceUrl: "https://www.gao.gov/assets/gao-17-797sp.pdf",
    tags: [
      "purpose-time-amount",
      "colors-of-money",
      "fiscal-law",
      "capture",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-igce",
    unitId: "fundamentals",
    format: "recall",
    difficulty: "fundamentals",
    scoring: "single-best",
    prompt:
      "The pricing lead hears that the civilian agency has an Independent Government Cost Estimate (IGCE). What should the team infer?",
    options: [
      {
        id: "a",
        text: "The Government may use its independent estimate to analyze proposed prices or costs, but it is not a promise of funding or a substitute for the offeror's own supportable price build.",
        correct: true,
      },
      {
        id: "b",
        text: "The IGCE is the amount already obligated to the future contract and guarantees the awardee can bill up to it.",
        correct: false,
      },
      {
        id: "c",
        text: "The offeror must match the IGCE exactly even when its staffing and technical approach support a different price.",
        correct: false,
      },
      {
        id: "d",
        text: "An IGCE is an industry-created competitive range that the Government must publish before proposals are due.",
        correct: false,
      },
    ],
    explanation:
      "FAR 15.404-1 identifies comparison with independent Government estimates as one proposal-analysis technique. An IGCE can shape the customer's affordability view and the evaluation of price or cost, but it does not itself obligate funds or set the contractor's funded ceiling. Pricing should build a credible basis of estimate and use any lawful affordability signals without treating a rumored IGCE as the answer key.",
    citation: "FAR 15.404-1(b)(2)(v), (c)(2)(iii)(D)",
    sourceUrl: "https://www.acquisition.gov/far/15.404-1",
    tags: [
      "igce",
      "pricing",
      "price-analysis",
      "cost-analysis",
      "capture",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-cr-new-start",
    unitId: "fundamentals",
    format: "scenario",
    difficulty: "core",
    scoring: "tiered",
    situation:
      "A new budget analyst describes a continuing resolution (CR) as an agency policy memo that automatically supplies a full year of funding for every program, including new starts.",
    prompt: "Which explanation correctly describes CR mechanics?",
    options: [
      {
        id: "a",
        text: "A CR is enacted temporary appropriations legislation; its duration, funding rate, and terms come from its text, and any anomaly or authority for a new start must also be found in enacted law.",
        tier: "best",
      },
      {
        id: "b",
        text: "Read the enacted CR and incorporated terms before deciding what operations or new activities it funds, because CR provisions and exceptions can differ.",
        tier: "defensible",
      },
      {
        id: "c",
        text: "Treat a CR as the agency's full-year regular appropriation, available at the amount in the President's budget request.",
        tier: "costly",
      },
      {
        id: "d",
        text: "Assume every CR permanently bans every new activity and that an anomaly cannot provide different authority.",
        tier: "disqualifying",
      },
    ],
    explanation:
      "A CR is a temporary appropriations act used when one or more regular appropriations acts have not been enacted. It supplies budget authority for the period, rate, projects, and activities specified by Congress and carries the terms and conditions stated or incorporated in the legislation. CRs commonly continue prior operations and may restrict new starts, but anomalies or other provisions can change those rules. The enacted text—not the label 'CR' by itself—determines new-start authority.",
    citation:
      "GAO-22-104701, Federal Budget: Selected Agencies and Programs Used Strategies to Manage Constraints of Continuing Resolutions, pp. 1–2, 7–9",
    sourceUrl: "https://www.gao.gov/assets/gao-22-104701.pdf",
    tags: [
      "continuing-resolution",
      "new-start",
      "appropriation",
      "budget-authority",
      "anomaly",
      "enacted-text",
    ],
  },
  {
    id: "fund-money-bona-fide-severable-services",
    unitId: "fundamentals",
    format: "scenario",
    difficulty: "core",
    scoring: "tiered",
    situation:
      "You hold the contracts seat on a civilian-agency services pursuit. The agency has a current-year bona fide need for independently useful help-desk support beginning in August and wants a 12-month period of performance that crosses September 30, funded with the current fiscal year's annual appropriation.",
    prompt: "What is the sound capture-and-contracts response?",
    options: [
      {
        id: "a",
        text: "Confirm the work is severable and the contemplated action is no longer than one year; under the applicable authority, the agency may obligate current-year funds for the full crossing-fiscal-year action.",
        tier: "best",
      },
      {
        id: "b",
        text: "If the agency is uncertain about using the crossing-fiscal-year authority, propose a shorter initial period aligned to the fiscal year and price a later option separately.",
        tier: "defensible",
      },
      {
        id: "c",
        text: "Tell the agency all services must stop on September 30 because annual funds can never support any performance in the next fiscal year.",
        tier: "costly",
      },
      {
        id: "d",
        text: "Use the current annual appropriation to prepay five future years of recurring help-desk support because the first service ticket is a current-year need.",
        tier: "disqualifying",
      },
    ],
    explanation:
      "The bona fide needs rule ties a fixed-period appropriation to needs arising during its availability. Severable services are recurring and independently useful as performed; for executive agencies other than NASA, FAR 37.106(b) implements statutory authority for an action of up to one year that begins in one fiscal year and ends in the next, with current-year funds obligated for the total action. That authority does not turn one current need into permission to buy multiple future years.",
    citation: "FAR 37.106(a)–(b); 41 U.S.C. § 3902; 31 U.S.C. § 1502(a)",
    sourceUrl: "https://www.acquisition.gov/far/37.106",
    tags: [
      "bona-fide-needs",
      "severable-services",
      "period-of-performance",
      "contracts",
      "fiscal-year",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-q4-year-end",
    unitId: "fundamentals",
    format: "scenario",
    difficulty: "core",
    scoring: "tiered",
    situation:
      "You are the proposal lead in late Q4. A civilian-agency program manager says, 'We may have year-end funds; send us something we can award by September 30.' Your team has identified both a documented current-year cybersecurity remediation need and several speculative enhancements intended only for next year's expansion.",
    prompt: "How should the proposal team respond?",
    options: [
      {
        id: "a",
        text: "Build a compliant, executable offer around the documented current-year need, separate the future enhancements, and let the contracting officer confirm funds, scope, and award timing.",
        tier: "best",
      },
      {
        id: "b",
        text: "Offer a narrowly scoped discovery or remediation action that is genuinely useful now, while leaving later implementation to a separately funded action.",
        tier: "defensible",
      },
      {
        id: "c",
        text: "Bundle the speculative next-year enhancements into the current action and discount them heavily so the agency can use its remaining balance.",
        tier: "costly",
      },
      {
        id: "d",
        text: "Create a paper deliverable and invoice dated September 30 even though no bona fide need or meaningful performance exists until next fiscal year.",
        tier: "disqualifying",
      },
    ],
    explanation:
      "Q4 often compresses acquisition schedules, but September money is not free money. A fixed-period appropriation must serve a genuine need arising during its availability, not merely exhaust a balance. Proposal teams create capture value by presenting mature, severable, realistically executable scope and cleanly separating future-year wants; they do not manufacture obligations or backdate performance.",
    citation: "GAO-17-807T, Budget Issues, pp. 8–9; 31 U.S.C. § 1502(a)",
    sourceUrl: "https://www.gao.gov/assets/gao-17-807t.pdf",
    tags: [
      "q4",
      "year-end-spending",
      "bona-fide-needs",
      "proposal",
      "capture",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-base-options-pop",
    unitId: "fundamentals",
    format: "scenario",
    difficulty: "core",
    scoring: "tiered",
    situation:
      "You occupy the pricing seat for a civilian-agency RFP with a one-year base period and four separately priced one-year options. The customer forecast calls the opportunity a five-year program, but the solicitation makes option exercise discretionary.",
    prompt: "How should pricing and capture model the period of performance?",
    options: [
      {
        id: "a",
        text: "Price every evaluated base and option period as instructed, but model revenue and staffing with option-exercise risk because the Government must affirmatively exercise each option and determine funds are available.",
        tier: "best",
      },
      {
        id: "b",
        text: "Plan the base as the firm performance window and maintain contingent staffing and pipeline scenarios for each option period.",
        tier: "defensible",
      },
      {
        id: "c",
        text: "Treat all five years as guaranteed backlog at award because the option prices appear in the evaluated total.",
        tier: "costly",
      },
      {
        id: "d",
        text: "Leave option prices blank because option periods are never evaluated and can always be negotiated after the base year.",
        tier: "disqualifying",
      },
    ],
    explanation:
      "The period of performance states when authorized work occurs. A base-plus-options structure may be evaluated across all periods, but an option is not automatic backlog: the contracting officer must provide timely written notice and, among other findings, determine that funds are available, the need continues, and exercise is advantageous. Capture forecasts should preserve the full upside without representing options as funded commitments.",
    citation: "FAR 17.207(a), (c), (f)",
    sourceUrl: "https://www.acquisition.gov/far/17.207",
    tags: [
      "period-of-performance",
      "base-period",
      "options",
      "pricing",
      "forecasting",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-clin-slin-funded-ceiling",
    unitId: "fundamentals",
    format: "scenario",
    difficulty: "advanced",
    scoring: "reveal-tradeoff",
    situation:
      "You are reviewing an incrementally funded civilian-agency cost-reimbursement award with the pricing and contracts leads. CLIN 0001 shows a total estimated cost for the contemplated work, while funded SLIN 0001AA identifies a smaller amount currently allotted and the performance it is expected to cover.",
    prompt:
      "Which number should govern near-term authorized cost and staffing decisions?",
    options: [
      {
        id: "a",
        text: "Use the amount currently allotted to the funded SLIN as the operative funding limit, reconcile it to the covered work and burn forecast, and track the larger CLIN estimate separately.",
        tier: "best",
        consequence:
          "The team staffs to funded authority, preserves visibility into total potential scope, and can send the required funding notice before the allotted amount is exhausted.",
      },
      {
        id: "b",
        text: "Use a conservative portion of the current allotment while reconciling the SLIN to accounting, covered work, period of performance, and the burn forecast before expanding staffing.",
        tier: "defensible",
        consequence:
          "The cautious staffing posture reduces immediate overrun risk and respects the mapping controls, but it may unnecessarily constrain authorized performance until the reconciliation is complete.",
      },
      {
        id: "c",
        text: "Staff to the full CLIN estimated cost because a CLIN total and a funded ceiling are interchangeable.",
        tier: "costly",
        consequence:
          "The larger estimate describes contemplated cost, not the amount presently allotted; the program can burn past funded authority and put recovery of excess costs at risk.",
      },
      {
        id: "d",
        text: "Treat the contract's total potential value, including unexercised options, as available funding for every CLIN and SLIN.",
        tier: "disqualifying",
        consequence:
          "Potential value is neither an allotment nor an obligation; staffing against it disregards line-level funding and can lead to unauthorized, unrecoverable performance.",
      },
    ],
    explanation:
      "CLINs and SLINs organize distinct deliverables, pricing, accounting, funding, and performance periods. On an incrementally funded cost-reimbursement contract, FAR 52.232-22 makes the amount actually allotted—not the total estimated cost, ceiling, or option value—the operative limit on paid and payable cost. Capture hands the win to delivery by preserving the distinction among total potential value, estimated cost, obligated/allotted funding, and the specific work each funded line covers.",
    citation: "FAR 4.1004, 4.1005-1; FAR 52.232-22(b)–(c)",
    sourceUrl: "https://www.acquisition.gov/far/52.232-22",
    tags: [
      "clin",
      "slin",
      "funded-ceiling",
      "incremental-funding",
      "pricing",
      "contracts",
      "civilian-agency",
    ],
  },
  {
    id: "fund-money-never-perform-unfunded",
    unitId: "fundamentals",
    format: "scenario",
    difficulty: "advanced",
    scoring: "confidence-bet",
    situation:
      "You hold the contracts seat after award. The funded amount on an incrementally funded cost-reimbursement CLIN will be reached Friday. The COR emails, 'Keep the full team working; the contracting officer will add funds next week.' No funded modification or other written contracting-officer direction has arrived.",
    prompt: "What is the single best response?",
    options: [
      {
        id: "a",
        text: "Give the required written funding notice, escalate immediately to the contracting officer, plan an orderly stop at the contractual funding limit, and resume affected work only when authorized funding is added in writing.",
        correct: true,
      },
      {
        id: "b",
        text: "Continue because a COR email is enough to obligate the Government and guarantees reimbursement.",
        correct: false,
      },
      {
        id: "c",
        text: "Move the excess labor to an unrelated funded CLIN even though the employees are performing the depleted CLIN's scope.",
        correct: false,
      },
      {
        id: "d",
        text: "Keep performing at company risk because the Anti-Deficiency Act requires contractors to finish planned work even when no funds are allotted.",
        correct: false,
      },
    ],
    explanation:
      "Never treat expected funding as funded authority. The Limitation of Funds framework requires advance notice and entitles the contractor to stop when the allotted limit is reached; the contracting officer—not the COR—must provide binding funding direction. Government officials may not create obligations in advance of or above available appropriations under the Anti-Deficiency Act, and a contractor should not mask unfunded work by mischarging another CLIN. Capture and contracts protect margin and performance by making the funding runway visible before the cliff.",
    citation:
      "FAR 32.704(a); FAR 52.232-22(c), (f); FAR 1.602-1(a); 31 U.S.C. § 1341(a)",
    sourceUrl: "https://www.acquisition.gov/far/32.704",
    tags: [
      "anti-deficiency-act",
      "incremental-funding",
      "limitation-of-funds",
      "unfunded-work",
      "contracts",
      "cor-authority",
      "civilian-agency",
    ],
  },
];
