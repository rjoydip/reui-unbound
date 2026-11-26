---
title: Notification Channels
description: Notification Channels settings block.
category: Settings
---

# Notification Channels

Notification Channels settings block.

**Block:** `settings-notification-channels` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-notification-channels)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-notification-channels
```

## Usage

```tsx
import { SettingsNotificationChannelsBlock } from "@/blocks/settings-notification-channels"

export default function Page() {
  return <SettingsNotificationChannelsBlock />
}
```

## More in Settings

- [Account Settings](./settings-account-settings.md)
- [API Integrations](./settings-api-integrations.md)
- [App Connections](./settings-app-connections.md)
- [Connected Apps](./settings-connected-apps.md)
- [General & Display](./settings-general-display.md)
- [General Settings](./settings-general-settings.md)

## Files

- `src/blocks/application/settings/settings-notification-channels/index.tsx`


## Registry dependencies

- `checkbox`
- `table`
- `tabs`
