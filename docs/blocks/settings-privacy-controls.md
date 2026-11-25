---
title: Privacy Controls
description: Privacy Controls settings block.
category: Settings
---

# Privacy Controls

**Block:** `settings-privacy-controls` · **Category:** Settings

[Open live preview](https://reui-unbound.pages.dev/?preview=settings-privacy-controls)

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

## Files

- `src/blocks/application/settings/settings-privacy-controls/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `switch`
