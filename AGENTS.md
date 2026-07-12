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
