---
title: Account Settings
description: Account Settings settings block.
category: Settings
---

# Account Settings

Account Settings settings block.

**Block:** `settings-account-settings` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-account-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-account-settings
```

## Usage

```tsx
import { SettingsAccountSettingsBlock } from "@/blocks/settings-account-settings"

export default function Page() {
  return <SettingsAccountSettingsBlock />
}
```

## More in Settings

- [API Integrations](./settings-api-integrations.md)
- [App Connections](./settings-app-connections.md)
- [Connected Apps](./settings-connected-apps.md)
- [General & Display](./settings-general-display.md)
- [General Settings](./settings-general-settings.md)
- [Import Sources](./settings-import-sources.md)

## Files

- `src/blocks/application/settings/settings-account-settings/index.tsx`

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
