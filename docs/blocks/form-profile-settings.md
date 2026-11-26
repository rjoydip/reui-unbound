---
title: Profile Settings
description: Profile Settings form block.
category: Form
---

# Profile Settings

Profile Settings form block.

**Block:** `form-profile-settings` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-profile-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-profile-settings
```

## Usage

```tsx
import { FormProfileSettingsBlock } from "@/blocks/form-profile-settings"

export default function Page() {
  return <FormProfileSettingsBlock />
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

- `src/blocks/application/form/form-profile-settings/index.tsx`

## Dependencies

- `cn`
- `date-fns`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `calendar`
- `card`
- `combobox`
- `field`
- `input`
- `popover`
- `scroll-area`
- `select`
- `switch`
- `tooltip`
