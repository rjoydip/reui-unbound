---
title: Wallet Balance
description: Wallet Balance stats block.
category: Stats
---

# Wallet Balance

Wallet Balance stats block.

**Block:** `stats-wallet-balance` · **Category:** Stats

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=stats-wallet-balance)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/stats-wallet-balance
```

## Usage

```tsx
import { StatsWalletBalanceBlock } from "@/blocks/stats-wallet-balance"

export default function Page() {
  return <StatsWalletBalanceBlock />
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

- `src/blocks/application/stats/stats-wallet-balance/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `button`
