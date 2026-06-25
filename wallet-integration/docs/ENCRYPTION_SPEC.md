# Encryption Specification (N11)

- Wallet IDs: 32-byte hex (256-bit)
- Transit: TLS 1.3 for all REST/RPC
- Signing: delegated to wallet native secure enclave
- At-rest exports: AES-256-GCM envelope (sovereignty export)
- ZK identity: `/v1/onboarding/calibrate` — no PII in protocol payloads
