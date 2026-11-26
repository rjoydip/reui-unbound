---
title: Treasury Waterfall
description: Treasury Waterfall data grid block.
category: Expansion
---

# Treasury Waterfall

Treasury Waterfall data grid block.

**Block:** `data-grid-expansion-treasury-waterfall` · **Category:** Expansion

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-expansion-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-expansion-treasury-waterfall
```

## Usage

```tsx
import { TreasuryWaterfallBlock } from "@/blocks/data-grid-expansion-treasury-waterfall"

export default function Page() {
  return <TreasuryWaterfallBlock />
}
```

## More in Expansion

- [Release Reviews](./data-grid-expansion-release-reviews.md)
- [Task Delivery](./data-grid-expansion-task-delivery.md)

## Files

- `src/blocks/data-grid/expansion/treasury-waterfall/index.tsx`
- `src/blocks/data-grid/expansion/treasury-waterfall/data.ts`

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
