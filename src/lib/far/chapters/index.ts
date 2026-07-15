import type { QuizQuestion, UnitId } from "../types";
import { QUESTIONS } from "../deck";
import { chapter } from "./helpers";
import { CHAPTER_QUESTION_IDS, META_CHAPTER_TAGS } from "./question-map";
import { BID_NO_BID_SHELF_CHAPTERS } from "./shelves/bid-no-bid";
import { FIND_SHELF_CHAPTERS } from "./shelves/find";
import { FUNDAMENTALS_SHELF_CHAPTERS } from "./shelves/fundamentals";
import { PROPOSE_SHELF_CHAPTERS } from "./shelves/propose";
import { SHAPE_SHELF_CHAPTERS } from "./shelves/shape";
import { TEAM_SHELF_CHAPTERS } from "./shelves/team";
import { VEHICLE_SHELF_CHAPTERS } from "./shelves/vehicle";
import { WIN_PROTEST_SHELF_CHAPTERS } from "./shelves/win-protest";
import type { Chapter, ChapterPiece, ChapterShelf } from "./types";

/** Compile-time complete: every UnitId must have a shelf chapter list. */
const SHELF_CHAPTERS: Record<UnitId, Chapter[]> = {
	fundamentals: FUNDAMENTALS_SHELF_CHAPTERS,
	find: FIND_SHELF_CHAPTERS,
	shape: SHAPE_SHELF_CHAPTERS,
	"bid-no-bid": BID_NO_BID_SHELF_CHAPTERS,
	vehicle: VEHICLE_SHELF_CHAPTERS,
	team: TEAM_SHELF_CHAPTERS,
	propose: PROPOSE_SHELF_CHAPTERS,
	"win-protest": WIN_PROTEST_SHELF_CHAPTERS,
};

const SHELF_META: Record<UnitId, { title: string; subtitle: string; intro: string }> = {
	fundamentals: {
		title: "Master the Basics",
		subtitle: "",
		intro: "",
	},
	find: {
		title: "Find shelf",
		subtitle: "From signal to investable opportunity",
		intro:
			"Classify leads, build a radar, and decide what evidence is strong enough to invest capture time. Suggested order is optional.",
	},
	shape: {
		title: "Shape shelf",
		subtitle: "From customer need to fair competition",
		intro:
			"Lawful early exchange, usable comments, and OCI hygiene — without taking the Government’s pen. Suggested order is guidance, not a gate.",
	},
	"bid-no-bid": {
		title: "Bid / No-Bid shelf",
		subtitle: "Investment decisions before B&P burns",
		intro:
			"Gates, offeror readiness, evidence-based Pwin, and the discipline to stop. Browse the chapter you need mid-decision.",
	},
	vehicle: {
		title: "Vehicle shelf",
		subtitle: "Buying paths, access, and order competition",
		intro:
			"Open market, Schedule, IDIQ, GWAC, BPA — classify the path before you chase a logo. Suggested order helps; free browsing is fine.",
	},
	team: {
		title: "Team shelf",
		subtitle: "Structures, workshare, and performance promises",
		intro:
			"Name the structure you built, screen eligibility, and keep workshare and past performance evaluatable. Jump to the chapter that matches the risk in front of you.",
	},
	propose: {
		title: "Propose shelf",
		subtitle: "From RFP decode to receipt and exchanges",
		intro:
			"Read L and M as one machine, control the draft, write evidence, and lock submission. Pull the chapter that matches where the proposal is right now.",
	},
	"win-protest": {
		title: "Win & Protest shelf",
		subtitle: "Notice, debrief, protest lanes, and corrective action",
		intro:
			"Post-award clocks move fast. The debrief chapter opens the three-day window; earlier chapters cover solicitation defects you may already have missed.",
	},
};

function sortShelf(chapters: Chapter[]): Chapter[] {
	return [...chapters].sort((a, b) => a.suggestedOrder - b.suggestedOrder);
}

export function shelfForUnit(unitId: UnitId): ChapterShelf {
	const meta = SHELF_META[unitId];
	return {
		unitId,
		title: meta.title,
		subtitle: meta.subtitle,
		intro: meta.intro,
		chapters: sortShelf(SHELF_CHAPTERS[unitId]),
	};
}

export function chapterById(chapterId: string): Chapter | undefined {
	for (const unitId of Object.keys(SHELF_CHAPTERS) as UnitId[]) {
		const found = SHELF_CHAPTERS[unitId].find((c) => c.id === chapterId);
		if (found) return found;
	}
	return undefined;
}

