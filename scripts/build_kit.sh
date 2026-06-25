#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/dist/integration-package-zero-friction.zip"
STAGE="$ROOT/var/staging/integration-package"
rm -rf "$STAGE" "$OUT"
mkdir -p "$STAGE" "$(dirname "$OUT")" "$ROOT/var/compliance"

cp -R "$ROOT/integration-package/." "$STAGE/"
mkdir -p "$STAGE/wallet-integration"
cp -R "$ROOT/wallet-integration/docs" "$STAGE/wallet-integration/"
cp -R "$ROOT/wallet-integration/manifests" "$STAGE/wallet-integration/"
cp -R "$ROOT/wallet-integration/src" "$STAGE/wallet-integration/"
cp "$ROOT/portal/index.html" "$STAGE/portal-index.html"
cp "$ROOT/portal/directory.html" "$STAGE/portal-directory.html"

(cd "$STAGE" && zip -rq "$OUT" .)
python3 - "$OUT" << 'PY'
import json, hashlib, sys
from pathlib import Path
p = Path(sys.argv[1])
h = hashlib.sha256(p.read_bytes()).hexdigest()
report = {"zip": str(p.name), "sha256": h, "kit": "zero-friction", "status": "built"}
out = Path(sys.argv[1]).parents[1] / "compliance" / "integration_package_report.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps(report, indent=2))
PY
echo "Kit: $OUT"
