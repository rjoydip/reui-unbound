---
title: Checkout Setup
description: Checkout Setup form block.
category: Form
---

# Checkout Setup

**Block:** `form-checkout-setup` · **Category:** Form

[Open live preview](https://reui-unbound.pages.dev/?preview=form-checkout-setup)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/form-checkout-setup
```

## Usage

```tsx
import { FormCheckoutSetupBlock } from "@/blocks/form-checkout-setup"

export default function Page() {
  return <FormCheckoutSetupBlock />
}
```

## Files

- `src/blocks/application/form/form-checkout-setup/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/frame`
- `button`
- `checkbox`
- `field`
- `input-group`
- `select`
- `tooltip`
