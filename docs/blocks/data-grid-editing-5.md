---
title: Launch Runbook
description: Launch Runbook data grid block.
category: Editing
---

# Launch Runbook

**Block:** `data-grid-editing-5` · **Category:** Editing

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-5)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-5
```

## Usage

```tsx
import { TaskSpreadsheetBlock } from "@/blocks/data-grid-editing-5"

export default function Page() {
  return <TaskSpreadsheetBlock />
}
```

## Files

- `src/blocks/data-grid-editing-5/index.tsx`
- `src/blocks/data-grid-editing-5/data.ts`

## Dependencies

- `@dnd-kit/core`
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
- `avatar`
- `button`
- `dialog`
- `dropdown-menu`
- `input`
- `input-group`
- `popover`
- `select`
- `sonner`
- `switch`
