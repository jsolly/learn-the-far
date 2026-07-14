import type { UnitId } from "../types";

/** Short excerpt from a U.S. government work (public domain). */
export type PublicDomainQuote = {
	text: string;
	citation: string;
	sourceUrl: string;
};

/** Where a linked source sits on the authority ladder. */
export type SourceKind =
	| "controlling-authority"
	| "guidance"
	| "decision"
	| "capture-practice";

export type FurtherReading = {
	label: string;
	url: string;
	kind: SourceKind;
};

export type ChapterPiece = {
	id: string;
	title: string;
	/** Optional narrative lead-in before the definitional spine. */
	story?: string;
	is: string;
	isNot: string;
	fits: string;
	/** Optional judgment / field-use cue after the definitional triad. */
	judgment?: string;
	/** Short field checklist items. */
	checklist?: string[];
	quote?: PublicDomainQuote;
	/** Source link when there is no long public-domain excerpt. */
	citation?: string;
	sourceUrl?: string;
	sourceKind?: SourceKind;
};

export type ChapterQuizAction =
	| { kind: "quiz-chapter"; chapterId: string }
	| { kind: "testout" }
	| { kind: "quiz-unit"; unitId: UnitId }
	| { kind: "shelf"; unitId: UnitId }
	| { kind: "home" };

export type Chapter = {
	id: string;
	unitId: UnitId;
	title: string;
	subtitle: string;
	/** One-line shelf card promise. */
	summary: string;
	intro: string;
	tags: string[];
	readingMinutes: number;
	/** Suggested browse order within the unit shelf (1-based). */
	suggestedOrder: number;
	pieces: ChapterPiece[];
	closing: string;
	furtherReading?: FurtherReading[];
	quizCta: { label: string; action: ChapterQuizAction };
};

export type ChapterShelf = {
	unitId: UnitId;
	title: string;
	subtitle: string;
	intro: string;
	chapters: Chapter[];
};

export type ChapterKind = "shelf-chapter" | "miss-manuscript";

/** Persisted reading trail — never affects quiz mastery / pie fill. */
export type ReadingProgress = {
	/** chapterId -> ISO timestamp when marked read */
	read: Record<string, string>;
	/** Last opened shelf unit (for resume). */
	lastUnitId?: UnitId;
	/** Last opened chapter id. */
	lastChapterId?: string;
};
