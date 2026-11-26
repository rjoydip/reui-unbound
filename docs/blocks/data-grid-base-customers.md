---
title: Customers
description: Customers data grid block.
category: Base
---

# Customers

Customers data grid block.

**Block:** `data-grid-base-customers` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-customers
```

## Usage

```tsx
import { CustomerBalancesBlock } from "@/blocks/data-grid-base-customers"

export default function Page() {
  return <CustomerBalancesBlock />
}
```

## More in Base

- [API Requests](./data-grid-base-api-requests.md)
- [Contacts](./data-grid-base-contacts.md)
- [Members](./data-grid-base-members.md)
- [Modules](./data-grid-base-modules.md)
- [Opportunities](./data-grid-base-opportunities.md)
- [Rate Card](./data-grid-base-rate-card.md)

## Files

- `src/blocks/data-grid/base/customers/index.tsx`
- `src/blocks/data-grid/base/customers/parts.tsx`
- `src/blocks/data-grid/base/customers/customer-sheets.tsx`
- `src/blocks/data-grid/base/customers/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/cascader`
- `@reui-unbound/data-grid`
- `@reui-unbound/frame`
- `@reui-unbound/number-field`
- `alert-dialog`
- `avatar`
- `button`
- `dropdown-menu`
- `field`
- `input`
- `input-group`
- `kbd`
- `select`
- `sheet`
- `sonner`
- `tabs`
- `tooltip`
