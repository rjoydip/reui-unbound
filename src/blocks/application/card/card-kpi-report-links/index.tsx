import {
  ActivityIcon,
  ArrowRightIcon,
  BarChart3Icon,
  DatabaseIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react"

const CARDS = [
  {
    value: "$28.5k",
    trend: "23.08%",
    trendLabel: "Annual trend",
    report: "Full Sales Report",
    icon: DatabaseIcon,
    panel: "bg-linear-to-br from-[#1aa45c] to-[#0b7a3c]",
    iconClassName: "text-emerald-700",
  },
  {
    value: "2.3k",
    trend: "12%",
    trendLabel: "More Signups",
    report: "Full Customer Report",
    icon: UsersIcon,
    panel: "bg-linear-to-br from-[#5b42f5] to-[#4326e0]",
    iconClassName: "text-indigo-700",
  },
  {
    value: "84%",
    trend: "18.4%",
    trendLabel: "Conversion Lift",
    report: "Full Growth Report",
    icon: BarChart3Icon,
    panel: "bg-linear-to-br from-[#f51545] to-[#dc0a38]",
    iconClassName: "text-rose-700",
  },
  {
    value: "1.2k",
    trend: "9.7%",
    trendLabel: "Active Runs",
    report: "Full Activity Report",
    icon: ActivityIcon,
    panel: "bg-linear-to-br from-[#d400e8] to-[#aa00d0]",
    iconClassName: "text-fuchsia-700",
  },
]

function GridMesh() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
  )
}

export function CardKpiReportLinksBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.report}
              className="overflow-hidden rounded-xl bg-black shadow-sm"
            >
              <div
                className={`relative flex h-54 flex-col justify-between p-3 text-white ${card.panel}`}
              >
                <GridMesh />
                <span className="relative flex size-11 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Icon className={`size-5 ${card.iconClassName}`} />
                </span>
                <div className="relative">
                  <a
                    href="#"
                    className="block text-[28px] font-semibold leading-none tracking-tight outline-none focus-visible:underline"
                  >
                    {card.value}
                  </a>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md bg-black/25 px-1.5 py-0.5 text-[11px] font-medium">
                      <TrendingUpIcon className="size-3" />
                      {card.trend}
                    </span>
                    <span className="text-[11px] text-white/90">
                      {card.trendLabel}
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-between px-3 py-2.5 text-[13px] font-medium text-white outline-none transition-colors hover:bg-white/10 focus-visible:bg-white/10"
              >
                {card.report}
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardKpiReportLinksBlock
