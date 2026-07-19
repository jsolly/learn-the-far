<script lang="ts">
	import { tick } from "svelte";

	import { game } from "$lib/quiz-state.svelte.js";
	import { Button } from "$lib/components/ui/button";
	import { nextChapterOnShelf, prevChapterOnShelf, questionsForChapter } from "$lib/far/chapters";
	import type { SourceKind } from "$lib/far/chapters/types";
	import { learnChapterPath, learnShelfPath } from "$lib/learn-routes";
	import { segmentGlossaryText } from "$lib/far/link-glossary-terms";
	import TermRichText from "./TermRichText.svelte";

	let chapter = $derived(game.chapter);
	let headingEl: HTMLHeadingElement | null = null;
	let nextChapter = $derived(
		chapter && game.chapterKind === "shelf-chapter"
			? nextChapterOnShelf(chapter.id)
			: undefined,
	);
	let prevChapter = $derived(
		chapter && game.chapterKind === "shelf-chapter"
			? prevChapterOnShelf(chapter.id)
			: undefined,
	);
	/** End-of-chapter quiz only when this chapter has mapped/tagged questions. */
	let showChapterQuiz = $derived.by(() => {
		const current = chapter;
		if (!current) return false;
		const action = current.quizCta.action;
		if (action.kind !== "quiz-chapter") return true;
		return questionsForChapter(action.chapterId).length > 0;
	});

	/** One pass per chapter so each glossary term links at most once. */
	let linkedCopy = $derived.by(() => {
		const current = chapter;
		if (!current) return null;
		const linkedIds = new Set<string>();
		return {
			intro: segmentGlossaryText(current.intro, linkedIds),
			pieces: current.pieces.map((piece) => ({
				id: piece.id,
				teach: segmentGlossaryText(piece.teach, linkedIds),
				watchFor: piece.watchFor
					? segmentGlossaryText(piece.watchFor, linkedIds)
					: null,
			})),
			closing: current.closing
				? segmentGlossaryText(current.closing, linkedIds)
				: null,
		};
	});

	function captureHeading(element: HTMLHeadingElement) {
		headingEl = element;
		return () => {
			if (headingEl === element) headingEl = null;
		};
	}

	$effect(() => {
		const current = chapter;
		if (!current) return;
		void tick().then(() => {
			if (game.chapter !== current) return;
			headingEl?.focus();
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

	function pieceLinked(pieceId: string) {
		return linkedCopy?.pieces.find((p) => p.id === pieceId);
	}

	/** Normalize for comparing piece citations to further-reading entries. */
	function sourceKey(url: string): string {
		return url.replace(/\/$/, "");
	}

	let furtherReadingKeys = $derived(
		new Set((chapter?.furtherReading ?? []).map((link) => sourceKey(link.url))),
	);

	/** Hide per-piece source rows when the same URL is already under Further reading. */
	function showPieceSource(piece: {
		sourceUrl?: string;
		citation?: string;
	}): boolean {
		return Boolean(
			piece.sourceUrl &&
				piece.citation &&
				!furtherReadingKeys.has(sourceKey(piece.sourceUrl)),
		);
	}

	function returnToShelf(event: MouseEvent) {
		if (!chapter || game.chapterKind !== "shelf-chapter") return;
		// Keep href for open-in-new-tab / middle-click; primary click stays in-app
		// so we can restore the shelf scroll captured when the chapter was opened.
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
			return;
		}
		event.preventDefault();
		game.openShelf(chapter.unitId, { focusChapterId: chapter.id });
	}
</script>

{#if chapter && linkedCopy}
	<div class="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-16 pt-5 sm:px-6 sm:pt-7">
		<header class="mb-6 sm:mb-8">
			{#if game.chapterKind === "shelf-chapter"}
				<a
					href={learnShelfPath(chapter.unitId)}
					class="mb-3 inline-block text-sm text-muted-foreground transition-colors hover:text-link"
					onclick={returnToShelf}
				>
					← Back to shelf
				</a>
			{:else}
				<a
					href="/"
					class="mb-3 inline-block text-sm text-muted-foreground transition-colors hover:text-link"
				>
					← Back
				</a>
			{/if}
			<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm">
				{chapter.subtitle}
			</p>
			<h1
				{@attach captureHeading}
				tabindex="-1"
				class="mt-1 text-2xl font-bold tracking-tight outline-none sm:text-3xl"
			>
				{chapter.title}
			</h1>
			<p class="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
				<TermRichText segments={linkedCopy.intro} currentChapterId={chapter.id} />
			</p>
		</header>

		{#if chapter.pieces.length > 1}
			<nav class="mb-6 sm:mb-8" aria-label="On this page">
				<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
					On this page
				</p>
				<ol class="mt-2 list-decimal space-y-1 pl-5 text-sm">
					{#each chapter.pieces as piece (piece.id)}
						<li>
							<a
								class="app-link"
								href={`#piece-${piece.id}`}>{piece.title}</a
							>
						</li>
					{/each}
				</ol>
			</nav>
		{/if}

		<div class="flex flex-col gap-10 sm:gap-12">
			{#each chapter.pieces as piece, index (piece.id)}
				{@const linked = pieceLinked(piece.id)}
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

					<p class="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
						{#if linked}
							<TermRichText segments={linked.teach} currentChapterId={chapter.id} />
						{:else}
							{piece.teach}
						{/if}
					</p>

					{#if piece.watchFor}
						<div class="mt-4 rounded-md border border-border/80 bg-muted/30 px-4 py-3">
							<p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
								Watch for
							</p>
							<p class="mt-1 text-sm leading-6 sm:text-base sm:leading-7">
								{#if linked?.watchFor}
									<TermRichText
										segments={linked.watchFor}
										currentChapterId={chapter.id}
									/>
								{:else}
									{piece.watchFor}
								{/if}
							</p>
						</div>
					{/if}

					{#if piece.quote}
						<blockquote
							class="mt-5 border-l-4 border-primary/40 bg-muted/40 px-4 py-3 text-sm leading-6 sm:text-[0.95rem] sm:leading-7"
						>
							<p class="italic text-foreground/95">"{piece.quote.text}"</p>
							<footer class="mt-2 not-italic">
								<a
									class="app-link text-xs font-medium sm:text-sm"
									href={piece.quote.sourceUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									{piece.quote.citation} ↗
								</a>
							</footer>
						</blockquote>
					{:else if showPieceSource(piece)}
						<p class="mt-4 text-xs sm:text-sm">
							<a
								class="app-link font-medium"
								href={piece.sourceUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{piece.citation} ↗
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
								class="app-link font-medium"
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label} ↗
							</a>
							<span class="text-muted-foreground"> · {sourceKindLabel(link.kind)}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<section class="mt-10 border-t pt-8 sm:mt-12">
			{#if chapter.closing && linkedCopy.closing}
				<p class="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
					<TermRichText
						segments={linkedCopy.closing}
						currentChapterId={chapter.id}
					/>
				</p>
			{/if}
			<div class={`${chapter.closing ? "mt-6" : ""} flex flex-col gap-3`}>
				{#if game.chapterKind === "shelf-chapter"}
					{#if prevChapter || nextChapter}
						<nav
							class="grid grid-cols-2 gap-4"
							aria-label="Adjacent chapters"
						>
							<div class="min-w-0">
								{#if prevChapter}
									<Button
										size="sm"
										variant="outline"
										class="w-full px-3"
										href={learnChapterPath(prevChapter.unitId, prevChapter.id)}
									>
										← Previous
									</Button>
								{/if}
							</div>
							<div class="min-w-0">
								{#if nextChapter}
									<Button
										size="sm"
										variant="outline"
										class="w-full px-3"
										href={learnChapterPath(nextChapter.unitId, nextChapter.id)}
									>
										Next →
									</Button>
								{/if}
							</div>
						</nav>
					{/if}
				{/if}
				{#if showChapterQuiz}
					<Button
						size="lg"
						class="w-full sm:h-11 sm:text-base"
						onclick={() => game.runChapterQuizAction(chapter.quizCta.action)}
					>
						{chapter.quizCta.label}
					</Button>
				{/if}
				{#if game.chapterKind === "shelf-chapter"}
					<Button
						size="lg"
						variant="outline"
						class="w-full sm:h-11 sm:text-base"
						href={learnShelfPath(chapter.unitId)}
						onclick={returnToShelf}
					>
						Browse chapters
					</Button>
				{:else}
					<Button
						size="lg"
						variant="outline"
						class="w-full sm:h-11 sm:w-auto sm:text-base"
						href="/"
					>
						Done reading
					</Button>
				{/if}
			</div>
		</section>
	</div>
{/if}
