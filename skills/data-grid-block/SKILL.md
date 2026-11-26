---
name: data-grid-block
description: Add or change a ReUI demo block, data grid or application. Use when implementing or porting a block, editing its table, toolbar, filters, popovers, row menus or demo data, or registering a block preview.
---

# Block Authoring

Two block families, same rules:

| Family | Location | Blocks |
| --- | --- | --- |
| Data grid | `src/blocks/data-grid/<category>/<name>/` | 61 |
| Application | `src/blocks/application/<category>/<slug>/` | 305 |

Data-grid categories: Advanced 21, Base 9, Columns 5, Drag & Drop 4, Editing 6,
Expansion 3, Filtering 4, Grouping 7, Virtualization 2.

Application categories: App Shell 36, Auth 20, Card 43, Dashboard 8, Dialog 15,
Empty State 14, Event Calendar 6, Flow 4, Form 12, Gantt 4, Kanban Board 10,
List 11, Navbar 13, Onboarding 9, Profile 10, Rich Text Editor 5, Schedule 10,
Settings 16, Sheet 24, Stats 17, Timeline 9, Whiteboard 2, Wizard 7.

Coverage and per-block status: `docs/block-coverage.md`. Registry listing:
`docs/blocks/README.md`. Both are generated.

## Before writing code

1. Read the reference (reui.io preview, screenshots in `captures/` or the
   thumbnail) and list the anatomy: toolbar, tabs, column headers, grouped rows,
   footer, selection bar, popovers, sheets.
2. Reuse the closest existing block's patterns — search the category first.
3. Check what already exists: `src/components/ui/`, `src/components/kit/`,
   `src/hooks/`.
4. Never add a dependency the project already has.

## Data grid blocks

```
src/blocks/data-grid/<category>/<name>/
  index.tsx      # exported component + default export
  data.ts        # static typed demo data
  parts.tsx      # optional cells/pieces
  <sheet>.tsx    # optional dialogs/sheets
```

- Use `@/` imports, `cn` from `cn`, design tokens only.
- Build tables with the existing `DataGrid` stack when it fits; custom grid only
  for layouts the stack cannot reproduce cleanly.
- Controls compact (`size="sm"`), light/dark support, match reference spacing.

## Application blocks

1. Capture: `node scripts/capture-preview.mjs` and
   `node scripts/capture-category.mjs <category>` (deep interaction states).
   Output lands in `captures/application` (gitignored).
2. Implement `src/blocks/application/<category>/<slug>/index.tsx` with default
   export `<PascalSlug>Block`, e.g. `AppShellIconRailDashboardBlock`.
3. The 305-slug catalogue is `src/blocks/application/~manifest.json`.
4. `bun run blocks:sync` regenerates each category `~blocks.tsx` (never edit).

## Register

- Data grid: add metadata, dependencies and `?raw` file imports to
  `src/blocks/~internal/registry.tsx`, then `bun run registry:generate`.
- Application: folders are auto-scanned after `bun run blocks:sync`; no manual
  registry entry.
- Use `@reui-unbound/<name>` for ReUI kit components, bare shadcn names
  (`button`, `dialog`, …) for `src/components/ui` primitives.
- Install target is `@reui-unbound/<block-name>` (the folder slug). Preview
  links use `/?preview=<meta.id>`, which may differ from the name.

## Validate

```bash
bun run blocks:sync        # application blocks only
bun run registry:generate
bun run docs:generate
bun run typecheck
bun run lint
bun run build
```

Check `/?preview=<block-id>` in the dev server: header/toolbar/footer alignment,
empty, filter and selection states, light and dark themes, no clipped popovers
or stray scrollbars.

Never hand-edit `registry.json` or `docs/` — regenerate them.
