---
title: Import Sources
description: Import Sources settings block.
category: Settings
---

# Import Sources

Import Sources settings block.

**Block:** `settings-import-sources` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-import-sources)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-import-sources
```

## Usage

```tsx
import { SettingsImportSourcesBlock } from "@/blocks/settings-import-sources"

export default function Page() {
  return <SettingsImportSourcesBlock />
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

- `src/blocks/application/settings/settings-import-sources/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
