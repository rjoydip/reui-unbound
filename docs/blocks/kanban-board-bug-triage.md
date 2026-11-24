---
title: Bug Triage
description: Bug Triage kanban-board block.
category: Kanban Board
---

# Bug Triage

**Block:** `kanban-board-bug-triage` · **Category:** Kanban Board

[Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-bug-triage
```

## Usage

```tsx
import { KanbanBoard1Block } from "@/blocks/kanban-board-bug-triage"

export default function Page() {
  return <KanbanBoard1Block />
}
```

## Files

- `src/blocks/application/kanban-board/kanban-board-1/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/kanban`
- `avatar`
- `button`
- `checkbox`
- `dialog`
- `input`
- `popover`
