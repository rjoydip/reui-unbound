---
title: API Keys Manager
description: API Keys Manager form block.
category: Form
---

# API Keys Manager

API Keys Manager form block.

**Block:** `form-api-keys-manager` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-api-keys-manager)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-api-keys-manager
```

## Usage

```tsx
import { FormApiKeysManagerBlock } from "@/blocks/form-api-keys-manager"

export default function Page() {
  return <FormApiKeysManagerBlock />
}
```

## More in Form

- [Auth Method Settings](./form-auth-method-settings.md)
- [Business Verification](./form-business-verification.md)
- [Checkout Setup](./form-checkout-setup.md)
- [Customer Onboarding](./form-customer-onboarding.md)
- [Deploy App Setup](./form-deploy-app-setup.md)
- [Invoice Creator](./form-invoice-creator.md)

## Files

- `src/blocks/application/form/form-api-keys-manager/index.tsx`

## Dependencies

- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `checkbox`
- `dialog`
- `field`
- `input`
- `select`
