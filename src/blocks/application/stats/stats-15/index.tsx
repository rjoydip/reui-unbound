import { ActivityIcon, ArrowRightIcon, TrendingUpIcon, UsersIcon } from "lucide-react"

const CARDS = [
  { value: "27.3%", title: "NPS Improvement", description: "Our new onboarding flow increased Net Promoter Score by 27.3% in Q2.", cta: "Read full story", tone: "bg-blue-600", icon: ActivityIcon },
  { value: "8,200", title: "Active Users", description: "Highest monthly active users since launch. Engagement up 12% MoM.", cta: "See user insights", tone: "bg-emerald-700", icon: UsersIcon },
  { value: "$1.4M", title: "ARR Growth", description: "Annual recurring revenue grew by $1.4M in the last quarter.", cta: "View ARR breakdown", tone: "bg-fuchsia-700", icon: TrendingUpIcon },
]

export function Stats15Block() {
  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className="overflow-hidden rounded-xl shadow-sm">
            <div className={`${card.tone} p-4 text-white`}>
              <card.icon className="size-5 text-white/80" />
              <p className="mt-5 text-2xl font-semibold">{card.value}</p>
              <p className="mt-4 text-sm font-medium">{card.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/70">{card.description}</p>
            </div>
            <button type="button" className="bg-neutral-950 flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-white">
              {card.cta}
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats15Block
