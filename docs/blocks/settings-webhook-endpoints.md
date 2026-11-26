---
title: Webhook Endpoints
description: Webhook Endpoints settings block.
category: Settings
---

# Webhook Endpoints

Webhook Endpoints settings block.

**Block:** `settings-webhook-endpoints` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-webhook-endpoints)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-webhook-endpoints
```

## Usage

```tsx
import { SettingsWebhookEndpointsBlock } from "@/blocks/settings-webhook-endpoints"

export default function Page() {
  return <SettingsWebhookEndpointsBlock />
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

- `src/blocks/application/settings/settings-webhook-endpoints/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `dropdown-menu`
- `switch`
