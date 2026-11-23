import { useMemo, useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CopyIcon,
  DownloadIcon,
  FilterIcon,
  MoreHorizontalIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { cn } from "cn"

import {
  DEPARTMENTS,
  PEOPLE,
  STATUSES,
  STATUS_DOT,
} from "./data"
import type { Person, PersonStatus } from "./data"

const DEPTHS = [
  { key: "Collapse", value: 0 },
  { key: "1", value: 1 },
  { key: "2", value: 2 },
  { key: "All", value: 3 },
]

const TOTAL_OPEN_ROLES = 6
const TOTAL_PEOPLE = 18
const NEED_ATTENTION = 3

function HeaderCell({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1">
      {label}
      <ChevronsUpDownIcon className="size-3 opacity-50" />
    </span>
  )
}

function RoleBadge({ role }: { role: Person["role"] }) {
  if (!role) return null
  if (role === "Executive") {
    return (
      <Badge variant="secondary" size="sm" className="shrink-0 rounded px-1.5">
        {role}
      </Badge>
    )
  }
  return (
    <Badge
      variant="outline"
      size="sm"
      className="shrink-0 rounded border-violet-500/20 bg-violet-500/10 px-1.5 text-violet-600 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300"
    >
      {role}
    </Badge>
  )
}

function StatusBadge({ status }: { status: PersonStatus }) {
  return (
    <Badge
      variant="secondary"
      size="lg"
      className="gap-1.5 rounded-md px-2 font-normal"
    >
      <span className={cn("size-1.5 rounded-full", STATUS_DOT[status])} />
      {status}
    </Badge>
  )
}

export function ReportingLinesBlock() {
  const [search, setSearch] = useState("")
  const [depth, setDepth] = useState("Collapse")
  const [expanded, setExpanded] = useState<string[]>(["mira"])
  const [selected, setSelected] = useState<string[]>([])
  const [departments, setDepartments] = useState<string[]>([])
  const [statuses, setStatuses] = useState<PersonStatus[]>([])
  const [density, setDensity] = useState("Comfortable")
  const [showTitle, setShowTitle] = useState(true)
  const [shown, setShown] = useState({
    department: true,
    location: true,
    reports: true,
    openRoles: true,
    tenure: true,
    status: true,
  })

  const childrenByParent = useMemo(() => {
    const map = new Map<string | null, Person[]>()
    for (const person of PEOPLE) {
      const list = map.get(person.parentId) ?? []
      list.push(person)
      map.set(person.parentId, list)
    }
    return map
  }, [])

  const levels = useMemo(() => {
    const byId = new Map(PEOPLE.map((person) => [person.id, person]))
    const map = new Map<string, number>()
    for (const person of PEOPLE) {
      let level = 0
      let current: Person | undefined = person
      while (current?.parentId) {
        const parent = byId.get(current.parentId)
        if (!parent) break
        level += 1
        current = parent
      }
      map.set(person.id, level)
    }
    return map
  }, [])

  const visibleRows = useMemo(() => {
    const term = search.trim().toLowerCase()
    const filtering =
      Boolean(term) || departments.length > 0 || statuses.length > 0
    const byId = new Map(PEOPLE.map((person) => [person.id, person]))

    const matches = (person: Person) => {
      const text =
        !term ||
        [person.name, person.title, person.department, person.location].some(
          (value) => value.toLowerCase().includes(term),
        )
      const departmentOk =
        departments.length === 0 || departments.includes(person.department)
      const statusOk = statuses.length === 0 || statuses.includes(person.status)
      return text && departmentOk && statusOk
    }

    const included = new Set<string>()
    if (filtering) {
      for (const person of PEOPLE) {
        if (!matches(person)) continue
        let current: Person | undefined = person
        while (current) {
          included.add(current.id)
          current = current.parentId ? byId.get(current.parentId) : undefined
        }
      }
    }

    const rows: { person: Person; level: number }[] = []
    const walk = (parentId: string | null, level: number) => {
      for (const person of childrenByParent.get(parentId) ?? []) {
        if (filtering && !included.has(person.id)) continue
        rows.push({ person, level })
        const open = filtering || expanded.includes(person.id)
        if (open) walk(person.id, level + 1)
      }
    }
    walk(null, 0)
    return rows
  }, [search, departments, statuses, expanded, childrenByParent])

  const columns = [
    "44px",
    "minmax(0,1fr)",
    shown.department ? "130px" : null,
    shown.location ? "130px" : null,
    shown.reports ? "105px" : null,
    shown.openRoles ? "110px" : null,
    shown.tenure ? "120px" : null,
    shown.status ? "150px" : null,
    "48px",
  ]
    .filter(Boolean)
    .join(" ")

  const allSelected =
    visibleRows.length > 0 &&
    visibleRows.every(({ person }) => selected.includes(person.id))
  const someSelected = visibleRows.some(({ person }) =>
    selected.includes(person.id),
  )
  function applyDepth(key: string) {
    setDepth(key)
    if (key === "Collapse") {
      setExpanded([])
      return
    }
    if (key === "All") {
      setExpanded(
        PEOPLE.filter(
          (person) => (childrenByParent.get(person.id) ?? []).length > 0,
        ).map((person) => person.id),
      )
      return
    }
    const limit = key === "1" ? 1 : 2
    setExpanded(
      PEOPLE.filter(
        (person) =>
          (childrenByParent.get(person.id) ?? []).length > 0 &&
          (levels.get(person.id) ?? 0) < limit,
      ).map((person) => person.id),
    )
  }

  function toggleExpanded(id: string) {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    )
  }

  function toggleSelected(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    )
  }

  function toggleAll() {
    if (allSelected) {
      setSelected([])
      return
    }
    setSelected(visibleRows.map(({ person }) => person.id))
  }

  function toggleDepartment(value: string) {
    setDepartments((current) =>
      current.includes(value)
        ? current.filter((entry) => entry !== value)
        : [...current, value],
    )
  }

  function toggleStatus(value: PersonStatus) {
    setStatuses((current) =>
      current.includes(value)
        ? current.filter((entry) => entry !== value)
        : [...current, value],
    )
  }

  function toggleShown(key: keyof typeof shown) {
    setShown((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Reporting lines</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Reporting Lines</h2>
              <p className="text-muted-foreground text-sm">
                Meridian Cycles • 24 Jul 2026
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Headcount</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  18
                </span>
              </span>
              <span className="bg-border h-5 w-px" />
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Layers</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  5
                </span>
              </span>
              <span className="bg-border h-5 w-px" />
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Avg Span</span>
                <span className="rounded-md border border-amber-400/60 bg-amber-400/10 px-2 py-0.5 font-medium tabular-nums text-amber-600 dark:text-amber-400">
                  2.1
                </span>
              </span>
              <span className="bg-border h-5 w-px" />
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Open Roles</span>
                <span className="rounded-md border border-amber-400/60 bg-amber-400/10 px-2 py-0.5 font-medium tabular-nums text-amber-600 dark:text-amber-400">
                  {TOTAL_OPEN_ROLES}
                </span>
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toast("Exporting reporting lines")}
              >
                <DownloadIcon />
                Export
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
            <InputGroup className="h-9 w-full sm:max-w-72">
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search people..."
                className="text-sm"
              />
            </InputGroup>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground text-xs">Depth</span>
              <div className="flex overflow-hidden rounded-md border">
                {DEPTHS.map((entry) => (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => applyDepth(entry.key)}
                    className={cn(
                      "border-r px-2.5 py-1.5 text-xs last:border-r-0",
                      depth === entry.key
                        ? "bg-muted font-medium"
                        : "text-muted-foreground",
                    )}
                  >
                    {entry.key}
                  </button>
                ))}
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-52 p-0">
                  <div className="p-2">
                    <div className="text-muted-foreground px-2 py-1 text-xs">
                      Department
                    </div>
                    {DEPARTMENTS.map((department) => (
                      <button
                        key={department}
                        type="button"
                        onClick={() => toggleDepartment(department)}
                        className={cn(
                          "hover:bg-muted w-full rounded px-2 py-1.5 text-left text-sm",
                          departments.includes(department) && "bg-muted",
                        )}
                      >
                        {department}
                      </button>
                    ))}
                  </div>
                  <div className="border-t p-2">
                    <div className="text-muted-foreground px-2 py-1 text-xs">
                      Status
                    </div>
                    {STATUSES.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => toggleStatus(status)}
                        className={cn(
                          "hover:bg-muted flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm",
                          statuses.includes(status) && "bg-muted",
                        )}
                      >
                        <span
                          className={cn(
                            "size-1.5 rounded-full",
                            STATUS_DOT[status],
                          )}
                        />
                        {status}
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
                <PopoverContent align="end" className="w-72 p-0">
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
                    <div className="flex items-center justify-between py-1 text-sm">
                      Job Title
                      <Switch checked={showTitle} onCheckedChange={setShowTitle} />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Display properties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        ["department", "Department"],
                        ["location", "Location"],
                        ["reports", "Reports"],
                        ["openRoles", "Open Roles"],
                        ["tenure", "Tenure"],
                        ["status", "Status"],
                      ].map(([key, label]) => {
                        const active = shown[key as keyof typeof shown]
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleShown(key as keyof typeof shown)}
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
            </div>
          </div>

          <div
            className="text-muted-foreground grid items-center gap-x-4 border-b bg-muted/40 px-4 py-2 text-xs"
            style={{ gridTemplateColumns: columns }}
          >
            <Checkbox
              checked={allSelected ? true : someSelected ? "indeterminate" : false}
              onCheckedChange={toggleAll}
              aria-label="Select all people"
            />
            <HeaderCell label="Person" />
            {shown.department && <HeaderCell label="Department" />}
            {shown.location && <HeaderCell label="Location" />}
            {shown.reports && <HeaderCell label="Reports" />}
            {shown.openRoles && <HeaderCell label="Open Roles" />}
            {shown.tenure && <HeaderCell label="Tenure" />}
            {shown.status && <HeaderCell label="Status" />}
            <span />
          </div>

          <div>
            {visibleRows.length === 0 && (
              <div className="text-muted-foreground px-4 py-10 text-center text-sm">
                No people match the current filters.
              </div>
            )}

            {visibleRows.map(({ person, level }) => {
              const children = childrenByParent.get(person.id) ?? []
              const open = expanded.includes(person.id)
              const active = selected.includes(person.id)
              return (
                <div
                  key={person.id}
                  className={cn(
                    "hover:bg-muted/30 grid items-center gap-x-4 border-b px-4 last:border-b-0",
                    density === "Compact" ? "py-1.5" : "py-3",
                    active && "bg-muted/40",
                  )}
                  style={{ gridTemplateColumns: columns }}
                >
                  <Checkbox
                    checked={active}
                    onCheckedChange={() => toggleSelected(person.id)}
                    aria-label={`Select ${person.name}`}
                  />

                  <div
                    className="flex min-w-0 items-center gap-2"
                    style={{ paddingLeft: level * 20 }}
                  >
                    {children.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(person.id)}
                        aria-label={open ? "Collapse reports" : "Expand reports"}
                        className="text-muted-foreground hover:text-foreground flex size-4 shrink-0 items-center justify-center"
                      >
                        {open ? (
                          <ChevronDownIcon className="size-4" />
                        ) : (
                          <ChevronRightIcon className="size-4" />
                        )}
                      </button>
                    ) : (
                      <span className="w-4 shrink-0" />
                    )}

                    <Avatar>
                      {person.avatar ? (
                        <AvatarImage src={person.avatar} alt={person.name} />
                      ) : null}
                      <AvatarFallback className="text-[11px]">
                        {person.initials ??
                          person.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="truncate text-sm font-medium">
                          {person.name}
                        </span>
                        <RoleBadge role={person.role} />
                      </div>
                      {showTitle && (
                        <div className="text-muted-foreground truncate text-xs">
                          {person.title}
                        </div>
                      )}
                    </div>
                  </div>

                  {shown.department && (
                    <span className="truncate text-sm">{person.department}</span>
                  )}

                  {shown.location && (
                    <span className="text-muted-foreground truncate text-sm">
                      {person.location}
                    </span>
                  )}

                  {shown.reports && (
                    <span className="text-sm tabular-nums">
                      {person.reports ? (
                        <>
                          <span className="font-semibold">
                            {person.reports.direct}
                          </span>{" "}
                          <span className="text-muted-foreground">
                            of {person.reports.total}
                          </span>
                        </>
                      ) : (
                        <span className="text-muted-foreground">--</span>
                      )}
                    </span>
                  )}

                  {shown.openRoles && (
                    <span>
                      {person.openRoles ? (
                        <Badge
                          variant="warning-light"
                          size="default"
                          className="min-w-6 justify-center rounded px-1.5 font-semibold tabular-nums"
                        >
                          {person.openRoles}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground text-sm">--</span>
                      )}
                    </span>
                  )}

                  {shown.tenure && (
                    <div>
                      <div className="text-sm font-medium">{person.tenure}</div>
                      <div className="text-muted-foreground text-xs">
                        {person.since}
                      </div>
                    </div>
                  )}

                  {shown.status && <StatusBadge status={person.status} />}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Actions for ${person.name}`}
                      >
                        <MoreHorizontalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem>
                        <UserIcon />
                        View profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <UsersIcon />
                        View reports
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() => toast(`Copied ${person.name}`)}
                      >
                        <CopyIcon />
                        Copy name
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )
            })}
          </div>

          <div
            className="grid items-center gap-x-4 border-t bg-muted/40 px-4 py-2.5"
            style={{ gridTemplateColumns: columns }}
          >
            <span />
            <span className="flex items-center gap-2 text-sm font-semibold">
              Meridian Cycles
              <span className="text-muted-foreground rounded-full border bg-background px-2 py-0.5 text-xs font-normal">
                {TOTAL_PEOPLE} people
              </span>
            </span>
            {shown.department && <span />}
            {shown.location && <span />}
            {shown.reports && <span />}
            {shown.openRoles && (
              <span className="text-center text-sm font-semibold tabular-nums">
                {TOTAL_OPEN_ROLES}
              </span>
            )}
            {shown.tenure && <span />}
            {shown.status && (
              <span className="text-muted-foreground text-xs">
                {NEED_ATTENTION} need attention
              </span>
            )}
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportingLinesBlock
