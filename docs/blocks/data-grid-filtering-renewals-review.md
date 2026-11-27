---
title: Renewals Review
description: Renewals Review data grid block.
category: Filtering
---

# Renewals Review

Renewals Review data grid block.

**Block:** `data-grid-filtering-renewals-review` · **Category:** Filtering

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-filtering-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-filtering-renewals-review
```

## Usage

```tsx
import { RenewalsReviewBlock } from "@/blocks/data-grid-filtering-renewals-review"

export default function Page() {
  return <RenewalsReviewBlock />
}
```

## More in Filtering

- [Automation Library](./data-grid-filtering-automation-library.md)
- [Renewals Risk](./data-grid-filtering-renewals-risk.md)
- [Transactions](./data-grid-filtering-transactions.md)

## Files

- `src/blocks/data-grid/filtering/renewals-review/index.tsx`
- `src/blocks/data-grid/filtering/renewals-review/data.ts`
- `src/blocks/data-grid/filtering/renewals-review/brand-icons.tsx`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `avatar`
- `button`
- `dropdown-menu`
- `input`
- `popover`
- `sonner`
