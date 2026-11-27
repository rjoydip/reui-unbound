---
title: App Connections
description: App Connections settings block.
category: Settings
---

# App Connections

App Connections settings block.

**Block:** `settings-app-connections` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-app-connections)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-app-connections
```

## Usage

```tsx
import { SettingsAppConnectionsBlock } from "@/blocks/settings-app-connections"

export default function Page() {
  return <SettingsAppConnectionsBlock />
}
```

## More in Settings

- [Account Settings](./settings-account-settings.md)
- [API Integrations](./settings-api-integrations.md)
- [Connected Apps](./settings-connected-apps.md)
- [General & Display](./settings-general-display.md)
- [General Settings](./settings-general-settings.md)
- [Import Sources](./settings-import-sources.md)

## Files

- `src/blocks/application/settings/settings-app-connections/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `dropdown-menu`
