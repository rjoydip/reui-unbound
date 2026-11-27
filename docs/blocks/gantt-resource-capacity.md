---
title: Resource Capacity
description: Resource Capacity gantt block.
category: Gantt
---

# Resource Capacity

Resource Capacity gantt block.

**Block:** `gantt-resource-capacity` · **Category:** Gantt

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=gantt-resource-capacity)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/gantt-resource-capacity
```

## Usage

```tsx
import { GanttResourceCapacityBlock } from "@/blocks/gantt-resource-capacity"

export default function Page() {
  return <GanttResourceCapacityBlock />
}
```

## More in Gantt

- [Agent Playbook](./gantt-agent-playbook.md)
- [Project Timeline](./gantt-project-timeline.md)
- [Technician Dispatch](./gantt-technician-dispatch.md)

## Files

- `src/blocks/application/gantt/gantt-resource-capacity/index.tsx`

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
- `context-menu`
- `input`
- `popover`
- `select`
- `sheet`
- `textarea`
