<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import { DIFFICULTY_LABEL, TESTOUT_LENGTH, TESTOUT_PASS } from "$lib/far/constants";
	import PieWheel from "./PieWheel.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	let stats = $derived(game.allStats);
	let gated = $derived(game.needsFundamentalsPlacement);
	let confirmReset = $state(false);
	let confirmYesEl: HTMLElement | null = $state(null);
	let resetButtonEl: HTMLElement | null = $state(null);
	let pageHeadingEl: HTMLHeadingElement | null = null;

	function capturePageHeading(element: HTMLHeadingElement) {
		pageHeadingEl = element;
		return () => {
			if (pageHeadingEl === element) pageHeadingEl = null;
		};
	}

	async function finishResetConfirmation(reset: boolean) {
		if (reset) game.resetProgress();
		confirmReset = false;
		await tick();
		if (reset) pageHeadingEl?.focus();
		else resetButtonEl?.focus();
	}
</script>

<div
	class="mx-auto w-full max-w-xl px-4 pb-16 pt-5 sm:max-w-2xl sm:px-6 sm:pb-20 sm:pt-7 lg:max-w-3xl lg:px-8 lg:pt-8"
>
	<header class="flex items-center justify-between gap-3 sm:gap-5">
		<div>
			<h1
				{@attach capturePageHeading}
				data-home-heading
				tabindex="-1"
				class="text-xl font-bold tracking-tight outline-none sm:text-2xl lg:text-[1.75rem]"
			>
				Learn The FAR
			</h1>
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
		<PieWheel {stats} hubPercent={game.masteryPercent} locked={gated} />
	</div>

	{#if gated}
		<section class="mt-4 rounded-2xl border-2 border-primary/30 bg-card p-4 sm:mt-6 sm:p-6">
			<h2 class="text-sm font-semibold leading-snug sm:text-lg">Unlock the deal lifecycle</h2>
			<p class="mt-1 text-xs leading-5 text-muted-foreground sm:mt-2 sm:text-sm sm:leading-6">
				Learn the Basics at your pace, or take a short {TESTOUT_LENGTH}-question test.
				Score {Math.round(TESTOUT_PASS * 100)}% or better to unlock every lifecycle slice.
			</p>
			{#if game.hasFundamentalsAttempt}
				<p class="mt-2 text-[0.65rem] tabular-nums text-muted-foreground sm:mt-3 sm:text-xs">
					{game.fundamentalsPercent}% of Basics cleared
				</p>
			{/if}
			<div class="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-3">
				<Button size="lg" class="sm:h-11 sm:text-base" onclick={() => game.startUnit("fundamentals")}>
					Quiz Basics
				</Button>
				<Button
					size="lg"
					variant="outline"
					class="sm:h-11 sm:text-base"
					onclick={() => game.startStudyUnit("fundamentals")}
				>
					Study Basics
				</Button>
			</div>
			<div class="mt-2 flex flex-col gap-2 sm:mt-3 sm:gap-3">
				<Button
					size="lg"
					variant="secondary"
					class="w-full sm:h-11 sm:text-base"
					onclick={() => game.startTestOut()}
				>
					Take the Basics test
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
				<span class="text-2xl sm:text-3xl" aria-hidden="true">{game.dailyDoneToday ? "✅" : "📰"}</span>
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
					<span class="text-2xl sm:text-3xl" aria-hidden="true">📖</span>
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
	{/if}

	<h2
		class="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:mb-3 sm:mt-8 sm:text-sm"
	>
		Basics & capture slices
	</h2>
	<div class="flex flex-col gap-2 sm:gap-3">
		{#each stats as s (s.unit.id)}
			{@const lifecycleLocked = game.isUnitLocked(s.unit.id)}
			<div
				class={`rounded-2xl border-2 p-3 sm:p-4 lg:p-5 ${
					lifecycleLocked
						? "border-border/50 bg-muted/40 opacity-60"
						: "border-border bg-card"
				}`}
				aria-disabled={lifecycleLocked ? "true" : undefined}
			>
				<div class="flex items-start gap-3 sm:gap-4">
					<span
						class={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold sm:h-12 sm:w-12 sm:text-base ${
							lifecycleLocked ? "bg-muted-foreground/35 text-muted-foreground" : "text-white"
						}`}
						style={lifecycleLocked ? undefined : `background:hsl(${s.unit.hue} 70% 27%)`}
					>
						{Math.round(s.ratio * 100)}%
					</span>
					<div class="min-w-0 flex-1">
						<div class="flex flex-wrap items-center gap-2 sm:gap-x-3">
							<h3
								class={`font-semibold leading-tight sm:text-lg ${
									lifecycleLocked ? "text-muted-foreground" : ""
								}`}
							>
								{s.unit.title}
							</h3>
							{#if lifecycleLocked}
								<Badge variant="secondary" class="shrink-0 text-[0.65rem] sm:text-xs">Locked</Badge>
							{:else if s.level !== "new"}
								<Badge variant="secondary" class="shrink-0 text-[0.65rem] sm:text-xs"
									>{s.levelLabel}</Badge
								>
							{/if}
							{#if lifecycleLocked}
								<span class="text-[0.65rem] text-muted-foreground sm:text-xs">
									Complete Basics to unlock
								</span>
							{:else if game.workingTier(s.unit.id) === "advanced"}
								<span class="text-[0.65rem] text-muted-foreground sm:text-xs">
									{DIFFICULTY_LABEL.advanced}
								</span>
							{/if}
						</div>
						<p class="mt-0.5 text-xs text-muted-foreground sm:text-sm">{s.unit.blurb}</p>
						<div
							class="mt-1.5 flex h-1.5 w-full overflow-hidden rounded-full bg-muted sm:mt-2 sm:h-2"
							class:opacity-50={lifecycleLocked}
						>
							{#if s.masteredRatio > 0}
								<div
									class="h-full transition-all"
									style={`width:${s.masteredRatio * 100}%; background:hsl(${s.unit.hue} 72% 48%)`}
									title="Mastered"
								></div>
							{/if}
							{#if s.learningRatio > 0}
								<div
									class="h-full transition-all"
									style={`width:${s.learningRatio * 100}%; background:hsl(${s.unit.hue} 55% 68%)`}
									title="Learning"
								></div>
							{/if}
						</div>
					</div>
				</div>
				<div class="mt-3 flex gap-2 sm:mt-4 sm:gap-3">
					<Button
						class="flex-1"
						size="sm"
						disabled={lifecycleLocked}
						onclick={() => game.startUnit(s.unit.id)}
					>
						Quiz me
					</Button>
					<Button
						class="flex-1"
						size="sm"
						variant="outline"
						disabled={lifecycleLocked}
						onclick={() => game.startStudyUnit(s.unit.id)}
					>
						Study this
					</Button>
				</div>
			</div>
		{/each}
	</div>

	{#if game.hasProgress}
		<div class="mt-8 flex justify-center sm:mt-10">
			{#if confirmReset}
				<div
					role="group"
					aria-labelledby="reset-confirmation-question"
					class="flex flex-wrap items-center justify-center gap-2 text-sm"
				>
					<span id="reset-confirmation-question" class="w-full text-center text-muted-foreground">
						Wipe all local quiz progress, streaks, and achievements?
					</span>
					<Button
						bind:ref={confirmYesEl}
						variant="destructive"
						size="sm"
						onclick={() => finishResetConfirmation(true)}>Yes, wipe progress</Button
					>
					<Button
						variant="outline"
						size="sm"
						onclick={() => finishResetConfirmation(false)}>No, keep progress</Button
					>
				</div>
			{:else}
				<Button
					bind:ref={resetButtonEl}
					variant="ghost"
					size="sm"
					class="text-muted-foreground"
					onclick={async () => {
						confirmReset = true;
						await tick();
						confirmYesEl?.focus();
					}}
				>
					Reset progress
				</Button>
			{/if}
		</div>
	{/if}
</div>
