---
title: Transactions
description: Transactions data grid block.
category: Virtualization
---

# Transactions

Transactions data grid block.

**Block:** `data-grid-virtualization-transactions` · **Category:** Virtualization

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-virtualization-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-virtualization-transactions
```

## Usage

```tsx
import { TransactionsVirtualizedBlock } from "@/blocks/data-grid-virtualization-transactions"

export default function Page() {
  return <TransactionsVirtualizedBlock />
}
```

## More in Virtualization

- [Exception Queue](./data-grid-virtualization-exception-queue.md)

## Files

- `src/blocks/data-grid/virtualization/transactions/index.tsx`
- `src/blocks/data-grid/virtualization/transactions/data.ts`

## Dependencies

- `@tanstack/react-virtual`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `checkbox`
- `dropdown-menu`
- `input-group`
- `popover`
- `sonner`
- `switch`
