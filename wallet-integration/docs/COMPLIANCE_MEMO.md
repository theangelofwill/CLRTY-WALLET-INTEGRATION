# Compliance Memo — $CLRTY Wallet Integration

## AML/KYC Posture

CLRTY embeds compliance at the protocol layer via `token_core/extensions/compliance.rs`. Wallet integrations inherit:

- Tier-based KYC gating via `/v1/compliance/kyc-webhook`
- Jurisdiction rules on programmable transfers
- Sanctions screening via substrate `SanctionsScanner`

## Tokenomics Constraints

- No post-genesis mint
- Supply checksum enforced at settlement
- No freeze authority override

## Wallet Team Actions

1. Register wallet: `POST /v1/wallet/register`
2. Fetch registry: `GET /v1/wallet/registry`
3. Display native integration badge when `native_integration: true`
