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

/**
 * Read and clear a saved shelf scroll for this unit.
 * One-shot so a later fresh visit to the shelf starts at the top.
 */
export function consumeShelfScroll(unitId: UnitId): number | null {
	if (!canUseSessionStorage()) return null;
	try {
		const storageKey = keyFor(unitId);
		const raw = window.sessionStorage.getItem(storageKey);
		window.sessionStorage.removeItem(storageKey);
		if (raw == null) return null;
		const y = Number(raw);
		return Number.isFinite(y) && y >= 0 ? y : null;
	} catch {
		return null;
	}
}
