<script lang="ts">
	import { tick } from "svelte";

	import { chapterById } from "$lib/far/chapters";
	import { glossaryByLetter, type GlossaryTerm } from "$lib/far/glossary";
	import { learnChapterPath } from "$lib/learn-routes";
	import { Button } from "$lib/components/ui/button";

	let filter = $state("");
	let headingEl: HTMLHeadingElement | null = $state(null);

	let groups = $derived.by(() => {
		const q = filter.trim().toLowerCase();
		const all = glossaryByLetter();
		if (!q) return all;
		return all
			.map((g) => ({
				letter: g.letter,
				terms: g.terms.filter((t) => termMatches(t, q)),
			}))
			.filter((g) => g.terms.length > 0);
	});

	function escapeRegExp(value: string): string {
		return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	function termMatches(term: GlossaryTerm, q: string): boolean {
		if (term.term.toLowerCase().includes(q)) return true;
		if ((term.aliases ?? []).some((a) => a.toLowerCase().includes(q))) return true;
		// Short queries: word-boundary match in definitions so "COR" ≠ "record".
		if (q.length < 4) {
			const re = new RegExp(`(?:^|[^a-z0-9])${escapeRegExp(q)}(?:[^a-z0-9]|$)`, "i");
			return re.test(term.definition);
		}
		return term.definition.toLowerCase().includes(q);
	}

	$effect(() => {
		void tick().then(() => headingEl?.focus());
	});
</script>

<div class="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-16 pt-5 sm:px-6 sm:pt-7">
	<header class="mb-6 sm:mb-8">
		<a href="/" class="mb-3 inline-block text-sm text-muted-foreground transition-colors hover:text-link">
			← Back
		</a>
		<h1
			bind:this={headingEl}
			tabindex="-1"
			class="text-2xl font-bold tracking-tight outline-none sm:text-3xl"
		>
			Glossary
		</h1>
		<p class="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
			Key FAR and capture terms — jargon worth looking up, not everyday English. In chapters,
			the first mention of a core term opens a short definition.
		</p>
		<label class="mt-4 block">
			<span class="sr-only">Filter glossary</span>
			<input
				type="search"
				bind:value={filter}
				placeholder="Filter terms…"
				class="w-full rounded-xl border-2 bg-card px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
			/>
		</label>
	</header>

	{#if groups.length === 0}
		<p class="text-sm text-muted-foreground">No terms match that filter.</p>
	{:else}
		<div class="flex flex-col gap-8 sm:gap-10">
			{#each groups as group (group.letter)}
				<section>
					<h2
						class="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-sm"
					>
						{group.letter}
					</h2>
					<ul class="mt-3 flex flex-col gap-4">
						{#each group.terms as term (term.id)}
							{@const chapter = term.chapterId ? chapterById(term.chapterId) : undefined}
							<li class="rounded-2xl border-2 bg-card p-4 sm:p-5">
								<h3 class="font-semibold sm:text-lg">{term.term}</h3>
								{#if term.aliases && term.aliases.length > 0}
									<p class="mt-0.5 text-xs text-muted-foreground sm:text-sm">
										Also: {term.aliases.slice(0, 4).join(", ")}{term.aliases.length > 4
											? "…"
											: ""}
									</p>
								{/if}
								<p class="mt-2 text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
									{term.definition}
								</p>
								{#if chapter}
									<div class="mt-3">
										<Button
											variant="outline"
											size="sm"
											href={learnChapterPath(chapter.unitId, chapter.id)}
										>
											Open chapter
										</Button>
									</div>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	{/if}
</div>
