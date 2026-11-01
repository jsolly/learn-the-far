import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
if (args.length > 1 || (args.length === 1 && args[0] !== "--write")) {
	throw new Error("Usage: node scripts/check-generated-test-fixtures.ts [--write]");
}
const output = await mkdtemp(join(tmpdir(), "learn-generated-test-fixtures-"));
try {
	const compiler = spawnSync(
		process.execPath,
		[
			join(root, "node_modules/typescript/bin/tsc"),
			"--project",
			join(root, "config/typescript/generated-tests.json"),
			"--outDir",
			output,
		],
		{ cwd: root, stdio: "inherit" },
	);
	if (compiler.error) {
		throw compiler.error;
	}
	if (compiler.status !== 0) {
		throw new Error("Strict test-fixture compilation failed");
	}
	const artifacts = [
		"tests/config/tsconfig-consumer.test.mjs",
		"scripts/fixtures/vercel-preview-cli.cjs",
	];
	const outputs: { relative: string; contents: Buffer }[] = [];
	for (const relative of artifacts) {
		const compiled = await readFile(join(output, relative));
		const formatted = spawnSync(
			process.execPath,
			[
				join(root, "node_modules/@biomejs/biome/bin/biome"),
				"check",
				"--write",
				"--config-path",
				join(root, "config/quality/biome.settings.jsonc"),
				"--stdin-file-path",
				relative,
			],
			{ cwd: root, input: compiled, encoding: "utf8" },
		);
		if (formatted.error) {
			throw formatted.error;
		}
		if (formatted.status !== 0) {
			throw new Error(`Generated test-fixture formatting failed: ${formatted.stderr}`);
		}
		const expected = Buffer.from(formatted.stdout);
		outputs.push({ relative, contents: expected });
	}
	for (const { relative, contents } of outputs) {
		const target = join(root, relative);
		if (args[0] === "--write") {
			await writeFile(target, contents);
		} else if (!contents.equals(await readFile(target))) {
			throw new Error(
				`Generated test fixture is stale (${relative}); run npm run generate:test-fixtures`,
			);
		}
	}
} finally {
	await rm(output, { recursive: true, force: true });
}
