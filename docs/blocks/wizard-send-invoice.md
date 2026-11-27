---
title: Send Invoice
description: Send Invoice wizard block.
category: Wizard
---

# Send Invoice

Send Invoice wizard block.

**Block:** `wizard-send-invoice` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-send-invoice)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-send-invoice
```

## Usage

```tsx
import { WizardSendInvoiceBlock } from "@/blocks/wizard-send-invoice"

export default function Page() {
  return <WizardSendInvoiceBlock />
}
```

## More in Wizard

- [Billing Setup](./wizard-billing-setup.md)
- [Fund Transfer](./wizard-fund-transfer.md)
- [Plan Upgrade](./wizard-plan-upgrade.md)
- [Product Setup Wizard](./wizard-product-setup-wizard.md)
- [Team Invitations](./wizard-team-invitations.md)
- [Vendor Onboarding](./wizard-vendor-onboarding.md)

## Files

- `src/blocks/application/wizard/wizard-send-invoice/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `input`
- `label`
- `select`
- `separator`
- `textarea`
