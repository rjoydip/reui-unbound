---
title: Finance Account Setup
description: Finance Account Setup dialog block.
category: Dialog
---

# Finance Account Setup

Finance Account Setup dialog block.

**Block:** `dialog-finance-account-setup` · **Category:** Dialog

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=dialog-finance-account-setup)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/dialog-finance-account-setup
```

## Usage

```tsx
import { DialogFinanceAccountSetupBlock } from "@/blocks/dialog-finance-account-setup"

export default function Page() {
  return <DialogFinanceAccountSetupBlock />
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

- `src/blocks/application/dialog/dialog-finance-account-setup/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `dialog`
- `field`
- `input`
- `input-group`
