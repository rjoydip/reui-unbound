# reui-unbound — Agent Guide

A Vite + React 19 + TypeScript demo browser for ReUI data-grid and application
blocks, plus a shadcn-compatible registry that publishes the blocks, ReUI
components and hooks.

## Runtime

- **Bun 1.4.5** for everything: install, dev, build, scripts, registry.
- Never use `npm`, `npx`, `pnpm` or `yarn`. Use `bun`, `bunx --bun`.
- Lockfile: `bun.lock`. Version file: `.bun-version`.

## Commands

```bash
bun install
bun run dev            # predev runs the registry build first
bun run typecheck      # bunx --bun tsc -b
bun run lint           # bunx --bun oxlint
bun test src           # unit tests (bun:test)
bun run test:e2e       # Playwright, starts the dev server
bun run build          # prebuild runs registry build, then tsc + vite build
bun run preview

bun run registry:generate
bun run registry:verify
bun run registry:build

bun run blocks:sync      # regenerate ~blocks.tsx for implemented application categories
bun run tracker:generate # regenerate docs/application-blocks.md
bun run docs:generate    # regenerate docs/ (includes the tracker)

# captures (reui.io reference material, gitignored)
node scripts/capture-preview.mjs     # all application blocks (light/dark/interaction)
node scripts/capture-category.mjs app-shell   # App Shell category interaction captures
node scripts/capture-category.mjs auth        # Auth category interaction captures
```

## Structure

- `src/blocks/data-grid/<category>/<name>/` — one folder per demo block (`index.tsx`, `data.ts`, optional `parts.tsx`, sheets, etc.).
- `src/blocks/application/<category>/<slug>/index.tsx` — clean-room ports of reui.io application blocks (`app-shell-1`, `auth-3`, …), one folder per block, default export `<PascalSlug>Block`.
- `src/blocks/application/~manifest.json` — all 305 application blocks (slug, category, title, description, URL) from the capture catalogue.
- `src/blocks/application/<category>/~blocks.tsx` — generated block entries (`APP_SHELL_BLOCKS`, `AUTH_BLOCKS`, …); run `bun run blocks:sync` after adding or removing folders. Never hand-edit.
- `src/blocks/~internal/registry.tsx` — runtime catalog: metadata, dependencies, raw source imports.
- `docs/application-blocks.md` — generated port tracker (captured vs implemented) for the 305 application blocks.
- `src/blocks/components/radix/<component>/<variant>.tsx` and `src/blocks/components/base/<component>/default.tsx` — one preview per component variant.
- `src/blocks/components/~catalog/{catalog,ui-catalog}.tsx` — component catalogs (`kind: "component"`).
- `src/blocks/registry.json` — generated shadcn block items. Do not hand-edit.
- `src/components/kit/` — ReUI components (current/Radix flavor).
  - `base/` — Base UI flavor: `base/*` components + `base/ui` primitives.
  - Internal implementation files inside component folders are prefixed `~`.
  - Identical cross-flavor modules have one canonical copy; base files import it.
- `src/components/ui/` — shadcn-style primitives used by blocks (Radix).
- `src/hooks/` — ReUI hooks (copy, mobile, media query, observers, etc.).
- `src/components/~app/` — internal app chrome and shared shell components.
- Header switches Blocks/Components. The sidebar renders block categories +
  favorites for Blocks, and searchable, flavor-filtered categories for
  Components. Component previews use the same shell, code tab and
  install/AI prompt as blocks.
- `registry.json` — registry entry point composed with `include`.
- `scripts/generate-registry.mjs` — builds registry manifests from source.
- `scripts/clean-registry.mjs` — clears stale `public/r` payloads.
- `scripts/verify-registry.mjs` — validates shipped items, targets and dependencies.
- `docs/` — generated Markdown docs for every block and component.
  - `docs/blocks/` — one page per block plus an index.
  - `docs/components/` — one page per component category plus an index.
