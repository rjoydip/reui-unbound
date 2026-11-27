---
title: Plan Upgrade
description: Plan Upgrade wizard block.
category: Wizard
---

# Plan Upgrade

Plan Upgrade wizard block.

**Block:** `wizard-plan-upgrade` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-plan-upgrade)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-plan-upgrade
```

## Usage

```tsx
import { WizardPlanUpgradeBlock } from "@/blocks/wizard-plan-upgrade"

export default function Page() {
  return <WizardPlanUpgradeBlock />
}
```

## More in Wizard

- [Billing Setup](./wizard-billing-setup.md)
- [Fund Transfer](./wizard-fund-transfer.md)
- [Product Setup Wizard](./wizard-product-setup-wizard.md)
- [Send Invoice](./wizard-send-invoice.md)
- [Team Invitations](./wizard-team-invitations.md)
- [Vendor Onboarding](./wizard-vendor-onboarding.md)

## Files

- `src/blocks/application/wizard/wizard-plan-upgrade/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/stepper`
- `alert`
- `button`
- `input`
- `radio-group`
- `select`
- `slider`
