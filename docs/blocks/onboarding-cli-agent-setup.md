---
title: CLI Agent Setup
description: CLI Agent Setup onboarding block.
category: Onboarding
---

# CLI Agent Setup

CLI Agent Setup onboarding block.

**Block:** `onboarding-cli-agent-setup` · **Category:** Onboarding

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=onboarding-cli-agent-setup)

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

## More in Onboarding

- [Agent & API Setup](./onboarding-agent-api-setup.md)
- [Centered Setup Flow](./onboarding-centered-setup-flow.md)
- [Live Preview Wizard](./onboarding-live-preview-wizard.md)
- [Marketing Hero Signup](./onboarding-marketing-hero-signup.md)
- [Onboarding Dialog](./onboarding-onboarding-dialog.md)
- [Screenshot Carousel Setup](./onboarding-screenshot-carousel-setup.md)

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
