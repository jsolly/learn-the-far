# Learn The FAR

A local-first flashcard app for studying the Federal Acquisition Regulation (FAR). Built as a pure static site with Astro, Svelte 5, shadcn-svelte, Tailwind CSS, and TypeScript.

Progress lives only in the browser (`localStorage`). There is no database, authentication, API, or backend infrastructure.

Live site: <https://learnthefar.com>

## Quick start

Requirements: Node.js 24.x (see `.nvmrc`).

```bash
git clone https://github.com/jsolly/learn-the-far.git
cd learn-the-far
npm ci
npm run dev
```

Open the URL Astro prints (typically <http://localhost:4321>).

| Command | Action |
| :-- | :-- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the local dev server |
| `npm run check` | Run Astro/Svelte type checks |
| `npm run build` | Build the static app to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check:actions` | Lint GitHub Actions workflows |

Optional (Cursor only): `npm run mcp:echarts` starts a project-local Apache ECharts MCP server. Copy `.env.example` to `.env` and fill Baidu BOS credentials if you use that server to publish chart images. The app itself does **not** need `.env` to build or run.

## Architecture

- **Static SPA** — `astro build` emits `dist/`; Vercel serves that directory (`vercel.json`).
- **Svelte islands** — interactive study/quiz UI under `src/components/app/`.
- **FAR content** — chapters and decks live under `src/lib/far/` (shelves, glossary, questions). Source links point at [acquisition.gov](https://www.acquisition.gov/browse/index/far).
- **Routes** — home (`/`) plus shareable learn routes (`/learn/[unit]/`, `/learn/[unit]/[chapter]/`).
- **State** — quiz progress and reading state in `localStorage` only (`src/lib/local-storage.ts`, `src/lib/reading-storage.ts`).

No env vars are required for the production app. Site URL for the sitemap is set in `astro.config.mjs` (`site`).

## Deploy your own copy (Vercel)

This project is designed to fork and redeploy with zero backend setup.

1. Fork (or clone) the repository on GitHub.
2. In [Vercel](https://vercel.com), **Add New Project** → import the fork.
3. Leave Framework Preset as Astro (or Other). Build settings are already in `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy. No environment variables are required for the app.
5. (Optional) Attach a custom domain in the Vercel project settings.

### Pointing the site at your domain

If you are not deploying to `learnthefar.com`, update:

| File | What to change |
| :-- | :-- |
| `astro.config.mjs` | `site: 'https://your-domain.example'` |
| `public/robots.txt` | Sitemap URL host |
| `vercel.json` | `www` → apex redirect `has` / `destination` hosts (or remove that redirect) |

Production for this repo stays Git-connected: pushes to `main` deploy automatically after CI.

## CI and commits

GitHub Actions (`.github/workflows/ci.yml`) runs on every PR and on `main`: actionlint, typecheck, and build.

Local pre-commit (`.git-hooks/pre-commit`) runs the same checks. `npm run prepare` points `core.hooksPath` at `.git-hooks` when you are not in CI. Contributors do not need any private tooling — the hook falls back to a built-in gate when the author’s optional shared gate library is absent.

## Contributing

1. Create a branch from `main`.
2. Make changes; keep the app static and local-first (no new secrets or server APIs without discussion).
3. Run `npm run check` and `npm run build` before opening a PR.
4. Open a pull request against `main`.

UI is public-only (no login). Prefer small, focused PRs.

## License

MIT — see [LICENSE](./LICENSE).
<!-- cloud-skills smoke 20260719T010550Z -->
