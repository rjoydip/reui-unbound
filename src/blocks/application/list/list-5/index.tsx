import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { cn } from "cn"

type Transaction = {
  title: string
  date: string
  amount: string
  tone: "credit" | "debit"
}

const TRANSACTIONS: Transaction[] = [
  {
    title: "Ethereum Gain",
    date: "12th May, 2026",
    amount: "+ $1,980",
    tone: "credit",
  },
  {
    title: "Bitcoin Sold",
    date: "11th May, 2026",
    amount: "- $2,450",
    tone: "debit",
  },
  {
    title: "USDT Deposit",
    date: "9th May, 2026",
    amount: "+ $3,200",
    tone: "credit",
  },
  {
    title: "Staking Reward",
    date: "8th May, 2026",
    amount: "+ $126",
    tone: "credit",
  },
  {
    title: "Solana Purchase",
    date: "6th May, 2026",
    amount: "- $750",
    tone: "debit",
  },
]

export function List5Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame dense stacked className="w-full max-w-[415px]">
        {TRANSACTIONS.map((transaction) => {
          const isCredit = transaction.tone === "credit"
          const Icon = isCredit ? ArrowUpRightIcon : ArrowDownRightIcon

          return (
            <FramePanel key={transaction.title} className="p-0!">
              <Item className="rounded-none border-transparent px-4 py-4">
                <IconTile
                  size="sm"
                  className={cn(
                    isCredit
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
                  )}
                >
                  <Icon aria-hidden="true" />
                </IconTile>

                <ItemContent className="gap-0.5">
                  <ItemTitle className="text-sm font-medium">
                    {transaction.title}
                  </ItemTitle>
                  <ItemDescription className="text-xs">
                    {transaction.date}
                  </ItemDescription>
                </ItemContent>

                <ItemActions>
                  <span
                    className={cn(
                      "text-sm font-medium tabular-nums",
                      isCredit
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-600 dark:text-red-400"
                    )}
                  >
                    {transaction.amount}
                  </span>
                </ItemActions>
              </Item>
            </FramePanel>
          )
        })}
      </Frame>
    </div>
  )
}

export default List5Block
