// The pie slices are the skill tree and the nav (Fundamentals + deal lifecycle).
export type UnitId =
	| "fundamentals"
	| "find"
	| "shape"
	| "bid-no-bid"
	| "vehicle"
	| "team"
	| "propose"
	| "win-protest";

export type LifecycleUnit = {
	id: UnitId;
	label: string; // short chip label, e.g. "Shape"
	title: string; // full title, e.g. "Shape the Requirement"
	blurb: string; // one-line description shown on the unit intro
	hue: number; // base hue (0-360) for this slice's color
};

export type QuestionFormat = "recall" | "scenario";

// Difficulty drives progression: sessions serve fundamentals first and unlock
// harder tiers as a unit is mastered. Also the unit of the "test out" placement.
export type Difficulty = "fundamentals" | "core" | "advanced";

// How a single question is graded. Rotated for variety across the deck.
export type ScoringMode =
	| "single-best" // one right answer, rest wrong (recall + simple scenarios)
	| "tiered" // options rated best/defensible/costly/disqualifying, partial credit
	| "reveal-tradeoff"; // like tiered, but every option's consequence unfolds after you pick

export type OptionTier = "best" | "defensible" | "costly" | "disqualifying";

export type QuizOption = {
	id: string;
	text: string;
	// single-best: exactly one option sets correct: true.
	correct?: boolean;
	// tiered / reveal-tradeoff: every option carries a tier.
	tier?: OptionTier;
	// reveal-tradeoff: shown for every option once the learner commits.
	consequence?: string;
};

export type QuizQuestion = {
	id: string;
	unitId: UnitId;
	format: QuestionFormat;
	difficulty: Difficulty;
	scoring: ScoringMode;
	situation?: string; // scenario set-up; omitted for bare recall
	prompt: string;
	options: QuizOption[];
	explanation: string; // the "why", shown after answering
	citation: string; // e.g. "FAR 19.502-2"
	sourceUrl: string;
	tags: string[];
};

// Feedback tone for a tier verdict — drives color + wording after an answer.
export type Tone = "good" | "ok" | "warn" | "bad";

// An unlockable badge. Whether it is earned is derived from progress at runtime.
export type Achievement = {
	id: string;
	label: string;
	description: string;
	icon: string; // emoji shown on the trophy shelf
};

// How a question was resolved in a session, fed back to the UI.
export type AnswerOutcome = {
	questionId: string;
	optionId: string;
	score: number; // 0..1
	cleared: boolean; // score >= CLEAR_THRESHOLD
};
