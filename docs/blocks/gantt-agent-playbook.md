---
title: Agent Playbook
description: Agent Playbook gantt block.
category: Gantt
---

# Agent Playbook

Agent Playbook gantt block.

**Block:** `gantt-agent-playbook` · **Category:** Gantt

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=gantt-agent-playbook)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/gantt-agent-playbook
```

## Usage

```tsx
import { GanttAgentPlaybookBlock } from "@/blocks/gantt-agent-playbook"

export default function Page() {
  return <GanttAgentPlaybookBlock />
}
```

## More in Gantt

- [Project Timeline](./gantt-project-timeline.md)
- [Resource Capacity](./gantt-resource-capacity.md)
- [Technician Dispatch](./gantt-technician-dispatch.md)

## Files

- `src/blocks/application/gantt/gantt-agent-playbook/index.tsx`

## Dependencies

- `cn`
- `date-fns`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/gantt`
- `button`
- `card`
- `checkbox`
- `dialog`
- `dropdown-menu`
- `input`
- `popover`
- `select`
- `switch`
- `tabs`
- `tooltip`
