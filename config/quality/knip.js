export default {
	$schema: "https://unpkg.com/knip@6/schema.json",
	astro: { config: ["config/app/astro.mjs"] },
	svelte: { entry: ["config/app/svelte.js"] },
	biome: { config: ["config/quality/biome.settings.jsonc"] },
	entry: ["src/styles/global.css", "scripts/**/*.{mjs,js,sh}"],
	ignoreIssues: {
		"src/lib/components/ui/**": ["files", "exports", "types", "nsExports", "nsTypes"],
	},
	ignoreBinaries: ["uvx"],
	ignoreDependencies: [
		// CLI only (not imported by application code).
		"markdownlint-cli2",
	],
};
