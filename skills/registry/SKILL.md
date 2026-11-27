---
name: registry
description: Work on the shadcn registry in this repo. Use when adding or changing registry items, block or component dependencies, manifests, install targets, namespaces, build output or verification.
---

# Registry

Publishes 366 blocks (305 application + 61 data grid), 1265 component examples,
71 ReUI kit components (28 Radix + 43 Base) and 9 hooks — 1711 items,
1922 install targets served from `public/r` and `dist/r`.

## Source of truth

- `src/blocks/~internal/registry.tsx` — block metadata, dependencies, raw imports.
- `src/blocks/application/**` — auto-scanned application block folders.
- `src/components/kit/**` — ReUI components (Radix flavor).
- `src/components/kit/base/**` — Base UI flavor (components and `ui/` primitives).
- `src/components/ui/**` — Radix primitives referenced as bare shadcn names.
- `src/hooks/**` — hook items.
- `src/blocks/components/{radix,base}/**` + `~catalog/` — component previews.
- `scripts/generate-registry.mjs` — builds the manifests.

## Generated files (never hand-edit)

- `registry.json` (entry point, composed with `include`)
- `src/blocks/registry.json`
- `src/blocks/components/registry.json`
- `src/components/kit/registry.json`
- `src/components/kit/base/registry.json`
- `src/hooks/registry.json`

## Item rules

- Types: `registry:block`, `registry:ui`, `registry:component`,
  `registry:hook`.
- `dependencies` lists npm packages.
- `registryDependencies` lists `@reui-unbound/<name>` for this registry or bare
  shadcn names (`button`, `dialog`, …).
- Every file needs a `target` under `@components/…` or `@hooks/…`.
- One source file belongs to exactly one item; install targets must be unique.
- Example items are named `<component>-<variant>` (e.g. `button-outline`) and
  install as `@reui-unbound/<component>-<variant>`; component-level previews
  install the component item itself (`@reui-unbound/cascader`,
  `@reui-unbound/base-cascader`).

## Commands

```bash
bun run registry:generate   # regenerate manifests only
bun run registry:verify     # validate public/r payloads
bun run registry:build      # generate + clean + shadcn build + verify
bun run docs:generate       # registry + docs + coverage tracker
```

`predev` and `prebuild` run `registry:build` automatically. Current baseline:
`registry verified: 1711 items, 1922 unique install targets`.

## Adding an item

Block (data grid):

1. Add the block under `src/blocks/data-grid/<category>/<name>/`.
2. Add metadata, deps and `?raw` imports in `src/blocks/~internal/registry.tsx`.
3. `bun run registry:generate` — dependencies are inferred from imports.

Application block: add the folder, run `bun run blocks:sync`, then generate.

Component or hook:

1. Add source under `src/components/kit/` (or `kit/base/`), `src/hooks/`.
2. Add the preview under `src/blocks/components/<flavor>/<component>/` and the
   entry in `src/blocks/components/~catalog/{catalog,ui-catalog}.tsx`.
3. `bun run registry:generate`, then `bun run registry:verify`.

The verifier checks required fields, file content, leaked internal imports,
known local dependencies, unique targets and npm dependency completeness.

## Namespace

`components.json` maps `@reui-unbound` to
`https://reui-unbound.pages.dev/r/{name}.json`. Update the domain if the
deployment URL changes.
