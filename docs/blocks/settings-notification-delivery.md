---
title: Notification Delivery
description: Notification Delivery settings block.
category: Settings
---

# Notification Delivery

Notification Delivery settings block.

**Block:** `settings-notification-delivery` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-notification-delivery)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-notification-delivery
```

## Usage

```tsx
import { SettingsNotificationDeliveryBlock } from "@/blocks/settings-notification-delivery"

export default function Page() {
  return <SettingsNotificationDeliveryBlock />
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

- `src/blocks/application/settings/settings-notification-delivery/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `collapsible`
- `select`
- `switch`
