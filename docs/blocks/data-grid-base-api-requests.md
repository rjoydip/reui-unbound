---
title: API Requests
description: API Requests data grid block.
category: Base
---

# API Requests

API Requests data grid block.

**Block:** `data-grid-base-api-requests` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-9)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-api-requests
```

## Usage

```tsx
import { ApiRequestLogsBlock } from "@/blocks/data-grid-base-api-requests"

export default function Page() {
  return <ApiRequestLogsBlock />
}
```

## More in Base

- [Contacts](./data-grid-base-contacts.md)
- [Customers](./data-grid-base-customers.md)
- [Members](./data-grid-base-members.md)
- [Modules](./data-grid-base-modules.md)
- [Opportunities](./data-grid-base-opportunities.md)
- [Rate Card](./data-grid-base-rate-card.md)

## Files

- `src/blocks/data-grid/base/api-requests/index.tsx`
- `src/blocks/data-grid/base/api-requests/traffic-chart.tsx`
- `src/blocks/data-grid/base/api-requests/log-sheet.tsx`
- `src/blocks/data-grid/base/api-requests/data.ts`

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
- `button`
- `dropdown-menu`
- `input-group`
- `kbd`
- `select`
- `sheet`
- `sonner`
- `tooltip`
