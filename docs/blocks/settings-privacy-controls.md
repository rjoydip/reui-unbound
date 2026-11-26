---
title: Privacy Controls
description: Privacy Controls settings block.
category: Settings
---

# Privacy Controls

Privacy Controls settings block.

**Block:** `settings-privacy-controls` · **Category:** Settings

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=settings-privacy-controls)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-privacy-controls
```

## Usage

```tsx
import { SettingsPrivacyControlsBlock } from "@/blocks/settings-privacy-controls"

export default function Page() {
  return <SettingsPrivacyControlsBlock />
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

- `src/blocks/application/settings/settings-privacy-controls/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `switch`
