import type { Achievement, Difficulty, OptionTier, ScoringMode, Tone } from "./types";

// Difficulty ramp: sessions serve earlier tiers first and unlock the next once
// the current one is mostly cleared.
export const DIFFICULTY_ORDER: Difficulty[] = ["fundamentals", "core", "advanced"];

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
	fundamentals: "Basics",
	core: "Core",
	advanced: "Advanced",
};

// Fraction of a difficulty tier you must clear before the next tier unlocks.
export const TIER_UNLOCK_RATIO = 0.6;

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

// Cleared this many times → "mastered" (solid pie tone). Once → "learning".
export const MASTERED_CORRECT_COUNT = 2;

// Mastery tiers a slice climbs as its cleared-question ratio rises.
export const LEVELS = [
	{ id: "new", label: "New", min: 0 },
	{ id: "apprentice", label: "Apprentice", min: 0.0001 },
	{ id: "journeyman", label: "Journeyman", min: 0.5 },
	{ id: "prime", label: "Prime", min: 0.9 },
] as const;

export type LevelId = (typeof LEVELS)[number]["id"];

// Short human labels for non-obvious scoring modes (badge on the question card).
// single-best is unlabeled — one-pick options already read as "pick the best answer".
export const SCORING_LABEL: Partial<Record<ScoringMode, string>> = {
	tiered: "Rank the move",
	"reveal-tradeoff": "See the tradeoff",
};

// Tier feedback shown after a tiered / reveal-tradeoff answer.
export const TIER_VERDICT: Record<OptionTier, { label: string; tone: Tone }> = {
	best: { label: "Sharp move!", tone: "good" },
	defensible: { label: "Defensible", tone: "ok" },
	costly: { label: "Costly", tone: "warn" },
	disqualifying: { label: "Disqualifying", tone: "bad" },
};

// localStorage keys.
export const PROGRESS_KEY = "learn-the-far:quiz-progress:v2";
/** Separate from quiz mastery — reading never clears the pie. */
export const READING_PROGRESS_KEY = "learn-the-far:reading-progress:v1";
/** sessionStorage: shelf scrollY before entering a chapter (per unit). */
export const SHELF_SCROLL_KEY_PREFIX = "learn-the-far:shelf-scroll:v1:";
/** Shelf preference: hide chapters already marked read. */
export const SHELF_HIDE_READ_KEY = "learn-the-far:shelf-hide-read:v1";
/** Quiz feedback sounds muted (`"1"` = muted). Default: sound on. */
export const QUIZ_SOUND_MUTED_KEY = "learn-the-far:quiz-sound-muted:v1";

// Questions per session before the summary screen (wrong answers requeue within).
export const SESSION_LENGTH = 8;

/** Shorter end-of-chapter check — pools are often smaller than a full unit session. */
export const CHAPTER_SESSION_LENGTH = 5;

// Streak milestones that unlock achievements.
export const STREAK_MILESTONES = [3, 7, 14, 30];

// The achievement catalog. Earned-state is derived from progress at runtime; a
// few ids are computed (per-unit "prime-<unitId>", "streak-<n>").
export const ACHIEVEMENTS: Achievement[] = [
	{ id: "first-clear", label: "First Blood", description: "Clear your first question.", icon: "🎯" },
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

// End-of-session summary headlines by score band (finest / highest min first).
export const SUMMARY_HEADLINES: { min: number; phrases: string[] }[] = [
	{
		min: 100,
		phrases: [
			"Clean audit",
			"Award without discussion",
			"Full and open excellence",
			"Past performance: exceptional",
			"Warrant-worthy",
			"Green across the board",
			"Cleared for award",
			"Source selection: you",
		],
	},
	{
		min: 90,
		phrases: [
			"Competitive range — and then some",
			"Strong evaluation record",
			"Debrief-ready",
			"Technically acceptable with distinction",
			"Holding the high ground",
			"Ready for award",
			"Solid proposal delivery",
			"Few findings",
		],
	},
	{
		min: 80,
		phrases: [
			"Inside the competitive range",
			"Defensible position",
			"Good faith and good work",
			"Technically acceptable",
			"Capture discipline paid off",
			"On the right CLIN",
			"Competitive, not corrective",
			"Strong draft",
		],
	},
	{
		min: 70,
		phrases: [
			"Solid capture",
			"Within consideration",
			"Acceptable with notes",
			"Holding the line",
			"Room to polish",
			"Viable offer",
			"Stay in the hunt",
			"Credible showing",
		],
	},
	{
		min: 60,
		phrases: [
			"Clarification requested",
			"Weakness noted — fixable",
			"Evaluation notice: improve",
			"Needs a revised volume",
			"Yellow at the gate",
			"Address the deficiency",
			"Not out yet",
			"One more scrub",
		],
	},
	{
		min: 50,
		phrases: [
			"Room to sharpen",
			"Below the zone — for now",
			"Recompete prep starts now",
			"Corrective action plan",
			"Findings to close",
			"Back to the red team",
			"Salvageable pursuit",
			"Tighten the volumes",
		],
	},
	{
		min: 30,
		phrases: [
			"Costly miss",
			"Protest risk: elevated",
			"Outside the competitive range",
			"Returned for rewrite",
			"Capture plan needs work",
			"Discouraging debrief",
			"Major weakness",
			"Rebuild the approach",
		],
	},
	{
		min: 0,
		phrases: [
			"Keep drilling",
			"Nonresponsive — for now",
			"Disqualifying as written",
			"Curtains for this pursuit",
			"Back to market research",
			"Start over at the RFI",
			"Red across the board",
			"No award path yet",
		],
	},
];

/** Pick a score-band headline once per finished session (do not re-roll on render). */
export function pickSummaryHeadline(scorePct: number, rng: () => number = Math.random): string {
	const band = SUMMARY_HEADLINES.find((entry) => scorePct >= entry.min);
	const phrases = band?.phrases ?? [];
	if (phrases.length === 0) return "Keep drilling";
	const index = Math.floor(rng() * phrases.length);
	return phrases[index] ?? "Keep drilling";
}

/**
 * CSS color for the summary score ring.
 * Traffic-light hue: 0% red → 50% yellow → 100% green (orange in between).
 */
export function scoreRingColor(scorePct: number): string {
	const pct = Math.min(100, Math.max(0, scorePct));
	const t = pct / 100;
	const hue = t <= 0.5 ? (t / 0.5) * 55 : 55 + ((t - 0.5) / 0.5) * 90;
	return `hsl(${Math.round(hue)} 70% 45%)`;
}
