#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Range scan for the Security workflow. Same gitleaks release and log options as CI.
# CI keeps its own main-branch anchor; this script does not replace that step.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$root"
base="${SCAN_BASE_SHA:-}"
if [[ -n "$base" ]]; then
	[[ "$base" =~ ^[0-9a-f]{40}$ ]] || { echo "✗ SCAN_BASE_SHA must be 40 lowercase hex characters" >&2; exit 1; }
	git cat-file -e "${base}^{commit}" || { echo "✗ base commit $base is not in this checkout" >&2; exit 1; }
	range="${base}..HEAD"
else
	echo "No SCAN_BASE_SHA; scanning every commit reachable from HEAD" >&2
	range="HEAD"
fi

merges="$(git rev-list --min-parents=3 "$range")"
if [[ -n "$merges" ]]; then
	echo "✗ $range holds a merge with three or more parents, which the scan cannot read" >&2
	exit 1
fi

gl="$(bash "$root/scripts/security-tools.sh" gitleaks)"
echo "Scanning $range" >&2
"$gl" git --no-banner --no-color --redact --verbose \
	--log-opts="--text --diff-merges=remerge --no-color --no-textconv $range"
