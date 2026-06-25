# Downloads — CLRTY Wallet Integration

All kits verified via `make verify`. SHA-256 checksums in `var/compliance/integration_package_report.json`.

---

## Primary downloads

| Kit | File | Contents |
|-----|------|----------|
| **Zero-Friction Partner Kit** | [dist/integration-package-zero-friction.zip](dist/integration-package-zero-friction.zip) | Outreach letter, EIP-747 registry, 10-line SDK, portal HTML, 25-node manifests |
| **Full Integration Bundle** | [dist/clrty-wallet-integration-full.zip](dist/clrty-wallet-integration-full.zip) | Everything below — SDKs, access packs, audit docs, scripts, verify gates |

---

## SDK suite (included in full bundle)

| SDK | Path | Language |
|-----|------|----------|
| CLRTYWallet | [wallet-integration/src/clrty-wallet.ts](wallet-integration/src/clrty-wallet.ts) | TypeScript |
| 10-line integrate | [integration-package/sdk/integrate.ts](integration-package/sdk/integrate.ts) | TypeScript |
| SDK kernel | [sdk/clarity-wallet/src/sdk.ts](sdk/clarity-wallet/src/sdk.ts) | TypeScript (Execute/Predict/Identity) |
| Full kernel tree | [sdk/clarity-wallet/src/](sdk/clarity-wallet/src/) | wallet, rpc, dev, simulation |
| TypeScript client | [sdk/typescript/index.ts](sdk/typescript/index.ts) | TypeScript |
| Python client | [sdk/python/clrty_client.py](sdk/python/clrty_client.py) | Python |
| Rust client | [sdk/rust/clrty-client/](sdk/rust/clrty-client/) | Rust |
| Go client | [sdk/go/clrty/](sdk/go/clrty/) | Go |
| OpenAPI spec | [sdk/openapi/clrty-api.yaml](sdk/openapi/clrty-api.yaml) | REST contract |

---

## Access packs (28 packs)

Manifest: [downloads/access_packs_manifest.json](downloads/access_packs_manifest.json)

| Pack | Name |
|------|------|
| AP-WALLET-INT | Turn-Key Integration Kit |
| AP-WALLET-01/02/03 | Wallet integration tiers |
| AP-WALLET-DIR | Wallet directory |
| AP-SDK-FULL | Full SDK bundle (JS/PY/Rust/Go) |
| AP-SDK-JS/PY/RUST/GO | Per-language SDK |
| AP-FULL | Complete ecosystem pack |
| AP-LEARN-01 | Learn chapters |
| … | See manifest for all 28 |

---

## Audit & data room (Phase 3 — N19)

| Document | Path |
|----------|------|
| Audit data room index | [docs/audit/audit_data_room.md](docs/audit/audit_data_room.md) |
| Internal audit report | [docs/audit/internal_audit_report.md](docs/audit/internal_audit_report.md) |
| Security audit gates | [docs/audit/SECURITY_AUDIT_COMPLETION_GATES.md](docs/audit/SECURITY_AUDIT_COMPLETION_GATES.md) |
| Investor security summary | [docs/audit/INVESTOR_SECURITY_SUMMARY.md](docs/audit/INVESTOR_SECURITY_SUMMARY.md) |

---

## 25 Leverage Nodes checklist

[wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md](wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md)

| Phase | Items | Status |
|-------|-------|--------|
| 1 Foundation | Hierarchy, registry, SDK, UX/compliance | N01–N08 |
| 2 Execution | Portability, ZK-hooks, institutional, MM RFP | N09–N17 |
| 3 Launch | Outreach, data room, stress, DNS | N18–N25 |

```bash
make verify    # 25/25 + rebuild both ZIPs
```
