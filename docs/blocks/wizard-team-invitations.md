---
title: Team Invitations
description: Team Invitations wizard block.
category: Wizard
---

# Team Invitations

Team Invitations wizard block.

**Block:** `wizard-team-invitations` · **Category:** Wizard

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=wizard-team-invitations)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-team-invitations
```

## Usage

```tsx
import { WizardTeamInvitationsBlock } from "@/blocks/wizard-team-invitations"

export default function Page() {
  return <WizardTeamInvitationsBlock />
}
```

## More in Wizard

- [Billing Setup](./wizard-billing-setup.md)
- [Fund Transfer](./wizard-fund-transfer.md)
- [Plan Upgrade](./wizard-plan-upgrade.md)
- [Product Setup Wizard](./wizard-product-setup-wizard.md)
- [Send Invoice](./wizard-send-invoice.md)
- [Vendor Onboarding](./wizard-vendor-onboarding.md)

## Files

- `src/blocks/application/wizard/wizard-team-invitations/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/stepper`
- `button`
- `input`
- `select`
- `textarea`
