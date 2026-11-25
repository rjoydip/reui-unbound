---
title: Workspace Sign-In
description: Workspace Sign-In auth block.
category: Auth
---

# Workspace Sign-In

**Block:** `auth-workspace-sign-in` · **Category:** Auth

[Open live preview](https://reui-unbound.pages.dev/?preview=auth-workspace-sign-in)

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
