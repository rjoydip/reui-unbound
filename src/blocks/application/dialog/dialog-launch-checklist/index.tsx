import { useRef, useState, type ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  BellRingIcon, BlocksIcon, BriefcaseIcon, CalendarClockIcon, InfoIcon, MailIcon,
  PlusIcon, SearchIcon, ShieldCheckIcon, TimerIcon, UserIcon,
} from "lucide-react"
import { RiCalendar2Fill } from "@remixicon/react"

import { Badge } from "@/components/kit/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Loom } from "@/components/ui/svgs/loom"
import { Slack } from "@/components/ui/svgs/slack"

type SectionDef = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  status: "In progress" | "Pending"
  info?: string
}

type FieldDef = { id: string; icon: LucideIcon; label: string; value: string }
type SetupApp = { id: string; name: string; description: string; connected: boolean; logo: ReactNode }

const SETUP_SECTIONS: SectionDef[] = [
  { id: "ownership", title: "Ownership & cadence", icon: ShieldCheckIcon, status: "In progress",
    description: "Lock in the primary operator, workspace alias, and review window." },
  { id: "apps", title: "Connected apps", icon: BlocksIcon, status: "Pending",
    description: "Choose the tools that can send events or receive rollout updates." },
  { id: "fallback", title: "Fallback rules", icon: BellRingIcon, status: "Pending",
    description: "Set where alerts and digests land if the primary flow is paused.",
    info: "Fallback rules take over when the primary launch flow is paused." },
]

const SETUP_FIELDS: Record<string, FieldDef[]> = {
  ownership: [
    { id: "owner", icon: UserIcon, label: "Launch owner", value: "Ari Mendoza" },
    { id: "alias", icon: BriefcaseIcon, label: "Workspace alias", value: "growth-command" },
    { id: "window", icon: CalendarClockIcon, label: "Review window", value: "Tue, 10:00 UTC" },
  ],
  fallback: [
    { id: "threshold", icon: TimerIcon, label: "Pause threshold", value: "15 minutes" },
    { id: "route", icon: BlocksIcon, label: "Fallback route", value: "#launch-alerts" },
    { id: "digest", icon: MailIcon, label: "Digest destination", value: "ops@reui.io" },
  ],
}

const SETUP_APPS: SetupApp[] = [
  { id: "slack", name: "Slack", connected: true, logo: <Slack className="size-5" />,
    description: "Posts rollout handoffs to the release channel." },
  { id: "google-calendar", name: "Google Calendar", connected: false,
    logo: <RiCalendar2Fill className="size-5 text-[#4285F4]" />,
    description: "Adds freeze windows and review holds to the checklist." },
  { id: "loom", name: "Loom", connected: true, logo: <Loom className="size-5" />,
    description: "Stores quick walkthroughs for launch operators." },
]

function EditableField({ field, value, onSave }: {
  field: FieldDef
  value: string
  onSave: (value: string) => void
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const cancelled = useRef(false)

  if (editing) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <field.icon className="text-muted-foreground size-4 shrink-0" />
        <span className="text-muted-foreground flex-1">{field.label}</span>
        <Input
          autoFocus
          aria-label={field.label}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={() => {
            if (!cancelled.current) onSave(draft)
            cancelled.current = false
            setEditing(false)
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") event.currentTarget.blur()
            if (event.key === "Escape") {
              cancelled.current = true
              setEditing(false)
            }
          }}
          className="h-7 w-44 text-right"
        />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <field.icon className="text-muted-foreground size-4 shrink-0" />
      <span className="text-muted-foreground flex-1">{field.label}</span>
      <button
        type="button"
        onClick={() => {
          setDraft(value)
          setEditing(true)
        }}
        className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 rounded px-1.5 py-0.5 transition-colors focus-visible:ring-3 focus-visible:outline-none"
      >
        {value}
      </button>
    </div>
  )
}

