---
title: Invite-Only Sign-In
description: Invite-Only Sign-In auth block.
category: Auth
---

# Invite-Only Sign-In

Invite-Only Sign-In auth block.

**Block:** `auth-invite-only-sign-in` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-invite-only-sign-in)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-invite-only-sign-in
```

## Usage

```tsx
import { AuthInviteOnlySignInBlock } from "@/blocks/auth-invite-only-sign-in"

export default function Page() {
  return <AuthInviteOnlySignInBlock />
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

- `src/blocks/application/auth/auth-invite-only-sign-in/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `card`
- `field`
- `input-group`
