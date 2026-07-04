<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import { ACHIEVEMENTS, DIFFICULTY_LABEL } from "$lib/far/constants";
	import PieWheel from "./PieWheel.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	let stats = $derived(game.allStats);
	let earned = $derived(game.earnedAchievements);
	let confirmReset = $state(false);
</script>

<div class="mx-auto w-full max-w-xl px-4 pb-16 pt-5">
	<!-- header -->
	<header class="flex items-center justify-between gap-3">
		<div>
			<h1 class="text-xl font-bold tracking-tight">Learn The FAR</h1>
			<p class="text-xs text-muted-foreground">Run a federal capture, one scenario at a time.</p>
		</div>
		<div class="flex items-center gap-2">
			<div class="flex items-center gap-1 rounded-full border bg-card px-3 py-1.5 text-sm font-semibold">
				<span>🔥</span><span class="tabular-nums">{game.streak.current}</span>
			</div>
		</div>
	</header>

	<!-- pie -->
	<div class="mt-4">
		<PieWheel {stats} masteryPercent={game.masteryPercent} onpick={(id) => game.startUnit(id)} />
	</div>

	<!-- quick actions -->
	<div class="mt-4 grid gap-2 sm:grid-cols-2">
		<button
			type="button"
			disabled={game.dailyDoneToday}
			onclick={() => game.startDaily()}
			class="flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all enabled:hover:border-primary/50 enabled:hover:bg-muted/40 disabled:opacity-60"
		>
			<span class="text-2xl">{game.dailyDoneToday ? "✅" : "📰"}</span>
			<div>
				<p class="font-semibold leading-tight">Daily challenge</p>
				<p class="text-xs text-muted-foreground">
					{game.dailyDoneToday ? "Done today — back tomorrow" : "5 mixed questions, feeds your streak"}
				</p>
			</div>
		</button>

		{#if game.canTestOut}
			<button
				type="button"
				onclick={() => game.startTestOut()}
				class="flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all hover:border-primary/50 hover:bg-muted/40"
			>
				<span class="text-2xl">⏭️</span>
				<div>
					<p class="font-semibold leading-tight">Test out of fundamentals</p>
					<p class="text-xs text-muted-foreground">Know the basics? Skip ahead to Core.</p>
				</div>
			</button>
		{/if}
	</div>

	<!-- unit list -->
	<h2 class="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">The deal lifecycle</h2>
	<div class="flex flex-col gap-2">
		{#each stats as s (s.unit.id)}
			<button
				type="button"
				onclick={() => game.startUnit(s.unit.id)}
				class="flex items-center gap-3 rounded-2xl border-2 border-border bg-card p-3 text-left transition-all hover:border-primary/40 hover:bg-muted/30 active:scale-[0.995]"
			>
				<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white" style={`background:hsl(${s.unit.hue} 70% 52%)`}>
					{Math.round(s.ratio * 100)}
				</span>
				<div class="min-w-0 flex-1">
					<div class="flex items-center gap-2">
						<p class="truncate font-semibold leading-tight">{s.unit.title}</p>
						{#if s.level !== "new"}
							<Badge variant="secondary" class="shrink-0 text-[0.65rem]">{s.levelLabel}</Badge>
						{/if}
					</div>
					<p class="truncate text-xs text-muted-foreground">{s.unit.blurb}</p>
					<!-- mastery bar -->
					<div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
						<div class="h-full rounded-full transition-all" style={`width:${s.ratio * 100}%; background:hsl(${s.unit.hue} 70% 52%)`}></div>
					</div>
				</div>
				<span class="shrink-0 text-[0.65rem] text-muted-foreground">{DIFFICULTY_LABEL[game.workingTier(s.unit.id)]}</span>
			</button>
		{/each}
	</div>

	<!-- achievements -->
	<h2 class="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
		Achievements <span class="tabular-nums">({earned.size}/{ACHIEVEMENTS.length})</span>
	</h2>
	<div class="grid grid-cols-4 gap-2 sm:grid-cols-6">
		{#each ACHIEVEMENTS as a (a.id)}
			<div
				class={`flex flex-col items-center gap-1 rounded-xl border p-2 text-center ${earned.has(a.id) ? "bg-card" : "opacity-40"}`}
				title={`${a.label} — ${a.description}`}
			>
				<span class="text-xl grayscale-0" class:grayscale={!earned.has(a.id)}>{a.icon}</span>
				<span class="text-[0.6rem] leading-tight text-muted-foreground">{a.label}</span>
			</div>
		{/each}
	</div>

	<!-- reset -->
	<div class="mt-8 flex justify-center">
		{#if confirmReset}
			<div class="flex items-center gap-2 text-sm">
				<span class="text-muted-foreground">Wipe all local progress?</span>
				<Button variant="destructive" size="sm" onclick={() => { game.resetProgress(); confirmReset = false; }}>Yes</Button>
				<Button variant="outline" size="sm" onclick={() => (confirmReset = false)}>No</Button>
			</div>
		{:else}
			<Button variant="ghost" size="sm" class="text-muted-foreground" onclick={() => (confirmReset = true)}>
				Reset progress
			</Button>
		{/if}
	</div>
</div>
