"use client"
import { useState } from "react"
import {
  CalendarIcon,
  ChevronDownIcon,
  CircleIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotIcon,
  CirclePauseIcon,
  CircleXIcon,
  InfoIcon,
  MinusIcon,
  SignalIcon,
  SparklesIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { cn } from "cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
const TABS = ["Action", "Brief", "Nudge", "Canvas", "Pulse"] as const
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
const ASSIGNEES = [
  { value: "maya", name: "Maya Stone", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" },
  { value: "leo", name: "Leo Grant", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" },
  { value: "nora", name: "Nora Chen", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" },
] as const
const DUE_DATES = ["Today", "Tomorrow", "Next week", "No date"] as const
const LABELS = [
  { id: "feature", name: "Feature", color: "bg-sky-500" },
  { id: "bug", name: "Bug", color: "bg-red-500" },
  { id: "improvement", name: "Improvement", color: "bg-emerald-500" },
  { id: "design", name: "Design", color: "bg-violet-500" },
] as const
const INITIAL_DRAFTS: Record<string, { title: string; notes: string }> = {
  Action: {
    title: "Close billing-event gaps before partner beta",
    notes: "Confirm upgrade, downgrade, and trial-extension events are mapped before the beta opens.",
  },
  Brief: { title: "", notes: "" },
  Nudge: { title: "", notes: "" },
  Canvas: { title: "", notes: "" },
  Pulse: { title: "", notes: "" },
}
function FieldHint({ label, info }: { label: string; info?: string }) {
  return (
    <FieldLabel className="text-sm font-medium">
      {label}
      {info ? (
        <InfoIcon className="size-3.5 text-muted-foreground" aria-label={info} />
      ) : null}
    </FieldLabel>
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
              selected.map((id) => (
                <span
                  key={id}
                  className={cn(
                    "size-2.5 rounded-full",
                    LABELS.find((label) => label.id === id)?.color
                  )}
                />
              ))
            ) : (
              <span className="text-muted-foreground">Select labels</span>
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
export function Dialog12Block() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<string>("Action")
  const [drafts, setDrafts] = useState(INITIAL_DRAFTS)
  const [status, setStatus] = useState("planned")
  const [assignee, setAssignee] = useState("maya")
  const [dueDate, setDueDate] = useState("Tomorrow")
  const [priority, setPriority] = useState("medium")
  const [labels, setLabels] = useState<string[]>(["feature", "design"])
  const draft = drafts[tab]
  const activeStatus = STATUSES.find((item) => item.value === status) ?? STATUSES[1]
  const activePriority = PRIORITIES.find((item) => item.value === priority) ?? PRIORITIES[2]
  const activeAssignee = ASSIGNEES.find((item) => item.value === assignee) ?? ASSIGNEES[0]
  function updateDraft(patch: Partial<{ title: string; notes: string }>) {
    setDrafts((current) => ({
      ...current,
      [tab]: { ...current[tab], ...patch },
    }))
  }
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Create entry</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100svh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-[672px]">
          <DialogHeader className="space-y-3 px-6 pt-6">
            <div className="space-y-1.5">
              <DialogTitle className="text-lg">Create entry</DialogTitle>
              <DialogDescription>Create and assign a quick record.</DialogDescription>
            </div>
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList>
                {TABS.map((item) => (
                  <TabsTrigger key={item} value={item}>
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </DialogHeader>
          <div className="space-y-4 px-6 py-5">
            <Field>
              <FieldHint label="Title" info="A short summary of this entry." />
              <InputGroup>
                <InputGroupAddon>
                  <CircleIcon className="text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput
                  value={draft.title}
                  onChange={(event) => updateDraft({ title: event.target.value })}
                  placeholder={`Name this ${tab.toLowerCase()}`}
                />
              </InputGroup>
            </Field>
            <Field>
              <FieldHint label="Notes" info="Context the assignee should see." />
              <Textarea
                rows={4}
                value={draft.notes}
                onChange={(event) => updateDraft({ notes: event.target.value })}
                placeholder="Add context, links or acceptance notes."
                className="min-h-24 resize-none"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldHint label="Status" info="Where this entry sits in the flow." />
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
                <FieldHint label="Assignee" info="Who owns this entry." />
                <Select value={assignee} onValueChange={setAssignee}>
                  <SelectTrigger className="w-full">
                    <span className="flex items-center gap-2">
                      <Avatar className="size-5">
                        <AvatarImage src={activeAssignee.avatar} alt={activeAssignee.name} />
                        <AvatarFallback className="text-[9px]">
                          {activeAssignee.name.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      {activeAssignee.name}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    {ASSIGNEES.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        <Avatar className="size-5">
                          <AvatarImage src={item.avatar} alt={item.name} />
                          <AvatarFallback className="text-[9px]">
                            {item.name.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldHint label="Due date" info="When this entry should be done." />
                <Select value={dueDate} onValueChange={setDueDate}>
                  <SelectTrigger className="w-full">
                    <span className="flex items-center gap-2">
                      <CalendarIcon className="size-4 text-muted-foreground" />
                      {dueDate}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    {DUE_DATES.map((item) => (
                      <SelectItem key={item} value={item}>
                        <CalendarIcon className="size-4 text-muted-foreground" />
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldHint label="Priority" info="How urgent this entry is." />
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
                <FieldHint label="Labels" info="Group this entry with related work." />
                <LabelPicker selected={labels} onChange={setLabels} />
              </Field>
            </div>
          </div>
          <DialogFooter className="mx-0 mb-0 rounded-b-xl sm:justify-end">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              <SparklesIcon />
              Create {tab}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}
export default Dialog12Block
