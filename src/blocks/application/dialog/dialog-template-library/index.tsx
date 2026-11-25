import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  BriefcaseIcon, LayoutGridIcon, LifeBuoyIcon, LinkIcon, RocketIcon, SearchIcon,
  TrendingUpIcon, UsersIcon,
} from "lucide-react"

import { Badge, type BadgeProps } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "cn"

type TemplateCategory = {
  id: string
  label: string
  description: string
  icon: LucideIcon
  tint: string
}

type TemplateTag = { label: string; variant: BadgeProps["variant"] }

type TemplateRecord = {
  id: string
  title: string
  description: string
  team: string
  categoryId: string
  imageUrl: string
  tags: TemplateTag[]
}

const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  { id: "all", label: "All templates", description: "Every starter flow", icon: LayoutGridIcon, tint: "bg-violet-500/10 text-violet-500" },
  { id: "launch", label: "Launch ops", description: "Releases and rollouts", icon: RocketIcon, tint: "bg-rose-500/10 text-rose-500" },
  { id: "client", label: "Client delivery", description: "Projects and approvals", icon: BriefcaseIcon, tint: "bg-amber-500/10 text-amber-600" },
  { id: "revenue", label: "Revenue rhythm", description: "Pipeline and forecasting", icon: TrendingUpIcon, tint: "bg-emerald-500/10 text-emerald-600" },
  { id: "research", label: "Research loops", description: "Interviews and synthesis", icon: SearchIcon, tint: "bg-sky-500/10 text-sky-600" },
  { id: "people", label: "People programs", description: "Hiring and onboarding", icon: UsersIcon, tint: "bg-orange-500/10 text-orange-600" },
  { id: "support", label: "Support systems", description: "Queues and handoffs", icon: LifeBuoyIcon, tint: "bg-cyan-500/10 text-cyan-600" },
  { id: "partner", label: "Partner motion", description: "Enablement and co-sell", icon: LinkIcon, tint: "bg-indigo-500/10 text-indigo-500" },
]

const TEMPLATE_RECORDS: TemplateRecord[] = [
  {
    id: "release-radar",
    title: "Release radar",
    description: "Track launch readiness, blockers, and final sign-off across one weekly control room.",
    team: "Product teams",
    categoryId: "launch",
    imageUrl: "https://picsum.photos/seed/release-radar/260/144",
    tags: [
      { label: "Launch", variant: "secondary" },
      { label: "Weekly", variant: "info-light" },
      { label: "Approvals", variant: "warning-light" },
    ],
  },
  {
    id: "client-pulse-board",
    title: "Client pulse board",
    description: "Keep active engagements aligned with milestones, owners, and risk check-ins.",
    team: "Service teams",
    categoryId: "client",
    imageUrl: "https://picsum.photos/seed/client-pulse/260/144",
    tags: [
      { label: "Delivery", variant: "success-light" },
      { label: "Milestones", variant: "info-light" },
      { label: "Risk", variant: "warning-light" },
    ],
  },
  {
    id: "forecast-bridge",
    title: "Forecast bridge",
    description: "Review commit movement, late-stage changes, and coverage gaps before the number locks.",
    team: "Revenue leaders",
    categoryId: "revenue",
    imageUrl: "https://picsum.photos/seed/forecast-bridge/260/144",
    tags: [
      { label: "Forecast", variant: "secondary" },
      { label: "Pipeline", variant: "focus-light" },
      { label: "Exec", variant: "invert-light" },
    ],
  },
  {
    id: "interview-signal-hub",
    title: "Interview signal hub",
    description: "Collect interview notes, confidence markers, and synthesis themes in one review lane.",
    team: "Research squads",
    categoryId: "research",
    imageUrl: "https://picsum.photos/seed/interview-signal/260/144",
    tags: [
      { label: "Research", variant: "primary-light" },
      { label: "Notes", variant: "secondary" },
      { label: "Themes", variant: "secondary" },
    ],
  },
  {
    id: "support-triage-lane",
    title: "Support triage lane",
    description: "Route incoming requests by severity, surface repeat contacts, and hand off cleanly.",
    team: "Support leads",
    categoryId: "support",
    imageUrl: "https://picsum.photos/seed/support-triage/260/144",
    tags: [
      { label: "Queues", variant: "info-light" },
      { label: "SLA", variant: "warning-light" },
      { label: "Handoffs", variant: "secondary" },
    ],
  },
  {
    id: "partner-enablement-map",
    title: "Partner enablement map",
    description: "Track co-sell readiness, shared assets, and the next enablement session per partner.",
    team: "Partner teams",
    categoryId: "partner",
    imageUrl: "https://picsum.photos/seed/partner-map/260/144",
    tags: [
      { label: "Enablement", variant: "primary-light" },
      { label: "Co-sell", variant: "success-light" },
      { label: "Assets", variant: "secondary" },
    ],
  },
  {
    id: "hiring-loop",
    title: "Hiring loop",
    description: "Run interview stages, collect scorecards, and keep onboarding prep in the same lane.",
    team: "People teams",
    categoryId: "people",
    imageUrl: "https://picsum.photos/seed/hiring-loop/260/144",
    tags: [
      { label: "Hiring", variant: "warning-light" },
      { label: "Onboarding", variant: "secondary" },
      { label: "Interviews", variant: "info-light" },
    ],
  },
]

