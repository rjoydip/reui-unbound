import {
  BarChart3Icon,
  BoxIcon,
  CopyIcon,
  EllipsisIcon,
  FileTextIcon,
  LayersIcon,
  MapPinIcon,
  PencilIcon,
  RefreshCwIcon,
  RotateCwIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

const REPORTS = [
  {
    date: "Aug 22, 2025",
    title: "Monthly Revenue Insights and Market Performance",
    description:
      "Analyze revenue changes and growth patterns across multiple regions. Get detailed performance metrics to refine strategies and identify opportunities.",
    tone:
      "border-sky-200 bg-sky-100 text-sky-950 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-50",
    tags: [
      { label: "Finances", icon: BarChart3Icon },
      { label: "Insights", icon: LayersIcon },
      { label: "Report", icon: FileTextIcon },
    ],
  },
  {
    date: "Jul 10, 2025",
    title: "User Engagement and Retention Analysis Report",
    description:
      "Review user activity, retention rates, and engagement trends to optimize onboarding and feature adoption for a better customer experience.",
    tone:
      "border-emerald-200 bg-emerald-100 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-50",
    tags: [
      { label: "Users", icon: UsersIcon },
      { label: "Retention", icon: RotateCwIcon },
      { label: "Growth", icon: TrendingUpIcon },
    ],
  },
  {
    date: "Jun 05, 2025",
    title: "Product Development Roadmap and Feature Update",
    description:
      "Stay informed on upcoming features, release timelines, and progress updates to align development goals with market needs and user demands.",
    tone:
      "border-slate-300 bg-slate-200 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50",
    tags: [
      { label: "Product", icon: BoxIcon },
      { label: "Roadmap", icon: MapPinIcon },
      { label: "Update", icon: RefreshCwIcon },
    ],
  },
]

export function Card10Block() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REPORTS.map((report) => (
          <div
            key={report.date}
            className={`flex flex-col rounded-xl border p-1.5 ${report.tone}`}
          >
            <div className="flex items-center justify-between gap-2 px-1 py-1">
              <span className="text-[12px] font-semibold uppercase tracking-wide">
                {report.date}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    aria-label={`Actions for ${report.title}`}
                    className="hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    <EllipsisIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem>
                    <PencilIcon />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-1 flex-col rounded-lg border bg-card p-3 text-card-foreground shadow-xs">
              <a
                href="#"
                className="text-[14px] font-medium leading-snug outline-none hover:underline focus-visible:underline"
              >
                {report.title}
              </a>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {report.description}
              </p>
              <Separator className="my-3" />
              <div className="mt-auto flex flex-wrap items-center gap-1.5">
                {report.tags.map((tag) => {
                  const Icon = tag.icon
                  return (
                    <Badge
                      key={tag.label}
                      variant="outline"
                      size="sm"
                      radius="full"
                      className="bg-background/60"
                    >
                      <Icon />
                      {tag.label}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card10Block
