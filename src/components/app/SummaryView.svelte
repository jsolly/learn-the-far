<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import { ACHIEVEMENTS, TESTOUT_PASS } from "$lib/far/constants";
	import { Button } from "$lib/components/ui/button";

	let s = $derived(game.summary);
	let earned = $derived(
		s ? s.newAchievements.map((id) => ACHIEVEMENTS.find((a) => a.id === id)).filter(Boolean) : [],
	);
	let unitNotPrime = $derived(s?.unit ? game.unitStats(s.unit.id).level !== "prime" : false);
	let passPct = $derived(Math.round(TESTOUT_PASS * 100));
	let gated = $derived(game.needsFundamentalsPlacement);

	function headline(pct: number): string {
		if (pct >= 90) return "Clean audit.";
		if (pct >= 70) return "Solid capture.";
		if (pct >= 50) return "Room to sharpen.";
		return "Keep drilling.";
	}

	function studyHeadline(): string {
		if (s?.studyKind === "fundamentals-gaps") return "Gaps reviewed.";
		if (s?.studyKind === "misses") return "Misses reviewed.";
		return "Study complete.";
	}
</script>

{#if s}
	<div
		class="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-center gap-6 px-5 py-10 text-center"
	>
		{#if s.mode === "study"}
			<div class="text-5xl">📖</div>
			<h1 class="text-2xl font-bold">{studyHeadline()}</h1>
			<p class="text-muted-foreground">
				{s.answered} card{s.answered === 1 ? "" : "s"} reviewed.
			</p>
			{#if gated && s.studyKind === "fundamentals-gaps"}
				<p class="text-sm text-muted-foreground">Ready to try the test again?</p>
			{/if}
		{:else if s.mode === "testout"}
			<div class="text-5xl">{s.unlockedNow || s.passedTestOut ? "⏭️" : "📚"}</div>
			<h1 class="text-2xl font-bold">
				{s.unlockedNow || s.passedTestOut ? "You're in." : "Not quite yet."}
			</h1>
			<p class="text-muted-foreground">
				{s.unlockedNow || s.passedTestOut
					? "The capture map is open — pick a deal stage and go."
					: `You scored ${s.scorePct}% (need ${passPct}%). Review what you missed, then try again.`}
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
			{#if s.mode === "study" && gated && s.studyKind === "fundamentals-gaps"}
				<Button size="lg" onclick={() => game.startTestOut()}>Try the test again</Button>
				<Button size="lg" variant="outline" onclick={() => game.goHome()}>Back</Button>
			{:else if s.mode === "testout" && gated}
				{#if game.fundamentalsGaps.length > 0}
					<Button size="lg" onclick={() => game.startStudyFundamentalsGaps()}>Review what you missed</Button>
				{/if}
				<Button size="lg" variant="outline" onclick={() => game.startTestOut()}>Try again</Button>
				<Button size="lg" variant="ghost" onclick={() => game.goHome()}>Back</Button>
			{:else if s.mode === "unit" && s.unit && unitNotPrime}
				<Button size="lg" onclick={() => s?.unit && game.startUnit(s.unit.id)}>Keep going</Button>
				<Button size="lg" variant="outline" onclick={() => game.goHome()}>Back to the map</Button>
			{:else}
				<Button size="lg" onclick={() => game.goHome()}>
					{s.mode === "study" ? "Done studying" : "Back to the map"}
				</Button>
			{/if}
		</div>
	</div>
{/if}
