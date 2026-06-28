# Learn The FAR

A local-first flashcard app for studying the Federal Acquisition Regulation (FAR). It is built as a pure static SPA with Astro, Svelte, shadcn-svelte, and TypeScript.

User progress is stored only in the browser with `localStorage`. There is no database, authentication, API, or AWS infrastructure.

## Tech Stack

- Astro static build
- Svelte 5 for the interactive study experience
- shadcn-svelte UI components
- Tailwind CSS
- TypeScript
- Vercel hosting

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run check` | Run Astro/Svelte type checks |
| `npm run build` | Build the static app to `dist/` |
| `npm run preview` | Preview the production build locally |

## Hosting

Production: https://learnthefar.com (Vercel, Git-connected to this repo).

Vercel builds the app with `npm run build` and serves the generated `dist/` directory. The deployment settings are captured in `vercel.json`. Pushes to `main` trigger a production deploy automatically.

Because this is a static SPA, no server adapter or cloud database is required.

## FAR Content

The current MVP includes a bundled sample deck with source links back to [acquisition.gov](https://www.acquisition.gov/browse/index/far). A fuller FAR import can replace or extend `src/lib/far/sample-deck.ts` later.
