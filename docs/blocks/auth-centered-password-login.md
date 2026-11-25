---
title: Centered Password Login
description: Centered Password Login auth block.
category: Auth
---

# Centered Password Login

**Block:** `auth-centered-password-login` · **Category:** Auth

[Open live preview](https://reui-unbound.pages.dev/?preview=auth-centered-password-login)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-centered-password-login
```

## Usage

```tsx
import { AuthCenteredPasswordLoginBlock } from "@/blocks/auth-centered-password-login"

export default function Page() {
  return <AuthCenteredPasswordLoginBlock />
}
```

## Files

- `src/blocks/application/auth/auth-centered-password-login/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `card`
- `field`
- `input`
- `input-group`
