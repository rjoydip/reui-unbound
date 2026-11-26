---
title: Magic Link Card
description: Magic Link Card auth block.
category: Auth
---

# Magic Link Card

Magic Link Card auth block.

**Block:** `auth-magic-link-card` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-magic-link-card)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-magic-link-card
```

## Usage

```tsx
import { AuthMagicLinkCardBlock } from "@/blocks/auth-magic-link-card"

export default function Page() {
  return <AuthMagicLinkCardBlock />
}
```

## More in Auth

- [Centered Magic Link](./auth-centered-magic-link.md)
- [Centered Method Picker](./auth-centered-method-picker.md)
- [Centered Password Login](./auth-centered-password-login.md)
- [Customer Quotes Login](./auth-customer-quotes-login.md)
- [Founder Story Login](./auth-founder-story-login.md)
- [Framed Password Login](./auth-framed-password-login.md)

## Files

- `src/blocks/application/auth/auth-magic-link-card/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input-group`
- `svgs`
