# The Integration Package (Zero-Friction)

**CLRTY — Sovereign Asset · Turn-Key Wallet Partner Packet**

**GitHub branch:** https://github.com/theangelofwill/-CLRTY/tree/The-Integration-Package-(Zero-Friction)

$CLRTY is moving beyond standard utility; we are defining the **Sovereign Asset** category. We have identified **[Wallet Name]** as a critical gateway for our users. Rather than requesting a manual listing, we are providing a **Turn-Key Integration Packet** designed to eliminate your engineering overhead and provide immediate, high-volume utility to your user base.

> **Email-ready version:** [PARTNER_OUTREACH_LETTER.md](./PARTNER_OUTREACH_LETTER.md)

---

## 1. Asset Registry

**Universal Asset Registry (EIP-747 compatible)** — auto-detect metadata ready for your frontend.

| Resource | Link |
|----------|------|
| Live registry API | `GET http://127.0.0.1:8545/v1/wallet/registry` |
| Registry JSON | [universal_asset_registry.json](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/clarity-wallet/wallet-integration/manifests/universal_asset_registry.json) |
| EIP-747 `watchAsset` | [sdk/eip747-watchAsset.json](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/integration-package/sdk/eip747-watchAsset.json) |
| Professional directory | [directory.html](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/frontend/integration-package/directory.html) |

| Field | Value |
|-------|-------|
| Symbol | CLRTY |
| Decimals | 9 |
| Supply | 16,000,000 (immutable) |
| Chains | clrty-l1, ethereum, base, arbitrum |
| EVM | `0x000000000000000000000000000000000000c1r7` |

---

## 2. Integration SDK

**10-line implementation** for balance fetching and native $CLRTY routing.

```typescript
import { CLRTYWallet } from '@clrty/clarity-wallet/wallet-integration';

const api = process.env.CLRTY_API_BASE ?? 'http://127.0.0.1:8545';
const clrty = CLRTYWallet.connect({ api });
const balance = await clrty.getBalance(walletAddress);
const route = await clrty.suggestBridgePath({ wallet: walletAddress, amount: 1_000_000_000n });
const signed = await clrty.signTransaction({ wallet: walletAddress, payload: route });
await clrty.promptWatchAsset();
```

| Resource | Link |
|----------|------|
| 10-line source | [sdk/integrate.ts](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/integration-package/sdk/integrate.ts) |
| SDK class | [clrty-wallet.ts](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/clarity-wallet/wallet-integration/src/clrty-wallet.ts) |
| npm package | `@clrty/clarity-wallet` |
| CLI | `clrty wallet integration-kit` |
| ZIP download | [integration-package-zero-friction.zip](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/dist/integration-package-zero-friction.zip) |

---

## 3. Audit & Compliance

| Document | Link |
|----------|------|
| Internal audit | [internal_audit_report.md](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/docs/audit/internal_audit_report.md) |
| Security gates | [SECURITY_AUDIT_COMPLETION_GATES.md](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/docs/audit/SECURITY_AUDIT_COMPLETION_GATES.md) |
| Compliance memo | [COMPLIANCE_MEMO.md](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/clarity-wallet/wallet-integration/docs/COMPLIANCE_MEMO.md) |
| Manifest locks | [MANIFEST_INDEX.json](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/manifests/MANIFEST_INDEX.json) |
| Kit SHA-256 | `5f26cf8a51a85a10cbb6a59409b703dea35f6d0e4926e2a82ca2598db7dd281e` |

---

## 4. Sovereign Partnership Deal

Preferred partner designation for **[Wallet Name]**:

- **Incentivized volume** — programmatic fee share on $CLRTY swaps via your UI
- **Performance scaling** — dedicated RPC: HTTP `:8899`, WS `:8900`, REST `:8545`

---

## 5. Next Steps

Confirm SDK receipt → dedicated integration engineers assigned → 10-minute sync for partner node parameters.

**Portal:** [index.html](https://github.com/theangelofwill/-CLRTY/blob/The-Integration-Package-(Zero-Friction)/frontend/integration-package/index.html)  
**CLRTY Partnership Desk** · [PARTNER_OUTREACH_LETTER.md](./PARTNER_OUTREACH_LETTER.md)
