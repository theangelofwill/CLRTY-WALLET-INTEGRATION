#!/usr/bin/env python3
"""Verify all 25 wallet integration leverage nodes + phase artifacts."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NODES_MANIFEST = ROOT / "wallet-integration/manifests/wallet_integration_25_nodes.json"
REPORT = ROOT / "var/compliance/wallet_25_nodes_report.json"

ARTIFACTS: dict[str, list[str]] = {
    "N01": ["wallet-integration/manifests/wallet_hierarchy.json"],
    "N02": ["wallet-integration/manifests/universal_asset_registry.json"],
    "N03": ["wallet-integration/src/clrty-wallet.ts"],
    "N04": ["wallet-integration/docs/SECURITY_FIRST_UX.md"],
    "N05": ["portal/index.html"],
    "N06": ["wallet-integration/docs/COMPLIANCE_MEMO.md"],
    "N07": [],
    "N08": [],
    "N09": ["wallet-integration/docs/ASSET_PORTABILITY.md"],
    "N10": [],
    "N11": ["wallet-integration/docs/ENCRYPTION_SPEC.md"],
    "N12": [],
    "N13": [],
    "N14": ["integration-package/PARTNER_OUTREACH_LETTER.md"],
    "N15": ["wallet-integration/manifests/institutional_sales_kit.json"],
    "N16": ["wallet-integration/docs/MARKET_MAKER_RFP.md"],
    "N17": ["wallet-integration/src/clrty-wallet.ts"],
    "N18": ["wallet-integration/manifests/wallet_directory.json"],
    "N19": ["wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md"],
    "N20": ["wallet-integration/manifests/listing_dossier_manifest.json"],
    "N21": ["scripts/wallet_directory_stress.sh"],
    "N22": ["wallet-integration/docs/SOVEREIGN_EXIT_PROTOCOL.md"],
    "N23": [],
    "N24": ["wallet-integration/docs/DNS_HARDENING.md"],
    "N25": ["wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md"],
}

PHASES = {
    1: {"name": "Foundation", "nodes": [f"N{i:02d}" for i in range(1, 9)]},
    2: {"name": "Execution", "nodes": [f"N{i:02d}" for i in range(9, 18)]},
    3: {"name": "Launch", "nodes": [f"N{i:02d}" for i in range(18, 26)]},
}


def main() -> int:
    if not NODES_MANIFEST.exists():
        print(f"MISSING {NODES_MANIFEST}")
        return 1
    data = json.loads(NODES_MANIFEST.read_text())
    nodes = data.get("nodes", [])
    details = []
    for n in nodes:
        nid = n.get("id", "")
        missing = [p for p in ARTIFACTS.get(nid, []) if not (ROOT / p).exists()]
        ok = n.get("status") == "verified" and not missing
        details.append({"id": nid, "phase": n.get("phase"), "status": "verified" if ok else "incomplete", "missing": missing})
    verified = sum(1 for d in details if d["status"] == "verified")
    total = len(details)
    phase_report = {}
    for p, meta in PHASES.items():
        pnodes = [d for d in details if d["id"] in meta["nodes"]]
        phase_report[str(p)] = {
            "name": meta["name"],
            "complete": all(x["status"] == "verified" for x in pnodes),
            "verified": sum(1 for x in pnodes if x["status"] == "verified"),
            "total": len(pnodes),
        }
    report = {"total": total, "verified": verified, "complete": verified == total == 25, "phases": phase_report, "nodes": details}
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps(report, indent=2))
    if verified != 25 or total != 25:
        print(f"FAIL: {verified}/{total} nodes verified (expected 25/25)")
        return 1
    print("OK: wallet nodes verify passed (25/25)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
