---
title: Release Readiness
description: Release Readiness kanban-board block.
category: Kanban Board
---

# Release Readiness

Release Readiness kanban-board block.

**Block:** `kanban-board-release-readiness` · **Category:** Kanban Board

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=kanban-board-release-readiness)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/kanban-board-release-readiness
```

## Usage

```tsx
import { KanbanBoardReleaseReadinessBlock } from "@/blocks/kanban-board-release-readiness"

export default function Page() {
  return <KanbanBoardReleaseReadinessBlock />
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

- `src/blocks/application/kanban-board/kanban-board-release-readiness/index.tsx`

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
