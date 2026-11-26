---
title: Workspace Access Review
description: Workspace Access Review data grid block.
category: Columns
---

# Workspace Access Review

Workspace Access Review data grid block.

**Block:** `data-grid-columns-workspace-access-review` · **Category:** Columns

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-columns-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-columns-workspace-access-review
```

## Usage

```tsx
import { AccessPermissionsBlock } from "@/blocks/data-grid-columns-workspace-access-review"

export default function Page() {
  return <AccessPermissionsBlock />
}
```

## More in Columns

- [Companies](./data-grid-columns-companies.md)
- [Course Catalog](./data-grid-columns-course-catalog.md)
- [Members](./data-grid-columns-members.md)
- [Work Queue](./data-grid-columns-work-queue.md)

## Files

- `src/blocks/data-grid/columns/workspace-access-review/index.tsx`
- `src/blocks/data-grid/columns/workspace-access-review/data.ts`

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
