---
title: Capacity Usage
description: Capacity Usage stats block.
category: Stats
---

# Capacity Usage

Capacity Usage stats block.

**Block:** `stats-capacity-usage` · **Category:** Stats

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=stats-capacity-usage)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/stats-capacity-usage
```

## Usage

```tsx
import { StatsCapacityUsageBlock } from "@/blocks/stats-capacity-usage"

export default function Page() {
  return <StatsCapacityUsageBlock />
}
```

## More in Stats

- [Adoption Rate](./stats-adoption-rate.md)
- [Analytics Overview](./stats-analytics-overview.md)
- [API Quota Usage](./stats-api-quota-usage.md)
- [Compliance Checks](./stats-compliance-checks.md)
- [KPI Callouts](./stats-kpi-callouts.md)
- [KPI Scorecard](./stats-kpi-scorecard.md)

## Files

- `src/blocks/application/stats/stats-capacity-usage/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `dropdown-menu`
