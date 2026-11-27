---
title: Billing Settings
description: Billing Settings profile block.
category: Profile
---

# Billing Settings

Billing Settings profile block.

**Block:** `profile-billing-settings` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-billing-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-billing-settings
```

## Usage

```tsx
import { ProfileBillingSettingsBlock } from "@/blocks/profile-billing-settings"

export default function Page() {
  return <ProfileBillingSettingsBlock />
}
```

## More in Profile

- [Account & Team Settings](./profile-account-team-settings.md)
- [Account Settings Hub](./profile-account-settings-hub.md)
- [Admin Permissions](./profile-admin-permissions.md)
- [Developer API Keys](./profile-developer-api-keys.md)
- [Mailbox Accounts](./profile-mailbox-accounts.md)
- [Meeting Capture](./profile-meeting-capture.md)

## Files

- `src/blocks/application/profile/profile-billing-settings/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `table`
