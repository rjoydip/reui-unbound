import { useMemo, useState } from "react"
import {
  BarChart3Icon,
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  CpuIcon,
  CreditCardIcon,
  EyeIcon,
  MoreVerticalIcon,
  PencilIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  ShieldIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/reui-unbound/badge"
import { cn } from "cn"

import {
  LABEL_DOT,
  SIGNAL_VARIANT,
  STAGE_META,
  TASKS,
} from "./data"
import type { RoadmapTask, Signal, Stage } from "./data"

const TASK_ICONS = {
  sparkles: SparklesIcon,
  card: CreditCardIcon,
  book: BookOpenIcon,
  cpu: CpuIcon,
  shield: ShieldIcon,
  bell: BellIcon,
  phone: PhoneIcon,
  insights: BarChart3Icon,
}

const STAGES: Stage[] = ["Backlog", "To Do", "In Progress", "Done"]
const SIGNALS: Signal[] = ["Blocked", "At risk", "On track", "Queued", "Done"]

function Completion({ value }: { value: number | null }) {
  if (value === null) {
    return <span className="text-muted-foreground text-sm">–</span>
  }
  const radius = 8
  const circumference = 2 * Math.PI * radius
  const tone =
    value >= 80 ? "text-success" : value >= 50 ? "text-warning" : "text-destructive"
  return (
    <div className="flex items-center gap-1.5">
      <svg width="20" height="20" viewBox="0 0 20 20" className={tone}>
        <circle cx="10" cy="10" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2.5" />
        <circle
          cx="10"
          cy="10"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          transform="rotate(-90 10 10)"
        />
      </svg>
      <span className="text-sm tabular-nums">{value}%</span>
    </div>
  )
}

export function RoadmapQueueBlock() {
  const [tasks] = useState(TASKS)
  const [search, setSearch] = useState("")
  const [signalFilter, setSignalFilter] = useState<Signal | null>(null)
  const [collapsed, setCollapsed] = useState<Stage[]>([])
  const [props, setProps] = useState({
    owner: true,
    label: true,
    due: true,
    completion: true,
    signal: true,
  })
  const [contextLine, setContextLine] = useState(false)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return tasks.filter((task) => {
      if (signalFilter && task.signal !== signalFilter) return false
      if (!term) return true
      return task.title.toLowerCase().includes(term)
    })
  }, [tasks, search, signalFilter])

  const columns = [
    "minmax(0,1fr)",
    props.owner ? "80px" : null,
    props.label ? "120px" : null,
    props.due ? "108px" : null,
    props.completion ? "86px" : null,
    props.signal ? "100px" : null,
    "36px",
  ]
    .filter(Boolean)
    .join(" ")

  function toggleGroup(stage: Stage) {
    setCollapsed((current) =>
      current.includes(stage)
        ? current.filter((entry) => entry !== stage)
        : [...current, stage],
    )
  }

  function toggleProp(key: keyof typeof props) {
    setProps((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Roadmap queue</h1>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold">Roadmap Queue</h2>
            <p className="text-muted-foreground text-sm">
              Track work by stage, owner, and signal.
            </p>
          </div>
          <div className="flex flex-wrap items-center divide-x text-sm">
            <span className="flex items-center gap-1.5 pr-3">
              Tasks <span className="bg-muted rounded-full px-2 text-xs">19</span>
            </span>
            <span className="flex items-center gap-1.5 px-3">
              Blocked
              <span className="bg-destructive/10 text-destructive rounded-full px-2 text-xs">3</span>
            </span>
            <span className="flex items-center gap-1.5 px-3">
              At risk
              <span className="bg-warning/15 text-warning-foreground rounded-full px-2 text-xs">3</span>
            </span>
            <span className="flex items-center gap-1.5 pl-3">
              Unassigned
              <span className="bg-muted rounded-full px-2 text-xs">2</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <InputGroup className="h-9 w-full sm:max-w-72">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search roadmap..."
              className="text-sm"
            />
          </InputGroup>

          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <BellIcon />
                  Signals
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel className="text-muted-foreground text-xs font-medium">
                  Signal
                </DropdownMenuLabel>
                {SIGNALS.map((signal) => (
                  <DropdownMenuItem
                    key={signal}
                    className="justify-between py-1"
                    onSelect={() =>
                      setSignalFilter((current) => (current === signal ? null : signal))
                    }
                  >
                    {signal}
                    {signalFilter === signal && <CheckIcon className="size-3.5" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontalIcon />
                  Display
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-72 p-0">
                <div className="border-b p-3">
                  <div className="text-muted-foreground mb-2 text-xs">Table</div>
                  <div className="flex items-center justify-between py-1 text-sm">
                    Density
                    <Select defaultValue="Compact">
                      <SelectTrigger size="sm" className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Compact">Compact</SelectItem>
                        <SelectItem value="Comfortable">Comfortable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between py-1 text-sm">
                    Context line
                    <Switch checked={contextLine} onCheckedChange={setContextLine} />
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-muted-foreground mb-2 text-xs">Display properties</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      ["owner", "Owner"],
                      ["label", "Label"],
                      ["due", "Due date"],
                      ["completion", "Completion"],
                      ["signal", "Signal"],
                    ].map(([key, label]) => {
                      const active = props[key as keyof typeof props]
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => toggleProp(key as keyof typeof props)}
                          className={cn(
                            "flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs",
                            active ? "bg-muted font-medium" : "text-muted-foreground",
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

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCollapsed((current) =>
                  current.length === STAGES.length ? [] : STAGES,
                )
              }
            >
              {collapsed.length === STAGES.length ? "Expand groups" : "Collapse groups"}
            </Button>
            <Button size="sm" onClick={() => toast("New task")}>
              <PlusIcon />
              New task
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          {STAGES.map((stage) => {
            const stageTasks = filtered.filter((task) => task.stage === stage)
            if (stageTasks.length === 0 && search) return null
            const meta = STAGE_META[stage]
            const open = !collapsed.includes(stage)
            return (
              <div key={stage} className="border-b last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleGroup(stage)}
                  className="hover:bg-muted/40 flex w-full items-center gap-2 bg-muted/30 px-3 py-2 text-left"
                >
                  {open ? (
                    <ChevronDownIcon className="text-muted-foreground size-3.5" />
                  ) : (
                    <ChevronRightIcon className="text-muted-foreground size-3.5" />
                  )}
                  <span className={cn("size-1.5 rounded-full", meta.dot)} />
                  <span className="text-sm font-medium">{stage}</span>
                  <span className="bg-muted text-muted-foreground rounded-full px-1.5 text-xs">
                    {stageTasks.length}
                  </span>
                  <span className="text-muted-foreground ml-auto text-xs">
                    {meta.description}
                  </span>
                </button>

                {open &&
                  stageTasks.map((task: RoadmapTask) => {
                    const Icon = TASK_ICONS[task.icon as keyof typeof TASK_ICONS]
                    return (
                      <div
                        key={task.id}
                        className={cn(
                          "grid items-center gap-3 border-t px-3 py-2 text-sm",
                          contextLine && "min-h-12",
                        )}
                        style={{ gridTemplateColumns: columns }}
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <Icon className="text-muted-foreground size-4 shrink-0" />
                          <span className="truncate">{task.title}</span>
                        </div>

                        {props.owner && (
                          <div className="flex items-center">
                            {task.owners.length === 0 ? (
                              <span className="text-muted-foreground">—</span>
                            ) : (
                              <div className="flex -space-x-1.5">
                                {task.owners.map((owner) => (
                                  <Avatar key={owner} className="border-background size-5 border-2">
                                    <AvatarImage
                                      src={`https://i.pravatar.cc/48?u=${owner}`}
                                      alt=""
                                    />
                                    <AvatarFallback className="text-[8px]">
                                      {owner[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {props.label && (
                          <div className="flex items-center gap-1.5 text-xs">
                            <span
                              className={cn(
                                "size-1.5 rounded-full",
                                LABEL_DOT[task.label] ?? "bg-muted-foreground/50",
                              )}
                            />
                            <span className="truncate">{task.label}</span>
                          </div>
                        )}

                        {props.due && (
                          <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                            <CalendarIcon className="size-3.5" />
                            {task.due}
                          </div>
                        )}

                        {props.completion && <Completion value={task.completion} />}

                        {props.signal && (
                          <Badge variant={SIGNAL_VARIANT[task.signal]} size="xs">
                            {task.signal}
                          </Badge>
                        )}

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm" aria-label="Task actions">
                              <MoreVerticalIcon />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem>
                              <EyeIcon />
                              Open task
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => toast(`Copied ${task.id}`)}>
                              <CopyIcon />
                              Copy key
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <PencilIcon />
                              Update status
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    )
                  })}
              </div>
            )
          })}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t bg-muted/30 px-3 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold">Stage Mix</span>
            {STAGES.map((stage) => {
              const count = tasks.filter((task) => task.stage === stage).length
              return (
                <span key={stage} className="rounded-md border px-2 py-0.5 text-muted-foreground">
                  {stage}: {count}
                </span>
              )
            })}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">{filtered.length} visible</span>
            <span className="text-muted-foreground">of {tasks.length} tasks</span>
            <button
              type="button"
              onClick={() => {
                setSearch("")
                setSignalFilter(null)
              }}
              className="bg-muted rounded-md px-2 py-0.5 font-medium"
            >
              All tasks
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapQueueBlock
