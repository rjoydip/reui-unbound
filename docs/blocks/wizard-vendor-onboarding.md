---
title: Vendor Onboarding
description: Vendor Onboarding wizard block.
category: Wizard
---

# Vendor Onboarding

Vendor Onboarding wizard block.

**Block:** `wizard-vendor-onboarding` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-vendor-onboarding)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-vendor-onboarding
```

## Usage

```tsx
import { WizardVendorOnboardingBlock } from "@/blocks/wizard-vendor-onboarding"

export default function Page() {
  return <WizardVendorOnboardingBlock />
}
```

## More in Wizard

- [Billing Setup](./wizard-billing-setup.md)
- [Fund Transfer](./wizard-fund-transfer.md)
- [Plan Upgrade](./wizard-plan-upgrade.md)
- [Product Setup Wizard](./wizard-product-setup-wizard.md)
- [Send Invoice](./wizard-send-invoice.md)
- [Team Invitations](./wizard-team-invitations.md)

## Files

- `src/blocks/application/wizard/wizard-vendor-onboarding/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/stepper`
- `button`
- `checkbox`
- `input`
- `label`
- `select`
- `textarea`
