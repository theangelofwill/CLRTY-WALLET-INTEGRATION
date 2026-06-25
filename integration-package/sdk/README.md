# CLRTY Integration SDK

```bash
npm install @clrty/clarity-wallet
```

```typescript
import { CLRTYWallet } from '@clrty/clarity-wallet/wallet-integration';

const clrty = CLRTYWallet.connect({ api: 'http://127.0.0.1:8545' });
const { balance } = await clrty.getBalance(wallet);
const route = await clrty.suggestBridgePath({ wallet, amount: 1_000_000_000n });
await clrty.promptWatchAsset();
```

See [integrate.ts](./integrate.ts) for the canonical 10-line reference.
