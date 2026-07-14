import type {
	AnswerOutcome,
	ConfidenceStake,
	Difficulty,
	LifecycleUnit,
	QuizQuestion,
	UnitId,
} from "$lib/far/types";
import { QUESTIONS, UNITS } from "$lib/far/deck";
import {
	CLEAR_THRESHOLD,
	DAILY_LENGTH,
	DIFFICULTY_ORDER,
	LEVELS,
	type LevelId,
	MASTERED_CORRECT_COUNT,
	SESSION_LENGTH,
	STREAK_MILESTONES,
	TESTOUT_LENGTH,
	TESTOUT_PASS,
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
import { buildMissManuscript, chapterById, shelfForUnit } from "$lib/far/chapters";
import type {
	Chapter,
	ChapterKind,
	ChapterQuizAction,
	ChapterShelf,
	ReadingProgress,
} from "$lib/far/chapters/types";
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

function fundamentalsQuestions(): QuizQuestion[] {
	return QUESTIONS.filter((q) => q.unitId === "fundamentals");
}

export class QuizGame {
	progress = $state<QuizProgress>(emptyProgress());
	view = $state<View>("home");

	// active session
	mode = $state<SessionMode>("unit");
	activeUnit = $state<UnitId | null>(null);
	queue = $state<string[]>([]);
	outcomes = $state<AnswerOutcome[]>([]);
	requeued = new SvelteSet<string>();

	/** Long-form chapter reading (shelf chapter / miss manuscript). */
	chapter = $state<Chapter | null>(null);
	chapterKind = $state<ChapterKind | null>(null);
	/** Unit reference shelf (multi-chapter hub). */
	shelf = $state<ChapterShelf | null>(null);
	reading = $state<ReadingProgress>(emptyReadingProgress());

	// current question interaction
	answeredOptionId = $state<string | null>(null);
	pendingStake = $state<ConfidenceStake | null>(null);

	summary = $state<SessionSummary | null>(null);

	constructor() {
		this.progress = loadProgress();
		this.reading = loadReadingProgress();
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
		const total = QUESTIONS.length;
		if (total === 0) return 0;
		const cleared = QUESTIONS.filter((q) => this.isCleared(q.id)).length;
		return Math.round((cleared / total) * 100);
	}

	get fundamentalsClearRatio(): number {
		const qs = fundamentalsQuestions();
		if (qs.length === 0) return 1;
		const cleared = qs.filter((q) => this.isCleared(q.id)).length;
		return cleared / qs.length;
	}

	get fundamentalsPercent(): number {
		return Math.round(this.fundamentalsClearRatio * 100);
	}

	get fundamentalsUnlocked(): boolean {
		return this.progress.fundamentalsUnlocked;
	}

	/** Whether the learner has any persisted progress worth resetting. */
	get hasProgress(): boolean {
		const { questions, dailyDone, testedOut, fundamentalsUnlocked, achievements, streak } =
			this.progress;
		return (
			Object.keys(questions ?? {}).length > 0 ||
			(dailyDone?.length ?? 0) > 0 ||
			Boolean(testedOut) ||
			Boolean(fundamentalsUnlocked) ||
			Object.keys(achievements ?? {}).length > 0 ||
			Boolean(streak?.current || streak?.longest || streak?.lastDay) ||
			Object.keys(this.reading.read).length > 0
		);
	}

	/** Any fundamentals quiz attempt on record (enables gap study after first placement). */
	get hasFundamentalsAttempt(): boolean {
		return fundamentalsQuestions().some((q) => !!this.recordFor(q.id));
	}

	get fundamentalsGaps(): QuizQuestion[] {
		return fundamentalsQuestions().filter((q) => {
			const r = this.recordFor(q.id);
			return !!r && !r.cleared;
		});
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

	/** Placement / retest CTA while the hard gate is closed. */
	get needsFundamentalsPlacement(): boolean {
		return !this.fundamentalsUnlocked;
	}

	/** Lifecycle slices stay locked until Fundamentals unlocks; Basics stays open. */
	isUnitLocked(unitId: UnitId): boolean {
		return !this.fundamentalsUnlocked && unitId !== "fundamentals";
	}

	canStartUnit(unitId: UnitId): boolean {
		return !this.isUnitLocked(unitId);
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
		if (!this.canStartUnit(unitId)) return;
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

	startDaily() {
		if (!this.fundamentalsUnlocked) return;
		const rng = mulberry32(hashSeed(`daily-${today()}`));
		const picks = shuffle(QUESTIONS, rng).slice(0, DAILY_LENGTH);
		this.beginSession("daily", null, picks);
	}

	/** One-pass Fundamentals test, prioritizing questions not yet cleared. */
	startTestOut() {
		const fundamentals = fundamentalsQuestions();
		const uncleared = shuffle(fundamentals.filter((q) => !this.isCleared(q.id)));
		const cleared = shuffle(fundamentals.filter((q) => this.isCleared(q.id)));
		this.beginSession("testout", null, [...uncleared, ...cleared].slice(0, TESTOUT_LENGTH));
	}

	private openChapter(chapter: Chapter, kind: ChapterKind) {
		this.chapter = chapter;
		this.chapterKind = kind;
		this.shelf = null;
		this.summary = null;
		this.view = "chapter";
		if (kind === "shelf-chapter") {
			this.reading = rememberOpen(this.reading, chapter.unitId, chapter.id);
			saveReadingProgress(this.reading);
		}
	}

	openShelf(unitId: UnitId) {
		if (!this.canStartUnit(unitId)) return;
		this.shelf = shelfForUnit(unitId);
		this.chapter = null;
		this.chapterKind = null;
		this.summary = null;
		this.view = "shelf";
		this.reading = { ...this.reading, lastUnitId: unitId };
		saveReadingProgress(this.reading);
	}

	openShelfChapter(chapterId: string) {
		const found = chapterById(chapterId);
		if (!found) return;
		if (!this.canStartUnit(found.unitId)) return;
		this.openChapter(found, "shelf-chapter");
	}

	isChapterRead(chapterId: string): boolean {
		return Boolean(this.reading.read[chapterId]);
	}

	markCurrentChapterRead() {
		if (!this.chapter || this.chapterKind !== "shelf-chapter") return;
		this.reading = markChapterRead(this.reading, this.chapter.id);
		saveReadingProgress(this.reading);
	}

	/** Shame-free manuscript for uncleared fundamentals (no progress writes). */
	startStudyFundamentalsGaps() {
		const gaps = this.fundamentalsGaps;
		if (gaps.length === 0) return;
		this.openChapter(buildMissManuscript(gaps), "miss-manuscript");
	}

	/** Shame-free manuscript of quiz misses (no progress writes). */
	startStudyMisses() {
		if (!this.fundamentalsUnlocked) return;
		const misses = this.shakyQuestions;
		if (misses.length === 0) return;
		const chapter = buildMissManuscript(shuffle(misses).slice(0, SESSION_LENGTH));
		chapter.quizCta = {
			label: "Back to the chart",
			action: { kind: "home" },
		};
		this.openChapter(chapter, "miss-manuscript");
	}

	runChapterQuizAction(action: ChapterQuizAction) {
		switch (action.kind) {
			case "quiz-fundamentals":
				this.startUnit("fundamentals");
				return;
			case "testout":
				this.startTestOut();
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

	private beginSession(mode: SessionMode, unitId: UnitId | null, questions: QuizQuestion[]) {
		this.mode = mode;
		this.activeUnit = unitId;
		this.queue = questions.map((q) => q.id);
		this.outcomes = [];
		this.requeued = new SvelteSet();
		this.answeredOptionId = null;
		this.pendingStake = null;
		this.summary = null;
		this.chapter = null;
		this.chapterKind = null;
		this.shelf = null;
		this.view = questions.length > 0 ? "session" : "home";
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
		if (this.mode === "testout") return this.queue.length <= 1;
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

	setStake(stake: ConfidenceStake) {
		if (this.isAnswered) return;
		this.pendingStake = stake;
	}

	answer(optionId: string) {
		const q = this.currentQuestion;
		if (!q || this.isAnswered) return;
		if (q.scoring === "confidence-bet" && !this.pendingStake) return; // must stake first

		const score = this.scoreQuestion(q, optionId);
		const cleared = score >= CLEAR_THRESHOLD;
		this.answeredOptionId = optionId;

		const outcome: AnswerOutcome = {
			questionId: q.id,
			optionId,
			stake: this.pendingStake ?? undefined,
			score,
			cleared,
		};
		this.outcomes = [...this.outcomes, outcome];

		// Placement unlocks only when the diagnostic finishes — not mid-session via ratio.
		if (this.mode !== "testout") {
			this.persistOutcome(outcome);
			this.maybeUnlockFundamentals();
			saveProgress(this.progress);
		}
	}

	next() {
		const q = this.currentQuestion;
		if (!q) return;

		if (this.mode === "testout") {
			this.queue = this.queue.slice(1);
			this.answeredOptionId = null;
			this.pendingStake = null;

			if (this.queue.length === 0) {
				this.finishSession();
			}
			return;
		}

		const last = this.outcomes[this.outcomes.length - 1];
		this.queue = this.queue.slice(1);

		// wrong-answer jail: requeue a missed question once, near the end.
		if (last && !last.cleared && !this.requeued.has(q.id)) {
			this.requeued.add(q.id);
			this.queue = [...this.queue, q.id];
		}

		this.answeredOptionId = null;
		this.pendingStake = null;

		if (this.queue.length === 0) {
			this.finishSession();
		}
	}

	/** Unlock after clearing 80% of the Fundamentals slice. */
	private maybeUnlockFundamentals(): boolean {
		if (this.progress.fundamentalsUnlocked) return false;
		if (this.progress.testedOut || this.fundamentalsClearRatio >= TESTOUT_PASS) {
			this.progress.fundamentalsUnlocked = true;
			return true;
		}
		return false;
	}

	private grant(id: string, into: string[]) {
		if (!this.progress.achievements[id]) {
			this.progress.achievements[id] = new SvelteDate().toISOString();
			into.push(id);
		}
	}

	private creditAllFundamentals() {
		for (const q of fundamentalsQuestions()) {
			const prev = this.progress.questions[q.id];
			this.progress.questions[q.id] = {
				attempts: (prev?.attempts ?? 0) + 1,
				bestScore: Math.max(prev?.bestScore ?? 0, 1),
				cleared: true,
				correctCount: Math.max((prev?.correctCount ?? 0) + 1, MASTERED_CORRECT_COUNT),
				lastAt: new SvelteDate().toISOString(),
			};
		}
	}

	private finishSession() {
		const newAchievements: string[] = [];
		const unit = this.activeUnit ? UNITS.find((u) => u.id === this.activeUnit) : undefined;

		// Keep the best outcome per question. Normal quizzes can requeue a miss,
		// while the fixed testout contains each sampled question only once.
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

		let passedTestOut: boolean | undefined;
		let unlockedNow = false;
		if (this.mode === "testout") {
			passedTestOut = answered > 0 && scoreSum / answered >= TESTOUT_PASS;
			const wasLocked = !this.progress.fundamentalsUnlocked;
			if (passedTestOut) {
				this.progress.testedOut = true;
				this.creditAllFundamentals();
				this.progress.fundamentalsUnlocked = true;
			} else {
				for (const outcome of uniqueOutcomes) {
					this.persistOutcome(outcome);
				}
				this.maybeUnlockFundamentals();
			}
			unlockedNow = wasLocked && this.progress.fundamentalsUnlocked;
		}

		if (this.mode === "daily" && !this.progress.dailyDone.includes(today())) {
			this.progress.dailyDone = [...this.progress.dailyDone, today()];
		}

		if (perfect) this.grant("flawless", newAchievements);
		this.deriveAchievements(newAchievements);
		saveProgress(this.progress);

		this.summary = {
			mode: this.mode,
			unit: unit ?? undefined,
			answered,
			scoreSum,
			scorePct,
			perfect,
			passedTestOut,
			unlockedNow: unlockedNow || undefined,
			newAchievements,
		};
		this.view = "summary";
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
		if (this.progress.testedOut) this.grant("tested-out", into);

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

	goHome() {
		this.maybeUnlockFundamentals();
		saveProgress(this.progress);
		this.view = "home";
		this.summary = null;
		this.chapter = null;
		this.chapterKind = null;
		this.shelf = null;
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
