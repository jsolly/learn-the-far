import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
	chmodSync,
	closeSync,
	copyFileSync,
	mkdirSync,
	mkdtempSync,
	openSync,
	readFileSync,
	realpathSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it, type TestContext } from "vitest";

type PreviewPullRequest = {
	state: string;
	base: { ref: string };
	head: { sha: string; ref?: string; repo?: { full_name: string } };
	labels: { name: string }[];
};
type PreviewComment = { id: number; user: { login: string }; body: string };
type FixtureConfig = {
	prs?: PreviewPullRequest[];
	comments?: PreviewComment[];
	configPath?: string;
	tracked?: boolean;
	env?: Record<string, string>;
	existingComment?: boolean;
	checkoutHead?: string;
	failNpx?: string;
};
type FixtureCommand = "gh" | "git" | "npx";
type FixtureCall = {
	kind: FixtureCommand;
	args: string[];
	cwd: string;
	githubToken: boolean;
	vercelToken: boolean;
	cache?: string;
};
function isFixtureCall(value: unknown): value is FixtureCall {
	if (value === null || typeof value !== "object") {
		return false;
	}
	if (
		!("kind" in value) ||
		!(value.kind === "gh" || value.kind === "git" || value.kind === "npx")
	) {
		return false;
	}
	return (
		"args" in value &&
		Array.isArray(value.args) &&
		value.args.every((arg: unknown) => typeof arg === "string") &&
		"cwd" in value &&
		typeof value.cwd === "string" &&
		"githubToken" in value &&
		typeof value.githubToken === "boolean" &&
		"vercelToken" in value &&
		typeof value.vercelToken === "boolean" &&
		(!("cache" in value) || typeof value.cache === "string")
	);
}
function parseCall(line: string): FixtureCall {
	const value: unknown = JSON.parse(line);
	assert.ok(isFixtureCall(value), "Malformed command call fixture record");
	return value;
}
const inheritedPath = process.env["PATH"];
assert.ok(
	typeof inheritedPath === "string",
	"Fixture requires the existing executable search path",
);

const workflow = readFileSync(
	new URL("../.github/workflows/vercel-preview.yml", import.meta.url),
	"utf8",
);
const head = "a".repeat(40);
const project = "prj_fixtureproject";
const realGit = spawnSync("which", ["git"], { encoding: "utf8" }).stdout.trim();
assert.ok(realGit.startsWith("/"));

function runBlock(name: string, source = workflow): string {
	const lines = source.split("\n");
	const start = lines.indexOf(`      - name: ${name}`);
	assert.ok(start >= 0, `missing step: ${name}`);
	const run = lines.findIndex((line, index) => index > start && line === "        run: |");
	assert.ok(run > start, `missing inline script: ${name}`);
	const body: string[] = [];
	for (const line of lines.slice(run + 1)) {
		if (line.trim() && !line.startsWith("          ")) {
			break;
		}
		body.push(line.slice(10));
	}
	assert.ok(body.length);
	return body.join("\n");
}

function pr(overrides: Partial<PreviewPullRequest> = {}): PreviewPullRequest {
	return {
		state: "open",
		base: { ref: "main" },
		head: {
			sha: head,
			ref: "feature/preview",
			repo: { full_name: "fixture/repo" },
		},
		labels: [{ name: "preview" }],
		...overrides,
	};
}

