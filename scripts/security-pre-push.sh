#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Explicit manual and CI network scanners; Git pre-push uses ranged gitleaks.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$root"
mode="${1:-all}"
case "$mode" in
	all | semgrep | osv) ;;
	*)
		echo "✗ usage: $0 [all|semgrep|osv]" >&2
		exit 2 ;;
esac
(($# <= 1)) || { echo "✗ usage: $0 [all|semgrep|osv]" >&2; exit 2; }

run_uvx() {
	if command -v uvx >/dev/null 2>&1; then
		command uvx "$@"
	elif command -v uv >/dev/null 2>&1; then
		command uv tool run "$@"
	elif command -v mise >/dev/null 2>&1; then
		mise exec -- uv tool run "$@"
	else
		echo "✗ uv is not on PATH — run reviewed scripts/setup-agent-environment.sh" >&2
		return 1
	fi
}

if [[ "$mode" == all || "$mode" == semgrep ]]; then
	SEMGREP_SEND_METRICS=off run_uvx --from 'semgrep==1.185.0' \
		semgrep scan --config p/default --error --metrics=off --disable-version-check "$root"
fi

if [[ "$mode" == all || "$mode" == osv ]]; then
	osv="$(bash "$root/scripts/security-tools.sh" osv-scanner)"
	"$osv" scan source --lockfile "$root/package-lock.json"
fi
