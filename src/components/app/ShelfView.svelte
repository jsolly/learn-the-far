<script lang="ts">
	import { tick } from "svelte";

	import { UNITS } from "$lib/far/deck";
	import type { UnitId } from "$lib/far/types";
	import { resolveChapterTag } from "$lib/far/glossary";
	import { learnChapterPath } from "$lib/learn-routes";
	import { game } from "$lib/quiz-state.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import TopicPill from "./TopicPill.svelte";

	let shelf = $derived(game.shelf);
	let headingEl: HTMLHeadingElement | null = $state(null);
	let unlockHeadingEl: HTMLHeadingElement | null = $state(null);

	/** Only glossary-backed jargon — not pedagogical or everyday-English tags. */
	function loadBearingTags(tags: string[]): string[] {
		return tags.filter((tag) => Boolean(resolveChapterTag(tag))).slice(0, 4);
	}

	$effect(() => {
		const current = shelf;
		if (!current) return;
		const locked = game.routeLocked;
		void tick().then(() => {
			if (game.shelf !== current) return;
			if (locked) {
				unlockHeadingEl?.focus();
			} else {
				headingEl?.focus();
			}
		});
	});

	function unitLabel(unitId: UnitId): string {
		return UNITS.find((u) => u.id === unitId)?.label ?? "this slice";
	}
</script>

{#if shelf}
	<div class="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-16 pt-5 sm:px-6 sm:pt-7">
		<header class="mb-6 sm:mb-8">
			<a
				href="/"
				class="mb-3 inline-block text-sm text-muted-foreground underline-offset-4 hover:underline"
			>
				← Back to home
			</a>
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

		{#if game.routeLocked}
			<div class="mb-6 rounded-2xl border-2 border-border bg-card p-5 sm:mb-8 sm:p-6">
				<h2
					bind:this={unlockHeadingEl}
					tabindex="-1"
					class="font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-lg"
				>
					Quiz unlocks after Basics
				</h2>
				<p class="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7" role="status">
					You can read every chapter on this shelf now. Lifecycle quizzes open after you
					clear Master the Basics (or test out).
				</p>
				<div class="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
					<Button size="lg" class="w-full sm:w-auto" href="/learn/fundamentals/">
						Open Basics shelf
					</Button>
					<Button size="lg" variant="outline" class="w-full sm:w-auto" href="/">
						Back to home
					</Button>
				</div>
			</div>
		{/if}

		<ul class="flex flex-col gap-3 sm:gap-4" aria-label="Chapters on this shelf">
			{#each shelf.chapters as ch (ch.id)}
				{@const read = game.isChapterRead(ch.id)}
				{@const pills = loadBearingTags(ch.tags)}
				<li
					class="rounded-2xl border-2 border-border bg-card transition-colors hover:border-primary/50 hover:bg-muted/30"
				>
					<a
						href={learnChapterPath(shelf.unitId, ch.id)}
						class="flex w-full flex-col gap-2 p-4 text-left sm:p-5"
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
					</a>
					{#if pills.length > 0}
						<div class="flex flex-col gap-1.5 px-4 pb-4 sm:px-5 sm:pb-5">
							<p
								class="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs"
							>
								Topics covered
							</p>
							<div class="flex flex-wrap gap-1.5">
								{#each pills as tag (tag)}
									<TopicPill {tag} />
								{/each}
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>

		<div class="mt-10 border-t pt-6 sm:mt-12">
			<p class="mb-3 text-sm text-muted-foreground">Ready to prove it?</p>
			<Button
				size="lg"
				class="w-full sm:h-11 sm:w-auto sm:text-base"
				disabled={game.routeLocked}
				onclick={() => game.startUnit(shelf.unitId)}
			>
				Check yourself — Quiz {unitLabel(shelf.unitId)}
			</Button>
		</div>
	</div>
{/if}
