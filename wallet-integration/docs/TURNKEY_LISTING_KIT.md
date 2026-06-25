# Turn-Key Listing Kit

One-page integration brief for wallet teams integrating $CLRTY.

## Quick Start (<10 lines)

```typescript
import { CLRTYWallet } from '@clrty/clarity-wallet';

const clrty = CLRTYWallet.connect({ rpc: 'http://localhost:8899' });
const balance = await clrty.getBalance(address);
const signed = await clrty.signTransaction(tx);
const route = await clrty.suggestBridgePath('swap');
```

## Assets Included

- Universal Asset Registry (`GET /v1/wallet/registry`)
- EIP-747 watchAsset export
- Compliance memo for legal review
- Audit hash references

## Support

`clrty wallet integration-kit` · `GET /v1/wallet/integration-kit`
