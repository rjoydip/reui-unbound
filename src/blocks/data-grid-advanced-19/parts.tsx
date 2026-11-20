import {
  BanknoteIcon,
  BookmarkIcon,
  Building2Icon,
  CheckIcon,
  CpuIcon,
  FactoryIcon,
  HeartPulseIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  SlidersHorizontalIcon,
  TruckIcon,
  UserRoundPlusIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { IconTile } from "@/components/reui-unbound/icon-tile"
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
  EMPTY_FILTERS,
  INDUSTRIES,
  OWNER_BY_ID,
  SAVED_LISTS,
  SIGNAL_META,
  STATUS_META,
  fitLabel,
  fitTier,
  headcountLabel,
  headcountTrend,
  initials,
  matchesFilters,
} from "./data"
import type {
  FitTier,
  HeadcountBucket,
  IcpFilters,
  Prospect,
  ProspectStatus,
  SignalKind,
} from "./data"

const INDUSTRY_ICON: Record<string, { icon: LucideIcon; tone: string }> = {
  Healthcare: { icon: HeartPulseIcon, tone: "text-rose-500" },
  Logistics: { icon: TruckIcon, tone: "text-blue-500" },
  Manufacturing: { icon: FactoryIcon, tone: "text-amber-600" },
  Marketing: { icon: MegaphoneIcon, tone: "text-purple-500" },
  Retail: { icon: ShoppingBagIcon, tone: "text-emerald-600" },
  SaaS: { icon: Building2Icon, tone: "text-sky-500" },
}

export const SIGNAL_ICON: Record<SignalKind, LucideIcon> = {
  hiring: UserRoundPlusIcon,
  funding: BanknoteIcon,
  tech: CpuIcon,
}

export function CompanyIcon({ industry, size = "sm" }: { industry: string; size?: "xs" | "sm" }) {
  const meta = INDUSTRY_ICON[industry] ?? { icon: Building2Icon, tone: "text-muted-foreground" }
  const Icon = meta.icon
  return (
    <IconTile variant="soft" size={size} className={cn("rounded-md", meta.tone)}>
      <Icon />
    </IconTile>
  )
}

export function ProspectCell({ prospect }: { prospect: Prospect }) {
  return (
    <div className="flex items-center gap-2.5">
      <CompanyIcon industry={prospect.industry} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">{prospect.name}</div>
        <div className="text-muted-foreground truncate text-xs">
          {prospect.hq} · {prospect.website}
        </div>
      </div>
    </div>
  )
}

const TIER_COLOR: Record<FitTier, string> = {
  high: "var(--success)",
  medium: "var(--warning)",
  low: "var(--destructive)",
}

export function FitCell({ prospect }: { prospect: Prospect }) {
  const tier = fitTier(prospect.fit)
  return (
    <div className="flex items-center gap-2">
      <span
        className="relative size-8 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(${TIER_COLOR[tier]} ${prospect.fit}%, var(--muted) 0)`,
        }}
        title={`ICP fit ${prospect.fit} of 100`}
      >
        <span className="bg-background absolute inset-[3px] flex items-center justify-center rounded-full text-[10px] font-semibold tabular-nums">
          {prospect.fit}
        </span>
      </span>
      <span className="text-muted-foreground text-xs">{fitLabel(prospect.fit)}</span>
    </div>
  )
}

export function MiniBars({ values, up }: { values: number[]; up: boolean }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const span = max - min || 1
  return (
    <span aria-hidden className="flex h-5 items-end gap-[2px]">
      {values.map((value, index) => (
        <span
          key={index}
          className={cn(
            "w-[3px] rounded-[1px]",
            up ? "bg-success/70" : "bg-destructive/70",
            index === values.length - 1 && (up ? "bg-success" : "bg-destructive"),
          )}
          style={{ height: `${3 + ((value - min) / span) * 17}px` }}
        />
      ))}
    </span>
  )
}

