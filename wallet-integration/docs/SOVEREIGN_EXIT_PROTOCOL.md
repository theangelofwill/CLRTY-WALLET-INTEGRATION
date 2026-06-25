# Sovereign Exit Protocol (N22)

Final sovereign reset procedure for wallet offboarding:

1. Export snapshot via `POST /v1/wallet/sovereignty/export`
2. Verify balance `GET /v1/wallet/verify-balance?wallet=`
3. Revoke capabilities `POST /v1/wallet/register` with `revoke: true`
4. Archive compliance attestation from settlement ledger

No custodial key export — sovereign control remains with user wallet.
