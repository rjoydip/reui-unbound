---
title: Labels
description: Labels data grid block.
category: Editing
---

# Labels

Labels data grid block.

**Block:** `data-grid-editing-labels` · **Category:** Editing

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-labels
```

## Usage

```tsx
import { LabelManagerBlock } from "@/blocks/data-grid-editing-labels"

export default function Page() {
  return <LabelManagerBlock />
}
```

## More in Editing

- [Launch Runbook](./data-grid-editing-launch-runbook.md)
- [Plans](./data-grid-editing-plans.md)
- [Product Inventory](./data-grid-editing-product-inventory.md)
- [Project Intake](./data-grid-editing-project-intake.md)
- [Reorder Plan](./data-grid-editing-reorder-plan.md)

## Files

- `src/blocks/data-grid/editing/labels/index.tsx`
- `src/blocks/data-grid/editing/labels/data.ts`

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
- `select`
- `sonner`
- `switch`
