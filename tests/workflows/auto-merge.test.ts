import { spawnSync } from "node:child_process";
import { chmod, copyFile, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const workflowPath = new URL("../../.github/workflows/auto-merge.yml", import.meta.url);
const repo = "jsolly/learn-the-far";

/** The single `run: |` block of the workflow, dedented to the shell script the runner executes. */
async function workflowScript(): Promise<string> {
	const lines = (await readFile(workflowPath, "utf8")).split("\n");
	const start = lines.findIndex((line) => /^\s*run: \|\s*$/u.test(line));
	expect(start).toBeGreaterThan(-1);
	expect(lines.slice(start + 1).some((line) => /^\s*run: \|\s*$/u.test(line))).toBe(false);
	const runIndent = lines[start]?.search(/\S/u) ?? 0;
	const body: string[] = [];
	for (const line of lines.slice(start + 1)) {
		if (line.trim() !== "" && line.search(/\S/u) <= runIndent) {
			break;
		}
		body.push(line);
	}
	const indent = Math.min(
		...body.filter((line) => line.trim() !== "").map((line) => line.search(/\S/u)),
	);
	return body.map((line) => line.slice(indent)).join("\n");
}

/** gh stand-in that fails like gh does outside a checkout; see its header. */
const ghStub = new URL("./gh-stub.sh", import.meta.url);

describe("auto-merge sweep", () => {
	let dir = "";

	beforeEach(async () => {
		dir = await mkdtemp(join(tmpdir(), "auto-merge-sweep-"));
		await copyFile(ghStub, join(dir, "gh"));
		await chmod(join(dir, "gh"), 0o755);
	});

	afterEach(async () => {
		await rm(dir, { recursive: true, force: true });
	});

	async function sweep(event: "schedule" | "workflow_dispatch", open: string, pr = "{}") {
		const log = join(dir, "gh.log");
		await writeFile(log, "");
		const result = spawnSync("bash", ["-c", await workflowScript()], {
			cwd: dir,
			encoding: "utf8",
			env: {
				PATH: `${dir}:${process.env["PATH"] ?? ""}`,
				GH_REPO: repo,
				GITHUB_EVENT_NAME: event,
				AUTO_MERGE_TOKEN: "fixture-token",
				GH_STUB_LOG: log,
				GH_STUB_OPEN: open,
				GH_STUB_PR: pr,
			},
		});
		return { ...result, calls: (await readFile(log, "utf8")).trim().split("\n") };
	}

	it("names the repository when reading the default branch outside a checkout", async () => {
		const { status, stderr, calls } = await sweep("schedule", "");
		expect(stderr).not.toContain("not a git repository");
		expect(status).toBe(0);
		expect(calls).toEqual([
			`repo view ${repo} --json defaultBranchRef --jq .defaultBranchRef.name`,
			"pr list --state open --base main --limit 200 --json number --jq .[].number",
		]);
	});

	it("arms auto-merge for an eligible pull request whose checks are not green yet", async () => {
		const pr = JSON.stringify({
			number: 7,
			state: "OPEN",
			isDraft: false,
			author: { login: "solly-agent" },
			baseRefName: "main",
			headRefOid: "a".repeat(40),
			headRepository: { nameWithOwner: repo },
			isCrossRepository: false,
			autoMergeRequest: null,
		});
		const { status, stderr, calls } = await sweep("workflow_dispatch", "7", pr);
		expect(stderr).not.toContain("not a git repository");
		expect(status).toBe(0);
		expect(calls.at(-1)).toBe(`pr merge --auto --squash https://github.com/${repo}/pull/7`);
	});
});
