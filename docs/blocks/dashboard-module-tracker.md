---
title: Module Tracker
description: Module Tracker dashboard block.
category: Dashboard
---

# Module Tracker

Module Tracker dashboard block.

**Block:** `dashboard-module-tracker` · **Category:** Dashboard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dashboard-module-tracker)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dashboard-module-tracker
```

## Usage

```tsx
import { DashboardModuleTrackerBlock } from "@/blocks/dashboard-module-tracker"

export default function Page() {
  return <DashboardModuleTrackerBlock />
}
```

## More in Dashboard

- [Edge Security Telemetry](./dashboard-edge-security-telemetry.md)
- [Fulfillment Exceptions](./dashboard-fulfillment-exceptions.md)
- [Retail Revenue](./dashboard-retail-revenue.md)
- [Royalty Payouts](./dashboard-royalty-payouts.md)
- [Voice Agent Calls](./dashboard-voice-agent-calls.md)
- [Workforce Coverage](./dashboard-workforce-coverage.md)

## Files

- `src/blocks/application/dashboard/dashboard-module-tracker/index.tsx`

## Dependencies

- `cn`
- `lucide-react`
- `recharts`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `breadcrumb`
- `button`
- `card`
- `chart`
- `checkbox`
- `dropdown-menu`
- `input-group`
- `popover`
- `table`
