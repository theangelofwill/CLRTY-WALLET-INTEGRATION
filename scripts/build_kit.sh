#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/dist/integration-package-zero-friction.zip"
FULL="$ROOT/dist/clrty-wallet-integration-full.zip"
STAGE="$ROOT/var/staging/integration-package"
FULL_STAGE="$ROOT/var/staging/full-bundle"
rm -rf "$STAGE" "$FULL_STAGE" "$OUT" "$FULL"
mkdir -p "$STAGE" "$FULL_STAGE" "$(dirname "$OUT")" "$ROOT/var/compliance"

# Zero-friction kit (partner outreach slice)
cp -R "$ROOT/integration-package/." "$STAGE/"
mkdir -p "$STAGE/wallet-integration"
cp -R "$ROOT/wallet-integration/docs" "$STAGE/wallet-integration/"
cp -R "$ROOT/wallet-integration/manifests" "$STAGE/wallet-integration/"
cp -R "$ROOT/wallet-integration/src" "$STAGE/wallet-integration/"
cp "$ROOT/portal/index.html" "$STAGE/portal-index.html"
cp "$ROOT/portal/directory.html" "$STAGE/portal-directory.html"
(cd "$STAGE" && zip -rq "$OUT" .)

# Full bundle — SDKs + access packs + audit + everything
for dir in integration-package wallet-integration portal sdk downloads docs scripts; do
  cp -R "$ROOT/$dir" "$FULL_STAGE/" 2>/dev/null || true
done
cp "$ROOT/README.md" "$ROOT/DOWNLOADS.md" "$ROOT/Makefile" "$ROOT/package.json" "$FULL_STAGE/" 2>/dev/null || true
(cd "$FULL_STAGE" && zip -rq "$FULL" .)

python3 - "$OUT" "$FULL" << 'PY'
import json, hashlib, sys
from pathlib import Path

def sha(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()

out = Path(sys.argv[1])
full = Path(sys.argv[2])
report = {
    "kits": [
        {"name": "integration-package-zero-friction", "file": out.name, "sha256": sha(out)},
        {"name": "clrty-wallet-integration-full", "file": full.name, "sha256": sha(full)},
    ],
    "status": "built",
}
comp = Path(sys.argv[1]).parents[1] / "compliance" / "integration_package_report.json"
comp.parent.mkdir(parents=True, exist_ok=True)
comp.write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps(report, indent=2))
PY
echo "Zero-friction: $OUT"
echo "Full bundle:  $FULL"
