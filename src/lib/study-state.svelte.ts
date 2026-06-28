import type { Confidence, FarFlashcard, FarPart } from "$lib/far/types";
import { sampleDeck } from "$lib/far/sample-deck";
import {
	clearStudyProgress,
	loadStudyProgress,
	saveStudyProgress,
	type StudyProgress,
	type StudyProgressRecord,
} from "$lib/local-storage";
import { SvelteDate } from "svelte/reactivity";

export type StudyPartFilter = "all" | FarPart["id"];

export class StudySession {
	selectedPart = $state<StudyPartFilter>("all");
	currentIndex = $state(0);
	answerVisible = $state(false);
	progress = $state<StudyProgress>(loadStudyProgress());

	get parts(): FarPart[] {
		return sampleDeck.parts;
	}

	get filteredCards(): FarFlashcard[] {
		if (this.selectedPart === "all") {
			return sampleDeck.cards;
		}

		return sampleDeck.cards.filter((card) => card.partId === this.selectedPart);
	}

	get currentCard(): FarFlashcard | undefined {
		const index = this.getSafeIndex(this.filteredCards.length);
		return index === -1 ? undefined : this.filteredCards[index];
	}

	get totalCards() {
		return this.filteredCards.length;
	}

	get currentPosition() {
		const totalCards = this.totalCards;

		if (totalCards === 0) {
			return 0;
		}

		return this.getSafeIndex(totalCards) + 1;
	}

	get progressPercent() {
		if (this.totalCards === 0) {
			return 0;
		}

		return Math.round((this.reviewedCount / this.totalCards) * 100);
	}

	get reviewedCount() {
		return this.filteredCards.filter((card) => this.progress[card.id]).length;
	}

	get isAnswerVisible() {
		return this.answerVisible;
	}

	get currentProgressRecord(): StudyProgressRecord | undefined {
		const card = this.currentCard;
		return card ? this.progress[card.id] : undefined;
	}

	selectPart(partId: StudyPartFilter) {
		this.selectedPart = this.isKnownPart(partId) ? partId : "all";
		this.currentIndex = 0;
		this.answerVisible = false;
		this.keepCurrentIndexInRange();
	}

	flipCard() {
		if (!this.currentCard) {
			return;
		}

		this.answerVisible = !this.answerVisible;
	}

	markConfidence(confidence: Confidence) {
		const card = this.currentCard;

		if (!card) {
			return;
		}

		const previousRecord = this.progress[card.id];
		const nextProgress = {
			...this.progress,
			[card.id]: {
				cardId: card.id,
				reviewCount: (previousRecord?.reviewCount ?? 0) + 1,
				lastConfidence: confidence,
				lastReviewedAt: new SvelteDate().toISOString(),
			},
		};

		this.progress = nextProgress;
		saveStudyProgress(nextProgress);
		this.answerVisible = false;
		this.nextCard();
	}

	nextCard() {
		const totalCards = this.totalCards;

		if (totalCards === 0) {
			this.currentIndex = 0;
			this.answerVisible = false;
			return;
		}

		this.currentIndex = (this.getSafeIndex(totalCards) + 1) % totalCards;
		this.answerVisible = false;
	}

	resetSession() {
		this.selectedPart = "all";
		this.currentIndex = 0;
		this.answerVisible = false;
		this.progress = {};
		clearStudyProgress();
	}

	private keepCurrentIndexInRange() {
		const totalCards = this.totalCards;
		this.currentIndex = totalCards === 0 ? 0 : this.getSafeIndex(totalCards);
	}

	private getSafeIndex(totalCards: number) {
		if (totalCards === 0) {
			return -1;
		}

		return Math.min(Math.max(this.currentIndex, 0), totalCards - 1);
	}

	private isKnownPart(partId: StudyPartFilter) {
		return partId === "all" || this.parts.some((part) => part.id === partId);
	}
}

export const studySession = new StudySession();
