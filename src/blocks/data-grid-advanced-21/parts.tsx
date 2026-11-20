import {
  BellIcon,
  BikeIcon,
  ChevronDownIcon,
  CircleCheckIcon,
  CircleDotIcon,
  CirclePauseIcon,
  CircleSlash2Icon,
  ClapperboardIcon,
  ClockIcon,
  CoffeeIcon,
  DumbbellIcon,
  FlaskConicalIcon,
  HandCoinsIcon,
  HeartPulseIcon,
  LeafIcon,
  MessageSquareWarningIcon,
  MicroscopeIcon,
  PaletteIcon,
  PenToolIcon,
  PhoneIcon,
  PrinterIcon,
  SendIcon,
  SofaIcon,
  SproutIcon,
  TriangleAlertIcon,
  TruckIcon,
  TvIcon,
  UtensilsIcon,
  WavesIcon,
  ZapIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/reui-unbound/badge"
import { Button } from "@/components/ui/button"
import { IconTile } from "@/components/reui-unbound/icon-tile"
import { cn } from "cn"

import { TIMELINE_MONTHS, formatInvoiceAmount, formatUsd, sumUsd } from "./data"
import type {
  ExpectedState,
  Invoice,
  InvoiceStatus,
  NextStepKind,
  TimelineTone,
} from "./data"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

/** Company mark: a soft icon tile keeps the row's identity without a logo asset. */
const COMPANY_MARKS: Record<string, { icon: LucideIcon; tone: string }> = {
  "Kite Fitness": { icon: DumbbellIcon, tone: "text-orange-500" },
  "Atlas Freight GmbH": { icon: TruckIcon, tone: "text-blue-500" },
  "Copperline Electric": { icon: ZapIcon, tone: "text-amber-500" },
  "Lumen Labs": { icon: FlaskConicalIcon, tone: "text-violet-500" },
  "Orbit Media": { icon: TvIcon, tone: "text-sky-500" },
  "Greenleaf Market": { icon: LeafIcon, tone: "text-emerald-500" },
  "Northwind Studio": { icon: PenToolIcon, tone: "text-purple-500" },
  "Harbor Coffee": { icon: CoffeeIcon, tone: "text-amber-600" },
  "Volta Mobility": { icon: BikeIcon, tone: "text-lime-600" },
  "Tidewater Supply": { icon: WavesIcon, tone: "text-cyan-600" },
  "Beacon Health": { icon: HeartPulseIcon, tone: "text-rose-500" },
  "Sable Interiors": { icon: SofaIcon, tone: "text-stone-500" },
  "Fern & Field": { icon: SproutIcon, tone: "text-green-600" },
  "Atelier Nord": { icon: PaletteIcon, tone: "text-indigo-500" },
  "Copa Studio": { icon: ClapperboardIcon, tone: "text-pink-500" },
  "Meridian Labs": { icon: MicroscopeIcon, tone: "text-teal-600" },
  "Bluebird Foods": { icon: UtensilsIcon, tone: "text-sky-600" },
  "Union Print": { icon: PrinterIcon, tone: "text-slate-600" },
}

export function CompanyMark({ company }: { company: string }) {
  const mark = COMPANY_MARKS[company]
  const Icon = mark?.icon ?? CircleDotIcon

  return (
    <IconTile
      variant="soft"
      size="sm"
      className={cn("rounded-md", mark?.tone ?? "text-muted-foreground")}
    >
      <Icon />
    </IconTile>
  )
}

export function CustomerCell({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex items-center gap-2.5">
      <CompanyMark company={invoice.customer} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {invoice.customer}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {invoice.contact}
          {invoice.openCount ? ` · ${invoice.openCount} open` : ""}
        </div>
      </div>
    </div>
  )
}

export function BalanceCell({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-foreground font-medium tabular-nums">
        {formatInvoiceAmount(invoice)}
      </span>
      <span className="text-muted-foreground text-xs">
        {invoice.balanceNote ?? invoice.currency}
      </span>
    </div>
  )
}

const STATUS_META: Record<
  InvoiceStatus,
  { variant: "destructive-light" | "info-light"; icon: LucideIcon }
> = {
  late: { variant: "destructive-light", icon: ClockIcon },
  disputed: { variant: "info-light", icon: MessageSquareWarningIcon },
  due: { variant: "info-light", icon: ClockIcon },
}

export function InvoiceStatusBadge({ invoice }: { invoice: Invoice }) {
  const meta = STATUS_META[invoice.status]
  const Icon = meta.icon
  const label =
    invoice.status === "late"
      ? `${invoice.daysLate}d late`
      : invoice.status === "disputed"
        ? "Disputed"
        : `Due in ${invoice.dueIn}d`

  return (
    <Badge variant={meta.variant} size="lg" className="gap-1 font-medium">
      <Icon />
      {label}
    </Badge>
  )
}

export function StatusCell({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex flex-col gap-1">
      <InvoiceStatusBadge invoice={invoice} />
      <span className="text-muted-foreground truncate text-xs">
        {invoice.dueDate} &middot; {invoice.number}
      </span>
    </div>
  )
}

const TIMELINE_TONES: Record<TimelineTone, { bar: string; icon: string }> = {
  danger: { bar: "bg-destructive/70", icon: "text-destructive" },
  warning: { bar: "bg-warning/70", icon: "text-warning-foreground" },
  violet: { bar: "bg-purple-500/70", icon: "text-purple-500" },
  info: { bar: "bg-info/70", icon: "text-info" },
  success: { bar: "bg-success/70", icon: "text-success" },
}

const TIMELINE_ICONS: Record<TimelineTone, LucideIcon> = {
  danger: CircleSlash2Icon,
  warning: TriangleAlertIcon,
  violet: CirclePauseIcon,
  info: CircleDotIcon,
  success: CircleCheckIcon,
}

export function TimelineCell({ invoice }: { invoice: Invoice }) {
  const [sep, oct, nov] = invoice.timeline
  const Icon = TIMELINE_ICONS[nov]

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex gap-0.5">
          {invoice.timeline.map((tone, index) => (
            <span
              key={TIMELINE_MONTHS[index]}
              className={cn(
                "h-1.5 flex-1 rounded-[2px]",
                TIMELINE_TONES[tone].bar,
              )}
            />
          ))}
        </div>
        <div className="text-muted-foreground/80 flex justify-between text-[10px] leading-none">
          {TIMELINE_MONTHS.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
      <Icon className={cn("size-3.5 shrink-0", TIMELINE_TONES[nov].icon)} />
      <span className="sr-only">
        {sep} in {TIMELINE_MONTHS[0]}, {oct} in {TIMELINE_MONTHS[1]}, {nov} in{" "}
        {TIMELINE_MONTHS[2]}
      </span>
    </div>
  )
}

const EXPECTED_META: Record<
  ExpectedState,
  {
    variant:
      | "destructive-light"
      | "success-light"
      | "warning-light"
      | "invert-light"
  }
> = {
  "at-risk": { variant: "destructive-light" },
  promised: { variant: "success-light" },
  "on-track": { variant: "success-light" },
  "might-slip": { variant: "warning-light" },
  settled: { variant: "invert-light" },
}

const EXPECTED_LABEL: Record<ExpectedState, string> = {
  "at-risk": "At risk",
  promised: "Promised",
  "on-track": "On track",
  "might-slip": "Might slip",
  settled: "Untitled settled",
}

export function ExpectedCell({ invoice }: { invoice: Invoice }) {
  const meta = EXPECTED_META[invoice.expected.state]

  return (
    <div className="flex flex-col items-start gap-1">
      <span
        className={cn(
          "text-sm font-medium tabular-nums",
          invoice.expected.label === null && "text-muted-foreground",
        )}
      >
        {invoice.expected.label ?? "No date"}
      </span>
      <Badge variant={meta.variant} size="sm" className="font-medium">
        {EXPECTED_LABEL[invoice.expected.state]}
      </Badge>
    </div>
  )
}

const NEXT_STEP_META: Record<NextStepKind, { icon: LucideIcon; tone: string }> =
  {
    collections: {
      icon: HandCoinsIcon,
      tone: "border-destructive/25 bg-destructive/5 text-destructive hover:bg-destructive/10",
    },
    call: {
      icon: PhoneIcon,
      tone: "border-warning/30 bg-warning/5 text-warning-foreground hover:bg-warning/10",
    },
    dispute: {
      icon: MessageSquareWarningIcon,
      tone: "border-purple-500/25 bg-purple-500/5 text-purple-600 hover:bg-purple-500/10 dark:text-purple-400",
    },
    resend: {
      icon: SendIcon,
      tone: "border-success/25 bg-success/5 text-success-foreground hover:bg-success/10",
    },
    wait: {
      icon: ClockIcon,
      tone: "border-border bg-background text-muted-foreground hover:bg-muted",
    },
    reminder: {
      icon: BellIcon,
      tone: "border-border bg-background text-foreground hover:bg-muted",
    },
  }

export function NextStepButton({ invoice }: { invoice: Invoice }) {
  const meta = NEXT_STEP_META[invoice.nextStep.kind]
  const Icon = meta.icon

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn("max-w-full justify-start gap-1.5 font-normal", meta.tone)}
    >
      <Icon />
      <span className="truncate">{invoice.nextStep.label}</span>
    </Button>
  )
}

