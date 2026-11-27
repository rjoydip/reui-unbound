---
title: Dispatch Layout
description: Dispatch Layout data grid block.
category: Drag & Drop
---

# Dispatch Layout

Dispatch Layout data grid block.

**Block:** `data-grid-drag-drop-dispatch-layout` · **Category:** Drag & Drop

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-drag-drop-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-drag-drop-dispatch-layout
```

## Usage

```tsx
import { DispatchLayoutBlock } from "@/blocks/data-grid-drag-drop-dispatch-layout"

export default function Page() {
  return <DispatchLayoutBlock />
}
```

## More in Drag & Drop

- [Routing Rules](./data-grid-drag-drop-routing-rules.md)
- [Shared Drive](./data-grid-drag-drop-shared-drive.md)
- [Sprint Backlog](./data-grid-drag-drop-sprint-backlog.md)

## Files

- `src/blocks/data-grid/drag-drop/dispatch-layout/index.tsx`
- `src/blocks/data-grid/drag-drop/dispatch-layout/data.ts`

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
- `sonner`
- `switch`
