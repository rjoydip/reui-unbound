---
title: Edit Firewall Rule
description: Edit Firewall Rule sheet block.
category: Sheet
---

# Edit Firewall Rule

Edit Firewall Rule sheet block.

**Block:** `sheet-edit-firewall-rule` · **Category:** Sheet

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=sheet-edit-firewall-rule)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/sheet-edit-firewall-rule
```

## Usage

```tsx
import { SheetEditFirewallRuleBlock } from "@/blocks/sheet-edit-firewall-rule"

export default function Page() {
  return <SheetEditFirewallRuleBlock />
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

- `src/blocks/application/sheet/sheet-edit-firewall-rule/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `button`
- `input`
- `select`
- `tabs`
