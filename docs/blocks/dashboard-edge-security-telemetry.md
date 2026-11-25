---
title: Edge Security Telemetry
description: Edge Security Telemetry dashboard block.
category: Dashboard
---

# Edge Security Telemetry

**Block:** `dashboard-edge-security-telemetry` · **Category:** Dashboard

[Open live preview](https://reui-unbound.pages.dev/?preview=dashboard-edge-security-telemetry)

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
