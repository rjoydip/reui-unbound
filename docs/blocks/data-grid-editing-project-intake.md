---
title: Project Intake
description: Project Intake data grid block.
category: Editing
---

# Project Intake

Project Intake data grid block.

**Block:** `data-grid-editing-project-intake` · **Category:** Editing

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-project-intake
```

## Usage

```tsx
import { ProjectIntakeBlock } from "@/blocks/data-grid-editing-project-intake"

export default function Page() {
  return <ProjectIntakeBlock />
}
```

## More in Editing

- [Labels](./data-grid-editing-labels.md)
- [Launch Runbook](./data-grid-editing-launch-runbook.md)
- [Plans](./data-grid-editing-plans.md)
- [Product Inventory](./data-grid-editing-product-inventory.md)
- [Reorder Plan](./data-grid-editing-reorder-plan.md)

## Files

- `src/blocks/data-grid/editing/project-intake/index.tsx`
- `src/blocks/data-grid/editing/project-intake/data.ts`

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
