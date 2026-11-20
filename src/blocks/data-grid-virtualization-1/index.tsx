import { useMemo, useRef, useState } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import {
  AppleIcon,
  ArrowDownIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  CopyIcon,
  DownloadIcon,
  FilterIcon,
  GlobeIcon,
  MoreHorizontalIcon,
  ReceiptTextIcon,
  RefreshCwIcon,
  RotateCcwIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  SmartphoneIcon,
  StoreIcon,
  ZapIcon,
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
  CHANNELS,
  STATUSES,
  compactCurrency,
  currency,
  makeTransaction,
} from "./data"
import type { Channel, Transaction, TransactionStatus } from "./data"

const TOTAL_ROWS = 10_000
const ROW_HEIGHT = 68
const HEADER_HEIGHT = 40

function StatusBadge({ status }: { status: TransactionStatus }) {
  const variant =
    status === "Settled"
      ? "success-light"
      : status === "Pending"
        ? "warning-light"
        : "secondary"
  return (
    <Badge variant={variant} size="default" className="rounded-md px-2">
      {status}
    </Badge>
  )
}

function MethodMark({ method }: { method: Transaction["method"] }) {
  if (method === "Google Pay") {
    return (
      <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.87Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.26a12 12 0 0 0 0 10.74l4.01-3.09Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.76c1.76 0 3.34.6 4.59 1.8l3.44-3.44A12 12 0 0 0 1.26 6.63l4.01 3.09C6.22 6.87 8.87 4.76 12 4.76Z"
        />
      </svg>
    )
  }
  if (method === "PayPal") {
    return (
      <span className="relative grid h-6 w-5 shrink-0 place-items-center">
        <span className="absolute -translate-x-0.5 text-[22px] font-black italic leading-none text-[#003087]">
          P
        </span>
        <span className="absolute translate-x-0.5 text-[22px] font-black italic leading-none text-[#009cde]">
          P
        </span>
      </span>
    )
  }
  return <AppleIcon className="size-5 shrink-0" />
}

function ChannelMark({ channel }: { channel: Channel }) {
  if (channel === "API") return <ZapIcon className="size-3.5" />
  if (channel === "Web") return <GlobeIcon className="size-3.5" />
  if (channel === "POS") return <StoreIcon className="size-3.5" />
  return <SmartphoneIcon className="size-3.5" />
}

function riskTone(risk: number) {
  if (risk >= 80) return "bg-rose-500"
  if (risk >= 30) return "bg-amber-500"
  return "bg-emerald-500"
}

function riskText(risk: number) {
  if (risk >= 80) return "text-rose-500 dark:text-rose-400"
  if (risk >= 30) return "text-amber-500 dark:text-amber-400"
  return "text-emerald-500 dark:text-emerald-400"
}

function HeaderCell({ label, sorted }: { label: string; sorted?: boolean }) {
  return (
    <span className="flex items-center gap-1">
      {label}
      {sorted ? (
        <ArrowDownIcon className="size-3 opacity-60" />
      ) : (
        <ChevronsUpDownIcon className="size-3 opacity-50" />
      )}
    </span>
  )
}

