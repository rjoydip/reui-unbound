---
title: Access Cohort
description: Access Cohort data grid block.
category: Grouping
---

# Access Cohort

**Block:** `data-grid-grouping-access-cohort` · **Category:** Grouping

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-grouping-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-grouping-access-cohort
```

## Usage

```tsx
import { PatientAccessCohortsBlock } from "@/blocks/data-grid-grouping-access-cohort"

export default function Page() {
  return <PatientAccessCohortsBlock />
}
```

## Files

- `src/blocks/data-grid/grouping/access-cohort/index.tsx`
- `src/blocks/data-grid/grouping/access-cohort/data.ts`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `input-group`
- `select`
- `switch`
- `tooltip`
