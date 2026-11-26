---
title: Sales Pipeline
description: Sales Pipeline kanban-board block.
category: Kanban Board
---

# Sales Pipeline

Sales Pipeline kanban-board block.

**Block:** `kanban-board-sales-pipeline` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-sales-pipeline)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-sales-pipeline
```

## Usage

```tsx
import { KanbanBoardSalesPipelineBlock } from "@/blocks/kanban-board-sales-pipeline"

export default function Page() {
  return <KanbanBoardSalesPipelineBlock />
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

- `src/blocks/application/kanban-board/kanban-board-sales-pipeline/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/kanban`
- `@reui-unbound/rating`
- `avatar`
- `button`
- `checkbox`
- `dialog`
- `input`
- `popover`
