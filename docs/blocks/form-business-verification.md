---
title: Business Verification
description: Business Verification form block.
category: Form
---

# Business Verification

Business Verification form block.

**Block:** `form-business-verification` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-business-verification)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-business-verification
```

## Usage

```tsx
import { FormBusinessVerificationBlock } from "@/blocks/form-business-verification"

export default function Page() {
  return <FormBusinessVerificationBlock />
}
```

## More in Form

- [API Keys Manager](./form-api-keys-manager.md)
- [Auth Method Settings](./form-auth-method-settings.md)
- [Checkout Setup](./form-checkout-setup.md)
- [Customer Onboarding](./form-customer-onboarding.md)
- [Deploy App Setup](./form-deploy-app-setup.md)
- [Invoice Creator](./form-invoice-creator.md)

## Files

- `src/blocks/application/form/form-business-verification/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/frame`
- `button`
- `dialog`
- `field`
- `input`
- `select`
- `textarea`
- `tooltip`
