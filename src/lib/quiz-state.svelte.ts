import type {
	AnswerOutcome,
	Difficulty,
	LifecycleUnit,
	QuizOption,
	QuizQuestion,
	UnitId,
} from "$lib/far/types";
import { QUESTIONS, UNITS } from "$lib/far/deck";
import {
	CLEAR_THRESHOLD,
	CHAPTER_SESSION_LENGTH,
	DAILY_LENGTH,
	DIFFICULTY_ORDER,
	LEVELS,
	type LevelId,
	MASTERED_CORRECT_COUNT,
	pickSummaryHeadline,
	SESSION_LENGTH,
	STREAK_MILESTONES,
	TIER_SCORE,
	TIER_UNLOCK_RATIO,
} from "$lib/far/constants";
import { clearProgress, emptyProgress, loadProgress, saveProgress } from "$lib/local-storage";
import {
	clearReadingProgress,
	emptyReadingProgress,
	loadReadingProgress,
	markChapterRead,
	rememberOpen,
	saveReadingProgress,
} from "$lib/reading-storage";
import { buildMissManuscript, chapterById, questionsForChapter, shelfForUnit } from "$lib/far/chapters";
import type {
	Chapter,
	ChapterKind,
	ChapterQuizAction,
	ChapterShelf,
	ReadingProgress,
} from "$lib/far/chapters/types";
import {
	isUnitId,
	learnChapterPath,
	learnShelfPath,
	parseLearnPath,
	type LearnRoute,
} from "$lib/learn-routes";
import { hubCapturedPercent } from "$lib/pie-progress";
import type {
	QuestionRecord,
	QuizProgress,
	SessionMode,
	SessionSummary,
	UnitStats,
	View,
} from "$lib/types";
import { SvelteDate, SvelteMap, SvelteSet } from "svelte/reactivity";

// ---- date + rng helpers (browser-only; no workflow constraints here) ----

