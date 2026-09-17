import type { ReadingProgress } from "$lib/far/chapters/types";
import { READING_PROGRESS_KEY } from "$lib/far/constants";
import type { UnitId } from "$lib/far/types";
import { isUnitId } from "$lib/learn-routes";

export function emptyReadingProgress(): ReadingProgress {
	return { read: {} };
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

export function loadReadingProgress(): ReadingProgress {
	if (!canUseStorage()) {
		return emptyReadingProgress();
	}

	try {
		const raw = window.localStorage.getItem(READING_PROGRESS_KEY);
		if (!raw) {
			return emptyReadingProgress();
		}
		const parsed: unknown = JSON.parse(raw);
		if (!isRecord(parsed)) {
			return emptyReadingProgress();
		}
		const lastChapterId = parsed["lastChapterId"];
		const lastUnitId = parsed["lastUnitId"];
		return {
			read: isStringRecord(parsed["read"]) ? parsed["read"] : {},
			...(isUnitId(lastUnitId) ? { lastUnitId } : {}),
			...(typeof lastChapterId === "string" ? { lastChapterId } : {}),
		};
	} catch {
		return emptyReadingProgress();
	}
}

export function saveReadingProgress(progress: ReadingProgress) {
	if (!canUseStorage()) {
		return;
	}
	window.localStorage.setItem(READING_PROGRESS_KEY, JSON.stringify(progress));
}

export function clearReadingProgress() {
	if (!canUseStorage()) {
		return;
	}
	window.localStorage.removeItem(READING_PROGRESS_KEY);
}

export function markChapterRead(progress: ReadingProgress, chapterId: string): ReadingProgress {
	return {
		...progress,
		read: { ...progress.read, [chapterId]: new Date().toISOString() },
	};
}

export function rememberOpen(
	progress: ReadingProgress,
	unitId: UnitId,
	chapterId: string,
): ReadingProgress {
	return { ...progress, lastUnitId: unitId, lastChapterId: chapterId };
}
