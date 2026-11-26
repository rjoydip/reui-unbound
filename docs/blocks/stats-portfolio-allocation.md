---
title: Portfolio Allocation
description: Portfolio Allocation stats block.
category: Stats
---

# Portfolio Allocation

Portfolio Allocation stats block.

**Block:** `stats-portfolio-allocation` · **Category:** Stats

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=stats-portfolio-allocation)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/stats-portfolio-allocation
```

## Usage

```tsx
import { StatsPortfolioAllocationBlock } from "@/blocks/stats-portfolio-allocation"

export default function Page() {
  return <StatsPortfolioAllocationBlock />
}
```

## More in Stats

- [Adoption Rate](./stats-adoption-rate.md)
- [Analytics Overview](./stats-analytics-overview.md)
- [API Quota Usage](./stats-api-quota-usage.md)
- [Capacity Usage](./stats-capacity-usage.md)
- [Compliance Checks](./stats-compliance-checks.md)
- [KPI Callouts](./stats-kpi-callouts.md)

## Files

- `src/blocks/application/stats/stats-portfolio-allocation/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
