"use client"
import { useState } from "react"
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  FileTextIcon,
  FolderIcon,
  InfoIcon,
  SignalIcon,
} from "lucide-react"
import { cn } from "cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
const TEMPLATES = [
  { name: "Bug Report", key: "BUG", brief: "Triage defects with owner and severity.", status: "backlog", priority: "high" },
  { name: "Feature Request", key: "FEAT", brief: "Shape a request into scoped delivery.", status: "planned", priority: "medium" },
  { name: "Chore", key: "CHR", brief: "Track maintenance without extra ceremony.", status: "backlog", priority: "low" },
] as const
const STATUSES = [
  { value: "backlog", label: "Backlog", hint: "Parked until scope is ready.", dot: "bg-zinc-400" },
  { value: "planned", label: "Planned", hint: "Scoped and ready for kickoff.", dot: "bg-sky-500" },
  { value: "in-progress", label: "In Progress", hint: "Active work with weekly updates.", dot: "bg-emerald-500" },
  { value: "paused", label: "Paused", hint: "Waiting on a blocker or decision.", dot: "bg-amber-500" },
] as const
const ASSIGNEES = [
  { value: "maya", name: "Maya Stone", role: "Product lead", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80" },
  { value: "leo", name: "Leo Grant", role: "Design systems", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80" },
  { value: "nora", name: "Nora Chen", role: "Frontend engineering", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80" },
  { value: "samir", name: "Samir Park", role: "Launch operations", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80" },
] as const
const DUE_DATES = [
  { value: "tomorrow", label: "Tomorrow", hint: "Queue for the next planning review." },
  { value: "next-friday", label: "Next Friday", hint: "Land before the weekly release readout." },
  { value: "end-of-month", label: "End of month", hint: "Track with monthly planning closeout." },
] as const
const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
] as const
const LABELS = [
  { id: "feature", name: "Feature", description: "Product-facing capability." },
  { id: "billing", name: "Billing", description: "Revenue or plan logic." },
  { id: "design", name: "Design", description: "Interface or UX work." },
  { id: "operations", name: "Operations", description: "Process and rollout tasks." },
] as const
function InfoHint({ children }: { children: string }) {
  return (
    <FieldLabel className="text-sm font-medium">
      {children}
      <InfoIcon className="size-3.5 text-muted-foreground" aria-label={`About ${children.toLowerCase()}`} />
    </FieldLabel>
  )
}
export function Dialog13Block() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: "Billing Event Cleanup",
    key: "BEC",
    brief: "Audit subscription event mapping before the partner beta opens to billing admins.",
    status: "planned",
    assignee: "maya",
    due: "next-friday",
    priority: "high",
    labels: ["feature", "billing"] as string[],
  })
  const status = STATUSES.find((item) => item.value === form.status) ?? STATUSES[1]
  const assignee = ASSIGNEES.find((item) => item.value === form.assignee) ?? ASSIGNEES[0]
  const due = DUE_DATES.find((item) => item.value === form.due) ?? DUE_DATES[1]
  const priority = PRIORITIES.find((item) => item.value === form.priority) ?? PRIORITIES[2]
  function update(patch: Partial<typeof form>) {
    setForm((current) => ({ ...current, ...patch }))
  }
  function applyTemplate(template: (typeof TEMPLATES)[number]) {
    update({
      name: template.name,
      key: template.key,
      brief: template.brief,
      status: template.status,
      priority: template.priority,
    })
  }
  function toggleLabel(id: string) {
    update({
      labels: form.labels.includes(id)
        ? form.labels.filter((item) => item !== id)
        : [...form.labels, id],
    })
  }
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Create project</Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="grid h-[calc(100svh-2rem)] w-[calc(100vw-2rem)] max-w-none grid-rows-[auto_minmax(0,1fr)_auto] gap-0 overflow-hidden p-0 sm:max-w-none"
        >
          <DialogHeader className="flex-row items-center justify-between border-b px-5 py-3">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <ArrowLeftIcon />
                Back
              </Button>
              <DialogTitle className="sr-only">Create Project</DialogTitle>
              <DialogDescription className="sr-only">
                Set project details, owner, timing and labels, or start from a template.
              </DialogDescription>
            </div>
            <Button variant="outline" size="sm">
              Support
              <ArrowUpRightIcon />
            </Button>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-[672px] px-5 py-9">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-heading text-xl font-medium tracking-tight">Create Project</h2>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="text-muted-foreground">
                      <FileTextIcon />
                      Select template
                      <ChevronDownIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[264px]">
                    {TEMPLATES.map((template) => (
                      <DropdownMenuItem
                        key={template.name}
                        onSelect={() => applyTemplate(template)}
                        className="flex-col items-start gap-0.5"
                      >
                        <span className="text-sm font-medium">{template.name}</span>
                        <span className="line-clamp-1 w-full text-xs text-muted-foreground">
                          {template.brief}
                        </span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Manage templates</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Set details, owner, timing, and labels.
              </p>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-[1fr_140px] gap-4">
                  <Field>
                    <FieldLabel className="text-sm font-medium">Project name</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>
                        <FolderIcon className="text-muted-foreground" />
                      </InputGroupAddon>
                      <InputGroupInput
                        value={form.name}
                        onChange={(event) => update({ name: event.target.value })}
                      />
                    </InputGroup>
                  </Field>
                  <Field>
                    <FieldLabel className="text-sm font-medium">Key</FieldLabel>
                    <Input
                      value={form.key}
                      maxLength={4}
                      onChange={(event) =>
                        update({ key: event.target.value.toUpperCase().replace(/[^A-Z]/g, "") })
                      }
                    />
                  </Field>
                </div>
                <Field>
                  <InfoHint>Project brief</InfoHint>
                  <Textarea
                    rows={3}
                    value={form.brief}
                    onChange={(event) => update({ brief: event.target.value })}
                    className="min-h-20 resize-none"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel className="text-sm font-medium">Status</FieldLabel>
                    <Select value={form.status} onValueChange={(status) => update({ status })}>
                      <SelectTrigger className="w-full">
                        <span className="flex items-center gap-2">
                          <span className={cn("size-2 rounded-full", status.dot)} />
                          {status.label}
                        </span>
                      </SelectTrigger>
                      <SelectContent className="w-[310px]">
                        {STATUSES.map((item) => (
                          <SelectItem key={item.value} value={item.value} className="py-1.5">
                            <span className="flex flex-col items-start gap-0.5">
                              <span className="flex items-center gap-2">
                                <span className={cn("size-2 rounded-full", item.dot)} />
                                {item.label}
                              </span>
                              <span className="pl-4 text-xs text-muted-foreground">{item.hint}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel className="text-sm font-medium">Assigned</FieldLabel>
                    <Select value={form.assignee} onValueChange={(assignee) => update({ assignee })}>
                      <SelectTrigger className="w-full">
                        <span className="flex items-center gap-2">
                          <Avatar className="size-5">
                            <AvatarImage src={assignee.avatar} alt={assignee.name} />
                            <AvatarFallback className="text-[9px]">
                              {assignee.name.slice(0, 1)}
                            </AvatarFallback>
                          </Avatar>
                          {assignee.name}
                        </span>
                      </SelectTrigger>
                      <SelectContent className="w-[248px]">
                        {ASSIGNEES.map((item) => (
                          <SelectItem key={item.value} value={item.value} className="py-1.5">
                            <Avatar className="size-6">
                              <AvatarImage src={item.avatar} alt={item.name} />
                              <AvatarFallback className="text-[9px]">
                                {item.name.slice(0, 1)}
                              </AvatarFallback>
                            </Avatar>
                            <span className="flex flex-col items-start gap-0.5">
                              <span>{item.name}</span>
                              <span className="text-xs text-muted-foreground">{item.role}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <InfoHint>Due date</InfoHint>
                    <Select value={form.due} onValueChange={(due) => update({ due })}>
                      <SelectTrigger className="w-full">
                        <span className="flex items-center gap-2">
                          <CalendarIcon className="size-4 text-muted-foreground" />
                          {due.label}
                        </span>
                      </SelectTrigger>
                      <SelectContent className="w-[310px]">
                        {DUE_DATES.map((item) => (
                          <SelectItem key={item.value} value={item.value} className="py-1.5">
                            <span className="flex flex-col items-start gap-0.5">
                              <span className="flex items-center gap-2">
                                <CalendarIcon className="size-4" />
                                {item.label}
                              </span>
                              <span className="pl-6 text-xs text-muted-foreground">{item.hint}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <InfoHint>Priority</InfoHint>
                    <Select value={form.priority} onValueChange={(priority) => update({ priority })}>
                      <SelectTrigger className="w-full">
                        <span className="flex items-center gap-2">
                          <SignalIcon className="size-4 text-muted-foreground" />
                          {priority.label}
                        </span>
                      </SelectTrigger>
                      <SelectContent>
                        {PRIORITIES.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            <SignalIcon className="size-4 text-muted-foreground" />
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <div className="flex items-center justify-between gap-2">
                    <InfoHint>Labels</InfoHint>
                    <Badge variant="secondary" size="sm">
                      {form.labels.length} selected
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tag the project for planning and reporting.
                  </p>
                  <div className="mt-1 grid gap-3 sm:grid-cols-2">
                    {LABELS.map((label) => {
                      const selected = form.labels.includes(label.id)
                      return (
                        <label
                          key={label.id}
                          onClick={(event) => {
                            if ((event.target as HTMLElement).closest("[data-slot=checkbox]")) return
                            toggleLabel(label.id)
                          }}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors",
                            selected ? "border-input bg-muted/70" : "hover:bg-muted/40"
                          )}
                        >
                          <Checkbox
                            checked={selected}
                            onCheckedChange={() => toggleLabel(label.id)}
                            aria-label={`Tag project ${label.name}`}
                            className="mt-0.5"
                          />
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium">{label.name}</span>
                            <span className="text-sm text-muted-foreground">{label.description}</span>
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </Field>
              </div>
            </div>
          </div>
          <DialogFooter className="mx-0 mb-0 flex-row items-center justify-between rounded-none bg-background px-6 py-3 sm:justify-between">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <InfoIcon className="size-3.5" />
              Project draft
            </span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Create project</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}
export default Dialog13Block
