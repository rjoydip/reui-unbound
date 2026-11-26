---
name: component-flavors
description: Work with ReUI component flavors and shared modules. Use when adding or editing components under src/components/kit, choosing between Radix and Base UI variants, reusing shared modules, adding component previews, UI primitives or hooks.
---

# Component Flavors

87 component categories, 1365 previews (Radix + Base UI + shadcn/ui).
Per-category docs: `docs/components/README.md`; coverage:
`docs/component-coverage.md`. Both are generated.

## Layout

- `src/components/kit/*.tsx` — ReUI components, Radix flavor:
  `alert, autocomplete, badge, cascader, code-block, color-picker, data-grid,
  date-selector, emoji-picker, event-calendar, file-type, filters, frame, gantt,
  icon-stack, icon-tile, kanban, number-field, phone-input, rating, scrollspy,
  signature-pad, sortable, stepper, time-picker, timeline, tree` plus
  `icon-placeholder`.
- `src/components/kit/<group>/` — multi-file components: `cascader`,
  `code-block`, `data-grid`, `event-calendar`, `filters`, `gantt`.
- `src/components/kit/base/` — Base UI flavor:
  - `base/<component>.tsx` and `base/<group>/` for components that ship a Base
    version (23 of the 28 Radix kit components);
  - `base/ui/*.tsx` — Base UI primitives used by the base flavor.
- `src/components/ui/*.tsx` — Radix primitives used by components and blocks.
- Files prefixed `~` inside a component folder are internal, not registry
  entries; one source file belongs to exactly one registry item.

## Rules

- Do not duplicate identical code across flavors. Keep one canonical file and
  import it from both sides (types, i18n, recurrence, libs, highlighter).
- Flavor-specific code differs only in primitive imports/calls and flavor APIs
  (`render` on Base UI vs `asChild` on Radix).
- Prefer existing `src/components/ui` primitives; add one only when missing and
  used.
- Reuse `src/hooks/` instead of ad-hoc equivalents: `use-copy-to-clipboard`,
  `use-file-upload`, `use-intersection-observer`,
  `use-isomorphic-layout-effect`, `use-media-query`, `use-mobile`,
  `use-mounted`, `use-mutation-observer`, `use-scroll-active-into-view`.
- Keep component files self-contained; shared helpers live next to the group or
  in `src/hooks/`.

## Component catalog previews

Each component has a preview under
`src/blocks/components/<flavor>/<component>/<variant>.tsx` and an entry in
`src/blocks/components/~catalog/catalog.tsx` (ReUI kit) or
`~catalog/ui-catalog.tsx` (shadcn/ui primitives).

- Preview id: `<component>-<variant>-<radix|base>`, or `<component>-<radix|base>`
  for component-level previews.
- Example items install as `@reui-unbound/<component>-<variant>`;
  component-level previews install the component item itself
  (`@reui-unbound/<item>`, e.g. `@reui-unbound/cascader`,
  `@reui-unbound/base-cascader`).
- The sidebar Components view lists both flavors automatically; docs and
  coverage are regenerated from these catalogs.

## Adding a component

1. Check upstream ReUI for the current Radix and Base implementations.
2. Place the Radix version in `src/components/kit/`; the Base version in
   `src/components/kit/base/`.
3. Reuse shared modules instead of copying them; keep exports compound and
   typed.
4. Add previews for both flavors and catalog entries.
5. Run:

```bash
bun run typecheck
bun run lint
bun run registry:generate
bun run registry:verify
bun run docs:generate
```

## Styling

- Tailwind v4 tokens only; no hardcoded colors.
- Keep the `style-nova` wrapper and `cn-*` classes used by registry primitives.
- Verify light and dark rendering, plus both flavors, before finishing.
