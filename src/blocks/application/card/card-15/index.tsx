import { EllipsisVerticalIcon, VideoIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Frame, FrameHeader, FramePanel, FrameTitle } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function MeetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#00832d" d="M2 8.5A2.5 2.5 0 0 1 4.5 6H9l3 3.2-3 3.3H2V8.5Z" />
      <path fill="#0066da" d="M12 9.2 9 6V3.5A1.5 1.5 0 0 1 10.5 2H14l-2 7.2Z" />
      <path fill="#e94235" d="M2 15.5h7l3 3.3-3 3.2H4.5A2.5 2.5 0 0 1 2 19.5v-4Z" />
      <path fill="#2684fc" d="M12 14.8 10.5 22H14a1.5 1.5 0 0 0 1.5-1.5v-2.5l-3.5-3.2Z" />
      <path fill="#00ac47" d="M9 6h5.5l3.1 3.2-3.1 3.3H12L9 9.2V6Z" />
      <path fill="#ffba00" d="M17.6 9.2 21 6.4A1.6 1.6 0 0 1 22 9.3v5.4a1.6 1.6 0 0 1-1 1.5l-3.4-2.8V9.2Z" />
    </svg>
  )
}

const MEETING_CARDS = [
  {
    title: "Apollo CRM - Sprint Planning",
    time: "09:00 AM CET",
    duration: "30 min",
    description:
      "Collaborative sprint planning to address blockers, assign tasks, and refine deliverables for the upcoming development phase.",
    attendees: ["AM", "JD", "SK"],
    extra: 3,
    discipline: "Client Meeting",
    join: "meet",
  },
  {
    title: "Delta Finance - Budget Alignment",
    time: "11:30 AM CET",
    duration: "90 min",
    description:
      "Reviewing quarterly spend, adjusting forecasts, and aligning budgets across departments with finance and operations teams.",
    attendees: ["MR", "TL", "NV"],
    extra: 3,
    discipline: "Internal",
    join: "video",
  },
]

export function Card15Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <div className="grid w-full max-w-[830px] gap-3 md:grid-cols-2">
        {MEETING_CARDS.map((meeting) => (
          <Frame key={meeting.title}>
            <FrameHeader className="flex-row items-center">
              <FrameTitle className="flex-1">Meeting</FrameTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    aria-label={`Actions for ${meeting.title}`}
                  >
                    <EllipsisVerticalIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-36">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </FrameHeader>

            <FramePanel className="flex flex-col">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-medium">{meeting.title}</span>
                  <Badge variant="secondary" radius="full" className="shrink-0">
                    {meeting.duration}
                  </Badge>
                </div>
                <span className="text-muted-foreground text-xs">
                  {meeting.time}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {meeting.description}
                </p>
                <div className="flex items-center gap-2">
                  <AvatarGroup>
                    {meeting.attendees.map((initials) => (
                      <Avatar key={initials} size="sm">
                        <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount className="size-6 text-xs">
                      +{meeting.extra}
                    </AvatarGroupCount>
                  </AvatarGroup>
                  <Badge variant="outline" radius="full" size="sm">
                    {meeting.discipline}
                  </Badge>
                </div>
              </div>

              <a
                href="#"
                className="hover:bg-muted/50 -mx-4 -mb-4 mt-3 flex items-center gap-2 border-t px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {meeting.join === "meet" ? (
                  <MeetIcon className="size-4" />
                ) : (
                  <span className="bg-sky-500 text-white flex size-4 items-center justify-center rounded-full">
                    <VideoIcon className="size-2.5" aria-hidden="true" />
                  </span>
                )}
                Join Meeting
              </a>
            </FramePanel>
          </Frame>
        ))}
      </div>
    </div>
  )
}

export default Card15Block
