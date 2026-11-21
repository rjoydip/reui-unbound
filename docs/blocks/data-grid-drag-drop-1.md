---
title: Sprint Backlog
description: Sprint Backlog data grid block.
category: Drag & Drop
---

# Sprint Backlog

**Block:** `data-grid-drag-drop-1` · **Category:** Drag & Drop

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-drag-drop-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-drag-drop-1
```

## Usage

```tsx
import { SprintBacklogBlock } from "@/blocks/data-grid-drag-drop-1"

export default function Page() {
  return <SprintBacklogBlock />
}
```

## Files

- `src/blocks/data-grid-drag-drop-1/index.tsx`
- `src/blocks/data-grid-drag-drop-1/data.ts`

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
