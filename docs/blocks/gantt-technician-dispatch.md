---
title: Technician Dispatch
description: Technician Dispatch gantt block.
category: Gantt
---

# Technician Dispatch

Technician Dispatch gantt block.

**Block:** `gantt-technician-dispatch` · **Category:** Gantt

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=gantt-technician-dispatch)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/gantt-technician-dispatch
```

## Usage

```tsx
import { GanttTechnicianDispatchBlock } from "@/blocks/gantt-technician-dispatch"

export default function Page() {
  return <GanttTechnicianDispatchBlock />
}
```

## More in Gantt

- [Agent Playbook](./gantt-agent-playbook.md)
- [Project Timeline](./gantt-project-timeline.md)
- [Resource Capacity](./gantt-resource-capacity.md)

## Files

- `src/blocks/application/gantt/gantt-technician-dispatch/index.tsx`

## Dependencies

- `cn`
- `date-fns`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/gantt`
- `avatar`
- `button`
- `card`
- `checkbox`
- `dialog`
- `dropdown-menu`
- `input`
- `popover`
- `select`
- `tooltip`
