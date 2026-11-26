---
title: Filters
description: Filter builder with fields, operators, chips and query serialization.
---

# Filters

Filter builder with fields, operators, chips and query serialization.

[← All components](./README.md)

## Preview

### Radix (13)

- [`filters-radix`](https://reui-unbound.pages.dev/?preview=filters-radix)
- [`filters-full-filter-bar-radix`](https://reui-unbound.pages.dev/?preview=filters-full-filter-bar-radix)
- [`filters-nested-attributes-radix`](https://reui-unbound.pages.dev/?preview=filters-nested-attributes-radix)
- [`filters-status-badges-radix`](https://reui-unbound.pages.dev/?preview=filters-status-badges-radix)
- [`filters-avatars-paging-radix`](https://reui-unbound.pages.dev/?preview=filters-avatars-paging-radix)
- [`filters-date-editors-radix`](https://reui-unbound.pages.dev/?preview=filters-date-editors-radix)
- [`filters-slider-editor-radix`](https://reui-unbound.pages.dev/?preview=filters-slider-editor-radix)
- [`filters-table-filtering-radix`](https://reui-unbound.pages.dev/?preview=filters-table-filtering-radix)
- [`filters-choice-controls-radix`](https://reui-unbound.pages.dev/?preview=filters-choice-controls-radix)
- [`filters-typed-inputs-radix`](https://reui-unbound.pages.dev/?preview=filters-typed-inputs-radix)
- [`filters-popover-builder-radix`](https://reui-unbound.pages.dev/?preview=filters-popover-builder-radix)
- [`filters-inline-builder-radix`](https://reui-unbound.pages.dev/?preview=filters-inline-builder-radix)
- [`filters-controlled-translated-radix`](https://reui-unbound.pages.dev/?preview=filters-controlled-translated-radix)

### Base (1)

- [`filters-base`](https://reui-unbound.pages.dev/?preview=filters-base)

## Install

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-full-filter-bar
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-nested-attributes
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-status-badges
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-avatars-paging
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-date-editors
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-slider-editor
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-table-filtering
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-choice-controls
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-typed-inputs
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-popover-builder
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-inline-builder
```

```bash
# Radix
bunx --bun shadcn@latest add @reui-unbound/filters-controlled-translated
```

```bash
# Base
bunx --bun shadcn@latest add @reui-unbound/base-filters
```

## Files

- `src/blocks/components/radix/filters/default.tsx`
- `src/components/kit/filters/filters.tsx`
- `src/components/kit/filters/~filters-advanced.tsx`
- `src/components/kit/filters/~filters-builder.tsx`
- `src/components/kit/filters/~filters-chip.tsx`
- `src/components/kit/filters/~filters-context.tsx`
- `src/components/kit/filters/~filters-date.tsx`
- `src/components/kit/filters/~filters-dnd.tsx`
- `src/components/kit/filters/~filters-draft.tsx`
- `src/components/kit/filters/~filters-editors.tsx`
- `src/components/kit/filters/~filters-i18n.tsx`
- `src/components/kit/filters/~filters-lib.tsx`
- `src/components/kit/filters/~filters-operators.tsx`
- `src/components/kit/filters/~filters-query.tsx`
- `src/components/kit/filters/~filters-types.tsx`
- `src/blocks/components/radix/filters/full-filter-bar.tsx`
- `src/blocks/components/radix/filters/nested-attributes.tsx`
- `src/blocks/components/radix/filters/status-badges.tsx`
- `src/blocks/components/radix/filters/avatars-paging.tsx`
- `src/blocks/components/radix/filters/date-editors.tsx`
- `src/blocks/components/radix/filters/slider-editor.tsx`
- `src/blocks/components/radix/filters/table-filtering.tsx`
- `src/blocks/components/radix/filters/choice-controls.tsx`
- `src/blocks/components/radix/filters/typed-inputs.tsx`
- `src/blocks/components/radix/filters/popover-builder.tsx`
- `src/blocks/components/radix/filters/inline-builder.tsx`
- `src/blocks/components/radix/filters/controlled-translated.tsx`
- `src/blocks/components/base/filters/default.tsx`
- `src/components/kit/base/filters/filters.tsx`
- `src/components/kit/base/filters/~filters-advanced.tsx`
- `src/components/kit/base/filters/~filters-builder.tsx`
- `src/components/kit/base/filters/~filters-chip.tsx`
- `src/components/kit/base/filters/~filters-context.tsx`
- `src/components/kit/base/filters/~filters-dnd.tsx`
- `src/components/kit/base/filters/~filters-draft.tsx`
- `src/components/kit/base/filters/~filters-editors.tsx`
- `src/components/kit/base/filters/~filters-i18n.tsx`
- `src/components/kit/base/filters/~filters-lib.tsx`
- `src/components/kit/base/filters/~filters-operators.tsx`
- `src/components/kit/base/filters/~filters-query.tsx`
- `src/components/kit/base/filters/~filters-types.tsx`

## Dependencies

- `class-variance-authority`
- `cn`
- `date-fns`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/base-cascader`
- `@reui-unbound/base-ui-button`
- `@reui-unbound/base-ui-button-group`
- `@reui-unbound/base-ui-dropdown-menu`
- `@reui-unbound/base-ui-input`
- `@reui-unbound/base-ui-popover`
- `@reui-unbound/base-ui-tooltip`
- `@reui-unbound/cascader`
- `@reui-unbound/icon-placeholder`
- `button`
- `button-group`
- `dropdown-menu`
- `input`
- `popover`
- `tooltip`
