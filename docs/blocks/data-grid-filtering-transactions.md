---
title: Transactions
description: Transactions data grid block.
category: Filtering
---

# Transactions

Transactions data grid block.

**Block:** `data-grid-filtering-transactions` · **Category:** Filtering

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-filtering-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-filtering-transactions
```

## Usage

```tsx
import { BillingTransactionsBlock } from "@/blocks/data-grid-filtering-transactions"

export default function Page() {
  return <BillingTransactionsBlock />
}
```

## More in Filtering

- [Automation Library](./data-grid-filtering-automation-library.md)
- [Renewals Review](./data-grid-filtering-renewals-review.md)
- [Renewals Risk](./data-grid-filtering-renewals-risk.md)

## Files

- `src/blocks/data-grid/filtering/transactions/index.tsx`
- `src/blocks/data-grid/filtering/transactions/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/frame`
- `@reui-unbound/icon-tile`
- `button`
- `dropdown-menu`
- `input`
- `input-group`
- `popover`
- `sonner`
