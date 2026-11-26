---
title: Free Trial Signup
description: Free Trial Signup auth block.
category: Auth
---

# Free Trial Signup

Free Trial Signup auth block.

**Block:** `auth-free-trial-signup` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-free-trial-signup)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-free-trial-signup
```

## Usage

```tsx
import { AuthFreeTrialSignupBlock } from "@/blocks/auth-free-trial-signup"

export default function Page() {
  return <AuthFreeTrialSignupBlock />
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

- `src/blocks/application/auth/auth-free-trial-signup/index.tsx`

## Dependencies

- `@remixicon/react`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/frame`
- `button`
- `field`
- `input`
- `input-group`
