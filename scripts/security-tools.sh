#!/usr/bin/env bash
((BASH_VERSINFO[0] >= 5)) || { echo "✗ $0 requires Bash >= 5, not $BASH_VERSION. Fix: brew install bash; open a fresh shell and rerun repository setup." >&2; exit 1; }
# Print the path of one checksum-pinned scanner binary.
# Archive and binary hashes are the official release bytes. gitleaks stays on 8.24.2,
# the same release as gate/gate-lib.sh and .github/workflows/ci.yml.
set -euo pipefail

if [[ $# -ne 1 ]]; then
	echo "✗ usage: $0 gitleaks|zizmor|osv-scanner" >&2
	exit 2
fi

tool="$1"
platform="$(uname -s)/$(uname -m)"
cache="${XDG_CACHE_HOME:-$HOME/.cache}/learn-the-far/security-tools"
mkdir -p "$cache"

checksum() { # <file> <expected sha256>
	local actual
	if command -v sha256sum >/dev/null 2>&1; then
		actual="$(sha256sum "$1")"
	elif command -v shasum >/dev/null 2>&1; then
		actual="$(shasum -a 256 "$1")"
	else
		echo "✗ sha256sum or shasum is required to verify $tool" >&2
		return 1
	fi
	actual="${actual%% *}"
	[[ "$actual" == "$2" ]]
}

# pin <kind> <member> <version-tool> <url> <archive-sha256> <binary-sha256>
# kind is "tar" or "bin". For bin, the archive hash and the binary hash are the same.
pin() {
	kind="$1"
	member="$2"
	version_tool="$3"
	url="$4"
	archive_sha="$5"
	binary_sha="$6"
}

case "$tool:$platform" in
	gitleaks:Linux/x86_64)
		pin tar gitleaks gitleaks \
			"https://github.com/gitleaks/gitleaks/releases/download/v8.24.2/gitleaks_8.24.2_linux_x64.tar.gz" \
			fa0500f6b7e41d28791ebc680f5dd9899cd42b58629218a5f041efa899151a8e \
			64805175c8f88959587ba6afc58210401088206a27ba582cfbb98791137d6208 ;;
	gitleaks:Linux/aarch64 | gitleaks:Linux/arm64)
		pin tar gitleaks gitleaks \
			"https://github.com/gitleaks/gitleaks/releases/download/v8.24.2/gitleaks_8.24.2_linux_arm64.tar.gz" \
			574a6d52573c61173add7ddb5e3cc68c0e82cb0735818a1eeb9a0a2de1643fbc \
			455494f14c34ee5394fa0eef6af986d0eebbabc16aca5be0bdc9bdd62518eb03 ;;
	gitleaks:Darwin/x86_64)
		pin tar gitleaks gitleaks \
			"https://github.com/gitleaks/gitleaks/releases/download/v8.24.2/gitleaks_8.24.2_darwin_x64.tar.gz" \
			bc3c46f8039ba716ba8461fa6745c9d1cfb90ca2f5f881d8d0cf66b7ba7b742c \
			3ee6a08d5e035aff0d595e137fecffde796dbb0520fa0dd0be9d38baaf62efa6 ;;
	gitleaks:Darwin/arm64)
		pin tar gitleaks gitleaks \
			"https://github.com/gitleaks/gitleaks/releases/download/v8.24.2/gitleaks_8.24.2_darwin_arm64.tar.gz" \
			90d13686937ac7429b97a3acbf1e1d0ce90d92ae2d0cf46a690bd8ae5230bea0 \
			c75ea6f594e0a857efa1220fa08088b55e1465a32ab00cfc7aa2ec64cec031fe ;;
	zizmor:Linux/x86_64)
		pin tar zizmor zizmor \
			"https://github.com/zizmorcore/zizmor/releases/download/v1.32.0/zizmor-x86_64-unknown-linux-gnu.tar.gz" \
			bb110cc765eca9cd7efb2e284a956be5974c60027b0970f16397d86208a9957b \
			04d55fb88e582a8e9a9ce6b4753df723fc44c35e0d1a8e8771db9e017066c6df ;;
	zizmor:Linux/aarch64 | zizmor:Linux/arm64)
		pin tar zizmor zizmor \
			"https://github.com/zizmorcore/zizmor/releases/download/v1.32.0/zizmor-aarch64-unknown-linux-gnu.tar.gz" \
			cb152b207f815116d7fa1c1ee4614f61578803351395052908095e79adfd9fd0 \
			5056aebea3b0ec5238921c5fd11dae104fdb65589e3ed0a8bb2e06ef85d6e809 ;;
	zizmor:Darwin/x86_64)
		pin tar zizmor zizmor \
			"https://github.com/zizmorcore/zizmor/releases/download/v1.32.0/zizmor-x86_64-apple-darwin.tar.gz" \
			6983143c719ada6845a69cc4dd2bacc215f971662fecd8bbd2678388e5ce5969 \
			8b9512c8507f17266325c8a580b6897cf8834e2892a4bc3acd70b43165bb72af ;;
	zizmor:Darwin/arm64)
		pin tar zizmor zizmor \
			"https://github.com/zizmorcore/zizmor/releases/download/v1.32.0/zizmor-aarch64-apple-darwin.tar.gz" \
			6efed18c4539a663fd3c851a2be9533fd8456c4e646d9416206da059154a0d3c \
			fd1e0503f98714dac56fb6859ccb8ddbac2dc1eb00562dc9d174c6858994c0f1 ;;
	osv-scanner:Linux/x86_64)
		pin bin osv-scanner osv-scanner \
			"https://github.com/google/osv-scanner/releases/download/v2.7.1/osv-scanner_linux_amd64" \
			fb7dab19a8bd9bbe5c3189f09d4b7ee1820c9553a23bac202648a56efd2f6ee8 \
			fb7dab19a8bd9bbe5c3189f09d4b7ee1820c9553a23bac202648a56efd2f6ee8 ;;
	osv-scanner:Linux/aarch64 | osv-scanner:Linux/arm64)
		pin bin osv-scanner osv-scanner \
			"https://github.com/google/osv-scanner/releases/download/v2.7.1/osv-scanner_linux_arm64" \
			983d22fbad9724514e3fcc6acc83b5fa64c5ffa6b0d9f510028f22c1b223ff81 \
			983d22fbad9724514e3fcc6acc83b5fa64c5ffa6b0d9f510028f22c1b223ff81 ;;
	osv-scanner:Darwin/x86_64)
		pin bin osv-scanner osv-scanner \
			"https://github.com/google/osv-scanner/releases/download/v2.7.1/osv-scanner_darwin_amd64" \
			b8420d5485ba792626315f1bf9a5a2046e971d38eea75bf9090c38852dbc3b1b \
			b8420d5485ba792626315f1bf9a5a2046e971d38eea75bf9090c38852dbc3b1b ;;
	osv-scanner:Darwin/arm64)
		pin bin osv-scanner osv-scanner \
			"https://github.com/google/osv-scanner/releases/download/v2.7.1/osv-scanner_darwin_arm64" \
			b22c02877a811c8f78956e8643efa554932b7378f590d13f8e97d4e9448a29f3 \
			b22c02877a811c8f78956e8643efa554932b7378f590d13f8e97d4e9448a29f3 ;;
	*)
		echo "✗ $tool has no pinned release for $platform" >&2
		exit 1 ;;
