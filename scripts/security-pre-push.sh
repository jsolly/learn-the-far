#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Network scanners for pre-push and CI. Semgrep loads p/default from semgrep.dev.
# OSV-Scanner queries api.osv.dev. Both fail closed when a finding or the network call fails.
# --skip-unreachable (the pre-push hook only; CI never passes it) skips a scan whose server
# cannot be reached at all (no DNS, TCP or TLS, no answer, or a proxy denial, as in Claude's
# cloud sessions) with a warning; CI's security job runs it on the pull request. Any HTTP
# answer counts as reachable, and any other probe failure still fails.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$root"
skip_unreachable=0
if [[ "${1:-}" == --skip-unreachable ]]; then
	skip_unreachable=1
	shift
fi
mode="${1:-all}"
case "$mode" in
	all | semgrep | osv) ;;
	*)
		echo "✗ usage: $0 [--skip-unreachable] [all|semgrep|osv]" >&2
		exit 2 ;;
esac
(($# <= 1)) || { echo "✗ usage: $0 [--skip-unreachable] [all|semgrep|osv]" >&2; exit 2; }

# unreachable <url> <scan>: with --skip-unreachable, probe <url> with a HEAD request. Without
# --fail an HTTP error status still exits 0, so any answer means run the scan (return 1).
# Only curl's no-connection exits skip it (warn, return 0): 5/6 proxy or host not resolved,
# 7 no connect, 28 no answer in time, 35 TLS handshake, 56 connection dropped (a proxy that
# refuses the CONNECT). Any other curl failure, such as a broken local CA bundle, fails.
unreachable() {
	((skip_unreachable)) || return 1
	command -v curl >/dev/null 2>&1 || { echo "✗ curl is not on PATH — the pre-push scans need it to reach their servers" >&2; exit 1; }
	local rc=0
	curl --head --silent --output /dev/null --connect-timeout 5 --max-time 15 "$1" || rc=$?
	case "$rc" in
		0) return 1 ;;
		5 | 6 | 7 | 28 | 35 | 56)
			echo "⚠ $2 (pre-push) skipped: $1 is unreachable from this host (curl exit $rc). CI's security job runs it on the pull request." >&2
			return 0 ;;
		*)
			echo "✗ could not probe $1 for the $2 pre-push scan (curl exit $rc, not a refused connection) — fix this host's curl, or let CI's security job run the scan" >&2
			exit 1 ;;
	esac
}

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

if [[ "$mode" == all || "$mode" == semgrep ]] && ! unreachable https://semgrep.dev/ semgrep; then
	SEMGREP_SEND_METRICS=off run_uvx --from 'semgrep==1.185.0' \
		semgrep scan --config p/default --error --metrics=off --disable-version-check "$root"
fi

if [[ "$mode" == all || "$mode" == osv ]] && ! unreachable https://api.osv.dev/ osv-scanner; then
	osv="$(bash "$root/scripts/security-tools.sh" osv-scanner)"
	"$osv" scan source --lockfile "$root/package-lock.json"
fi
