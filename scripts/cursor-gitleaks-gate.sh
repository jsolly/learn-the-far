#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Cursor beforeShellExecution gate. Stdout is only the permission JSON.
# Scanner output stays off stdout and is discarded: it can repeat source around a match.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$root"

if ! command -v jq >/dev/null 2>&1; then
	if command -v mise >/dev/null 2>&1; then
		jq() { mise exec -- jq "$@"; }
	else
		echo "✗ jq is required for the gitleaks agent gate" >&2
		exit 1
	fi
fi

allow() {
	jq -n '{permission:"allow"}'
	exit 0
}

deny() {
	jq -n --arg msg "$1" '{permission:"deny",user_message:$msg,agent_message:$msg}'
	exit 0
}

input="$(cat)"
command="$(jq -er '.command // empty' <<<"$input")" || exit 1
[[ -n "$command" ]] || exit 1

ops="$(python3 -c '
import shlex
import sys

try:
    tokens = shlex.split(sys.argv[1])
except ValueError:
    raise SystemExit(2)

ops = set()
i = 0
while i < len(tokens):
    while i < len(tokens) and "=" in tokens[i] and not tokens[i].startswith("-"):
        i += 1
    if i >= len(tokens):
        break
    if tokens[i] in {"&&", "||", ";", "|"}:
        i += 1
        continue
    base = tokens[i].rsplit("/", 1)[-1]
    if base != "git":
        while i < len(tokens) and tokens[i] not in {"&&", "||", ";", "|"}:
            i += 1
        continue
    i += 1
    while i < len(tokens) and tokens[i].startswith("-"):
        flag = tokens[i]
        i += 1
        if flag in {"-C", "-c", "--git-dir", "--work-tree"} and i < len(tokens):
            i += 1
    if i < len(tokens) and tokens[i] in {"commit", "push"}:
        ops.add(tokens[i])
    while i < len(tokens) and tokens[i] not in {"&&", "||", ";", "|"}:
        i += 1
print(" ".join(sorted(ops)))
' "$command")" || deny "Could not parse the shell command. git commit and git push stay blocked."

[[ "$ops" == *commit* || "$ops" == *push* ]] || allow

# shellcheck source=/dev/null
source "$root/gate/gate-lib.sh"
gl="$(gate_gitleaks_bin)" || deny "Pinned gitleaks is not available. Run reviewed scripts/setup-agent-environment.sh."

log="$(mktemp)"
cleanup() { rm -f "$log"; }
trap cleanup EXIT

if [[ "$ops" == *commit* ]]; then
	if ! "$gl" dir "$root" --no-banner --no-color --redact >"$log" 2>&1; then
		deny "gitleaks found a secret in the working tree. The value was not shown. Remove it before committing."
	fi
	if ! (gate_secrets_scan_staged) >"$log" 2>&1; then
		deny "gitleaks found a secret in the staged commit. The value was not shown. Remove it before committing."
	fi
fi

if [[ "$ops" == *push* ]]; then
	merges="$(git rev-list --min-parents=3 --all)"
	if [[ -n "$merges" ]]; then
		deny "History contains a merge with three or more parents, which gitleaks cannot read."
	fi
	if ! "$gl" git --no-banner --no-color --redact \
		--log-opts="--text --diff-merges=remerge --no-color --no-textconv --all" >"$log" 2>&1; then
		deny "gitleaks found a secret in repository history. The value was not shown. Rotate it and remove it before pushing."
	fi
fi

allow
