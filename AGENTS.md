## Ship

Ship profile: `vercel-static`

**Integration: branch → reviewed PR → merge on green `CI / ci`.** Follow [local release instructions](docs/development.md). Agents never push to `main`, change rulesets, or admin-merge.

Production URL: <https://learnthefar.com>

Production verification follows Vercel READY and the public chapter and quiz behavior smoke.

Local gate before push: `npm run gate`.

## Development

```bash
npm ci
npm run dev
```

When starting the Astro CLI in background mode:

```bash
npm run dev -- --background
```

Manage with `npm run dev -- stop`, `npm run dev -- status`, and `npm run dev -- logs`. Default local URL is typically <http://localhost:4321>.

No `.env` is required to run or build the app. `config/mcp/.env.example` is only for the optional ECharts MCP helper.

## Frontend stack

Astro owns routes; Svelte owns interactive islands. Use the installed
shadcn-svelte components for new or replaced standard controls. Reuse `src/lib/components/ui` and
its existing theme in `src/styles/global.css`. Chapter, shelf, quiz, glossary
and home views already use Button, Badge, Progress and Popover in product UI.

`components.json` defines the registry and `$lib` aliases. Use the lockfile's
local shadcn-svelte CLI for component additions and review generated changes.
Keep domain-specific study content and charts as application code. Alternative
stacks and framework migrations require explicit user direction.
Preserve accessible labels, keyboard operation and focus states. Follow Local UI
verification below. The personal `/shadcn-svelte` skill is optional.

## Dependencies / Assets

### No CDN for app assets

Prefer npm packages, files in this repo, and same-origin URLs the build emits. Do not load application CSS, JS, or fonts from a third-party CDN (jsDelivr, unpkg, cdnjs, Google Hosted Libraries, Google Fonts CSS, Tailwind Play CDN, esm.sh, and similar).

Install libraries with npm and import them. Do not add remote `<script src>` or `<link rel="stylesheet">` tags for runtime UI. Self-host fonts with `@fontsource*` — this app already does that for Inter in `src/styles/global.css`.

Study-content hyperlinks (acquisition.gov, eCFR, GAO, and similar) are not app assets. Tooling git/tarball deps (for example `echarts-mcp`) and JSON Schema `$schema` URLs in config files are not runtime CDNs.

## Worktrees

Fresh worktrees run `npm run worktree:init` (repository-owned tool, dependency
and hook setup) via the committed Cursor and Codex setup commands. The app has no required gitignored local configuration, so `.worktreeinclude` is intentionally absent.

## Pre-commit gate

`.git-hooks/pre-commit` sources the repo-owned `gate/gate-lib.sh` and runs the
Bash floor check, staged secrets scan, actionlint, Biome, knip, markdownlint,
yamllint, pie-progress, the negative quiz smoke contract, `astro check`,
`astro build` and isolated hook/bootstrap fixtures. Never weaken or skip the gate.

## Deploy / fork

Static Vercel deploy only — see README **Deploy your own copy**. For a different domain, update `config/app/astro.mjs` `site`, `public/robots.txt`, and `vercel.json` host redirects. No production secrets or server env vars.

Production Git deploys remain limited to `main` (`vercel.json` `git.deploymentEnabled`). Branch pushes do **not** create Preview deployments. Comment `/preview` as the first non-empty line on a same-repo PR (owner/member/collaborator User), or run **Vercel Preview** from `main` with the PR number. These are one-shot requests. Add the `preview` label to redeploy on every push until it is removed. Labeled requests keep one protected project/PR URL and one comment updated to the current head. Closed, moved or unlabeled builds cannot replace that URL. Requires GitHub secret `VERCEL_TOKEN`. Agents must not comment `/preview`, apply the label or dispatch the workflow unless John asked. Full CI still runs on PRs, including drafts; Preview does not defer quality checks.

## Documentation

- Project README: [README.md](./README.md)
- Astro docs: <https://docs.astro.build>

Useful Astro guides:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)

## Local UI verification

No auth — public UI only. Smoke the changed routes on desktop and mobile widths; confirm the browser console is clean.

- **Dev server:** `npm run dev -- --background` (or `npm run dev`).
- **Auth:** none — public pages only.

## Production smoke

The **Production smoke** workflow is a separate post-deployment gate. It waits
for the intended production release and verifies the public browser flow with
`npm run smoke:production`. The URL is pinned in
`scripts/production-smoke-scenario.mjs`; the workflow uses no deployment secrets.
Vercel Git deployment and the existing PR CI checks remain unchanged.

The release process must wait for the exact release's Production smoke run to succeed and
record its URL. Missing, failed, cancelled, skipped or timed-out runs are not
success. If the automatic trigger is missing, dispatch the workflow on `main`
with the full expected release SHA and a unique request ID, then follow that
specific run. Preserve `production-smoke-artifacts/` diagnostics when a check fails.

## Verified-tree CI

PRs run the full CI suite. Post-merge CI reuses a successful PR run only when
its recorded checkout tree exactly matches the landed tree, using
the repo-owned `scripts/ci-verified-tree.sh`. Missing proof runs full CI;
manual runs always validate. Job names and deployment triggers stay intact.
Canonical contract: [local CI helper](scripts/ci-verified-tree.sh).

## Dependabot CI

Dependabot PR events allocate no validation runners until an explicitly
authorized maintenance run applies the `ow-ci` label. Only that `labeled` event
runs the real `ci` check. Later Dependabot pushes defer again until maintenance
removes and re-adds the label for the new head. Deferred runs report `ci-deferred`
and cannot satisfy required `ci`. Skipped or absent checks never authorize a
merge. See the repository CI workflow and [release instructions](docs/development.md).

## Git hooks

This repo owns `gate/gate-lib.sh` and `scripts/repo-hooks.py`. Run reviewed
`scripts/setup-agent-environment.sh` on main to install its outside-worktree
pre-commit dispatcher. Never set hooksPath to `.git-hooks`: a branch could then
register executable hooks. See [development and release](docs/development.md).

## Configuration

Move optional top-level tracked settings into `config/<domain>/` or their owner;
keep existing nested configuration with its component. Test configuration may live
under `tests/`. Give each setting one owner. CLI commands select their owners
explicitly; native adapters require a named active consumer. See
[configuration guidance](config/README.md) for domains, native exceptions and
verification. This repository owns them.

## Repository ownership

This repo maintains its executable helpers, agent instructions and workflow
contracts. Changes in another repo do not automatically rewrite this one. A
cross-repository migration needs the user's explicit scope, independent review,
and a separate verified PR in each affected repository.

## Agent environment

Use this repository's AGENTS.md and [development guide](docs/development.md).
Run its reviewed `scripts/setup-agent-environment.sh` for pinned tools and hooks.
No private configuration repo, external instruction import or global skill is
required. Optional personal skills do not change this repository's authority.
