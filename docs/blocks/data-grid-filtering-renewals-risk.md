---
title: Renewals Risk
description: Renewals Risk data grid block.
category: Filtering
---

# Renewals Risk

Renewals Risk data grid block.

**Block:** `data-grid-filtering-renewals-risk` · **Category:** Filtering

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-filtering-4)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-filtering-renewals-risk
```

## Usage

```tsx
import { AtRiskRenewalsBlock } from "@/blocks/data-grid-filtering-renewals-risk"

export default function Page() {
  return <AtRiskRenewalsBlock />
}
```

## More in Filtering

- [Automation Library](./data-grid-filtering-automation-library.md)
- [Renewals Review](./data-grid-filtering-renewals-review.md)
- [Transactions](./data-grid-filtering-transactions.md)

## Files

- `src/blocks/data-grid/filtering/renewals-risk/index.tsx`
- `src/blocks/data-grid/filtering/renewals-risk/data.ts`
- `src/blocks/data-grid/filtering/renewals-risk/brand-icons.tsx`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `avatar`
- `button`
- `dropdown-menu`
- `input`
- `popover`
- `sonner`
- `switch`
