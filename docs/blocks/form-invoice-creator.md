---
title: Invoice Creator
description: Invoice Creator form block.
category: Form
---

# Invoice Creator

Invoice Creator form block.

**Block:** `form-invoice-creator` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-invoice-creator)

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

## More in Form

- [API Keys Manager](./form-api-keys-manager.md)
- [Auth Method Settings](./form-auth-method-settings.md)
- [Business Verification](./form-business-verification.md)
- [Checkout Setup](./form-checkout-setup.md)
- [Customer Onboarding](./form-customer-onboarding.md)
- [Deploy App Setup](./form-deploy-app-setup.md)

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
