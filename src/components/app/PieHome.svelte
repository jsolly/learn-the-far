<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import { isSoundMuted, toggleSoundMuted } from "$lib/quiz-sounds.svelte.js";
	import { DIFFICULTY_LABEL } from "$lib/far/constants";
	import { learnShelfPath } from "$lib/learn-routes";
	import PieWheel from "./PieWheel.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import CheckIcon from "@lucide/svelte/icons/check";
	import Volume2Icon from "@lucide/svelte/icons/volume-2";
	import VolumeOffIcon from "@lucide/svelte/icons/volume-off";

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
	const GITHUB_REPO_URL = "https://github.com/jsolly/learn-the-far";
</script>

<div
	class="mx-auto w-full max-w-xl px-4 pb-16 pt-5 sm:max-w-2xl sm:px-6 sm:pb-20 sm:pt-7 lg:max-w-3xl lg:px-8 lg:pt-8"
>
	<header class="flex items-center justify-between gap-3 sm:gap-4">
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
			class="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border bg-card px-3 py-2 sm:gap-2.5 sm:px-3.5 sm:py-2.5"
			title={`${game.streak.current}-day streak${game.streak.longest ? ` · best ${game.streak.longest}` : ""}`}
			aria-label={`${game.streak.current}-day streak${game.streak.longest ? `, best ${game.streak.longest}` : ""}`}
		>
			<span class="inline-flex items-center gap-1 leading-none" aria-hidden="true">
				<span class="text-sm sm:text-base">🔥</span>
				<span class="text-sm font-bold tabular-nums tracking-tight sm:text-base"
					>{game.streak.current}</span
				>
			</span>
			<span class="text-xs font-medium leading-none text-muted-foreground sm:text-sm" aria-hidden="true"
				>day streak</span
			>
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
			{@const shelfRead = game.isShelfRead(s.unit.id)}
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
					<div class="relative flex-1">
						<Button
							class="w-full"
							size="sm"
							variant="outline"
							href={learnShelfPath(s.unit.id)}
						>
							{shelfRead ? "Review shelf" : "Start learning"}
						</Button>
						{#if shelfRead}
							<span
								class="pointer-events-none absolute -right-1 -top-1 inline-flex size-3.5 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm sm:size-4 dark:bg-emerald-500"
								title="Shelf read"
								aria-hidden="true"
							>
								<CheckIcon class="size-2 sm:size-2.5" strokeWidth={3} />
							</span>
							<span class="sr-only">Shelf read</span>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-8 flex flex-col items-center gap-3 sm:mt-10">
		<Button
			variant="ghost"
			size="sm"
			class="text-muted-foreground"
			aria-label={isSoundMuted() ? "Unmute quiz sounds" : "Mute quiz sounds"}
			aria-pressed={isSoundMuted()}
			onclick={() => toggleSoundMuted()}
		>
			{#if isSoundMuted()}
				<VolumeOffIcon class="size-4" aria-hidden="true" />
				Sound off
			{:else}
				<Volume2Icon class="size-4" aria-hidden="true" />
				Sound on
			{/if}
		</Button>
		{#if game.hasProgress}
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
		{/if}
	</div>

	<footer class="mt-6 flex justify-center sm:mt-8">
		<a
			href={GITHUB_REPO_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
			aria-label="View source on GitHub"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-5"
				aria-hidden="true"
			>
				<path
					d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.82-.261.82-.58 0-.287-.01-1.046-.016-2.053-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
				/>
			</svg>
			GitHub
		</a>
	</footer>
</div>
