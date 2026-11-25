---
title: Framed Password Login
description: Framed Password Login auth block.
category: Auth
---

# Framed Password Login

**Block:** `auth-framed-password-login` · **Category:** Auth

[Open live preview](https://reui-unbound.pages.dev/?preview=auth-framed-password-login)

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
