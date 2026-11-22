---
title: API Requests
description: API Requests data grid block.
category: Base
---

# API Requests

**Block:** `data-grid-base-api-requests` · **Category:** Base

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-9)

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

## Files

- `src/blocks/data-grid-base-9/index.tsx`
- `src/blocks/data-grid-base-9/traffic-chart.tsx`
- `src/blocks/data-grid-base-9/log-sheet.tsx`
- `src/blocks/data-grid-base-9/data.ts`

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
