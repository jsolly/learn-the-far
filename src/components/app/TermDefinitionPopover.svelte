<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { chapterById } from "$lib/far/chapters";
	import type { GlossaryTerm } from "$lib/far/glossary";
	import { learnChapterPath } from "$lib/learn-routes";
	import type { Snippet } from "svelte";

	let {
		term,
		triggerClass,
		currentChapterId,
		children,
	}: {
		term: GlossaryTerm;
		triggerClass: string;
		/** When set, hide "Open chapter" if the term is defined in this chapter. */
		currentChapterId?: string;
		children: Snippet;
	} = $props();

	const uid = $props.id();
	const titleId = `${uid}-title`;
	const descriptionId = `${uid}-description`;
	let titleEl: HTMLElement | null = $state(null);

	let chapter = $derived(term.chapterId ? chapterById(term.chapterId) : undefined);
	let showOpenChapter = $derived(
		Boolean(chapter && term.chapterId && term.chapterId !== currentChapterId),
	);

	function onOpenAutoFocus(event: Event) {
		event.preventDefault();
		titleEl?.focus();
	}
</script>

<Popover.Root>
	<Popover.Trigger class={triggerClass}>
		{@render children()}
	</Popover.Trigger>
	<Popover.Content
		class="w-72 p-3 sm:w-80"
		align="start"
		role="dialog"
		aria-modal="false"
		aria-labelledby={titleId}
		aria-describedby={descriptionId}
		{onOpenAutoFocus}
	>
		<Popover.Header class="gap-1 p-0">
			<Popover.Title
				bind:ref={titleEl}
				id={titleId}
				tabindex="-1"
				class="text-sm font-semibold outline-none"
			>
				{term.term}
			</Popover.Title>
			<Popover.Description id={descriptionId} class="text-sm leading-5 text-muted-foreground">
				{term.definition}
			</Popover.Description>
		</Popover.Header>
		{#if showOpenChapter && chapter}
			<a
				class="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
				href={learnChapterPath(chapter.unitId, chapter.id)}
			>
				Open chapter
			</a>
		{/if}
	</Popover.Content>
</Popover.Root>
