---
title: Shared Drive
description: Shared Drive data grid block.
category: Drag & Drop
---

# Shared Drive

Shared Drive data grid block.

**Block:** `data-grid-drag-drop-shared-drive` · **Category:** Drag & Drop

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-drag-drop-4)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-drag-drop-shared-drive
```

## Usage

```tsx
import { SharedDriveBlock } from "@/blocks/data-grid-drag-drop-shared-drive"

export default function Page() {
  return <SharedDriveBlock />
}
```

## More in Drag & Drop

- [Dispatch Layout](./data-grid-drag-drop-dispatch-layout.md)
- [Routing Rules](./data-grid-drag-drop-routing-rules.md)
- [Sprint Backlog](./data-grid-drag-drop-sprint-backlog.md)

## Files

- `src/blocks/data-grid/drag-drop/shared-drive/index.tsx`
- `src/blocks/data-grid/drag-drop/shared-drive/data.ts`

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
