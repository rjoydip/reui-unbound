---
title: Sprint Backlog
description: Sprint Backlog data grid block.
category: Drag & Drop
---

# Sprint Backlog

Sprint Backlog data grid block.

**Block:** `data-grid-drag-drop-sprint-backlog` · **Category:** Drag & Drop

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-drag-drop-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-drag-drop-sprint-backlog
```

## Usage

```tsx
import { SprintBacklogBlock } from "@/blocks/data-grid-drag-drop-sprint-backlog"

export default function Page() {
  return <SprintBacklogBlock />
}
```

## More in Drag & Drop

- [Dispatch Layout](./data-grid-drag-drop-dispatch-layout.md)
- [Routing Rules](./data-grid-drag-drop-routing-rules.md)
- [Shared Drive](./data-grid-drag-drop-shared-drive.md)

## Files

- `src/blocks/data-grid/drag-drop/sprint-backlog/index.tsx`
- `src/blocks/data-grid/drag-drop/sprint-backlog/data.ts`

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
