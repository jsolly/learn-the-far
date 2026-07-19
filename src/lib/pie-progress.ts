/**
 * Mastery-wheel math.
 *
 * The hub "% captured" is cleared questions / all questions.
 * Slice angles are weighted by each unit's question count so filled area
 * matches that same ratio (equal wedges would over/under-state units with
 * different deck sizes — Basics has ~2× the questions of other slices).
 */

export type ProgressSlice = {
	cleared: number;
	total: number;
	/** 0..1 cleared/total — used for radial fill height. */
	ratio: number;
	masteredRatio: number;
	learningRatio: number;
};

/** Overall hub percent (0–100), rounded. */
export function hubCapturedPercent(slices: readonly ProgressSlice[]): number {
	let cleared = 0;
	let total = 0;
	for (const slice of slices) {
		cleared += slice.cleared;
		total += slice.total;
	}
	if (total === 0) return 0;
	return Math.round((cleared / total) * 100);
}

/** ECharts pie `value` — angle share proportional to question count. */
export function sliceAngleValue(total: number): number {
	return Math.max(total, 1);
}

/**
 * Exact (unrounded) fraction of the wheel's area that should appear filled
 * when each slice's radial fill height is `ratio` and angles are weighted
 * by `total`. Equals cleared/total when ratio === cleared/total per slice.
 */
export function weightedCapturedRatio(slices: readonly ProgressSlice[]): number {
	let cleared = 0;
	let total = 0;
	for (const slice of slices) {
		cleared += slice.total * clamp01(slice.ratio);
		total += slice.total;
	}
	if (total === 0) return 0;
	return cleared / total;
}

/**
 * Captured ratio from mastered + learning layers (radial fill).
 * Should match `ratio` (cleared/total) for normal progress records.
 */
export function capturedFillRatio(slice: ProgressSlice): number {
	return clamp01(slice.masteredRatio + slice.learningRatio);
}

function clamp01(n: number): number {
	return Math.min(1, Math.max(0, n));
}
