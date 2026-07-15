<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { getTerm } from "$lib/far/glossary";
	import type { TextSegment } from "$lib/far/link-glossary-terms";
	import { game } from "$lib/quiz-state.svelte.js";

	let {
		segments,
	}: {
		segments: TextSegment[];
	} = $props();
</script>

{#each segments as segment, i (i)}
	{#if segment.kind === "text"}
		{segment.text}
	{:else}
		{@const term = getTerm(segment.termId)}
		{#if term}
			<Popover.Root>
				<Popover.Trigger
					class="cursor-pointer rounded-sm text-primary underline decoration-dotted decoration-primary/70 underline-offset-2 outline-none hover:decoration-solid focus-visible:ring-2 focus-visible:ring-ring"
				>
					{segment.text}
				</Popover.Trigger>
				<Popover.Content class="w-72 p-3 sm:w-80" align="start">
					<Popover.Header class="gap-1 p-0">
						<Popover.Title class="text-sm font-semibold">{term.term}</Popover.Title>
						<Popover.Description class="text-sm leading-5 text-muted-foreground">
							{term.definition}
						</Popover.Description>
					</Popover.Header>
					{#if term.chapterId}
						<button
							type="button"
							class="mt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
							onclick={() => {
								if (term.chapterId) game.openShelfChapter(term.chapterId);
							}}
						>
							Open chapter
						</button>
					{/if}
				</Popover.Content>
			</Popover.Root>
		{:else}
			{segment.text}
		{/if}
	{/if}
{/each}
