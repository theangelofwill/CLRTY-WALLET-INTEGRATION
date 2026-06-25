# CLRTY SDK — complete suite

All SDKs ship in this repo and in `dist/clrty-wallet-integration-full.zip`.

## Packages

| Package | Path | Description |
|---------|------|-------------|
| **@clrty/clarity-wallet** | [clarity-wallet/](clarity-wallet/) | Full kernel — Execute, Predict, Identity, RPC, dev, wallet, simulation |
| **CLRTYWallet** | [../wallet-integration/src/clrty-wallet.ts](../wallet-integration/src/clrty-wallet.ts) | Partner integration — balance, routing, EIP-747 |
| **10-line integrate** | [../integration-package/sdk/integrate.ts](../integration-package/sdk/integrate.ts) | Copy-paste reference |
| **TypeScript REST** | [typescript/index.ts](typescript/index.ts) | `ClrtyClient` for clrty-api |
| **Python** | [python/clrty_client.py](python/clrty_client.py) | REST client |
| **Rust** | [rust/clrty-client/](rust/clrty-client/) | `clrty-client` crate |
| **Go** | [go/clrty/](go/clrty/) | REST client |
| **OpenAPI** | [openapi/clrty-api.yaml](openapi/clrty-api.yaml) | API contract |

## clarity-wallet kernel modules

```
sdk/clarity-wallet/src/
  sdk.ts              CLRTY.Execute | Predict | Identity
  index.ts            public exports
  core/cve.ts
  wallet/             identity, signer, environments
  execution/          helix, sponsorship
  simulation/         diamond-mind, moniversion
  rpc/                client, methods, websocket
  dev/                portal, courses, checklist, downloads
  api/compliance.ts
```

## Usage

```typescript
import { CLRTY } from '@clrty/wallet-integration';
import { CLRTYWallet } from '@clrty/wallet-integration/wallet-integration';

const clrty = CLRTYWallet.connect({ api: 'http://127.0.0.1:8545' });
await clrty.getBalance(wallet);
```

```bash
cd sdk/rust/clrty-client && cargo check
python3 sdk/python/clrty_client.py  # if __main__
```
