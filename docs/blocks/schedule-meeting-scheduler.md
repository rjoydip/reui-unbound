---
title: Meeting Scheduler
description: Meeting Scheduler schedule block.
category: Schedule
---

# Meeting Scheduler

Meeting Scheduler schedule block.

**Block:** `schedule-meeting-scheduler` · **Category:** Schedule

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=schedule-meeting-scheduler)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/schedule-meeting-scheduler
```

## Usage

```tsx
import { ScheduleMeetingSchedulerBlock } from "@/blocks/schedule-meeting-scheduler"

export default function Page() {
  return <ScheduleMeetingSchedulerBlock />
}
```

## More in Schedule

- [Appointment Planner](./schedule-appointment-planner.md)
- [Booking Page](./schedule-booking-page.md)
- [Create Schedule](./schedule-create-schedule.md)
- [Due Date Picker](./schedule-due-date-picker.md)
- [Session Booking](./schedule-session-booking.md)
- [Team Agenda](./schedule-team-agenda.md)

## Files

- `src/blocks/application/schedule/schedule-meeting-scheduler/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `button`
- `calendar`
- `input`
- `select`
- `switch`
- `textarea`
