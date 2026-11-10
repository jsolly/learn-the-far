# Development and release

This repository owns its gate, setup, CI and deployment scripts. A separate
configuration repository, private package or global skill installation is not
required. Templates used during migration are examples, not an enforced upstream.

Prerequisites: Git, Bash >= 5 and Python >= 3.11. Install mise on non-Linux hosts;
fresh Linux setup provisions a pinned, checksum-verified public mise binary in
`/usr/local/bin`, using noninteractive sudo only when needed. The repository's `.mise.toml`
and `.nvmrc` own its tool pins. On a reviewed fresh `origin/main` checkout run:

```bash
bash scripts/setup-agent-environment.sh
```

Setup installs repo-owned hooks outside the working tree, provisions the pinned
tools and lockfile dependencies, and installs pinned Chromium when this repo uses
Playwright. Run the repo's documented quality gate with its pinned tools:

```bash
mise exec -- npm run gate
```

Use the repository's README and AGENTS.md for its build, test and deployment
commands. A missing prerequisite is a failed setup; report it rather than claiming
that the gate ran. No setup command deploys the application or infrastructure.

## Hook trust

The dispatcher lives in this clone's Git common directory, shared only by its
linked worktrees. It registers pre-commit and pre-push. The complete hook/library/setup
bundle must match current reviewed `origin/main`, or a deliberately approved exact
bundle digest. Missing files, symlinks, unreviewed modes and a foreign origin fail
closed. The dispatcher executes a verified snapshot, then runs quality scripts in
the committing checkout. Re-run reviewed setup after changing tool setup on main.

This is hook-registration integrity, not a sandbox. Never check out or execute
third-party/fork PR code in a trusted clone; review its diff through GitHub. Do not
run its npm lifecycle or setup scripts. Use a separate disposable environment when
execution of untrusted code has been explicitly authorized.

After independent semantic/security review of your own gate change, get its exact
digest with `bash scripts/repo-python.sh scripts/repo-hooks.py digest`. Use the installed snapshot's
`approve --root <absolute-repo-root> --digest <reviewed-digest>` command, with actual
values, to approve only those bytes; never approve a fork's bundle. Approvals are
repo-local. Revoke explicit approvals with `git config --local --unset-all
repo.trustedGateBundle`; current reviewed main remains trusted. Changing origin
invalidates the bundle identity. No environment variable selects another library.

The authoritative identity manifest is `config/agents/repository.json`. Current
checkouts refuse a retired root `.repo-independent.json`, including dangling links.
An installed snapshot from before this relocation needs the explicit upgrade flow.
After reviewing the complete candidate hook bundle, run from its repository root:

```bash
digest="$(bash scripts/repo-python.sh scripts/repo-hooks.py digest)" &&
  bash scripts/repo-python.sh scripts/repo-hooks.py approve-upgrade --digest "$digest" &&
  bash scripts/repo-python.sh scripts/repo-hooks.py install &&
  bash scripts/repo-python.sh scripts/repo-hooks.py verify
```

The upgrade reauthorizes the exact old installed snapshot against protected
`origin/main` or an existing repo-local approval, verifies its origin, files, modes,
digest and dispatcher, then approves only the reviewed new digest. It does not
trust an old manifest in the candidate checkout. Once reviewed main has the new
layout, ordinary setup installs it directly, including over a valid old snapshot.
Older checkouts must merge the reviewed migration before rerunning setup.

## Security scanning

The commit gate runs staged gitleaks, then offline zizmor and cfn-lint.
Pre-push runs Semgrep with `p/default --error` and OSV-Scanner on
`package-lock.json`. Those two call semgrep.dev and api.osv.dev and fail
closed when the request or a finding fails. `.github/workflows/security.yml`
runs the same scanners on a pull request, plus the pinned gitleaks range
scan. `.cursor/hooks.json` runs gitleaks before an agent `git commit` or
`git push`.

OSV-Scanner loads [`osv-scanner.toml`](../osv-scanner.toml) from the lockfile
directory. Each exception there is one advisory id, with a reason and an
expiry. The scanner stays enabled. The current rows and the overrides that
carry patched releases are in [security scanning](security-scanning.md).

cfn-lint covers the tracked CloudFormation template. There is no CDK app, so
Checkov and cdk-nag are not installed. Trivy, CodeQL, detect-secrets, and
cfn-nag are not installed.

`.github/dependabot.yml` opens npm and GitHub Actions updates. Those pull
requests still wait for the `ow-ci` label before validation runners start.

## Review and integration

Work from fresh main on an isolated branch. Review the actual final diff for bugs,
secrets, security, tests and repository guidelines; use an independent reviewer
for substantial or sensitive changes. Run the required complete local gate before
pushing. Create a same-repository PR; use a draft while approval/work remains.
Merge only when the required CI validates the exact current head. Never push to
the default branch, weaken rulesets, bypass checks or use an admin merge. Optional
personal review skills may help, but they are not prerequisites for this flow.