function fixture(t: Pick<TestContext, "onTestFinished">, config: FixtureConfig = {}) {
	const root = mkdtempSync(join(tmpdir(), "preview-workflow-"));
	t.onTestFinished(() => rmSync(root, { recursive: true, force: true }));
	mkdirSync(join(root, "bin"));
	mkdirSync(join(root, "source"));
	const gitEnv = {
		PATH: inheritedPath,
		HOME: root,
		GIT_CONFIG_NOSYSTEM: "1",
		GIT_CONFIG_GLOBAL: "/dev/null",
	};
	const git = (...args: string[]): void => {
		const result = spawnSync(realGit, ["-C", join(root, "source"), ...args], {
			env: gitEnv,
			encoding: "utf8",
		});
		assert.equal(result.status, 0, result.stderr);
	};
	git("init", "--quiet");
	if (config.configPath) {
		const path = join(root, "source", config.configPath);
		mkdirSync(path.slice(0, path.lastIndexOf("/")), { recursive: true });
		writeFileSync(path, "throw new Error('must never execute');\n");
		if (config.tracked) {
			git("add", "--", config.configPath);
		}
	}
	mkdirSync(join(root, "scripts"));
	mkdirSync(join(root, ".github/workflows"), { recursive: true });
	for (const name of ["vercel-preview-comment.sh", "vercel-preview-workflow-contract.sh"]) {
		copyFileSync(new URL(name, import.meta.url), join(root, "scripts", name));
	}
	writeFileSync(
		join(root, "case.json"),
		JSON.stringify({
			prs: [pr()],
			defaultHead: head,
			realGit,
			comments: [
				{ id: 15, user: { login: "someone" }, body: "<!-- vercel-preview -->" },
				{
					id: 16,
					user: { login: "github-actions[bot]" },
					body: "Other workflow",
				},
				{
					id: 17,
					user: { login: "github-actions[bot]" },
					body: "Preview <!-- vercel-preview -->",
				},
				{ id: 18, user: { login: "someone" }, body: "<!-- vercel-preview -->" },
			],
			...config,
		}),
	);
	writeFileSync(join(root, "output"), "");
	writeFileSync(join(root, "calls"), "");
	// Extensionless CLI executables require compiled CommonJS; their implementation
	// is authored and checked in fixtures/vercel-preview-cli.cts.
	const stub = readFileSync(new URL("fixtures/vercel-preview-cli.cjs", import.meta.url), "utf8");
	for (const name of ["gh", "git", "npx"]) {
		writeFileSync(join(root, "bin", name), `#!${process.execPath}\n${stub}`);
		chmodSync(join(root, "bin", name), 0o755);
	}
	const env = {
		...gitEnv,
		PATH: `${join(root, "bin")}:${inheritedPath}`,
		PREVIEW_FIXTURE: root,
		GITHUB_OUTPUT: join(root, "output"),
		RUNNER_TEMP: root,
		SOURCE_DIR: join(root, "source"),
		REPO: "fixture/repo",
		PR_NUMBER: "129",
		EVENT_PR: "129",
		HEAD_SHA: head,
		HEAD_REF: "feature/preview",
		EVENT_NAME: "pull_request_target",
		DEFAULT_BRANCH: "main",
		LABELED: "true",
		VERCEL_PROJECT_ID: project,
		VERCEL_TOKEN: "fixture-vercel",
		GH_TOKEN: "fixture-github",
		...config.env,
	};
	function execute(step: string, source = workflow) {
		// Node's captured stderr is a socket on Linux. Unlike a pipe or file,
		// it cannot be opened through /dev/stderr by the real workflow's tee.
		const stderrPath = join(root, "stderr");
		const stderrFd = openSync(stderrPath, "w");
		try {
			const result = spawnSync(
				"bash",
				["--noprofile", "--norc", "-euo", "pipefail", "-c", runBlock(step, source)],
				{
					cwd: root,
					env,
					encoding: "utf8",
					stdio: ["ignore", "pipe", stderrFd],
				},
			);
			return { ...result, stderr: readFileSync(stderrPath, "utf8") };
		} finally {
			closeSync(stderrFd);
		}
	}
	function calls(kind?: FixtureCommand): FixtureCall[] {
		return readFileSync(join(root, "calls"), "utf8")
			.split("\n")
			.filter(Boolean)
			.map(parseCall)
			.filter((call) => !kind || call.kind === kind);
	}
	return { root, env, execute, calls };
}

it("an explicit comment resolves the current same-repo head", (t) => {
	const f = fixture(t, {
		env: {
			EVENT_NAME: "issue_comment",
			COMMENT_BODY: "\n/preview\nPlease test.",
		},
	});
	const accepted = f.execute("Validate the Preview request");
	assert.equal(accepted.status, 0, accepted.stderr);
	const result = f.execute("Resolve the pull request head");
	assert.equal(result.status, 0, result.stderr);
	assert.match(readFileSync(join(f.root, "output"), "utf8"), new RegExp(`head_sha=${head}`, "u"));
	assert.equal(f.calls("gh").length, 1);
});

it("ordinary comments do not resolve or deploy a PR", (t) => {
	const f = fixture(t, {
		env: { EVENT_NAME: "issue_comment", COMMENT_BODY: "Looks good\n/preview" },
	});
	assert.equal(f.execute("Validate the Preview request").status, 0);
	assert.match(readFileSync(join(f.root, "output"), "utf8"), /skip=true/u);
	assert.deepEqual(f.calls(), []);
});

