---
title: Store KPIs
description: Store KPIs data grid block.
category: Advanced
---

# Store KPIs

**Block:** `data-grid-advanced-store-kpis` · **Category:** Advanced

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-16)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-advanced-store-kpis
```

## Usage

```tsx
import { StoreKpiBoardBlock } from "@/blocks/data-grid-advanced-store-kpis"

export default function Page() {
  return <StoreKpiBoardBlock />
}
```

## Files

- `src/blocks/data-grid-advanced-16/index.tsx`
- `src/blocks/data-grid-advanced-16/data.ts`
- `src/blocks/data-grid-advanced-16/parts.tsx`
- `src/blocks/data-grid-advanced-16/store-sheet.tsx`

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
- `kbd`
- `progress`
- `select`
- `sheet`
- `sonner`
