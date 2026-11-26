---
title: Connected Apps
description: Connected Apps settings block.
category: Settings
---

# Connected Apps

Connected Apps settings block.

**Block:** `settings-connected-apps` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-connected-apps)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-connected-apps
```

## Usage

```tsx
import { SettingsConnectedAppsBlock } from "@/blocks/settings-connected-apps"

export default function Page() {
  return <SettingsConnectedAppsBlock />
}
```

## More in Settings

- [Account Settings](./settings-account-settings.md)
- [API Integrations](./settings-api-integrations.md)
- [App Connections](./settings-app-connections.md)
- [General & Display](./settings-general-display.md)
- [General Settings](./settings-general-settings.md)
- [Import Sources](./settings-import-sources.md)

## Files

- `src/blocks/application/settings/settings-connected-apps/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
