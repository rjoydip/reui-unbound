---
title: Create Project
description: Create Project sheet block.
category: Sheet
---

# Create Project

Create Project sheet block.

**Block:** `sheet-create-project` · **Category:** Sheet

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=sheet-create-project)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/sheet-create-project
```

## Usage

```tsx
import { SheetCreateProjectBlock } from "@/blocks/sheet-create-project"

export default function Page() {
  return <SheetCreateProjectBlock />
}
```

## More in Sheet

- [AI Model Chat](./sheet-ai-model-chat.md)
- [Audit Event Detail](./sheet-audit-event-detail.md)
- [Canary Rollout](./sheet-canary-rollout.md)
- [Comment Thread](./sheet-comment-thread.md)
- [Copilot Chat](./sheet-copilot-chat.md)
- [Cron Job Detail](./sheet-cron-job-detail.md)

## Files

- `src/blocks/application/sheet/sheet-create-project/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `dropdown-menu`
