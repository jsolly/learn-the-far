<script lang="ts">
	import { tick } from "svelte";

	import { UNITS } from "$lib/far/deck";
	import type { UnitId } from "$lib/far/types";
	import { game } from "$lib/quiz-state.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	let shelf = $derived(game.shelf);
	let headingEl: HTMLHeadingElement | null = $state(null);

	$effect(() => {
		const current = shelf;
		if (!current) return;
		void tick().then(() => {
			if (game.shelf === current) headingEl?.focus();
		});
	});

	function unitLabel(unitId: UnitId): string {
		return UNITS.find((u) => u.id === unitId)?.label ?? "this slice";
	}
</script>

{#if shelf}
	<div class="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-16 pt-5 sm:px-6 sm:pt-7">
		<header class="mb-6 sm:mb-8">
			<button
				type="button"
				class="mb-3 text-sm text-muted-foreground underline-offset-4 hover:underline"
				onclick={() => game.goHome()}
			>
				← Back to home
			</button>
			{#if shelf.subtitle}
				<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm">
					{shelf.subtitle}
				</p>
			{/if}
			<h1
				bind:this={headingEl}
				tabindex="-1"
				class="mt-1 text-2xl font-bold tracking-tight outline-none sm:text-3xl"
			>
				{shelf.title}
			</h1>
			{#if shelf.intro}
				<p class="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
					{shelf.intro}
				</p>
			{/if}
		</header>

		<ul class="flex flex-col gap-3 sm:gap-4" aria-label="Chapters on this shelf">
			{#each shelf.chapters as ch (ch.id)}
				{@const read = game.isChapterRead(ch.id)}
				<li>
					<button
						type="button"
						class="flex w-full flex-col gap-2 rounded-2xl border-2 border-border bg-card p-4 text-left transition-colors hover:border-primary/50 hover:bg-muted/30 sm:p-5"
						onclick={() => game.openShelfChapter(ch.id)}
					>
						<div class="flex flex-wrap items-center gap-2">
							{#if read}
								<Badge variant="secondary" class="text-[0.65rem] sm:text-xs">Read</Badge>
							{/if}
							<span class="text-xs tabular-nums text-muted-foreground sm:text-sm">
								~{ch.readingMinutes} min
							</span>
						</div>
						<p class="font-semibold leading-snug sm:text-lg">{ch.title}</p>
						<p class="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
							{ch.summary}
						</p>
						{#if ch.tags.length > 0}
							<div class="flex flex-wrap gap-1.5">
								{#each ch.tags.slice(0, 4) as tag (tag)}
									<span
										class="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] text-muted-foreground sm:text-xs"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/if}
					</button>
				</li>
			{/each}
		</ul>

		<div class="mt-10 border-t pt-6 sm:mt-12">
			<p class="mb-3 text-sm text-muted-foreground">Ready to prove it?</p>
			<Button
				size="lg"
				class="w-full sm:h-11 sm:w-auto sm:text-base"
				onclick={() => game.startUnit(shelf.unitId)}
			>
				Check yourself — Quiz {unitLabel(shelf.unitId)}
			</Button>
		</div>
	</div>
{/if}
