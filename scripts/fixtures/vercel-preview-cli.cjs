"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function main() {
	const assert = await import("node:assert/strict");
	const { spawnSync } = await import("node:child_process");
	const { appendFileSync, existsSync, readFileSync, writeFileSync } = await import("node:fs");
	const { basename, isAbsolute, join } = await import("node:path");
	function isJsonValue(value) {
		if (value === null || ["boolean", "number", "string"].includes(typeof value)) {
			return true;
		}
		if (Array.isArray(value)) {
			return value.every(isJsonValue);
		}
		return typeof value === "object" && Object.values(value).every(isJsonValue);
	}
	function isFixtureCase(value) {
		if (value === null || typeof value !== "object") {
			return false;
		}
		return (
			"prs" in value &&
			Array.isArray(value.prs) &&
			value.prs.length > 0 &&
			value.prs.every(isJsonValue) &&
			"comments" in value &&
			Array.isArray(value.comments) &&
			value.comments.every(isJsonValue) &&
			"defaultHead" in value &&
			typeof value.defaultHead === "string" &&
			"realGit" in value &&
			typeof value.realGit === "string" &&
			isAbsolute(value.realGit) &&
			(!("checkoutHead" in value) || typeof value.checkoutHead === "string") &&
			(!("existingComment" in value) || typeof value.existingComment === "boolean") &&
			(!("failNpx" in value) || typeof value.failNpx === "string")
		);
	}
	function forward(result) {
		if (result.error) {
			throw result.error;
		}
		process.stdout.write(result.stdout);
		process.stderr.write(result.stderr);
		assert.notEqual(result.status, null, "Fixture child process exited without a status");
		process.exit(result.status ?? 1);
	}
	const root = process.env["PREVIEW_FIXTURE"];
	assert.ok(typeof root === "string" && root.length > 0, "Missing fixture root");
	const parsed = JSON.parse(readFileSync(join(root, "case.json"), "utf8"));
	assert.ok(isFixtureCase(parsed), "Invalid CLI fixture case");
	const cfg = parsed;
	const executable = process.argv[1];
	assert.ok(typeof executable === "string", "Missing fixture executable path");
	const kind = basename(executable);
	assert.ok(kind === "gh" || kind === "git" || kind === "npx", "Unknown fixture executable");
	const args = process.argv.slice(2);
	appendFileSync(
		join(root, "calls"),
		`${JSON.stringify({
			kind,
			args,
			cwd: process.cwd(),
			githubToken: !!process.env["GH_TOKEN"],
			vercelToken: !!process.env["VERCEL_TOKEN"],
			cache: process.env["NPM_CONFIG_CACHE"],
		})}\n`,
	);
	if (kind === "gh") {
		if (args.some((arg) => /\/pulls\/\d+$/u.test(arg))) {
			const countFile = join(root, "pr-count");
			const count = existsSync(countFile) ? Number(readFileSync(countFile, "utf8")) : 0;
			assert.ok(Number.isSafeInteger(count) && count >= 0, "Invalid fixture request counter");
			writeFileSync(countFile, String(count + 1));
			console.log(JSON.stringify(cfg.prs[Math.min(count, cfg.prs.length - 1)]));
		} else if (args.includes("--paginate")) {
			const selectorIndex = args.indexOf("--jq");
			assert.ok(selectorIndex >= 0, "Missing comment selector");
			const selector = args[selectorIndex + 1];
			assert.ok(typeof selector === "string", "Missing comment selector argument");
			const comments = cfg.existingComment === false ? [] : cfg.comments;
			forward(
				spawnSync("jq", ["-r", selector], {
					input: JSON.stringify(comments),
					encoding: "utf8",
				}),
			);
		}
	} else if (kind === "git") {
		if (args.includes("rev-parse")) {
			console.log(cfg.checkoutHead || cfg.defaultHead);
		} else if (args.includes("ls-files")) {
			forward(spawnSync(cfg.realGit, args, { env: process.env, encoding: "utf8" }));
		}
	} else if (kind === "npx") {
		if (cfg.failNpx !== undefined && args.includes(cfg.failNpx)) {
			process.exit(12);
		}
		if (args.includes("deploy")) {
			console.log("https://immutable.vercel.app");
		}
	}
}
void main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
