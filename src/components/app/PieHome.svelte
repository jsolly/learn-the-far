<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import { DIFFICULTY_LABEL, TESTOUT_PASS } from "$lib/far/constants";
	import PieWheel from "./PieWheel.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	let stats = $derived(game.allStats);
	let gated = $derived(game.needsFundamentalsPlacement);
	let confirmReset = $state(false);
	let passPct = $derived(Math.round(TESTOUT_PASS * 100));
	let hubPercent = $derived(gated ? game.fundamentalsPercent : game.masteryPercent);
	let hubLabel = $derived(gated ? "fundamentals" : "captured");
</script>

<div class="mx-auto w-full max-w-xl px-4 pb-16 pt-5">
	<header class="flex items-center justify-between gap-3">
		<div>
			<h1 class="text-xl font-bold tracking-tight">Learn The FAR</h1>
			{#if !gated}
				<p class="text-xs text-muted-foreground">Run a federal capture, one scenario at a time.</p>
			{/if}
		</div>
			<div
				class="flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm font-semibold"
				title={`${game.streak.current}-day streak${game.streak.longest ? ` · best ${game.streak.longest}` : ""}`}
			>
				<span aria-hidden="true">🔥</span>
				<span class="tabular-nums">{game.streak.current}</span>
				<span class="text-xs font-medium text-muted-foreground">day streak</span>
			</div>
	</header>

	<div class="mt-4">
		<PieWheel
			{stats}
			{hubPercent}
			{hubLabel}
			locked={gated}
			onpick={(id) => game.startUnit(id)}
		/>
	</div>

	{#if gated}
		<section class="mt-4 rounded-2xl border-2 border-primary/30 bg-card p-4">
			<h2 class="text-sm font-semibold leading-snug">Fundamentals</h2>
			<p class="mt-1 text-xs leading-5 text-muted-foreground">
				Pass a short test to unlock the rest of the capture map.
			</p>
			<div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
				<div
					class="h-full rounded-full bg-primary transition-all"
					style={`width:${game.fundamentalsPercent}%`}
				></div>
			</div>
			<p class="mt-1 text-[0.65rem] tabular-nums text-muted-foreground">
				{game.fundamentalsPercent}% · need {passPct}% to continue
			</p>
			<div class="mt-4 flex flex-col gap-2">
				<Button size="lg" class="w-full" onclick={() => game.startTestOut()}>
					{game.hasFundamentalsAttempt ? "Try again" : "Start the test"}
				</Button>
				{#if game.hasFundamentalsAttempt && game.fundamentalsGaps.length > 0}
					<Button
						size="lg"
						variant="outline"
						class="w-full"
						onclick={() => game.startStudyFundamentalsGaps()}
					>
						Review what you missed
					</Button>
				{/if}
			</div>
		</section>
	{:else}
		<div class={`mt-4 grid gap-2 ${game.shakyQuestions.length > 0 ? "sm:grid-cols-2" : ""}`}>
			<button
				type="button"
				disabled={game.dailyDoneToday}
				onclick={() => game.startDaily()}
				class="flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all enabled:hover:border-primary/50 enabled:hover:bg-muted/40 disabled:opacity-60"
			>
				<span class="text-2xl">{game.dailyDoneToday ? "✅" : "📰"}</span>
				<div class="min-w-0 flex-1">
					<p class="font-semibold leading-tight">Daily challenge</p>
					<p class="text-xs text-muted-foreground">
						{game.dailyDoneToday ? "Done today — back tomorrow" : "5 mixed questions, feeds your streak"}
					</p>
				</div>
				<span class="shrink-0 text-lg text-muted-foreground" aria-hidden="true">›</span>
			</button>

			{#if game.shakyQuestions.length > 0}
				<button
					type="button"
					onclick={() => game.startStudyMisses()}
					class="flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all hover:border-primary/50 hover:bg-muted/40"
				>
					<span class="text-2xl">📖</span>
					<div class="min-w-0 flex-1">
						<p class="font-semibold leading-tight">Study misses</p>
						<p class="text-xs text-muted-foreground">
							{game.shakyQuestions.length} to brush up on
						</p>
					</div>
					<span class="shrink-0 text-lg text-muted-foreground" aria-hidden="true">›</span>
				</button>
			{/if}
		</div>

		<h2 class="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
			The deal lifecycle
		</h2>
		<div class="flex flex-col gap-2">
			{#each stats as s (s.unit.id)}
				<div class="rounded-2xl border-2 border-border bg-card p-3">
					<div class="flex items-start gap-3">
						<span
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
							style={`background:hsl(${s.unit.hue} 70% 52%)`}
						>
							{Math.round(s.ratio * 100)}
						</span>
						<div class="min-w-0 flex-1">
							<div class="flex flex-wrap items-center gap-2">
								<p class="font-semibold leading-tight">{s.unit.title}</p>
								{#if s.level !== "new"}
									<Badge variant="secondary" class="shrink-0 text-[0.65rem]">{s.levelLabel}</Badge>
								{/if}
								<span class="text-[0.65rem] text-muted-foreground">
									{DIFFICULTY_LABEL[game.workingTier(s.unit.id)]}
								</span>
							</div>
							<p class="mt-0.5 text-xs text-muted-foreground">{s.unit.blurb}</p>
							<div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
								<div
									class="h-full rounded-full transition-all"
									style={`width:${s.ratio * 100}%; background:hsl(${s.unit.hue} 70% 52%)`}
								></div>
							</div>
						</div>
					</div>
					<div class="mt-3 flex gap-2">
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

	<div class="mt-8 flex justify-center">
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
			<Button variant="ghost" size="sm" class="text-muted-foreground" onclick={() => (confirmReset = true)}>
				Reset progress
			</Button>
		{/if}
	</div>
</div>
