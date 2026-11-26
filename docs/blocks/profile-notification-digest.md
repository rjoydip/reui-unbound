---
title: Notification Digest
description: Notification Digest profile block.
category: Profile
---

# Notification Digest

Notification Digest profile block.

**Block:** `profile-notification-digest` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-notification-digest)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-notification-digest
```

## Usage

```tsx
import { ProfileNotificationDigestBlock } from "@/blocks/profile-notification-digest"

export default function Page() {
  return <ProfileNotificationDigestBlock />
}
```

## More in Profile

- [Account & Team Settings](./profile-account-team-settings.md)
- [Account Settings Hub](./profile-account-settings-hub.md)
- [Admin Permissions](./profile-admin-permissions.md)
- [Billing Settings](./profile-billing-settings.md)
- [Developer API Keys](./profile-developer-api-keys.md)
- [Mailbox Accounts](./profile-mailbox-accounts.md)

## Files

- `src/blocks/application/profile/profile-notification-digest/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `checkbox`
- `switch`
