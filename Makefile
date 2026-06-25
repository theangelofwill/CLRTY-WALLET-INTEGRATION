.PHONY: help verify nodes-verify stress build-kit

help:
	@echo "CLRTY Wallet Integration — 25 Leverage Nodes"
	@echo "  make verify       — 25/25 nodes + kit artifacts"
	@echo "  make build-kit    — rebuild zero-friction ZIP"
	@echo "  make stress       — N21 directory stress probe"

verify: nodes-verify build-kit
	@test -f integration-package/PARTNER_OUTREACH_LETTER.md
	@echo OK: full verify passed

nodes-verify:
	python3 scripts/verify_wallet_nodes.py

build-kit:
	bash scripts/build_kit.sh

stress:
	bash scripts/wallet_directory_stress.sh