- `scripts/generate-docs.mjs` — builds the docs from registry manifests and the component catalog.
- `src/components/docs-viewer.tsx` — in-app docs browser; renders `docs/**/*.md`
  with react-markdown, remark-gfm and rehype-highlight. Preview links are rewritten from
  `reui-unbound.pages.dev` to the current origin, or `VITE_PREVIEW_BASE_URL`
  when the docs are hosted elsewhere.

## Conventions

- Imports use `@/` aliases. Use `cn` from the `cn` package.
- Use design tokens (`bg-background`, `text-muted-foreground`, …); support light and dark.
- Reuse existing `src/components/ui` and `src/components/kit` components before writing new ones.
- Keep demo data static and deterministic; no backend.
- One source file belongs to one registry item; no duplicate implementations across flavors.
- Blocks: keep tables responsive, compact controls, matching header/footer surfaces.
- Typecheck, lint and build must pass before finishing.
- Docs are generated; update the registry/catalog and run `bun run docs:generate` instead of editing `docs/` by hand.

## Application blocks

Reui.io Application block source is licence-gated ("Unlock the source"), so
ports are clean-room implementations from the captured previews.

1. Capture: `node scripts/capture-preview.mjs` (all 305) and
   `node scripts/capture-category.mjs <category>` (deep interaction states per block, e.g. `app-shell`, `auth`).
   Screenshots and `sources/<slug>.md` land in `captures/application` (gitignored).
2. Implement `src/blocks/application/<category>/<slug>/index.tsx` with a default
   export named `<PascalSlug>Block` (e.g. `AppShell7Block`), reusing
   `src/components/ui` and `src/components/kit` components and design tokens.
3. Run `bun run blocks:sync` (regenerates each category `~blocks.tsx`), then
   `bun run registry:generate`. Registry item names and
   install targets use the block title, e.g.
   `bunx --bun shadcn@latest add @reui-unbound/app-shell-icon-rail-dashboard`;
   folder slugs and preview ids stay `app-shell-<n>`.
4. Run `bun run docs:generate` to refresh docs and the tracker, and confirm
   `bun run typecheck && bun run lint && bun run build`.

The sidebar group selector and `/blocks` page read `BLOCK_GROUPS` in
`src/blocks/~internal/registry.tsx`; categories with no implemented blocks show
a "No local examples" state.

## Registry rules

- Add metadata and raw file imports in `src/blocks/~internal/registry.tsx`; application folders are scanned automatically by `generate-registry.mjs`.
- `bun run registry:generate` regenerates the manifests; `bun run registry:build` also runs `shadcn build` and verification.
- Block items use `registryDependencies` for components (`@reui-unbound/*` or bare shadcn names) and `dependencies` for npm packages.
- `@reui-unbound` namespace is configured in `components.json`; generated payloads live in `public/r` (gitignored).
- Never edit generated `registry.json` files by hand.
- `verify-registry.mjs` enforces required fields, unique targets, known local dependencies and complete npm dependencies.

## TypeScript

- `tsconfig.json` is the solution file; it references `config/tsconfig.app.json` (src) and `config/tsconfig.node.json` (vite.config.ts). All three are used by `tsc -b`.
- Path alias: `@/* -> ./src/*`.

## Deployment

- GitHub Actions: `.github/workflows/ci.yml` and `deploy.yml`, both on Bun.
- Cloudflare Pages project: `reui-unbound`; build command is `bun run build`, output `dist`.

## Skills

Project skills live in `skills/` and follow the Agent Skills spec (skills.sh):

- `skills/data-grid-block` — add or change a demo block.
- `skills/registry` — registry generation, dependencies and verification.
- `skills/component-flavors` — ReUI base/radix components and shared modules.
- `skills/bun-cloudflare` — Bun runtime, CI and Cloudflare deployment.

When a task matches a skill, read its `SKILL.md` first.
