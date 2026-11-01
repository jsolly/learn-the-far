/** Reviewed published distributables only; generated app code and authoring sources are excluded. */
export const CATALOG = [
	{
		path: "/apple-touch-icon.png",
		contentType: "image/png",
		source: "src/components/app/FarAppDocument.astro",
	},
	{
		path: "/favicon.ico",
		contentType: "image/x-icon",
		source: "src/components/app/FarAppDocument.astro",
	},
	{
		path: "/og-image.png",
		contentType: "image/png",
		source: "src/components/app/FarAppDocument.astro",
	},
	{
		path: "/sounds/correct.mp3",
		contentType: "audio/mpeg",
		source: "src/lib/quiz-sounds.svelte.ts",
	},
	{
		path: "/sounds/incorrect.mp3",
		contentType: "audio/mpeg",
		source: "src/lib/quiz-sounds.svelte.ts",
	},
	{
		path: "/sounds/session-complete.mp3",
		contentType: "audio/mpeg",
		source: "src/lib/quiz-sounds.svelte.ts",
	},
] as const;
