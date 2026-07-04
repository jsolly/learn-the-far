import { PROGRESS_KEY } from "$lib/far/constants";
import type { QuizProgress } from "./types";

export function emptyProgress(): QuizProgress {
	return {
		questions: {},
		streak: { current: 0, longest: 0, lastDay: "" },
		dailyDone: [],
		testedOut: false,
		achievements: {},
	};
}

function canUseStorage() {
	return typeof window !== "undefined" && "localStorage" in window;
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

		const parsed = JSON.parse(raw) as Partial<QuizProgress>;
		// Merge onto a fresh shape so older/partial records stay valid.
		return { ...emptyProgress(), ...parsed };
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
