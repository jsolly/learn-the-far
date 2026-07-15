<script lang="ts">
	import { tick, untrack } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import PieHome from "./PieHome.svelte";
	import QuizView from "./QuizView.svelte";
	import SummaryView from "./SummaryView.svelte";
	import ChapterView from "./ChapterView.svelte";
	import ShelfView from "./ShelfView.svelte";
	import GlossaryView from "./GlossaryView.svelte";

	let {
		initialUnit = null,
		initialChapter = null,
	}: {
		initialUnit?: string | null;
		initialChapter?: string | null;
	} = $props();

	let main = $state<HTMLElement | null>(null);

	// Boot once from Astro route props (SSG/SSR + client). untrack: intentional
	// one-shot read — props don't change after mount for these pages.
	game.bootFromLocation(
		untrack(() => ({ initialUnit, initialChapter })),
	);

	// Child views focus their own descriptive headings. On the home transition,
	// focus its persistent heading instead of announcing an unnamed container.
	$effect(() => {
		const view = game.view;
		if (view !== "home") return;

		void tick().then(() => {
			if (game.view === "home") {
				main?.querySelector<HTMLHeadingElement>("[data-home-heading]")?.focus();
			}
		});
	});
</script>

<main bind:this={main} class="min-h-[100dvh] bg-background text-foreground">
	{#if game.view === "session"}
		<QuizView />
	{:else if game.view === "summary"}
		<SummaryView />
	{:else if game.view === "shelf"}
		<ShelfView />
	{:else if game.view === "chapter"}
		<ChapterView />
	{:else if game.view === "glossary"}
		<GlossaryView />
	{:else}
		<PieHome />
	{/if}
</main>
