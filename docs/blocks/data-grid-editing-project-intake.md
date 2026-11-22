---
title: Project Intake
description: Project Intake data grid block.
category: Editing
---

# Project Intake

**Block:** `data-grid-editing-project-intake` · **Category:** Editing

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-editing-3)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-editing-project-intake
```

## Usage

```tsx
import { ProjectIntakeBlock } from "@/blocks/data-grid-editing-project-intake"

export default function Page() {
  return <ProjectIntakeBlock />
}
```

## Files

- `src/blocks/data-grid/editing/project-intake/index.tsx`
- `src/blocks/data-grid/editing/project-intake/data.ts`

## Dependencies

- `@dnd-kit/core`
- `@dnd-kit/sortable`
- `@dnd-kit/utilities`
- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/frame`
- `avatar`
- `button`
- `dialog`
- `dropdown-menu`
- `input`
- `input-group`
- `popover`
- `select`
- `sonner`
- `switch`
