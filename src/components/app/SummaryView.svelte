<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import { ACHIEVEMENTS } from "$lib/far/constants";
	import { Button } from "$lib/components/ui/button";

	let s = $derived(game.summary);
	let earned = $derived(
		s ? s.newAchievements.map((id) => ACHIEVEMENTS.find((a) => a.id === id)).filter(Boolean) : [],
	);
	let unitNotPrime = $derived(
		s?.unit ? game.unitStats(s.unit.id).level !== "prime" : false,
	);

	function headline(pct: number): string {
		if (pct >= 90) return "Clean audit.";
		if (pct >= 70) return "Solid capture.";
		if (pct >= 50) return "Room to sharpen.";
		return "Keep drilling.";
	}
</script>

{#if s}
	<div class="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-center gap-6 px-5 py-10 text-center">
		{#if s.mode === "testout"}
			<div class="text-5xl">{s.passedTestOut ? "⏭️" : "📚"}</div>
			<h1 class="text-2xl font-bold">
				{s.passedTestOut ? "Tested out of fundamentals" : "Not quite — keep the basics"}
			</h1>
			<p class="text-muted-foreground">
				{s.passedTestOut
					? "Fundamentals are credited across every unit. You start at Core."
					: `You scored ${s.scorePct}%. You need 80% to skip the fundamentals — dig into a unit and try again.`}
			</p>
		{:else}
			<div class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
				{s.mode === "daily" ? "Daily challenge" : s.unit?.title}
			</div>
			<div
				class="flex h-32 w-32 items-center justify-center rounded-full text-4xl font-bold tabular-nums"
				style={`background: conic-gradient(hsl(${s.unit?.hue ?? 210} 70% 52%) ${s.scorePct}%, var(--color-muted) 0);`}
			>
				<span class="flex h-24 w-24 items-center justify-center rounded-full bg-background">
					{s.scorePct}%
				</span>
			</div>
			<h1 class="text-2xl font-bold">{headline(s.scorePct)}</h1>
			<p class="text-muted-foreground">
				{s.answered} question{s.answered === 1 ? "" : "s"} · {game.streak.current}-day streak 🔥
			</p>
		{/if}

		{#if earned.length}
			<div class="w-full rounded-2xl border bg-card p-4">
				<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
					New achievement{earned.length > 1 ? "s" : ""}
				</p>
				<div class="flex flex-col gap-2">
					{#each earned as a (a?.id)}
						<div class="flex items-center gap-3 text-left">
							<span class="text-2xl">{a?.icon}</span>
							<div>
								<p class="font-semibold leading-tight">{a?.label}</p>
								<p class="text-xs text-muted-foreground">{a?.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div class="flex w-full flex-col gap-2">
			{#if s.mode === "unit" && s.unit && unitNotPrime}
				<Button size="lg" onclick={() => s?.unit && game.startUnit(s.unit.id)}>Keep going</Button>
			{/if}
			<Button size="lg" variant={s.mode === "unit" && unitNotPrime ? "outline" : "default"} onclick={() => game.goHome()}>
				Back to the map
			</Button>
		</div>
	</div>
{/if}
