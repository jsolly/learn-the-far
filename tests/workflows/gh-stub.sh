#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Stand-in for gh in tests/workflows/auto-merge.test.ts. It resolves the
# repository the way gh 2.x does without a local checkout: `gh repo view`
# ignores GH_REPO and needs a positional repository, `gh pr list` and
# `gh pr view` honor GH_REPO, and `gh pr merge` here is always given a URL.
# It logs every call and answers only the calls the sweep should make.
set -euo pipefail
printf '%s\n' "$*" >>"$GH_STUB_LOG"
[[ -n "${GH_TOKEN:-}" ]] || { echo "stub: GH_TOKEN missing" >&2; exit 4; }

not_a_checkout() {
  echo "failed to run git: fatal: not a git repository (or any of the parent directories): .git" >&2
  exit 1
}

case "${1:-} ${2:-}" in
  "repo view")
    [[ "${3:-}" == "$GH_REPO" ]] || not_a_checkout
    echo main
    ;;
  "pr list")
    [[ -n "${GH_REPO:-}" ]] || not_a_checkout
    if [[ -n "$GH_STUB_OPEN" ]]; then printf '%s\n' "$GH_STUB_OPEN"; fi
    ;;
  "pr view")
    [[ -n "${GH_REPO:-}" ]] || not_a_checkout
    printf '%s\n' "$GH_STUB_PR"
    ;;
  "pr merge")
    [[ "${*: -1}" == "https://github.com/$GH_REPO/pull/"* ]] || not_a_checkout
    echo "stub: merge requested"
    ;;
  "api repos/$GH_REPO/actions/workflows/"*)
    echo '{"workflow_runs":[]}'
    ;;
  *)
    echo "stub: unexpected gh $*" >&2
    exit 99
    ;;
esac
