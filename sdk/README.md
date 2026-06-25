# SDK clients for clrty-api / wallet integration

| Path | Language | Use |
|------|----------|-----|
| `../wallet-integration/src/clrty-wallet.ts` | TypeScript | **Primary** — balance, routing, EIP-747 |
| `../integration-package/sdk/integrate.ts` | TypeScript | 10-line reference |
| `kernel/sdk.ts` | TypeScript | Execute / Predict / Identity kernel |
| `typescript/index.ts` | TypeScript | REST client |
| `python/clrty_client.py` | Python | REST client |
| `rust/clrty-client/` | Rust | REST client crate |
| `go/clrty/` | Go | REST client |
| `openapi/clrty-api.yaml` | OpenAPI | API contract |

```bash
# TypeScript wallet integration
import { CLRTYWallet } from '@clrty/wallet-integration';
const clrty = CLRTYWallet.connect({ api: 'http://127.0.0.1:8545' });
```

See [DOWNLOADS.md](../DOWNLOADS.md) for full bundle ZIP.
