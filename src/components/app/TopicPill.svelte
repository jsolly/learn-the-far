<script lang="ts">
	import { resolveChapterTag } from "$lib/far/glossary";
	import TermDefinitionPopover from "./TermDefinitionPopover.svelte";

	let {
		tag,
	}: {
		tag: string;
	} = $props();

	let term = $derived(resolveChapterTag(tag));
</script>

{#if term}
	<TermDefinitionPopover
		{term}
		triggerClass="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] text-muted-foreground outline-none transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:text-xs"
	>
		{tag}
	</TermDefinitionPopover>
{:else}
	<span
		class="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] text-muted-foreground sm:text-xs"
	>
		{tag}
	</span>
{/if}
