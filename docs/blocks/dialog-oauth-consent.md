---
title: OAuth Consent
description: OAuth Consent dialog block.
category: Dialog
---

# OAuth Consent

**Block:** `dialog-oauth-consent` · **Category:** Dialog

[Open live preview](https://reui-unbound.pages.dev/?preview=dialog-oauth-consent)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-oauth-consent
```

## Usage

```tsx
import { DialogOauthConsentBlock } from "@/blocks/dialog-oauth-consent"

export default function Page() {
  return <DialogOauthConsentBlock />
}
```

## Files

- `src/blocks/application/dialog/dialog-oauth-consent/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `dialog`
- `field`
- `radio-group`
- `svgs`
