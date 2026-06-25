# Audit Data Room — CLRTY L1

Index for external security audit firm engagement.

## Source code (primary)

| Artifact | Path |
|----------|------|
| L1 library root | `CLRTY_SUBSTRATE/lib.rs` |
| Genesis config | `CLRTY_SUBSTRATE/boot/genesis_entropy.json` |
| Tokenomics manifest | `CLRTY_SUBSTRATE/boot/tokenomics_manifest.json` |
| Token constants | `CLRTY_SUBSTRATE/token_core/constants.rs` |
| Genesis hardening | `CLRTY_SUBSTRATE/token_core/blue_code/genesis_hardening.rs` |
| Governance | `CLRTY_SUBSTRATE/governance_substrate/` |
| PoC consensus | `CLRTY_SUBSTRATE/poc_consensus/` |
| Node binary (PoC) | `CLRTY_SUBSTRATE/src/bin/clarityd.rs` |

## Documentation

| Doc | Path |
|-----|------|
| Whitepaper | `docs/whitepaper.md` |
| Master blueprint | `docs/master_blueprint.md` |
| Tokenomics locked | `docs/tokenomics/TOKENOMICS_LOCKED.md` |
| Regulatory opinion memo (Howey) | `docs/investor/regulatory_opinion_memo.md` |
| Distribution tiers | `docs/tokenomics/distribution_tiers.md` |
| L1 launch checklist | `docs/l1_launch/checklist.md` |
| Internal audit template | `docs/audit/internal_audit_report.md` |
| **Investor security audit report** | `docs/investor/security_audit_report.md` |
| External audit completion gates | `docs/audit/SECURITY_AUDIT_COMPLETION_GATES.md` |
| Firm engagement scope | `docs/audit/EXTERNAL_AUDIT_REQUIRED.md` |

## Automated tooling outputs

Run before sharing with firm:

```bash
bash scripts/audit/l1_substrate_audit.sh 2>&1 | tee var/audit/l1_substrate_audit.log
cargo run -p clarity-cli -- chain genesis-verify
```

## Known limitations (disclose to auditor)

1. `clarityd` is PoC — no live P2P networking or persistent chain DB
2. Bridge perimeter code exists but is **deferred** — not in L1 launch scope
3. Ethereum Safe settlement is **deferred** — see `docs/l1_launch/DEFERRED_SETTLEMENT.md`
4. Internal Slither/Mythril targets EVM contracts only (Phase 10 reference)

## Invariants to verify

- Total supply ≤ 16,000,000 CLRTY (9 decimals)
- `mint_authority` and `freeze_authority` remain null at genesis
- Tokenomics checksum matches `tokenomics_manifest.json`
- 48h governance timelock on upgrade paths
