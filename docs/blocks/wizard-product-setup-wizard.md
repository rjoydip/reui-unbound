---
title: Product Setup Wizard
description: Product Setup Wizard wizard block.
category: Wizard
---

# Product Setup Wizard

Product Setup Wizard wizard block.

**Block:** `wizard-product-setup-wizard` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-product-setup-wizard)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-product-setup-wizard
```

## Usage

```tsx
import { WizardProductSetupWizardBlock } from "@/blocks/wizard-product-setup-wizard"

export default function Page() {
  return <WizardProductSetupWizardBlock />
}
```

## More in Wizard

- [Billing Setup](./wizard-billing-setup.md)
- [Fund Transfer](./wizard-fund-transfer.md)
- [Plan Upgrade](./wizard-plan-upgrade.md)
- [Send Invoice](./wizard-send-invoice.md)
- [Team Invitations](./wizard-team-invitations.md)
- [Vendor Onboarding](./wizard-vendor-onboarding.md)

## Files

- `src/blocks/application/wizard/wizard-product-setup-wizard/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/stepper`
- `button`
- `collapsible`
- `input`
- `label`
- `radio-group`
- `select`
- `separator`
- `switch`
- `textarea`
