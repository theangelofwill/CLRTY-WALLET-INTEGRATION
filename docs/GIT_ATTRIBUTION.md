# Git attribution

This repo attributes all work to **Will Ferguson** only.

- `.mailmap` — maps automated agent emails to the owner
- `.githooks/prepare-commit-msg` — strips `Co-authored-by: Cursor` on every commit

After clone:

```bash
bash scripts/setup-git-hooks.sh
```

To rewrite existing history locally (removes Cursor co-author trailers):

```bash
bash scripts/rewrite-history-no-cursor.sh
git push --force origin main
```
