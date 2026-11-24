import { ArrowUpRightIcon, ChartColumnIcon, WalletIcon } from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { IconTile } from "@/components/kit/icon-tile"
import { cn } from "cn"

const ACCOUNTS = [
  {
    type: "Account",
    name: "Main Wallet",
    icon: WalletIcon,
    iconClassName: "bg-neutral-950 text-white",
    balance: "$2,435,900",
    percent: "+18%",
    amount: "($214,356)",
    positive: true,
  },
  {
    type: "Account",
    name: "Reserve Fund",
    icon: ChartColumnIcon,
    iconClassName: "bg-violet-600 text-white",
    balance: "$1,980,000",
    percent: "-3%",
    amount: "($58,000)",
    positive: false,
  },
  {
    type: "Team",
    name: "Growth Portfolio",
    icon: ArrowUpRightIcon,
    iconClassName: "bg-rose-500 text-white",
    balance: "$3,245,500",
    percent: "+10%",
    amount: "($295,000)",
    positive: true,
  },
]

export function Card25Block() {
  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="grid w-full max-w-[960px] gap-2 sm:grid-cols-3">
        {ACCOUNTS.map((account) => {
          const Icon = account.icon
          return (
            <FramePanel key={account.name} className="p-3.5">
              <div className="flex items-center gap-2.5">
                <IconTile
                  variant="solid"
                  className={cn("rounded-lg", account.iconClassName)}
                >
                  <Icon aria-hidden="true" />
                </IconTile>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">
                    {account.type}
                  </span>
                  <span className="text-sm font-medium">{account.name}</span>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-muted-foreground text-sm">Balance (USD)</p>
                <div className="mt-0.5 flex flex-wrap items-baseline gap-1.5">
                  <span className="text-xl font-semibold tracking-tight">
                    {account.balance}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      account.positive
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-red-600 dark:text-red-400"
                    )}
                  >
                    {account.percent}{" "}
                    <span className="opacity-90">{account.amount}</span>
                  </span>
                </div>
              </div>
            </FramePanel>
          )
        })}
      </Frame>
    </div>
  )
}

export default Card25Block
