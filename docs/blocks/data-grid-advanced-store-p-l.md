---
title: Store P&L
description: Store P&L data grid block.
category: Advanced
---

# Store P&L

Store P&L data grid block.

**Block:** `data-grid-advanced-store-p-l` · **Category:** Advanced

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-advanced-store-p-l
```

## Usage

```tsx
import { RegionalStorePnlBlock } from "@/blocks/data-grid-advanced-store-p-l"

export default function Page() {
  return <RegionalStorePnlBlock />
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

- `src/blocks/data-grid/advanced/store-p-l/index.tsx`
- `src/blocks/data-grid/advanced/store-p-l/data.ts`
- `src/blocks/data-grid/advanced/store-p-l/parts.tsx`
- `src/blocks/data-grid/advanced/store-p-l/store-sheet.tsx`

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