/** Next chapter on the same shelf in suggested order, or null at the end. */
export function nextChapterOnShelf(chapterId: string): Chapter | undefined {
	const current = chapterById(chapterId);
	if (!current) return undefined;
	const chapters = sortShelf(SHELF_CHAPTERS[current.unitId]);
	const index = chapters.findIndex((c) => c.id === chapterId);
	if (index < 0 || index >= chapters.length - 1) return undefined;
	return chapters[index + 1];
}

/** Questions for an end-of-chapter check — explicit map first, then same-unit tag overlap. */
export function questionsForChapter(chapterId: string): QuizQuestion[] {
	const mapped = CHAPTER_QUESTION_IDS[chapterId];
	if (mapped && mapped.length > 0) {
		const idSet = new Set(mapped);
		return QUESTIONS.filter((q) => idSet.has(q.id));
	}

	const chapter = chapterById(chapterId);
	if (!chapter) return [];

	const tags = chapter.tags
		.filter((t) => !META_CHAPTER_TAGS.has(t))
		.map((t) => t.toLowerCase());
	if (tags.length === 0) return [];

	return QUESTIONS.filter(
		(q) =>
			q.unitId === chapter.unitId &&
			q.tags.some((t) => tags.includes(t.toLowerCase())),
	);
}

/** Study chapters that cover a quiz question (for miss → study links). */
export function chaptersForQuestion(questionId: string): Chapter[] {
	const mappedIds: string[] = [];
	for (const [chapterId, questionIds] of Object.entries(CHAPTER_QUESTION_IDS)) {
		if (questionIds.includes(questionId)) mappedIds.push(chapterId);
	}
	if (mappedIds.length > 0) {
		return mappedIds
			.map((id) => chapterById(id))
			.filter((c): c is Chapter => Boolean(c));
	}

	const question = QUESTIONS.find((q) => q.id === questionId);
	if (!question) return [];

	const qTags = question.tags.map((t) => t.toLowerCase());
	const shelf = sortShelf(SHELF_CHAPTERS[question.unitId] ?? []);
	return shelf.filter((chapter) => {
		const tags = chapter.tags
			.filter((t) => !META_CHAPTER_TAGS.has(t))
			.map((t) => t.toLowerCase());
		return tags.some((t) => qTags.includes(t));
	});
}

function trapLine(q: QuizQuestion): string {
	const traps = q.options
		.filter((o) => o.correct !== true && o.tier !== "best")
		.map((o) => o.text)
		.slice(0, 2);
	if (traps.length === 0) {
		return "The near-miss answers on the quiz usually confuse adjacent roles, documents, or timing — re-read the explanation with those lookalikes in mind.";
	}
	return `Common near-misses look like: ${traps.join(" · ")}`;
}

function pieceFromQuestion(q: QuizQuestion): ChapterPiece {
	const title =
		q.citation.trim() ||
		q.tags[0]?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
		"Concept";
	const tagsHint = q.tags.slice(0, 4).join(", ");
	return {
		id: q.id,
		title,
		teach: tagsHint
			? `${q.explanation} You’ll meet this idea again under tags like ${tagsHint}.`
			: q.explanation,
		watchFor: trapLine(q),
		citation: q.citation || undefined,
		sourceUrl: q.sourceUrl || undefined,
		sourceKind: "controlling-authority",
	};
}

/** Shame-free repair article built from shaky / missed questions. */
export function buildMissManuscript(questions: QuizQuestion[]): Chapter {
	const pieces = questions.map(pieceFromQuestion);
	const firstUnit = questions[0]?.unitId ?? "fundamentals";
	return chapter({
		id: "miss-manuscript",
		unitId: firstUnit,
		title: "Here’s the missing picture",
		subtitle: "A short briefing on what hasn’t clicked yet",
		summary: "Shame-free repair reading for concepts that are still shaky on the quiz.",
		intro:
			"This is not a review of wrong answers as punishment. It is a short teach-up of the concepts those questions were testing — plus the mix-ups that usually trip people — so the next quiz attempt has something solid to latch onto.",
		tags: [],
		readingMinutes: Math.max(5, pieces.length * 2),
		suggestedOrder: 0,
		pieces,
		closing:
			"When the picture feels steadier, check yourself again — or return to the shelf for the wider map.",
		quizCta: {
			label: "Check yourself — take the Basics test",
			action: { kind: "testout" },
		},
	});
}
