---
title: Launch Runbook
description: Launch Runbook data grid block.
category: Editing
---

# Launch Runbook

Launch Runbook data grid block.

**Block:** `data-grid-editing-launch-runbook` · **Category:** Editing

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-5)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-launch-runbook
```

## Usage

```tsx
import { TaskSpreadsheetBlock } from "@/blocks/data-grid-editing-launch-runbook"

export default function Page() {
  return <TaskSpreadsheetBlock />
}
```

## More in Editing

- [Labels](./data-grid-editing-labels.md)
- [Plans](./data-grid-editing-plans.md)
- [Product Inventory](./data-grid-editing-product-inventory.md)
- [Project Intake](./data-grid-editing-project-intake.md)
- [Reorder Plan](./data-grid-editing-reorder-plan.md)

## Files

- `src/blocks/data-grid/editing/launch-runbook/index.tsx`
- `src/blocks/data-grid/editing/launch-runbook/data.ts`

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