export function HeadcountCell({ prospect }: { prospect: Prospect }) {
  const up = prospect.growth >= 0
  return (
    <div className="flex items-center gap-2">
      <MiniBars values={headcountTrend(prospect)} up={up} />
      <div className="flex flex-col">
        <span className="text-sm font-medium tabular-nums">
          {headcountLabel(prospect.headcount)}
        </span>
        <span
          className={cn(
            "text-xs tabular-nums",
            up ? "text-success-foreground" : "text-destructive",
          )}
        >
          {up ? "+" : ""}
          {prospect.growth}%
        </span>
      </div>
    </div>
  )
}

export function SignalsCell({ prospect }: { prospect: Prospect }) {
  if (prospect.signals.length === 0) {
    return <span className="text-muted-foreground text-xs">No signal</span>
  }
  return (
    <div className="flex flex-wrap items-center gap-1">
      {prospect.signals.slice(0, 2).map((signal) => {
        const Icon = SIGNAL_ICON[signal.kind]
        return (
          <Badge
            key={signal.label}
            variant={SIGNAL_META[signal.kind].variant}
            size="sm"
            className="gap-1 font-normal"
            title={signal.detail}
          >
            <Icon />
            {signal.label}
          </Badge>
        )
      })}
      {prospect.signals.length > 2 && (
        <span className="text-muted-foreground text-xs">
          +{prospect.signals.length - 2}
        </span>
      )}
    </div>
  )
}

