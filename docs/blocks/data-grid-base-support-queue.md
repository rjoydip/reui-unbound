---
title: Support Queue
description: Support Queue data grid block.
category: Base
---

# Support Queue

**Block:** `data-grid-base-support-queue` · **Category:** Base

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-5)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-support-queue
```

## Usage

```tsx
import { SupportTicketsBlock } from "@/blocks/data-grid-base-support-queue"

export default function Page() {
  return <SupportTicketsBlock />
}
```

## Files

- `src/blocks/data-grid/base/support-queue/index.tsx`
- `src/blocks/data-grid/base/support-queue/parts.tsx`
- `src/blocks/data-grid/base/support-queue/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `alert-dialog`
- `avatar`
- `button`
- `card`
- `dropdown-menu`
- `input-group`
- `select`
- `sonner`
