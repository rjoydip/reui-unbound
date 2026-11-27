---
title: Edge Security Telemetry
description: Edge Security Telemetry dashboard block.
category: Dashboard
---

# Edge Security Telemetry

Edge Security Telemetry dashboard block.

**Block:** `dashboard-edge-security-telemetry` · **Category:** Dashboard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dashboard-edge-security-telemetry)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dashboard-edge-security-telemetry
```

## Usage

```tsx
import { DashboardEdgeSecurityTelemetryBlock } from "@/blocks/dashboard-edge-security-telemetry"

export default function Page() {
  return <DashboardEdgeSecurityTelemetryBlock />
}
```

## More in Dashboard

- [Fulfillment Exceptions](./dashboard-fulfillment-exceptions.md)
- [Module Tracker](./dashboard-module-tracker.md)
- [Retail Revenue](./dashboard-retail-revenue.md)
- [Royalty Payouts](./dashboard-royalty-payouts.md)
- [Voice Agent Calls](./dashboard-voice-agent-calls.md)
- [Workforce Coverage](./dashboard-workforce-coverage.md)

## Files

- `src/blocks/application/dashboard/dashboard-edge-security-telemetry/index.tsx`

## Dependencies

- `lucide-react`
- `recharts`

## Registry dependencies

- `@reui-unbound/badge`
- `breadcrumb`
- `button`
- `card`
- `chart`
- `popover`
