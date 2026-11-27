---
title: Members
description: Members data grid block.
category: Base
---

# Members

Members data grid block.

**Block:** `data-grid-base-members` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-6)

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

## More in Base

- [API Requests](./data-grid-base-api-requests.md)
- [Contacts](./data-grid-base-contacts.md)
- [Customers](./data-grid-base-customers.md)
- [Modules](./data-grid-base-modules.md)
- [Opportunities](./data-grid-base-opportunities.md)
- [Rate Card](./data-grid-base-rate-card.md)

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
