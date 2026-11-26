---
title: Product Inventory
description: Product Inventory data grid block.
category: Editing
---

# Product Inventory

Product Inventory data grid block.

**Block:** `data-grid-editing-product-inventory` · **Category:** Editing

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-product-inventory
```

## Usage

```tsx
import { ProductInventoryBlock } from "@/blocks/data-grid-editing-product-inventory"

export default function Page() {
  return <ProductInventoryBlock />
}
```

## More in Editing

- [Labels](./data-grid-editing-labels.md)
- [Launch Runbook](./data-grid-editing-launch-runbook.md)
- [Plans](./data-grid-editing-plans.md)
- [Project Intake](./data-grid-editing-project-intake.md)
- [Reorder Plan](./data-grid-editing-reorder-plan.md)

## Files

- `src/blocks/data-grid/editing/product-inventory/index.tsx`
- `src/blocks/data-grid/editing/product-inventory/data.ts`

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
