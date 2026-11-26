---
title: Design System Manager
description: Design System Manager navbar block.
category: Navbar
---

# Design System Manager

Design System Manager navbar block.

**Block:** `navbar-design-system-manager` · **Category:** Navbar

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=navbar-design-system-manager)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/navbar-design-system-manager
```

## Usage

```tsx
import { NavbarDesignSystemManagerBlock } from "@/blocks/navbar-design-system-manager"

export default function Page() {
  return <NavbarDesignSystemManagerBlock />
}
```

## More in Navbar

- [Admin Command Search](./navbar-admin-command-search.md)
- [Agent Marketplace](./navbar-agent-marketplace.md)
- [Analytics Toolbar](./navbar-analytics-toolbar.md)
- [API Developer Portal](./navbar-api-developer-portal.md)
- [CMS Publish Bar](./navbar-cms-publish-bar.md)
- [Editor Action Bar](./navbar-editor-action-bar.md)

## Files

- `src/blocks/application/navbar/navbar-design-system-manager/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `dropdown-menu`
- `tabs`
