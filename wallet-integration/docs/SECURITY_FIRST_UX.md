# Security-First UX — Wallet Integration (N04)

- Passkey-first onboarding via `clrty wallet register`
- No seed phrase display in partner UIs — delegate to wallet native flows
- EIP-747 `watchAsset` only after user confirms registry metadata
- Compliance tier badges from `GET /v1/wallet/directory`
- Sign flows via `POST /v1/wallet/sign` with MLX middleware on CLI
