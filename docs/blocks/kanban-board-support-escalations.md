---
title: Support Escalations
description: Support Escalations kanban-board block.
category: Kanban Board
---

# Support Escalations

Support Escalations kanban-board block.

**Block:** `kanban-board-support-escalations` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-support-escalations)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-support-escalations
```

## Usage

```tsx
import { KanbanBoardSupportEscalationsBlock } from "@/blocks/kanban-board-support-escalations"

export default function Page() {
  return <KanbanBoardSupportEscalationsBlock />
}
```

## More in Kanban Board

- [Access Review](./kanban-board-access-review.md)
- [Bug Triage](./kanban-board-bug-triage.md)
- [Collapsible Columns](./kanban-board-collapsible-columns.md)
- [Feature Roadmap Votes](./kanban-board-feature-roadmap-votes.md)
- [Progress Ring Workflow](./kanban-board-progress-ring-workflow.md)
- [Recruiting Pipeline](./kanban-board-recruiting-pipeline.md)

## Files

- `src/blocks/application/kanban-board/kanban-board-support-escalations/index.tsx`

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
