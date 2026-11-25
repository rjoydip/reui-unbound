import { useState, type ReactNode } from "react"
import { InfoIcon } from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type InflowFund = {
  name: string
  amount: string
  share: string
  mark: ReactNode
}

function TetherMark() {
  return <span className="text-[15px] leading-none font-bold text-[#26a17b]">₮</span>
}

function BinanceMark() {
  return (
    <span className="flex size-4 items-center justify-center rounded-full bg-black text-[#f3ba2f]">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-2.5" aria-hidden="true">
        <path d="M12 2.2 15.1 5.3 12 8.4 8.9 5.3 12 2.2Zm-6.7 6.6 3.1 3.2-3.1 3.1L2.2 12l3.1-3.2Zm13.4 0L21.8 12l-3.1 3.1L15.6 12l3.1-3.2ZM12 8.4l3.6 3.6L12 15.6 8.4 12 12 8.4Zm0 7.9 3.1 3.1L12 22l-3.1-2.6L12 16.3Z" />
      </svg>
    </span>
  )
}

function CoinbaseMark() {
  return (
    <span className="flex size-4 items-center justify-center rounded-full bg-[#0052ff]">
      <span className="block size-2 rounded-full border-2 border-white" />
    </span>
  )
}

const PERIODS = {
  weekly: [
    { name: "Tether Capital", amount: "$7,6M", share: "35%", mark: <TetherMark /> },
    { name: "Binance Market", amount: "$3,4M", share: "34%", mark: <BinanceMark /> },
    {
      name: "Coinbase Investment",
      amount: "$1,2M",
      share: "14%",
      mark: <CoinbaseMark />,
    },
  ],
  "all-time": [
    { name: "Tether Capital", amount: "$42,8M", share: "39%", mark: <TetherMark /> },
    { name: "Binance Market", amount: "$31,6M", share: "29%", mark: <BinanceMark /> },
    {
      name: "Coinbase Investment",
      amount: "$18,4M",
      share: "17%",
      mark: <CoinbaseMark />,
    },
  ],
} satisfies Record<string, InflowFund[]>

function InflowRows({ funds }: { funds: InflowFund[] }) {
  return (
    <div className="divide-y">
      {funds.map((fund) => (
        <Item
          key={fund.name}
          className="rounded-none border-transparent px-4 py-3"
        >
          <ItemMedia variant="icon" className="size-4">
            {fund.mark}
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-sm font-medium">{fund.name}</ItemTitle>
          </ItemContent>
          <ItemActions className="gap-3">
            <span className="text-sm font-semibold tabular-nums">
              {fund.amount}
            </span>
            <span className="text-muted-foreground w-8 text-right text-xs tabular-nums">
              {fund.share}
            </span>
          </ItemActions>
        </Item>
      ))}
    </div>
  )
}

export function ListCapitalInflowsBlock() {
  const [period, setPeriod] = useState<keyof typeof PERIODS>("weekly")

  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[445px]">
        <FramePanel className="p-0!">
          <Tabs
            value={period}
            onValueChange={(value) => setPeriod(value as keyof typeof PERIODS)}
            className="gap-0"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">Capital Inflows</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="text-muted-foreground"
                        aria-label="About capital inflows"
                      >
                        <InfoIcon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Capital added to the top funds for the selected period.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="all-time">All Time</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="weekly">
              <InflowRows funds={PERIODS.weekly} />
            </TabsContent>
            <TabsContent value="all-time">
              <InflowRows funds={PERIODS["all-time"]} />
            </TabsContent>
          </Tabs>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default ListCapitalInflowsBlock
