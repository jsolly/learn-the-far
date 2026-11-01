# Configuration

Move optional top-level tracked settings into `config/<domain>/` or their owner;
keep existing nested configuration with its component. Test configuration may live
under `tests/`. Each setting has one repository-owned home:

- `app/astro.mjs` owns Astro, Vite and release-identity settings. Package dev,
  build, preview, check and generic Astro commands select it explicitly. The
  retained-assets URL stays `../../retained-assets/`, preserving immutable lazy
  assets and provenance. Repository roots, public assets and build outputs stay
  the same.
  Its watch registration reloads Astro configuration when this physical owner
  changes. Verify an actual setting change and restoration in the running dev
  server; successful initial startup alone does not prove reload behavior.
- `app/svelte.js` owns preprocessing. Astro's Svelte integration selects it through
  a file URL resolved beside the app configuration.
- `typescript/tsconfig.json` owns compiler policy and extends Astro's package
  preset. Its empty `files` and `include` keep it from independently owning source
  files during native discovery; the root adapter supplies project membership.
- `quality/biome.settings.jsonc` owns Biome rules, globs and overrides. Package
  commands select this file explicitly, preserving repository VCS/ignore scope.
- `quality/knip.ts` is selected explicitly. Its Astro, Svelte and Biome metadata
  names the actual owners, preserving analysis plugins and entry discovery.
- `quality/yamllint.yaml` and `quality/.markdownlint-cli2.jsonc` are selected
  explicitly by the YAML command and root-anchored Markdown helper.
- `testing/vitest.preview.ts` selects the Preview workflow fixture suite from
  the repository root. `test:preview-workflow` and `check:actions` select it explicitly.
- `testing/vitest.unit.ts` selects the `src/**/*.test.ts` unit suite from the
  repository root. `test:unit` selects it explicitly and the gate runs it. It
  mirrors the root `tsconfig.json` `$lib/*` path, which Vitest does not read;
  the root file stays that alias's owner.
- `agents/repository.json` owns hook identity and its fixed trusted-bundle roster.
  Current checkouts refuse retired root `.repo-independent.json`, including a
  dangling link. [Hook trust](../docs/development.md#hook-trust) describes the
  explicit reviewed upgrade from an authenticated historical installed snapshot.
- `mcp/.env.example` is the blank optional ECharts MCP variable template. Copy it
  to ignored root `.env` only if using that helper; the app needs no environment file.

## Required native files

Root `tsconfig.json` is required by Astro 7.3.1, its Vite 8.1.0 graph and the
pinned shadcn-svelte generator. It owns source membership, exclusions, `baseUrl`
and aliases; compiler policy stays in `config/typescript/tsconfig.json`.
`--config` selects app settings and does not redirect TypeScript discovery.
Keeping membership at the root preserves TypeScript's selected inputs and gives
Vite's native resolver the intended root scope and `dist/` exclusion. Its native
nested filename also lets Vite recognize compiler-policy edits without clearing
its cache. Both `files` and `include` must remain empty in the policy file so a
source beneath `config/typescript/` falls back to the root adapter.

Verify actual per-file native resolution and emitted code, including source,
config, scripts, tests, nearer nested overrides, `dist/` and an outside sibling.
`tests/config/tsconfig-consumer.test.mts` authors the cold native discovery and
output test. Its sibling `.mjs` is generated because the protected hook consumer
requires that exact path. `npm run generate:test-fixtures` regenerates it with the
strict `typescript/generated-tests.json` compiler project; `check:ts` compiles to
a temporary directory and fails if the committed output differs. The compiler
checks types before emitting; the existing pinned Biome normalizes generated
formatting and import organization before comparison. The substantial fake
gh/git/npx CLI is authored as
`scripts/fixtures/vercel-preview-cli.cts` and generated as its sibling `.cjs` by
the same strict project and freshness check. Native dynamic Node imports inside an async CLI entrypoint preserve the shared
verbatim-module policy for both its CommonJS output and application checking. Tests add the Node shebang when
writing extensionless mock executables. Literal compiler probes and deliberately
rejected executable configurations remain intentional language fixtures.
For reload acceptance, change and restore `verbatimModuleSyntax` in the physical
policy owner and a setting in `config/app/astro.ts` while Astro serves the same
module URL with its native cache. Compare resolved TypeScript options and inputs,
then run the configured Astro typecheck, complete build and pinned shadcn-svelte
component generator. Successful initial startup alone does not prove reload.

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

The converted TypeScript tooling is checked by `tsc --project
config/typescript/tooling.json` before Astro checking in `npm run check:ts`. Node 24
runs the pie verifier directly; Vitest and Knip load their typed configurations.
