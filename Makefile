.PHONY: help verify nodes-verify build-kit stress

help:
	@echo "CLRTY Wallet Integration — full download + 25 leverage nodes"
	@echo "  make verify       — 25/25 nodes + SDKs + rebuild both ZIPs"
	@echo "  make build-kit    — zero-friction + full bundle ZIPs"
	@echo "  make nodes-verify — leverage node artifact gate"
	@echo "  make stress       — N21 directory stress probe"

verify: nodes-verify build-kit
	@test -f dist/integration-package-zero-friction.zip
	@test -f dist/clrty-wallet-integration-full.zip
	@test -f integration-package/PARTNER_OUTREACH_LETTER.md
	@echo OK: full verify passed — both downloads ready

nodes-verify:
	python3 scripts/verify_wallet_nodes.py

build-kit:
	bash scripts/build_kit.sh

stress:
	bash scripts/wallet_directory_stress.sh
