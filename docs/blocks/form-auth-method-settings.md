---
title: Auth Method Settings
description: Auth Method Settings form block.
category: Form
---

# Auth Method Settings

Auth Method Settings form block.

**Block:** `form-auth-method-settings` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-auth-method-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-auth-method-settings
```

## Usage

```tsx
import { FormAuthMethodSettingsBlock } from "@/blocks/form-auth-method-settings"

export default function Page() {
  return <FormAuthMethodSettingsBlock />
}
```

## More in Form

- [API Keys Manager](./form-api-keys-manager.md)
- [Business Verification](./form-business-verification.md)
- [Checkout Setup](./form-checkout-setup.md)
- [Customer Onboarding](./form-customer-onboarding.md)
- [Deploy App Setup](./form-deploy-app-setup.md)
- [Invoice Creator](./form-invoice-creator.md)

## Files

- `src/blocks/application/form/form-auth-method-settings/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `checkbox`
- `input`
- `select`
- `switch`
- `tabs`
- `tooltip`
