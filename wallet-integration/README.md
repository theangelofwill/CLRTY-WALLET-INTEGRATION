# Wallet Integration — 25 Leverage Nodes

Full wallet partner integration module. See **[IMPLEMENTATION_CHECKLIST.md](./docs/IMPLEMENTATION_CHECKLIST.md)** for the three-phase rollout.

## Phases

| Phase | Focus | Nodes |
|-------|-------|-------|
| **1 — Foundation** | Map hierarchy, Deploy registry, Finalize SDK, UX/Compliance docs | N01–N08 |
| **2 — Execution** | Asset portability, ZK-hooks, Institutional kits, Market Maker RFP | N09–N17 |
| **3 — Launch** | High-signal outreach, Data room access, Stress testing, DNS hardening | N18–N25 |

## Verify

```bash
make clarity-wallet-nodes-verify
clrty wallet checklist
clrty wallet hierarchy
clrty wallet nodes verify
bash scripts/clarity-wallet/wallet_directory_stress.sh
```

## API

- `GET /v1/wallet/checklist` — phase summary
- `GET /v1/wallet/nodes` — 25-node manifest
- `GET /v1/wallet/hierarchy` — tier map
- `GET /v1/wallet/registry` · `GET /v1/wallet/directory` · `GET /v1/wallet/integration-kit`
