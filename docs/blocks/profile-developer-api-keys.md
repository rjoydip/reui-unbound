---
title: Developer API Keys
description: Developer API Keys profile block.
category: Profile
---

# Developer API Keys

Developer API Keys profile block.

**Block:** `profile-developer-api-keys` · **Category:** Profile

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=profile-developer-api-keys)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/profile-developer-api-keys
```

## Usage

```tsx
import { ProfileDeveloperApiKeysBlock } from "@/blocks/profile-developer-api-keys"

export default function Page() {
  return <ProfileDeveloperApiKeysBlock />
}
```

## More in Profile

- [Account & Team Settings](./profile-account-team-settings.md)
- [Account Settings Hub](./profile-account-settings-hub.md)
- [Admin Permissions](./profile-admin-permissions.md)
- [Billing Settings](./profile-billing-settings.md)
- [Mailbox Accounts](./profile-mailbox-accounts.md)
- [Meeting Capture](./profile-meeting-capture.md)

## Files

- `src/blocks/application/profile/profile-developer-api-keys/index.tsx`

## Dependencies

- `@northstar/sdk`
- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `dialog`
- `dropdown-menu`
- `input`
- `radio-group`
- `select`
- `table`
- `tabs`
