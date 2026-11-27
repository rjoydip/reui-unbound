---
title: Opportunities
description: Opportunities data grid block.
category: Base
---

# Opportunities

Opportunities data grid block.

**Block:** `data-grid-base-opportunities` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-opportunities
```

## Usage

```tsx
import { DealPipelineBlock } from "@/blocks/data-grid-base-opportunities"

export default function Page() {
  return <DealPipelineBlock />
}
```

## More in Base

- [API Requests](./data-grid-base-api-requests.md)
- [Contacts](./data-grid-base-contacts.md)
- [Customers](./data-grid-base-customers.md)
- [Members](./data-grid-base-members.md)
- [Modules](./data-grid-base-modules.md)
- [Rate Card](./data-grid-base-rate-card.md)

## Files

- `src/blocks/data-grid/base/opportunities/index.tsx`
- `src/blocks/data-grid/base/opportunities/parts.tsx`
- `src/blocks/data-grid/base/opportunities/pipeline-filters.tsx`
- `src/blocks/data-grid/base/opportunities/data.ts`

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
- `avatar`
- `button`
- `dropdown-menu`
- `input-group`
- `sonner`
- `tooltip`
