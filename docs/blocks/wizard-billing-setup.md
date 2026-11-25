---
title: Billing Setup
description: Billing Setup wizard block.
category: Wizard
---

# Billing Setup

**Block:** `wizard-billing-setup` · **Category:** Wizard

[Open live preview](https://reui-unbound.pages.dev/?preview=wizard-billing-setup)

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
