---
title: API Quota Usage
description: API Quota Usage stats block.
category: Stats
---

# API Quota Usage

API Quota Usage stats block.

**Block:** `stats-api-quota-usage` · **Category:** Stats

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=stats-api-quota-usage)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/stats-api-quota-usage
```

## Usage

```tsx
import { StatsApiQuotaUsageBlock } from "@/blocks/stats-api-quota-usage"

export default function Page() {
  return <StatsApiQuotaUsageBlock />
}
```

## More in Stats

- [Adoption Rate](./stats-adoption-rate.md)
- [Analytics Overview](./stats-analytics-overview.md)
- [Capacity Usage](./stats-capacity-usage.md)
- [Compliance Checks](./stats-compliance-checks.md)
- [KPI Callouts](./stats-kpi-callouts.md)
- [KPI Scorecard](./stats-kpi-scorecard.md)

## Files

- `src/blocks/application/stats/stats-api-quota-usage/index.tsx`


## Registry dependencies

- `button`
