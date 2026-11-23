import { useMemo, useState } from "react"
import {
  BatteryChargingIcon,
  BoxIcon,
  CableIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ClockIcon,
  CircleDotIcon,
  CogIcon,
  CopyIcon,
  Disc3Icon,
  DownloadIcon,
  EyeIcon,
  FanIcon,
  GaugeIcon,
  LayersIcon,
  LinkIcon,
  MoreVerticalIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  ThermometerIcon,
  TruckIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
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
import { Badge } from "@/components/kit/badge"
import { cn } from "cn"

import {
  BOM_ROWS,
  SUPPLY_OPTIONS,
  SUPPLY_VARIANT,
} from "./data"
import type { BomRow, SupplyState } from "./data"

const ICON_MAP = {
  gear: CogIcon,
  motor: FanIcon,
  stator: CircleDotIcon,
  layers: LayersIcon,
  winding: CableIcon,
  sensor: ThermometerIcon,
  rotor: Disc3Icon,
  housing: BoxIcon,
  drivetrain: LinkIcon,
  battery: BatteryChargingIcon,
  frame: BoxIcon,
  cockpit: GaugeIcon,
  wheel: CircleDotIcon,
}

const DEPTHS = [
  { key: "Collapse", value: 0 },
  { key: "1", value: 1 },
  { key: "2", value: 2 },
  { key: "All", value: 3 },
]

function money(value: number | null) {
  if (value === null) return "--"
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value)
}

