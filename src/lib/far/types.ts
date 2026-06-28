export type Confidence = "again" | "hard" | "good" | "easy";

export type FarPart = {
	id: string;
	label: string;
	title: string;
	sourceUrl: string;
};

export type FarFlashcard = {
	id: string;
	partId: string;
	citation: string;
	prompt: string;
	answer: string;
	tags: string[];
	sourceUrl: string;
};

export type FarDeck = {
	title: string;
	description: string;
	sourceUrl: string;
	parts: FarPart[];
	cards: FarFlashcard[];
};
