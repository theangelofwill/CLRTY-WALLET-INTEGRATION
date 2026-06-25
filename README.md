# CLRTY Wallet Integration

**Turn-Key Zero-Friction Partner Kit · 25 Leverage Nodes · Sovereign Asset Listing**

Standalone repository for wallet partner integration — extracted from [theangelofwill/-CLRTY](https://github.com/theangelofwill/-CLRTY). API handlers live in the monorepo `clrty-api`; this repo ships manifests, SDK, docs, portal, and verify gates.

---

## Quick links

| Resource | Path |
|----------|------|
| **Partner outreach letter** | [integration-package/PARTNER_OUTREACH_LETTER.md](integration-package/PARTNER_OUTREACH_LETTER.md) |
| **25-node checklist** | [wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md](wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md) |
| **10-line SDK** | [integration-package/sdk/integrate.ts](integration-package/sdk/integrate.ts) |
| **CLRTYWallet class** | [wallet-integration/src/clrty-wallet.ts](wallet-integration/src/clrty-wallet.ts) |
| **Portal UI** | [portal/index.html](portal/index.html) |
| **Download ZIP** | [dist/integration-package-zero-friction.zip](dist/integration-package-zero-friction.zip) |

---

## The 25 Leverage Nodes

### Phase 1 — Foundation
Map hierarchy · Deploy registry · Finalize SDK · UX/Compliance docs · **N01–N08**

### Phase 2 — Execution
Asset portability · ZK-hooks · Institutional kits · Market Maker RFP · **N09–N17**

### Phase 3 — Launch
High-signal outreach · Data room access · Stress testing · DNS hardening · **N18–N25**

Full matrix: [IMPLEMENTATION_CHECKLIST.md](wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md)

---

## Repository layout

```
integration-package/     Zero-friction outreach kit + SDK
wallet-integration/      Manifests, docs, CLRTYWallet SDK
portal/                  Professional directory + integration UI
scripts/                   verify, stress, build-kit
dist/                      integration-package-zero-friction.zip
```

---

## Verify

```bash
make verify              # 25/25 nodes + kit build
make nodes-verify        # leverage node artifact gate
make build-kit           # rebuild ZIP
make stress              # N21 stress probe (requires clrty-api optional)
```

---

## API (monorepo clrty-api)

When running [clrty-api](https://github.com/theangelofwill/-CLRTY) on `:8545`:

| Endpoint | Purpose |
|----------|---------|
| `GET /v1/wallet/registry` | Universal Asset Registry (EIP-747) |
| `GET /v1/wallet/directory` | Wallet directory (Tier 1/2/3) |
| `GET /v1/wallet/integration-kit` | Turnkey kit manifest |
| `GET /v1/wallet/checklist` | 25-node phase summary |
| `GET /v1/wallet/hierarchy` | Tier hierarchy map |
| `GET /v1/wallet/health` | Diagnostic pulse (N08) |

---

## Token metadata

| Field | Value |
|-------|-------|
| Symbol | CLRTY |
| Decimals | 9 |
| Supply | 16,000,000 |
| Chains | clrty-l1, ethereum, base, arbitrum |

---

## License

Proprietary — theangelofwill/CLRTY-WALLET-INTEGRATION
