<script lang="ts">
	import type { Confidence, FarFlashcard, FarPart } from "$lib/far/types";
	import { sampleDeck } from "$lib/far/sample-deck";
	import { studySession, type StudyPartFilter } from "$lib/study-state.svelte.js";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from "$lib/components/ui/card";
	import { Progress } from "$lib/components/ui/progress";
	import { RadioGroup, RadioGroupItem } from "$lib/components/ui/radio-group";
	import { Tabs, TabsContent, TabsList, TabsTrigger } from "$lib/components/ui/tabs";

	type PartOption = {
		id: StudyPartFilter;
		label: string;
		title: string;
		sourceUrl: string;
		cardCount: number;
	};

	type ConfidenceOption = {
		value: Confidence;
		label: string;
		helper: string;
		variant: "default" | "secondary" | "outline" | "destructive";
	};

	let activeTab = $state("study");

	const confidenceOptions: ConfidenceOption[] = [
		{
			value: "again",
			label: "Again",
			helper: "Missed it",
			variant: "destructive",
		},
		{
			value: "hard",
			label: "Hard",
			helper: "Needs work",
			variant: "outline",
		},
		{
			value: "good",
			label: "Good",
			helper: "Got it",
			variant: "default",
		},
		{
			value: "easy",
			label: "Easy",
			helper: "Mastered",
			variant: "secondary",
		},
	];

	let currentCard = $derived(studySession.currentCard);
	let currentPart = $derived(currentCard ? findPart(currentCard.partId) : undefined);
	let browseCards = $derived(studySession.filteredCards);
	let partOptions = $derived([
		{
			id: "all" as const,
			label: "All FAR parts",
			title: "Every bundled sample card",
			sourceUrl: sampleDeck.sourceUrl,
			cardCount: sampleDeck.cards.length,
		},
		...studySession.parts.map((part) => ({
			id: part.id,
			label: part.label,
			title: part.title,
			sourceUrl: part.sourceUrl,
			cardCount: sampleDeck.cards.filter((card) => card.partId === part.id).length,
		})),
	] satisfies PartOption[]);

	function findPart(partId: string): FarPart | undefined {
		return studySession.parts.find((part) => part.id === partId);
	}

	function selectPart(partId: StudyPartFilter) {
		studySession.selectPart(partId);
	}

	function markConfidence(confidence: Confidence) {
		studySession.markConfidence(confidence);
	}

	function getPartLabel(card: FarFlashcard) {
		return findPart(card.partId)?.label ?? "FAR";
	}
</script>

