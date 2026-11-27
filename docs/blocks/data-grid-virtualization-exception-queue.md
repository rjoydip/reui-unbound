---
title: Exception Queue
description: Exception Queue data grid block.
category: Virtualization
---

# Exception Queue

Exception Queue data grid block.

**Block:** `data-grid-virtualization-exception-queue` · **Category:** Virtualization

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-virtualization-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-virtualization-exception-queue
```

## Usage

```tsx
import { ExceptionQueueBlock } from "@/blocks/data-grid-virtualization-exception-queue"

export default function Page() {
  return <ExceptionQueueBlock />
}
```

## More in Virtualization

- [Transactions](./data-grid-virtualization-transactions.md)

## Files

- `src/blocks/data-grid/virtualization/exception-queue/index.tsx`
- `src/blocks/data-grid/virtualization/exception-queue/data.ts`

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
