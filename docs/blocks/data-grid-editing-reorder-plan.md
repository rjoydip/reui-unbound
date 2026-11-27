---
title: Reorder Plan
description: Reorder Plan data grid block.
category: Editing
---

# Reorder Plan

Reorder Plan data grid block.

**Block:** `data-grid-editing-reorder-plan` · **Category:** Editing

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-6)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-reorder-plan
```

## Usage

```tsx
import { StockReorderPlanBlock } from "@/blocks/data-grid-editing-reorder-plan"

export default function Page() {
  return <StockReorderPlanBlock />
}
```

## More in Editing

- [Labels](./data-grid-editing-labels.md)
- [Launch Runbook](./data-grid-editing-launch-runbook.md)
- [Plans](./data-grid-editing-plans.md)
- [Product Inventory](./data-grid-editing-product-inventory.md)
- [Project Intake](./data-grid-editing-project-intake.md)

## Files

- `src/blocks/data-grid/editing/reorder-plan/index.tsx`
- `src/blocks/data-grid/editing/reorder-plan/data.ts`

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
