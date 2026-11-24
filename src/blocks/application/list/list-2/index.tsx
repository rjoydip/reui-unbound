import { useState, type ReactNode } from "react"

import { Frame, FramePanel } from "@/components/kit/frame"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "cn"

type Fund = {
  name: string
  amount: string
  tileClassName: string
  mark: ReactNode
}

function TetherMark() {
  return <span className="text-[15px] leading-none font-bold text-white">₮</span>
}

function BinanceMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden="true">
      <path d="M12 2.2 15.1 5.3 12 8.4 8.9 5.3 12 2.2Zm-6.7 6.6 3.1 3.2-3.1 3.1L2.2 12l3.1-3.2Zm13.4 0L21.8 12l-3.1 3.1L15.6 12l3.1-3.2ZM12 8.4l3.6 3.6L12 15.6 8.4 12 12 8.4Zm0 7.9 3.1 3.1L12 22l-3.1-2.6L12 16.3Z" />
    </svg>
  )
}

function MetaMaskMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M3.5 4 10.6 8.9l-1.2 4.4L5.6 15 3.5 4Zm17 0-7.1 4.9 1.2 4.4 3.8 1.7L20.5 4ZM8.7 14.8l3.3 4.4 3.3-4.4-3.3 1.3-3.3-1.3Z" />
    </svg>
  )
}

function CoinbaseMark() {
  return (
    <span className="block size-4 rounded-full border-[3px] border-white" />
  )
}

function AvalancheMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden="true">
      <path d="M12 3.5 3 20.5h5.6l3.4-7 3.4 7H21L12 3.5Z" />
    </svg>
  )
}

function PolygonMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden="true">
      <path d="M16.4 9.1 12 6.5 7.6 9.1v5.2L12 17l4.4-2.7V9.1Zm-6.9 1.2L12 8.7l2.5 1.6v3.4L12 15.3l-2.5-1.6v-3.4Z" />
    </svg>
  )
}

const FUNDS: Fund[] = [
  {
    name: "Tether Reserve",
    amount: "$7,928,400",
    tileClassName: "bg-[#26a17b]",
    mark: <TetherMark />,
  },
  {
    name: "Binance Ventures",
    amount: "$3,214,900",
    tileClassName: "bg-[#f3ba2f] text-black",
    mark: <BinanceMark />,
  },
  {
    name: "MetaMask Treasury",
    amount: "$1,246,300",
    tileClassName: "bg-[#f6851b]",
    mark: <MetaMaskMark />,
  },
  {
    name: "Coinbase Capital",
    amount: "$982,750",
    tileClassName: "bg-[#0052ff]",
    mark: <CoinbaseMark />,
  },
  {
    name: "Avalanche Fund",
    amount: "$744,120",
    tileClassName: "bg-[#e84142]",
    mark: <AvalancheMark />,
  },
  {
    name: "Polygon Ventures",
    amount: "$518,940",
    tileClassName: "bg-[#8247e5]",
    mark: <PolygonMark />,
  },
]

const RANGES = { "top-3": 3, "top-5": 5, all: FUNDS.length } as const

type RangeValue = keyof typeof RANGES

export function List2Block() {
  const [range, setRange] = useState<RangeValue>("top-3")
  const visibleFunds = FUNDS.slice(0, RANGES[range])

  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[450px]">
        <FramePanel className="p-0!">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="text-sm font-semibold">Capital Inflows</span>

            <Select
              value={range}
              onValueChange={(value) => setRange(value as RangeValue)}
            >
              <SelectTrigger
                aria-label="Filter funds by range"
                className="min-w-[7.5rem]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="top-3">Top 3 Funds</SelectItem>
                <SelectItem value="top-5">Top 5 Funds</SelectItem>
                <SelectItem value="all">All funds</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="divide-y">
            {visibleFunds.map((fund) => (
              <div key={fund.name} className="flex items-center gap-3 px-4 py-3">
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-lg",
                    fund.tileClassName
                  )}
                  aria-hidden="true"
                >
                  {fund.mark}
                </span>

                <span className="flex-1 truncate text-sm font-medium">
                  {fund.name}
                </span>

                <span className="flex flex-col items-end gap-0.5">
                  <span className="text-muted-foreground text-[11px] leading-none">
                    Capital In
                  </span>
                  <span className="text-sm leading-tight font-semibold tabular-nums">
                    {fund.amount}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default List2Block
