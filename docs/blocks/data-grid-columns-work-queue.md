---
title: Work Queue
description: Work Queue data grid block.
category: Columns
---

# Work Queue

Work Queue data grid block.

**Block:** `data-grid-columns-work-queue` · **Category:** Columns

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-columns-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-columns-work-queue
```

## Usage

```tsx
import { WorkQueueBlock } from "@/blocks/data-grid-columns-work-queue"

export default function Page() {
  return <WorkQueueBlock />
}
```

## More in Columns

- [Companies](./data-grid-columns-companies.md)
- [Course Catalog](./data-grid-columns-course-catalog.md)
- [Members](./data-grid-columns-members.md)
- [Workspace Access Review](./data-grid-columns-workspace-access-review.md)

## Files

- `src/blocks/data-grid/columns/work-queue/index.tsx`
- `src/blocks/data-grid/columns/work-queue/data.ts`

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
