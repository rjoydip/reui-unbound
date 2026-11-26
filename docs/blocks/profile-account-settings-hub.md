---
title: Account Settings Hub
description: Account Settings Hub profile block.
category: Profile
---

# Account Settings Hub

Account Settings Hub profile block.

**Block:** `profile-account-settings-hub` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-account-settings-hub)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-account-settings-hub
```

## Usage

```tsx
import { ProfileAccountSettingsHubBlock } from "@/blocks/profile-account-settings-hub"

export default function Page() {
  return <ProfileAccountSettingsHubBlock />
}
```

## More in Profile

- [Account & Team Settings](./profile-account-team-settings.md)
- [Admin Permissions](./profile-admin-permissions.md)
- [Billing Settings](./profile-billing-settings.md)
- [Developer API Keys](./profile-developer-api-keys.md)
- [Mailbox Accounts](./profile-mailbox-accounts.md)
- [Meeting Capture](./profile-meeting-capture.md)

## Files

- `src/blocks/application/profile/profile-account-settings-hub/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `input`
- `select`
- `switch`
