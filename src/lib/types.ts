import type { LevelId } from "./far/constants";
import type { LifecycleUnit } from "./far/types";

// ---- Persistence (owned by local-storage.ts, consumed by the engine) ----

export type QuestionRecord = {
	attempts: number;
	bestScore: number; // 0..1
	cleared: boolean;
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
	achievements: Record<string, string>; // achievementId -> earnedAt ISO
};

// ---- Engine + views (owned by quiz-state.svelte.ts, consumed by components) ----

export type View = "home" | "session" | "summary";
export type SessionMode = "unit" | "daily" | "testout";

export type UnitStats = {
	unit: LifecycleUnit;
	total: number;
	cleared: number;
	ratio: number; // 0..1 — the pie slice fill
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
	newAchievements: string[];
};
