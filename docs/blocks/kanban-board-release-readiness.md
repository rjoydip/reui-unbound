---
title: Release Readiness
description: Release Readiness kanban-board block.
category: Kanban Board
---

# Release Readiness

**Block:** `kanban-board-release-readiness` · **Category:** Kanban Board

[Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-8)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-release-readiness
```

## Usage

```tsx
import { KanbanBoard8Block } from "@/blocks/kanban-board-release-readiness"

export default function Page() {
  return <KanbanBoard8Block />
}
```

## Files

- `src/blocks/application/kanban-board/kanban-board-8/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/kanban`
- `avatar`
- `button`
- `input`
- `popover`
