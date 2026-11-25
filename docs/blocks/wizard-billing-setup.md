---
title: Billing Setup
description: Billing Setup wizard block.
category: Wizard
---

# Billing Setup

**Block:** `wizard-billing-setup` · **Category:** Wizard

[Open live preview](https://reui-unbound.pages.dev/?preview=wizard-1)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/wizard-billing-setup
```

## Usage

```tsx
import { Wizard1Block } from "@/blocks/wizard-billing-setup"

export default function Page() {
  return <Wizard1Block />
}
```

## Files

- `src/blocks/application/wizard/wizard-1/index.tsx`

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
