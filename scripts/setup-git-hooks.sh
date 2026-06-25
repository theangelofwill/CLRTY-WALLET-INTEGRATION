#!/usr/bin/env bash
# One-time: use repo hooks (strips Cursor co-author from commits)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
git -C "$ROOT" config core.hooksPath .githooks
chmod +x "$ROOT/.githooks/prepare-commit-msg"
echo "hooksPath=.githooks (Cursor co-author stripped on commit)"
