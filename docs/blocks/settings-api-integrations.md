---
title: API Integrations
description: API Integrations settings block.
category: Settings
---

# API Integrations

API Integrations settings block.

**Block:** `settings-api-integrations` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-api-integrations)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-api-integrations
```

## Usage

```tsx
import { SettingsApiIntegrationsBlock } from "@/blocks/settings-api-integrations"

export default function Page() {
  return <SettingsApiIntegrationsBlock />
}
```

## More in Settings

- [Account Settings](./settings-account-settings.md)
- [App Connections](./settings-app-connections.md)
- [Connected Apps](./settings-connected-apps.md)
- [General & Display](./settings-general-display.md)
- [General Settings](./settings-general-settings.md)
- [Import Sources](./settings-import-sources.md)

## Files

- `src/blocks/application/settings/settings-api-integrations/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `checkbox`
- `select`
- `switch`
- `table`
