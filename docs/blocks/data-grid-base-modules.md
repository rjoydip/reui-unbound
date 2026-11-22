---
title: Modules
description: Modules data grid block.
category: Base
---

# Modules

**Block:** `data-grid-base-modules` · **Category:** Base

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-7)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-modules
```

## Usage

```tsx
import { ProjectModulesBlock } from "@/blocks/data-grid-base-modules"

export default function Page() {
  return <ProjectModulesBlock />
}
```

## Files

- `src/blocks/data-grid/base/modules/index.tsx`
- `src/blocks/data-grid/base/modules/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/icon-tile`
- `button`
- `dropdown-menu`
- `input-group`
- `sonner`
