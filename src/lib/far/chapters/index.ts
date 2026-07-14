import type { QuizQuestion, UnitId } from "../types";
import { chapter } from "./helpers";
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
		title: "Basics shelf",
		subtitle: "Desk reference for the knowledge floor",
		intro:
			"Browse freely. One chapter is marked Start here for newcomers; nothing is locked. Reading never clears the pie — quizzes remain how you prove it.",
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
			"Lawful early exchange, usable comments, and OCI hygiene — without taking the Government’s pen. Start here is optional guidance, not a gate.",
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
			"Post-award clocks move fast. Start here opens the three-day debrief window; earlier chapters cover solicitation defects you may already have missed.",
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
	return {
		id: q.id,
		title,
		story: q.situation,
		is: q.explanation,
		isNot: trapLine(q),
		fits: `This sits with ${q.tags.slice(0, 4).join(", ") || "the Basics map"} — use it when a prompt or real deal touches the same ideas.`,
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
			"This is not a review of wrong answers as punishment. It is the picture those questions were pointing at — what each idea is, what it is not, and where it fits — so the next quiz attempt has something to latch onto.",
		tags: ["repair", "misses"],
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
