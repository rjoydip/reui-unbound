---
title: Automation Library
description: Automation Library data grid block.
category: Filtering
---

# Automation Library

Automation Library data grid block.

**Block:** `data-grid-filtering-automation-library` · **Category:** Filtering

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-filtering-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-filtering-automation-library
```

## Usage

```tsx
import { AutomationLibraryBlock } from "@/blocks/data-grid-filtering-automation-library"

export default function Page() {
  return <AutomationLibraryBlock />
}
```

## More in Filtering

- [Renewals Review](./data-grid-filtering-renewals-review.md)
- [Renewals Risk](./data-grid-filtering-renewals-risk.md)
- [Transactions](./data-grid-filtering-transactions.md)

## Files

- `src/blocks/data-grid/filtering/automation-library/index.tsx`
- `src/blocks/data-grid/filtering/automation-library/data.ts`

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
