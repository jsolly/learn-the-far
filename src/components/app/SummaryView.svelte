<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import { ACHIEVEMENTS } from "$lib/far/constants";
	import { Button } from "$lib/components/ui/button";

	let s = $derived(game.summary);
	let earned = $derived(
		s ? s.newAchievements.map((id) => ACHIEVEMENTS.find((a) => a.id === id)).filter(Boolean) : [],
	);
	let unitNotPrime = $derived(s?.unit ? game.unitStats(s.unit.id).level !== "prime" : false);
	let resultHeadingEl: HTMLHeadingElement | null = null;

	function captureResultHeading(element: HTMLHeadingElement) {
		resultHeadingEl = element;
		return () => {
			if (resultHeadingEl === element) resultHeadingEl = null;
		};
	}

	$effect(() => {
		const result = s;
		if (!result) return;

		void tick().then(() => {
			if (game.summary === result) resultHeadingEl?.focus();
		});
	});

	function headline(pct: number): string {
		if (pct >= 90) return "Clean audit.";
		if (pct >= 70) return "Solid capture.";
		if (pct >= 50) return "Room to sharpen.";
		return "Keep drilling.";
	}

	function sessionLabel(summary: NonNullable<typeof s>): string {
		if (summary.mode === "daily") return "Daily challenge";
		if (summary.mode === "chapter" && summary.chapterTitle) return summary.chapterTitle;
		return summary.unit?.title ?? "Quiz";
	}
</script>

{#if s}
	<div
		class="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-center gap-6 px-5 py-10 text-center"
	>
		<div class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
			{sessionLabel(s)}
		</div>
		<div class="relative flex size-36 items-center justify-center">
			<div
				class="absolute inset-0 rounded-full p-3"
				style={`background: conic-gradient(hsl(${s.unit?.hue ?? 210} 70% 52%) ${s.scorePct}%, var(--color-muted) 0);`}
				aria-hidden="true"
			>
				<span class="block size-full rounded-full bg-background"></span>
			</div>
			<span class="relative text-3xl font-bold tabular-nums tracking-tight">
				{s.scorePct}%
				<span class="sr-only"> score</span>
			</span>
		</div>
		<h1
			{@attach captureResultHeading}
			tabindex="-1"
			class="rounded-sm text-2xl font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
		>
			{headline(s.scorePct)}
		</h1>
		<p class="text-muted-foreground">
			{s.answered} question{s.answered === 1 ? "" : "s"} · {game.streak.current}-day streak 🔥
		</p>

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
			{#if s.mode === "chapter" && s.unit}
				<Button size="lg" onclick={() => s?.unit && game.openShelf(s.unit.id)}>
					Back to chapters
				</Button>
			{:else if s.mode === "unit" && s.unit && unitNotPrime}
				<Button size="lg" onclick={() => s?.unit && game.startUnit(s.unit.id)}>Keep going</Button>
				<Button size="lg" variant="outline" href="/">Back to home</Button>
			{:else}
				<Button size="lg" href="/">Back to home</Button>
			{/if}
		</div>
	</div>
{/if}
