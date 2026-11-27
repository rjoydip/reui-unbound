---
title: Account Settings Modal
description: Account Settings Modal dialog block.
category: Dialog
---

# Account Settings Modal

Account Settings Modal dialog block.

**Block:** `dialog-account-settings-modal` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-account-settings-modal)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-account-settings-modal
```

## Usage

```tsx
import { DialogAccountSettingsModalBlock } from "@/blocks/dialog-account-settings-modal"

export default function Page() {
  return <DialogAccountSettingsModalBlock />
}
```

## More in Dialog

- [Bulk Email Invite](./dialog-bulk-email-invite.md)
- [Cancel Plan Survey](./dialog-cancel-plan-survey.md)
- [Connect App Picker](./dialog-connect-app-picker.md)
- [Duplicate Check](./dialog-duplicate-check.md)
- [Duration Picker](./dialog-duration-picker.md)
- [Finance Account Setup](./dialog-finance-account-setup.md)

## Files

- `src/blocks/application/dialog/dialog-account-settings-modal/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `dialog`
- `field`
- `input`
- `input-group`
- `select`
- `switch`
- `tabs`
- `textarea`