describe("resolver refuses closed PRs, forks, invalid heads and invalid request IDs", () => {
	for (const [name, config] of [
		["closed", { prs: [pr({ state: "closed" })] }],
		[
			"fork",
			{
				prs: [
					pr({
						head: {
							sha: head,
							ref: "feature",
							repo: { full_name: "other/repo" },
						},
					}),
				],
			},
		],
		[
			"invalid head",
			{
				prs: [
					pr({
						head: {
							sha: "bad",
							ref: "feature",
							repo: { full_name: "fixture/repo" },
						},
					}),
				],
			},
		],
		["wrong base", { prs: [pr({ base: { ref: "other" } })] }],
	] satisfies [string, FixtureConfig][]) {
		it(name, (scenario) => {
			const f = fixture(scenario, config);
			assert.notEqual(f.execute("Resolve the pull request head").status, 0);
			assert.deepEqual(f.calls("npx"), []);
		});
	}
});

it("an invalid request ID never enters the deployment queue", (t) => {
	const f = fixture(t, { env: { EVENT_PR: "129;exit" } });
	assert.notEqual(f.execute("Validate the Preview request").status, 0);
	assert.deepEqual(f.calls(), []);
});

it("a labeled Preview uses isolated CLI commands and edits one stable comment", (t) => {
	const f = fixture(t);
	const result = f.execute("Deploy the Preview");
	assert.equal(result.status, 0, result.stderr);
	assert.match(result.stderr, /https:\/\/immutable\.vercel\.app/u);
	const commands = f.calls("npx");
	assert.equal(commands.length, 2);
	for (const call of commands) {
		assert.equal(call.cwd, realpathSync(f.root));
		assert.equal(call.githubToken, false);
		assert.equal(call.vercelToken, true);
		assert.equal(call.cache, join(f.root, "npm-cache"));
	}
	const deploy = commands[0];
	const alias = commands[1];
	assert.ok(deploy && alias);
	assert.ok(deploy.args.includes(f.env.SOURCE_DIR));
	assert.deepEqual(alias.args, [
		"--yes",
		"vercel@59.20.0",
		"alias",
		"set",
		"https://immutable.vercel.app",
		"pr-129-fixtureproject.vercel.app",
		"--scope",
		"jsollys-projects",
	]);
	const patch = f.calls("gh").filter((call) => call.args.includes("PATCH"));
	assert.equal(patch.length, 1);
	assert.ok(patch[0]);
	assert.ok(patch[0].args.includes("repos/fixture/repo/issues/comments/17"));
	assert.ok(
		patch[0].args.some((arg) => arg.includes(head) && arg.includes("<!-- vercel-preview -->")),
	);
	assert.equal(
		f.calls("gh").some((call) => call.args[0] === "pr"),
		false,
	);
});

it("a manual one-shot Preview does not require or claim label redeploys", (t) => {
	const f = fixture(t, {
		prs: [pr({ labels: [] })],
		env: { EVENT_NAME: "workflow_dispatch", LABELED: "false" },
	});
	assert.equal(f.execute("Deploy the Preview").status, 0);
	const comment = f.calls("gh").find((call) => call.args[0] === "pr");
	assert.ok(comment);
	assert.ok(comment.args.some((arg) => arg.includes("one-shot deploy")));
	assert.equal(
		f.calls("gh").some((call) => call.args.includes("PATCH")),
		false,
	);
});

describe("changed, closed or unlabeled PRs stand down before deployment", () => {
	for (const [name, next] of [
		["new head", pr({ head: { sha: "b".repeat(40) } })],
		["closed", pr({ state: "closed" })],
		["removed label", pr({ labels: [] })],
	] satisfies [string, PreviewPullRequest][]) {
		it(name, (scenario) => {
			const f = fixture(scenario, { prs: [next] });
			const result = f.execute("Deploy the Preview");
			assert.equal(result.status, 0, result.stderr);
			assert.deepEqual(f.calls("npx"), []);
			assert.equal(f.calls("gh").length, 1);
		});
	}
});

describe("changed, closed or unlabeled builds never replace the alias or comment", () => {
	for (const [name, next] of [
		["new head", pr({ head: { sha: "b".repeat(40) } })],
		["closed", pr({ state: "closed" })],
		["removed label", pr({ labels: [] })],
	] satisfies [string, PreviewPullRequest][]) {
		it(name, (scenario) => {
			const f = fixture(scenario, { prs: [pr(), next] });
			const result = f.execute("Deploy the Preview");
			assert.equal(result.status, 0, result.stderr);
			assert.equal(f.calls("npx").length, 1);
			const deploy = f.calls("npx")[0];
			assert.ok(deploy);
			assert.ok(deploy.args.includes("deploy"));
			assert.equal(
				f.calls("gh").some((call) => call.args.includes("PATCH") || call.args[0] === "pr"),
				false,
			);
		});
	}
});

