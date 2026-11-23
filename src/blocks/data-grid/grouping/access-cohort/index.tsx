import { useMemo, useState } from "react"
import {
  ActivityIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

import {
  GROUPS_BY_TAB,
  TOTALS,
} from "./data"
import type { CohortGroup, CohortMetrics, CohortTab } from "./data"

const TABS: CohortTab[] = ["Intake area", "Booking strength", "Hold risk"]

const GRID =
  "minmax(0,1fr) 90px 150px 150px 140px 140px 120px"

const METRIC_META = {
  verified: { label: "Verified", average: 75, green: "bg-emerald-100 dark:bg-emerald-700", ink: "text-emerald-950 dark:text-white" },
  booked: { label: "Booked", average: 53, green: "bg-emerald-100/80 dark:bg-emerald-800", ink: "text-emerald-950 dark:text-emerald-50" },
  arrived: { label: "Arrived", average: 43, green: "bg-emerald-100/60 dark:bg-emerald-900", ink: "text-emerald-950 dark:text-emerald-100" },
  started: { label: "Started", average: 37, green: "bg-emerald-100/40 dark:bg-emerald-950", ink: "text-emerald-950 dark:text-emerald-200" },
} as const

function MetricCell({
  kind,
  value,
  percent,
  title,
  description,
  answers,
}: {
  kind: "answers" | "verified" | "booked" | "arrived" | "started" | "hold"
  value: number
  percent?: number
  title: string
  description: string
  answers: number
}) {
  if (kind === "answers") {
    return (
      <span className="flex h-full items-center px-2 text-sm font-semibold tabular-nums">
        {value.toLocaleString()}
      </span>
    )
  }

  const meta = kind === "hold" ? null : METRIC_META[kind]
  const tone =
    kind === "hold"
      ? percent! >= 14
        ? "bg-red-100 dark:bg-red-700"
        : percent! >= 10
          ? "bg-red-100/70 dark:bg-red-900"
          : "bg-amber-100 dark:bg-amber-800"
      : meta!.green
  const ink =
    kind === "hold"
      ? percent! >= 14
        ? "text-red-800 dark:text-white"
        : percent! >= 10
          ? "text-red-700 dark:text-red-100"
          : "text-amber-800 dark:text-amber-100"
      : meta!.ink
  const label = kind === "hold" ? "Hold" : meta!.label
  const average = kind === "hold" ? 10 : meta!.average
  const delta = (percent ?? 0) - average

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          tabIndex={0}
          className={cn(
            "flex h-full w-full items-center justify-between gap-2 px-2 py-2",
            tone,
            ink,
          )}
        >
          <span className="text-sm font-semibold tabular-nums">
            {value.toLocaleString()}
          </span>
          <span className="text-xs tabular-nums">{percent}%</span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="w-80 border bg-popover p-0 text-popover-foreground">
        <div className="p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-muted-foreground text-xs">{description}</div>
            </div>
            <Badge variant="success-light" size="xs">
              {label}
            </Badge>
          </div>
          <div className="bg-border my-2 h-px" />
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold tabular-nums">{percent}%</div>
            <Badge
              variant={delta < 0 ? "destructive-light" : "success-light"}
              size="xs"
            >
              {delta > 0 ? "+" : ""}
              {delta} pts
            </Badge>
          </div>
          <div className="text-muted-foreground mt-1 text-xs">
            {value.toLocaleString()} of {answers.toLocaleString()} answers
          </div>
          <div className="bg-muted mt-3 h-1.5 w-full overflow-hidden rounded-full">
            <div
              className="bg-foreground h-full rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="text-muted-foreground mt-2 text-xs">
            Cohort average {average}%
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

function Metrics({
  data,
  title,
  description,
}: {
  data: CohortMetrics
  title: string
  description: string
}) {
  return (
    <>
      <MetricCell kind="answers" value={data.answers} title={title} description={description} answers={data.answers} />
      <MetricCell kind="verified" value={data.verified} percent={data.verifiedPct} title={title} description={description} answers={data.answers} />
      <MetricCell kind="booked" value={data.booked} percent={data.bookedPct} title={title} description={description} answers={data.answers} />
      <MetricCell kind="arrived" value={data.arrived} percent={data.arrivedPct} title={title} description={description} answers={data.answers} />
      <MetricCell kind="started" value={data.started} percent={data.startedPct} title={title} description={description} answers={data.answers} />
      <MetricCell kind="hold" value={data.hold} percent={data.holdPct} title={title} description={description} answers={data.answers} />
    </>
  )
}

export function PatientAccessCohortsBlock() {
  const [tab, setTab] = useState<CohortTab>("Intake area")
  const [cohort, setCohort] = useState("Orthopedic Recall")
  const [holdRisk, setHoldRisk] = useState("All hold risk")
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState(true)
  const [expanded, setExpanded] = useState<string[]>(["clinical", "coverage"])

  const groups = GROUPS_BY_TAB[tab]
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return groups
    return groups.filter(
      (group) =>
        group.name.toLowerCase().includes(term) ||
        group.children.some((child) => child.name.toLowerCase().includes(term)),
    )
  }, [groups, search])

  function changeTab(next: CohortTab) {
    setTab(next)
    setExpanded(GROUPS_BY_TAB[next].map((group) => group.id))
  }

  function toggleGroup(id: string) {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    )
  }

  const allExpanded = filtered.length > 0 && filtered.every((g) => expanded.includes(g.id))

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Patient access cohorts</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Access Cohort</h2>
              <p className="text-muted-foreground text-sm">
                AI intake for joint replacement consults
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-muted-foreground">
                Answers <span className="text-foreground font-medium">4,985</span>
              </span>
              <span className="text-muted-foreground">
                Hold Risk{" "}
                <span className="bg-destructive/10 text-destructive rounded px-1.5 py-0.5 font-medium">
                  512
                </span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1.5">
                Exported 24 Jun 2026
              </span>
              <Button variant="outline" size="sm">
                <DownloadIcon />
                Export
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b px-4">
            {TABS.map((entry) => (
              <button
                key={entry}
                type="button"
                onClick={() => changeTab(entry)}
                className={cn(
                  "-mb-px border-b-2 py-2 text-sm transition-colors",
                  tab === entry
                    ? "border-foreground text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground border-transparent",
                )}
              >
                {entry}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
            <div className="flex flex-wrap items-center gap-2">
              <Select value={cohort} onValueChange={setCohort}>
                <SelectTrigger size="sm" className="w-44">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Orthopedic Recall">Orthopedic Recall</SelectItem>
                  <SelectItem value="Cardiology Priority">Cardiology Priority</SelectItem>
                </SelectContent>
              </Select>
              <Select value={holdRisk} onValueChange={setHoldRisk}>
                <SelectTrigger size="sm" className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All hold risk">All hold risk</SelectItem>
                  <SelectItem value="Hold over 10%">Hold over 10%</SelectItem>
                  <SelectItem value="Hold over 14%">Hold over 14%</SelectItem>
                </SelectContent>
              </Select>
              <InputGroup className="h-9 min-w-60 flex-1 sm:max-w-72">
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search signals"
                  className="text-sm"
                />
              </InputGroup>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Notes</span>
              <Switch checked={notes} onCheckedChange={setNotes} />
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setExpanded(allExpanded ? [] : filtered.map((g) => g.id))
                }
              >
                {allExpanded ? "Collapse" : "Expand"}
              </Button>
            </div>
          </div>

          <div className="bg-muted/20">
            <div
              className="text-foreground/80 grid items-center gap-0 text-xs font-medium"
              style={{ gridTemplateColumns: GRID }}
            >
              <span className="px-3 py-2">Intake Signal</span>
              <span className="px-2 py-2 text-center">Answers</span>
              <span className="px-2 py-2 text-center">Verified</span>
              <span className="px-2 py-2 text-center">Booked</span>
              <span className="px-2 py-2 text-center">Arrived</span>
              <span className="px-2 py-2 text-center">Started</span>
              <span className="px-2 py-2 text-center">Hold</span>
            </div>
          </div>

          <div>
            {filtered.map((group: CohortGroup) => {
              const open = expanded.includes(group.id)
              return (
                <div key={group.id} className="border-b last:border-b-0">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleGroup(group.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") toggleGroup(group.id)
                    }}
                    className="hover:bg-muted/40 grid w-full cursor-pointer items-stretch gap-0 text-left"
                    style={{ gridTemplateColumns: GRID }}
                  >
                    <span className="flex min-w-0 items-center gap-2 px-3 py-2.5">
                      {open && group.children.length > 0 ? (
                        <ChevronDownIcon className="text-muted-foreground size-4" />
                      ) : (
                        <ChevronRightIcon className="text-muted-foreground size-4" />
                      )}
                      <ActivityIcon className="text-muted-foreground size-4" />
                      <span className="text-sm font-semibold">{group.name}</span>
                      {notes && (
                        <span className="text-muted-foreground truncate text-xs">
                          {group.description}
                        </span>
                      )}
                      <span className="bg-muted text-muted-foreground rounded-full px-1.5 text-xs">
                        {group.count}
                      </span>
                    </span>
                    <Metrics data={group} title={group.name} description={group.description} />
                  </div>

                  {open &&
                    group.children.map((child) => (
                      <div
                        key={child.id}
                        className="grid items-stretch gap-0 border-t"
                        style={{ gridTemplateColumns: GRID }}
                      >
                        <div className="flex min-w-0 items-center gap-2 px-3 py-2 pl-9">
                          <span className="border-border text-muted-foreground flex h-6 min-w-7 items-center justify-center rounded-md border px-1 text-[11px] font-medium">
                            {child.code}
                          </span>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium">
                              {child.name}
                            </div>
                            {notes && (
                              <div className="text-muted-foreground truncate text-xs">
                                {child.description}
                              </div>
                            )}
                          </div>
                        </div>
                        <Metrics data={child} title={child.name} description={child.description} />
                      </div>
                    ))}
                </div>
              )
            })}
          </div>

          <div
            className="grid items-center gap-0 border-t bg-muted/30"
            style={{ gridTemplateColumns: GRID }}
          >
            <span className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold">
              Visible Signals
              <span className="bg-muted text-muted-foreground rounded-full px-1.5 text-xs">
                {filtered.reduce((sum, group) => sum + group.count, 0)}
              </span>
            </span>
            <span className="px-2 py-2.5 text-right text-sm font-semibold tabular-nums">
              {TOTALS.answers.toLocaleString()}
            </span>
            {([
              ["verified", TOTALS.verified, TOTALS.verifiedPct],
              ["booked", TOTALS.booked, TOTALS.bookedPct],
              ["arrived", TOTALS.arrived, TOTALS.arrivedPct],
              ["started", TOTALS.started, TOTALS.startedPct],
              ["hold", TOTALS.hold, TOTALS.holdPct],
            ] as const).map(([kind, value, percent]) => (
              <span
                key={kind}
                className={cn(
                  "px-2 py-2.5 text-right text-sm font-semibold tabular-nums",
                  kind === "hold" && "text-destructive",
                )}
              >
                {value.toLocaleString()} / {percent}%
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientAccessCohortsBlock
