<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import { DIFFICULTY_LABEL } from "$lib/far/constants";
	import { learnShelfPath } from "$lib/learn-routes";
	import PieWheel from "./PieWheel.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	let stats = $derived(game.allStats);
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

	/** Home entry point — hide until glossary is ready to promote again. */
	const showGlossaryOnHome = false;
</script>

<div
	class="mx-auto w-full max-w-xl px-4 pb-16 pt-5 sm:max-w-2xl sm:px-6 sm:pb-20 sm:pt-7 lg:max-w-3xl lg:px-8 lg:pt-8"
>
	<header class="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
		<div class="min-w-0 flex-1">
			<h1
				{@attach capturePageHeading}
				data-home-heading
				tabindex="-1"
				class="text-xl font-bold tracking-tight outline-none sm:text-2xl lg:text-[1.75rem]"
			>
				Learn The FAR
			</h1>
			<p class="text-xs text-muted-foreground sm:text-sm">
				A fun way to learn the FAR, one scenario at a time.
			</p>
		</div>
		<div
			class="flex shrink-0 items-center gap-2 rounded-full border bg-card px-2.5 py-1.5 sm:gap-2.5 sm:px-3.5 sm:py-2"
			title={`${game.streak.current}-day streak${game.streak.longest ? ` · best ${game.streak.longest}` : ""}`}
			aria-label={`${game.streak.current}-day streak${game.streak.longest ? `, best ${game.streak.longest}` : ""}`}
		>
			<span class="text-base leading-none sm:text-lg" aria-hidden="true">🔥</span>
			<span
				class="text-lg font-bold leading-none tabular-nums tracking-tight sm:text-xl"
				aria-hidden="true">{game.streak.current}</span
			>
			<span
				class="flex flex-col text-[0.625rem] font-medium leading-[1.1] text-muted-foreground sm:text-[0.6875rem]"
				aria-hidden="true"
			>
				<span>day</span>
				<span>streak</span>
			</span>
		</div>
	</header>

	<div class="mt-4 sm:mt-6">
		<PieWheel {stats} />
	</div>

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
					<p class="font-semibold leading-tight sm:text-lg">Here's the missing picture</p>
					<p class="text-xs text-muted-foreground sm:text-sm">
						{game.shakyQuestions.length} concept{game.shakyQuestions.length === 1 ? "" : "s"} to
						re-read — not a soft quiz
					</p>
				</div>
				<span class="shrink-0 text-lg text-muted-foreground sm:text-xl" aria-hidden="true">›</span>
			</button>
		{/if}
	</div>

	{#if showGlossaryOnHome}
		<button
			type="button"
			onclick={() => game.openGlossary()}
			class="mt-4 flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all hover:border-primary/50 hover:bg-muted/40 sm:mt-6 sm:gap-4 sm:p-5 lg:p-6"
		>
			<div class="min-w-0 flex-1">
				<p class="font-semibold leading-tight sm:text-lg">Glossary</p>
				<p class="text-xs text-muted-foreground sm:text-sm">
					Key FAR and capture jargon worth looking up
				</p>
			</div>
			<span class="shrink-0 text-lg text-muted-foreground sm:text-xl" aria-hidden="true">›</span>
		</button>
	{/if}

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
						style={`background:hsl(${s.unit.hue} 70% 27%)`}
					>
						{Math.round(s.ratio * 100)}%
					</span>
					<div class="min-w-0 flex-1">
						<div class="flex flex-wrap items-center gap-2 sm:gap-x-3">
							<h3 class="font-semibold leading-tight sm:text-lg">
								{s.unit.title}
							</h3>
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
						<div
							class="mt-1.5 flex h-1.5 w-full overflow-hidden rounded-full bg-muted sm:mt-2 sm:h-2"
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
						onclick={() => game.startUnit(s.unit.id)}
					>
						Quiz me
					</Button>
					<Button
						class="flex-1"
						size="sm"
						variant="outline"
						href={learnShelfPath(s.unit.id)}
					>
						Start learning
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
						Wipe all local quiz progress, streaks, achievements, and reading marks?
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
