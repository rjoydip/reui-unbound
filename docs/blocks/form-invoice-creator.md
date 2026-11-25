---
title: Invoice Creator
description: Invoice Creator form block.
category: Form
---

# Invoice Creator

**Block:** `form-invoice-creator` · **Category:** Form

[Open live preview](https://reui-unbound.pages.dev/?preview=form-invoice-creator)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-invoice-creator
```

## Usage

```tsx
import { FormInvoiceCreatorBlock } from "@/blocks/form-invoice-creator"

export default function Page() {
  return <FormInvoiceCreatorBlock />
}
```

## Files

- `src/blocks/application/form/form-invoice-creator/index.tsx`

## Dependencies

- `date-fns`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `calendar`
- `card`
- `combobox`
- `field`
- `input`
- `input-group`
- `popover`
- `select`
- `separator`
- `table`
- `tooltip`
