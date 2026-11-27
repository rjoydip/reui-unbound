---
title: General & Display
description: General & Display settings block.
category: Settings
---

# General & Display

General & Display settings block.

**Block:** `settings-general-display` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-general-display)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-general-display
```

## Usage

```tsx
import { SettingsGeneralDisplayBlock } from "@/blocks/settings-general-display"

export default function Page() {
  return <SettingsGeneralDisplayBlock />
}
```

## More in Settings

- [Account Settings](./settings-account-settings.md)
- [API Integrations](./settings-api-integrations.md)
- [App Connections](./settings-app-connections.md)
- [Connected Apps](./settings-connected-apps.md)
- [General Settings](./settings-general-settings.md)
- [Import Sources](./settings-import-sources.md)

## Files

- `src/blocks/application/settings/settings-general-display/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `collapsible`
- `select`
- `switch`
