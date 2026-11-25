import { useState } from "react"
import {
  CalendarIcon,
  CheckIcon,
  LinkIcon,
  PlusIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const PEOPLE = [
  { name: "Michael Rodriguez", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Sofia Reyes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80" },
  { name: "James Park", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Mila Torres", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80" },
]

const TIMES = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

export function ScheduleCreateScheduleBlock() {
  const [members, setMembers] = useState(["Michael Rodriguez"])
  const [memberOpen, setMemberOpen] = useState(false)
  const [dateOpen, setDateOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="bg-background text-foreground flex min-h-svh items-start justify-center p-8">
      <div className="bg-card w-full max-w-[512px] overflow-hidden rounded-xl border shadow-sm">
        <div className="border-b p-4">
          <h1 className="text-sm font-semibold">Create schedule</h1>
          <p className="text-muted-foreground text-xs">Complete the form below to create a schedule</p>
        </div>

        <div className="space-y-4 p-4">
          <div className="space-y-1.5">
            <label htmlFor="schedule-name" className="text-sm font-medium">Schedule name</label>
            <Input id="schedule-name" placeholder="Enter the schedule name" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Members</label>
            <Popover open={memberOpen} onOpenChange={setMemberOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="border-input hover:bg-muted/30 flex min-h-8 w-full flex-wrap items-center gap-1.5 rounded-lg border px-2 py-1 text-left text-sm"
                >
                  {members.map((member) => (
                    <span key={member} className="bg-muted inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs">
                      <Avatar size="sm" className="size-4">
                        <AvatarImage src={PEOPLE.find((person) => person.name === member)?.avatar} alt="" />
                        <AvatarFallback>{member.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      {member}
                      <span
                        role="button"
                        tabIndex={0}
                        aria-label={`Remove ${member}`}
                        onClick={(event) => {
                          event.stopPropagation()
                          setMembers((current) => current.filter((item) => item !== member))
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") setMembers((current) => current.filter((item) => item !== member))
                        }}
                      >
                        <XIcon className="size-3" />
                      </span>
                    </span>
                  ))}
                  <span className="text-muted-foreground">Add members…</span>
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 gap-0 p-1">
                {PEOPLE.map((person) => {
                  const checked = members.includes(person.name)
                  return (
                    <button
                      key={person.name}
                      type="button"
                      onClick={() =>
                        setMembers((current) =>
                          checked ? current.filter((item) => item !== person.name) : [...current, person.name]
                        )
                      }
                      className="hover:bg-accent flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm"
                    >
                      <Avatar size="sm"><AvatarImage src={person.avatar} alt="" /><AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback></Avatar>
                      {person.name}
                      {checked ? <CheckIcon className="ml-auto size-3.5" /> : null}
                    </button>
                  )
                })}
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Date</label>
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="text-muted-foreground w-full justify-start gap-2 font-normal">
                  <CalendarIcon />
                  {date ? date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Select the date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={(value) => { setDate(value); setDateOpen(false) }} autoFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Start time</label>
              <Select defaultValue="09:00 AM">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>{TIMES.map((time) => <SelectItem key={time} value={time}>{time}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">End time</label>
              <Select defaultValue="10:00 AM">
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>{TIMES.map((time) => <SelectItem key={time} value={time}>{time}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>

          <div className="border-muted-foreground/30 flex flex-wrap items-center gap-3 rounded-lg border border-dashed p-3">
            <Button size="sm"><PlusIcon />Add files</Button>
            <p className="text-muted-foreground text-sm">Drop files here (max 3 files)</p>
            <UploadCloudIcon className="text-muted-foreground ml-auto size-4" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="schedule-link" className="text-sm font-medium">Add link</label>
            <div className="flex items-center rounded-lg border px-3">
              <input id="schedule-link" placeholder="Copy paste in here" className="h-8 min-w-0 flex-1 bg-transparent text-sm outline-none" />
              <LinkIcon className="text-muted-foreground size-4" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="schedule-description" className="text-sm font-medium">Description</label>
            <Textarea id="schedule-description" rows={3} placeholder="(e.g: Work from mountain)" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t p-4">
          <Button variant="outline">Cancel</Button>
          <Button>Create schedule</Button>
        </div>
      </div>
    </div>
  )
}

export default ScheduleCreateScheduleBlock
