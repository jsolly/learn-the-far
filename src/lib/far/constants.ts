import type { Achievement, ConfidenceStake, Difficulty, OptionTier, ScoringMode, Tone } from "./types";

// Difficulty ramp: sessions serve earlier tiers first and unlock the next once
// the current one is mostly cleared.
export const DIFFICULTY_ORDER: Difficulty[] = ["fundamentals", "core", "advanced"];

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
	fundamentals: "Fundamentals",
	core: "Core",
	advanced: "Advanced",
};

// Fraction of a difficulty tier you must clear before the next tier unlocks.
export const TIER_UNLOCK_RATIO = 0.6;

// Test-out: a placement run of fundamentals sampled across units. Score at or
// above this and every fundamentals question is credited so you start at Core.
export const TESTOUT_LENGTH = 8;
export const TESTOUT_PASS = 0.8;

// Daily challenge: a date-seeded mixed set; completing it feeds the streak.
export const DAILY_LENGTH = 5;

// Credit awarded per tier for tiered / reveal-tradeoff questions (0..1).
export const TIER_SCORE: Record<OptionTier, number> = {
	best: 1,
	defensible: 0.6,
	costly: 0.25,
	disqualifying: 0,
};

// A question counts as "cleared" (advances unit mastery) at or above this score.
export const CLEAR_THRESHOLD = 0.6;

// Mastery tiers a slice climbs as its cleared-question ratio rises.
export const LEVELS = [
	{ id: "new", label: "New", min: 0 },
	{ id: "apprentice", label: "Apprentice", min: 0.0001 },
	{ id: "journeyman", label: "Journeyman", min: 0.5 },
	{ id: "prime", label: "Prime", min: 0.999 },
] as const;

export type LevelId = (typeof LEVELS)[number]["id"];

// Confidence-bet: the learner stakes a confidence level before answering. The
// stake does not change the score (a correct answer clears the question either
// way) — it drives the calibration feedback tone: a confident miss reads harsher
// than a hunch that missed. See QuizView's verdict() and quiz-state scoring.
export const CONFIDENCE_STAKES: { id: ConfidenceStake; label: string; helper: string }[] = [
	{ id: "hunch", label: "Hunch", helper: "Not sure" },
	{ id: "confident", label: "Confident", helper: "Fairly sure" },
	{ id: "certain", label: "Certain", helper: "Bet on it" },
];

// Short human labels for each scoring mode (badge on the question card).
export const SCORING_LABEL: Record<ScoringMode, string> = {
	"single-best": "Best answer",
	tiered: "Rank the move",
	"reveal-tradeoff": "See the tradeoff",
	"confidence-bet": "Bet your read",
};

// Tier feedback shown after a tiered / reveal-tradeoff answer.
export const TIER_VERDICT: Record<OptionTier, { label: string; tone: Tone }> = {
	best: { label: "Sharp move", tone: "good" },
	defensible: { label: "Defensible", tone: "ok" },
	costly: { label: "Costly", tone: "warn" },
	disqualifying: { label: "Disqualifying", tone: "bad" },
};

// localStorage keys.
export const PROGRESS_KEY = "learn-the-far:quiz-progress:v1";

// Questions per session before the summary screen (wrong answers requeue within).
export const SESSION_LENGTH = 8;

// Streak milestones that unlock achievements.
export const STREAK_MILESTONES = [3, 7, 14, 30];

// The achievement catalog. Earned-state is derived from progress at runtime; a
// few ids are computed (per-unit "prime-<unitId>", "streak-<n>").
export const ACHIEVEMENTS: Achievement[] = [
	{ id: "first-clear", label: "First Blood", description: "Clear your first question.", icon: "🎯" },
	{ id: "tested-out", label: "Skip the Basics", description: "Test out of the fundamentals.", icon: "⏭️" },
	{ id: "flawless", label: "Clean Audit", description: "Finish a session with a perfect score.", icon: "✨" },
	{ id: "daily-1", label: "Daily Briefing", description: "Complete a daily challenge.", icon: "📰" },
	{ id: "daily-7", label: "Beltway Regular", description: "Complete 7 daily challenges.", icon: "🗞️" },
	{ id: "streak-3", label: "Warming Up", description: "Hold a 3-day streak.", icon: "🔥" },
	{ id: "streak-7", label: "On Contract", description: "Hold a 7-day streak.", icon: "🔥" },
	{ id: "streak-14", label: "Full Performance", description: "Hold a 14-day streak.", icon: "🔥" },
	{ id: "streak-30", label: "Sole Source", description: "Hold a 30-day streak.", icon: "🏆" },
	{ id: "prime-team", label: "Master Teamer", description: "Reach Prime on Team & Subcontract.", icon: "🤝" },
	{ id: "prime-shape", label: "Requirement Whisperer", description: "Reach Prime on Shape the Requirement.", icon: "✍️" },
	{ id: "capstone", label: "Full Capture", description: "Reach Prime on every unit.", icon: "👑" },
];
