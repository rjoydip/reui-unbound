---
title: Access Review
description: Access Review kanban-board block.
category: Kanban Board
---

# Access Review

**Block:** `kanban-board-access-review` · **Category:** Kanban Board

[Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-access-review)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-access-review
```

## Usage

```tsx
import { KanbanBoardAccessReviewBlock } from "@/blocks/kanban-board-access-review"

export default function Page() {
  return <KanbanBoardAccessReviewBlock />
}
```

## Files

- `src/blocks/application/kanban-board/kanban-board-access-review/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/kanban`
- `@reui-unbound/rating`
- `avatar`
- `button`
- `input`
- `popover`
