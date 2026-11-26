---
title: Team Attendance
description: Team Attendance schedule block.
category: Schedule
---

# Team Attendance

Team Attendance schedule block.

**Block:** `schedule-team-attendance` · **Category:** Schedule

[← All blocks](./README.md) · [Open live preview](https://reui-unbound.pages.dev/?preview=schedule-team-attendance)

## Install

```bash
bunx --bun shadcn@latest add @reui-unbound/schedule-team-attendance
```

## Usage

```tsx
import { ScheduleTeamAttendanceBlock } from "@/blocks/schedule-team-attendance"

export default function Page() {
  return <ScheduleTeamAttendanceBlock />
}
```

## More in Schedule

- [Appointment Planner](./schedule-appointment-planner.md)
- [Booking Page](./schedule-booking-page.md)
- [Create Schedule](./schedule-create-schedule.md)
- [Due Date Picker](./schedule-due-date-picker.md)
- [Meeting Scheduler](./schedule-meeting-scheduler.md)
- [Session Booking](./schedule-session-booking.md)

## Files

- `src/blocks/application/schedule/schedule-team-attendance/index.tsx`

## Dependencies

- `cn`
- `lucide-react`

## Registry dependencies

- `@reui-unbound/badge`
- `avatar`
- `button`
- `calendar`
- `dropdown-menu`
- `select`
