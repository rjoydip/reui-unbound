import {
  CalendarIcon,
  CircleDollarSignIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react"

import { Frame, FramePanel } from "@/components/kit/frame"

const CARDS = [
  { label: "MRR", total: "$210.5k", icon: CircleDollarSignIcon },
  { label: "TTM Gross Revenue", total: "$2.4M", icon: TrendingUpIcon },
  { label: "Customer Base", total: "150-500", icon: UsersIcon },
  { label: "Annual Growth Rate", total: "45%", icon: TrendingUpIcon },
  { label: "Avg. Order Value", total: "$320", icon: ShoppingCartIcon },
  { label: "Date Founded", total: "Nov 2018", icon: CalendarIcon },
]

export function CardCompanySnapshotBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Frame className="w-full max-w-xl">
        <div className="grid gap-(--frame-gap) sm:grid-cols-3">
          {CARDS.map(({ label, total, icon: Icon }) => (
            <FramePanel key={label} className="p-4">
              <div className="text-sm text-muted-foreground">{label}</div>
              <div className="mt-4 flex items-center gap-2">
                <Icon className="size-4 text-green-600 dark:text-green-500" />
                <span className="text-[15px] font-semibold tracking-tight">
                  {total}
                </span>
              </div>
            </FramePanel>
          ))}
        </div>
      </Frame>
    </div>
  )
}

export default CardCompanySnapshotBlock
