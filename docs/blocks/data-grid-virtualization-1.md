---
title: Transactions
description: Transactions data grid block.
category: Virtualization
---

# Transactions

**Block:** `data-grid-virtualization-1` · **Category:** Virtualization

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-virtualization-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-virtualization-1
```

## Usage

```tsx
import { TransactionsVirtualizedBlock } from "@/blocks/data-grid-virtualization-1"

export default function Page() {
  return <TransactionsVirtualizedBlock />
}
```

## Files

- `src/blocks/data-grid-virtualization-1/index.tsx`
- `src/blocks/data-grid-virtualization-1/data.ts`

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
