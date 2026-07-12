## Ship

Ship profile: `vercel-static`

**Integration: branch → PR → CI-gated auto-merge (canonical).** Open a PR from your branch; `.github/workflows/auto-merge.yml` enables squash auto-merge once **`CI / ci`** is green. Direct push to `main` is break-glass only.

Production URL: <https://learnthefar.com>

Vercel Git integration deploys production on merge to `main`. After merge, verify <https://learnthefar.com> returns HTTP 200 — do not run a manual `vercel deploy` unless Git integration is broken.

Local gate before push: `npm run check && npm run build` (full gate also runs in GitHub CI on the PR).

## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

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
