import { useState } from "react"
import {
  ArrowDownToLine,
  Car,
  ExternalLink,
  ShoppingCart,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Frame, FramePanel } from "@/components/kit/frame"

type Period = "weekly" | "all-time"

type Transaction = {
  id: string
  title: string
  meta: string
  amount: string
  credit: boolean
  icon: LucideIcon
  tile: string
}

const WEEKLY: Transaction[] = [
  {
    id: "deposit",
    title: "One-time Deposit",
    meta: "June 16",
    amount: "+ $3,100.00",
    credit: true,
    icon: ArrowDownToLine,
    tile: "bg-emerald-600",
  },
  {
    id: "groceries",
    title: "Grocery Shopping",
    meta: "June 14",
    amount: "- $312.40",
    credit: false,
    icon: ShoppingCart,
    tile: "bg-violet-600",
  },
  {
    id: "electricity",
    title: "Electricity Bill",
    meta: "June 12",
    amount: "- $84.20",
    credit: false,
    icon: Zap,
    tile: "bg-orange-500",
  },
  {
    id: "dining",
    title: "Dining Out",
    meta: "June 11",
    amount: "- $189.00",
    credit: false,
    icon: Car,
    tile: "bg-blue-600",
  },
  {
    id: "interest",
    title: "Interest Payout",
    meta: "June 9",
    amount: "+ $28.90",
    credit: true,
    icon: TrendingUp,
    tile: "bg-zinc-700",
  },
]

const ALL_TIME: Transaction[] = [
  {
    id: "deposit",
    title: "One-time Deposit",
    meta: "Mar 4",
    amount: "+ $18,750.00",
    credit: true,
    icon: ArrowDownToLine,
    tile: "bg-emerald-600",
  },
  {
    id: "groceries",
    title: "Grocery Shopping",
    meta: "Quarterly avg.",
    amount: "- $4,920.00",
    credit: false,
    icon: ShoppingCart,
    tile: "bg-violet-600",
  },
  {
    id: "electricity",
    title: "Electricity Bill",
    meta: "YTD",
    amount: "- $1,010.40",
    credit: false,
    icon: Zap,
    tile: "bg-orange-500",
  },
  {
    id: "dining",
    title: "Dining Out",
    meta: "YTD",
    amount: "- $2,340.88",
    credit: false,
    icon: Car,
    tile: "bg-blue-600",
  },
  {
    id: "interest",
    title: "Interest Payout",
    meta: "YTD",
    amount: "+ $410.22",
    credit: true,
    icon: TrendingUp,
    tile: "bg-zinc-700",
  },
]

function TransactionRow({
  transaction,
  last,
}: {
  transaction: Transaction
  last: boolean
}) {
  const Icon = transaction.icon
  return (
    <div
      className={cn(
        "px-4",
        !last && "border-b border-dashed border-border",
      )}
    >
      <Item className="gap-3 px-0 py-3.5">
        <ItemMedia
          variant="icon"
          className={cn(
            "size-9 rounded-[10px] text-white shadow-xs [&_svg]:size-4",
            transaction.tile,
          )}
        >
          <Icon />
        </ItemMedia>
        <ItemContent className="gap-0.5">
          <ItemTitle className="text-sm font-medium">
            {transaction.title}
          </ItemTitle>
          <div className="text-xs text-muted-foreground">
            {transaction.meta}
          </div>
        </ItemContent>
        <ItemActions>
          <span
            className={cn(
              "text-sm font-medium tabular-nums",
              transaction.credit ? "text-success" : "text-destructive",
            )}
          >
            {transaction.amount}
          </span>
        </ItemActions>
      </Item>
    </div>
  )
}

export function List7Block() {
  const [period, setPeriod] = useState<Period>("weekly")
  const rows = period === "weekly" ? WEEKLY : ALL_TIME

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-[420px]">
        <Frame spacing="xs">
          <FramePanel className="px-4 py-3">
            <Tabs
              value={period}
              onValueChange={(value) => setPeriod(value as Period)}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[15px] font-semibold">Transactions</span>
                <TabsList className="h-7 p-0.5">
                  <TabsTrigger value="weekly" className="px-2.5 text-[13px]">
                    Weekly
                  </TabsTrigger>
                  <TabsTrigger value="all-time" className="px-2.5 text-[13px]">
                    All Time
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </FramePanel>

          <FramePanel className="p-0 py-1">
            <ItemGroup className="gap-0">
              {rows.map((transaction, index) => (
                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                  last={index === rows.length - 1}
                />
              ))}
            </ItemGroup>
          </FramePanel>

          <FramePanel className="p-4">
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full gap-1.5"
            >
              <ExternalLink />
              View More
            </Button>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}

export default List7Block
