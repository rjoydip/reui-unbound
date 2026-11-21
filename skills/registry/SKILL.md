---
name: registry
description: Work on the shadcn registry in this repo. Use when adding or changing registry items, block dependencies, registry manifests, install targets, namespaces, shadcn build output, registry verification or dependency completeness.
---

# Registry

The project publishes blocks, ReUI components and hooks as a shadcn registry.

## Source of truth

- `src/blocks/registry.tsx` — block metadata, dependencies, raw imports.
- `src/components/reui-unbound/**` — ReUI component source.
- `src/components/ui/**` — UI primitives referenced as bare shadcn names.
- `src/hooks/**` — hook items.
- `scripts/generate-registry.mjs` — generates the manifests.

Generated files (never hand-edit):

- `registry.json`
- `src/blocks/registry.json`
- `src/components/reui-unbound/registry.json`
- `src/components/reui-unbound/base/registry.json`
- `src/hooks/registry.json`

## Item rules

- Types: `registry:block`, `registry:ui`, `registry:component`,
  `registry:hook`.
- `dependencies` lists npm packages.
- `registryDependencies` lists:
  - `@reui-unbound/<name>` for this registry,
  - bare names (`button`, `dialog`) for shadcn.
- Every file needs a `target` under a supported placeholder
  (`@components/…`, `@hooks/…`).
- One source file belongs to exactly one item; install targets must be unique.

## Commands

```bash
bun run registry:generate   # regenerate manifests only
bun run registry:verify     # validate public/r
bun run registry:build      # generate + clean + shadcn build + verify
```

`predev` and `prebuild` run `registry:build` automatically.

## Adding a component item

1. Add source under `src/components/reui-unbound/` (current flavor) or
   `src/components/reui-unbound/base/` (Base UI flavor).
2. Reuse shared modules instead of copying identical code.
3. Run `bun run registry:generate`; the generator infers npm and local
   dependencies from imports.
4. Run `bun run registry:verify` and `bun run typecheck`.

The verifier checks required fields, file content, leaked internal imports,
known local dependencies, unique targets and npm dependency completeness.

## Namespace

`components.json` maps `@reui-unbound` to
`https://reui-unbound.pages.dev/r/{name}.json`. Update the domain if the
deployment URL changes.
