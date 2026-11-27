---
title: Access Review
description: Access Review kanban-board block.
category: Kanban Board
---

# Access Review

Access Review kanban-board block.

**Block:** `kanban-board-access-review` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-access-review)

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

## More in Kanban Board

- [Bug Triage](./kanban-board-bug-triage.md)
- [Collapsible Columns](./kanban-board-collapsible-columns.md)
- [Feature Roadmap Votes](./kanban-board-feature-roadmap-votes.md)
- [Progress Ring Workflow](./kanban-board-progress-ring-workflow.md)
- [Recruiting Pipeline](./kanban-board-recruiting-pipeline.md)
- [Release Readiness](./kanban-board-release-readiness.md)

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
