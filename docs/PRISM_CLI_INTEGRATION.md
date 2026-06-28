# PRISM CLI Integration

Cross-link between [williamsnameiswill/clarity-prism-cli](https://github.com/williamsnameiswill/clarity-prism-cli) **v1.0.2** and this wallet integration repo.

## Install PRISM CLI

```bash
git clone https://github.com/williamsnameiswill/clarity-prism-cli.git
cd clarity-prism-cli
npm install && npm run build
node apps/cli/dist/index.js --version   # 1.0.2.μ1
```

Or use the published `clrt` binary after release tag `v1.0.2`.

## Username signup (P2P identity)

Usernames route P2P commons transfers on clrty-api `:8545`.

```bash
clrt account create --username alice --entity "Acme Capital" --email a@acme.com --intent liquidity
clrt account status --json
```

Namespace: `clrty://@alice`

API: `POST /v1/prism/account/register`

## P2P commons send

```bash
clrt prism commons send --to bob --file ./README.md
clrt prism commons inbox
clrt prism commons receive <transfer-id>
```

API routes:

| Method | Path |
|--------|------|
| POST | `/v1/commons/transfer` |
| GET | `/v1/commons/inbox/:username` |
| POST | `/v1/commons/receive` |

Local outbox when API offline: `~/.clrt/prism/commons/outbox.json`

## Wallet commands

```bash
clrt wallet status
clrt wallet registry
clrt wallet balance
clrt wallet nodes
clrt wallet connect --address 0x...
clrt pack download wallet-integration
```

API routes:

| Method | Path |
|--------|------|
| GET | `/v1/wallet/registry` |
| GET | `/v1/wallet/nodes` |
| POST | `/v1/wallet/register` |
| GET | `/v1/wallet/balance/:address` |

Pack download URL:

```
https://github.com/theangelofwill/CLRTY-WALLET-INTEGRATION/raw/main/dist/clrty-wallet-integration-full.zip
```

## Chain readiness (clrty-1)

```bash
clrt chain ready
clrt chain status
clrt chain indexer
```

Probes: `/v1/status`, `/v1/indexer/clrty-l1`, `/v1/sets/:wallet`, `/v1/dx/primitives`

## Cross-repo verify

From clarity-prism-cli:

```bash
node scripts/verify_cross_repo.mjs
CLRTY_VERIFY_STRICT=1 node scripts/verify_cross_repo.mjs   # fail if API down
```

Manifest pin: `CLRTY_SUBSTRATE/boot/prism_repo_sync_manifest.json` in [-CLRTY](https://github.com/theangelofwill/-CLRTY)

## Terminal UI

PRISM terminal (`npm run build:terminal`) includes funnels:

- **CLRTY Wallet** — balance, registry, pack link
- **Chain — clrty-1** — ready gate matrix on enter
- **Commons** — username P2P send/inbox/receive
- **Investor Terminal** — username collection step 2
