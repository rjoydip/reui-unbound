---
title: Admin Permissions
description: Admin Permissions profile block.
category: Profile
---

# Admin Permissions

Admin Permissions profile block.

**Block:** `profile-admin-permissions` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-admin-permissions)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-admin-permissions
```

## Usage

```tsx
import { ProfileAdminPermissionsBlock } from "@/blocks/profile-admin-permissions"

export default function Page() {
  return <ProfileAdminPermissionsBlock />
}
```

## More in Profile

- [Account & Team Settings](./profile-account-team-settings.md)
- [Account Settings Hub](./profile-account-settings-hub.md)
- [Billing Settings](./profile-billing-settings.md)
- [Developer API Keys](./profile-developer-api-keys.md)
- [Mailbox Accounts](./profile-mailbox-accounts.md)
- [Meeting Capture](./profile-meeting-capture.md)

## Files

- `src/blocks/application/profile/profile-admin-permissions/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `checkbox`
- `input`
- `select`
- `switch`
- `tabs`
