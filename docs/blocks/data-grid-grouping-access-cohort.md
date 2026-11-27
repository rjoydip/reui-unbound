---
title: Access Cohort
description: Access Cohort data grid block.
category: Grouping
---

# Access Cohort

Access Cohort data grid block.

**Block:** `data-grid-grouping-access-cohort` · **Category:** Grouping

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-grouping-3)

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

## More in Grouping

- [Bill Of Materials](./data-grid-grouping-bill-of-materials.md)
- [Delivery Board](./data-grid-grouping-delivery-board.md)
- [Production Desk](./data-grid-grouping-production-desk.md)
- [Reporting Lines](./data-grid-grouping-reporting-lines.md)
- [Revenue By Region](./data-grid-grouping-revenue-by-region.md)
- [Roadmap Queue](./data-grid-grouping-roadmap-queue.md)

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
