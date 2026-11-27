---
title: Store KPIs
description: Store KPIs data grid block.
category: Advanced
---

# Store KPIs

Store KPIs data grid block.

**Block:** `data-grid-advanced-store-kpis` · **Category:** Advanced

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-16)

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

## More in Advanced

- [Campaign Performance](./data-grid-advanced-campaign-performance.md)
- [Campaign Targets](./data-grid-advanced-campaign-targets.md)
- [Factory Scorecard](./data-grid-advanced-factory-scorecard.md)
- [Fourplex Pro Forma](./data-grid-advanced-fourplex-pro-forma.md)
- [Freight & Cargo Services](./data-grid-advanced-freight-cargo-services.md)
- [HR Scorecard](./data-grid-advanced-hr-scorecard.md)

## Files

- `src/blocks/data-grid/advanced/store-kpis/index.tsx`
- `src/blocks/data-grid/advanced/store-kpis/data.ts`
- `src/blocks/data-grid/advanced/store-kpis/parts.tsx`
- `src/blocks/data-grid/advanced/store-kpis/store-sheet.tsx`

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
