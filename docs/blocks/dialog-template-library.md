---
title: Template Library
description: Template Library dialog block.
category: Dialog
---

# Template Library

Template Library dialog block.

**Block:** `dialog-template-library` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-template-library)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-template-library
```

## Usage

```tsx
import { DialogTemplateLibraryBlock } from "@/blocks/dialog-template-library"

export default function Page() {
  return <DialogTemplateLibraryBlock />
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

- `src/blocks/application/dialog/dialog-template-library/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `dialog`
- `empty`
- `input-group`
- `radio-group`
