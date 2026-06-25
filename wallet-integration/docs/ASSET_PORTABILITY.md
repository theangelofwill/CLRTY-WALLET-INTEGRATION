# Asset Portability Guide (N09)

CLRTY wallets use 32-byte hex identifiers. Portability across chains:

1. Export state: `POST /v1/wallet/sovereignty/export`
2. Bridge route: `GET /v1/wallet/bridge/suggest?wallet=&amount=`
3. Registry metadata: `GET /v1/wallet/registry`
4. NTT outbound cap: 2,500,000 CLRTY (see tokenomics manifest)

Supported routes: `wormhole_ntt` (verified connections) · `layerzero_oft` (fallback)
