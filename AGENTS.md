## Ship

Ship profile: `vercel-static`

Integration: `pr-auto-merge`

The auto-merge bot waits for this repo's `ci` check because Free private repos cannot set required checks.

CI owner: `local`

Production URL: <https://learnthefar.com>

**Prod verify:** `/ship` requires `x-release-id` to match `origin/main` (12-char). HTTP 200 alone is insufficient.

```bash
curl -sSIL https://learnthefar.com/ | rg -i '^x-release-id:'
```

## Development

```bash
npm ci
npm run dev
```

When starting the Astro CLI in background mode:

```bash
astro dev --background
```

Manage with `astro dev stop`, `astro dev status`, and `astro dev logs`. Default local URL is typically <http://localhost:4321>.

No `.env` is required to run or build the app. `.env.example` is only for the optional ECharts MCP helper.

## Dependencies / Assets

### No CDN for app assets

Prefer npm packages, files in this repo, and same-origin URLs the build emits. Do not load application CSS, JS, or fonts from a third-party CDN (jsDelivr, unpkg, cdnjs, Google Hosted Libraries, Google Fonts CSS, Tailwind Play CDN, esm.sh, and similar).

Install libraries with npm and import them. Do not add remote `<script src>` or `<link rel="stylesheet">` tags for runtime UI. Self-host fonts with `@fontsource*` — this app already does that for Inter in `src/styles/global.css`.

Study-content hyperlinks (acquisition.gov, eCFR, GAO, and similar) are not app assets. Tooling git/tarball deps (for example `echarts-mcp`) and JSON Schema `$schema` URLs in config files are not runtime CDNs.

## Worktrees

Fresh worktrees run `npm run worktree:init` (`npm ci`) via Cursor’s setup command or the optional Git `post-checkout` hook. The app has no required gitignored local configuration, so `.worktreeinclude` is intentionally absent.

## Pre-commit gate

`.git-hooks/pre-commit` runs actionlint, the release-id contract, Biome, knip, markdownlint, yamllint, pie-progress, `astro check`, and `astro build`. If the optional shared `dotagents` gate-lib is present on the machine, it is used; otherwise the same checks run directly. Never weaken or skip the gate with `--no-verify`.

## Deploy / fork

Static Vercel deploy only — see README **Deploy your own copy**. For a different domain, update `astro.config.mjs` `site`, `public/robots.txt`, and `vercel.json` host redirects. No production secrets or server env vars.

Production Git deploys stay on for `main` (`vercel.json` `git.deploymentEnabled`). Branch pushes do **not** create Preview deployments. Comment `/preview` as the first non-empty line on a same-repo PR (owner/member/collaborator User), or run workflow **Vercel Preview** with the PR number. GitHub runs that workflow from `main`. One-shot: new commits do not rebuild until you ask again. Requires GitHub secret `VERCEL_TOKEN`. Agents must not comment `/preview` unless the user asked.

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

- **Dev server:** `astro dev --background` (or `npm run dev`).
- **Auth:** none — public pages only.

## Verified-tree CI

PRs run the full CI suite. Post-merge CI reuses a successful PR run only when
its recorded checkout tree exactly matches the landed tree, using
`scripts/ci-verified-tree.sh` from dotagents. Missing proof runs full CI;
manual runs always validate. Job names and deployment triggers stay intact.
Canonical contract: `~/code/dotagents/templates/github/verified-tree-ci.md`.

## Dependabot CI

Ordinary Dependabot PR events allocate no validation runners. A manually invoked
`/optimize-workspace` requests full PR checks with `deps:ci:<full-head-SHA>`.
Deferred checks cannot satisfy the real `ci` requirement. New commits need a new
request; skipped or absent checks never authorize a dependency merge. See the
canonical `dotagents/skills/optimize-workspace/references/dependencies.md`.
