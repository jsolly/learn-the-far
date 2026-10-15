// @ts-check

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFile, mkdir, readdir } from "node:fs/promises";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const buildIdentity =
	process.env["VERCEL_DEPLOYMENT_ID"] ||
	process.env["VERCEL_GIT_COMMIT_SHA"] ||
	execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
if (!/^[A-Za-z0-9_-]{1,100}$/u.test(buildIdentity)) {
	throw new Error("A valid immutable build identity is required");
}
// Keep the deployed UUID schema so the first shipped detector can see this release.
const hash = createHash("sha256").update(buildIdentity).digest("hex");
const releaseId = `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-8${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
const retainedDirectory = new URL("./retained-assets/", import.meta.url);
const retained = (await readdir(retainedDirectory)).filter((name) => name.endsWith(".js.txt"));

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
					await mkdir(new URL("_astro/", dir), { recursive: true });
					for (const name of retained) {
						await copyFile(
							new URL(name, retainedDirectory),
							new URL(`_astro/${name.slice(0, -4)}`, dir),
						);
					}
				},
			},
		},
	],

	vite: {
		plugins: [
			tailwindcss(),
			{
				name: "retain-lazy-assets",
				generateBundle(_options, bundle) {
					for (const output of Object.values(bundle)) {
						if (output.type !== "chunk" || !output.fileName.endsWith(".js")) {
							continue;
						}
						for (const path of output.dynamicImports) {
							const name = path.split("/").at(-1);
							if (!retained.includes(`${name}.txt`)) {
								throw new Error(`Retain lazy asset ${path} before publishing clients that need it`);
							}
						}
					}
				},
			},
		],
		define: { "import.meta.env.PUBLIC_RELEASE_ID": JSON.stringify(releaseId) },
	},
});
