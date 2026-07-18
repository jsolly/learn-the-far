import { SHELF_SCROLL_KEY_PREFIX } from "$lib/far/constants";
import type { UnitId } from "$lib/far/types";

function canUseSessionStorage() {
	return typeof window !== "undefined" && "sessionStorage" in window;
}

function keyFor(unitId: UnitId): string {
	return `${SHELF_SCROLL_KEY_PREFIX}${unitId}`;
}

/** Remember where the learner was on a unit shelf before opening a chapter. */
export function saveShelfScroll(unitId: UnitId, scrollY = window.scrollY) {
	if (!canUseSessionStorage()) return;
	try {
		const y = Math.max(0, Math.round(scrollY));
		window.sessionStorage.setItem(keyFor(unitId), String(y));
	} catch {
		// Ignore quota / private-mode failures.
	}
}

/** Peek at a saved shelf scroll without clearing it. */
export function peekShelfScroll(unitId: UnitId): number | null {
	if (!canUseSessionStorage()) return null;
	try {
		const raw = window.sessionStorage.getItem(keyFor(unitId));
		if (raw == null) return null;
		const y = Number(raw);
		return Number.isFinite(y) && y >= 0 ? y : null;
	} catch {
		return null;
	}
}

/** Clear a saved shelf scroll after a successful restore (or intentional discard). */
export function clearShelfScroll(unitId: UnitId) {
	if (!canUseSessionStorage()) return;
	try {
		window.sessionStorage.removeItem(keyFor(unitId));
	} catch {
		// Ignore.
	}
}

function frames(count: number): Promise<void> {
	return new Promise((resolve) => {
		const step = (n: number) => {
			if (n <= 0) {
				resolve();
				return;
			}
			requestAnimationFrame(() => step(n - 1));
		};
		step(count);
	});
}

/**
 * Restore the shelf viewport after returning from a chapter.
 * Prefers the saved window scroll; falls back to centering the chapter card.
 * Clears the saved scroll only after applying it so a premature layout pass
 * cannot wipe the value before the list has height.
 */
export async function restoreShelfViewport(
	unitId: UnitId,
	opts?: { focusChapterId?: string | null },
): Promise<void> {
	const savedY = peekShelfScroll(unitId);
	await frames(2);

	if (savedY != null) {
		window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
		// Second pass after late layout (fonts, wrapping) can still shift height.
		await frames(1);
		window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
		clearShelfScroll(unitId);
		return;
	}

	const chapterId = opts?.focusChapterId;
	if (!chapterId) return;
	const card = document.getElementById(`shelf-chapter-${chapterId}`);
	card?.scrollIntoView({ block: "center", behavior: "auto" });
}
