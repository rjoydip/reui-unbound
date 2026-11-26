---
title: Duplicate Check
description: Duplicate Check dialog block.
category: Dialog
---

# Duplicate Check

Duplicate Check dialog block.

**Block:** `dialog-duplicate-check` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-duplicate-check)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-duplicate-check
```

## Usage

```tsx
import { DialogDuplicateCheckBlock } from "@/blocks/dialog-duplicate-check"

export default function Page() {
  return <DialogDuplicateCheckBlock />
}
```

## More in Dialog

- [Account Settings Modal](./dialog-account-settings-modal.md)
- [Bulk Email Invite](./dialog-bulk-email-invite.md)
- [Cancel Plan Survey](./dialog-cancel-plan-survey.md)
- [Connect App Picker](./dialog-connect-app-picker.md)
- [Duration Picker](./dialog-duration-picker.md)
- [Finance Account Setup](./dialog-finance-account-setup.md)

## Files

- `src/blocks/application/dialog/dialog-duplicate-check/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `dialog`
