# Security scanning

OSV-Scanner 2.7.1 reads `package-lock.json` from the pre-push hook and from
`Security / osv-scanner`. A finding or a failed request to `api.osv.dev` fails
the check. The scanner is not disabled, and the configuration does not ignore
a package, a severity, or a directory. The workflow's `security` job is the
required status check. It runs after gitleaks, Semgrep, OSV-Scanner, zizmor,
and cfn-lint, and it fails unless every one of those jobs succeeded.

`osv-scanner.toml` sits beside the lockfile. `IgnoredVulns` lists one advisory
id at a time. `reason` says why that id is accepted, and `effectiveUntil` is
the first day the ignore stops applying. An ignored id also covers its
aliases, so the CVE alias of the same advisory is not listed again. After the
date, the advisory fails the scan until the row is replaced with a patched
release or a new review.

`.npmrc` sets `min-release-age=7`. npm will not install a version published
within the last seven days. Use the pinned Node from `.nvmrc`; older npm
releases do not enforce that setting.

## Patched releases

Direct `astro` is `^7.4.5`. That release depends on patched `vite` 8.3.5,
`zod` 4.6.7, `devalue` 6.0.3, and `smol-toml` 1.9.1. Svelte keeps its own
`devalue` 5.9.4, which includes the 5.9.3 fixes. `unifont` 1.0.3, required by
this Astro release, resolves `undici` 8.12.3. The lockfile resolves the other
advisories that had a patched release inside the parent's declared range.
Where a parent still requests a vulnerable version, `package.json` `overrides`
selects the patched release for that parent only:

| Parent | Package | Resolved | Why this override |
| --- | --- | --- | --- |
| `@hono/node-server` | `@hono/node-server` | 2.1.6 | `@modelcontextprotocol/sdk` 1.32.2 allows `^1.19.9 \|\| ^2.0.5`. The 1.x line has no fix for GHSA-rmxm-3fg6-px4f. |
| `@vercel/config` | `zod` | 4.6.7 | The package declares `zod@^3.22.0`. GHSA-mrhx-c7xc-m3w5 is fixed in 4.6.6. Its cron schema uses `z.object`, `z.string().regex`, and `parse`, which accept 4.6.7. `vercel.ts` imports only types. |
| `@vercel/routing-utils` | `path-to-regexp` | 6.3.0 | The package pins 6.1.0 and returns that compiler's result. GHSA-9wv6-86v2-598j is fixed in 6.3.0, which the package already vendors as `path-to-regexp-updated`. Express keeps hoisted `path-to-regexp` 8.4.2. |
| `markdownlint-cli2` | `markdown-it` | 14.3.3 | The package pins 14.1.1. GHSA-gfr2-rv44-r23c, GHSA-r7fv-28h4-cvq7, and GHSA-vfgh-jcmw-g37q are fixed in 14.3.3. |
| `markdownlint-cli2` | `smol-toml` | 1.9.1 | The package pins 1.6.1. GHSA-7w5x-hrqm-74c2 and GHSA-r4xh-jqrq-34v2 are fixed in 1.9.0; 1.9.1 matches the other parents, including `astro`. |
| `micromark-extension-math` | `katex` | 0.19.1 | The package allows `katex@^0.16.0`. GHSA-238p-pmpm-9mq7 is fixed in 0.18.2, and 0.19.1 is the newest release outside the seven-day window. `renderToString` still renders the math this linter passes through. |
| `markdownlint-cli2` | `js-yaml` | ^4.3.1 | Existing override. The package pins `js-yaml` 4.1.1. |

The `@hono/node-server` override is global because that package is the
dependency, and the SDK range already includes 2.1.6. The other overrides are
scoped to the parent that requested the old version.

## Reviewed dispositions

These rows are acceptances, not fixes. Build-time use reduces exposure for
public visitors and does not by itself show that every input is safe. Replace
a row with the upstream patch when one is published.

| Package | Advisory | Disposition |
| --- | --- | --- |
| deepmerge 4.3.1 | GHSA-gcqx-w48m-w2h4 (CVE-2026-93753) | Accept prototype poisoning of the object returned by `mergeObject` through 9 December 2026. `@sveltejs/vite-plugin-svelte` 7.3.1 calls it to merge its default options with this repository's Svelte and Vite configuration. npm still publishes 4.3.1 as the latest release, and the advisory's affected range ends at that version with no fixed event. The plugin requires `^4.3.1`. |

`effectiveUntil` is 2026-12-10. From that day the advisory fails OSV-Scanner
again. Evidence: [deepmerge advisory](https://osv.dev/GHSA-gcqx-w48m-w2h4)
and [upstream report](https://github.com/TehShrike/deepmerge/issues/273).
