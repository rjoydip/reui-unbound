---
title: Workspace Preferences
description: Workspace Preferences settings block.
category: Settings
---

# Workspace Preferences

Workspace Preferences settings block.

**Block:** `settings-workspace-preferences` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-workspace-preferences)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-workspace-preferences
```

## Usage

```tsx
import { SettingsWorkspacePreferencesBlock } from "@/blocks/settings-workspace-preferences"

export default function Page() {
  return <SettingsWorkspacePreferencesBlock />
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

- `src/blocks/application/settings/settings-workspace-preferences/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `switch`
