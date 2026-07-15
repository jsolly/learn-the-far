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
	/** Expanded glossary-style definition — what the term is, then why it matters. */
	teach: string;
	/** Optional lookalike or common misunderstanding — only when it earns space. */
	watchFor?: string;
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
	/**
	 * Glossary jargon for shelf “Topics covered” pills (must resolve via resolveChapterTag).
	 * Prefer CHAPTER_QUESTION_IDS for end-of-chapter / miss→study linking — do not assume
	 * these strings match quiz question tags.
	 */
	tags: string[];
	readingMinutes: number;
	/** Suggested browse order within the unit shelf (1-based). */
	suggestedOrder: number;
	pieces: ChapterPiece[];
	/** Optional wrap-up line above the end-of-chapter CTAs. */
	closing?: string;
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
