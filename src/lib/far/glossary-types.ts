export type GlossaryTerm = {
	id: string;
	term: string;
	aliases?: string[];
	definition: string;
	chapterId?: string;
};