describe("failed credentials, executable configs and failed alias updates fail visibly", () => {
	for (const [name, config, deployCalls, feedback] of [
		["missing token", { env: { VERCEL_TOKEN: "" } }, 0, true],
		["executable config", { configPath: "nested/vercel.mjs" }, 0, true],
		["alias failure", { failNpx: "alias" }, 2, false],
	] satisfies [string, FixtureConfig, number, boolean][]) {
		it(name, (scenario) => {
			const f = fixture(scenario, config);
			assert.notEqual(f.execute("Deploy the Preview").status, 0);
			assert.equal(f.calls("npx").length, deployCalls);
			assert.equal(
				f.calls("gh").some((call) => call.args.includes("PATCH") || call.args[0] === "pr"),
				feedback,
			);
		});
	}
});

it("the workflow contract rejects changes that re-expose tokens or PR tooling", (t) => {
	const f = fixture(t);
	const path = join(f.root, ".github/workflows/vercel-preview.yml");
	const verify = () =>
		spawnSync("bash", ["scripts/vercel-preview-workflow-contract.sh"], {
			cwd: f.root,
			env: { PATH: inheritedPath },
			encoding: "utf8",
		});
	writeFileSync(path, workflow);
	assert.equal(verify().status, 0);
	for (const [name, changed] of [
		["PR workflow provenance", workflow.replace("  pull_request_target:", "  pull_request:")],
		[
			"manual branch provenance",
			workflow.replace(
				"github.ref == format('refs/heads/{0}', github.event.repository.default_branch)",
				"true",
			),
		],
		[
			"job token",
			workflow.replace("      VERCEL_ORG_ID:", "      VERCEL_TOKEN: fixture\n      VERCEL_ORG_ID:"),
		],
		[
			"PR Node version",
			workflow.replace("node-version-file: tooling/.nvmrc", "node-version-file: source/.nvmrc"),
		],
		["shared checkout", workflow.replace("          path: source\n", "")],
		[
			"cached packages",
			workflow.replace("package-manager-cache: false", "package-manager-cache: true"),
		],
		["wrong upload root", workflow.replace('--cwd "$SOURCE_DIR"', '--cwd "$GITHUB_WORKSPACE"')],
		[
			"untrusted resolver",
			workflow.replace(
				`ref: \${{ github.event.repository.default_branch }}`,
				`ref: \${{ github.event.pull_request.head.sha }}`,
			),
		],
	] satisfies [string, string][]) {
		assert.notEqual(changed, workflow, name);
		writeFileSync(path, changed);
		assert.notEqual(verify().status, 0, name);
	}
});

describe("real Git rejects root and nested tracked and untracked executable configs", () => {
	for (const ext of ["ts", "mts", "js", "mjs", "cjs"]) {
		for (const prefix of ["", "nested/"]) {
			for (const tracked of [false, true]) {
				const configPath = `${prefix}vercel.${ext}`;
				it(`${configPath} tracked=${tracked}`, (scenario) => {
					const f = fixture(scenario, { configPath, tracked });
					const result = f.execute("Deploy the Preview");
					assert.notEqual(result.status, 0, result.stderr);
					assert.deepEqual(f.calls("npx"), []);
				});
			}
		}
	}
});

it("boundary fixtures expose removed comment ownership and config path matching", (t) => {
	const comment = fixture(t);
	const wrongSelector = workflow.replace(/select\(\.user\.login.*?\)\) \| \.id/u, ".id");
	assert.notEqual(wrongSelector, workflow);
	assert.equal(comment.execute("Deploy the Preview", wrongSelector).status, 0);
	const patch = comment.calls("gh").find((call) => call.args.includes("PATCH"));
	assert.ok(patch);
	assert.ok(patch.args.includes("repos/fixture/repo/issues/comments/18"));
	const config = fixture(t, { configPath: "nested/vercel.mjs" });
	const wrongPaths = workflow.replace("':(glob)**/vercel.mjs'", "");
	assert.notEqual(wrongPaths, workflow);
	assert.equal(config.execute("Deploy the Preview", wrongPaths).status, 0);
	assert.equal(config.calls("npx").length, 2);
});

it("head resolution inside the deploy slot picks the latest eligible head", (t) => {
	const latest = "b".repeat(40);
	const f = fixture(t, {
		prs: [
			pr({
				head: {
					sha: latest,
					ref: "feature/latest",
					repo: { full_name: "fixture/repo" },
				},
			}),
		],
	});
	assert.equal(f.execute("Resolve the pull request head").status, 0);
	assert.match(readFileSync(join(f.root, "output"), "utf8"), new RegExp(`head_sha=${latest}`, "u"));
});
