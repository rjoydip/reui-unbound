---
name: bun-cloudflare
description: Run, build and deploy the app with Bun and Cloudflare. Use when changing package scripts, lockfiles, CI workflows, the Cloudflare Pages deployment, or fixing Bun/Node runtime issues.
---

# Bun + Cloudflare

## Runtime rules

- Bun 1.4.5 is the only package manager/runtime.
- Use `bun`, `bunx --bun`; never `npm`, `npx`, `pnpm`, `yarn`.
- Lockfile: `bun.lock` (do not commit `package-lock.json`).
- Scripts already force the Bun runtime (`bun --bun vite`,
  `bunx --bun tsc`, `bunx --bun oxlint`, `bun scripts/*.mjs`).

## Commands

```bash
bun install
bun run dev
bun run typecheck
bun run lint
bun run build          # prebuild: registry generate + build + verify
bun run preview
```

## CI

`.github/workflows/ci.yml` runs on `oven-sh/setup-bun@v2`:

```yaml
- uses: oven-sh/setup-bun@v2
  with:
    bun-version: 1.4.5
- run: bun install --frozen-lockfile
- run: bun run typecheck
- run: bun run lint
- run: bun run build
```

## Deployment

- `.github/workflows/deploy.yml` deploys `dist` to Cloudflare Pages with
  `cloudflare/wrangler-action@v3`.
- Project: `reui-unbound`.
- Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- The build runs the registry build via `prebuild`; registry payloads are served
  from `dist/r`.
- `shadcn` is a runtime dependency; keep it installed in CI.

## Checks

- If a script fails only under Bun, verify the shebang/binary supports Bun and
  use `bunx --bun <bin>`.
- Keep `packageManager` in `package.json` and `.bun-version` in sync with CI.
- Never add Node-only tooling that Bun cannot execute.
