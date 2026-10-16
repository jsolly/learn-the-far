# Configuration

Relocatable tracked settings have one repository-owned home under `config/<domain>/`:

- `app/astro.mjs` owns Astro, Vite and release-identity settings; native
  `astro.config.mjs` delegates to it. Its retained-assets URL is explicitly rebased
  to `../../retained-assets/`, preserving immutable lazy assets and provenance.
  Astro keeps the repository root, public assets, sources and build outputs.
- `app/svelte.js` owns preprocessing; native `svelte.config.js` delegates to it.
- `typescript/project.json` owns compiler options and source scope, extending
  `strict-astro.json` and Astro's package preset. Include/exclude and baseUrl paths
  are rebased to preserve the root; aliases remain relative to that same baseUrl.
  Native `tsconfig.json` only extends the owner.
- `quality/biome.settings.jsonc` owns Biome rules, globs and overrides. Native
  `biome.jsonc` only extends it, preserving root glob and VCS ignore context.
  The settings filename avoids creating an unintended nested Biome project.
- `quality/knip.js` owns the unchanged analysis settings and explicitly names
  both the native Astro entry and relocated settings for static plugin discovery.
  Native `knip.config.js` delegates to it.
- `quality/yamllint.yaml` and `quality/.markdownlint-cli2.jsonc` are selected
  explicitly by the YAML command and root-anchored Markdown helper.
- `mcp/.env.example` is the blank optional ECharts MCP variable template. Copy it
  to ignored root `.env` only if using that helper; the app requires no environment file.

Required native exceptions stay at discovery paths: package manifests/lockfiles,
`.npmrc`, `.nvmrc`, `.mise.toml`, Git files, `.github/`, native agent registrations
(including Cursor's MCP registration), `.repo-independent.json`, the delegation
files above, `vercel.json` and `components.json` (shadcn-svelte's generation
manifest, aliases and CSS path). Application logic/content, retained assets,
fixtures, executable helpers and ignored local secrets/state keep their owners.

Create only used domains. Preserve roots, scopes, imports, assets and deployment
behavior when moving settings. Compare resolved settings and selected inputs,
then run `npm run gate`, including the retained lazy-asset and three-release real
browser fixtures. After merge verify intended Vercel production READY and
exact-release chapter/quiz smoke. Production stays main-only; no automatic Preview.
No external configuration checkout, home links, generator or synchronization is required.
