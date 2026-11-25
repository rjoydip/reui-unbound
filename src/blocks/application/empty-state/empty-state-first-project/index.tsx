import {
  ChartNoAxesColumnIcon,
  ChevronRightIcon,
  GaugeIcon,
  LayoutTemplateIcon,
  PlusIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item"

const quickStarts = [
  { title: "Task board", icon: ChartNoAxesColumnIcon },
  { title: "Sprint tracker", icon: GaugeIcon },
]

function ProjectsEmptyIllustration() {
  return (
    <div className="relative h-24 w-36 text-border" aria-hidden="true">
      <svg viewBox="0 0 144 96" fill="none" className="size-full">
        <defs>
          <pattern
            id="projects-empty-dots"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="144"
          height="96"
          fill="url(#projects-empty-dots)"
          className="text-foreground/30 opacity-60"
        />
        <g stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
          <path d="M82 16 104 27 82 38 60 27Z" opacity="0.5" />
          <path d="M60 27v22l22 11V38Z" opacity="0.5" />
          <path d="M104 27v22L82 60V38Z" opacity="0.5" />
          <path d="M104 38 126 49 104 60 82 49Z" opacity="0.35" />
          <path d="M82 49v22l22 11V60Z" opacity="0.35" />
          <path d="M126 49v22l-22 11V60Z" opacity="0.35" />
          <path d="M60 38 82 49 60 60 38 49Z" />
          <path d="M38 49v22l22 11V60Z" />
          <path d="M82 49v22L60 82V60Z" />
        </g>
      </svg>
    </div>
  )
}

export function EmptyStateFirstProjectBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Empty className="max-w-[28rem] flex-none gap-0 border-0 p-0">
        <ProjectsEmptyIllustration />

        <EmptyHeader className="mt-7 w-full max-w-sm gap-2">
          <EmptyTitle className="text-2xl font-semibold tracking-tight">
            No projects to show
          </EmptyTitle>
          <EmptyDescription>
            Start a project from scratch or pick a template to launch your
            first workspace and begin tracking tasks, goals, and progress.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="mt-6 max-w-none flex-row justify-center gap-2">
          <Button>
            <PlusIcon data-icon="inline-start" />
            New project
          </Button>
          <Button variant="outline">
            <LayoutTemplateIcon data-icon="inline-start" />
            Explore templates
          </Button>
        </EmptyContent>

        <div className="mt-32 w-full">
          <p className="text-center text-sm text-muted-foreground">
            Quick starts
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {quickStarts.map((start) => (
              <Item
                key={start.title}
                asChild
                variant="outline"
                size="xs"
                className="hover:bg-muted"
              >
                <a href="#">
                  <ItemMedia variant="icon" className="text-muted-foreground">
                    <start.icon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{start.title}</ItemTitle>
                  </ItemContent>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </a>
              </Item>
            ))}
          </div>
        </div>
      </Empty>
    </div>
  )
}

export default EmptyStateFirstProjectBlock
