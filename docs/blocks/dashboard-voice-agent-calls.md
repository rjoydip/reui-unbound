---
title: Voice Agent Calls
description: Voice Agent Calls dashboard block.
category: Dashboard
---

# Voice Agent Calls

**Block:** `dashboard-voice-agent-calls` · **Category:** Dashboard

[Open live preview](https://reui-unbound.pages.dev/?preview=dashboard-voice-agent-calls)

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
