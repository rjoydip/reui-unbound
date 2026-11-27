---
title: Workspace Sign-In
description: Workspace Sign-In auth block.
category: Auth
---

# Workspace Sign-In

Workspace Sign-In auth block.

**Block:** `auth-workspace-sign-in` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-workspace-sign-in)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-workspace-sign-in
```

## Usage

```tsx
import { AuthWorkspaceSignInBlock } from "@/blocks/auth-workspace-sign-in"

export default function Page() {
  return <AuthWorkspaceSignInBlock />
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

- `src/blocks/application/auth/auth-workspace-sign-in/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input`
- `input-group`
