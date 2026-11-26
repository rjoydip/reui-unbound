---
title: Blueprint Library
description: Blueprint Library empty-state block.
category: Empty State
---

# Blueprint Library

Blueprint Library empty-state block.

**Block:** `empty-state-blueprint-library` · **Category:** Empty State

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=empty-state-blueprint-library)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/empty-state-blueprint-library
```

## Usage

```tsx
import { EmptyStateBlueprintLibraryBlock } from "@/blocks/empty-state-blueprint-library"

export default function Page() {
  return <EmptyStateBlueprintLibraryBlock />
}
```

## More in Empty State

- [Cloud Storage Connect](./empty-state-cloud-storage-connect.md)
- [Data Import Start](./empty-state-data-import-start.md)
- [Empty Report Brief](./empty-state-empty-report-brief.md)
- [Enable Organizations](./empty-state-enable-organizations.md)
- [Export Filters](./empty-state-export-filters.md)
- [First Project](./empty-state-first-project.md)

## Files

- `src/blocks/application/empty-state/empty-state-blueprint-library/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/icon-stack`
- `button`
- `card`
- `empty`
