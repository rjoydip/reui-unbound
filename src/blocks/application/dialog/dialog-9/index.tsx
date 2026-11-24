"use client"
import { useState } from "react"
import {
  ChevronDownIcon,
  CircleIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotIcon,
  CirclePauseIcon,
  CircleXIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  SignalIcon,
  TriangleAlertIcon,
  UploadIcon,
  UserRoundIcon,
} from "lucide-react"
import { cn } from "cn"
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
const ASSIGNEES = [
  { id: "maya", name: "Maya Stone", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" },
  { id: "leo", name: "Leo Grant", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" },
  { id: "nora", name: "Nora Chen", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" },
  { id: "samir", name: "Samir Park", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80" },
  { id: "alex", name: "Alex Johnson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80" },
  { id: "sarah", name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80" },
  { id: "michael", name: "Michael Rodriguez", avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=96&h=96&dpr=2&q=80" },
  { id: "emma", name: "Emma Wilson", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80" },
] as const
const LABELS = [
  { id: "feature", name: "Feature", color: "bg-sky-500" },
  { id: "bug", name: "Bug", color: "bg-red-500" },
  { id: "improvement", name: "Improvement", color: "bg-emerald-500" },
  { id: "design", name: "Design", color: "bg-violet-500" },
] as const
const STATUSES = [
  { value: "backlog", label: "Backlog", icon: CircleDashedIcon, className: "text-muted-foreground" },
  { value: "planned", label: "Planned", icon: CircleIcon, className: "text-muted-foreground" },
  { value: "in-progress", label: "In Progress", icon: CircleDotIcon, className: "text-blue-500" },
  { value: "paused", label: "Paused", icon: CirclePauseIcon, className: "text-orange-500" },
  { value: "completed", label: "Completed", icon: CircleCheckIcon, className: "text-emerald-500" },
  { value: "cancelled", label: "Cancelled", icon: CircleXIcon, className: "text-muted-foreground" },
] as const
const PRIORITIES = [
  { value: "none", label: "No Priority", icon: MinusIcon, className: "text-muted-foreground" },
  { value: "low", label: "Low", icon: SignalIcon, className: "text-muted-foreground" },
  { value: "medium", label: "Medium", icon: SignalIcon, className: "text-muted-foreground" },
  { value: "high", label: "High", icon: SignalIcon, className: "text-muted-foreground" },
  { value: "urgent", label: "Urgent", icon: TriangleAlertIcon, className: "text-amber-500" },
] as const
function AssigneePicker({
  selected,
  onChange,
}: {
  selected: string[]
  onChange: (ids: string[]) => void
}) {
  const [query, setQuery] = useState("")
  const people = ASSIGNEES.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  )
  function toggle(id: string) {
    onChange(
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    )
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-8 w-full justify-between font-normal">
          <span className="flex min-w-0 items-center gap-2">
            {selected.length ? (
              <>
                <AvatarGroup className="-space-x-1">
                  {selected.slice(0, 2).map((id) => {
                    const person = ASSIGNEES.find((item) => item.id === id)
                    if (!person) return null
                    return (
                      <Avatar key={id} className="size-5">
                        <AvatarImage src={person.avatar} alt={person.name} />
                        <AvatarFallback className="text-[9px]">
                          {person.name.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                    )
                  })}
                </AvatarGroup>
                <span className="truncate">
                  {selected.length === 1
                    ? ASSIGNEES.find((item) => item.id === selected[0])?.name
                    : `${selected.length} users`}
                </span>
              </>
            ) : (
              <span className="text-muted-foreground">Assign users</span>
            )}
          </span>
          <ChevronDownIcon className="size-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-(--radix-popover-trigger-width) gap-0 p-0">
        <div className="border-b p-2">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Assign users"
            className="h-8"
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-1">
          <button
            type="button"
            onClick={() => onChange([])}
            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground outline-none hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <UserRoundIcon className="size-4" />
            No assigned users
          </button>
          {people.map((person) => (
            <label
              key={person.id}
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("[data-slot=checkbox]")) return
                toggle(person.id)
              }}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
                selected.includes(person.id) && "bg-accent/60"
              )}
            >
              <Checkbox
                checked={selected.includes(person.id)}
                onCheckedChange={() => toggle(person.id)}
                aria-label={`Assign ${person.name}`}
              />
              <Avatar className="size-5">
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback className="text-[9px]">
                  {person.name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <span className="truncate">{person.name}</span>
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
function LabelPicker({
  selected,
  onChange,
}: {
  selected: string[]
  onChange: (ids: string[]) => void
}) {
  function toggle(id: string) {
    onChange(
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    )
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-8 w-full justify-between font-normal">
          <span className="flex items-center gap-1.5">
            {selected.length ? (
              selected.map((id) => {
                const label = LABELS.find((item) => item.id === id)
                return (
                  <span
                    key={id}
                    className={cn("size-2.5 rounded-full", label?.color)}
                  />
                )
              })
            ) : (
              <span className="text-muted-foreground">Add labels</span>
            )}
          </span>
          <ChevronDownIcon className="size-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-(--radix-popover-trigger-width) gap-0 p-1">
        {LABELS.map((label) => (
          <label
            key={label.id}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("[data-slot=checkbox]")) return
              toggle(label.id)
            }}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
          >
            <Checkbox
              checked={selected.includes(label.id)}
              onCheckedChange={() => toggle(label.id)}
              aria-label={`Toggle ${label.name} label`}
            />
            <span className={cn("size-2.5 rounded-full", label.color)} />
            {label.name}
          </label>
        ))}
      </PopoverContent>
    </Popover>
  )
}
function SectionLabel({ children, info }: { children: string; info?: string }) {
  return (
    <FieldLabel className="text-sm font-medium">
      {children}
      {info ? (
        <InfoIcon className="size-3.5 text-muted-foreground" aria-label={info} />
      ) : null}
    </FieldLabel>
  )
}
export function Dialog9Block() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState("planned")
  const [priority, setPriority] = useState("medium")
  const [assigned, setAssigned] = useState<string[]>(["maya", "leo"])
  const [labels, setLabels] = useState<string[]>(["feature", "design"])
  const activeStatus = STATUSES.find((item) => item.value === status) ?? STATUSES[1]
  const activePriority = PRIORITIES.find((item) => item.value === priority) ?? PRIORITIES[2]
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon />
            New project
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-[560px]"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Create project</DialogTitle>
            <DialogDescription>
              Add a project cover, details, status, priority, assignees and labels.
            </DialogDescription>
          </DialogHeader>
          <div className="relative h-[210px] shrink-0 overflow-hidden rounded-t-xl bg-[linear-gradient(120deg,#3f6435,#7daa5b_45%,#2f4d2a)]">
            <img
              src="https://picsum.photos/seed/atlas-cover/1200/420"
              alt=""
              className="size-full object-cover"
            />
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="absolute right-3 bottom-3 shadow-sm"
            >
              <UploadIcon />
              Change cover
            </Button>
          </div>
          <div className="space-y-4 p-4">
            <div className="grid grid-cols-[1fr_140px] gap-3">
              <Field>
                <SectionLabel>Project name</SectionLabel>
                <Input defaultValue="Atlas Launch System" />
              </Field>
              <Field>
                <SectionLabel>Key</SectionLabel>
                <Input defaultValue="ALS" className="uppercase" />
              </Field>
            </div>
            <Field>
              <SectionLabel info="Shown in the project header.">Project brief</SectionLabel>
              <Textarea
                rows={3}
                defaultValue="Coordinate launch tasks, owner reviews, and delivery checkpoints for the next workspace release."
                className="min-h-20 resize-none"
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <SectionLabel>Status</SectionLabel>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <span className="flex items-center gap-2">
                      <activeStatus.icon className={cn("size-4", activeStatus.className)} />
                      {activeStatus.label}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    {STATUSES.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        <item.icon className={cn("size-4", item.className)} />
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <SectionLabel>Priority</SectionLabel>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger className="w-full">
                    <span className="flex items-center gap-2">
                      <activePriority.icon className={cn("size-4", activePriority.className)} />
                      {activePriority.label}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    {PRIORITIES.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        <item.icon className={cn("size-4", item.className)} />
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <SectionLabel info="People who can edit this project.">Assigned</SectionLabel>
                <AssigneePicker selected={assigned} onChange={setAssigned} />
              </Field>
              <Field>
                <SectionLabel info="Labels help group related work.">Labels</SectionLabel>
                <LabelPicker selected={labels} onChange={setLabels} />
              </Field>
            </div>
          </div>
          <DialogFooter className="mx-0 mb-0 rounded-b-xl sm:justify-end">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              <PlusIcon />
              Create project
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}
export default Dialog9Block
