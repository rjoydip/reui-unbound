import { useState } from "react"
import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  CircleCheckIcon,
  CircleDotIcon,
  ClockIcon,
  FileTextIcon,
  HashIcon,
  InfoIcon,
  MailIcon,
  PencilIcon,
  PlusIcon,
  ShieldCheckIcon,
  XIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Frame, FramePanel } from "@/components/kit/frame"
import { cn } from "cn"

type DetailKey =
  | "dueDate" | "status" | "sla" | "priority" | "source" | "channel"
  | "form" | "category" | "tags" | "owners" | "updates" | "created" | "updated"

interface Details {
  dueDate: Date
  status: string
  sla: string
  priority: string
  source: string
  channel: string
  form: string
  category: string
  tags: string[]
  owners: string[]
  updates: string
  created: string
  updated: string
}

const INITIAL: Details = {
  dueDate: new Date(2026, 3, 30),
  status: "Open",
  sla: "SLA Met",
  priority: "Medium",
  source: "Customer Portal",
  channel: "identity-access",
  form: "Workspace Access",
  category: "Access Request",
  tags: ["Feature", "Security"],
  owners: ["Mira Stone", "Leo Grant"],
  updates: "Requester notified",
  created: "Jan 21, 2026 at 10:16 PM",
  updated: "Just now",
}

const ROWS: { key: DetailKey; label: string; info?: string; locked?: boolean }[] = [
  { key: "dueDate", label: "Due Date", info: "When the ticket is due." },
  { key: "status", label: "Status" },
  { key: "sla", label: "SLA", info: "Response target for this priority." },
  { key: "priority", label: "Priority" },
  { key: "source", label: "Source" },
  { key: "channel", label: "Channel" },
  { key: "form", label: "Form" },
  { key: "category", label: "Category" },
  { key: "tags", label: "Tags" },
  { key: "owners", label: "Owners" },
  { key: "updates", label: "Updates" },
  { key: "created", label: "Created", locked: true },
  { key: "updated", label: "Updated", locked: true },
]

const STATUSES = ["Open", "In progress", "Pending", "Resolved"]
const SLAS = ["SLA Met", "At risk", "Breached"]
const PRIORITIES = ["Urgent", "High", "Medium", "Low"]
const SOURCES = ["Customer Portal", "Email", "Slack", "Phone"]
const UPDATES = ["Requester notified", "Awaiting customer", "Internal only"]
const TAGS = ["Feature", "Security", "Billing", "Access"]
const OWNERS = ["Mira Stone", "Leo Grant", "Priya Nair", "Theo Alvarez"]

const SELECT_EDITORS: Partial<Record<DetailKey, string[]>> = {
  status: STATUSES, sla: SLAS, priority: PRIORITIES, source: SOURCES, updates: UPDATES,
}

const fmt = (date: Date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
const initials = (name: string) => name.split(" ").map((part) => part[0]).join("")

function InfoHint({ text }: { text: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><InfoIcon className="size-3.5 text-muted-foreground/70" /></TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function line(Icon: LucideIcon, text: React.ReactNode) {
  return <span className="flex items-center gap-2"><Icon className="size-3.5 text-muted-foreground" />{text}</span>
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-2 py-0.5 text-xs font-medium transition-colors",
        active ? "border-primary/20 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-muted"
      )}
    >
      {children}
    </button>
  )
}

