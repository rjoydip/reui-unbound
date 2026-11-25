---
title: Invite-Only Sign-In
description: Invite-Only Sign-In auth block.
category: Auth
---

# Invite-Only Sign-In

**Block:** `auth-invite-only-sign-in` · **Category:** Auth

[Open live preview](https://reui-unbound.pages.dev/?preview=auth-invite-only-sign-in)

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
