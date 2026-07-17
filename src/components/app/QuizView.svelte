<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import type { OptionTier, QuizOption, Tone } from "$lib/far/types";
	import { DIFFICULTY_LABEL, SCORING_LABEL, TIER_VERDICT } from "$lib/far/constants";
	import { UNITS } from "$lib/far/deck";
	import { chaptersForQuestion } from "$lib/far/chapters";
	import { learnChapterPath } from "$lib/learn-routes";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Progress } from "$lib/components/ui/progress";

	let q = $derived(game.currentQuestion);
	let answered = $derived(game.isAnswered);
	let unit = $derived(q ? UNITS.find((u) => u.id === q.unitId) : undefined);
	let counts = $derived(game.progressCount);
	let pct = $derived(counts.total === 0 ? 0 : Math.round((counts.done / counts.total) * 100));
	let feedbackStatusEl: HTMLParagraphElement | null = null;
	let pickedOptionEl: HTMLButtonElement | null = null;
	let lastOutcome = $derived(game.outcomes[game.outcomes.length - 1]);
	let missed = $derived(
		Boolean(answered && lastOutcome && !lastOutcome.cleared && game.mode !== "testout"),
	);
	let studyChapters = $derived(q && missed ? chaptersForQuestion(q.id) : []);

	function focusQuestionHeading(questionId: string) {
		return (element: HTMLHeadingElement) => {
			void tick().then(() => {
				if (game.currentQuestion?.id !== questionId) return;
				// preventScroll: focus alone scrolls the heading into view and leaves
				// mobile mid-page after Continue; pin to the top of the quiz instead.
				element.focus({ preventScroll: true });
				window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			});
		};
	}

	function captureFeedbackStatus(element: HTMLParagraphElement) {
		feedbackStatusEl = element;
		return () => {
			if (feedbackStatusEl === element) feedbackStatusEl = null;
		};
	}

	function capturePickedOption(element: HTMLButtonElement) {
		pickedOptionEl = element;
		return () => {
			if (pickedOptionEl === element) pickedOptionEl = null;
		};
	}

	let pickedOption = $derived(
		q && game.answeredOptionId ? q.options.find((o) => o.id === game.answeredOptionId) : undefined,
	);

	const TIER_CLASS: Record<OptionTier, string> = {
		best: "border-emerald-500 bg-emerald-500/10",
		defensible: "border-sky-500 bg-sky-500/10",
		costly: "border-amber-500 bg-amber-500/10",
		disqualifying: "border-red-500 bg-red-500/10",
	};

	// -700 in light mode clears WCAG AA (4.5:1) for the small verdict labels on
	// their tinted backgrounds; -400 handles dark mode.
	const TONE_CLASS: Record<Tone, string> = {
		good: "text-emerald-700 dark:text-emerald-400",
		ok: "text-sky-700 dark:text-sky-400",
		warn: "text-amber-700 dark:text-amber-400",
		bad: "text-red-700 dark:text-red-400",
	};

	// Visual state for one option once the question is answered (quiz mode).
	// Avoid font-weight changes — semibold shifts glyph widths and reflows the line.
	// scroll-mb keeps nearest scrollIntoView clear of the taller sticky feedback bar.
	function optionClass(opt: QuizOption): string {
		const base =
			"w-full scroll-mb-40 rounded-2xl border-2 p-4 text-left transition-[transform,opacity] duration-150";
		if (!answered) {
			return `${base} border-border bg-card hover:border-primary/50 hover:bg-muted/50 active:scale-[0.99]`;
		}
		const picked = opt.id === game.answeredOptionId;
		const pickMark = picked ? "" : "opacity-80";
		if (q && (q.scoring === "tiered" || q.scoring === "reveal-tradeoff")) {
			const tierClass = opt.tier ? TIER_CLASS[opt.tier] : "border-border";
			return `${base} ${tierClass} ${pickMark}`.trim();
		}
		// single-best — color alone marks right/wrong; no ring (double border)
		if (opt.correct) return `${base} ${TIER_CLASS.best}`;
		if (picked) return `${base} ${TIER_CLASS.disqualifying}`;
		return `${base} border-border opacity-60`;
	}

	async function answer(optionId: QuizOption["id"]) {
		const questionId = q?.id;
		game.answer(optionId);
		await tick();
		if (questionId && game.currentQuestion?.id === questionId) {
			// Keep the option list in view — announce via sticky-bar status, never jump to explanation.
			feedbackStatusEl?.focus({ preventScroll: true });
			pickedOptionEl?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
		}
	}

	function verdict(): { label: string; tone: Tone } | undefined {
		if (!q || !pickedOption) return undefined;
		if (q.scoring === "tiered" || q.scoring === "reveal-tradeoff") {
			return pickedOption.tier ? TIER_VERDICT[pickedOption.tier] : undefined;
		}
		const right = pickedOption.correct === true;
		return right ? { label: "Correct!", tone: "good" } : { label: "Not quite", tone: "bad" };
	}
	let v = $derived(verdict());
