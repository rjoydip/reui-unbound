---
title: Personal Profile
description: Personal Profile profile block.
category: Profile
---

# Personal Profile

Personal Profile profile block.

**Block:** `profile-personal-profile` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-personal-profile)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-personal-profile
```

## Usage

```tsx
import { ProfilePersonalProfileBlock } from "@/blocks/profile-personal-profile"

export default function Page() {
  return <ProfilePersonalProfileBlock />
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

- `src/blocks/application/profile/profile-personal-profile/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `input`
- `select`
