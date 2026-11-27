---
title: Bulk Email Invite
description: Bulk Email Invite dialog block.
category: Dialog
---

# Bulk Email Invite

Bulk Email Invite dialog block.

**Block:** `dialog-bulk-email-invite` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-bulk-email-invite)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-bulk-email-invite
```

## Usage

```tsx
import { DialogBulkEmailInviteBlock } from "@/blocks/dialog-bulk-email-invite"

export default function Page() {
  return <DialogBulkEmailInviteBlock />
}
```

## More in Dialog

- [Account Settings Modal](./dialog-account-settings-modal.md)
- [Cancel Plan Survey](./dialog-cancel-plan-survey.md)
- [Connect App Picker](./dialog-connect-app-picker.md)
- [Duplicate Check](./dialog-duplicate-check.md)
- [Duration Picker](./dialog-duration-picker.md)
- [Finance Account Setup](./dialog-finance-account-setup.md)

## Files

- `src/blocks/application/dialog/dialog-bulk-email-invite/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `dialog`
- `input`
- `label`
- `select`
