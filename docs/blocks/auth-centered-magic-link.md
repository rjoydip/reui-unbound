---
title: Centered Magic Link
description: Centered Magic Link auth block.
category: Auth
---

# Centered Magic Link

**Block:** `auth-centered-magic-link` · **Category:** Auth

[Open live preview](https://reui-unbound.pages.dev/?preview=auth-centered-magic-link)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-centered-magic-link
```

## Usage

```tsx
import { AuthCenteredMagicLinkBlock } from "@/blocks/auth-centered-magic-link"

export default function Page() {
  return <AuthCenteredMagicLinkBlock />
}
```

## Files

- `src/blocks/application/auth/auth-centered-magic-link/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input-group`
