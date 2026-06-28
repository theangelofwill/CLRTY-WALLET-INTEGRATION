# CLRTY Wallet Integration

**Turn-Key Zero-Friction Partner Kit · 25 Leverage Nodes · Full SDK Suite · Complete Download**

Standalone repository: [theangelofwill/CLRTY-WALLET-INTEGRATION](https://github.com/theangelofwill/CLRTY-WALLET-INTEGRATION)

Monorepo API: [theangelofwill/-CLRTY](https://github.com/theangelofwill/-CLRTY) (`clrty-api` on `:8545`)

PRISM CLI: [williamsnameiswill/clarity-prism-cli](https://github.com/williamsnameiswill/clarity-prism-cli) **v1.0.2** — install `clrt`, run `clrt wallet *`, username P2P via `clrt prism commons send`. See **[docs/PRISM_CLI_INTEGRATION.md](docs/PRISM_CLI_INTEGRATION.md)**.

---

## Downloads (start here)

| Kit | File |
|-----|------|
| **Zero-Friction Partner Kit** | [dist/integration-package-zero-friction.zip](dist/integration-package-zero-friction.zip) |
| **Full Bundle (SDKs + packs + audit)** | [dist/clrty-wallet-integration-full.zip](dist/clrty-wallet-integration-full.zip) |

Full index: **[DOWNLOADS.md](DOWNLOADS.md)**

```bash
make verify    # 25/25 nodes + rebuild both ZIPs
```

---

## 25 Leverage Nodes — Implementation Checklist

### Phase 1 — Foundation
Map hierarchy · Deploy registry · Finalize SDK · UX/Compliance docs · **N01–N08**

### Phase 2 — Execution
Asset portability · ZK-hooks · Institutional kits · Market Maker RFP · **N09–N17**

### Phase 3 — Launch
High-signal outreach · Data room access · Stress testing · DNS hardening · **N18–N25**

**Checklist:** [wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md](wallet-integration/docs/IMPLEMENTATION_CHECKLIST.md)

---

## Repository layout

```
integration-package/     Zero-friction outreach + 10-line SDK
wallet-integration/      25-node manifests, CLRTYWallet, phase docs
portal/                  Professional UI + wallet directory
sdk/                     TypeScript, Python, Rust, Go, OpenAPI, clarity-wallet kernel
downloads/access_packs/    28 AP-* access pack manifests
docs/audit/              Data room + compliance (Phase 3 N19)
scripts/                 verify, build-kit, stress probe
dist/                    ZIP downloads (zero-friction + full bundle)
```

---

## SDK suite

| SDK | Path |
|-----|------|
| CLRTYWallet | [wallet-integration/src/clrty-wallet.ts](wallet-integration/src/clrty-wallet.ts) |
| 10-line integrate | [integration-package/sdk/integrate.ts](integration-package/sdk/integrate.ts) |
| Execute/Predict/Identity | [sdk/clarity-wallet/src/sdk.ts](sdk/clarity-wallet/src/sdk.ts) |
| Full SDK tree | [sdk/clarity-wallet/src/](sdk/clarity-wallet/src/) |
| TypeScript REST | [sdk/typescript/index.ts](sdk/typescript/index.ts) |
| Python | [sdk/python/clrty_client.py](sdk/python/clrty_client.py) |
| Rust | [sdk/rust/clrty-client/](sdk/rust/clrty-client/) |
| Go | [sdk/go/clrty/](sdk/go/clrty/) |

---

## Key links

- Outreach letter: [integration-package/PARTNER_OUTREACH_LETTER.md](integration-package/PARTNER_OUTREACH_LETTER.md)
- Asset registry: [wallet-integration/manifests/universal_asset_registry.json](wallet-integration/manifests/universal_asset_registry.json)
- Wallet directory: [wallet-integration/manifests/wallet_directory.json](wallet-integration/manifests/wallet_directory.json)
- Audit data room: [docs/audit/audit_data_room.md](docs/audit/audit_data_room.md)

---

## License

Proprietary — theangelofwill/CLRTY-WALLET-INTEGRATION
