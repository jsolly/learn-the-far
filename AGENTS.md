## Ship

Ship profile: `vercel-static`

Integration: `pr-auto-merge`

CI owner: `local`

Production URL: <https://learnthefar.com>

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

## Worktrees

Fresh worktrees run `npm run worktree:init` (`npm ci`) via Cursor’s setup command or the optional Git `post-checkout` hook. The app has no required gitignored local configuration, so `.worktreeinclude` is intentionally absent.

## Pre-commit gate

`.git-hooks/pre-commit` runs actionlint, `astro check`, and `astro build`. If the optional shared `dotagents` gate-lib is present on the machine, it is used; otherwise the same checks run directly. Never weaken or skip the gate with `--no-verify`.

## Deploy / fork

Static Vercel deploy only — see README **Deploy your own copy**. For a different domain, update `astro.config.mjs` `site`, `public/robots.txt`, and `vercel.json` host redirects. No production secrets or server env vars.

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
