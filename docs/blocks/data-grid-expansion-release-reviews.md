---
title: Release Reviews
description: Release Reviews data grid block.
category: Expansion
---

# Release Reviews

**Block:** `data-grid-expansion-release-reviews` · **Category:** Expansion

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-expansion-3)

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
