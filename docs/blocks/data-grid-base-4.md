---
title: Timesheets
description: Timesheets data grid block.
category: Base
---

# Timesheets

**Block:** `data-grid-base-4` · **Category:** Base

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-4)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-4
```

## Usage

```tsx
import { WeeklyTimesheetBlock } from "@/blocks/data-grid-base-4"

export default function Page() {
  return <WeeklyTimesheetBlock />
}
```

## Files

- `src/blocks/data-grid-base-4/index.tsx`
- `src/blocks/data-grid-base-4/parts.tsx`
- `src/blocks/data-grid-base-4/data.ts`

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