export function OwnerCell({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-7">
        <AvatarImage src={invoice.owner.avatar} alt={invoice.owner.name} />
        <AvatarFallback className="text-[10px]">
          {initials(invoice.owner.name)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <div className="text-foreground truncate text-sm font-medium">
          {invoice.owner.name}
        </div>
        <div className="text-muted-foreground truncate text-xs">
          {invoice.owner.role}
        </div>
      </div>
    </div>
  )
}

export function GroupCard({
  label,
  cardNote,
  dot,
  tint,
  border,
  invoices,
}: {
  label: string
  cardNote: string
  dot: string
  tint: string
  border: string
  invoices: Invoice[]
}) {
  return (
    <div className={cn("rounded-lg border p-3", tint, border)}>
      <div className="flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1.5 text-sm font-medium">
          <span className={cn("size-2 shrink-0 rounded-full", dot)} />
          <span className="truncate">{label}</span>
        </span>
        <Badge
          variant="outline"
          size="sm"
          className="bg-background/60 shrink-0 font-normal"
        >
          {invoices.length} invoices
        </Badge>
      </div>
      <div className="mt-3 text-xl font-semibold tabular-nums">
        {formatUsd(sumUsd(invoices))}
      </div>
      <div className="text-muted-foreground text-xs">{cardNote}</div>
    </div>
  )
}

export function GroupHeaderRow({
  label,
  summary,
  dot,
  tint,
  collapsed,
  onToggle,
}: {
  label: string
  summary: string
  dot: string
  tint: string
  collapsed: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={!collapsed}
      className={cn(
        "hover:bg-muted/40 flex w-full items-center gap-2 border-y px-3 py-2 text-left text-sm",
        tint,
      )}
    >
      <ChevronDownIcon
        className={cn(
          "text-muted-foreground size-4 shrink-0",
          collapsed && "-rotate-90",
        )}
      />
      <span className={cn("size-2 shrink-0 rounded-full", dot)} />
      <span className="shrink-0 font-medium">{label}</span>
      <span className="text-muted-foreground truncate">{summary}</span>
    </button>
  )
}
