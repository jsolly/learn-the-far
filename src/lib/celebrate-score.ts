import type { Options as ConfettiOptions } from "canvas-confetti";

const HIGH_SCORE_THRESHOLD = 90;

/** Green / gold / teal — celebration without the usual purple glow palette. */
const CONFETTI_COLORS = ["#16a34a", "#22c55e", "#eab308", "#0f766e", "#f97316", "#fafafa"];

const celebratedSummaries = new WeakSet<object>();

export function shouldCelebrateScore(scorePct: number): boolean {
	return scorePct >= HIGH_SCORE_THRESHOLD;
}

export function prefersReducedMotion(): boolean {
	if (typeof window === "undefined" || !("matchMedia" in window)) return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Fire a short burst for a high quiz score. No-ops when motion is reduced. */
export async function celebrateHighScore(): Promise<void> {
	if (prefersReducedMotion()) return;

	const { default: confetti } = await import("canvas-confetti");
	const base: ConfettiOptions = {
		colors: CONFETTI_COLORS,
		disableForReducedMotion: true,
		zIndex: 80,
	};

	confetti({
		...base,
		particleCount: 110,
		spread: 78,
		startVelocity: 42,
		origin: { y: 0.62 },
	});

	window.setTimeout(() => {
		confetti({
			...base,
			particleCount: 55,
			spread: 100,
			startVelocity: 28,
			origin: { y: 0.7 },
			scalar: 0.9,
		});
	}, 180);
}

/** Once per summary object — safe if the summary view effect re-runs. */
export async function celebrateHighScoreOnce(summary: object, scorePct: number): Promise<void> {
	if (!shouldCelebrateScore(scorePct)) return;
	if (celebratedSummaries.has(summary)) return;
	celebratedSummaries.add(summary);
	await celebrateHighScore();
}
