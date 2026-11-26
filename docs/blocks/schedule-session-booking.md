---
title: Session Booking
description: Session Booking schedule block.
category: Schedule
---

# Session Booking

Session Booking schedule block.

**Block:** `schedule-session-booking` · **Category:** Schedule

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=schedule-session-booking)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/schedule-session-booking
```

## Usage

```tsx
import { ScheduleSessionBookingBlock } from "@/blocks/schedule-session-booking"

export default function Page() {
  return <ScheduleSessionBookingBlock />
}
```

## More in Schedule

- [Appointment Planner](./schedule-appointment-planner.md)
- [Booking Page](./schedule-booking-page.md)
- [Create Schedule](./schedule-create-schedule.md)
- [Due Date Picker](./schedule-due-date-picker.md)
- [Meeting Scheduler](./schedule-meeting-scheduler.md)
- [Team Agenda](./schedule-team-agenda.md)

## Files

- `src/blocks/application/schedule/schedule-session-booking/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `calendar`
- `select`