export function TransactionsVirtualizedBlock() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(50)
  const [search, setSearch] = useState("")
  const [statuses, setStatuses] = useState<TransactionStatus[]>([])
  const [channels, setChannels] = useState<Channel[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [resizable, setResizable] = useState(true)
  const [shown, setShown] = useState({
    customer: true,
    amount: true,
    status: true,
    method: true,
    channel: true,
    risk: true,
    date: true,
  })

  const allRows = useMemo(
    () => Array.from({ length: loaded }, (_, index) => makeTransaction(index)),
    [loaded],
  )

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return allRows.filter((row) => {
      const text =
        !term ||
        [row.id, row.charge, row.customer, row.email, row.last4].some((value) =>
          value.toLowerCase().includes(term),
        )
      const statusOk = statuses.length === 0 || statuses.includes(row.status)
      const channelOk = channels.length === 0 || channels.includes(row.channel)
      return text && statusOk && channelOk
    })
  }, [allRows, search, statuses, channels])

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
  const selectedTotal = selectedRows.reduce((sum, row) => sum + row.amount, 0)
  const allSelected =
    filtered.length > 0 && filtered.every((row) => selectedSet.has(row.id))
  const someSelected = filtered.some((row) => selectedSet.has(row.id))

  const columns = [
    "40px",
    "210px",
    shown.customer ? "minmax(0,1fr)" : null,
    shown.amount ? "110px" : null,
    shown.status ? "110px" : null,
    shown.method ? "150px" : null,
    shown.channel ? "110px" : null,
    shown.risk ? "75px" : null,
    shown.date ? "100px" : null,
    "40px",
  ]
    .filter(Boolean)
    .join(" ")

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const element = event.currentTarget
    if (
      element.scrollTop + element.clientHeight >=
      element.scrollHeight - 300
    ) {
      setLoaded((current) =>
        current >= TOTAL_ROWS ? current : Math.min(current + 50, TOTAL_ROWS),
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

  function toggleStatus(status: TransactionStatus) {
    setStatuses((current) =>
      current.includes(status)
        ? current.filter((entry) => entry !== status)
        : [...current, status],
    )
  }

  function toggleChannel(channel: Channel) {
    setChannels((current) =>
      current.includes(channel)
        ? current.filter((entry) => entry !== channel)
        : [...current, channel],
    )
  }

  function toggleShown(key: keyof typeof shown) {
    setShown((current) => ({ ...current, [key]: !current[key] }))
  }

  function refresh() {
    setLoaded(50)
    setSelected([])
    setSearch("")
    setStatuses([])
    setChannels([])
    scrollRef.current?.scrollTo({ top: 0 })
    toast("Transactions refreshed")
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <h1 className="sr-only">Transactions</h1>
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-xl border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
            <div>
              <h2 className="text-base font-semibold">Transactions</h2>
              <p className="text-muted-foreground text-sm">
                {loaded.toLocaleString()} of {TOTAL_ROWS.toLocaleString()} loaded
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Exporting transactions")}
            >
              <DownloadIcon />
              Export
            </Button>
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
                  placeholder="Search id, customer, card..."
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
                <PopoverContent align="start" className="w-56 p-0">
                  <div className="p-2">
                    <div className="text-muted-foreground px-2 py-1 text-xs">
                      Status
                    </div>
                    {STATUSES.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => toggleStatus(status)}
                        className={cn(
                          "hover:bg-muted flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-sm",
                          statuses.includes(status) && "bg-muted",
                        )}
                      >
                        {status}
                        {statuses.includes(status) && (
                          <CheckIcon className="size-3.5" />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="border-t p-2">
                    <div className="text-muted-foreground px-2 py-1 text-xs">
                      Channel
                    </div>
                    {CHANNELS.map((channel) => (
                      <button
                        key={channel}
                        type="button"
                        onClick={() => toggleChannel(channel)}
                        className={cn(
                          "hover:bg-muted flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm",
                          channels.includes(channel) && "bg-muted",
                        )}
                      >
                        <ChannelMark channel={channel} />
                        {channel}
                      </button>
                    ))}
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
                    <SlidersHorizontalIcon />
                    View settings
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
                      {[
                        ["customer", "Customer"],
                        ["amount", "Amount"],
                        ["status", "Status"],
                        ["method", "Method"],
                        ["channel", "Channel"],
                        ["risk", "Risk"],
                        ["date", "Date"],
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

          {selected.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/40 px-4 py-2">
              <span className="text-sm font-medium">
                {selected.length} selected
                <span className="text-muted-foreground ml-1.5 font-normal">
                  • {compactCurrency(selectedTotal)}
                </span>
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast(`Exporting ${selected.length} transactions`)}
                >
                  <DownloadIcon />
                  Export
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast(`Refunding ${selected.length} transactions`)}
                >
                  <RotateCcwIcon />
                  Refund
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
            className="h-[560px] overflow-auto"
          >
            <div className="sticky top-0 z-10 bg-background">
              <div
                className="text-muted-foreground grid items-center border-b bg-muted/20 text-xs"
                style={{ gridTemplateColumns: columns }}
              >
                <span className="flex h-10 items-center justify-center border-r border-border/60">
                  <Checkbox
                    checked={
                      allSelected ? true : someSelected ? "indeterminate" : false
                    }
                    onCheckedChange={toggleAll}
                    aria-label="Select all transactions"
                  />
                </span>
                <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                  <HeaderCell label="Transaction" />
                </span>
                {shown.customer && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Customer" />
                  </span>
                )}
                {shown.amount && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Amount" />
                  </span>
                )}
                {shown.status && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Status" />
                  </span>
                )}
                {shown.method && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Method" />
                  </span>
                )}
                {shown.channel && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Channel" />
                  </span>
                )}
                {shown.risk && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Risk" />
                  </span>
                )}
                {shown.date && (
                  <span className="flex h-10 items-center border-r border-border/60 px-3 font-medium text-foreground/80">
                    <HeaderCell label="Date" sorted />
                  </span>
                )}
                <span className="flex h-10 items-center justify-center" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-muted-foreground py-16 text-center text-sm">
                No transactions match the current filters.
              </div>
            ) : (
              <div
                className="relative"
                style={{ height: virtualizer.getTotalSize() }}
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
                        style={{ gridTemplateColumns: columns }}
                      >
                        <span className="flex items-center justify-center">
                          <Checkbox
                            checked={active}
                            onCheckedChange={() => toggleRow(row.id)}
                            aria-label={`Select ${row.id}`}
                          />
                        </span>

                        <div className="min-w-0 px-3">
                          <div className="truncate text-sm font-medium">
                            {row.id}
                          </div>
                          <div className="text-muted-foreground truncate text-xs">
                            {row.charge}
                          </div>
                        </div>

                        {shown.customer && (
                          <div className="flex min-w-0 items-center gap-2 px-3">
                            <Avatar size="default">
                              <AvatarImage
                                src={`https://i.pravatar.cc/64?img=${row.avatar}`}
                                alt=""
                              />
                            </Avatar>
                            <div className="min-w-0">
                              <div className="truncate text-sm font-medium">
                                {row.customer}
                              </div>
                              <div className="text-muted-foreground truncate text-xs">
                                {row.email}
                              </div>
                            </div>
                          </div>
                        )}

                        {shown.amount && (
                          <span className="px-3 text-sm font-medium tabular-nums">
                            {currency(row.amount)}
                          </span>
                        )}

                        {shown.status && (
                          <span className="px-3">
                            <StatusBadge status={row.status} />
                          </span>
                        )}

                        {shown.method && (
                          <span className="flex items-center gap-2.5 px-3">
                            <MethodMark method={row.method} />
                            <span className="flex items-center gap-1">
                              {[0, 1, 2, 3].map((dot) => (
                                <span
                                  key={dot}
                                  className="size-1.5 rounded-full bg-foreground"
                                />
                              ))}
                            </span>
                            <span className="text-sm font-semibold tabular-nums">
                              {row.last4}
                            </span>
                          </span>
                        )}

                        {shown.channel && (
                          <span className="text-muted-foreground flex items-center gap-1.5 px-3 text-sm">
                            <ChannelMark channel={row.channel} />
                            {row.channel}
                          </span>
                        )}

                        {shown.risk && (
                          <span className="flex items-center gap-1.5 px-3 text-sm font-medium tabular-nums">
                            <span
                              className={cn(
                                "size-1.5 rounded-full",
                                riskTone(row.risk),
                              )}
                            />
                            <span className={riskText(row.risk)}>{row.risk}</span>
                          </span>
                        )}

                        {shown.date && (
                          <div className="px-3">
                            <div className="text-sm">{row.date}</div>
                            <div className="text-muted-foreground text-xs tabular-nums">
                              {row.time}
                            </div>
                          </div>
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
                            <DropdownMenuContent align="end" className="w-44">
                              <DropdownMenuItem>
                                <ReceiptTextIcon />
                                View receipt
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onSelect={() => toast(`Copied ${row.id}`)}
                              >
                                <CopyIcon />
                                Copy ID
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                variant="destructive"
                                onSelect={() => toast(`Refund started for ${row.id}`)}
                              >
                                <RotateCcwIcon />
                                Refund
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
              Virtualized <span className="mx-1">•</span> loads on scroll
            </span>
            <span className="text-muted-foreground">
              Settled volume{" "}
              <span className="text-foreground font-semibold">$10M</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsVirtualizedBlock
