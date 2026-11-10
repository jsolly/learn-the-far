#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Offline commit scanners: zizmor (no GitHub API) and cfn-lint. No AWS credentials.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$root"
mode="${1:-all}"
case "$mode" in
	all | zizmor | cfn-lint) ;;
	*)
		echo "✗ usage: $0 [all|zizmor|cfn-lint]" >&2
		exit 2 ;;
esac

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

if [[ "$mode" == all || "$mode" == zizmor ]]; then
	zizmor="$(bash "$root/scripts/security-tools.sh" zizmor)"
	"$zizmor" --offline --color never "$root"
fi

if [[ "$mode" == all || "$mode" == cfn-lint ]]; then
	templates=()
	while IFS= read -r -d '' file; do
		if grep -q 'AWSTemplateFormatVersion' "$file"; then
			templates+=("$file")
		fi
	done < <(git ls-files -z -- '*.json' '*.yml' '*.yaml')
	if [[ ${#templates[@]} -eq 0 ]]; then
		echo "✗ no tracked CloudFormation templates found" >&2
		exit 1
	fi
	run_uvx --from 'cfn-lint==1.60.0' cfn-lint --format parseable "${templates[@]}"
fi
