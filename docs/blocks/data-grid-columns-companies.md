---
title: Companies
description: Companies data grid block.
category: Columns
---

# Companies

Companies data grid block.

**Block:** `data-grid-columns-companies` · **Category:** Columns

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-columns-5)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-columns-companies
```

## Usage

```tsx
import { CompanyAttributesBlock } from "@/blocks/data-grid-columns-companies"

export default function Page() {
  return <CompanyAttributesBlock />
}
```

## More in Columns

- [Course Catalog](./data-grid-columns-course-catalog.md)
- [Members](./data-grid-columns-members.md)
- [Work Queue](./data-grid-columns-work-queue.md)
- [Workspace Access Review](./data-grid-columns-workspace-access-review.md)

## Files

- `src/blocks/data-grid/columns/companies/index.tsx`
- `src/blocks/data-grid/columns/companies/data.ts`

## Dependencies

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
- `dropdown-menu`
- `input-group`
- `select`
- `sonner`
- `switch`
- `tooltip`
