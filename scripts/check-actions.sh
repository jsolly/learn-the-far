#!/usr/bin/env bash
# Lint GitHub Actions workflows with actionlint + shellcheck.
#
# Shared by CI (npm run check:actions), pre-commit, and local gate runs.
# Both tools are lockfile-pinned npm deps (node_modules/.bin). CI and local
# gates share the same binaries — no mise/brew/PATH dependence. This script is
# self-contained so forks and CI never need private authoring tooling.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

ACTIONLINT="$ROOT/node_modules/.bin/github-actionlint"
SHELLCHECK="$ROOT/node_modules/.bin/shellcheck"

if [[ ! -x "$ACTIONLINT" ]]; then
	echo "✗ github-actionlint not found at $ACTIONLINT — run npm ci" >&2
	exit 1
fi
if [[ ! -x "$SHELLCHECK" ]]; then
	echo "✗ shellcheck not found at $SHELLCHECK — run npm ci" >&2
	exit 1
fi

# Warm the lazy-downloaded binary (prints version; fails loud on network/arch miss).
"$SHELLCHECK" --version >/dev/null

exec "$ACTIONLINT" -shellcheck "$SHELLCHECK" .github/workflows/*.yml
