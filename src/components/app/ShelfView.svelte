<script lang="ts">
	import { tick, untrack } from "svelte";

	import { UNITS } from "$lib/far/deck";
	import type { UnitId } from "$lib/far/types";
	import { resolveChapterTag } from "$lib/far/glossary";
	import { learnChapterPath, learnShelfPath } from "$lib/learn-routes";
	import { consumeShelfScroll, saveShelfScroll } from "$lib/shelf-scroll";
	import { game } from "$lib/quiz-state.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import TopicPill from "./TopicPill.svelte";

	let shelf = $derived(game.shelf);
	let headingEl: HTMLHeadingElement | null = null;

	/** Only glossary-backed jargon — not pedagogical or everyday-English tags. */
	function loadBearingTags(tags: string[]): string[] {
		return tags.filter((tag) => Boolean(resolveChapterTag(tag))).slice(0, 4);
	}

	function captureHeading(element: HTMLHeadingElement) {
		headingEl = element;
		return () => {
			if (headingEl === element) headingEl = null;
		};
	}

	function rememberScrollBeforeChapter() {
		if (!shelf) return;
		saveShelfScroll(shelf.unitId);
	}

	$effect(() => {
		const current = shelf;
		if (!current) return;
		const unitId = current.unitId;
		// One-shot focus id from Back to chapters — don't re-subscribe when we clear it.
		const focusChapterId = untrack(() => game.pendingShelfFocusChapterId);
		void tick().then(() => {
			if (game.shelf !== current) return;
			// Keep a11y focus without jumping the viewport to the heading.
			headingEl?.focus({ preventScroll: true });

			const savedY = consumeShelfScroll(unitId);
			if (savedY != null) {
				window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
				game.pendingShelfFocusChapterId = null;
				return;
			}

			if (focusChapterId) {
				game.pendingShelfFocusChapterId = null;
				const card = document.getElementById(`shelf-chapter-${focusChapterId}`);
				card?.scrollIntoView({ block: "center", behavior: "auto" });
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
				{@attach captureHeading}
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
				{@const pills = loadBearingTags(ch.tags)}
				<li
					id={`shelf-chapter-${ch.id}`}
					class="rounded-2xl border-2 border-border bg-card transition-colors hover:border-primary/50 hover:bg-muted/30"
				>
					<a
						href={learnChapterPath(shelf.unitId, ch.id)}
						class="flex w-full flex-col gap-2 p-4 text-left sm:p-5"
						onclick={rememberScrollBeforeChapter}
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
				onclick={() => game.startUnit(shelf.unitId)}
			>
				Check yourself — Quiz {unitLabel(shelf.unitId)}
			</Button>
		</div>

		<nav class="mt-10 border-t pt-6" aria-label="Other capture shelves">
			<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
				Other shelves
			</p>
			<ul class="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
				{#each UNITS.filter((u) => u.id !== shelf.unitId) as unit (unit.id)}
					<li>
						<a
							href={learnShelfPath(unit.id)}
							class="text-foreground underline-offset-4 hover:underline"
						>{unit.title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}
