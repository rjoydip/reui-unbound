---
title: Members
description: Members data grid block.
category: Base
---

# Members

**Block:** `data-grid-base-members` · **Category:** Base

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-6)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-members
```

## Usage

```tsx
import { TeamMembersBlock } from "@/blocks/data-grid-base-members"

export default function Page() {
  return <TeamMembersBlock />
}
```

## Files

- `src/blocks/data-grid/base/members/index.tsx`
- `src/blocks/data-grid/base/members/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `avatar`
- `button`
- `dropdown-menu`
- `input-group`
- `sonner`
