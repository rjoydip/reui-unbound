---
title: Shift Roster
description: Shift Roster event-calendar block.
category: Event Calendar
---

# Shift Roster

Shift Roster event-calendar block.

**Block:** `event-calendar-shift-roster` · **Category:** Event Calendar

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=event-calendar-shift-roster)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/event-calendar-shift-roster
```

## Usage

```tsx
import { EventCalendarShiftRosterBlock } from "@/blocks/event-calendar-shift-roster"

export default function Page() {
  return <EventCalendarShiftRosterBlock />
}
```

## More in Event Calendar

- [Clinic Chair Board](./event-calendar-clinic-chair-board.md)
- [Hotel Front Desk](./event-calendar-hotel-front-desk.md)
- [Lending Deal Calendar](./event-calendar-lending-deal-calendar.md)
- [Mini Month Calendar](./event-calendar-mini-month-calendar.md)
- [Personal Calendar](./event-calendar-personal-calendar.md)

## Files

- `src/blocks/application/event-calendar/event-calendar-shift-roster/index.tsx`

## Dependencies

- `cn`
- `date-fns`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `@reui-unbound/event-calendar`
- `@reui-unbound/frame`
- `avatar`
- `button`
- `dialog`
- `dropdown-menu`
- `input-group`
- `tooltip`
