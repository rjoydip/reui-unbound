---
title: Customer Onboarding
description: Customer Onboarding form block.
category: Form
---

# Customer Onboarding

Customer Onboarding form block.

**Block:** `form-customer-onboarding` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-customer-onboarding)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-customer-onboarding
```

## Usage

```tsx
import { FormCustomerOnboardingBlock } from "@/blocks/form-customer-onboarding"

export default function Page() {
  return <FormCustomerOnboardingBlock />
}
```

## More in Form

- [API Keys Manager](./form-api-keys-manager.md)
- [Auth Method Settings](./form-auth-method-settings.md)
- [Business Verification](./form-business-verification.md)
- [Checkout Setup](./form-checkout-setup.md)
- [Deploy App Setup](./form-deploy-app-setup.md)
- [Invoice Creator](./form-invoice-creator.md)

## Files

- `src/blocks/application/form/form-customer-onboarding/index.tsx`

## Dependencies

- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `combobox`
- `input-group`
- `radio-group`
- `select`
- `spinner`
- `switch`
- `textarea`