export function ContactStack({ prospect }: { prospect: Prospect }) {
  if (prospect.contacts.length === 0) {
    return <span className="text-muted-foreground text-xs">—</span>
  }
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex -space-x-1.5">
        {prospect.contacts.slice(0, 2).map((contact) => (
          <Avatar key={contact.email} className="border-background size-6 border-2">
            <AvatarFallback className="text-[9px] font-medium">
              {initials(contact.name)}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      <span className="text-muted-foreground text-xs">{prospect.contacts.length}</span>
    </div>
  )
}

export function OwnerCell({ prospect }: { prospect: Prospect }) {
  const owner = prospect.ownerId ? OWNER_BY_ID[prospect.ownerId] : null
  if (!owner) {
    return <span className="text-muted-foreground text-sm">Unassigned</span>
  }
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-6">
        <AvatarImage src={owner.avatar} alt={owner.name} />
        <AvatarFallback className="text-[9px]">{initials(owner.name)}</AvatarFallback>
      </Avatar>
      <span className="truncate text-sm">{owner.name}</span>
    </div>
  )
}

export function StatusBadge({ status }: { status: ProspectStatus }) {
  const meta = STATUS_META[status]
  return (
    <Badge variant={meta.variant} size="lg" className="font-medium">
      {meta.label}
    </Badge>
  )
}

const TIER_DOT: Record<FitTier, string> = {
  high: "bg-success",
  medium: "bg-warning",
  low: "bg-destructive",
}

const HEADCOUNT_OPTIONS: { value: HeadcountBucket; label: string }[] = [
  { value: "all", label: "Any headcount" },
  { value: "1-100", label: "1 – 100" },
  { value: "101-500", label: "101 – 500" },
  { value: "501-2000", label: "501 – 2,000" },
  { value: "2000+", label: "2,000+" },
]

const SIGNALS = Object.keys(SIGNAL_META) as SignalKind[]

export function IcpFiltersPopover({
  filters,
  onChange,
}: {
  filters: IcpFilters
  onChange: (next: IcpFilters) => void
}) {
  const activeCount =
    (filters.headcount !== "all" ? 1 : 0) +
    filters.industries.length +
    filters.signals.length +
    (filters.tier !== "all" ? 1 : 0)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontalIcon />
          ICP filters
          {activeCount > 0 && (
            <Badge size="xs" variant="secondary">
              {activeCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        <div className="flex flex-col gap-3">
          <div>
            <div className="mb-1.5 text-xs font-medium">Headcount</div>
            <Select
              value={filters.headcount}
              onValueChange={(value) =>
                onChange({ ...filters, headcount: value as HeadcountBucket })
              }
            >
              <SelectTrigger size="sm" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {HEADCOUNT_OPTIONS.map((entry) => (
                  <SelectItem key={entry.value} value={entry.value}>
                    {entry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="mb-1.5 text-xs font-medium">Industry</div>
            <div className="grid grid-cols-2 gap-1">
              {INDUSTRIES.map((industry) => (
                <label
                  key={industry}
                  className="flex items-center gap-1.5 rounded px-1 py-0.5 text-xs"
                >
                  <Checkbox
                    checked={filters.industries.includes(industry)}
                    onCheckedChange={(value) =>
                      onChange({
                        ...filters,
                        industries:
                          value === true
                            ? [...filters.industries, industry]
                            : filters.industries.filter((entry) => entry !== industry),
                      })
                    }
                  />
                  {industry}
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1.5 text-xs font-medium">Signals</div>
            <div className="flex flex-col gap-1">
              {SIGNALS.map((signal) => {
                const Icon = SIGNAL_ICON[signal]
                return (
                  <label
                    key={signal}
                    className="flex items-center gap-1.5 rounded px-1 py-0.5 text-xs"
                  >
                    <Checkbox
                      checked={filters.signals.includes(signal)}
                      onCheckedChange={(value) =>
                        onChange({
                          ...filters,
                          signals:
                            value === true
                              ? [...filters.signals, signal]
                              : filters.signals.filter((entry) => entry !== signal),
                        })
                      }
                    />
                    <Icon className="text-muted-foreground size-3" />
                    {SIGNAL_META[signal].label}
                  </label>
                )
              })}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => onChange(EMPTY_FILTERS)}
          >
            <XIcon />
            Clear ICP filters
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function SavedListsPopover({
  prospects,
  activeList,
  onToggle,
}: {
  prospects: Prospect[]
  activeList: string | null
  onToggle: (id: string) => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <BookmarkIcon />
          Saved lists
          {activeList && (
            <Badge size="xs" variant="secondary">
              1
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-1">
        {SAVED_LISTS.map((list) => (
          <button
            key={list.id}
            type="button"
            onClick={() => onToggle(list.id)}
            className="hover:bg-muted flex w-full items-start gap-2 rounded-sm px-2 py-1.5 text-left"
          >
            <span className="mt-0.5 size-3.5 shrink-0">
              {activeList === list.id && <CheckIcon className="size-3.5" />}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium">{list.name}</span>
              <span className="text-muted-foreground block text-xs">
                {list.note} ·{" "}
                {prospects.filter((entry) => matchesFilters(entry, list.filters)).length}
              </span>
            </span>
          </button>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export function TierCard({
  tier,
  label,
  count,
  total,
  unassigned,
  active,
  onClick,
}: {
  tier: FitTier
  label: string
  count: number
  total: number
  unassigned: number
  active: boolean
  onClick: () => void
}) {
  const filled = total === 0 ? 0 : Math.max(1, Math.round((count / total) * 12))
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "bg-muted/20 hover:bg-muted/40 flex flex-col gap-2 rounded-lg border p-3 text-left transition-colors",
        active && "border-primary/50 bg-primary/5",
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <span className={cn("size-1.5 rounded-full", TIER_DOT[tier])} />
          {label}
        </span>
        <span className="text-muted-foreground text-xs">{unassigned} unassigned</span>
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="text-2xl font-semibold tabular-nums">{count}</span>
        <span className="text-muted-foreground text-xs">
          {total ? Math.round((count / total) * 100) : 0}%
        </span>
      </div>
      <div aria-hidden className="flex gap-1">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              index < filled ? TIER_DOT[tier] : "bg-muted",
            )}
          />
        ))}
      </div>
    </button>
  )
}
