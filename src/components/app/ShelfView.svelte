<script lang="ts">
	import { tick, untrack } from "svelte";
	import CheckIcon from "@lucide/svelte/icons/check";

	import { UNITS } from "$lib/far/deck";
	import { SHELF_HIDE_READ_KEY } from "$lib/far/constants";
	import type { UnitId } from "$lib/far/types";
	import { resolveChapterTag } from "$lib/far/glossary";
	import { learnChapterPath, learnShelfPath } from "$lib/learn-routes";
	import { restoreShelfViewport, saveShelfScroll } from "$lib/shelf-scroll";
	import { game } from "$lib/quiz-state.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import TopicPill from "./TopicPill.svelte";

	function loadHideReadPref(): boolean {
		if (typeof window === "undefined" || !("localStorage" in window)) return false;
		try {
			return window.localStorage.getItem(SHELF_HIDE_READ_KEY) === "1";
		} catch {
			return false;
		}
	}

	function persistHideReadPref(value: boolean) {
		if (typeof window === "undefined" || !("localStorage" in window)) return;
		try {
			window.localStorage.setItem(SHELF_HIDE_READ_KEY, value ? "1" : "0");
		} catch {
			// Ignore quota / private-mode failures; in-memory toggle still works.
		}
	}

	let shelf = $derived(game.shelf);
	let headingEl: HTMLHeadingElement | null = null;
	let hideRead = $state(loadHideReadPref());

	let readCount = $derived(
		shelf ? shelf.chapters.filter((ch) => game.isChapterRead(ch.id)).length : 0,
	);
	let visibleChapters = $derived(
		shelf
			? hideRead
				? shelf.chapters.filter((ch) => !game.isChapterRead(ch.id))
				: shelf.chapters
			: [],
	);

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

	function setHideRead(next: boolean) {
		hideRead = next;
		persistHideReadPref(next);
	}

	function toggleHideRead() {
		setHideRead(!hideRead);
	}

	$effect(() => {
		const current = shelf;
		if (!current) return;
		const unitId = current.unitId;
		// One-shot focus id from Back to chapters / Browse chapters.
		const focusChapterId = untrack(() => game.pendingShelfFocusChapterId);
		void tick().then(async () => {
			if (game.shelf !== current) return;
			// Keep a11y focus without jumping the viewport to the heading.
			headingEl?.focus({ preventScroll: true });
			game.pendingShelfFocusChapterId = null;
			await restoreShelfViewport(unitId, { focusChapterId });
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
				class="mb-3 inline-block text-sm text-muted-foreground transition-colors hover:text-link"
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

		{#if readCount > 0}
			<div class="mb-4 flex flex-wrap items-center gap-2">
				<Button
					variant={hideRead ? "secondary" : "outline"}
					size="sm"
					aria-pressed={hideRead}
					onclick={toggleHideRead}
				>
					{hideRead ? `Show read (${readCount})` : `Hide read (${readCount})`}
				</Button>
			</div>
		{/if}

		{#if visibleChapters.length === 0}
			<div class="rounded-2xl border border-dashed bg-muted/40 px-4 py-8 text-center sm:px-5">
				<p class="text-sm text-muted-foreground sm:text-base">
					All chapters on this shelf are read.
				</p>
				{#if hideRead && readCount > 0}
					<Button class="mt-4" variant="outline" size="sm" onclick={() => setHideRead(false)}>
						Show read chapters
					</Button>
				{/if}
			</div>
		{:else}
			<ul class="flex flex-col gap-3 sm:gap-4" aria-label="Chapters on this shelf">
				{#each visibleChapters as ch (ch.id)}
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
							<div class="flex items-center justify-between gap-2">
								<span class="text-xs tabular-nums text-muted-foreground sm:text-sm">
									~{ch.readingMinutes} min
								</span>
								{#if read}
									<span
										class="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white sm:size-6 dark:bg-emerald-500"
										title="Read"
									>
										<span class="sr-only">Read</span>
										<CheckIcon class="size-3 sm:size-3.5" strokeWidth={3} aria-hidden="true" />
									</span>
								{/if}
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
		{/if}

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
							class="app-link"
						>{unit.title}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="mt-10 border-t pt-6 sm:mt-12">
			<Button
				size="lg"
				variant="outline"
				class="w-full sm:h-11 sm:text-base"
				href="/"
			>
				Back to home
			</Button>
		</div>
	</div>
{/if}
