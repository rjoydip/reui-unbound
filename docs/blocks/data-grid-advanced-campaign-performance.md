---
title: Campaign Performance
description: Campaign Performance data grid block.
category: Advanced
---

# Campaign Performance

Campaign Performance data grid block.

**Block:** `data-grid-advanced-campaign-performance` · **Category:** Advanced

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-1)

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

## More in Advanced

- [Campaign Targets](./data-grid-advanced-campaign-targets.md)
- [Factory Scorecard](./data-grid-advanced-factory-scorecard.md)
- [Fourplex Pro Forma](./data-grid-advanced-fourplex-pro-forma.md)
- [Freight & Cargo Services](./data-grid-advanced-freight-cargo-services.md)
- [HR Scorecard](./data-grid-advanced-hr-scorecard.md)
- [Invoices](./data-grid-advanced-invoices.md)

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
