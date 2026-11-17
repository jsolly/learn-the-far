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
  "api repos/$GH_REPO/actions/workflows/ci.yml/runs?"*)
    if [[ "${GH_STUB_VALIDATION:-missing}" == missing ]]; then
      echo '{"workflow_runs":[]}'
    else
      sha=$(jq -r '.headRefOid' <<<"$GH_STUB_PR")
      jq -n --arg repo "$GH_REPO" --arg sha "$sha" \
        '{workflow_runs:[{id:101,status:"completed",conclusion:"success",head_sha:$sha,
          head_repository:{full_name:$repo},repository:{full_name:$repo}}]}'
    fi
    ;;
  "api repos/$GH_REPO/actions/runs/101/jobs?per_page=100")
    ci=success
    security=success
    case "$GH_STUB_VALIDATION" in
      green) ;;
      failed-ci) ci=failure ;;
      missing-security) security=missing ;;
      *) echo "stub: unexpected validation fixture" >&2; exit 99 ;;
    esac
    # Adversarial reports keep the workflow green even when a required job is
    # failed or absent. The reader must validate the named jobs independently.
    jq -n --arg ci "$ci" --arg security "$security" \
      '{jobs:([{id:1,name:"ci",status:"completed",conclusion:$ci},
        {id:2,name:"security",status:"completed",conclusion:$security}]
        | map(select(.conclusion != "missing")))} | .total_count=(.jobs|length)'
    ;;
  *)
    echo "stub: unexpected gh $*" >&2
    exit 99
    ;;
esac