export function DialogTemplateLibraryBlock() {
  const [open, setOpen] = useState(false)
  const [categoryId, setCategoryId] = useState("all")
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState(TEMPLATE_RECORDS[0].id)

  const visibleTemplates = TEMPLATE_RECORDS.filter((template) => {
    const matchesCategory = categoryId === "all" || template.categoryId === categoryId
    const haystack = `${template.title} ${template.description} ${template.team} ${template.tags
      .map((tag) => tag.label)
      .join(" ")}`.toLowerCase()
    return matchesCategory && haystack.includes(query.trim().toLowerCase())
  })
  const resolvedSelected =
    visibleTemplates.find((template) => template.id === selectedId) ?? visibleTemplates[0]

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Template library dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open starter library
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="flex h-[min(660px,90svh)] flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl">
          <DialogHeader className="shrink-0 gap-1 p-5 pb-4">
            <DialogTitle>Starter library</DialogTitle>
            <DialogDescription>Choose a ready operating shape, then tailor it to your team.</DialogDescription>
          </DialogHeader>

          <div className="flex min-h-0 flex-1 border-t">
            <div className="w-56 shrink-0 overflow-y-auto p-4">
              <p className="text-muted-foreground mb-2 px-2 text-xs">Use cases</p>
              <RadioGroup value={categoryId} onValueChange={setCategoryId} className="gap-1">
                {TEMPLATE_CATEGORIES.map((category) => (
                  <label
                    key={category.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
                      categoryId === category.id ? "bg-muted" : "hover:bg-muted/50",
                    )}
                  >
                    <RadioGroupItem value={category.id} className="sr-only" />
                    <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", category.tint)}>
                      <category.icon className="size-4" />
                    </span>
                    <span className="grid gap-0.5">
                      <span className="text-sm font-medium">{category.label}</span>
                      <span className="text-muted-foreground text-[11px]">{category.description}</span>
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
              <InputGroup className="h-9 shrink-0">
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput
                  aria-label="Search templates"
                  placeholder="Search templates, workflows, or teams..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </InputGroup>

              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
                {visibleTemplates.length === 0 ? (
                  <Empty className="h-full border-0">
                    <EmptyHeader>
                      <EmptyTitle>No templates match</EmptyTitle>
                      <EmptyDescription>Try another use case or search term.</EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                ) : null}

                {visibleTemplates.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => setSelectedId(template.id)}
                    aria-pressed={resolvedSelected?.id === template.id}
                    className={cn(
                      "hover:bg-muted/40 focus-visible:border-ring focus-visible:ring-ring/50 flex w-full gap-3 rounded-lg border p-3 text-left transition-colors focus-visible:ring-3 focus-visible:outline-none",
                      resolvedSelected?.id === template.id
                        ? "border-ring/50 bg-muted/20"
                        : "border-border",
                    )}
                  >
                    <img
                      src={template.imageUrl}
                      alt=""
                      loading="lazy"
                      className="h-[72px] w-[130px] shrink-0 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-semibold">{template.title}</h3>
                        <Badge variant="outline" size="sm" className="shrink-0">
                          {template.team}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1 line-clamp-2 text-xs leading-relaxed">
                        {template.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {template.tags.map((tag) => (
                          <Badge key={tag.label} variant={tag.variant} size="sm">
                            {tag.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="mx-0 mb-0 flex-col gap-3 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground flex items-center gap-2 text-xs">
              <span>{TEMPLATE_RECORDS.length} ready</span>
              <span aria-hidden="true">·</span>
              <span>{resolvedSelected?.title ?? "No template selected"}</span>
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Build from blank
              </Button>
              <Button disabled={!resolvedSelected} onClick={() => setOpen(false)}>
                Open template
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default DialogTemplateLibraryBlock
