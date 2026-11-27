---
title: Kanban
description: Drag-and-drop board with columns, cards and overlays.
---

# Kanban

Drag-and-drop board with columns, cards and overlays.

[← All components](./README.md)

## Preview

### Radix (7)

- [`kanban-radix`](https://reui-unbound.pages.dev/?preview=kanban-radix)
- [`kanban-placeholder-overlay-radix`](https://reui-unbound.pages.dev/?preview=kanban-placeholder-overlay-radix)
- [`kanban-dynamic-overlay-radix`](https://reui-unbound.pages.dev/?preview=kanban-dynamic-overlay-radix)
- [`kanban-frame-columns-radix`](https://reui-unbound.pages.dev/?preview=kanban-frame-columns-radix)
- [`kanban-stacked-frame-radix`](https://reui-unbound.pages.dev/?preview=kanban-stacked-frame-radix)
- [`kanban-feature-roadmap-radix`](https://reui-unbound.pages.dev/?preview=kanban-feature-roadmap-radix)
- [`kanban-persisted-moves-radix`](https://reui-unbound.pages.dev/?preview=kanban-persisted-moves-radix)

### Base (1)

- [`kanban-base`](https://reui-unbound.pages.dev/?preview=kanban-base)

## Install

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban-placeholder-overlay
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban-dynamic-overlay
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban-frame-columns
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban-stacked-frame
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban-feature-roadmap
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/kanban-persisted-moves
```

```bash
# Base
bunx --bun shadcn@latest add @reui-unbound/base-kanban
```

## Files

- `src/blocks/components/radix/kanban/default.tsx`
- `src/components/kit/kanban.tsx`
- `src/blocks/components/radix/kanban/placeholder-overlay.tsx`
- `src/blocks/components/radix/kanban/dynamic-overlay.tsx`
- `src/blocks/components/radix/kanban/frame-columns.tsx`
- `src/blocks/components/radix/kanban/stacked-frame.tsx`
- `src/blocks/components/radix/kanban/feature-roadmap.tsx`
- `src/blocks/components/radix/kanban/persisted-moves.tsx`
- `src/blocks/components/base/kanban/default.tsx`
- `src/components/kit/base/kanban.tsx`

## Dependencies

- `@base-ui/react`
- `@dnd-kit/core`
- `@dnd-kit/sortable`
- `@dnd-kit/utilities`
- `cn`
- `radix-ui`
