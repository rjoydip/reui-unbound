---
title: Billing Setup
description: Billing Setup wizard block.
category: Wizard
---

# Billing Setup

Billing Setup wizard block.

**Block:** `wizard-billing-setup` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-billing-setup)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-billing-setup
```

## Usage

```tsx
import { WizardBillingSetupBlock } from "@/blocks/wizard-billing-setup"

export default function Page() {
  return <WizardBillingSetupBlock />
}
```

## More in Wizard

- [Fund Transfer](./wizard-fund-transfer.md)
- [Plan Upgrade](./wizard-plan-upgrade.md)
- [Product Setup Wizard](./wizard-product-setup-wizard.md)
- [Send Invoice](./wizard-send-invoice.md)
- [Team Invitations](./wizard-team-invitations.md)
- [Vendor Onboarding](./wizard-vendor-onboarding.md)

## Files

- `src/blocks/application/wizard/wizard-billing-setup/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/stepper`
- `button`
- `input`
- `label`
- `select`
- `switch`
