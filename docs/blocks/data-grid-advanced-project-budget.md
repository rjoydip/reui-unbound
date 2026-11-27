---
title: Project Budget
description: Project Budget data grid block.
category: Advanced
---

# Project Budget

Project Budget data grid block.

**Block:** `data-grid-advanced-project-budget` · **Category:** Advanced

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-20)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-advanced-project-budget
```

## Usage

```tsx
import { ProjectBudgetBlock } from "@/blocks/data-grid-advanced-project-budget"

export default function Page() {
  return <ProjectBudgetBlock />
}
```

## More in Advanced

- [Campaign Performance](./data-grid-advanced-campaign-performance.md)
- [Campaign Targets](./data-grid-advanced-campaign-targets.md)
- [Factory Scorecard](./data-grid-advanced-factory-scorecard.md)
- [Fourplex Pro Forma](./data-grid-advanced-fourplex-pro-forma.md)
- [Freight & Cargo Services](./data-grid-advanced-freight-cargo-services.md)
- [HR Scorecard](./data-grid-advanced-hr-scorecard.md)

## Files

- `src/blocks/data-grid/advanced/project-budget/index.tsx`
- `src/blocks/data-grid/advanced/project-budget/data.ts`
- `src/blocks/data-grid/advanced/project-budget/line-sheet.tsx`
- `src/blocks/data-grid/advanced/project-budget/parts.tsx`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/filters`
- `@reui-unbound/frame`
- `@reui-unbound/icon-tile`
- `@reui-unbound/number-field`
- `button`
- `dialog`
- `dropdown-menu`
- `input-group`
- `popover`
- `progress`
- `select`
- `sheet`
- `sonner`
- `toggle-group`