esac

version_ok() {
	local reported
	case "$version_tool" in
		gitleaks)
			reported="$("$1" version 2>/dev/null || true)"
			reported="${reported#v}"
			[[ "$reported" == 8.24.2 ]] ;;
		zizmor)
			[[ "$("$1" --version 2>/dev/null | head -n 1)" == "zizmor 1.32.0" ]] ;;
		osv-scanner)
			"$1" --version 2>/dev/null | grep -q 'osv-scanner version: 2.7.1' ;;
		*)
			return 1 ;;
	esac
}

dest="$cache/$tool-$binary_sha"
if [[ -x "$dest" ]] && checksum "$dest" "$binary_sha" && version_ok "$dest"; then
	printf '%s\n' "$dest"
	exit 0
fi

work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT
download="$work/download"
curl --fail --location --silent --show-error --retry 3 --connect-timeout 10 --max-time 180 \
	"$url" --output "$download" \
	|| { echo "✗ could not download pinned $tool" >&2; exit 1; }
checksum "$download" "$archive_sha" || { echo "✗ $tool archive checksum does not match the pin" >&2; exit 1; }

if [[ "$kind" == tar ]]; then
	tar -xzf "$download" -C "$work"
	if find "$work" -type l -print | grep -q .; then
		echo "✗ $tool archive contains a symlink" >&2
		exit 1
	fi
	mapfile -d '' found < <(find "$work" -type f -name "$member" -print0)
	if [[ ${#found[@]} -ne 1 ]]; then
		echo "✗ $tool archive does not contain exactly one $member binary" >&2
		exit 1
	fi
	extracted="${found[0]}"
else
	extracted="$download"
fi

checksum "$extracted" "$binary_sha" || { echo "✗ $tool binary checksum does not match the pin" >&2; exit 1; }
chmod 0755 "$extracted"
version_ok "$extracted" || { echo "✗ $tool binary does not report its pinned version" >&2; exit 1; }
install -m 0755 "$extracted" "$dest"
printf '%s\n' "$dest"
