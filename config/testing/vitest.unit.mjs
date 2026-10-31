import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

/** Mirrors the `$lib` paths owned by the root `tsconfig.json`. */
const srcLib = fileURLToPath(new URL("../../src/lib/", import.meta.url));

export default defineConfig({
	root: fileURLToPath(new URL("../../", import.meta.url)),
	resolve: {
		alias: [
			{ find: /^\$lib\/(.*)$/u, replacement: `${srcLib}$1` },
			{ find: /^\$lib$/u, replacement: srcLib },
		],
	},
	test: {
		environment: "node",
		include: ["src/**/*.test.ts"],
	},
});
