---
title: Security Settings
description: Security Settings settings block.
category: Settings
---

# Security Settings

Security Settings settings block.

**Block:** `settings-security-settings` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-security-settings)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-security-settings
```

## Usage

```tsx
import { SettingsSecuritySettingsBlock } from "@/blocks/settings-security-settings"

export default function Page() {
  return <SettingsSecuritySettingsBlock />
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

- `src/blocks/application/settings/settings-security-settings/index.tsx`


## Registry dependencies

- `@reui-unbound/badge`
- `select`
- `switch`