// Day boundaries use the learner's LOCAL calendar date, not UTC — otherwise a
// US-evening session crossing UTC midnight would double-count the streak and
// reset the once-per-day daily gate mid-evening.
function localDay(d: Date): string {
	const y = d.getFullYear();
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

function today(): string {
	return localDay(new Date());
}

function isYesterday(prevDay: string, ref: string): boolean {
	// Parse ref at local noon so the -1 day step can't be swallowed by a DST shift.
	const d = new SvelteDate(`${ref}T12:00:00`);
	d.setDate(d.getDate() - 1);
	return localDay(d) === prevDay;
}

function hashSeed(text: string): number {
	let h = 2166136261;
	for (let i = 0; i < text.length; i++) {
		h ^= text.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

function mulberry32(seed: number): () => number {
	let a = seed;
	return () => {
		a |= 0;
		a = (a + 0x6d2b79f5) | 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
	const out = [...items];
	for (let i = out.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[out[i], out[j]] = [out[j] as T, out[i] as T];
	}
	return out;
}

function levelFor(ratio: number): LevelId {
	let level: LevelId = "new";
	for (const entry of LEVELS) {
		if (ratio >= entry.min) {
			level = entry.id;
		}
	}
	return level;
}

export class QuizGame {
	progress = $state<QuizProgress>(emptyProgress());
	view = $state<View>("home");

	// active session
	mode = $state<SessionMode>("unit");
	activeUnit = $state<UnitId | null>(null);
	/** Source chapter for end-of-chapter quizzes (cleared for other session modes). */
	activeChapterId = $state<string | null>(null);
	queue = $state<string[]>([]);
	outcomes = $state<AnswerOutcome[]>([]);
	requeued = new SvelteSet<string>();

	/** Long-form chapter reading (shelf chapter / miss manuscript). */
	chapter = $state<Chapter | null>(null);
	chapterKind = $state<ChapterKind | null>(null);
	/** Unit reference shelf (multi-chapter hub). */
	shelf = $state<ChapterShelf | null>(null);
	reading = $state<ReadingProgress>(emptyReadingProgress());
	/**
	 * One-shot: after Back to chapters, ShelfView scrolls this chapter into view
	 * when no saved window scroll position is available.
	 */
	pendingShelfFocusChapterId = $state<string | null>(null);

	// current question interaction
	answeredOptionId = $state<string | null>(null);
	/** Shuffled option order for the current question; stable until the next question. */
	displayedOptions = $state<QuizOption[]>([]);

	summary = $state<SessionSummary | null>(null);

	private historyBound = false;

	constructor() {
		this.progress = loadProgress();
		this.reading = loadReadingProgress();
	}

	/**
	 * Hydrate from Astro props and/or the current pathname; bind back/forward.
	 * Must run during SSG/SSR too — otherwise every prerendered HTML page is the
	 * home shell and crawlers never see shelf/chapter links or body copy.
	 * SSG uses hydrate-only APIs so reading/progress side effects do not leak
	 * across prerendered pages via the module singleton.
	 */
	bootFromLocation(opts?: {
		initialUnit?: string | null;
		initialChapter?: string | null;
	}) {
		const fromPath =
			typeof window !== "undefined" ? parseLearnPath(window.location.pathname) : null;
		const onClient = typeof window !== "undefined";

		if (fromPath && (fromPath.kind === "shelf" || fromPath.kind === "chapter")) {
			if (onClient) this.applyLearnRoute(fromPath, { syncUrl: false });
			else this.hydrateLearnRoute(fromPath);
		} else if (opts?.initialChapter && isUnitId(opts.initialUnit)) {
			const route = {
				kind: "chapter" as const,
				unitId: opts.initialUnit,
				chapterId: opts.initialChapter,
			};
			if (onClient) this.applyLearnRoute(route, { syncUrl: false });
			else this.hydrateLearnRoute(route);
		} else if (isUnitId(opts?.initialUnit)) {
			const route = { kind: "shelf" as const, unitId: opts.initialUnit };
			if (onClient) this.applyLearnRoute(route, { syncUrl: false });
			else this.hydrateLearnRoute(route);
		} else if (onClient) {
			this.goHome({ syncUrl: false });
		} else {
			this.clearLearnSurface();
		}

		if (onClient && !this.historyBound) {
			this.historyBound = true;
			window.addEventListener("popstate", () => {
				const route = parseLearnPath(window.location.pathname);
				if (route.kind === "home") {
					this.goHome({ syncUrl: false });
					return;
				}
				this.applyLearnRoute(route, { syncUrl: false });
			});
		}
	}

	/** SSG/SSR-only: set the visible learn surface without writing progress. */
	private hydrateLearnRoute(route: Exclude<LearnRoute, { kind: "home" }>) {
		this.clearLearnSurface();

		if (route.kind === "shelf") {
			this.shelf = shelfForUnit(route.unitId);
			this.view = "shelf";
			return;
		}

		const found = chapterById(route.chapterId);
		if (!found || found.unitId !== route.unitId) {
			this.clearLearnSurface();
			return;
		}
		this.chapter = found;
		this.chapterKind = "shelf-chapter";
		this.view = "chapter";
	}

	/** Reset ephemeral learn UI without unlock/save side effects (SSG-safe). */
	private clearLearnSurface() {
		this.queue = [];
		this.outcomes = [];
		this.requeued = new SvelteSet();
		this.answeredOptionId = null;
		this.displayedOptions = [];
		this.summary = null;
		this.chapter = null;
		this.chapterKind = null;
		this.shelf = null;
		this.view = "home";
	}

	/** Open a shelf/chapter from a URL. */
	applyLearnRoute(
		route: Exclude<LearnRoute, { kind: "home" }>,
		opts?: { syncUrl?: boolean },
	) {
		this.queue = [];
		this.outcomes = [];
		this.requeued = new SvelteSet();
		this.answeredOptionId = null;
		this.displayedOptions = [];
		this.summary = null;
		this.activeChapterId = null;

		if (route.kind === "shelf") {
			this.shelf = shelfForUnit(route.unitId);
			this.chapter = null;
			this.chapterKind = null;
			this.view = "shelf";
			this.reading = { ...this.reading, lastUnitId: route.unitId };
			saveReadingProgress(this.reading);
		} else {
			const found = chapterById(route.chapterId);
			if (!found || found.unitId !== route.unitId) {
				this.goHome({ syncUrl: opts?.syncUrl !== false });
				return;
			}
			this.openChapter(found, "shelf-chapter");
		}

		if (opts?.syncUrl !== false) {
			this.syncLearnUrl();
		}
	}

	private syncLearnUrl(opts?: { replace?: boolean }) {
		if (typeof window === "undefined") return;

		// Ephemeral views keep the current address bar (usually the chapter/shelf).
		if (
			this.view === "session" ||
			this.view === "summary" ||
			this.view === "glossary" ||
			(this.view === "chapter" && this.chapterKind === "miss-manuscript")
		) {
			return;
		}

		let path = "/";
		let title = "Learn The FAR — federal contracting, one scenario at a time";
		if (this.view === "shelf" && this.shelf) {
			path = learnShelfPath(this.shelf.unitId);
			title = `${this.shelf.title} — Learn The FAR`;
		} else if (
			this.view === "chapter" &&
			this.chapter &&
			this.chapterKind === "shelf-chapter"
		) {
			path = learnChapterPath(this.chapter.unitId, this.chapter.id);
			title = `${this.chapter.title} — Learn The FAR`;
		}

		if (window.location.pathname !== path) {
			if (opts?.replace) {
				history.replaceState({ learn: true }, "", path);
			} else {
				history.pushState({ learn: true }, "", path);
			}
		}
		if (document.title !== title) {
			document.title = title;
		}
	}

	private questionsIn(unitId: UnitId): QuizQuestion[] {
		return QUESTIONS.filter((q) => q.unitId === unitId);
	}

	private recordFor(id: string): QuestionRecord | undefined {
		return this.progress.questions[id];
	}

	private isCleared(id: string): boolean {
		return this.recordFor(id)?.cleared ?? false;
	}

	/** How many times this question has been cleared. */
	private timesCorrect(id: string): number {
		return this.recordFor(id)?.correctCount ?? 0;
	}

	private isMastered(id: string): boolean {
		return this.timesCorrect(id) >= MASTERED_CORRECT_COUNT;
	}

	private isLearning(id: string): boolean {
		const n = this.timesCorrect(id);
		return n > 0 && n < MASTERED_CORRECT_COUNT;
	}

	// ---- derived stats for the pie + home ----

	unitStats(unitId: UnitId): UnitStats {
		const unit = UNITS.find((u) => u.id === unitId) as LifecycleUnit;
		const qs = this.questionsIn(unitId);
		const total = qs.length;
		const cleared = qs.filter((q) => this.isCleared(q.id)).length;
		const mastered = qs.filter((q) => this.isMastered(q.id)).length;
		const learning = qs.filter((q) => this.isLearning(q.id)).length;
		const ratio = total === 0 ? 0 : cleared / total;
		const masteredRatio = total === 0 ? 0 : mastered / total;
		const learningRatio = total === 0 ? 0 : learning / total;
		const level = levelFor(ratio);
		const levelLabel = LEVELS.find((l) => l.id === level)?.label ?? "New";
		return {
			unit,
			total,
			cleared,
			mastered,
			learning,
			ratio,
			masteredRatio,
			learningRatio,
			level,
			levelLabel,
		};
	}

	get allStats(): UnitStats[] {
		return UNITS.map((u) => this.unitStats(u.id));
	}

	get masteryPercent(): number {
		// Same cleared/total as the pie hub — weighted by each unit's deck size.
		return hubCapturedPercent(this.allStats);
	}

	/** Whether the learner has any persisted progress worth resetting. */
	get hasProgress(): boolean {
		const { questions, dailyDone, achievements, streak } = this.progress;
		return (
			Object.keys(questions ?? {}).length > 0 ||
			(dailyDone?.length ?? 0) > 0 ||
			Object.keys(achievements ?? {}).length > 0 ||
			Boolean(streak?.current || streak?.longest || streak?.lastDay) ||
			Object.keys(this.reading.read).length > 0
		);
	}

	get shakyQuestions(): QuizQuestion[] {
		return QUESTIONS.filter((q) => {
			const r = this.recordFor(q.id);
			return !!r && !r.cleared;
		});
	}

	get streak() {
		return this.progress.streak;
	}

	get dailyDoneToday(): boolean {
		return this.progress.dailyDone.includes(today());
	}

	// Fundamentals and Core are open from the start (so no unit ever serves a
	// thin one-question session); Advanced unlocks once most of this unit's Core
	// is cleared. Difficulty still ramps because sessions lead with the easiest
	// uncleared tier — see startUnit and workingTier.
	unlockedTiers(unitId: UnitId): Set<Difficulty> {
		const unlocked = new SvelteSet<Difficulty>(["fundamentals", "core"]);
		const core = this.questionsIn(unitId).filter((q) => q.difficulty === "core");
		if (core.length === 0) return unlocked;
		const clearedCore = core.filter((q) => this.isCleared(q.id)).length;
		if (clearedCore / core.length >= TIER_UNLOCK_RATIO) unlocked.add("advanced");
		return unlocked;
	}

	// The tier the learner is currently working through: the lowest unlocked tier
	// with an uncleared question, else the highest unlocked (unit is caught up).
	workingTier(unitId: UnitId): Difficulty {
		const unlocked = this.unlockedTiers(unitId);
		const qs = this.questionsIn(unitId);
		for (const tier of DIFFICULTY_ORDER) {
			if (!unlocked.has(tier)) continue;
			if (qs.some((q) => q.difficulty === tier && !this.isCleared(q.id))) return tier;
		}
		const ordered = DIFFICULTY_ORDER.filter((t) => unlocked.has(t));
		return ordered[ordered.length - 1] ?? "fundamentals";
	}

	// ---- session lifecycle ----

	startUnit(unitId: UnitId) {
		const unlocked = this.unlockedTiers(unitId);
		const qs = this.questionsIn(unitId).filter((q) => unlocked.has(q.difficulty));
		// uncleared first, ordered by difficulty ramp; fall back to a review shuffle
		const byRamp = (a: QuizQuestion, b: QuizQuestion) =>
			DIFFICULTY_ORDER.indexOf(a.difficulty) - DIFFICULTY_ORDER.indexOf(b.difficulty);
		const fresh = qs.filter((q) => !this.isCleared(q.id)).sort(byRamp);
		const review = shuffle(qs.filter((q) => this.isCleared(q.id)));
		const ordered = [...fresh, ...review].slice(0, SESSION_LENGTH);
		this.beginSession("unit", unitId, ordered.length ? ordered : shuffle(qs).slice(0, SESSION_LENGTH));
	}

	/** End-of-chapter check — only questions mapped (or tagged) to that chapter. */
	startChapterQuiz(chapterId: string) {
		const chapter = chapterById(chapterId);
		if (!chapter) return;
		const pool = questionsForChapter(chapterId);
		if (pool.length === 0) return;
		const fresh = shuffle(pool.filter((q) => !this.isCleared(q.id)));
		const review = shuffle(pool.filter((q) => this.isCleared(q.id)));
		const ordered = [...fresh, ...review].slice(0, CHAPTER_SESSION_LENGTH);
		this.beginSession("chapter", chapter.unitId, ordered, { chapterId });
	}

	startDaily() {
		const rng = mulberry32(hashSeed(`daily-${today()}`));
		const picks = shuffle(QUESTIONS, rng).slice(0, DAILY_LENGTH);
		this.beginSession("daily", null, picks);
	}

	private openChapter(chapter: Chapter, kind: ChapterKind, opts?: { recordRead?: boolean }) {
		this.chapter = chapter;
		this.chapterKind = kind;
		this.shelf = null;
		this.summary = null;
		this.view = "chapter";
		const recordRead = opts?.recordRead !== false;
		if (kind === "shelf-chapter" && recordRead) {
			this.reading = markChapterRead(
				rememberOpen(this.reading, chapter.unitId, chapter.id),
				chapter.id,
			);
			saveReadingProgress(this.reading);
		}
	}

	openShelf(unitId: UnitId, opts?: { focusChapterId?: string }) {
		this.shelf = shelfForUnit(unitId);
		this.chapter = null;
		this.chapterKind = null;
		this.summary = null;
		this.activeChapterId = null;
		this.pendingShelfFocusChapterId = opts?.focusChapterId ?? null;
		this.view = "shelf";
		this.reading = { ...this.reading, lastUnitId: unitId };
		saveReadingProgress(this.reading);
		this.syncLearnUrl();
	}

	isChapterRead(chapterId: string): boolean {
		return Boolean(this.reading.read[chapterId]);
	}

	/** Shame-free manuscript of quiz misses (no progress writes). */
	startStudyMisses() {
		const misses = this.shakyQuestions;
		if (misses.length === 0) return;
		const chapter = buildMissManuscript(shuffle(misses).slice(0, SESSION_LENGTH));
		chapter.quizCta = {
			label: "Back to home",
			action: { kind: "home" },
		};
		this.openChapter(chapter, "miss-manuscript");
	}

	runChapterQuizAction(action: ChapterQuizAction) {
		switch (action.kind) {
			case "quiz-chapter":
				this.startChapterQuiz(action.chapterId);
				return;
			case "quiz-unit":
				this.startUnit(action.unitId);
				return;
			case "shelf":
				this.openShelf(action.unitId);
				return;
			case "home":
				this.goHome();
		}
	}

	private beginSession(
		mode: SessionMode,
		unitId: UnitId | null,
		questions: QuizQuestion[],
		opts?: { chapterId?: string },
	) {
		this.mode = mode;
		this.activeUnit = unitId;
		this.activeChapterId = opts?.chapterId ?? null;
		this.queue = questions.map((q) => q.id);
		this.outcomes = [];
		this.requeued = new SvelteSet();
		this.answeredOptionId = null;
		this.summary = null;
		this.chapter = null;
		this.chapterKind = null;
		this.shelf = null;
		this.view = questions.length > 0 ? "session" : "home";
		this.syncDisplayedOptions();
	}

	private syncDisplayedOptions() {
		const q = this.currentQuestion;
		this.displayedOptions = q ? shuffle(q.options) : [];
	}

	get currentQuestion(): QuizQuestion | undefined {
		const id = this.queue[0];
		return id ? QUESTIONS.find((q) => q.id === id) : undefined;
	}

	get isAnswered(): boolean {
		return this.answeredOptionId !== null;
	}

	get progressCount(): { done: number; total: number } {
		// The current question sits at queue[0] even after it's answered, so once
		// answered it must not be double-counted as "remaining". A wrong answer
		// in a normal quiz that requeues legitimately grows the total by one.
		const remaining = this.queue.length - (this.isAnswered ? 1 : 0);
		return { done: this.outcomes.length, total: this.outcomes.length + remaining };
	}

	// True when advancing past the current (answered) question ends the session:
	// it's the last queued item AND it won't be requeued for a miss. Drives the
	// Continue/Finish label so "Finish" never lies on a wrong final answer.
	get willFinishAfterNext(): boolean {
		if (this.queue.length > 1) return false;
		const q = this.currentQuestion;
		const last = this.outcomes[this.outcomes.length - 1];
		const willRequeue = !!q && !!last && !last.cleared && !this.requeued.has(q.id);
		return !willRequeue;
	}

	private scoreQuestion(q: QuizQuestion, optionId: string): number {
		const option = q.options.find((o) => o.id === optionId);
		if (!option) return 0;
		if (q.scoring === "tiered" || q.scoring === "reveal-tradeoff") {
			return option.tier ? TIER_SCORE[option.tier] : 0;
		}
		return option.correct ? 1 : 0;
	}

	private persistOutcome(outcome: AnswerOutcome) {
		const prev = this.progress.questions[outcome.questionId];
		this.progress.questions[outcome.questionId] = {
			attempts: (prev?.attempts ?? 0) + 1,
			bestScore: Math.max(prev?.bestScore ?? 0, outcome.score),
			cleared: (prev?.cleared ?? false) || outcome.cleared,
			correctCount: (prev?.correctCount ?? 0) + (outcome.cleared ? 1 : 0),
			lastAt: new SvelteDate().toISOString(),
		};
	}

	answer(optionId: string) {
		const q = this.currentQuestion;
		if (!q || this.isAnswered) return;

		const score = this.scoreQuestion(q, optionId);
		const cleared = score >= CLEAR_THRESHOLD;
		this.answeredOptionId = optionId;

		const outcome: AnswerOutcome = {
			questionId: q.id,
			optionId,
			score,
			cleared,
		};
		this.outcomes = [...this.outcomes, outcome];
		this.persistOutcome(outcome);
		saveProgress(this.progress);
	}

	next() {
		const q = this.currentQuestion;
		if (!q) return;

		// Clear answer chrome before advancing the queue so the next question
		// never paints one frame as already-answered (shared a/b/c/d option ids
		// would otherwise flash the new correct option green).
		this.answeredOptionId = null;

		const last = this.outcomes[this.outcomes.length - 1];
		this.queue = this.queue.slice(1);

		// wrong-answer jail: requeue a missed question once, near the end.
		if (last && !last.cleared && !this.requeued.has(q.id)) {
			this.requeued.add(q.id);
			this.queue = [...this.queue, q.id];
		}

		if (this.queue.length === 0) {
			this.displayedOptions = [];
			this.finishSession();
		} else {
			this.syncDisplayedOptions();
		}
	}

	private grant(id: string, into: string[]) {
		if (!this.progress.achievements[id]) {
			this.progress.achievements[id] = new SvelteDate().toISOString();
			into.push(id);
		}
	}

	private finishSession() {
		const newAchievements: string[] = [];
		const unit = this.activeUnit ? UNITS.find((u) => u.id === this.activeUnit) : undefined;

		// Keep the best outcome per question. Normal quizzes can requeue a miss.
		const bestByQuestion = new SvelteMap<string, AnswerOutcome>();
		for (const o of this.outcomes) {
			const prior = bestByQuestion.get(o.questionId);
			if (!prior || o.score > prior.score) bestByQuestion.set(o.questionId, o);
		}
		const uniqueOutcomes = [...bestByQuestion.values()];
		const answered = uniqueOutcomes.length;
		const scoreSum = uniqueOutcomes.reduce((sum, o) => sum + o.score, 0);
		const scorePct = answered === 0 ? 0 : Math.round((scoreSum / answered) * 100);
		const perfect = answered > 0 && uniqueOutcomes.every((o) => o.score >= 0.999);

		// streak: any completed quiz session marks today active
		this.markActive();

		if (this.mode === "daily" && !this.progress.dailyDone.includes(today())) {
			this.progress.dailyDone = [...this.progress.dailyDone, today()];
		}

		if (perfect) this.grant("flawless", newAchievements);
		this.deriveAchievements(newAchievements);
		saveProgress(this.progress);

		const chapter =
			this.mode === "chapter" && this.activeChapterId
				? chapterById(this.activeChapterId)
				: undefined;

		this.summary = {
			mode: this.mode,
			unit: unit ?? undefined,
			chapterId: chapter?.id,
			chapterTitle: chapter?.title,
			answered,
			scoreSum,
			scorePct,
			perfect,
			headline: pickSummaryHeadline(scorePct),
			newAchievements,
		};
		this.view = "summary";
	}

	/** Leave a quiz session — chapter quizzes return to the chapter page. */
	exitSession() {
		if (this.mode === "chapter" && this.activeChapterId) {
			this.returnToChapter(this.activeChapterId);
			return;
		}
		this.goHome();
	}

	/** Re-open a shelf chapter after an end-of-chapter quiz (or exit). */
	returnToChapter(chapterId: string) {
		const chapter = chapterById(chapterId);
		if (!chapter) {
			this.goHome();
			return;
		}
		this.queue = [];
		this.outcomes = [];
		this.requeued = new SvelteSet();
		this.answeredOptionId = null;
		this.displayedOptions = [];
		this.summary = null;
		this.activeChapterId = null;
		this.openChapter(chapter, "shelf-chapter");
		this.syncLearnUrl({ replace: true });
	}

	private markActive() {
		const t = today();
		const s = this.progress.streak;
		if (s.lastDay === t) return;
		if (s.lastDay && isYesterday(s.lastDay, t)) {
			s.current += 1;
		} else {
			s.current = 1;
		}
		s.lastDay = t;
		s.longest = Math.max(s.longest, s.current);
	}

	private deriveAchievements(into: string[]) {
		const anyCleared = Object.values(this.progress.questions).some(
			(r: QuestionRecord) => r.cleared,
		);
		if (anyCleared) this.grant("first-clear", into);

		for (const m of STREAK_MILESTONES) {
			if (this.progress.streak.current >= m) this.grant(`streak-${m}`, into);
		}

		const dailies = this.progress.dailyDone.length;
		if (dailies >= 1) this.grant("daily-1", into);
		if (dailies >= 7) this.grant("daily-7", into);

		if (this.unitStats("shape").level === "prime") this.grant("prime-shape", into);
		if (this.unitStats("team").level === "prime") this.grant("prime-team", into);
		if (UNITS.every((u) => this.unitStats(u.id).level === "prime")) {
			this.grant("capstone", into);
		}
	}

	get earnedAchievements(): Set<string> {
		return new SvelteSet(Object.keys(this.progress.achievements));
	}

	openGlossary() {
		this.queue = [];
		this.outcomes = [];
		this.requeued = new SvelteSet();
		this.answeredOptionId = null;
		this.displayedOptions = [];
		this.summary = null;
		this.activeChapterId = null;
		this.chapter = null;
		this.chapterKind = null;
		this.shelf = null;
		this.view = "glossary";
	}

	goHome(opts?: { syncUrl?: boolean }) {
		saveProgress(this.progress);
		this.view = "home";
		this.summary = null;
		this.activeChapterId = null;
		this.chapter = null;
		this.chapterKind = null;
		this.shelf = null;
		if (opts?.syncUrl !== false) {
			this.syncLearnUrl();
		}
	}

	resetProgress() {
		this.progress = emptyProgress();
		clearProgress();
		this.reading = emptyReadingProgress();
		clearReadingProgress();
		this.goHome();
	}
}

export const game = new QuizGame();
