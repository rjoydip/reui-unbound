---
title: Timesheets
description: Timesheets data grid block.
category: Base
---

# Timesheets

Timesheets data grid block.

**Block:** `data-grid-base-timesheets` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-4)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-timesheets
```

## Usage

```tsx
import { WeeklyTimesheetBlock } from "@/blocks/data-grid-base-timesheets"

export default function Page() {
  return <WeeklyTimesheetBlock />
}
```

## More in Base

- [API Requests](./data-grid-base-api-requests.md)
- [Contacts](./data-grid-base-contacts.md)
- [Customers](./data-grid-base-customers.md)
- [Members](./data-grid-base-members.md)
- [Modules](./data-grid-base-modules.md)
- [Opportunities](./data-grid-base-opportunities.md)

## Files

- `src/blocks/data-grid/base/timesheets/index.tsx`
- `src/blocks/data-grid/base/timesheets/parts.tsx`
- `src/blocks/data-grid/base/timesheets/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `date-fns`
- `lucide-react`
- `react-day-picker`
- `sonner`

## Registry dependencies

- `@reui-unbound/data-grid`
- `@reui-unbound/frame`
- `avatar`
- `button`
- `calendar`
- `popover`
- `select`
- `separator`
- `sonner`
- `tooltip`
