---
title: Bug Triage
description: Bug Triage kanban-board block.
category: Kanban Board
---

# Bug Triage

Bug Triage kanban-board block.

**Block:** `kanban-board-bug-triage` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-bug-triage)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-bug-triage
```

## Usage

```tsx
import { KanbanBoardBugTriageBlock } from "@/blocks/kanban-board-bug-triage"

export default function Page() {
  return <KanbanBoardBugTriageBlock />
}
```

## More in Kanban Board

- [Access Review](./kanban-board-access-review.md)
- [Collapsible Columns](./kanban-board-collapsible-columns.md)
- [Feature Roadmap Votes](./kanban-board-feature-roadmap-votes.md)
- [Progress Ring Workflow](./kanban-board-progress-ring-workflow.md)
- [Recruiting Pipeline](./kanban-board-recruiting-pipeline.md)
- [Release Readiness](./kanban-board-release-readiness.md)

## Files

- `src/blocks/application/kanban-board/kanban-board-bug-triage/index.tsx`

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
