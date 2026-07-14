<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import { nextChapterOnShelf } from "$lib/far/chapters";
	import type { SourceKind } from "$lib/far/chapters/types";

	let chapter = $derived(game.chapter);
	let headingEl: HTMLHeadingElement | null = $state(null);
	let hasNextChapter = $derived(
		chapter && game.chapterKind === "shelf-chapter"
			? Boolean(nextChapterOnShelf(chapter.id))
			: false,
	);

	$effect(() => {
		const current = chapter;
		if (!current) return;
		void tick().then(() => {
			if (game.chapter === current) headingEl?.focus();
		});
	});

	function sourceKindLabel(kind: SourceKind): string {
		switch (kind) {
			case "controlling-authority":
				return "Controlling authority";
			case "guidance":
				return "Guidance";
			case "decision":
				return "Decision";
			case "capture-practice":
				return "Capture practice";
		}
	}

	function backToShelfOrHome() {
		if (chapter && game.chapterKind === "shelf-chapter") {
			game.openShelf(chapter.unitId);
			return;
		}
		game.goHome();
	}
</script>

{#if chapter}
	<div class="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-16 pt-5 sm:px-6 sm:pt-7">
		<header class="mb-6 sm:mb-8">
			<button
				type="button"
				class="mb-3 text-sm text-muted-foreground underline-offset-4 hover:underline"
				onclick={backToShelfOrHome}
			>
				← {game.chapterKind === "shelf-chapter" ? "Back to shelf" : "Back"}
			</button>
			<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm">
				{chapter.subtitle}
			</p>
			<h1
				bind:this={headingEl}
				tabindex="-1"
				class="mt-1 text-2xl font-bold tracking-tight outline-none sm:text-3xl"
			>
				{chapter.title}
			</h1>
			<p class="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
				{chapter.intro}
			</p>
			{#if chapter.pieces.length > 1}
				<nav class="mt-5" aria-label="On this page">
					<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
						On this page
					</p>
					<ol class="mt-2 list-decimal space-y-1 pl-5 text-sm">
						{#each chapter.pieces as piece (piece.id)}
							<li>
								<a
									class="text-primary underline-offset-4 hover:underline"
									href={`#piece-${piece.id}`}>{piece.title}</a
								>
							</li>
						{/each}
					</ol>
				</nav>
			{/if}
		</header>

		<div class="flex flex-col gap-10 sm:gap-12">
			{#each chapter.pieces as piece, index (piece.id)}
				<article class="scroll-mt-6">
					<p class="text-xs font-semibold tabular-nums text-muted-foreground">
						{index + 1} / {chapter.pieces.length}
					</p>
					<h2
						id={`piece-${piece.id}`}
						tabindex="-1"
						class="mt-1 scroll-mt-6 text-xl font-semibold tracking-tight outline-none sm:text-2xl"
					>
						{piece.title}
					</h2>

					{#if piece.story}
						<p class="mt-3 text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
							{piece.story}
						</p>
					{/if}

					<dl class="mt-5 space-y-4">
						<div>
							<dt class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
								What it is
							</dt>
							<dd class="mt-1 text-sm leading-6 sm:text-base sm:leading-7">{piece.is}</dd>
						</div>
						<div>
							<dt class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
								What it is not
							</dt>
							<dd class="mt-1 text-sm leading-6 sm:text-base sm:leading-7">{piece.isNot}</dd>
						</div>
						<div>
							<dt class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
								Where it fits
							</dt>
							<dd class="mt-1 text-sm leading-6 sm:text-base sm:leading-7">{piece.fits}</dd>
						</div>
					</dl>

					{#if piece.judgment}
						<p class="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
							<span class="font-semibold">Judgment: </span>{piece.judgment}
						</p>
					{/if}

					{#if piece.checklist && piece.checklist.length > 0}
						<div class="mt-4">
							<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
								Field checklist
							</p>
							<ul class="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 sm:text-base sm:leading-7">
								{#each piece.checklist as item (item)}
									<li>{item}</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if piece.quote}
						<blockquote
							class="mt-5 border-l-4 border-primary/40 bg-muted/40 px-4 py-3 text-sm leading-6 sm:text-[0.95rem] sm:leading-7"
						>
							<p class="italic text-foreground/95">“{piece.quote.text}”</p>
							<footer class="mt-2 not-italic">
								<a
									class="text-xs font-medium text-primary underline-offset-4 hover:underline sm:text-sm"
									href={piece.quote.sourceUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									{piece.quote.citation}
								</a>
								<span class="text-xs text-muted-foreground"> · public domain</span>
							</footer>
						</blockquote>
					{:else if piece.sourceUrl && piece.citation}
						<p class="mt-4 text-xs sm:text-sm">
							<a
								class="font-medium text-primary underline-offset-4 hover:underline"
								href={piece.sourceUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{piece.citation}
							</a>
							{#if piece.sourceKind}
								<span class="text-muted-foreground">
									· {sourceKindLabel(piece.sourceKind)}</span
								>
							{/if}
						</p>
					{/if}
				</article>
			{/each}
		</div>

		{#if chapter.furtherReading && chapter.furtherReading.length > 0}
			<section class="mt-10 border-t pt-6 sm:mt-12">
				<h2 class="text-sm font-semibold sm:text-base">Further reading</h2>
				<ul class="mt-3 space-y-2 text-sm">
					{#each chapter.furtherReading as link (link.url + link.label)}
						<li>
							<a
								class="font-medium text-primary underline-offset-4 hover:underline"
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}
							</a>
							<span class="text-muted-foreground"> · {sourceKindLabel(link.kind)}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<section class="mt-10 border-t pt-8 sm:mt-12">
			<p class="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{chapter.closing}</p>
			<div class="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
				<Button
					size="lg"
					class="w-full sm:h-11 sm:flex-1 sm:text-base"
					onclick={() => game.runChapterQuizAction(chapter.quizCta.action)}
				>
					{chapter.quizCta.label}
				</Button>
				{#if game.chapterKind === "shelf-chapter"}
					<Button
						size="lg"
						variant="outline"
						class="w-full sm:h-11 sm:flex-1 sm:text-base"
						onclick={() => game.openNextChapter()}
					>
						{hasNextChapter ? "Go to next chapter" : "Back to shelf"}
					</Button>
				{:else}
					<Button
						size="lg"
						variant="outline"
						class="w-full sm:h-11 sm:w-auto sm:text-base"
						onclick={() => game.goHome()}
					>
						Done reading
					</Button>
				{/if}
			</div>
		</section>
	</div>
{/if}
