---
title: Fund Transfer
description: Fund Transfer wizard block.
category: Wizard
---

# Fund Transfer

Fund Transfer wizard block.

**Block:** `wizard-fund-transfer` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-fund-transfer)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-fund-transfer
```

## Usage

```tsx
import { WizardFundTransferBlock } from "@/blocks/wizard-fund-transfer"

export default function Page() {
  return <WizardFundTransferBlock />
}
```

## More in Wizard

- [Billing Setup](./wizard-billing-setup.md)
- [Plan Upgrade](./wizard-plan-upgrade.md)
- [Product Setup Wizard](./wizard-product-setup-wizard.md)
- [Send Invoice](./wizard-send-invoice.md)
- [Team Invitations](./wizard-team-invitations.md)
- [Vendor Onboarding](./wizard-vendor-onboarding.md)

## Files

- `src/blocks/application/wizard/wizard-fund-transfer/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/stepper`
- `avatar`
- `button`
- `input`
- `label`
- `select`
- `textarea`
