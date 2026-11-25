---
title: Photo Magic Link
description: Photo Magic Link auth block.
category: Auth
---

# Photo Magic Link

**Block:** `auth-photo-magic-link` · **Category:** Auth

[Open live preview](https://reui-unbound.pages.dev/?preview=auth-photo-magic-link)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-photo-magic-link
```

## Usage

```tsx
import { AuthPhotoMagicLinkBlock } from "@/blocks/auth-photo-magic-link"

export default function Page() {
  return <AuthPhotoMagicLinkBlock />
}
```

## Files

- `src/blocks/application/auth/auth-photo-magic-link/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input`
