---
title: Collapsible Columns
description: Collapsible Columns kanban-board block.
category: Kanban Board
---

# Collapsible Columns

Collapsible Columns kanban-board block.

**Block:** `kanban-board-collapsible-columns` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-collapsible-columns)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-collapsible-columns
```

## Usage

```tsx
import { KanbanBoardCollapsibleColumnsBlock } from "@/blocks/kanban-board-collapsible-columns"

export default function Page() {
  return <KanbanBoardCollapsibleColumnsBlock />
}
```

## More in Kanban Board

- [Access Review](./kanban-board-access-review.md)
- [Bug Triage](./kanban-board-bug-triage.md)
- [Feature Roadmap Votes](./kanban-board-feature-roadmap-votes.md)
- [Progress Ring Workflow](./kanban-board-progress-ring-workflow.md)
- [Recruiting Pipeline](./kanban-board-recruiting-pipeline.md)
- [Release Readiness](./kanban-board-release-readiness.md)

## Files

- `src/blocks/application/kanban-board/kanban-board-collapsible-columns/index.tsx`

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
