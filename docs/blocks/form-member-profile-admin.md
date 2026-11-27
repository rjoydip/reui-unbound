---
title: Member Profile Admin
description: Member Profile Admin form block.
category: Form
---

# Member Profile Admin

Member Profile Admin form block.

**Block:** `form-member-profile-admin` · **Category:** Form

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=form-member-profile-admin)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-member-profile-admin
```

## Usage

```tsx
import { FormMemberProfileAdminBlock } from "@/blocks/form-member-profile-admin"

export default function Page() {
  return <FormMemberProfileAdminBlock />
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

- `src/blocks/application/form/form-member-profile-admin/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `dropdown-menu`
- `input`
- `progress`
- `select`
- `switch`
- `tabs`
- `textarea`
- `tooltip`
