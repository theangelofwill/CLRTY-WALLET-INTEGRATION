# The 25 Leverage Nodes — Implementation Checklist

Complete three-phase rollout for wallet integration. All 25 nodes verified via `make clarity-wallet-nodes-verify`.

---

## Phase 1 — Foundation

**Map hierarchy · Deploy registry · Finalize SDK · UX/Compliance docs**

| # | Node | Deliverable | Verify |
|---|------|-------------|--------|
| 1 | N01 | Map wallet hierarchy | `clrty wallet hierarchy` |
| 2 | N02 | Deploy universal asset registry | `GET /v1/wallet/registry` |
| 3 | N03 | Finalize CLRTYWallet SDK | `clarity-wallet/wallet-integration/src/clrty-wallet.ts` |
| 4 | N04 | Security-first UX spec | [SECURITY_FIRST_UX.md](./SECURITY_FIRST_UX.md) |
| 5 | N05 | Multi-state UI visuals | [frontend/integration-package/](../../../../frontend/integration-package/) |
| 6 | N06 | Compliance-as-protocol | [COMPLIANCE_MEMO.md](./COMPLIANCE_MEMO.md) |
| 7 | N07 | Sovereign transit logic | `GET /v1/wallet/sovereignty` |
| 8 | N08 | Diagnostic pulse | `GET /v1/wallet/health` |

---

## Phase 2 — Execution

**Asset portability · ZK-hooks · Institutional kits · Market Maker RFP**

| # | Node | Deliverable | Verify |
|---|------|-------------|--------|
| 9 | N09 | Automated asset portability | `GET /v1/wallet/migrate-guide` |
| 10 | N10 | State-snapshot export | `POST /v1/wallet/sovereignty/export` |
| 11 | N11 | Encryption specification | [ENCRYPTION_SPEC.md](./ENCRYPTION_SPEC.md) |
| 12 | N12 | Redundant node relay | `GET /v1/wallet/failover` |
| 13 | N13 | ZK-identity bridging | `POST /v1/onboarding/calibrate` |
| 14 | N14 | Integration outreach suite | [PARTNER_OUTREACH_LETTER.md](../../../../integration-package/PARTNER_OUTREACH_LETTER.md) |
| 15 | N15 | Institutional sales kit | `GET /v1/wallet/enterprise` |
| 16 | N16 | Market Maker RFP | [MARKET_MAKER_RFP.md](./MARKET_MAKER_RFP.md) |
| 17 | N17 | Capital-scale simulations | `CLRTY.Predict()` / `POST /v1/cortexpay/predict` |

---

## Phase 3 — Launch

**High-signal outreach · Data room access · Stress testing · DNS hardening**

| # | Node | Deliverable | Verify |
|---|------|-------------|--------|
| 18 | N18 | High-signal outreach | `wallet_directory.json` |
| 19 | N19 | VC-ready data rooms | [audit_data_room.md](../../../../docs/audit/audit_data_room.md) |
| 20 | N20 | Listing dossier distribution | `listing_dossier_manifest.json` |
| 21 | N21 | Automated stress test | `wallet_directory_stress.sh` |
| 22 | N22 | Final sovereign reset | [SOVEREIGN_EXIT_PROTOCOL.md](./SOVEREIGN_EXIT_PROTOCOL.md) |
| 23 | N23 | Community validator | `GET /v1/wallet/verify-balance` |
| 24 | N24 | Global DNS hardening | [DNS_HARDENING.md](./DNS_HARDENING.md) |
| 25 | N25 | Final execution sync | `make clarity-wallet-nodes-verify` |

---

## Commands

```bash
make clarity-wallet-nodes-verify          # 25/25 gate
clrty wallet hierarchy                  # N01
clrty wallet nodes                       # full node manifest
clrty wallet nodes verify                # local artifact check
curl -s :8545/v1/wallet/checklist | jq   # phase summary API
```
