import { useMemo, useState } from "react"
import {
  ActivityIcon,
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  Globe2Icon,
  MoreVerticalIcon,
  PencilIcon,
  SearchIcon,
  SlidersHorizontalIcon,
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
import { Badge } from "@/components/reui-unbound/badge"
import { cn } from "cn"

import { ACCOUNTS, HEALTH_VARIANT, REGIONS } from "./data"
import type { HealthState, RegionAccount } from "./data"

const HEALTH_OPTIONS: HealthState[] = ["Healthy", "Watch", "At Risk"]

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

function Nrr({ value }: { value: number }) {
  const up = value >= 100
  return (
    <span
      className={cn(
        "flex items-center gap-0.5 text-sm tabular-nums",
        up ? "text-emerald-600" : "text-destructive",
      )}
    >
      {up ? (
        <ArrowUpRightIcon className="size-3.5" />
      ) : (
        <ArrowDownRightIcon className="size-3.5" />
      )}
      {value}%
    </span>
  )
}

export function RevenueByRegionBlock() {
  const [search, setSearch] = useState("")
  const [health, setHealth] = useState<HealthState | null>(null)
  const [openRegions, setOpenRegions] = useState<string[]>(["North America", "EMEA"])
  const [props, setProps] = useState({
    owner: true,
    tier: true,
    health: true,
    nrr: true,
    renewal: true,
  })

  const filteredAccounts = useMemo(() => {
    const term = search.trim().toLowerCase()
    return ACCOUNTS.filter((account) => {
      if (health && account.health !== health) return false
      if (!term) return true
      return [account.name, account.owner].some((value) =>
        value.toLowerCase().includes(term),
      )
    })
  }, [search, health])

  const columns = [
    "minmax(0,1fr)",
    props.owner ? "160px" : null,
    props.health ? "100px" : null,
    "105px",
    props.nrr ? "90px" : null,
    props.renewal ? "140px" : null,
    "40px",
  ]
    .filter(Boolean)
    .join(" ")

  function toggleRegion(name: string) {
    setOpenRegions((current) =>
      current.includes(name)
        ? current.filter((entry) => entry !== name)
        : [...current, name],
    )
  }

  function toggleProp(key: keyof typeof props) {
    setProps((current) => ({ ...current, [key]: !current[key] }))
  }

  const visibleCount = filteredAccounts.length

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Revenue by region</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Revenue By Region</h2>
              <p className="text-muted-foreground text-sm">
                Net retention and renewals across the book.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground flex items-center gap-1.5">
                Total ARR
                <span className="bg-muted text-foreground rounded px-1.5 py-0.5 font-medium">
                  $8.57M
                </span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1.5">
                Portfolio NRR
                <span className="bg-success/10 text-success-foreground rounded px-1.5 py-0.5 font-medium">
                  111%
                </span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1.5">
                At-Risk ARR
                <span className="bg-destructive/10 text-destructive rounded px-1.5 py-0.5 font-medium">
                  $1.04M
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
                placeholder="Search accounts..."
                className="text-sm"
              />
            </InputGroup>
            <div className="flex flex-wrap items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ActivityIcon />
                    Health
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuLabel className="text-muted-foreground text-xs font-medium">
                    Account health
                  </DropdownMenuLabel>
                  {HEALTH_OPTIONS.map((entry) => (
                    <DropdownMenuItem
                      key={entry}
                      className="justify-between py-1"
                      onSelect={() =>
                        setHealth((current) => (current === entry ? null : entry))
                      }
                    >
                      {entry}
                      {health === entry && <CheckIcon className="size-3.5" />}
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
                      <Select defaultValue="Comfortable">
                        <SelectTrigger size="sm" className="w-36">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Comfortable">Comfortable</SelectItem>
                          <SelectItem value="Compact">Compact</SelectItem>
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
                        ["owner", "Owner"],
                        ["tier", "Tier"],
                        ["health", "Health"],
                        ["nrr", "NRR"],
                        ["renewal", "Renewal"],
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
                  setOpenRegions((current) =>
                    current.length === REGIONS.length ? [] : REGIONS.map((r) => r.name),
                  )
                }
              >
                {openRegions.length === REGIONS.length ? "Collapse all" : "Expand all"}
              </Button>
            </div>
          </div>

          <div className="border-b">
            <div
              className="text-muted-foreground grid items-center gap-3 bg-muted/20 px-3 py-2 text-xs"
              style={{ gridTemplateColumns: columns }}
            >
              <span className="flex items-center gap-1">
                Account <ChevronsUpDownIcon className="size-3" />
              </span>
              {props.owner && (
                <span className="flex items-center gap-1">
                  Owner <ChevronsUpDownIcon className="size-3" />
                </span>
              )}
              {props.health && (
                <span className="flex items-center gap-1">
                  Health <ChevronsUpDownIcon className="size-3" />
                </span>
              )}
              <span className="flex items-center gap-1">
                ARR <ChevronsUpDownIcon className="size-3" />
              </span>
              {props.nrr && <span>NRR</span>}
              {props.renewal && <span>Renewal</span>}
              <span />
            </div>
          </div>

          <div>
            {REGIONS.map((region) => {
              const accounts = filteredAccounts.filter(
                (account) => account.region === region.name,
              )
              const open = openRegions.includes(region.name)
              return (
                <div key={region.name} className="border-b last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggleRegion(region.name)}
                    className="hover:bg-muted/40 grid w-full items-center gap-3 px-3 py-2.5 text-left"
                    style={{ gridTemplateColumns: columns }}
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <span className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-md">
                        {open ? (
                          <ChevronDownIcon className="text-muted-foreground size-4" />
                        ) : (
                          <ChevronRightIcon className="text-muted-foreground size-4" />
                        )}
                      </span>
                      <Globe2Icon className="text-muted-foreground size-4" />
                      <span className="text-sm font-semibold">{region.name}</span>
                      <span className="bg-muted text-muted-foreground rounded-full px-1.5 text-xs">
                        {region.count}
                      </span>
                    </span>
                    {props.owner && (
                      <span className="text-muted-foreground truncate text-xs">
                        {region.description}
                      </span>
                    )}
                    {props.health && <span />}
                    <span className="text-sm font-semibold tabular-nums">
                      {money(region.arr)}
                    </span>
                    {props.nrr && <Nrr value={region.nrr} />}
                    {props.renewal && (
                      <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <CalendarIcon className="size-3.5" />
                        {region.renewal}
                      </span>
                    )}
                    <span />
                  </button>

                  {open &&
                    accounts.map((account: RegionAccount) => (
                      <div
                        key={account.id}
                        className="grid items-center gap-3 border-t px-3 py-2.5"
                        style={{ gridTemplateColumns: columns }}
                      >
                        <div className="flex min-w-0 items-center gap-2.5 pl-9">
                          <span
                            className={cn(
                              "flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
                              account.tone,
                            )}
                          >
                            {account.initials}
                          </span>
                          <span className="truncate text-sm font-medium">
                            {account.name}
                          </span>
                        </div>

                        {props.owner && (
                          <span className="flex items-center gap-2">
                            <Avatar className="size-6">
                              <AvatarImage
                                src={`https://i.pravatar.cc/48?u=${account.owner}`}
                                alt=""
                              />
                              <AvatarFallback className="text-[9px]">
                                {account.owner
                                  .split(" ")
                                  .map((part) => part[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="truncate text-sm">{account.owner}</span>
                          </span>
                        )}

                        {props.health && (
                          <Badge variant={HEALTH_VARIANT[account.health]} size="xs">
                            {account.health}
                          </Badge>
                        )}

                        <span className="text-sm font-medium tabular-nums">
                          {money(account.arr)}
                        </span>

                        {props.nrr && <Nrr value={account.nrr} />}

                        {props.renewal && (
                          <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                            <CalendarIcon className="size-3.5" />
                            {account.renewal}
                          </span>
                        )}

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              aria-label="Account actions"
                            >
                              <MoreVerticalIcon />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem>
                              <EyeIcon />
                              View account
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onSelect={() => toast(`Copied ${account.name}`)}
                            >
                              <CopyIcon />
                              Copy name
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <PencilIcon />
                              Adjust plan
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}
                </div>
              )
            })}
          </div>

          <div
            className="grid items-center gap-3 border-t bg-muted/30 px-3 py-2.5"
            style={{ gridTemplateColumns: columns }}
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              All Regions
              <span className="bg-muted text-muted-foreground rounded-full px-1.5 text-xs">
                {visibleCount}
              </span>
            </span>
            {props.owner && <span />}
            {props.health && <span />}
            <span className="text-sm font-semibold tabular-nums">$8,575,000</span>
            {props.nrr && <Nrr value={111} />}
            {props.renewal && <span />}
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueByRegionBlock
