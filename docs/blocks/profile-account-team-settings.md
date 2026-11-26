---
title: Account & Team Settings
description: Account & Team Settings profile block.
category: Profile
---

# Account & Team Settings

Account & Team Settings profile block.

**Block:** `profile-account-team-settings` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-account-team-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-account-team-settings
```

## Usage

```tsx
import { ProfileAccountTeamSettingsBlock } from "@/blocks/profile-account-team-settings"

export default function Page() {
  return <ProfileAccountTeamSettingsBlock />
}
```

## More in Profile

- [Account Settings Hub](./profile-account-settings-hub.md)
- [Admin Permissions](./profile-admin-permissions.md)
- [Billing Settings](./profile-billing-settings.md)
- [Developer API Keys](./profile-developer-api-keys.md)
- [Mailbox Accounts](./profile-mailbox-accounts.md)
- [Meeting Capture](./profile-meeting-capture.md)

## Files

- `src/blocks/application/profile/profile-account-team-settings/index.tsx`

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
- `textarea`
