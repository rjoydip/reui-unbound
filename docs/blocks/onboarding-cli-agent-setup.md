---
title: CLI Agent Setup
description: CLI Agent Setup onboarding block.
category: Onboarding
---

# CLI Agent Setup

**Block:** `onboarding-cli-agent-setup` · **Category:** Onboarding

[Open live preview](https://reui-unbound.pages.dev/?preview=onboarding-cli-agent-setup)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/onboarding-cli-agent-setup
```

## Usage

```tsx
import { OnboardingCliAgentSetupBlock } from "@/blocks/onboarding-cli-agent-setup"

export default function Page() {
  return <OnboardingCliAgentSetupBlock />
}
```

## Files

- `src/blocks/application/onboarding/onboarding-cli-agent-setup/index.tsx`

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
