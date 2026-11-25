import { useState } from "react"
import {
  ActivityIcon,
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  MonitorPlayIcon,
  RadioIcon,
  VideoIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

const PRESENTERS = [
  { name: "Sofia Reyes", role: "Product Lead", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", online: true },
  { name: "James Park", role: "Engineering Lead", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80", online: true },
  { name: "Mila Torres", role: "Design Lead", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80", online: false },
]

function SectionTrigger({ title, open }: { title: string; open: boolean }) {
  return (
    <CollapsibleTrigger className="hover:bg-muted/30 flex w-full items-center justify-between border-b px-3 py-2.5 text-left">
      <span className="text-sm font-semibold">{title}</span>
      <ChevronDownIcon className={cn("text-muted-foreground size-4 transition-transform", open && "rotate-180")} />
    </CollapsibleTrigger>
  )
}

export function ScheduleWebinarRsvpBlock() {
  const [open, setOpen] = useState({ details: true, presenters: true, agenda: true })
  const [liveStream, setLiveStream] = useState(false)
  const [recording, setRecording] = useState(true)
  const [rsvp, setRsvp] = useState("")

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[456px] overflow-hidden rounded-xl border shadow-sm">
        <Collapsible open={open.details} onOpenChange={(value) => setOpen((current) => ({ ...current, details: value }))}>
          <CollapsibleTrigger className="hover:bg-muted/30 flex w-full items-center gap-2 border-b px-3 py-2.5 text-left">
            <p className="text-sm font-semibold">Wednesday, 4:00 PM</p>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {PRESENTERS.slice(0, 2).map((person) => (
                  <Avatar key={person.name} size="sm" className="size-5 ring-2 ring-card">
                    <AvatarImage src={person.avatar} alt="" />
                    <AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-muted-foreground text-xs">+2</span>
              <ChevronDownIcon className={cn("text-muted-foreground size-4 transition-transform", open.details && "rotate-180")} />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2.5 border-b px-3 py-3 text-sm">
              {[
                { icon: CalendarIcon, label: "Date", value: "Wednesday, Jul 1, 2026" },
                { icon: ClockIcon, label: "Time", value: "90 min · 4:00 PM - 5:30 PM" },
                { icon: VideoIcon, label: "Platform", value: "Zoom Webinar" },
                { icon: BellIcon, label: "Reminder", value: "1 hour before" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-2">
                  <row.icon className="text-muted-foreground size-4" />
                  <span>{row.label}</span>
                  <span className="text-muted-foreground ml-auto">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <ActivityIcon className="text-muted-foreground size-4" />
                <span>Live stream</span>
                <Switch checked={liveStream} onCheckedChange={setLiveStream} className="ml-auto" aria-label="Live stream" />
              </div>
              <div className="flex items-center gap-2">
                <RadioIcon className="text-muted-foreground size-4" />
                <span>Recording</span>
                <Switch checked={recording} onCheckedChange={setRecording} className="ml-auto" aria-label="Recording" />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={open.presenters} onOpenChange={(value) => setOpen((current) => ({ ...current, presenters: value }))}>
          <SectionTrigger title="Presenters" open={open.presenters} />
          <CollapsibleContent>
            <div className="border-b px-3 py-2">
              {PRESENTERS.map((person) => (
                <div key={person.name} className="flex items-center gap-2.5 py-1.5">
                  <Avatar size="sm">
                    <AvatarImage src={person.avatar} alt="" />
                    <AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{person.name}</p>
                    <p className="text-muted-foreground text-xs">{person.role}</p>
                  </div>
                  <span
                    className={cn(
                      "ml-auto size-4 rounded-full border",
                      person.online ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/20" : "border-muted-foreground/40"
                    )}
                    aria-label={person.online ? "Online" : "Offline"}
                  />
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={open.agenda} onOpenChange={(value) => setOpen((current) => ({ ...current, agenda: value }))}>
          <SectionTrigger title="Agenda" open={open.agenda} />
          <CollapsibleContent>
            <div className="px-3 py-3">
              <p className="text-muted-foreground text-sm">
                Live walkthrough of AI collaboration tools, redesigned workflow engine, and open Q&amp;A with the team.
              </p>
              <div className="mt-3 flex items-center gap-2 border-t pt-3">
                <span className="text-sm font-medium">Joining?</span>
                <div className="ml-auto flex items-center gap-1.5">
                  {["Yes", "Skip", "Maybe"].map((option) => (
                    <Button
                      key={option}
                      size="sm"
                      variant={rsvp === option ? "default" : "outline"}
                      onClick={() => setRsvp(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="text-muted-foreground flex items-center gap-1.5 border-t px-3 py-2 text-xs">
          <MonitorPlayIcon className="size-3.5" />
          {rsvp ? `Your RSVP: ${rsvp}` : "RSVP to reserve your seat"}
        </div>
      </div>
    </div>
  )
}

export default ScheduleWebinarRsvpBlock
