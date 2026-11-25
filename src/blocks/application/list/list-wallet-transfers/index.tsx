import { useState, type ReactNode } from "react"
import { ExternalLinkIcon } from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "cn"

type Amount = { value: string; tone: "credit" | "debit" }

type Transfer = {
  id: string
  title: string
  failed?: boolean
  detail: string
  amounts: Amount[]
  mark: ReactNode
}

function AvalancheMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white" aria-hidden="true">
      <path d="M12 3.5 3 20.5h5.6l3.4-7 3.4 7H21L12 3.5Z" />
    </svg>
  )
}

function BitcoinMark() {
  return (
    <span className="text-[17px] leading-none font-bold text-[#f7931a]">₿</span>
  )
}

function UniswapMark() {
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-[#ff007a] text-xs font-bold text-white">
      U
    </span>
  )
}

function EthereumMark() {
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-[#627eea] text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
        <path d="M12 2 5.5 12l6.5 3.6L18.5 12 12 2Zm0 15.1L5.5 13.6 12 22l6.5-8.4-6.5 3.5Z" />
      </svg>
    </span>
  )
}

const WEEKLY: Transfer[] = [
  {
    id: "received",
    title: "Received",
    detail: "From: 0x8a44...72Da",
    amounts: [{ value: "+ 8.4910 AVAX", tone: "credit" }],
    mark: <AvalancheMark />,
  },
  {
    id: "sent",
    title: "Sent",
    detail: "To: 0x41c9...0B33",
    amounts: [{ value: "- 0.342 BTC", tone: "debit" }],
    mark: <BitcoinMark />,
  },
  {
    id: "swapped",
    title: "Swapped",
    detail: "On: Uniswap",
    amounts: [
      { value: "+ 42.8 MATIC", tone: "credit" },
      { value: "- $280.00 USDT", tone: "debit" },
    ],
    mark: <UniswapMark />,
  },
  {
    id: "failed",
    title: "Failed",
    failed: true,
    detail: "To: 0x19e4...B7c2",
    amounts: [{ value: "- 1.24 ETH", tone: "debit" }],
    mark: <EthereumMark />,
  },
]

const ALL_TIME: Transfer[] = [
  {
    id: "received-all",
    title: "Received",
    detail: "From: 0x984e...A020",
    amounts: [{ value: "+ 68.4020 AVAX", tone: "credit" }],
    mark: <AvalancheMark />,
  },
  {
    id: "sent-all",
    title: "Sent",
    detail: "To: 0x517a...D11a",
    amounts: [{ value: "- 3.214 BTC", tone: "debit" }],
    mark: <BitcoinMark />,
  },
  {
    id: "swapped-all",
    title: "Swapped",
    detail: "On: Uniswap",
    amounts: [
      { value: "+ 392.4 MATIC", tone: "credit" },
      { value: "- $2,400.00 USDT", tone: "debit" },
    ],
    mark: <UniswapMark />,
  },
  {
    id: "failed-all",
    title: "Failed",
    failed: true,
    detail: "To: 0xC02a...4417",
    amounts: [{ value: "- 6.12 ETH", tone: "debit" }],
    mark: <EthereumMark />,
  },
]

const TONE_CLASS = {
  credit: "text-emerald-600 dark:text-emerald-400",
  debit: "text-amber-600 dark:text-amber-400",
} as const

function TransferRows({ transfers }: { transfers: Transfer[] }) {
  return (
    <div className="divide-y divide-dashed">
      {transfers.map((transfer) => (
        <Item
          key={transfer.id}
          className="rounded-none border-transparent px-4 py-3"
        >
          <ItemMedia className="border-border/60 size-10 rounded-xl border bg-[#0d0d10]">
            {transfer.mark}
          </ItemMedia>

          <ItemContent className="gap-0.5">
            <ItemTitle
              className={cn(
                "text-sm font-medium",
                transfer.failed && "text-red-600 dark:text-red-400"
              )}
            >
              {transfer.title}
            </ItemTitle>
            <ItemDescription className="text-xs">
              {transfer.detail}
            </ItemDescription>
          </ItemContent>

          <ItemActions className="flex-col items-end gap-0.5">
            {transfer.amounts.map((amount) => (
              <span
                key={amount.value}
                className={cn(
                  "text-sm font-medium tabular-nums",
                  TONE_CLASS[amount.tone]
                )}
              >
                {amount.value}
              </span>
            ))}
          </ItemActions>
        </Item>
      ))}
    </div>
  )
}

export function ListWalletTransfersBlock() {
  const [period, setPeriod] = useState<"weekly" | "all-time">("weekly")
  const [historyOpen, setHistoryOpen] = useState(false)

  return (
    <div className="bg-background flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-[445px]">
        <FramePanel className="p-0!">
          <Tabs
            value={period}
            onValueChange={(value) => setPeriod(value as typeof period)}
            className="gap-0"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm font-semibold">Transactions</span>
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="all-time">All Time</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="weekly">
              <TransferRows transfers={WEEKLY} />
            </TabsContent>
            <TabsContent value="all-time">
              <TransferRows transfers={ALL_TIME} />
            </TabsContent>
          </Tabs>
        </FramePanel>

        <FramePanel className="p-2!">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setHistoryOpen(true)}
          >
            <ExternalLinkIcon data-icon="inline-start" aria-hidden="true" />
            View All
          </Button>
        </FramePanel>
      </Frame>

      <Dialog open={historyOpen} onOpenChange={setHistoryOpen}>
        <DialogContent className="max-h-[80svh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>All transactions</DialogTitle>
            <DialogDescription>
              Every on-chain transfer across your connected wallets.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 border-y">
            <TransferRows transfers={[...WEEKLY, ...ALL_TIME]} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ListWalletTransfersBlock
