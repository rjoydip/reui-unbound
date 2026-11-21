---
name: data-grid-block
description: Add or modify a ReUI data-grid demo block in src/blocks. Use when implementing a new data-grid block, changing an existing block table, toolbar, filters, popovers, row menus or demo data, or registering a block in the catalog.
---

# Data Grid Block

## Before writing code

1. Read the ReUI reference (preview URL, screenshots or thumbnail) and list the
   visible anatomy: toolbar, tabs, column headers, grouped rows, footer,
   selection bar, popovers.
2. Find the closest existing block in `src/blocks/` and reuse its patterns.
3. Check which components already exist:
   - primitives: `src/components/ui/`
   - ReUI components: `src/components/reui-unbound/`
   - hooks: `src/hooks/`
4. Never add a dependency for something the project already has.

## Create the block

```
src/blocks/<block-id>/
  index.tsx      # exported component + default export
  data.ts        # static typed demo data
  parts.tsx      # optional cells/pieces
  <sheet>.tsx    # optional dialogs/sheets
```

- Use `@/` imports, `cn` from `cn`, and design tokens.
- Build tables with the existing `DataGrid` stack when it fits; use a custom
  grid for layouts the stack cannot reproduce cleanly.
- Keep controls compact (`size="sm"`), support light/dark, and match the
  reference spacing and surfaces.

## Register the block

Edit `src/blocks/registry.tsx`:

- add the component import;
- add a `?raw` import for every block file;
- add a `BlockEntry` with `id`, `name`, `category`, `stage`, `href`,
  `dependencies.registry`, `dependencies.packages`, `Component` and `files`.

Use `@reui-unbound/<name>` for ReUI components and bare shadcn names
(`button`, `dialog`, …) for UI primitives.

## Validate

```bash
bun run registry:generate
bun run typecheck
bun run lint
bun run build
```

Open the block through the dev server (`/?preview=<block-id>`) and verify:

- header, toolbar, footer and column alignment;
- empty/filter/selection states;
- light and dark themes;
- no unwanted scrollbars or clipped popovers.

Do not edit generated `registry.json` files by hand.
