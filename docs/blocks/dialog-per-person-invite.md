---
title: Per-Person Invite
description: Per-Person Invite dialog block.
category: Dialog
---

# Per-Person Invite

Per-Person Invite dialog block.

**Block:** `dialog-per-person-invite` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-per-person-invite)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-per-person-invite
```

## Usage

```tsx
import { DialogPerPersonInviteBlock } from "@/blocks/dialog-per-person-invite"

export default function Page() {
  return <DialogPerPersonInviteBlock />
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

- `src/blocks/application/dialog/dialog-per-person-invite/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `button`
- `dialog`
- `input`
- `select`
