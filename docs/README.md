# Documentation

Reference for every ReUI Unbound block, component and coverage report. All pages are generated from the registry and component catalogs.

| Section | Contents |
| --- | --- |
| [Blocks](./blocks/README.md) | 366 demo blocks in 32 categories, grouped by category. |
| [Components](./components/README.md) | 87 component categories and 1365 previews. |
| [Block coverage](./block-coverage.md) | Port and capture status for the reui.io application blocks and data-grid demos. |
| [Component coverage](./component-coverage.md) | Docs and preview coverage per component category. |

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/<item>
```

Browse [blocks](./blocks/README.md) or [components](./components/README.md) for the exact item name and install command.

## Regenerate

Docs are generated — update the registry or component catalog, then run:

```bash
bun run docs:generate
```
