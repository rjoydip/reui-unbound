---
title: Environment Switcher
description: Environment Switcher app-shell block.
category: App Shell
---

# Environment Switcher

**Block:** `app-shell-environment-switcher` · **Category:** App Shell

[Open live preview](https://reui-unbound.pages.dev/?preview=app-shell-environment-switcher)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/app-shell-environment-switcher
```

## Usage

```tsx
import { AppShellEnvironmentSwitcherBlock } from "@/blocks/app-shell-environment-switcher"

export default function Page() {
  return <AppShellEnvironmentSwitcherBlock />
}
```

## Files

- `src/blocks/application/app-shell/app-shell-environment-switcher/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `breadcrumb`
- `collapsible`
- `dropdown-menu`
- `popover`
- `progress`
- `sidebar`
