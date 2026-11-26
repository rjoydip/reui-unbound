---
title: Contacts
description: Contacts data grid block.
category: Base
---

# Contacts

Contacts data grid block.

**Block:** `data-grid-base-contacts` · **Category:** Base

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-contacts
```

## Usage

```tsx
import { LeadScoringContactsBlock } from "@/blocks/data-grid-base-contacts"

export default function Page() {
  return <LeadScoringContactsBlock />
}
```

## More in Base

- [API Requests](./data-grid-base-api-requests.md)
- [Customers](./data-grid-base-customers.md)
- [Members](./data-grid-base-members.md)
- [Modules](./data-grid-base-modules.md)
- [Opportunities](./data-grid-base-opportunities.md)
- [Rate Card](./data-grid-base-rate-card.md)

## Files

- `src/blocks/data-grid/base/contacts/index.tsx`
- `src/blocks/data-grid/base/contacts/parts.tsx`
- `src/blocks/data-grid/base/contacts/contact-filters.tsx`
- `src/blocks/data-grid/base/contacts/contact-sheets.tsx`
- `src/blocks/data-grid/base/contacts/data.ts`

## Dependencies

- `@tanstack/react-table`
- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/data-grid`
- `@reui-unbound/filters`
- `@reui-unbound/frame`
- `@reui-unbound/number-field`
- `avatar`
- `button`
- `dropdown-menu`
- `field`
- `input`
- `input-group`
- `kbd`
- `select`
- `sheet`
- `sonner`
- `tooltip`