function ConnectedAppsPanel() {
  const [query, setQuery] = useState("")
  const [apps, setApps] = useState(SETUP_APPS)
  const filtered = apps.filter((app) =>
    `${app.name} ${app.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <InputGroup className="h-8 flex-1">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            aria-label="Search apps"
            placeholder="Search apps"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
        <Button variant="outline" size="sm">
          <PlusIcon />
          Add app
        </Button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground py-6 text-center text-sm">No apps match.</p>
      ) : null}

      {filtered.map((app) => (
        <Item key={app.id} variant="outline" className="flex-nowrap p-2.5">
          <ItemMedia>{app.logo}</ItemMedia>
          <ItemContent>
            <ItemTitle>{app.name}</ItemTitle>
            <ItemDescription>{app.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant={app.connected ? "success-light" : "secondary"} size="sm">
              {app.connected ? "Connected" : "Ready"}
            </Badge>
            <Button
              size="sm"
              variant={app.connected ? "outline" : "default"}
              onClick={() => {
                if (app.connected) return
                setApps((current) =>
                  current.map((item) =>
                    item.id === app.id ? { ...item, connected: true } : item,
                  ),
                )
              }}
            >
              {app.connected ? "Manage" : "Connect"}
            </Button>
          </ItemActions>
        </Item>
      ))}
    </div>
  )
}

export function DialogLaunchChecklistBlock() {
  const [open, setOpen] = useState(false)
  const [fieldValues, setFieldValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(Object.values(SETUP_FIELDS).flat().map((field) => [field.id, field.value])),
  )

  return (
    <TooltipProvider>
      <main className="flex min-h-svh items-center justify-center p-6">
        <h1 className="sr-only">Workspace launch checklist dialog</h1>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open launch checklist
        </Button>

        <DialogRoot open={open} onOpenChange={setOpen}>
          <DialogContent className="flex max-h-[85svh] flex-col gap-0 overflow-hidden p-0 sm:max-w-[560px]">
            <DialogHeader className="gap-1 p-5 pb-3">
              <DialogTitle>Launch checklist</DialogTitle>
              <DialogDescription>Finalize routing, apps, and fallback rules before launch.</DialogDescription>
            </DialogHeader>

            <div className="min-h-0 flex-1 overflow-y-auto">
              <Accordion type="multiple" defaultValue={["ownership"]}>
                {SETUP_SECTIONS.map((section) => (
                  <AccordionItem key={section.id} value={section.id} className="border-b-0">
                    <AccordionTrigger className="items-start gap-3 px-5 py-3 hover:no-underline">
                      <div className="flex flex-1 items-start gap-3 text-left">
                        <div className="bg-muted/60 flex size-10 shrink-0 items-center justify-center rounded-lg border">
                          <section.icon className="size-4.5" />
                        </div>
                        <div className="grid gap-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-medium">{section.title}</span>
                            {section.info ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span
                                    role="img"
                                    tabIndex={0}
                                    aria-label={section.info}
                                    onClick={(event) => event.stopPropagation()}
                                    className="text-muted-foreground hover:text-foreground inline-flex"
                                  >
                                    <InfoIcon className="size-3.5" />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>{section.info}</TooltipContent>
                              </Tooltip>
                            ) : null}
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={section.status === "In progress" ? "success-light" : "secondary"}
                        size="sm"
                        className="mt-1 shrink-0"
                      >
                        {section.status}
                      </Badge>
                    </AccordionTrigger>

                    <AccordionContent className="pr-5 pb-3 pl-[52px]">
                      {section.id === "apps" ? (
                        <ConnectedAppsPanel />
                      ) : (
                        <div className="grid gap-3 rounded-lg border p-3">
                          {SETUP_FIELDS[section.id].map((field) => (
                            <EditableField
                              key={field.id}
                              field={field}
                              value={fieldValues[field.id]}
                              onSave={(value) =>
                                setFieldValues((current) => ({ ...current, [field.id]: value }))
                              }
                            />
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <DialogFooter className="mx-0 mb-0 rounded-b-xl border-t bg-muted/50 p-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </main>
    </TooltipProvider>
  )
}

export default DialogLaunchChecklistBlock
