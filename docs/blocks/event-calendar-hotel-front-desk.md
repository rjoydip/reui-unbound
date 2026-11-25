---
title: Hotel Front Desk
description: Hotel Front Desk event-calendar block.
category: Event Calendar
---

# Hotel Front Desk

**Block:** `event-calendar-hotel-front-desk` · **Category:** Event Calendar

[Open live preview](https://reui-unbound.pages.dev/?preview=event-calendar-hotel-front-desk)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/event-calendar-hotel-front-desk
```

## Usage

```tsx
import { EventCalendarHotelFrontDeskBlock } from "@/blocks/event-calendar-hotel-front-desk"

export default function Page() {
  return <EventCalendarHotelFrontDeskBlock />
}
```

## Files

- `src/blocks/application/event-calendar/event-calendar-hotel-front-desk/index.tsx`

## Dependencies

- `cn`
- `date-fns`
- `lucide-react`
- `react-day-picker`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/event-calendar`
- `avatar`
- `button`
- `calendar`
- `checkbox`
- `dialog`
- `input`
- `popover`
- `select`
