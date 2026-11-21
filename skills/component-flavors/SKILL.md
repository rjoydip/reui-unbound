---
name: component-flavors
description: Work with ReUI component flavors and shared modules. Use when adding or editing components under src/components/reui-unbound, choosing between base and radix variants, reusing shared modules, or adding UI primitives and hooks used by the registry.
---

# Component Flavors

## Layout

- `src/components/reui-unbound/*.tsx` — current (Radix) ReUI components.
- `src/components/reui-unbound/<group>/` — multi-file components
  (`cascader`, `code-block`, `data-grid`, `event-calendar`, `filters`, `gantt`).
- `src/components/reui-unbound/base/` — Base UI flavor:
  - `base/<component>.tsx` and `base/<group>/`
  - `base/ui/*.tsx` — Base UI primitives used by the base flavor.
- `src/components/ui/*.tsx` — Radix UI primitives used by current components
  and blocks.

## Rules

- Do not duplicate identical code across flavors. Keep one canonical file and
  import it from both sides (the base folder already does this for shared
  types, i18n, recurrence, libs and the code-block highlighter).
- Flavor-specific code should differ only in primitive imports/calls and
  flavor APIs (`render` on Base UI vs `asChild` on Radix).
- Prefer existing `src/components/ui` primitives; add one only when missing and
  used.
- Use `useCopyToClipboard`, `useIsMobile`, `useMediaQuery`, `useMounted` from
  `src/hooks/` instead of new ad-hoc implementations.
- Keep component files self-contained; shared helpers live next to the group or
  in `src/hooks/`.

## Component catalog previews

Each ReUI component has a preview under `src/blocks/components/<flavor>/` and an
entry in `src/blocks/components/catalog.tsx`. When adding a component, add its
first upstream `c-<name>-1` demo (radix and base), rewrite imports to local
paths, and add the registry entry. The sidebar Components view lists both
flavors automatically.

## Adding a component

1. Check upstream ReUI for the current implementation of both flavors.
2. Place the Radix version next to existing components; the Base version under
   `base/`.
3. Reuse shared modules instead of copying them.
4. Keep exports compound and typed; export sub-components and variants.
5. Run:

```bash
bun run typecheck
bun run lint
bun run registry:generate
bun run registry:verify
```

## Styling

- Tailwind v4 tokens only; no hardcoded colors.
- The `style-nova` wrapper and `cn-*` classes are used by registry primitives;
  keep them when porting upstream components.
- Verify light and dark rendering before finishing.
