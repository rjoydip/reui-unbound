---
title: Social Proof Login
description: Social Proof Login auth block.
category: Auth
---

# Social Proof Login

Social Proof Login auth block.

**Block:** `auth-social-proof-login` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-social-proof-login)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-social-proof-login
```

## Usage

```tsx
import { AuthSocialProofLoginBlock } from "@/blocks/auth-social-proof-login"

export default function Page() {
  return <AuthSocialProofLoginBlock />
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

- `src/blocks/application/auth/auth-social-proof-login/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `avatar`
- `button`
- `field`
- `input`
- `input-group`
- `svgs`
