---
title: Spending Feed
description: Spending Feed list block.
category: List
---

# Spending Feed

Spending Feed list block.

**Block:** `list-spending-feed` · **Category:** List

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=list-spending-feed)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/list-spending-feed
```

## Usage

```tsx
import { ListSpendingFeedBlock } from "@/blocks/list-spending-feed"

export default function Page() {
  return <ListSpendingFeedBlock />
}
```

## More in List

- [Capability Modules](./list-capability-modules.md)
- [Capital Inflows](./list-capital-inflows.md)
- [Crypto Activity Feed](./list-crypto-activity-feed.md)
- [Crypto Portfolio](./list-crypto-portfolio.md)
- [Fund Leaderboard](./list-fund-leaderboard.md)
- [Integrations Directory](./list-integrations-directory.md)

## Files

- `src/blocks/application/list/list-spending-feed/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/frame`
- `button`
- `item`
- `tabs`
