import { useMemo, useState } from "react"
import {
  CheckIcon,
  ChevronsUpDownIcon,
  ContainerIcon,
  DatabaseIcon,
  FilterIcon,
  FlameIcon,
  Flower2Icon,
  Link2Icon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  ZapIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

import {
  ENGAGEMENTS,
  STAGES,
  averageCompletion,
} from "./data"
import type { Crew, Engagement, Stage } from "./data"

function StageBadge({ stage }: { stage: Stage }) {
  if (stage === "Discovery") {
    return (
      <Badge
        variant="outline"
        size="lg"
        className="rounded border-violet-500/20 bg-violet-500/10 px-2 text-violet-600 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300"
      >
        {stage}
      </Badge>
    )
  }
  if (stage === "In Production") {
    return (
      <Badge variant="secondary" size="lg" className="rounded px-2">
        {stage}
      </Badge>
    )
  }
  if (stage === "Client Review") {
    return (
      <Badge variant="warning-light" size="lg" className="rounded px-2">
        {stage}
      </Badge>
    )
  }
  return (
    <Badge variant="success-light" size="lg" className="rounded px-2">
      {stage}
    </Badge>
  )
}

function BrandMark({ name }: { name: string }) {
  switch (name) {
    case "Stripe":
      return (
        <span className="grid size-5 shrink-0 place-items-center rounded-[5px] bg-[#635bff] text-[10px] font-bold text-white">
          S
        </span>
      )
    case "Docker":
      return <ContainerIcon className="size-5 shrink-0 text-[#2496ed]" />
    case "Gemini":
      return (
        <span className="size-4 shrink-0 rotate-45 rounded-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
      )
    case "Supabase":
      return <ZapIcon className="size-5 shrink-0 text-[#3ecf8e]" />
    case "Neon":
      return (
        <span className="grid size-5 shrink-0 place-items-center rounded-[4px] border-2 border-[#00e599] text-[9px] font-bold text-[#00e599]">
          N
        </span>
      )
    case "Slack":
      return (
        <span className="grid size-5 shrink-0 grid-cols-2 place-items-center gap-[2px] p-[3px]">
          <span className="size-1.5 rounded-[2px] bg-[#36c5f0]" />
          <span className="size-1.5 rounded-[2px] bg-[#2eb67d]" />
          <span className="size-1.5 rounded-[2px] bg-[#e01e5a]" />
          <span className="size-1.5 rounded-[2px] bg-[#ecb22e]" />
        </span>
      )
    case "Loom":
      return <Flower2Icon className="size-5 shrink-0 text-[#625df5]" />
    case "Hono":
      return <FlameIcon className="size-5 shrink-0 text-[#ff5c00]" />
    case "Convex":
      return (
        <span className="size-4 shrink-0 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />
      )
    case "Redis":
      return <DatabaseIcon className="size-5 shrink-0 text-[#d82c20]" />
    default:
      return (
        <span className="grid size-5 shrink-0 place-items-center rounded-[5px] bg-muted text-[10px] font-bold">
          {name[0]}
        </span>
      )
  }
}

function CompletionBar({ value, stage }: { value: number; stage: Stage }) {
  const filled = Math.round(value / 10)
  const tone =
    stage === "Discovery"
      ? "bg-blue-500"
      : value >= 80
        ? "bg-emerald-500"
        : "bg-amber-500"
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-1.5 w-2.5 rounded-full",
              index < filled ? tone : "bg-muted",
            )}
          />
        ))}
      </div>
      <span className="text-sm font-medium tabular-nums">{value}%</span>
    </div>
  )
}

function CrewAvatars({ crew }: { crew: Crew }) {
  return (
    <div className="flex items-center -space-x-1.5">
      {crew.avatars.map((id) => (
        <Avatar key={id} size="sm" className="ring-2 ring-background">
          <AvatarImage src={`https://i.pravatar.cc/64?img=${id}`} alt="" />
        </Avatar>
      ))}
      {crew.initials && (
        <Avatar size="sm" className="ring-2 ring-background">
          <AvatarFallback className="text-[9px]">
            {crew.initials}
          </AvatarFallback>
        </Avatar>
      )}
      {crew.extra ? (
        <span className="grid size-6 place-items-center rounded-full bg-zinc-900 text-[10px] font-medium text-white ring-2 ring-background">
          +{crew.extra}
        </span>
      ) : null}
    </div>
  )
}

function HeaderCell({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1">
      {label}
      <ChevronsUpDownIcon className="size-3 opacity-50" />
    </span>
  )
}

export function DeliveryBoardBlock() {
  const [search, setSearch] = useState("")
  const [visibleStages, setVisibleStages] = useState<Stage[]>([...STAGES])
  const [selected, setSelected] = useState<string[]>([])
  const [density, setDensity] = useState("Compact")
  const [shown, setShown] = useState({
    completion: true,
    crew: true,
    milestone: true,
  })

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return ENGAGEMENTS.filter((engagement) => {
      if (!visibleStages.includes(engagement.stage)) return false
      if (!term) return true
      return [engagement.client, engagement.title ?? "", engagement.milestone ?? ""]
        .some((value) => value.toLowerCase().includes(term))
    })
  }, [search, visibleStages])

  const groups = useMemo(
    () =>
      STAGES.map((stage) => ({
        stage,
        rows: filtered.filter((engagement) => engagement.stage === stage),
      })).filter((group) => group.rows.length > 0),
    [filtered],
  )

  const columns = [
    "44px",
    "minmax(0,1fr)",
    "minmax(0,1.2fr)",
    shown.completion ? "210px" : null,
    shown.crew ? "150px" : null,
    shown.milestone ? "135px" : null,
  ]
    .filter(Boolean)
    .join(" ")

  const nearDone = ENGAGEMENTS.filter(
    (engagement) => (engagement.completion ?? -1) >= 80,
  ).length

  function toggleStage(stage: Stage) {
    setVisibleStages((current) =>
      current.includes(stage)
        ? current.filter((entry) => entry !== stage)
        : [...current, stage],
    )
  }

  function toggleShown(key: keyof typeof shown) {
    setShown((current) => ({ ...current, [key]: !current[key] }))
  }

  function toggleSelected(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    )
  }

  function toggleGroup(rows: Engagement[]) {
    const ids = rows.map((row) => row.id)
    const allSelected = ids.every((id) => selected.includes(id))
    setSelected((current) =>
      allSelected
        ? current.filter((id) => !ids.includes(id))
        : Array.from(new Set([...current, ...ids])),
    )
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Delivery board</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Delivery Board</h2>
              <p className="text-muted-foreground text-sm">
                Active studio engagements • Week Of Mar 10
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Engagements</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  {ENGAGEMENTS.length}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Near done</span>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-medium tabular-nums text-emerald-600 dark:text-emerald-400">
                  {nearDone}
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
            <InputGroup className="h-9 w-full sm:max-w-80">
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search engagements..."
                className="text-sm"
              />
            </InputGroup>

            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon />
                    Stages
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-64 p-3">
                  <div className="text-muted-foreground mb-2 text-xs font-medium">
                    Visible stages
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {STAGES.map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => toggleStage(stage)}
                        className="hover:bg-muted flex items-center justify-between gap-2 rounded px-1 py-1.5"
                      >
                        <StageBadge stage={stage} />
                        {visibleStages.includes(stage) && (
                          <CheckIcon className="size-4 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontalIcon />
                    Display
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-64 p-0">
                  <div className="border-b p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Table
                    </div>
                    <div className="flex items-center justify-between py-1 text-sm">
                      Density
                      <Select value={density} onValueChange={setDensity}>
                        <SelectTrigger size="sm" className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Compact">Compact</SelectItem>
                          <SelectItem value="Comfortable">Comfortable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Display properties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        ["completion", "Completion"],
                        ["crew", "Crew"],
                        ["milestone", "Milestone"],
                      ].map(([key, label]) => {
                        const active = shown[key as keyof typeof shown]
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleShown(key as keyof typeof shown)}
                            className={cn(
                              "flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs",
                              active
                                ? "bg-muted font-medium"
                                : "text-muted-foreground",
                            )}
                          >
                            {active && <CheckIcon className="size-3" />}
                            {label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {groups.length === 0 && (
            <div className="text-muted-foreground px-4 py-10 text-center text-sm">
              No engagements match the current filters.
            </div>
          )}

          {groups.map((group) => {
            const ids = group.rows.map((row) => row.id)
            const allSelected = ids.every((id) => selected.includes(id))
            return (
              <div key={group.stage}>
                <div className="flex items-center justify-between gap-2 border-b bg-muted/40 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                      {group.stage}
                    </span>
                    <span className="rounded-full border bg-background/60 px-1.5 text-xs tabular-nums dark:bg-transparent">
                      {group.rows.length}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    Avg {averageCompletion(group.rows)}%
                  </span>
                </div>

                <div
                  className="text-muted-foreground grid items-center gap-x-4 border-b bg-background px-4 py-2 text-xs"
                  style={{ gridTemplateColumns: columns }}
                >
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={() => toggleGroup(group.rows)}
                    aria-label={`Select ${group.stage}`}
                  />
                  <HeaderCell label="Client" />
                  <HeaderCell label="Engagement" />
                  {shown.completion && <HeaderCell label="Completion" />}
                  {shown.crew && <HeaderCell label="Crew" />}
                  {shown.milestone && <HeaderCell label="Milestone" />}
                </div>

                {group.rows.map((engagement) => (
                  <div
                    key={engagement.id}
                    className={cn(
                      "hover:bg-muted/30 grid items-center gap-x-4 border-b px-4",
                      density === "Compact" ? "py-2" : "py-3",
                      selected.includes(engagement.id) && "bg-muted/40",
                    )}
                    style={{ gridTemplateColumns: columns }}
                  >
                    <Checkbox
                      checked={selected.includes(engagement.id)}
                      onCheckedChange={() => toggleSelected(engagement.id)}
                      aria-label={`Select ${engagement.client}`}
                    />

                    <div className="flex min-w-0 items-center gap-2">
                      <BrandMark name={engagement.client} />
                      <span className="truncate text-sm font-medium">
                        {engagement.client}
                      </span>
                    </div>

                    <div className="flex min-w-0 items-center gap-1.5">
                      {engagement.title ? (
                        <>
                          <span className="truncate text-sm">
                            {engagement.title}
                          </span>
                          <Link2Icon className="text-muted-foreground size-3.5 shrink-0" />
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() =>
                            toast(`Add engagement for ${engagement.client}`)
                          }
                          aria-label={`Add engagement for ${engagement.client}`}
                          className="text-muted-foreground hover:text-foreground grid size-7 place-items-center rounded-full border border-dashed transition-colors"
                        >
                          <PlusIcon className="size-3.5" />
                        </button>
                      )}
                    </div>

                    {shown.completion &&
                      (engagement.completion === null ? (
                        <span className="text-muted-foreground text-sm">-</span>
                      ) : (
                        <CompletionBar
                          value={engagement.completion}
                          stage={engagement.stage}
                        />
                      ))}

                    {shown.crew && <CrewAvatars crew={engagement.crew} />}

                    {shown.milestone &&
                      (engagement.milestone ? (
                        <Badge
                          variant="outline"
                          size="default"
                          className="w-fit rounded-md px-2"
                        >
                          {engagement.milestone}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          No milestone
                        </span>
                      ))}
                  </div>
                ))}
              </div>
            )
          })}

          {selected.length > 0 && (
            <div className="flex flex-wrap items-center justify-end gap-2 bg-muted/40 px-4 py-2.5 text-sm">
              <span className="bg-muted rounded-md px-2 py-1">
                {selected.length} selected
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelected([])}
              >
                Clear
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeliveryBoardBlock
