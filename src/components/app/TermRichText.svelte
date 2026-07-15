<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { chapterById } from "$lib/far/chapters";
	import { getTerm } from "$lib/far/glossary";
	import type { TextSegment } from "$lib/far/link-glossary-terms";
	import { learnChapterPath } from "$lib/learn-routes";

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
			{@const chapter = term.chapterId ? chapterById(term.chapterId) : undefined}
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
					{#if chapter}
						<a
							class="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
							href={learnChapterPath(chapter.unitId, chapter.id)}
						>
							Open chapter
						</a>
					{/if}
				</Popover.Content>
			</Popover.Root>
		{:else}
			{segment.text}
		{/if}
	{/if}
{/each}