export function Form7Block() {
  const [details, setDetails] = useState(INITIAL)
  const [editing, setEditing] = useState<DetailKey | null>(null)
  const [draft, setDraft] = useState<Details | null>(null)
  const [saving, setSaving] = useState<DetailKey | null>(null)

  const startEdit = (key: DetailKey) => { setDraft({ ...details }); setEditing(key) }
  const patch = (key: DetailKey, value: Details[DetailKey]) => setDraft((d) => (d ? { ...d, [key]: value } : d))
  const toggleIn = (key: "tags" | "owners", value: string) =>
    draft && patch(key, draft[key].includes(value) ? draft[key].filter((v) => v !== value) : [...draft[key], value])

  const save = (key: DetailKey) => {
    if (!draft) return
    if (["channel", "form", "category"].some((k) => key === k && !draft[key as "channel"].trim())) {
      toast.error("This field cannot be empty")
      return
    }
    if (key === "owners" && draft.owners.length === 0) { toast.error("Keep at least one owner"); return }
    setSaving(key)
    window.setTimeout(() => {
      setDetails(draft); setSaving(null); setEditing(null); setDraft(null)
      toast.success("Ticket details updated")
    }, 500)
  }

  const renderValue = (key: DetailKey) => {
    switch (key) {
      case "dueDate": return line(CalendarIcon, fmt(details.dueDate))
      case "status":
        return <Badge variant="info-light" radius="full" className="gap-1"><CircleDotIcon />{details.status}</Badge>
      case "sla":
        return <Badge variant="success-light" radius="full" className="gap-1"><ShieldCheckIcon />{details.sla}</Badge>
      case "priority": return line(ZapIcon, details.priority)
      case "source": return line(MailIcon, details.source)
      case "channel": return line(HashIcon, details.channel)
      case "form": return line(FileTextIcon, details.form)
      case "category": return details.category
      case "tags":
        return <span className="flex flex-wrap gap-1.5">{details.tags.map((tag) => <Badge key={tag} variant="secondary" radius="full">{tag}</Badge>)}</span>
      case "owners":
        return (
          <span className="flex flex-wrap gap-1.5">
            {details.owners.map((owner) => (
              <Badge key={owner} variant="outline" radius="full" className="gap-1.5 py-0.5">
                <Avatar size="sm" className="size-4"><AvatarFallback className="text-[8px]">{initials(owner)}</AvatarFallback></Avatar>
                {owner}
              </Badge>
            ))}
          </span>
        )
      case "updates": return line(BellIcon, details.updates)
      case "created": return line(ClockIcon, details.created)
      case "updated": return line(CircleCheckIcon, details.updated)
    }
  }

  const renderEditor = (key: DetailKey) => {
    if (!draft) return null
    const options = SELECT_EDITORS[key]
    if (options) {
      return (
        <Select value={draft[key] as string} onValueChange={(value) => patch(key, value)}>
          <SelectTrigger className="h-8 w-full max-w-56"><SelectValue /></SelectTrigger>
          <SelectContent>{options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
        </Select>
      )
    }
    switch (key) {
      case "dueDate":
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="w-full max-w-56 justify-start font-normal">
                <CalendarIcon />{fmt(draft.dueDate)}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar mode="single" selected={draft.dueDate} onSelect={(date) => date && patch("dueDate", date)} />
            </PopoverContent>
          </Popover>
        )
      case "channel": case "form": case "category":
        return (
          <Input
            value={draft[key]}
            onChange={(event) => patch(key, event.target.value)}
            className="h-8 max-w-56"
            aria-label={key}
            autoFocus
          />
        )
      case "tags":
        return (
          <span className="flex flex-wrap gap-1.5">
            {TAGS.map((tag) => <Chip key={tag} active={draft.tags.includes(tag)} onClick={() => toggleIn("tags", tag)}>{tag}</Chip>)}
          </span>
        )
      case "owners":
        return (
          <span className="flex flex-wrap gap-1.5">
            {OWNERS.map((owner) => <Chip key={owner} active={draft.owners.includes(owner)} onClick={() => toggleIn("owners", owner)}>{owner}</Chip>)}
          </span>
        )
      default: return null
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <Frame className="w-full max-w-2xl" spacing="sm">
        <FramePanel className="p-0">
          <div className="flex items-start justify-between gap-3 border-b p-5">
            <div className="space-y-0.5">
              <h2 className="text-sm font-semibold">Ticket Details</h2>
              <p className="text-sm text-muted-foreground">Operational fields for triage.</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => toast.success("Note added to ticket")}>
              <PlusIcon />Add note
            </Button>
          </div>
          <div className="divide-y">
            {ROWS.map((row) => {
              const isEditing = editing === row.key
              return (
                <div key={row.key} className={cn("group/row flex min-h-12 items-center gap-4 px-4 py-2", !row.locked && "transition-colors hover:bg-muted/30")}>
                  <div className="flex w-28 shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
                    {row.label}{row.info && <InfoHint text={row.info} />}
                  </div>
                  <div className="min-w-0 flex-1 text-sm">{isEditing ? renderEditor(row.key) : renderValue(row.key)}</div>
                  {!row.locked && (
                    <div className="flex shrink-0 items-center gap-1">
                      {isEditing ? (
                        <>
                          <Button variant="ghost" size="icon-xs" aria-label="Save field" disabled={saving === row.key} onClick={() => save(row.key)}>
                            {saving === row.key ? <Spinner className="size-3.5" /> : <CheckIcon />}
                          </Button>
                          <Button variant="ghost" size="icon-xs" aria-label="Discard change" onClick={() => { setEditing(null); setDraft(null) }}>
                            <XIcon />
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="ghost" size="icon-xs" aria-label={`Edit ${row.label}`}
                          className="opacity-0 group-hover/row:opacity-100 focus-visible:opacity-100"
                          onClick={() => startEdit(row.key)}
                        >
                          <PencilIcon />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default Form7Block
