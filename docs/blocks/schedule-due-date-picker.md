---
title: Due Date Picker
description: Due Date Picker schedule block.
category: Schedule
---

# Due Date Picker

Due Date Picker schedule block.

**Block:** `schedule-due-date-picker` · **Category:** Schedule

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=schedule-due-date-picker)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/schedule-due-date-picker
```

## Usage

```tsx
import { ScheduleDueDatePickerBlock } from "@/blocks/schedule-due-date-picker"

export default function Page() {
  return <ScheduleDueDatePickerBlock />
}
```

## More in Schedule

- [Appointment Planner](./schedule-appointment-planner.md)
- [Booking Page](./schedule-booking-page.md)
- [Create Schedule](./schedule-create-schedule.md)
- [Meeting Scheduler](./schedule-meeting-scheduler.md)
- [Session Booking](./schedule-session-booking.md)
- [Team Agenda](./schedule-team-agenda.md)

## Files

- `src/blocks/application/schedule/schedule-due-date-picker/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `calendar`
- `select`
