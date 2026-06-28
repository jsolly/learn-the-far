import type { Confidence } from "$lib/far/types";

const STORAGE_KEY = "learn-the-far:study-progress:v1";

export type StudyProgressRecord = {
	cardId: string;
	reviewCount: number;
	lastConfidence: Confidence;
	lastReviewedAt: string;
};

export type StudyProgress = Record<string, StudyProgressRecord>;

function canUseStorage() {
	return typeof window !== "undefined" && "localStorage" in window;
}

export function loadStudyProgress(): StudyProgress {
	if (!canUseStorage()) {
		return {};
	}

	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			return {};
		}

		const parsed = JSON.parse(raw) as StudyProgress;
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}

export function saveStudyProgress(progress: StudyProgress) {
	if (!canUseStorage()) {
		return;
	}

	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function clearStudyProgress() {
	if (!canUseStorage()) {
		return;
	}

	window.localStorage.removeItem(STORAGE_KEY);
}
