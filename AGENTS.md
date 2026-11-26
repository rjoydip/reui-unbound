# reui-unbound — Agent Guide

Vite + React 19 + TS demo browser for ReUI data grids and application blocks, plus a shadcn-compatible registry.

## Runtime

Bun 1.4.5 only (`bun`, `bunx --bun`). Never npm/npx/pnpm/yarn. Lockfile `bun.lock`.

## Commands

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Dev (builds registry first) | `bun run dev` |
| Typecheck / lint | `bun run typecheck` · `bun run lint` |
| Unit / E2E | `bun test src` · `bun run test:e2e` |
| Build / preview | `bun run build` · `bun run preview` |
| Registry | `bun run registry:generate` · `registry:verify` · `registry:build` |
| Docs + tracker | `bun run docs:generate` |
| Sync block entries | `bun run blocks:sync` |
| Captures (gitignored) | `node scripts/capture-preview.mjs` · `node scripts/capture-category.mjs <category>` |

Capture categories: `app-shell`, `auth`, `navbar`, `onboarding`, `profile`, `rich-text-editor`, `schedule`, `settings`, `sheet`, `stats`, `timeline`, `whiteboard`, `wizard`.

## Structure

- `src/blocks/data-grid/<category>/<name>/` — data-grid demo (`index.tsx`, `data.ts`, …).
- `src/blocks/application/<category>/<slug>/index.tsx` — clean-room application block, default export `<PascalSlug>Block`.
- `src/blocks/application/~manifest.json` — 305 catalogued application blocks.
- `src/blocks/application/<category>/~blocks.tsx` — generated entries; run `bun run blocks:sync`.
- `src/blocks/~internal/registry.tsx` — runtime catalog: metadata, deps, raw source imports.
- `src/blocks/registry.json`, `public/r/*` — generated; never hand-edit.
- `src/blocks/components/{radix,base}/<component>/<variant>.tsx` — component previews; catalogs in `~catalog/`.
- `src/components/kit/` — ReUI components (Radix); `kit/base/` — Base UI flavor; `ui/` — shadcn primitives. Internal files prefixed `~`.
- `src/components/~app/docs-viewer.tsx` — in-app docs browser (loads `docs/**/*.md`).
- `docs/` — generated Markdown: `blocks/`, `components/`, `block-coverage.md`, `component-coverage.md`.
- `registry.json` — composed with `include`; build scripts in `scripts/`.

## Conventions

- Imports use `@/`; `cn` from `cn`.
- Design tokens only (`bg-background`, `text-muted-foreground`, …); support light + dark.
- Reuse `src/components/ui` and `src/components/kit` before writing new UI.
- Demo data static and deterministic; no backend.
- One source file per registry item; no duplicate implementations across flavors.
- Previews and `?raw` sources are lazy: import them with `lazyComponent`, `lazyNamed` or `sourceLoader` from `src/blocks/~internal/lazy.ts`; never add eager block/preview imports.
- Typecheck, lint and build must pass before finishing.

## Application block workflow

1. Capture (see Commands). Screenshots and `sources/<slug>.md` land in `captures/application` (gitignored).
2. Implement `src/blocks/application/<category>/<slug>/index.tsx` as `<PascalSlug>Block`.
3. `bun run blocks:sync` → `bun run registry:generate`.
4. `bun run docs:generate`, then `bun run typecheck && bun run lint && bun run build`.

Registry names and install targets use the block title slug: `bunx --bun shadcn@latest add @reui-unbound/app-shell-icon-rail-dashboard`.

## Registry rules

- Metadata and raw imports live in `src/blocks/~internal/registry.tsx`; application folders are auto-scanned.
- `registryDependencies` for components (`@reui-unbound/*` or shadcn names); `dependencies` for npm packages.
- `verify-registry.mjs` enforces required fields, unique targets, known local deps and complete npm deps.
- `@reui-unbound` namespace is configured in `components.json`; payloads live in `public/r` (gitignored).

## TypeScript and deployment

- `tsconfig.json` is a solution file → `config/tsconfig.app.json` (src), `config/tsconfig.node.json` (vite.config.ts). Alias `@/* -> ./src/*`.
- CI/deploy run on Bun. Cloudflare Pages project `reui-unbound`: build `bun run build`, output `dist`.

## Docs

Generated — never edit `docs/` by hand. Change the registry/catalog or `scripts/generate-docs.mjs` / `generate-tracker.mjs`, then run `bun run docs:generate`.

## Skills

Read the matching `SKILL.md` first: `skills/data-grid-block`, `skills/registry`, `skills/component-flavors`, `skills/bun-cloudflare`.
