---
title: Plans
description: Plans data grid block.
category: Editing
---

# Plans

Plans data grid block.

**Block:** `data-grid-editing-plans` · **Category:** Editing

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-4)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-plans
```

## Usage

```tsx
import { PricingPlanEditorBlock } from "@/blocks/data-grid-editing-plans"

export default function Page() {
  return <PricingPlanEditorBlock />
}
```

## More in Editing

- [Labels](./data-grid-editing-labels.md)
- [Launch Runbook](./data-grid-editing-launch-runbook.md)
- [Product Inventory](./data-grid-editing-product-inventory.md)
- [Project Intake](./data-grid-editing-project-intake.md)
- [Reorder Plan](./data-grid-editing-reorder-plan.md)

## Files

- `src/blocks/data-grid/editing/plans/index.tsx`
- `src/blocks/data-grid/editing/plans/data.ts`

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