function ShareRing({ share }: { share: number }) {
  const radius = 7.5
  const circumference = 2 * Math.PI * radius
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
      <circle
        cx="9"
        cy="9"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <circle
        cx="9"
        cy="9"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={`${(circumference * share) / 100} ${circumference}`}
        transform="rotate(-90 9 9)"
      />
    </svg>
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

export function BillOfMaterialsBlock() {
  const [search, setSearch] = useState("")
  const [supplyFilter, setSupplyFilter] = useState<SupplyState | null>(null)
  const [depth, setDepth] = useState(3)
  const [expanded, setExpanded] = useState<string[]>(["sys-100", "asm-110", "sub-111"])
  const [props, setProps] = useState({
    number: true,
    unitCost: true,
    leadTime: true,
    supply: true,
  })
  const [partDetail, setPartDetail] = useState(false)

  const childrenOf = (id: string | null) =>
    BOM_ROWS.filter((row) => row.parentId === id)

  const hasMatch = (row: BomRow): boolean => {
    const term = search.trim().toLowerCase()
    const matchesSearch =
      !term ||
      row.name.toLowerCase().includes(term) ||
      row.number.toLowerCase().includes(term)
    const matchesSupply = !supplyFilter || row.supply === supplyFilter
    if (matchesSearch && matchesSupply) return true
    return childrenOf(row.id).some((child) => hasMatch(child))
  }

  const visibleRows = useMemo(() => {
    const rows: { row: BomRow; level: number }[] = []
    const walk = (parentId: string | null, level: number) => {
      for (const row of childrenOf(parentId)) {
        if (!hasMatch(row)) continue
        rows.push({ row, level })
        if (expanded.includes(row.id) && level < depth) {
          walk(row.id, level + 1)
        }
      }
    }
    walk(null, 0)
    return rows
  }, [expanded, depth, search, supplyFilter])

  const columns = [
    "minmax(0,1fr)",
    props.number ? "90px" : null,
    "55px",
    props.unitCost ? "85px" : null,
    "130px",
    props.leadTime ? "90px" : null,
    props.supply ? "120px" : null,
    "40px",
  ]
    .filter(Boolean)
    .join(" ")

  function toggleExpanded(id: string) {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    )
  }

  function toggleProp(key: keyof typeof props) {
    setProps((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Bill of materials</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Bill Of Materials</h2>
              <p className="text-muted-foreground text-sm">
                Meridian C2 Cargo · Rev C · 24 Jul 2026
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Build cost</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  $1,179.31
                </span>
              </span>
              <span className="bg-border h-5 w-px" />
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Critical path</span>
                <span className="rounded-md border px-2 py-0.5 font-medium tabular-nums">
                  62d
                </span>
              </span>
              <span className="bg-border h-5 w-px" />
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">At risk</span>
                <span className="rounded-md border border-amber-400/60 bg-amber-400/10 px-2 py-0.5 font-medium tabular-nums text-amber-600 dark:text-amber-400">
                  10
                </span>
              </span>
              <Button variant="outline" size="sm">
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
                placeholder="Search parts..."
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
                    onClick={() => setDepth(entry.value)}
                    className={cn(
                      "border-r px-2.5 py-1.5 text-xs last:border-r-0",
                      depth === entry.value
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
                    <TruckIcon />
                    Supply
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-48 p-3">
                  <div className="text-muted-foreground mb-2 text-xs">Supply status</div>
                  <div className="flex flex-col items-start gap-1.5">
                    {SUPPLY_OPTIONS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setSupplyFilter((current) =>
                            current === option ? null : option,
                          )
                        }
                      >
                        <Badge
                          variant={SUPPLY_VARIANT[option]}
                          size="sm"
                          className={cn(
                            supplyFilter === option &&
                              "ring-1 ring-foreground/30",
                          )}
                        >
                          {option}
                        </Badge>
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
                    <div className="text-muted-foreground mb-2 text-xs">Table</div>
                    <div className="flex items-center justify-between py-1 text-sm">
                      Density
                      <Select defaultValue="Comfortable">
                        <SelectTrigger size="sm" className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Comfortable">Comfortable</SelectItem>
                          <SelectItem value="Compact">Compact</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between py-1 text-sm">
                      Part detail
                      <Switch checked={partDetail} onCheckedChange={setPartDetail} />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-muted-foreground mb-2 text-xs">
                      Display properties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        ["number", "Number"],
                        ["unitCost", "Unit Cost"],
                        ["leadTime", "Lead Time"],
                        ["supply", "Supply"],
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
            </div>
          </div>

          <div
            className="text-muted-foreground grid items-center gap-x-6 border-b bg-muted/20 px-3 py-2 text-xs"
            style={{ gridTemplateColumns: columns }}
          >
            <HeaderCell label="Part" />
            {props.number && <HeaderCell label="Number" />}
            <HeaderCell label="Qty" />
            {props.unitCost && <HeaderCell label="Unit Cost" />}
            <HeaderCell label="Extended Cost" />
            {props.leadTime && <HeaderCell label="Lead Time" />}
            {props.supply && <HeaderCell label="Supply" />}
            <span />
          </div>

          <div>
            {visibleRows.map(({ row, level }) => {
              const Icon = ICON_MAP[row.icon as keyof typeof ICON_MAP]
              const hasChildren = childrenOf(row.id).length > 0
              const open = expanded.includes(row.id)
              return (
                <div
                  key={row.id}
                  className="grid items-center gap-x-6 border-b px-3 py-2 last:border-b-0"
                  style={{ gridTemplateColumns: columns }}
                >
                  <div
                    className="flex min-w-0 items-center gap-2"
                    style={{ paddingLeft: level * 20 }}
                  >
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(row.id)}
                        aria-label={open ? "Collapse part" : "Expand part"}
                        className="text-muted-foreground hover:text-foreground flex size-5 items-center justify-center"
                      >
                        {open ? (
                          <ChevronDownIcon className="size-4" />
                        ) : (
                          <ChevronRightIcon className="size-4" />
                        )}
                      </button>
                    ) : (
                      <span className="w-5" />
                    )}
                    <Icon className="text-muted-foreground size-4" />
                    <div className="min-w-0">
                      <div
                        className={cn(
                          "truncate text-sm",
                          level <= 1 && "font-medium",
                        )}
                      >
                        {row.name}
                      </div>
                      {partDetail && (
                        <div className="text-muted-foreground truncate text-xs">
                          {row.number}
                        </div>
                      )}
                    </div>
                  </div>

                  {props.number && (
                    <span className="text-muted-foreground text-xs">
                      {row.number}
                    </span>
                  )}

                  <span className="text-xs tabular-nums">{row.qty}</span>

                  {props.unitCost && (
                    <span
                      className={cn(
                        "text-xs tabular-nums",
                        row.unitCost === null && "text-muted-foreground",
                      )}
                    >
                      {money(row.unitCost)}
                    </span>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    {row.unitCost === null ? (
                      <span className="text-muted-foreground flex items-center gap-1.5 text-xs tabular-nums">
                        <ShareRing share={row.share} />
                        {row.share}%
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="text-sm font-semibold tabular-nums">
                      {money(row.extendedCost)}
                    </span>
                  </div>

                  {props.leadTime && (
                    <span
                      className={cn(
                        "inline-flex w-fit items-center gap-1 rounded-full border px-1.5 py-0.5 text-xs tabular-nums",
                        row.leadTime >= 60
                          ? "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"
                          : "text-foreground/80",
                      )}
                    >
                      <ClockIcon className="size-3.5" />
                      {row.leadTime}d
                    </span>
                  )}

                  {props.supply && (
                    <Badge variant={SUPPLY_VARIANT[row.supply]} size="xs">
                      {row.supply}
                    </Badge>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm" aria-label="Part actions">
                        <MoreVerticalIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem>
                        <EyeIcon />
                        View part
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => toast(`Copied ${row.number}`)}>
                        <CopyIcon />
                        Copy number
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <TruckIcon />
                        Find supplier
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )
            })}
          </div>

          <div
            className="grid items-center gap-x-6 border-t bg-muted/30 px-3 py-2.5"
            style={{ gridTemplateColumns: columns }}
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              Meridian C2 Cargo
              <span className="text-muted-foreground text-xs font-normal">
                31 lines
              </span>
            </span>
            {props.number && <span />}
            <span />
            {props.unitCost && <span />}
            <span className="text-right text-sm font-semibold tabular-nums">$1,179.31</span>
            {props.leadTime && (
              <span className="text-right text-sm font-semibold tabular-nums">62d</span>
            )}
            {props.supply && <span />}
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillOfMaterialsBlock
