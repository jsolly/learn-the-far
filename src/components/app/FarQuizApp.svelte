<script lang="ts">
	import { game } from "$lib/quiz-state.svelte.js";
	import PieHome from "./PieHome.svelte";
	import QuizView from "./QuizView.svelte";
	import SummaryView from "./SummaryView.svelte";

	let main = $state<HTMLElement | null>(null);
	// Move focus to the view container on each view swap so keyboard and screen
	// reader users aren't stranded on a detached node when the screen changes.
	$effect(() => {
		game.view; // track the view so this re-runs on every transition
		main?.focus();
	});
</script>

<main bind:this={main} tabindex="-1" class="min-h-[100dvh] bg-background text-foreground outline-none">
	{#if game.view === "session"}
		<QuizView />
	{:else if game.view === "summary"}
		<SummaryView />
	{:else}
		<PieHome />
	{/if}
</main>
