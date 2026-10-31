import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

/**
 * Mirrors the `$lib/*` path owned by the root `tsconfig.json`, which Vitest does
 * not read. Only the subpath form is mapped: nothing imports a bare `$lib`, and
 * `src/lib` has no index module for one to resolve to.
 */
const srcLib = fileURLToPath(new URL("../../src/lib/", import.meta.url));

export default defineConfig({
	root: fileURLToPath(new URL("../../", import.meta.url)),
	resolve: {
		alias: [{ find: /^\$lib\/(.*)$/u, replacement: `${srcLib}$1` }],
	},
	test: {
		environment: "node",
		include: ["src/**/*.test.ts"],
	},
});