<main class="min-h-screen bg-background text-foreground">
	<section class="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
		<div class="overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-muted/40 to-primary/10 p-6 shadow-sm sm:p-8 lg:p-10">
			<div class="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
				<div class="space-y-5">
					<Badge variant="secondary" class="w-fit">Bundled MVP deck</Badge>
					<div class="space-y-3">
						<h1 class="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
							Learn The FAR, one citation at a time.
						</h1>
						<p class="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
							Study core Federal Acquisition Regulation concepts with a local-first flashcard
							workflow. No account, network calls, auth, or database required.
						</p>
					</div>
					<div class="flex flex-wrap gap-2 text-sm text-muted-foreground">
						<Badge variant="outline">Progress stays in this browser</Badge>
						<Badge variant="outline">{sampleDeck.cards.length} sample cards</Badge>
						<Badge variant="outline">{sampleDeck.parts.length} FAR parts</Badge>
					</div>
				</div>

				<Card class="bg-background/80">
					<CardHeader>
						<CardTitle>{sampleDeck.title}</CardTitle>
						<CardDescription>{sampleDeck.description}</CardDescription>
					</CardHeader>
					<CardFooter class="flex flex-wrap gap-2">
						<Button href={sampleDeck.sourceUrl} target="_blank" rel="noreferrer" variant="outline">
							Browse FAR source
						</Button>
						<Button onclick={() => (activeTab = "study")}>Start studying</Button>
					</CardFooter>
				</Card>
			</div>
		</div>

		<Tabs bind:value={activeTab} class="w-full">
			<TabsList class="grid w-full grid-cols-2 sm:w-80">
				<TabsTrigger value="study">Study</TabsTrigger>
				<TabsTrigger value="browse">Browse</TabsTrigger>
			</TabsList>

			<TabsContent value="study" class="mt-6">
				<div class="grid gap-6 lg:grid-cols-[22rem_1fr]">
					<Card class="h-fit">
						<CardHeader>
							<CardTitle>Deck filter</CardTitle>
							<CardDescription>Choose a FAR part to focus your study session.</CardDescription>
						</CardHeader>
						<CardContent>
							<RadioGroup value={studySession.selectedPart} aria-label="Choose FAR part">
								{#each partOptions as part (part.id)}
									<div class="flex items-start gap-3 rounded-xl border p-3 transition-colors hover:bg-muted/50">
										<RadioGroupItem
											id={`study-filter-${part.id}`}
											value={part.id}
											aria-label={`Study ${part.label}`}
											class="mt-1"
											onclick={() => selectPart(part.id)}
										/>
										<label for={`study-filter-${part.id}`} class="grid cursor-pointer gap-1">
											<span class="font-medium">{part.label}</span>
											<span class="text-sm leading-5 text-muted-foreground">{part.title}</span>
											<span class="text-xs text-muted-foreground">
												{part.cardCount}
												{part.cardCount === 1 ? "card" : "cards"}
											</span>
										</label>
									</div>
								{/each}
							</RadioGroup>
						</CardContent>
					</Card>

					<div class="space-y-6">
						<Card>
							<CardHeader class="gap-3">
								<div class="flex flex-wrap items-center justify-between gap-3">
									<div>
										<CardTitle>Study progress</CardTitle>
										<CardDescription>
											{studySession.reviewedCount} of {studySession.totalCards} cards reviewed
										</CardDescription>
									</div>
									<Badge variant="outline">
										{studySession.currentPosition}/{studySession.totalCards}
									</Badge>
								</div>
								<Progress
									value={studySession.progressPercent}
									max={100}
									aria-label="Study progress"
								/>
							</CardHeader>
						</Card>

						{#if currentCard}
							<Card class="min-h-[28rem]">
								<CardHeader class="gap-4">
									<div class="flex flex-wrap items-center gap-2">
										<Badge>{currentCard.citation}</Badge>
										{#if currentPart}
											<Badge variant="outline">{currentPart.label}</Badge>
										{/if}
										{#if studySession.currentProgressRecord}
											<Badge variant="secondary">
												Last: {studySession.currentProgressRecord.lastConfidence}
											</Badge>
										{/if}
									</div>
									<div class="space-y-2">
										<CardTitle class="text-2xl leading-tight">{currentCard.prompt}</CardTitle>
										<CardDescription>
											Flip the card, compare your answer, then rate your confidence.
										</CardDescription>
									</div>
								</CardHeader>

								<CardContent class="space-y-5">
									{#if studySession.isAnswerVisible}
										<section
											id="current-answer"
											aria-live="polite"
											class="rounded-2xl border bg-muted/50 p-5"
										>
											<h2 class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
												Answer
											</h2>
											<p class="mt-2 text-base leading-7">{currentCard.answer}</p>
										</section>
									{:else}
										<div class="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">
											Answer hidden. Try to recall the rule before flipping.
										</div>
									{/if}

									<div class="flex flex-wrap gap-2">
										{#each currentCard.tags as tag (tag)}
											<Badge variant="outline">#{tag}</Badge>
										{/each}
									</div>
								</CardContent>

								<CardFooter class="flex flex-col items-stretch gap-4 border-t bg-muted/20 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
									<div class="flex flex-wrap gap-2">
										<Button
											aria-controls="current-answer"
											aria-expanded={studySession.isAnswerVisible}
											onclick={() => studySession.flipCard()}
										>
											{studySession.isAnswerVisible ? "Hide answer" : "Flip answer"}
										</Button>
										<Button variant="outline" onclick={() => studySession.nextCard()}>
											Next card
										</Button>
										<Button variant="ghost" onclick={() => studySession.resetSession()}>
											Reset local progress
										</Button>
									</div>

									<Button href={currentCard.sourceUrl} target="_blank" rel="noreferrer" variant="link">
										Open source
									</Button>
								</CardFooter>
							</Card>

							{#if studySession.isAnswerVisible}
								<Card>
									<CardHeader>
										<CardTitle>How confident were you?</CardTitle>
										<CardDescription>Your rating is saved locally for this card.</CardDescription>
									</CardHeader>
									<CardContent class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
										{#each confidenceOptions as option (option.value)}
											<Button
												variant={option.variant}
												class="h-auto flex-col items-start gap-1 p-4 text-left"
												onclick={() => markConfidence(option.value)}
											>
												<span>{option.label}</span>
												<span class="text-xs opacity-80">{option.helper}</span>
											</Button>
										{/each}
									</CardContent>
								</Card>
							{/if}
						{:else}
							<Card>
								<CardHeader>
									<CardTitle>No cards found</CardTitle>
									<CardDescription>
										This FAR part does not have bundled study cards yet. Choose another filter or reset
										the session.
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<Button onclick={() => studySession.resetSession()}>Reset session</Button>
								</CardFooter>
							</Card>
						{/if}
					</div>
				</div>
			</TabsContent>

			<TabsContent value="browse" class="mt-6">
				<div class="grid gap-6 lg:grid-cols-[22rem_1fr]">
					<Card class="h-fit">
						<CardHeader>
							<CardTitle>Browse cards</CardTitle>
							<CardDescription>
								Use the same FAR part filter to inspect prompts, answers, citations, categories,
								and source links.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RadioGroup value={studySession.selectedPart} aria-label="Choose cards to browse">
								{#each partOptions as part (part.id)}
									<div class="flex items-start gap-3 rounded-xl border p-3 transition-colors hover:bg-muted/50">
										<RadioGroupItem
											id={`browse-filter-${part.id}`}
											value={part.id}
											aria-label={`Browse ${part.label}`}
											class="mt-1"
											onclick={() => selectPart(part.id)}
										/>
										<label for={`browse-filter-${part.id}`} class="grid cursor-pointer gap-1">
											<span class="font-medium">{part.label}</span>
											<span class="text-sm leading-5 text-muted-foreground">{part.title}</span>
										</label>
									</div>
								{/each}
							</RadioGroup>
						</CardContent>
					</Card>

					<div class="grid gap-4">
						{#if browseCards.length > 0}
							{#each browseCards as card (card.id)}
								<Card>
									<CardHeader>
										<div class="flex flex-wrap gap-2">
											<Badge>{card.citation}</Badge>
											<Badge variant="outline">{getPartLabel(card)}</Badge>
										</div>
										<CardTitle class="text-xl">{card.prompt}</CardTitle>
										<CardDescription class="text-base leading-7">{card.answer}</CardDescription>
									</CardHeader>
									<CardContent class="flex flex-wrap gap-2">
										{#each card.tags as tag (tag)}
											<Badge variant="secondary">{tag}</Badge>
										{/each}
									</CardContent>
									<CardFooter class="flex justify-between gap-3 border-t bg-muted/20 p-4">
										<span class="text-sm text-muted-foreground">
											Category: {getPartLabel(card)}
										</span>
										<Button href={card.sourceUrl} target="_blank" rel="noreferrer" variant="link">
											Source
										</Button>
									</CardFooter>
								</Card>
							{/each}
						{:else}
							<Card>
								<CardHeader>
									<CardTitle>No bundled cards</CardTitle>
									<CardDescription>
										Try a different FAR part or return to all bundled sample cards.
									</CardDescription>
								</CardHeader>
							</Card>
						{/if}
					</div>
				</div>
			</TabsContent>
		</Tabs>
	</section>
</main>
