#!/usr/bin/env bash
# Remove Cursor co-author trailers from all commits (run once, then force-push).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
FILTER_BRANCH_SQUELCH_WARNING=1 git filter-branch -f --msg-filter \
  'sed "/^Co-authored-by: Cursor/d; /^Co-authored-by: cursoragent/d"' -- --all
echo "Done. Verify: git log -1 --format=%B"
echo "Then: git push --force origin main"
