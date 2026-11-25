---
title: CLI Agent Setup
description: CLI Agent Setup onboarding block.
category: Onboarding
---

# CLI Agent Setup

**Block:** `onboarding-cli-agent-setup` · **Category:** Onboarding

[Open live preview](https://reui-unbound.pages.dev/?preview=onboarding-8)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/onboarding-cli-agent-setup
```

## Usage

```tsx
import { Onboarding8Block } from "@/blocks/onboarding-cli-agent-setup"

export default function Page() {
  return <Onboarding8Block />
}
```

## Files

- `src/blocks/application/onboarding/onboarding-8/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `checkbox`
- `collapsible`
- `input`
- `radio-group`
- `select`
- `switch`
