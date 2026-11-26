---
title: Routing Rules
description: Routing Rules data grid block.
category: Drag & Drop
---

# Routing Rules

Routing Rules data grid block.

**Block:** `data-grid-drag-drop-routing-rules` · **Category:** Drag & Drop

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-drag-drop-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-drag-drop-routing-rules
```

## Usage

```tsx
import { RoutingRulesBlock } from "@/blocks/data-grid-drag-drop-routing-rules"

export default function Page() {
  return <RoutingRulesBlock />
}
```

## More in Drag & Drop

- [Dispatch Layout](./data-grid-drag-drop-dispatch-layout.md)
- [Shared Drive](./data-grid-drag-drop-shared-drive.md)
- [Sprint Backlog](./data-grid-drag-drop-sprint-backlog.md)

## Files

- `src/blocks/data-grid/drag-drop/routing-rules/index.tsx`
- `src/blocks/data-grid/drag-drop/routing-rules/data.ts`

## Dependencies

- `@dnd-kit/core`
- `@dnd-kit/modifiers`
- `@dnd-kit/sortable`
- `@dnd-kit/utilities`
- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/frame`
- `@reui-unbound/icon-tile`
- `avatar`
- `button`
- `dropdown-menu`
- `sonner`
- `switch`
