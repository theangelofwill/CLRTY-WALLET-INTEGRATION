# CLRTY Integration Package (Zero-Friction)

**Branch:** [The-Integration-Package-(Zero-Friction)](https://github.com/theangelofwill/-CLRTY/tree/The-Integration-Package-(Zero-Friction))

Turn-key wallet partner kit for listing **$CLRTY** as a Sovereign Asset — asset registry, 10-line SDK, audit package, and partnership terms. No manual listing queue.

## Start here

| Document | Purpose |
|----------|---------|
| **[PARTNER_OUTREACH_LETTER.md](./PARTNER_OUTREACH_LETTER.md)** | Complete filled outreach letter (send to wallet partners) |
| [ZERO_FRICTION_PACKET.md](./ZERO_FRICTION_PACKET.md) | Technical packet summary |
| [frontend/integration-package/index.html](../frontend/integration-package/index.html) | Professional portal UI |
| [dist/integration-package-zero-friction.zip](../dist/integration-package-zero-friction.zip) | Downloadable kit (SHA-256 in manifest) |

## Kit contents

| Asset | GitHub link |
|-------|-------------|
| Universal Asset Registry | [universal_asset_registry.json](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/clarity-wallet/wallet-integration/manifests/universal_asset_registry.json) |
| EIP-747 watchAsset | [eip747-watchAsset.json](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/integration-package/sdk/eip747-watchAsset.json) |
| 10-line SDK | [integrate.ts](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/integration-package/sdk/integrate.ts) |
| CLRTYWallet class | [clrty-wallet.ts](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/clarity-wallet/wallet-integration/src/clrty-wallet.ts) |
| Compliance memo | [COMPLIANCE_MEMO.md](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/clarity-wallet/wallet-integration/docs/COMPLIANCE_MEMO.md) |
| Wallet directory | [directory.html](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/frontend/integration-package/directory.html) |

## Verify

```bash
make integration-package-verify
curl -s http://127.0.0.1:8545/v1/wallet/integration-kit | jq .
clrty wallet integration-kit
```

## Token facts

- **CLRTY** · 9 decimals · **16,000,000** supply cap
- Chains: clrty-l1, ethereum, base, arbitrum
- API: `GET /v1/wallet/registry` · `GET /v1/wallet/directory` · `GET /v1/wallet/integration-kit`
