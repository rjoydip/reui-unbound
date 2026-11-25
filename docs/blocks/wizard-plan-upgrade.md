---
title: Plan Upgrade
description: Plan Upgrade wizard block.
category: Wizard
---

# Plan Upgrade

**Block:** `wizard-plan-upgrade` · **Category:** Wizard

[Open live preview](https://reui-unbound.pages.dev/?preview=wizard-plan-upgrade)

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
