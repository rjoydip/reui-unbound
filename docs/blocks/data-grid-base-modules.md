---
title: Modules
description: Modules data grid block.
category: Base
---

# Modules

Modules data grid block.

**Block:** `data-grid-base-modules` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-7)

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

## More in Base

- [API Requests](./data-grid-base-api-requests.md)
- [Contacts](./data-grid-base-contacts.md)
- [Customers](./data-grid-base-customers.md)
- [Members](./data-grid-base-members.md)
- [Opportunities](./data-grid-base-opportunities.md)
- [Rate Card](./data-grid-base-rate-card.md)

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
