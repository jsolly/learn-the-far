<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { chapterById } from "$lib/far/chapters";
	import { resolveChapterTag } from "$lib/far/glossary";
	import { learnChapterPath } from "$lib/learn-routes";

	let {
		tag,
	}: {
		tag: string;
	} = $props();

	let term = $derived(resolveChapterTag(tag));
	let chapter = $derived(term?.chapterId ? chapterById(term.chapterId) : undefined);
</script>

{#if term}
	<Popover.Root>
		<Popover.Trigger
			class="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] text-muted-foreground outline-none transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:text-xs"
		>
			{tag}
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
	<span
		class="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] text-muted-foreground sm:text-xs"
	>
		{tag}
	</span>
{/if}
