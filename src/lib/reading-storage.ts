import { READING_PROGRESS_KEY } from "$lib/far/constants";
import type { ReadingProgress } from "$lib/far/chapters/types";
import type { UnitId } from "$lib/far/types";

export function emptyReadingProgress(): ReadingProgress {
	return { read: {} };
}

function canUseStorage() {
	return typeof window !== "undefined" && "localStorage" in window;
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
		const parsed = JSON.parse(raw) as Partial<ReadingProgress>;
		return {
			read: parsed.read && typeof parsed.read === "object" ? parsed.read : {},
			lastUnitId: parsed.lastUnitId,
			lastChapterId: parsed.lastChapterId,
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