</script>

{#if q && unit}
	<div
		class={`mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pt-4 sm:pt-6 ${answered ? "pb-40" : "pb-28"}`}
	>
		<!-- header -->
		<div class="flex items-center gap-3">
			<Button variant="ghost" size="sm" class="shrink-0 px-2" aria-label="Exit session" onclick={() => game.exitSession()}>
				<span aria-hidden="true">✕</span>
			</Button>
			<div class="flex-1">
				<Progress value={pct} max={100} aria-label="Session progress" />
			</div>
			<span class="shrink-0 text-xs tabular-nums text-muted-foreground">
				{counts.done}/{counts.total}
			</span>
		</div>

		<div class="mt-5 flex flex-wrap items-center gap-2">
			<Badge style={`background:hsl(${unit.hue} 70% 30%); color:white`} class="border-0">{unit.title}</Badge>
			{#if unit.id !== q.difficulty && DIFFICULTY_LABEL[q.difficulty] !== unit.title}
				<Badge variant="outline">{DIFFICULTY_LABEL[q.difficulty]}</Badge>
			{/if}
			{#if SCORING_LABEL[q.scoring]}
				<Badge variant="secondary">{SCORING_LABEL[q.scoring]}</Badge>
			{/if}
		</div>

		{#if q.situation}
			<div class="mt-4 rounded-2xl border border-dashed bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
				{q.situation}
			</div>
		{/if}

		<h1
			{@attach focusQuestionHeading(q.id)}
			tabindex="-1"
			class="mt-4 rounded-sm text-xl font-semibold leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-2xl"
		>
			{q.prompt}
		</h1>

		<div class="mt-4 flex flex-col gap-3">
			{#each q.options as opt (`${q.id}:${opt.id}`)}
				<button
					type="button"
					class={optionClass(opt)}
					disabled={answered}
					onclick={() => answer(opt.id)}
					{@attach answered && opt.id === game.answeredOptionId && capturePickedOption}
				>
					<span class="flex items-start gap-3">
						<span class="text-base leading-6">{opt.text}</span>
					</span>
					{#if answered && opt.id === game.answeredOptionId}
						<span class="mt-2 flex items-center gap-1.5 text-xs text-foreground/80">
							<span aria-hidden="true">✓</span>
							Your answer
						</span>
					{/if}
					{#if answered && (q.scoring === "tiered" || q.scoring === "reveal-tradeoff") && opt.tier}
						<span class={`mt-2 block text-xs font-semibold ${TONE_CLASS[TIER_VERDICT[opt.tier].tone]}`}>
							{TIER_VERDICT[opt.tier].label}
						</span>
					{/if}
					{#if answered && q.scoring === "reveal-tradeoff" && opt.consequence}
						<span class="mt-1 block text-sm leading-5 text-muted-foreground">→ {opt.consequence}</span>
					{/if}
				</button>
			{/each}
		</div>

		{#if answered}
			<div class="mt-5 rounded-2xl border bg-card p-4">
				<p class="text-sm leading-6 text-foreground/90">{q.explanation}</p>
				<div class="mt-3 flex flex-col gap-2">
					<a
						href={q.sourceUrl}
						target="_blank"
						rel="noreferrer"
						class="inline-block text-xs font-medium text-primary underline underline-offset-2"
					>
						{q.citation} ↗
					</a>
					{#if missed && studyChapters.length > 0}
						<div class="flex flex-col gap-1.5">
							<p class="text-xs font-medium text-muted-foreground">Review in study</p>
							{#each studyChapters as chapter (chapter.id)}
								<a
									class="rounded-sm text-left text-xs font-medium text-primary underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									href={learnChapterPath(chapter.unitId, chapter.id)}
								>
									{chapter.title}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<!-- sticky action bar — primary feedback lives here after answering -->
		<div class="fixed inset-x-0 bottom-0 border-t bg-background/95 backdrop-blur">
			<div
				class={`mx-auto flex w-full max-w-2xl px-4 py-3 ${answered ? "flex-col items-stretch gap-2" : "items-center gap-3"}`}
			>
				{#if answered}
					{#if v}
						<p
							{@attach captureFeedbackStatus}
							role="status"
							aria-live="polite"
							aria-atomic="true"
							tabindex="-1"
							class={`text-center text-base font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-lg ${TONE_CLASS[v.tone]}`}
						>
							{v.label}
						</p>
					{/if}
					<Button size="lg" class="w-full max-w-xs self-center sm:w-auto sm:px-10" onclick={() => game.next()}>
						{game.willFinishAfterNext ? "Finish" : "Next Question"}
					</Button>
				{:else}
					<span class="text-xs text-muted-foreground">Pick your answer</span>
				{/if}
			</div>
		</div>
	</div>
{/if}
