---
title: Appointment Planner
description: Appointment Planner schedule block.
category: Schedule
---

# Appointment Planner

Appointment Planner schedule block.

**Block:** `schedule-appointment-planner` · **Category:** Schedule

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=schedule-appointment-planner)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/schedule-appointment-planner
```

## Usage

```tsx
import { ScheduleAppointmentPlannerBlock } from "@/blocks/schedule-appointment-planner"

export default function Page() {
  return <ScheduleAppointmentPlannerBlock />
}
```

## More in Schedule

- [Booking Page](./schedule-booking-page.md)
- [Create Schedule](./schedule-create-schedule.md)
- [Due Date Picker](./schedule-due-date-picker.md)
- [Meeting Scheduler](./schedule-meeting-scheduler.md)
- [Session Booking](./schedule-session-booking.md)
- [Team Agenda](./schedule-team-agenda.md)

## Files

- `src/blocks/application/schedule/schedule-appointment-planner/index.tsx`

## Dependencies

- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `calendar`
- `select`
