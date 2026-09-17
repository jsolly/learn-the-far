import { PROGRESS_KEY } from "$lib/far/constants";
import type { QuestionRecord, QuizProgress, StreakRecord } from "./types";

export function emptyProgress(): QuizProgress {
	return {
		questions: {},
		streak: { current: 0, longest: 0, lastDay: "" },
		dailyDone: [],
		achievements: {},
	};
}

function canUseStorage() {
	return typeof window !== "undefined" && "localStorage" in window;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringRecord(value: unknown): value is Record<string, string> {
	if (!isRecord(value)) {
		return false;
	}
	return Object.values(value).every((entry) => typeof entry === "string");
}

function parseStreak(value: unknown, fallback: StreakRecord): StreakRecord {
	if (!isRecord(value)) {
		return fallback;
	}
	const current = value["current"];
	const longest = value["longest"];
	const lastDay = value["lastDay"];
	return {
		current: typeof current === "number" ? current : fallback.current,
		longest: typeof longest === "number" ? longest : fallback.longest,
		lastDay: typeof lastDay === "string" ? lastDay : fallback.lastDay,
	};
}

function parseQuestionRecord(value: unknown): QuestionRecord | undefined {
	if (!isRecord(value)) {
		return undefined;
	}
	const cleared = value["cleared"] === true;
	const attempts = value["attempts"];
	const bestScore = value["bestScore"];
	const lastAt = value["lastAt"];
	const correctCountRaw = value["correctCount"];
	const correctCount = typeof correctCountRaw === "number" ? correctCountRaw : cleared ? 1 : 0;
	return {
		attempts: typeof attempts === "number" ? attempts : 0,
		bestScore: typeof bestScore === "number" ? bestScore : 0,
		cleared,
		correctCount,
		lastAt: typeof lastAt === "string" ? lastAt : "",
	};
}

export function loadProgress(): QuizProgress {
	if (!canUseStorage()) {
		return emptyProgress();
	}

	try {
		const raw = window.localStorage.getItem(PROGRESS_KEY);
		if (!raw) {
			return emptyProgress();
		}

		const parsed: unknown = JSON.parse(raw);
		if (!isRecord(parsed)) {
			return emptyProgress();
		}
		// Merge onto a fresh shape so older/partial records stay valid.
		// Legacy unlock/testout fields are dropped — every slice is always open.
		const progress = emptyProgress();
		progress.streak = parseStreak(parsed["streak"], progress.streak);
		const dailyDone = parsed["dailyDone"];
		progress.dailyDone = Array.isArray(dailyDone)
			? dailyDone.filter((day): day is string => typeof day === "string")
			: [];
		const achievements = parsed["achievements"];
		progress.achievements = isStringRecord(achievements) ? achievements : {};
		const questions: QuizProgress["questions"] = {};
		const rawQuestions = parsed["questions"];
		if (isRecord(rawQuestions)) {
			for (const [id, record] of Object.entries(rawQuestions)) {
				const parsedRecord = parseQuestionRecord(record);
				if (!parsedRecord) {
					continue;
				}
				questions[id] = parsedRecord;
			}
		}
		progress.questions = questions;
		return progress;
	} catch {
		return emptyProgress();
	}
}

export function saveProgress(progress: QuizProgress) {
	if (!canUseStorage()) {
		return;
	}

	window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function clearProgress() {
	if (!canUseStorage()) {
		return;
	}

	window.localStorage.removeItem(PROGRESS_KEY);
}
