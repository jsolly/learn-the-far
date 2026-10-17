# Configuration

Relocatable tracked settings have one repository-owned home under `config/<domain>/`:

- `app/astro.mjs` owns Astro, Vite and release-identity settings. Package dev,
  build, preview, check and generic Astro commands select it explicitly. The
  retained-assets URL stays `../../retained-assets/`, preserving immutable lazy
  assets and provenance. Repository roots, public assets and build outputs stay
  the same.
- `app/svelte.js` owns preprocessing. Astro's Svelte integration selects it through
  a file URL resolved beside the app configuration.
- `typescript/project.json` owns compiler options, source scope and aliases,
  extending `strict-astro.json` and Astro's package preset. Rebased include/exclude
  and `baseUrl` paths preserve the root; aliases stay relative to that base.
- `quality/biome.settings.jsonc` owns Biome rules, globs and overrides. Package
  commands select this file explicitly, preserving repository VCS/ignore scope.
- `quality/knip.js` is selected explicitly. Its Astro, Svelte and Biome metadata
  names the actual owners, preserving analysis plugins and entry discovery.
- `quality/yamllint.yaml` and `quality/.markdownlint-cli2.jsonc` are selected
  explicitly by the YAML command and root-anchored Markdown helper.
- `agents/repository.json` owns hook identity and its fixed trusted-bundle roster.
  Current checkouts refuse retired root `.repo-independent.json`, including a
  dangling link. [Hook trust](../docs/development.md#hook-trust) describes the
  explicit reviewed upgrade from an authenticated historical installed snapshot.
- `mcp/.env.example` is the blank optional ECharts MCP variable template. Copy it
  to ignored root `.env` only if using that helper; the app needs no environment file.

## Required native files

Root `tsconfig.json` remains a minimal adapter for Astro 7.3.1's root TypeScript
loader and its Vite alias fallback. `--config` selects the app settings and does
not redirect TypeScript discovery. Removing this adapter makes the app build
fail on `$lib` imports. The canonical `baseUrl` anchors the inherited alias map
for the pinned framework loader; moving that map without preserving its context
breaks Svelte imports. Verify the configured Astro typecheck and complete app build,
and the pinned shadcn-svelte component generator, when changing these paths.

Package manifests/lockfiles, `.npmrc`, `.nvmrc`, `.mise.toml`, Git files, `.github/`,
native agent registrations, `vercel.json` and `components.json` keep their required
locations. `components.json` owns shadcn-svelte's generation manifest, alias names
and CSS path. No optional Astro, Svelte, Biome or Knip root adapter remains.
No `.worktreeinclude` is needed because the app has no required ignored local config.
Application logic/content, retained assets, fixtures, executable helpers and
ignored local secrets/state keep their owners.

Create only used domains. Preserve roots, scopes, imports, assets and deployment
behavior when moving settings. Compare resolved settings and selected inputs,
then run `npm run gate`, including retained lazy-asset and three-release browser
fixtures. Exercise `npm run astro -- sync` and the documented dev lifecycle too.
After merge verify intended Vercel production READY and exact-release chapter/quiz
smoke. Production stays main-only; no automatic Preview. No external configuration
checkout, home links, generator or synchronization is required.
