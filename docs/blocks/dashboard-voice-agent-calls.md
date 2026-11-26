---
title: Voice Agent Calls
description: Voice Agent Calls dashboard block.
category: Dashboard
---

# Voice Agent Calls

Voice Agent Calls dashboard block.

**Block:** `dashboard-voice-agent-calls` · **Category:** Dashboard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dashboard-voice-agent-calls)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dashboard-voice-agent-calls
```

## Usage

```tsx
import { DashboardVoiceAgentCallsBlock } from "@/blocks/dashboard-voice-agent-calls"

export default function Page() {
  return <DashboardVoiceAgentCallsBlock />
}
```

## More in Dashboard

- [Edge Security Telemetry](./dashboard-edge-security-telemetry.md)
- [Fulfillment Exceptions](./dashboard-fulfillment-exceptions.md)
- [Module Tracker](./dashboard-module-tracker.md)
- [Retail Revenue](./dashboard-retail-revenue.md)
- [Royalty Payouts](./dashboard-royalty-payouts.md)
- [Workforce Coverage](./dashboard-workforce-coverage.md)

## Files

- `src/blocks/application/dashboard/dashboard-voice-agent-calls/index.tsx`

## Dependencies

- `cn`
- `lucide-react`
- `recharts`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/icon-tile`
- `button`
- `card`
- `chart`
- `select`
