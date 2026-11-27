---
title: Framed Password Login
description: Framed Password Login auth block.
category: Auth
---

# Framed Password Login

Framed Password Login auth block.

**Block:** `auth-framed-password-login` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-framed-password-login)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-framed-password-login
```

## Usage

```tsx
import { AuthFramedPasswordLoginBlock } from "@/blocks/auth-framed-password-login"

export default function Page() {
  return <AuthFramedPasswordLoginBlock />
}
```

## More in Auth

- [Centered Magic Link](./auth-centered-magic-link.md)
- [Centered Method Picker](./auth-centered-method-picker.md)
- [Centered Password Login](./auth-centered-password-login.md)
- [Customer Quotes Login](./auth-customer-quotes-login.md)
- [Founder Story Login](./auth-founder-story-login.md)
- [Free Trial Signup](./auth-free-trial-signup.md)

## Files

- `src/blocks/application/auth/auth-framed-password-login/index.tsx`

## Dependencies

- `@remixicon/react`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/frame`
- `button`
- `field`
- `input`
- `input-group`
