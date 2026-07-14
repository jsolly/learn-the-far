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
	pieces: ChapterPiece[];
	closing?: string;
	furtherReading?: FurtherReading[];
	quizCta?: { label: string; action: ChapterQuizAction };
};

function defaultQuizCta(chapterId: string): { label: string; action: ChapterQuizAction } {
	return {
		label: "Check your knowledge",
		action: { kind: "quiz-chapter", chapterId },
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
		pieces: draft.pieces,
		closing:
			draft.closing ?? "Reading does not clear quiz progress.",
		furtherReading: draft.furtherReading,
		quizCta: draft.quizCta ?? defaultQuizCta(draft.id),
	};
}
