<script lang="ts">
	import { getTerm } from "$lib/far/glossary";
	import type { TextSegment } from "$lib/far/link-glossary-terms";
	import TermDefinitionPopover from "./TermDefinitionPopover.svelte";

	let {
		segments,
		currentChapterId,
	}: {
		segments: TextSegment[];
		/** Chapter the reader is currently viewing, if any. */
		currentChapterId?: string;
	} = $props();
</script>

{#each segments as segment, i (i)}
	{#if segment.kind === "text"}
		{segment.text}
	{:else}
		{@const term = getTerm(segment.termId)}
		{#if term}
			<TermDefinitionPopover
				{term}
				{currentChapterId}
				triggerClass="app-link cursor-pointer rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
			>
				{segment.text}
			</TermDefinitionPopover>
		{:else}
			{segment.text}
		{/if}
	{/if}
{/each}
