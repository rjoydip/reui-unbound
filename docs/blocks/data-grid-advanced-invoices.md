---
title: Invoices
description: Invoices data grid block.
category: Advanced
---

# Invoices

Invoices data grid block.

**Block:** `data-grid-advanced-invoices` · **Category:** Advanced

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-advanced-21)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-advanced-invoices
```

## Usage

```tsx
import { InvoiceManagerBlock } from "@/blocks/data-grid-advanced-invoices"

export default function Page() {
  return <InvoiceManagerBlock />
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

- `src/blocks/data-grid/advanced/invoices/index.tsx`
- `src/blocks/data-grid/advanced/invoices/customer-sheet.tsx`
- `src/blocks/data-grid/advanced/invoices/data.ts`
- `src/blocks/data-grid/advanced/invoices/parts.tsx`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/cascader`
- `@reui-unbound/data-grid`
- `@reui-unbound/filters`
- `@reui-unbound/frame`
- `@reui-unbound/icon-tile`
- `avatar`
- `button`
- `dialog`
- `dropdown-menu`
- `input-group`
- `kbd`
- `select`
- `sheet`
- `sonner`
