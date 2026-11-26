---
title: Launch Checklist
description: Launch Checklist dialog block.
category: Dialog
---

# Launch Checklist

Launch Checklist dialog block.

**Block:** `dialog-launch-checklist` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-launch-checklist)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-launch-checklist
```

## Usage

```tsx
import { DialogLaunchChecklistBlock } from "@/blocks/dialog-launch-checklist"

export default function Page() {
  return <DialogLaunchChecklistBlock />
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

- `src/blocks/application/dialog/dialog-launch-checklist/index.tsx`

## Dependencies

- `@remixicon/react`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `accordion`
- `button`
- `dialog`
- `input`
- `input-group`
- `item`
- `svgs`
- `tooltip`
