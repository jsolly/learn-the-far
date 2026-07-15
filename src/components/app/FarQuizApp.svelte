<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import PieHome from "./PieHome.svelte";
	import QuizView from "./QuizView.svelte";
	import SummaryView from "./SummaryView.svelte";
	import ChapterView from "./ChapterView.svelte";
	import ShelfView from "./ShelfView.svelte";

	let {
		initialUnit = null,
		initialChapter = null,
	}: {
		initialUnit?: string | null;
		initialChapter?: string | null;
	} = $props();

	let main = $state<HTMLElement | null>(null);

	// Boot on the client before first paint (not during SSG — module singleton).
	if (typeof window !== "undefined") {
		game.bootFromLocation({ initialUnit, initialChapter });
	}

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
	{:else}
		<PieHome />
	{/if}
</main>
