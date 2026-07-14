## Ship

Ship profile: `vercel-static`

Integration: `pr-auto-merge`

CI owner: `local`

Production URL: <https://learnthefar.com>

## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Worktrees

Fresh worktrees run `npm run worktree:init` through Cursor's setup command or the manual Git `post-checkout` hook. This is required because staged Markdown lint runs before the gate's lazy dependency check. The app has no required gitignored local configuration or state, so `.worktreeinclude` is intentionally absent.

## Documentation

Full documentation: <https://docs.astro.build>

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Local UI verification

No auth — public UI only. Follow `rules/frontend-verification.md` (fleet smoke: desktop + mobile screenshots, console clean).

- **Dev server:** `astro dev --background` (manage with `astro dev status` / `astro dev logs` / `astro dev stop`). Default local URL is the Astro dev host printed on start (typically <http://localhost:4321>).
- **Auth:** none — public pages only. No `DEFAULT_USER` / `DEFAULT_PASSWORD`.

## Cursor Cloud specific instructions

Pure static Astro + Svelte SPA (no backend/DB/auth); all state is client-side `localStorage`. Standard commands live in `README.md` (`npm run dev` / `check` / `build` / `preview`).

- **Node version:** the repo pins Node `24.x`, but the cloud VM's default `node` on `PATH` (`/exec-daemon/node`) is Node 22. Node 24 (via `nvm`) is prepended to `PATH` in `~/.bashrc` during setup, so new shells get Node 24 automatically. Commands work under either version, but prefer Node 24 to match the pin.
- **Dev server:** the `astro dev --background` helper referenced above is a local `dotagents` tool that is **not** present in cloud — use `npm run dev` (serves <http://localhost:4321>) and background it yourself (e.g. tmux).
- **Committing:** `npm ci`'s `prepare` script sets `core.hooksPath` to `.git-hooks`, and `.git-hooks/pre-commit` sources `~/code/dotagents/gate/gate-lib.sh`, which does not exist in cloud, so normal commits fail. Commit with `git commit --no-verify` in this environment.
- **Verify without committing:** run the gate steps directly — `npm run check` (types), `npm run build`, and `npm run check:actions` (actionlint+shellcheck; downloads the shellcheck binary on first run).
