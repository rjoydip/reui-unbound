---
title: Campaign Performance
description: Campaign Performance data grid block.
category: Advanced
---

# Campaign Performance

**Block:** `data-grid-advanced-campaign-performance` · **Category:** Advanced

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-advanced-campaign-performance
```

## Usage

```tsx
import { AdCampaignPerformanceBlock } from "@/blocks/data-grid-advanced-campaign-performance"

export default function Page() {
  return <AdCampaignPerformanceBlock />
}
```

## Files

- `src/blocks/data-grid/advanced/campaign-performance/index.tsx`
- `src/blocks/data-grid/advanced/campaign-performance/campaign-sheet.tsx`
- `src/blocks/data-grid/advanced/campaign-performance/data.ts`
- `src/blocks/data-grid/advanced/campaign-performance/parts.tsx`

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
