import { QUIZ_SOUND_MUTED_KEY } from "$lib/far/constants";

export type FeedbackSound = "correct" | "incorrect" | "session-complete";

const SOUND_URLS: Record<FeedbackSound, string> = {
	correct: "/sounds/correct.mp3",
	incorrect: "/sounds/incorrect.mp3",
	"session-complete": "/sounds/session-complete.mp3",
};

function canUseStorage() {
	return typeof window !== "undefined" && "localStorage" in window;
}

function loadMuted(): boolean {
	if (!canUseStorage()) return false;
	try {
		return window.localStorage.getItem(QUIZ_SOUND_MUTED_KEY) === "1";
	} catch {
		return false;
	}
}

function persistMuted(value: boolean) {
	if (!canUseStorage()) return;
	try {
		window.localStorage.setItem(QUIZ_SOUND_MUTED_KEY, value ? "1" : "0");
	} catch {
		// Ignore quota / private-mode failures; in-memory toggle still works.
	}
}

/** Shared mute preference — sound on by default. */
let muted = $state(loadMuted());

const players = new Map<FeedbackSound, HTMLAudioElement>();

function getPlayer(kind: FeedbackSound): HTMLAudioElement | null {
	if (typeof Audio === "undefined") return null;
	let player = players.get(kind);
	if (!player) {
		player = new Audio(SOUND_URLS[kind]);
		player.preload = "auto";
		players.set(kind, player);
	}
	return player;
}

export function isSoundMuted(): boolean {
	return muted;
}

export function setSoundMuted(value: boolean) {
	muted = value;
	persistMuted(value);
}

export function toggleSoundMuted(): boolean {
	setSoundMuted(!muted);
	return muted;
}

/**
 * Play a quiz feedback sting. Safe to call from click handlers (user gesture
 * unlocks audio). No-ops when muted or when Audio is unavailable (SSR).
 */
export function playFeedbackSound(kind: FeedbackSound) {
	if (muted) return;
	const player = getPlayer(kind);
	if (!player) return;
	try {
		player.pause();
		player.currentTime = 0;
		void player.play().catch(() => {
			// Autoplay / missing file — ignore; UI feedback still works.
		});
	} catch {
		// Ignore decode / play failures.
	}
}
