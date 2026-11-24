---
title: Agent Playbook
description: Agent Playbook gantt block.
category: Gantt
---

# Agent Playbook

**Block:** `gantt-agent-playbook` · **Category:** Gantt

[Open live preview](https://reui-unbound.pages.dev/?preview=gantt-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/gantt-agent-playbook
```

## Usage

```tsx
import { Gantt3Block } from "@/blocks/gantt-agent-playbook"

export default function Page() {
  return <Gantt3Block />
}
```

## Files

- `src/blocks/application/gantt/gantt-3/index.tsx`

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
