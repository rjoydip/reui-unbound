---
title: Photo Magic Link
description: Photo Magic Link auth block.
category: Auth
---

# Photo Magic Link

Photo Magic Link auth block.

**Block:** `auth-photo-magic-link` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-photo-magic-link)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-photo-magic-link
```

## Usage

```tsx
import { AuthPhotoMagicLinkBlock } from "@/blocks/auth-photo-magic-link"

export default function Page() {
  return <AuthPhotoMagicLinkBlock />
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

- `src/blocks/application/auth/auth-photo-magic-link/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input`
