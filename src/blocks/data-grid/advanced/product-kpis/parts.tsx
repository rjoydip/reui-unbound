import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  BackpackIcon,
  FootprintsIcon,
  RotateCcwIcon,
  ShirtIcon,
  SlidersHorizontalIcon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { IconTile } from "@/components/kit/icon-tile"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "cn"

import {
  DEFAULT_GUARDRAILS,
  PROMO_MONTHS,
  STATUS_META,
  formatCompactMoney,
  marketShare,
  scoreProduct,
} from "./data"
import product1 from "./assets/product-1.png"
import product2 from "./assets/product-2.png"
import product3 from "./assets/product-3.png"
import product4 from "./assets/product-4.png"
import product5 from "./assets/product-5.png"
import product6 from "./assets/product-6.png"
import product7 from "./assets/product-7.png"
import product8 from "./assets/product-8.png"
import product9 from "./assets/product-9.png"
import product10 from "./assets/product-10.png"
import type { Guardrails, Product, Score } from "./data"

const CATEGORY_ICONS: Record<string, { icon: LucideIcon; tone: string }> = {
  Footwear: { icon: FootprintsIcon, tone: "text-amber-600" },
  Apparel: { icon: ShirtIcon, tone: "text-sky-600" },
  Accessories: { icon: BackpackIcon, tone: "text-emerald-600" },
}

const PRODUCT_PHOTOS: Record<string, string> = {
  "FW-5973": product1,
  "FW-1946": product2,
  "FW-6919": product3,
  "FW-2892": product4,
  "FW-7865": product5,
  "FW-3838": product6,
  "AP-8811": product7,
  "AP-4764": product8,
  "AP-9757": product9,
  "AP-5730": product10,
}

export function ProductTile({ product }: { product: Product }) {
  const meta = CATEGORY_ICONS[product.category] ?? CATEGORY_ICONS.Apparel
  const Icon = meta.icon
  const photo = PRODUCT_PHOTOS[product.sku]

  return (
    <span className="from-muted to-muted/40 relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-gradient-to-br">
      <Icon className={cn("size-4", meta.tone)} />
      {photo && (
        <img
          src={photo}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />
      )}
    </span>
  )
}

export function ProductCell({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-2.5">
      <ProductTile product={product} />
      <div className="min-w-0">
        <div className="text-foreground truncate font-medium">
          {product.name}
        </div>
        <div className="text-muted-foreground truncate font-mono text-[11px]">
          ID: {product.sku}
        </div>
      </div>
    </div>
  )
}

