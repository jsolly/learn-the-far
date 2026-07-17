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
	achievements: Record<string, string>; // achievementId -> earnedAt ISO
};

// ---- Engine + views (owned by quiz-state.svelte.ts, consumed by components) ----

export type View = "home" | "session" | "summary" | "chapter" | "shelf" | "glossary";
/** `chapter` = end-of-chapter check (chapter-scoped). `unit` / `daily` = homepage-style practice. */
export type SessionMode = "unit" | "daily" | "chapter";

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
	/** Set when mode is `chapter` — labels the summary; shelf return uses `unit`. */
	chapterId?: string;
	chapterTitle?: string;
	answered: number;
	scoreSum: number;
	scorePct: number;
	perfect: boolean;
	newAchievements: string[];
};
