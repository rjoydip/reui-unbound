---
title: Recruiting Pipeline
description: Recruiting Pipeline kanban-board block.
category: Kanban Board
---

# Recruiting Pipeline

Recruiting Pipeline kanban-board block.

**Block:** `kanban-board-recruiting-pipeline` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-recruiting-pipeline)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-recruiting-pipeline
```

## Usage

```tsx
import { KanbanBoardRecruitingPipelineBlock } from "@/blocks/kanban-board-recruiting-pipeline"

export default function Page() {
  return <KanbanBoardRecruitingPipelineBlock />
}
```

## More in Kanban Board

- [Access Review](./kanban-board-access-review.md)
- [Bug Triage](./kanban-board-bug-triage.md)
- [Collapsible Columns](./kanban-board-collapsible-columns.md)
- [Feature Roadmap Votes](./kanban-board-feature-roadmap-votes.md)
- [Progress Ring Workflow](./kanban-board-progress-ring-workflow.md)
- [Release Readiness](./kanban-board-release-readiness.md)

## Files

- `src/blocks/application/kanban-board/kanban-board-recruiting-pipeline/index.tsx`

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
