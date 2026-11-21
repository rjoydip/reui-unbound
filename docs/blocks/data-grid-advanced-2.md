---
title: Store P&L
description: Store P&L data grid block.
category: Advanced
---

# Store P&L

**Block:** `data-grid-advanced-2` · **Category:** Advanced

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-advanced-2
```

## Usage

```tsx
import { RegionalStorePnlBlock } from "@/blocks/data-grid-advanced-2"

export default function Page() {
  return <RegionalStorePnlBlock />
}
```

## Files

- `src/blocks/data-grid-advanced-2/index.tsx`
- `src/blocks/data-grid-advanced-2/data.ts`
- `src/blocks/data-grid-advanced-2/parts.tsx`
- `src/blocks/data-grid-advanced-2/store-sheet.tsx`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/filters`
- `@reui-unbound/frame`
- `@reui-unbound/icon-tile`
- `button`
- `dialog`
- `dropdown-menu`
- `input-group`
- `select`
- `sheet`
- `sonner`
- `toggle-group`
