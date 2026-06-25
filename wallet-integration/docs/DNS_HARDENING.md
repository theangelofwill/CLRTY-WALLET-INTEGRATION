# DNS Hardening — Global Wallet Integration (N24)

## Production endpoints

| Service | Host | Notes |
|---------|------|-------|
| Mainnet RPC | `api.mainnet.clarity.com` | HTTP + WSS |
| Devnet RPC | `api.devnet.clarity.com` | staging |
| REST API | `api.clarity.com` | operator :8545 equivalent |
| Asset CDN | `clrty.link` | logos, EIP-747 images |

## Hardening checklist

- [x] CAA records for clarity.com
- [x] Health probe: `GET /v1/wallet/health`
- [x] Failover relay: `GET /v1/wallet/failover`
- [x] TLS cert pinning documented for institutional kits
