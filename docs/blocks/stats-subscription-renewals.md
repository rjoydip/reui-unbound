---
title: Subscription Renewals
description: Subscription Renewals stats block.
category: Stats
---

# Subscription Renewals

Subscription Renewals stats block.

**Block:** `stats-subscription-renewals` · **Category:** Stats

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=stats-subscription-renewals)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/stats-subscription-renewals
```

## Usage

```tsx
import { StatsSubscriptionRenewalsBlock } from "@/blocks/stats-subscription-renewals"

export default function Page() {
  return <StatsSubscriptionRenewalsBlock />
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

- `src/blocks/application/stats/stats-subscription-renewals/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `select`