export function TrendSparkline({ history }: { history: number[] }) {
  const max = Math.max(...history, 1)
  const min = Math.min(...history, 0)
  const span = max - min || 1
  const points = history.map((value, index) => {
    const x = (index / (history.length - 1)) * 96
    const y = 24 - ((value - min) / span) * 20
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })
  const split = Math.max(0, history.length - 4)
  const before = points.slice(0, split + 1).join(" ")
  const after = points.slice(split).join(" ")
  const empty = history.every((value) => value === 0)

  if (empty) {
    return (
      <span className="text-muted-foreground/60 text-xs">No sales</span>
    )
  }

  return (
    <svg
      viewBox="0 0 96 28"
      className="h-7 w-24 overflow-visible"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="24"
        x2="96"
        y2="24"
        className="stroke-border"
        strokeWidth="1"
      />
      <polyline
        points={before}
        fill="none"
        className="stroke-muted-foreground/40"
        strokeWidth="1.25"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points={after}
        fill="none"
        className="stroke-info"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function PromoStrip({ promo }: { promo: Product["promo"] }) {
  return (
    <div className="flex items-end gap-0.5" aria-hidden="true">
      {promo.map((week, index) => (
        <span
          key={PROMO_MONTHS[index]}
          className={cn(
            "h-3 w-1 rounded-[1px]",
            week === 1
              ? "bg-purple-500/60"
              : week === 2
                ? "bg-destructive/70"
                : "bg-muted-foreground/15",
          )}
        />
      ))}
    </div>
  )
}

export function PromoCalendar({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-6 gap-1">
        {product.promo.map((month, index) => (
          <div key={PROMO_MONTHS[index]} className="flex flex-col gap-1">
            <span
              className={cn(
                "h-6 rounded-sm border",
                month === 1
                  ? "border-purple-500/30 bg-purple-500/20"
                  : month === 2
                    ? "border-destructive/30 bg-destructive/15"
                    : "bg-muted/50 border-border",
              )}
            />
            <span className="text-muted-foreground text-center text-[10px]">
              {PROMO_MONTHS[index]}
            </span>
          </div>
        ))}
      </div>
      <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-[11px]">
        <span className="flex items-center gap-1">
          <span className="bg-purple-500/60 size-2 rounded-sm" />
          Promo week
        </span>
        <span className="flex items-center gap-1">
          <span className="bg-destructive/70 size-2 rounded-sm" />
          Promo at a loss
        </span>
        <span className="flex items-center gap-1">
          <span className="bg-muted-foreground/20 size-2 rounded-sm" />
          Full price
        </span>
      </div>
    </div>
  )
}

export function StatusCell({ score }: { score: Score }) {
  const meta = STATUS_META[score.status]

  return (
    <div className="flex flex-col gap-1.5">
      <Badge variant={meta.variant} size="lg" className="font-medium">
        {meta.label}
      </Badge>
      {score.status === "on-track" ||
      score.status === "at-risk" ||
      score.status === "off-track" ? (
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {score.flags.map((met, index) => (
              <span
                key={index}
                className={cn(
                  "h-1 w-4 rounded-full",
                  met ? "bg-success" : "bg-destructive/60",
                )}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-[11px] tabular-nums">
            {score.met}/3 met
          </span>
        </div>
      ) : (
        <span className="text-muted-foreground text-[11px]">
          {score.status === "returned" ? "Refunded units" : "0/3 met"}
        </span>
      )}
    </div>
  )
}

export function RevenueCell({ product }: { product: Product }) {
  if (product.revenue === null) {
    return (
      <div className="flex flex-col items-end gap-0.5">
        <span className="text-muted-foreground text-sm">
          {product.state === "returned" ? "Returned" : "No sales"}
        </span>
        <span className="text-muted-foreground/60 text-[11px]">
          {product.state === "returned" ? "Net of returns" : "No orders"}
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-sm font-medium tabular-nums">
        {formatCompactMoney(product.revenue)}
      </span>
      {product.change !== null && (
        <span
          className={cn(
            "flex items-center gap-0.5 text-[11px] tabular-nums",
            product.change < 0
              ? "text-warning-foreground"
              : "text-success-foreground",
          )}
        >
          {product.change < 0 ? (
            <ArrowDownRightIcon className="size-3" />
          ) : (
            <ArrowUpRightIcon className="size-3" />
          )}
          {product.change > 0 ? "+" : ""}
          {product.change.toFixed(1)}%
        </span>
      )}
    </div>
  )
}

export function ProfitCell({ product }: { product: Product }) {
  if (product.profit === null) {
    return (
      <span className="text-muted-foreground ml-auto block text-sm">
        {product.state === "returned" ? "Returned" : "No sales"}
      </span>
    )
  }

  return (
    <span
      className={cn(
        "ml-auto block text-sm font-medium tabular-nums",
        product.profit < 0 && "text-destructive",
      )}
    >
      {product.profit < 0 ? "-" : ""}
      {formatCompactMoney(Math.abs(product.profit))}
    </span>
  )
}

export function MarginCell({
  product,
  guardrails,
}: {
  product: Product
  guardrails: Guardrails
}) {
  return (
    <div className="flex flex-col items-end gap-0.5 text-sm tabular-nums">
      <span
        className={cn(
          product.margin < guardrails.margin && "text-warning-foreground",
        )}
      >
        {product.margin.toFixed(1)}%
      </span>
      <span className="text-muted-foreground text-[11px]">
        {product.discount}% off
      </span>
    </div>
  )
}

export function GuardrailsPopover({
  guardrails,
  onChange,
}: {
  guardrails: Guardrails
  onChange: (next: Guardrails) => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontalIcon />
          Guardrails
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm font-medium">Guardrails</div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-1.5"
            onClick={() => onChange(DEFAULT_GUARDRAILS)}
          >
            <RotateCcwIcon />
            Reset
          </Button>
        </div>
        <p className="text-muted-foreground mt-1 text-xs">
          Statuses re-score as you drag.
        </p>

        <div className="mt-3 flex flex-col gap-4">
          {[
            {
              key: "revenue" as const,
              label: "Revenue floor",
              min: 20000,
              max: 400000,
              step: 10000,
              value: guardrails.revenue,
              suffix: "",
              format: formatCompactMoney,
            },
            {
              key: "margin" as const,
              label: "Margin floor",
              min: 5,
              max: 40,
              step: 1,
              value: guardrails.margin,
              suffix: "%",
              format: (value: number) => value.toString(),
            },
            {
              key: "discount" as const,
              label: "Discount ceiling",
              min: 0,
              max: 40,
              step: 1,
              value: guardrails.discount,
              suffix: "%",
              format: (value: number) => value.toString(),
            },
          ].map((slider) => (
            <div key={slider.key} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <span>{slider.label}</span>
                <span className="font-medium tabular-nums">
                  {slider.format(slider.value)}
                  {slider.suffix}
                </span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={slider.value}
                aria-label={slider.label}
                onChange={(event) =>
                  onChange({
                    ...guardrails,
                    [slider.key]: Number(event.target.value),
                  })
                }
                className="accent-primary h-1.5 w-full cursor-pointer"
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function ProductSheet({
  product,
  guardrails,
  open,
  onOpenChange,
}: {
  product: Product | null
  guardrails: Guardrails
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!product) return null
  const score = scoreProduct(product, guardrails)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <IconTile variant="soft" size="sm">
              {(() => {
                const meta =
                  CATEGORY_ICONS[product.category] ?? CATEGORY_ICONS.Apparel
                const Icon = meta.icon
                return <Icon />
              })()}
            </IconTile>
            {product.name}
          </SheetTitle>
          <SheetDescription>
            {product.category} · {product.sku} · 13 weeks to Oct 11
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4 pb-6">
          <div className="flex items-center justify-between gap-2">
            <StatusCell score={score} />
            <span className="text-muted-foreground text-xs">
              {product.promo.filter((week) => week > 0).length} promo weeks
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-sm">
            {[
              {
                label: "Revenue",
                value:
                  product.revenue === null
                    ? "-"
                    : formatCompactMoney(product.revenue),
              },
              {
                label: "Profit",
                value:
                  product.profit === null
                    ? "-"
                    : formatCompactMoney(product.profit),
              },
              { label: "Margin", value: `${product.margin.toFixed(1)}%` },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border p-2.5">
                <div className="text-muted-foreground text-[11px]">
                  {item.label}
                </div>
                <div className="font-medium tabular-nums">{item.value}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-sm font-medium">Revenue trend</div>
            <div className="mt-1.5 rounded-lg border p-2.5">
              <TrendSparkline history={product.history} />
              <div className="text-muted-foreground mt-1 flex justify-between text-[10px]">
                <span>8 weeks ago</span>
                <span>This period</span>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Market share</div>
              <span className="text-muted-foreground text-[11px]">
                Own + marketplace + wholesale
              </span>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              {marketShare(product).map((channel) => (
                <div key={channel.channel} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>{channel.channel}</span>
                    <span className="tabular-nums">{channel.share}%</span>
                  </div>
                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                    <div
                      className="bg-info h-full rounded-full"
                      style={{ width: `${channel.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <div className="text-sm font-medium">Promotion calendar</div>
            <div className="mt-2">
              <PromoCalendar product={product} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
