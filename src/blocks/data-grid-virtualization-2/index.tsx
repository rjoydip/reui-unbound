import { useMemo, useRef, useState } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import {
  AnchorIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  CircleDotIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  FilterIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PackageIcon,
  PackageOpenIcon,
  PlaneIcon,
  RefreshCwIcon,
  RouteIcon,
  SearchIcon,
  Settings2Icon,
  ShipIcon,
  TriangleAlertIcon,
  TruckIcon,
  UserRoundPlusIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
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
import { Switch } from "@/components/ui/switch"
import { cn } from "cn"

import {
  CARRIERS,
  ISSUES,
  PRIORITIES,
  STATUSES,
  currency,
  makeShipment,
} from "./data"
import type {
  Carrier,
  Issue,
  Priority,
  Shipment,
  ShipmentStatus,
} from "./data"

const TOTAL_ROWS = 8_000
const ROW_HEIGHT = 60
const HEADER_HEIGHT = 40

const WIDTHS: Record<string, number> = {
  shipment: 210,
  customer: 190,
  route: 300,
  carrier: 230,
  status: 120,
  priority: 100,
  issue: 110,
  owner: 160,
  eta: 110,
  packages: 90,
  value: 100,
}

const COLUMN_ORDER = [
  "customer",
  "route",
  "carrier",
  "status",
  "priority",
  "issue",
  "owner",
  "eta",
  "packages",
  "value",
] as const

const LABELS: Record<string, string> = {
  customer: "Customer",
  route: "Route",
  carrier: "Carrier",
  status: "Status",
  priority: "Priority",
  issue: "Issue",
  owner: "Owner",
  eta: "ETA",
  packages: "Packages",
  value: "Value",
}

const CARRIER_STYLE: Record<Carrier, { icon: typeof TruckIcon; circle: string }> = {
  "BlueLine Freight": { icon: TruckIcon, circle: "bg-blue-600" },
  AeroLink: { icon: PlaneIcon, circle: "bg-sky-500" },
  MetroShip: { icon: ShipIcon, circle: "bg-indigo-500" },
  "Northstar Parcel": { icon: PackageIcon, circle: "bg-teal-600" },
  "Harbor Express": { icon: AnchorIcon, circle: "bg-cyan-600" },
}

const STATUS_STYLE: Record<ShipmentStatus, string> = {
  Delayed:
    "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
  "Customs Hold":
    "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300",
  Exception:
    "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-400",
}

const PRIORITY_STYLE: Record<Priority, string> = {
  Critical:
    "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-400",
  High: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
  Medium: "border-border bg-muted/50 text-muted-foreground",
}

const ISSUE_STYLE: Record<Issue, string> = {
  Weather:
    "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
  Admin:
    "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300",
  Capacity:
    "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
  Address:
    "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300",
  Damage:
    "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-400",
}

const ATTRIBUTES = [
  { key: "status", label: "Status", icon: CircleDotIcon, options: STATUSES },
  { key: "priority", label: "Priority", icon: TriangleAlertIcon, options: PRIORITIES },
  { key: "carrier", label: "Carrier", icon: TruckIcon, options: CARRIERS },
  { key: "issue", label: "Issue", icon: PackageIcon, options: ISSUES },
] as const

function HeaderCell({ label, sorted }: { label: string; sorted?: boolean }) {
  return (
    <span className="flex items-center gap-1">
      {label}
      {sorted ? (
        <ArrowUpIcon className="size-3 opacity-60" />
      ) : (
        <ChevronsUpDownIcon className="size-3 opacity-50" />
      )}
    </span>
  )
}

function Pill({ label, className }: { label: string; className: string }) {
  return (
    <Badge variant="outline" size="default" className={cn("rounded px-2", className)}>
      {label}
    </Badge>
  )
}

function CarrierMark({ carrier }: { carrier: Carrier }) {
  const { icon: Icon, circle } = CARRIER_STYLE[carrier]
  return (
    <span
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-full text-white",
        circle,
      )}
    >
      <Icon className="size-3.5" />
    </span>
  )
}

export function ExceptionQueueBlock() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(40)
  const [search, setSearch] = useState("")
  const [attributeSearch, setAttributeSearch] = useState("")
  const [expandedAttribute, setExpandedAttribute] = useState<string | null>(null)
  const [filters, setFilters] = useState<Record<string, string[]>>({})
  const [selected, setSelected] = useState<string[]>([])
  // ponytail: resizable columns is a visual toggle only; wire drag handles if real resizing matters.
  const [resizable, setResizable] = useState(true)
  const [shown, setShown] = useState<Record<string, boolean>>({
    customer: true,
    route: true,
    carrier: true,
    status: true,
    priority: true,
    issue: true,
    owner: true,
    eta: true,
    packages: true,
    value: true,
  })

  const allRows = useMemo(
    () => Array.from({ length: loaded }, (_, index) => makeShipment(index)),
    [loaded],
  )

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return allRows.filter((row) => {
      const text =
        !term ||
        [row.id, row.customer, row.order, row.route, row.hub].some((value) =>
          value.toLowerCase().includes(term),
        )
      if (!text) return false
      return Object.entries(filters).every(([key, values]) => {
        if (values.length === 0) return true
        return values.includes(String(row[key as keyof Shipment]))
      })
    })
  }, [allRows, search, filters])

  const virtualizer = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 8,
    scrollMargin: HEADER_HEIGHT,
  })

  const selectedSet = useMemo(() => new Set(selected), [selected])
  const selectedRows = useMemo(
    () => allRows.filter((row) => selectedSet.has(row.id)),
    [allRows, selectedSet],
  )
  const selectedPackages = selectedRows.reduce(
    (sum, row) => sum + row.packages,
    0,
  )
  const allSelected =
    filtered.length > 0 && filtered.every((row) => selectedSet.has(row.id))
  const someSelected = filtered.some((row) => selectedSet.has(row.id))

  const visibleColumns = COLUMN_ORDER.filter((key) => shown[key])
  const totalWidth =
    40 +
    210 +
    visibleColumns.reduce((sum, key) => sum + WIDTHS[key], 0) +
    44
  const template = `40px 210px ${visibleColumns
    .map((key) => `${WIDTHS[key]}px`)
    .join(" ")} 44px`

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const element = event.currentTarget
    if (element.scrollTop + element.clientHeight >= element.scrollHeight - 300) {
      setLoaded((current) =>
        current >= TOTAL_ROWS ? current : Math.min(current + 40, TOTAL_ROWS),
      )
    }
  }

  function toggleRow(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    )
  }

  function toggleAll() {
    if (allSelected) {
      setSelected((current) =>
        current.filter((id) => !filtered.some((row) => row.id === id)),
      )
      return
    }
    setSelected((current) =>
      Array.from(new Set([...current, ...filtered.map((row) => row.id)])),
    )
  }

  function toggleFilter(key: string, value: string) {
    setFilters((current) => {
      const values = current[key] ?? []
      return {
        ...current,
        [key]: values.includes(value)
          ? values.filter((entry) => entry !== value)
          : [...values, value],
      }
    })
  }

  function toggleShown(key: string) {
    setShown((current) => ({ ...current, [key]: !current[key] }))
  }

  function refresh() {
    setLoaded(40)
    setSelected([])
    setSearch("")
    setFilters({})
    scrollRef.current?.scrollTo({ top: 0, left: 0 })
    toast("Exception queue refreshed")
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Exception queue</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Exception Queue</h2>
              <p className="text-muted-foreground text-sm">
                {loaded.toLocaleString()} of {TOTAL_ROWS.toLocaleString()} loaded
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Exporting exception queue")}
            >
              <DownloadIcon />
              Export
            </Button>
          </div>

          <div className="grid grid-cols-2 border-b sm:grid-cols-5 sm:divide-x">
            {[
              ["Open exceptions", "1,598", "bg-rose-500"],
              ["Customs holds", "881", "bg-blue-500"],
              ["Delayed packages", "28,321", "bg-amber-500"],
              ["Unassigned", "460", "bg-amber-500"],
              ["At-risk value", "$5M", "bg-rose-500"],
            ].map(([label, value, dot]) => (
              <div key={label} className="px-4 py-3">
                <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  <span className={cn("size-1.5 rounded-full", dot)} />
                  {label}
                </div>
                <div className="mt-1 text-lg font-semibold tabular-nums">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2">
            <div className="flex flex-wrap items-center gap-2">
              <InputGroup className="h-9 w-full sm:w-72">
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search shipment, route, customer..."
                  className="text-sm"
                />
              </InputGroup>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon />
                    Filters
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-0">
                  <div className="border-b p-2">
                    <input
                      value={attributeSearch}
                      onChange={(event) => setAttributeSearch(event.target.value)}
                      placeholder="Search attributes..."
                      className="placeholder:text-muted-foreground w-full bg-transparent px-2 py-1.5 text-sm outline-none"
                    />
                  </div>
                  <div className="p-2">
                    {ATTRIBUTES.filter((attribute) =>
                      attribute.label
                        .toLowerCase()
                        .includes(attributeSearch.trim().toLowerCase()),
                    ).map((attribute) => {
                      const Icon = attribute.icon
                      const open = expandedAttribute === attribute.key
                      return (
                        <div key={attribute.key}>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedAttribute(open ? null : attribute.key)
                            }
                            className="hover:bg-muted flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm font-medium"
                          >
                            <Icon className="size-4" />
                            {attribute.label}
                          </button>
                          {open && (
                            <div className="mb-1 flex flex-col gap-0.5 pl-8">
                              {attribute.options.map((option) => {
                                const active = (
                                  filters[attribute.key] ?? []
                                ).includes(option)
                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() =>
                                      toggleFilter(attribute.key, option)
                                    }
                                    className={cn(
                                      "hover:bg-muted flex items-center justify-between rounded px-2 py-1 text-left text-sm",
                                      active && "bg-muted",
                                    )}
                                  >
                                    {option}
                                    {active && <CheckIcon className="size-3.5" />}
                                  </button>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={refresh}>
                <RefreshCwIcon />
                Refresh
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Settings2Icon />
                    Settings
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                  <div className="border-b p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Table
                    </div>
                    <div className="flex items-center justify-between py-1 text-sm">
                      Resizable columns
                      <Switch
                        checked={resizable}
                        onCheckedChange={setResizable}
                      />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Columns
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {COLUMN_ORDER.map((key) => {
                        const active = shown[key]
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggleShown(key)}
                            className={cn(
                              "flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs",
                              active
                                ? "bg-muted font-medium"
                                : "text-muted-foreground",
                            )}
                          >
                            {active && <CheckIcon className="size-3" />}
                            {LABELS[key]}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {selected.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/40 px-4 py-2">
              <span className="text-sm font-medium">
                {selected.length} selected
                <span className="text-muted-foreground ml-1.5 font-normal">
                  • {selectedPackages} packages
                </span>
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast(`Assigning ${selected.length} shipments`)}
                >
                  <UserRoundPlusIcon />
                  Assign
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast(`Releasing ${selected.length} shipments`)}
                >
                  <PackageOpenIcon />
                  Release
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelected([])}
                >
                  Clear
                </Button>
              </div>
            </div>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="h-[540px] overflow-auto"
          >
            <div
              className="sticky top-0 z-10 bg-background"
              style={{ minWidth: totalWidth }}
            >
              <div
                className="text-muted-foreground grid items-center border-b bg-muted/20 text-xs"
                style={{ gridTemplateColumns: template, minWidth: totalWidth }}
              >
                <span className="flex h-10 items-center justify-center border-r border-border/60">
                  <Checkbox
                    checked={
                      allSelected ? true : someSelected ? "indeterminate" : false
                    }
                    onCheckedChange={toggleAll}
                    aria-label="Select all shipments"
                  />
                </span>
                <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                  <HeaderCell label="Shipment" />
                </span>
                {visibleColumns.map((key) => (
                  <span
                    key={key}
                    className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80"
                  >
                    <HeaderCell label={LABELS[key]} sorted={key === "eta"} />
                  </span>
                ))}
                <span className="flex h-10 items-center justify-center" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-muted-foreground py-16 text-center text-sm">
                No shipments match the current filters.
              </div>
            ) : (
              <div
                className="relative"
                style={{
                  height: virtualizer.getTotalSize(),
                  minWidth: totalWidth,
                }}
              >
                {virtualizer.getVirtualItems().map((virtualRow) => {
                  const row = filtered[virtualRow.index]
                  const active = selectedSet.has(row.id)
                  return (
                    <div
                      key={row.id}
                      className={cn(
                        "hover:bg-muted/30 absolute inset-x-0 top-0 border-b",
                        active && "bg-muted/40",
                      )}
                      style={{
                        height: virtualRow.size,
                        transform: `translateY(${virtualRow.start - HEADER_HEIGHT}px)`,
                      }}
                    >
                      <div
                        className="grid h-full items-center"
                        style={{
                          gridTemplateColumns: template,
                          minWidth: totalWidth,
                        }}
                      >
                        <span className="flex items-center justify-center">
                          <Checkbox
                            checked={active}
                            onCheckedChange={() => toggleRow(row.id)}
                            aria-label={`Select ${row.id}`}
                          />
                        </span>

                        <div className="min-w-0 px-3">
                          <div className="truncate text-sm font-semibold">
                            {row.id}
                          </div>
                          <div className="text-muted-foreground truncate text-xs">
                            {row.customer} / {row.order}
                          </div>
                        </div>

                        {shown.customer && (
                          <div className="min-w-0 px-3">
                            <div className="truncate text-sm font-medium">
                              {row.customer}
                            </div>
                            <div className="text-muted-foreground truncate text-xs">
                              {row.order}
                            </div>
                          </div>
                        )}

                        {shown.route && (
                          <div className="flex min-w-0 items-center gap-2 px-3">
                            <RouteIcon className="text-muted-foreground size-4 shrink-0" />
                            <div className="min-w-0">
                              <div className="truncate text-sm">{row.route}</div>
                              <div className="text-muted-foreground truncate text-xs">
                                {row.hub}
                              </div>
                            </div>
                          </div>
                        )}

                        {shown.carrier && (
                          <div className="flex min-w-0 items-center gap-2 px-3">
                            <CarrierMark carrier={row.carrier} />
                            <div className="min-w-0">
                              <div className="truncate text-sm">
                                {row.carrier}
                              </div>
                              <div className="text-muted-foreground truncate text-xs">
                                {row.carrierMode}
                              </div>
                            </div>
                          </div>
                        )}

                        {shown.status && (
                          <span className="px-3">
                            <Pill
                              label={row.status}
                              className={STATUS_STYLE[row.status]}
                            />
                          </span>
                        )}

                        {shown.priority && (
                          <span className="px-3">
                            <Pill
                              label={row.priority}
                              className={PRIORITY_STYLE[row.priority]}
                            />
                          </span>
                        )}

                        {shown.issue && (
                          <span className="px-3">
                            <Pill
                              label={row.issue}
                              className={ISSUE_STYLE[row.issue]}
                            />
                          </span>
                        )}

                        {shown.owner && (
                          <div className="flex min-w-0 items-center gap-2 px-3">
                            {row.owner ? (
                              <>
                                <Avatar size="sm">
                                  <AvatarImage
                                    src={`https://i.pravatar.cc/64?img=${row.owner.avatar}`}
                                    alt=""
                                  />
                                </Avatar>
                                <span className="truncate text-sm">
                                  {row.owner.name}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-muted-foreground grid size-6 shrink-0 place-items-center rounded-full border border-dashed">
                                  <MinusIcon className="size-3" />
                                </span>
                                <span className="text-muted-foreground truncate text-sm">
                                  Unassigned
                                </span>
                              </>
                            )}
                          </div>
                        )}

                        {shown.eta && (
                          <div className="px-3">
                            <div className="text-sm font-medium">
                              {row.etaDate}
                            </div>
                            <div className="text-muted-foreground text-xs tabular-nums">
                              {row.etaTime}{" "}
                              <span className="text-amber-500 dark:text-amber-400">
                                • {row.etaDelta}
                              </span>
                            </div>
                          </div>
                        )}

                        {shown.packages && (
                          <span className="px-3 text-sm tabular-nums">
                            {row.packages}
                          </span>
                        )}

                        {shown.value && (
                          <span className="px-3 text-sm font-medium tabular-nums">
                            {currency(row.value)}
                          </span>
                        )}

                        <span className="flex items-center justify-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-label={`Actions for ${row.id}`}
                              >
                                <MoreHorizontalIcon />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                              <DropdownMenuItem>
                                <EyeIcon />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onSelect={() => toast(`Copied ${row.id}`)}
                              >
                                <CopyIcon />
                                Copy ID
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onSelect={() => toast(`Review ${row.id}`)}
                              >
                                <TriangleAlertIcon />
                                Review
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t bg-muted/40 px-4 py-2.5 text-xs">
            <span className="text-muted-foreground">
              1.6K exceptions <span className="mx-1">•</span> virtualized
            </span>
            <span className="text-muted-foreground">
              Delayed packages{" "}
              <span className="text-foreground font-semibold">28,321</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExceptionQueueBlock
