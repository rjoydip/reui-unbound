---
title: General Settings
description: General Settings settings block.
category: Settings
---

# General Settings

General Settings settings block.

**Block:** `settings-general-settings` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-general-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-general-settings
```

## Usage

```tsx
import { SettingsGeneralSettingsBlock } from "@/blocks/settings-general-settings"

export default function Page() {
  return <SettingsGeneralSettingsBlock />
}
```

## More in Settings

- [Account Settings](./settings-account-settings.md)
- [API Integrations](./settings-api-integrations.md)
- [App Connections](./settings-app-connections.md)
- [Connected Apps](./settings-connected-apps.md)
- [General & Display](./settings-general-display.md)
- [Import Sources](./settings-import-sources.md)

## Files

- `src/blocks/application/settings/settings-general-settings/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `input`
- `select`
- `switch`
