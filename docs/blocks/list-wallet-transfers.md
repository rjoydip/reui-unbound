---
title: Wallet Transfers
description: Wallet Transfers list block.
category: List
---

# Wallet Transfers

Wallet Transfers list block.

**Block:** `list-wallet-transfers` · **Category:** List

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=list-wallet-transfers)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/list-wallet-transfers
```

## Usage

```tsx
import { ListWalletTransfersBlock } from "@/blocks/list-wallet-transfers"

export default function Page() {
  return <ListWalletTransfersBlock />
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

- `src/blocks/application/list/list-wallet-transfers/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/frame`
- `button`
- `dialog`
- `item`
- `tabs`
