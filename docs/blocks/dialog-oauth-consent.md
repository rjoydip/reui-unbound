---
title: OAuth Consent
description: OAuth Consent dialog block.
category: Dialog
---

# OAuth Consent

OAuth Consent dialog block.

**Block:** `dialog-oauth-consent` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-oauth-consent)

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

## More in Dialog

- [Account Settings Modal](./dialog-account-settings-modal.md)
- [Bulk Email Invite](./dialog-bulk-email-invite.md)
- [Cancel Plan Survey](./dialog-cancel-plan-survey.md)
- [Connect App Picker](./dialog-connect-app-picker.md)
- [Duplicate Check](./dialog-duplicate-check.md)
- [Duration Picker](./dialog-duration-picker.md)

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
