---
title: Failed Deploy
description: Failed Deploy sheet block.
category: Sheet
---

# Failed Deploy

Failed Deploy sheet block.

**Block:** `sheet-failed-deploy` · **Category:** Sheet

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=sheet-failed-deploy)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/sheet-failed-deploy
```

## Usage

```tsx
import { SheetFailedDeployBlock } from "@/blocks/sheet-failed-deploy"

export default function Page() {
  return <SheetFailedDeployBlock />
}
```

## More in Sheet

- [AI Model Chat](./sheet-ai-model-chat.md)
- [Audit Event Detail](./sheet-audit-event-detail.md)
- [Canary Rollout](./sheet-canary-rollout.md)
- [Comment Thread](./sheet-comment-thread.md)
- [Copilot Chat](./sheet-copilot-chat.md)
- [Create Project](./sheet-create-project.md)

## Files

- `src/blocks/application/sheet/sheet-failed-deploy/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `switch`
- `tabs`
