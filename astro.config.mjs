// @ts-check

import { randomUUID } from "node:crypto";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const releaseId = randomUUID();

// https://astro.build/config
export default defineConfig({
	site: "https://learnthefar.com",
	trailingSlash: "always",
	integrations: [
		svelte(),
		sitemap(),
		{
			name: "release-identity",
			hooks: {
				"astro:build:generated": async ({ dir }) => {
					const { writeFile } = await import("node:fs/promises");
					await writeFile(new URL("release.json", dir), JSON.stringify({ id: releaseId }));
				},
			},
		},
	],

	vite: {
		plugins: [tailwindcss()],
		define: { "import.meta.env.PUBLIC_RELEASE_ID": JSON.stringify(releaseId) },
	},
});
