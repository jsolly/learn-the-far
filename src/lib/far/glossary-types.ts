export type GlossaryTerm = {
	id: string;
	term: string;
	aliases?: string[];
	definition: string;
	chapterId?: string;
	/**
	 * When false, skip auto-link in chapter body copy.
	 * Topic tags from shelf cards use this so words like “definition” don’t link everywhere.
	 */
	autoLink?: boolean;
};
