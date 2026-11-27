---
name: bun-cloudflare
description: Run, build and deploy the app with Bun and Cloudflare. Use when changing package scripts, lockfiles, CI workflows, the Cloudflare Pages deployment, or fixing Bun/Node runtime issues.
---

# Bun + Cloudflare

## Runtime rules

- Bun 1.4.5 is the only package manager/runtime. `.bun-version` and
  `packageManager` in `package.json` must match CI.
- Use `bun`, `bunx --bun`; never `npm`, `npx`, `pnpm`, `yarn`.
- Lockfile: `bun.lock` (do not commit `package-lock.json`).
- Scripts already force the Bun runtime (`bun --bun vite`, `bunx --bun tsc`,
  `bunx --bun oxlint`, `bun scripts/*.mjs`).

## Commands

```bash
bun install
bun run dev              # predev: registry build
bun run typecheck        # pretypecheck: registry generate
bun run lint
bun test src
bun run test:e2e
bun run build            # prebuild: registry generate + build + verify
bun run preview
bun run blocks:sync      # regenerate application block entries
bun run docs:generate    # registry + docs + coverage tracker
bun run tracker:generate # coverage docs only
bun run registry:build
bun run packages:build
```

Captures are local only (gitignored): `node scripts/capture-preview.mjs` and
`node scripts/capture-category.mjs <category>`.

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

Add unit/E2E runs only if they stay green on the runner.

## Deployment

- `.github/workflows/deploy.yml` deploys `dist` to Cloudflare Pages with
  `cloudflare/wrangler-action@v3` on push to `main`.
- Project: `reui-unbound`. A first-run `wrangler pages project create` step is
  in the workflow; keep it idempotent.
- Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- `bun run build` regenerates the registry, so payloads are served from
  `dist/r`; docs are built into the app bundle from `docs/**/*.md`.
- `shadcn` is a runtime dependency; keep it installed in CI.

## Checks

- If a script fails only under Bun, verify the binary supports Bun and use
  `bunx --bun <bin>`.
- Never add Node-only tooling that Bun cannot execute.
- Keep `wrangler` pinned in the deploy workflow to avoid surprise output changes.
