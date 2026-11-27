---
title: Photo Split Login
description: Photo Split Login auth block.
category: Auth
---

# Photo Split Login

Photo Split Login auth block.

**Block:** `auth-photo-split-login` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-photo-split-login)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-photo-split-login
```

## Usage

```tsx
import { AuthPhotoSplitLoginBlock } from "@/blocks/auth-photo-split-login"

export default function Page() {
  return <AuthPhotoSplitLoginBlock />
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

- `src/blocks/application/auth/auth-photo-split-login/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input`
- `input-group`
