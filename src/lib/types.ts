import type { LevelId } from "./far/constants";
import type { LifecycleUnit } from "./far/types";

// ---- Persistence (owned by local-storage.ts, consumed by the engine) ----

export type QuestionRecord = {
	attempts: number;
	bestScore: number; // 0..1
	cleared: boolean;
	/** Times the learner cleared this question (score >= CLEAR_THRESHOLD). */
	correctCount: number;
	lastAt: string; // ISO timestamp
};

export type StreakRecord = {
	current: number;
	longest: number;
	lastDay: string; // yyyy-mm-dd of the last active day (local time)
};

export type QuizProgress = {
	questions: Record<string, QuestionRecord>;
	streak: StreakRecord;
	dailyDone: string[]; // yyyy-mm-dd dates a daily challenge was completed
	testedOut: boolean;
	/** Hard gate: lifecycle pie unlocks only after fundamentals placement/retest. */
	fundamentalsUnlocked: boolean;
	achievements: Record<string, string>; // achievementId -> earnedAt ISO
};

// ---- Engine + views (owned by quiz-state.svelte.ts, consumed by components) ----

export type View = "home" | "session" | "summary";
export type SessionMode = "unit" | "daily" | "testout" | "study";
/** What a reveal-first study session is pulling from. */
export type StudyKind = "fundamentals-gaps" | "unit" | "misses";

export type UnitStats = {
	unit: LifecycleUnit;
	total: number;
	cleared: number;
	/** Cleared at least twice — solid pie tone. */
	mastered: number;
	/** Cleared once — lighter pie tone (still learning). */
	learning: number;
	ratio: number; // 0..1 — cleared / total (hub + level)
	masteredRatio: number; // 0..1 — mastered / total
	learningRatio: number; // 0..1 — learning / total
	level: LevelId;
	levelLabel: string;
};

export type SessionSummary = {
	mode: SessionMode;
	unit?: LifecycleUnit;
	answered: number;
	scoreSum: number;
	scorePct: number;
	perfect: boolean;
	passedTestOut?: boolean;
	/** True when this testout session just lifted the fundamentals hard gate. */
	unlockedNow?: boolean;
	studyKind?: StudyKind;
	newAchievements: string[];
};
