<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import { DIFFICULTY_LABEL } from "$lib/far/constants";
	import PieWheel from "./PieWheel.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	let stats = $derived(game.allStats);
	let gated = $derived(game.needsFundamentalsPlacement);
	let confirmReset = $state(false);
	let hubPercent = $derived(game.masteryPercent);
	let hubLabel = $derived("captured");
</script>

<div
	class="mx-auto w-full max-w-xl px-4 pb-16 pt-5 sm:max-w-2xl sm:px-6 sm:pb-20 sm:pt-7 lg:max-w-3xl lg:px-8 lg:pt-8"
>
	<header class="flex items-center justify-between gap-3 sm:gap-5">
		<div>
			<h1 class="text-xl font-bold tracking-tight sm:text-2xl lg:text-[1.75rem]">Learn The FAR</h1>
			{#if !gated}
				<p class="text-xs text-muted-foreground sm:text-sm">
					A fun way to learn the FAR, one scenario at a time.
				</p>
			{/if}
		</div>
		<div
			class="flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm font-semibold sm:gap-2 sm:px-4 sm:py-2 sm:text-base"
			title={`${game.streak.current}-day streak${game.streak.longest ? ` · best ${game.streak.longest}` : ""}`}
		>
			<span aria-hidden="true">🔥</span>
			<span class="tabular-nums">{game.streak.current}</span>
			<span class="text-xs font-medium text-muted-foreground sm:text-sm">day streak</span>
		</div>
	</header>

	<div class="mt-4 sm:mt-6">
		<PieWheel
			{stats}
			{hubPercent}
			{hubLabel}
			locked={gated}
			onpick={(id) => game.startUnit(id)}
		/>
	</div>

	{#if gated}
		<section class="mt-4 rounded-2xl border-2 border-primary/30 bg-card p-4 sm:mt-6 sm:p-6">
			<h2 class="text-sm font-semibold leading-snug sm:text-lg">Find your starting point</h2>
			<p class="mt-1 text-xs leading-5 text-muted-foreground sm:mt-2 sm:text-sm sm:leading-6">
				A few quick questions will seed your capture chart.
			</p>
			{#if game.hasFundamentalsAttempt}
				<p class="mt-2 text-[0.65rem] tabular-nums text-muted-foreground sm:mt-3 sm:text-xs">
					{game.masteryPercent}% of the chart already filled from your answers
				</p>
			{/if}
			<div class="mt-4 flex flex-col gap-2 sm:mt-5 sm:gap-3">
				<Button size="lg" class="w-full sm:h-11 sm:text-base" onclick={() => game.startTestOut()}>
					{game.hasFundamentalsAttempt ? "Continue" : "See what I know"}
				</Button>
				{#if game.hasFundamentalsAttempt && game.fundamentalsGaps.length > 0}
					<Button
						size="lg"
						variant="outline"
						class="w-full sm:h-11 sm:text-base"
						onclick={() => game.startStudyFundamentalsGaps()}
					>
						Review what you missed
					</Button>
				{/if}
			</div>
		</section>
	{:else}
		<div
			class={`mt-4 grid gap-2 sm:mt-6 sm:gap-3 ${game.shakyQuestions.length > 0 ? "sm:grid-cols-2" : ""}`}
		>
			<button
				type="button"
				disabled={game.dailyDoneToday}
				onclick={() => game.startDaily()}
				class="flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all enabled:hover:border-primary/50 enabled:hover:bg-muted/40 disabled:opacity-60 sm:gap-4 sm:p-5 lg:p-6"
			>
				<span class="text-2xl sm:text-3xl">{game.dailyDoneToday ? "✅" : "📰"}</span>
				<div class="min-w-0 flex-1">
					<p class="font-semibold leading-tight sm:text-lg">Daily challenge</p>
					<p class="text-xs text-muted-foreground sm:text-sm">
						{game.dailyDoneToday ? "Done today — back tomorrow" : "5 mixed questions, feeds your streak"}
					</p>
				</div>
				<span class="shrink-0 text-lg text-muted-foreground sm:text-xl" aria-hidden="true">›</span>
			</button>

			{#if game.shakyQuestions.length > 0}
				<button
					type="button"
					onclick={() => game.startStudyMisses()}
					class="flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all hover:border-primary/50 hover:bg-muted/40 sm:gap-4 sm:p-5 lg:p-6"
				>
					<span class="text-2xl sm:text-3xl">📖</span>
					<div class="min-w-0 flex-1">
						<p class="font-semibold leading-tight sm:text-lg">Study what you need</p>
						<p class="text-xs text-muted-foreground sm:text-sm">
							{game.shakyQuestions.length} question{game.shakyQuestions.length === 1 ? "" : "s"}
							selected for you
						</p>
					</div>
					<span class="shrink-0 text-lg text-muted-foreground sm:text-xl" aria-hidden="true">›</span>
				</button>
			{/if}
		</div>

		<h2
			class="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:mb-3 sm:mt-8 sm:text-sm"
		>
			Capture slices
		</h2>
		<div class="flex flex-col gap-2 sm:gap-3">
			{#each stats as s (s.unit.id)}
				<div class="rounded-2xl border-2 border-border bg-card p-3 sm:p-4 lg:p-5">
					<div class="flex items-start gap-3 sm:gap-4">
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base"
							style={`background:hsl(${s.unit.hue} 70% 52%)`}
						>
							{Math.round(s.ratio * 100)}%
						</span>
						<div class="min-w-0 flex-1">
							<div class="flex flex-wrap items-center gap-2 sm:gap-x-3">
								<p class="font-semibold leading-tight sm:text-lg">{s.unit.title}</p>
								{#if s.level !== "new"}
									<Badge variant="secondary" class="shrink-0 text-[0.65rem] sm:text-xs"
										>{s.levelLabel}</Badge
									>
								{/if}
								{#if game.workingTier(s.unit.id) === "advanced"}
									<span class="text-[0.65rem] text-muted-foreground sm:text-xs">
										{DIFFICULTY_LABEL.advanced}
									</span>
								{/if}
							</div>
							<p class="mt-0.5 text-xs text-muted-foreground sm:text-sm">{s.unit.blurb}</p>
							<div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted sm:mt-2 sm:h-2">
								<div
									class="h-full rounded-full transition-all"
									style={`width:${s.ratio * 100}%; background:hsl(${s.unit.hue} 70% 52%)`}
								></div>
							</div>
						</div>
					</div>
					<div class="mt-3 flex gap-2 sm:mt-4 sm:gap-3">
						<Button class="flex-1" size="sm" onclick={() => game.startUnit(s.unit.id)}>
							Quiz me
						</Button>
						<Button
							class="flex-1"
							size="sm"
							variant="outline"
							onclick={() => game.startStudyUnit(s.unit.id)}
						>
							Study this
						</Button>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if game.hasProgress}
		<div class="mt-8 flex justify-center sm:mt-10">
			{#if confirmReset}
				<div class="flex items-center gap-2 text-sm">
					<span class="text-muted-foreground">Wipe all local progress?</span>
					<Button
						variant="destructive"
						size="sm"
						onclick={() => {
							game.resetProgress();
							confirmReset = false;
						}}>Yes</Button
					>
					<Button variant="outline" size="sm" onclick={() => (confirmReset = false)}>No</Button>
				</div>
			{:else}
				<Button
					variant="ghost"
					size="sm"
					class="text-muted-foreground"
					onclick={() => (confirmReset = true)}
				>
					Reset progress
				</Button>
			{/if}
		</div>
	{/if}
</div>
