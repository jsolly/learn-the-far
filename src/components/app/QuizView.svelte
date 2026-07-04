<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import type { OptionTier, QuizOption, Tone } from "$lib/far/types";
	import { CONFIDENCE_STAKES, DIFFICULTY_LABEL, SCORING_LABEL, TIER_VERDICT } from "$lib/far/constants";
	import { UNITS } from "$lib/far/deck";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Progress } from "$lib/components/ui/progress";

	let q = $derived(game.currentQuestion);
	let answered = $derived(game.isAnswered);
	let unit = $derived(q ? UNITS.find((u) => u.id === q.unitId) : undefined);
	let counts = $derived(game.progressCount);
	let pct = $derived(counts.total === 0 ? 0 : Math.round((counts.done / counts.total) * 100));

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

	// Visual state for one option once the question is answered.
	function optionClass(opt: QuizOption): string {
		const base = "w-full rounded-2xl border-2 p-4 text-left transition-all";
		if (!answered) {
			return `${base} border-border bg-card hover:border-primary/50 hover:bg-muted/50 active:scale-[0.99]`;
		}
		const picked = opt.id === game.answeredOptionId;
		const ring = picked ? "ring-2 ring-offset-2 ring-offset-background ring-foreground/40" : "";
		if (q && (q.scoring === "tiered" || q.scoring === "reveal-tradeoff")) {
			const tierClass = opt.tier ? TIER_CLASS[opt.tier] : "border-border";
			return `${base} ${tierClass} ${ring} ${picked ? "" : "opacity-80"}`;
		}
		// single-best / confidence-bet
		if (opt.correct) return `${base} ${TIER_CLASS.best} ${ring}`;
		if (picked) return `${base} ${TIER_CLASS.disqualifying} ${ring}`;
		return `${base} border-border opacity-60`;
	}

	let confidenceLocked = $derived(q?.scoring === "confidence-bet" && !game.pendingStake && !answered);

	function verdict(): { label: string; tone: Tone } | undefined {
		if (!q || !pickedOption) return undefined;
		if (q.scoring === "tiered" || q.scoring === "reveal-tradeoff") {
			return pickedOption.tier ? TIER_VERDICT[pickedOption.tier] : undefined;
		}
		const right = pickedOption.correct === true;
		if (q.scoring === "confidence-bet") {
			const stake = game.answeredOptionId
				? game.outcomes[game.outcomes.length - 1]?.stake
				: undefined;
			const s = stake ?? "hunch";
			if (right) return { label: `Correct — and you bet "${s}"`, tone: "good" };
			return { label: `Wrong — and you bet "${s}"`, tone: s === "certain" ? "bad" : "warn" };
		}
		return right ? { label: "Correct", tone: "good" } : { label: "Not quite", tone: "bad" };
	}
	let v = $derived(verdict());
</script>

{#if q && unit}
	<div class="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-28 pt-4 sm:pt-6">
		<!-- header -->
		<div class="flex items-center gap-3">
			<Button variant="ghost" size="sm" class="shrink-0 px-2" aria-label="Exit session" onclick={() => game.goHome()}>
				<span aria-hidden="true">✕</span>
			</Button>
			<div class="flex-1">
				<Progress value={pct} max={100} aria-label="Session progress" />
			</div>
			<span class="shrink-0 text-xs tabular-nums text-muted-foreground">{counts.done}/{counts.total}</span>
		</div>

		<div class="mt-5 flex flex-wrap items-center gap-2">
			<Badge style={`background:hsl(${unit.hue} 70% 52%); color:white`} class="border-0">{unit.title}</Badge>
			<Badge variant="outline">{DIFFICULTY_LABEL[q.difficulty]}</Badge>
			<Badge variant="secondary">{SCORING_LABEL[q.scoring]}</Badge>
		</div>

		<!-- situation -->
		{#if q.situation}
			<div class="mt-4 rounded-2xl border border-dashed bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
				{q.situation}
			</div>
		{/if}

		<h1 class="mt-4 text-xl font-semibold leading-snug sm:text-2xl">{q.prompt}</h1>

		<!-- confidence stake -->
		{#if q.scoring === "confidence-bet" && !answered}
			<div class="mt-4">
				<p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
					Stake your confidence, then answer
				</p>
				<div class="grid grid-cols-3 gap-2">
					{#each CONFIDENCE_STAKES as stake (stake.id)}
						<button
							type="button"
							onclick={() => game.setStake(stake.id)}
							class={`rounded-xl border-2 p-3 text-center transition-all ${
								game.pendingStake === stake.id
									? "border-primary bg-primary/10"
									: "border-border hover:bg-muted/50"
							}`}
						>
							<span class="block text-sm font-semibold">{stake.label}</span>
							<span class="block text-[0.7rem] text-muted-foreground">{stake.helper}</span>
						</button>
					{/each}
				</div>
			</div>
		{/if}

		<!-- options -->
		<div class={`mt-4 flex flex-col gap-3 ${confidenceLocked ? "pointer-events-none opacity-40" : ""}`}>
			{#each q.options as opt (opt.id)}
				<button type="button" class={optionClass(opt)} disabled={answered || confidenceLocked} onclick={() => game.answer(opt.id)}>
					<span class="flex items-start gap-3">
						<span class="text-base leading-6">{opt.text}</span>
					</span>
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

		<!-- feedback -->
		{#if answered}
			<div class="mt-5 rounded-2xl border bg-card p-4">
				{#if v}
					<p class={`text-lg font-bold ${TONE_CLASS[v.tone]}`}>{v.label}</p>
				{/if}
				<p class="mt-1 text-sm leading-6 text-foreground/90">{q.explanation}</p>
				<a
					href={q.sourceUrl}
					target="_blank"
					rel="noreferrer"
					class="mt-2 inline-block text-xs font-medium text-primary underline underline-offset-2"
				>
					{q.citation} ↗
				</a>
			</div>
		{/if}

		<!-- sticky action bar -->
		<div class="fixed inset-x-0 bottom-0 border-t bg-background/95 backdrop-blur">
			<div class="mx-auto flex w-full max-w-2xl items-center justify-between gap-3 px-4 py-3">
				{#if answered}
					<span class="text-xs text-muted-foreground">
						{game.willFinishAfterNext ? "Last one" : "Keep going"}
					</span>
					<Button size="lg" class="flex-1 sm:flex-none sm:px-10" onclick={() => game.next()}>
						{game.willFinishAfterNext ? "Finish" : "Continue"}
					</Button>
				{:else}
					<span class="text-xs text-muted-foreground">
						{confidenceLocked ? "Pick a confidence level" : "Pick your answer"}
					</span>
				{/if}
			</div>
		</div>
	</div>
{/if}
