---
title: Webhook Endpoints
description: Webhook Endpoints settings block.
category: Settings
---

# Webhook Endpoints

**Block:** `settings-webhook-endpoints` · **Category:** Settings

[Open live preview](https://reui-unbound.pages.dev/?preview=settings-webhook-endpoints)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/settings-webhook-endpoints
```

## Usage

```tsx
import { SettingsWebhookEndpointsBlock } from "@/blocks/settings-webhook-endpoints"

export default function Page() {
  return <SettingsWebhookEndpointsBlock />
}
```

## Files

- `src/blocks/application/settings/settings-webhook-endpoints/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `dropdown-menu`
- `switch`
