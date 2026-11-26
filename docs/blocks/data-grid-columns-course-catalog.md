---
title: Course Catalog
description: Course Catalog data grid block.
category: Columns
---

# Course Catalog

Course Catalog data grid block.

**Block:** `data-grid-columns-course-catalog` · **Category:** Columns

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-columns-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-columns-course-catalog
```

## Usage

```tsx
import { CourseCatalogBlock } from "@/blocks/data-grid-columns-course-catalog"

export default function Page() {
  return <CourseCatalogBlock />
}
```

## More in Columns

- [Companies](./data-grid-columns-companies.md)
- [Members](./data-grid-columns-members.md)
- [Work Queue](./data-grid-columns-work-queue.md)
- [Workspace Access Review](./data-grid-columns-workspace-access-review.md)

## Files

- `src/blocks/data-grid/columns/course-catalog/index.tsx`
- `src/blocks/data-grid/columns/course-catalog/data.ts`

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
