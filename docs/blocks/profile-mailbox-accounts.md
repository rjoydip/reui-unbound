---
title: Mailbox Accounts
description: Mailbox Accounts profile block.
category: Profile
---

# Mailbox Accounts

Mailbox Accounts profile block.

**Block:** `profile-mailbox-accounts` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-mailbox-accounts)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-mailbox-accounts
```

## Usage

```tsx
import { ProfileMailboxAccountsBlock } from "@/blocks/profile-mailbox-accounts"

export default function Page() {
  return <ProfileMailboxAccountsBlock />
}
```

## More in Profile

- [Account & Team Settings](./profile-account-team-settings.md)
- [Account Settings Hub](./profile-account-settings-hub.md)
- [Admin Permissions](./profile-admin-permissions.md)
- [Billing Settings](./profile-billing-settings.md)
- [Developer API Keys](./profile-developer-api-keys.md)
- [Meeting Capture](./profile-meeting-capture.md)

## Files

- `src/blocks/application/profile/profile-mailbox-accounts/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `dropdown-menu`
- `switch`
