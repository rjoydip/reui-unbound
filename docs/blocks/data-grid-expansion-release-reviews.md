---
title: Release Reviews
description: Release Reviews data grid block.
category: Expansion
---

# Release Reviews

Release Reviews data grid block.

**Block:** `data-grid-expansion-release-reviews` · **Category:** Expansion

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-expansion-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-expansion-release-reviews
```

## Usage

```tsx
import { ReleaseReviewsBlock } from "@/blocks/data-grid-expansion-release-reviews"

export default function Page() {
  return <ReleaseReviewsBlock />
}
```

## More in Expansion

- [Task Delivery](./data-grid-expansion-task-delivery.md)
- [Treasury Waterfall](./data-grid-expansion-treasury-waterfall.md)

## Files

- `src/blocks/data-grid/expansion/release-reviews/index.tsx`
- `src/blocks/data-grid/expansion/release-reviews/data.ts`

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
- `popover`
- `select`
- `sonner`
- `switch`
