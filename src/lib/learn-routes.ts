import { UNITS } from "$lib/far/deck";
import { chapterById, shelfForUnit } from "$lib/far/chapters";
import type { UnitId } from "$lib/far/types";

export const UNIT_IDS: UnitId[] = UNITS.map((u) => u.id);

export function isUnitId(value: string | null | undefined): value is UnitId {
	return Boolean(value && (UNIT_IDS as string[]).includes(value));
}

export function learnShelfPath(unitId: UnitId): string {
	return `/learn/${unitId}/`;
}

export function learnChapterPath(unitId: UnitId, chapterId: string): string {
	return `/learn/${unitId}/${chapterId}/`;
}

export type LearnRoute =
	| { kind: "home" }
	| { kind: "shelf"; unitId: UnitId }
	| { kind: "chapter"; unitId: UnitId; chapterId: string };

/** Parse a pathname into a learn route. Unknown paths are treated as home. */
export function parseLearnPath(pathname: string): LearnRoute {
	const clean = pathname.replace(/\/+$/, "") || "/";
	if (clean === "/") return { kind: "home" };

	const parts = clean.split("/").filter(Boolean);
	if (parts[0] !== "learn" || parts.length < 2 || parts.length > 3) {
		return { kind: "home" };
	}

	const unitId = parts[1];
	if (!isUnitId(unitId)) return { kind: "home" };

	if (parts.length === 2) {
		return { kind: "shelf", unitId };
	}

	const chapterId = parts[2];
	if (!chapterId) return { kind: "home" };
	const chapter = chapterById(chapterId);
	if (!chapter || chapter.unitId !== unitId) return { kind: "home" };
	return { kind: "chapter", unitId, chapterId };
}

export function learnShelfStaticPaths() {
	return UNIT_IDS.map((unit) => ({
		params: { unit },
	}));
}

export function learnChapterStaticPaths() {
	const paths: { params: { unit: UnitId; chapter: string } }[] = [];
	for (const unitId of UNIT_IDS) {
		for (const chapter of shelfForUnit(unitId).chapters) {
			paths.push({
				params: { unit: unitId, chapter: chapter.id },
			});
		}
	}
	return paths;
}
