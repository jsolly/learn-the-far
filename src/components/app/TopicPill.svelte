<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { resolveChapterTag } from "$lib/far/glossary";
	import { game } from "$lib/quiz-state.svelte.js";

	let {
		tag,
	}: {
		tag: string;
	} = $props();

	let term = $derived(resolveChapterTag(tag));
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
	<span
		class="rounded-md bg-muted px-1.5 py-0.5 text-[0.65rem] text-muted-foreground sm:text-xs"
	>
		{tag}
	</span>
{/if}
