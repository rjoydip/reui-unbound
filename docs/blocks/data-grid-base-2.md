---
title: Contacts
description: Contacts data grid block.
category: Base
---

# Contacts

**Block:** `data-grid-base-2` · **Category:** Base

[Open live preview](https://reui-unbound.pages.dev/?preview=data-grid-base-2)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-2
```

## Usage

```tsx
import { LeadScoringContactsBlock } from "@/blocks/data-grid-base-2"

export default function Page() {
  return <LeadScoringContactsBlock />
}
```

## Files

- `src/blocks/data-grid-base-2/index.tsx`
- `src/blocks/data-grid-base-2/parts.tsx`
- `src/blocks/data-grid-base-2/contact-filters.tsx`
- `src/blocks/data-grid-base-2/contact-sheets.tsx`
- `src/blocks/data-grid-base-2/data.ts`

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
