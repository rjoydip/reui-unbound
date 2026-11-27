---
title: Work Email Continue
description: Work Email Continue auth block.
category: Auth
---

# Work Email Continue

Work Email Continue auth block.

**Block:** `auth-work-email-continue` · **Category:** Auth

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=auth-work-email-continue)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/auth-work-email-continue
```

## Usage

```tsx
import { AuthWorkEmailContinueBlock } from "@/blocks/auth-work-email-continue"

export default function Page() {
  return <AuthWorkEmailContinueBlock />
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

- `src/blocks/application/auth/auth-work-email-continue/index.tsx`

## Dependencies

- `@remixicon/react`
- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `field`
- `input`
- `svgs`
