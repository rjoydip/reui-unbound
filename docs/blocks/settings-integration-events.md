---
title: Integration Events
description: Integration Events settings block.
category: Settings
---

# Integration Events

Integration Events settings block.

**Block:** `settings-integration-events` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-integration-events)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-integration-events
```

## Usage

```tsx
import { SettingsIntegrationEventsBlock } from "@/blocks/settings-integration-events"

export default function Page() {
  return <SettingsIntegrationEventsBlock />
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

- `src/blocks/application/settings/settings-integration-events/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `switch`
