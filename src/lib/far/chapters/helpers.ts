import type { UnitId } from "../types";
import type { Chapter, ChapterPiece, ChapterQuizAction, FurtherReading } from "./types";

type ChapterDraft = {
	id: string;
	unitId: UnitId;
	title: string;
	subtitle?: string;
	summary: string;
	intro: string;
	tags: string[];
	readingMinutes: number;
	suggestedOrder: number;
	startHere?: boolean;
	pieces: ChapterPiece[];
	closing?: string;
	furtherReading?: FurtherReading[];
	quizCta?: { label: string; action: ChapterQuizAction };
};

function defaultQuizCta(unitId: UnitId): { label: string; action: ChapterQuizAction } {
	if (unitId === "fundamentals") {
		return { label: "Check yourself — Quiz Basics", action: { kind: "quiz-fundamentals" } };
	}
	return {
		label: "Check yourself — take the quiz",
		action: { kind: "quiz-unit", unitId },
	};
}

/** Build a shelf chapter with shared defaults (closing, CTA, subtitle). */
export function chapter(draft: ChapterDraft): Chapter {
	return {
		id: draft.id,
		unitId: draft.unitId,
		title: draft.title,
		subtitle: draft.subtitle ?? "Desk reference",
		summary: draft.summary,
		intro: draft.intro,
		tags: draft.tags,
		readingMinutes: draft.readingMinutes,
		suggestedOrder: draft.suggestedOrder,
		startHere: draft.startHere,
		pieces: draft.pieces,
		closing:
			draft.closing ??
			"Reading does not clear quiz progress. When the picture feels steadier, check yourself — or return to the shelf for the next chapter.",
		furtherReading: draft.furtherReading,
		quizCta: draft.quizCta ?? defaultQuizCta(draft.unitId),
	};
}
