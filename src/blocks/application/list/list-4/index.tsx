import { useState, type ReactNode } from "react"
import { SquarePenIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PortfolioAsset = {
  name: string
  price: string
  trend: string
  direction: "up" | "down"
  value: string
  holdings: string
  mark: ReactNode
}

function BitcoinMark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-[#f7931a] text-[17px] leading-none font-bold text-white">
      ₿
    </span>
  )
}

function TetherMark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-[#26a17b] text-base leading-none font-bold text-white">
      ₮
    </span>
  )
}

function AlgorandMark() {
  return (
    <span className="bg-background text-foreground flex size-8 items-center justify-center rounded-full border">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
        <path d="M6.5 18.5 12 5l5.5 13.5M8.6 13h6.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function BinanceMark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-black text-[#f3ba2f]">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M12 2.2 15.1 5.3 12 8.4 8.9 5.3 12 2.2Zm-6.7 6.6 3.1 3.2-3.1 3.1L2.2 12l3.1-3.2Zm13.4 0L21.8 12l-3.1 3.1L15.6 12l3.1-3.2ZM12 8.4l3.6 3.6L12 15.6 8.4 12 12 8.4Zm0 7.9 3.1 3.1L12 22l-3.1-2.6L12 16.3Z" />
      </svg>
    </span>
  )
}

function EthereumMark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-full bg-[#627eea] text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M12 2 5.5 12l6.5 3.6L18.5 12 12 2Zm0 15.1L5.5 13.6 12 22l6.5-8.4-6.5 3.5Z" />
      </svg>
    </span>
  )
}

const PERIODS: Record<"weekly" | "all-time", PortfolioAsset[]> = {
  weekly: [
    {
      name: "Bitcoin",
      price: "$64,120",
      trend: "0.3%",
      direction: "down",
      value: "$3,334",
      holdings: "0.052 BTC",
      mark: <BitcoinMark />,
    },
    {
      name: "Tether",
      price: "$1.00",
      trend: "1.2%",
      direction: "up",
      value: "$590",
      holdings: "590 USDT",
      mark: <TetherMark />,
    },
    {
      name: "Algorand",
      price: "$0.18",
      trend: "2.9%",
      direction: "down",
      value: "$450",
      holdings: "2,500 ALGO",
      mark: <AlgorandMark />,
    },
    {
      name: "Binance",
      price: "$320.40",
      trend: "1.7%",
      direction: "up",
      value: "$1,345.68",
      holdings: "4.2 BNB",
      mark: <BinanceMark />,
    },
  ],
  "all-time": [
    {
      name: "Bitcoin",
      price: "$64,120",
      trend: "2.1%",
      direction: "up",
      value: "$3,426",
      holdings: "0.053 BTC",
      mark: <BitcoinMark />,
    },
    {
      name: "Tether",
      price: "$1.00",
      trend: "0.4%",
      direction: "up",
      value: "$590",
      holdings: "590 USDT",
      mark: <TetherMark />,
    },
    {
      name: "Algorand",
      price: "$0.18",
      trend: "4.2%",
      direction: "down",
      value: "$432",
      holdings: "2,400 ALGO",
      mark: <AlgorandMark />,
    },
    {
      name: "Binance",
      price: "$320.40",
      trend: "3.1%",
      direction: "up",
      value: "$1,377.72",
      holdings: "4.3 BNB",
      mark: <BinanceMark />,
    },
  ],
}

const ETHEREUM: PortfolioAsset = {
  name: "Ethereum",
  price: "$3,420.10",
  trend: "1.8%",
  direction: "up",
  value: "$1,026.03",
  holdings: "0.3 ETH",
  mark: <EthereumMark />,
}

function AssetRows({ assets }: { assets: PortfolioAsset[] }) {
  return (
    <div className="divide-y divide-dashed">
      {assets.map((asset) => {
        const TrendIcon =
          asset.direction === "up" ? TrendingUpIcon : TrendingDownIcon

        return (
          <Item key={asset.name} className="rounded-none border-transparent px-4 py-3">
            <ItemMedia>{asset.mark}</ItemMedia>
            <ItemContent className="gap-1">
              <ItemTitle className="text-sm font-medium">{asset.name}</ItemTitle>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs tabular-nums">
                  {asset.price}
                </span>
                <Badge
                  variant={
                    asset.direction === "up"
                      ? "success-light"
                      : "destructive-light"
                  }
                  size="sm"
                >
                  <TrendIcon aria-hidden="true" />
                  {asset.trend}
                </Badge>
              </div>
            </ItemContent>
            <ItemActions className="flex-col items-end gap-0.5">
              <span className="text-sm font-semibold tabular-nums">
                {asset.value}
              </span>
              <span className="text-muted-foreground text-xs tabular-nums">
                {asset.holdings}
              </span>
            </ItemActions>
          </Item>
        )
      })}
    </div>
  )
}

export function List4Block() {
  const [period, setPeriod] = useState<"weekly" | "all-time">("weekly")
  const [added, setAdded] = useState<PortfolioAsset[]>([])
  const [open, setOpen] = useState(false)
  const assets = [...PERIODS[period], ...added]

  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[390px]">
        <FramePanel className="p-0!">
          <Tabs
            value={period}
            onValueChange={(value) => setPeriod(value as typeof period)}
            className="gap-0"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm font-semibold">Portfolio Snapshot</span>
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="all-time">All Time</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="weekly">
              <AssetRows assets={assets} />
            </TabsContent>
            <TabsContent value="all-time">
              <AssetRows assets={assets} />
            </TabsContent>
          </Tabs>
        </FramePanel>

        <FramePanel className="p-2!">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setOpen(true)}
          >
            <SquarePenIcon data-icon="inline-start" aria-hidden="true" />
            Add Asset
          </Button>
        </FramePanel>
      </Frame>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Asset</DialogTitle>
            <DialogDescription>
              Ethereum will be added to this portfolio snapshot.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-3 rounded-lg border p-3">
            {ETHEREUM.mark}
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">Ethereum</span>
              <span className="text-muted-foreground text-xs">
                {ETHEREUM.price} · {ETHEREUM.trend} this week
              </span>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={() => {
                setAdded((current) =>
                  current.some((asset) => asset.name === ETHEREUM.name)
                    ? current
                    : [...current, ETHEREUM]
                )
                setOpen(false)
              }}
            >
              Add Asset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default List4Block
