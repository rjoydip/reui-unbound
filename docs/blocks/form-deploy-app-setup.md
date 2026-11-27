---
title: Deploy App Setup
description: Deploy App Setup form block.
category: Form
---

# Deploy App Setup

Deploy App Setup form block.

**Block:** `form-deploy-app-setup` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-deploy-app-setup)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-deploy-app-setup
```

## Usage

```tsx
import { FormDeployAppSetupBlock } from "@/blocks/form-deploy-app-setup"

export default function Page() {
  return <FormDeployAppSetupBlock />
}
```

## More in Form

- [API Keys Manager](./form-api-keys-manager.md)
- [Auth Method Settings](./form-auth-method-settings.md)
- [Business Verification](./form-business-verification.md)
- [Checkout Setup](./form-checkout-setup.md)
- [Customer Onboarding](./form-customer-onboarding.md)
- [Invoice Creator](./form-invoice-creator.md)

## Files

- `src/blocks/application/form/form-deploy-app-setup/index.tsx`

## Dependencies

- `cn`
- `lucide-react`
- `sonner`

## Registry dependencies

- `button`
- `input`
- `input-group`
- `select`
- `spinner`
- `textarea`