Preserve existing code-only Deploy and production-main-only Vercel rules. Never
push a `preview/` branch merely to validate this migration. Verify the intended
deployment and exact-release smoke when the repository requires them.

## Vercel Previews

Production Git deploys remain limited to `main`. Vercel's Git integration builds
a Preview for a pushed branch named `preview/**` (`vercel.ts`
`git.deploymentEnabled`); every other branch builds nothing. The branch's stable
Vercel URL tracks its latest push. No GitHub workflow, token or secret takes
part. Agents create or push a `preview/` branch only when John asks, through
`/preview-link`. Previews do not replace full CI or production smoke.

## Infrastructure and access

The proposed repository-owned static-media stack and human apply/upload handoff
are documented in [AWS static media preparation](aws-static-assets.md). It is
not applied, and media remains tracked until preservation and cutover checks pass.
Setup, build and gate use public tools and need no AWS login. Separately authorized AWS reads
use exactly one native production `aws_mcp` connection for `agent@jsolly.com`,
authorized as `AgentMcp` in account `730335616323`. Do not install an agent AWS
profile or credential-process helper, export OAuth credentials, add a second AWS
MCP connection or bridge it into local CLI calls. Preserve AWS Core for skills
and public knowledge, named human administrator profiles, Vercel credentials and
optional ECharts/provider configuration.

Source cleanup does not remove installed helpers, cached sessions, saved provider
settings or live IAM trust. Provider isolation and legacy credential retirement
require their separate acceptance evidence. Agents do not recover credentials,
broaden grants or run destructive infrastructure/database operations.

Repository instructions and access rules are maintained here. Personal home
configuration and optional global skills remain separate and are not installed,
removed or overwritten by repo setup.

## Website updates

Adapted from dotagents website-update canon at
`f861d7c961a7bb1e6229d4565b7c787d91279e1c`; all implementation and tests are owned
by this repository. No runtime or build dependency on dotagents is required.

The build derives one opaque UUID from the immutable Vercel deployment ID,
Vercel build commit, or local Git commit. A missing/invalid identity fails the
build. The UUID schema preserves compatibility with the first shipped detector.
The embedded document/client and `dist/release.json` share that identity. Vercel
serves `/release.json` with browser and CDN `no-store`; requests reject redirects,
wrong origins, bad content types/schema, HTTP failures and timeouts.

`FarQuizApp` owns one notice across its Svelte view changes. Ordinary route links
perform full document navigation and tear down the old controller; in-app
view/history transitions preserve the existing owner. Online,
visible tabs check at startup, return and reconnection, with a one-minute minimum
interval. Foreground polling uses five minutes plus up to thirty seconds of
jitter. Failures back off to thirty minutes plus jitter. Hidden/offline tabs stop their
timer; unmount aborts requests and removes all listeners. No service worker or
authenticated route exists.

**Later** dismisses only the detected release in the current document. The
persistent **Update available** button reopens it. A distinct release announces
again. The polite live region stays mounted, never steals focus on discovery,
and does not repeatedly announce the same release. Dismiss/reopen moves focus
to the replacement control. Quiz, chapter, shelf, summary, glossary and home
views share the same owner; no cross-tab messages can initiate reload.

**Update and reload** is disabled during quizzes and while offline. The handler
coalesces repeated clicks, rechecks the target, and refuses changed/failed targets.
It preserves the current URL, local storage and saved reading/quiz progress.
A tab-local session marker detects stale HTML after one explicit reload and
shows a manual retry message. Polling and startup never reload. The first shipped
release cannot notify tabs opened before detection code existed; those tabs need
one manual refresh. Existing UUID detectors can detect this aligned release.

Vercel publishes atomic static builds, but this application does not assume
unconfigured Skew Protection or permanent access to old deployments. Hydrated
app views hold their code/data in memory; their only deferred module is confetti.
`retained-assets/` keeps that immutable URL indefinitely, with provenance/license.
The build rejects new client lazy chunks until their bytes are retained. Full
route navigation obtains a consistent new document. Fonts keep content-addressed
URLs and system-font fallbacks. Do not remove retained assets while supported
open clients may need them, or splice new mutable data into an old client.

The full gate runs `npm run check:updates` using three real builds at one local
origin. It covers saved progress, independent tabs, active quiz safety, timer
polling, invalid/offline/HTTP failure checks, Later/reopen, dismissal across view
navigation, changed targets, stale reload/manual recovery and the retained lazy
asset. Desktop/mobile light/dark screenshots are written under `/tmp`. The
intentional HTTP 503 cases produce their expected browser diagnostics; unexpected
console/page errors fail. Worker, auth and offline-navigation rows of the canon
acceptance matrix are not applicable to this public site without a worker.
