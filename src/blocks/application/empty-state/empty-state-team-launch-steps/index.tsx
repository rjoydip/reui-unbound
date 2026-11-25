import {
  ChartNoAxesColumnIcon,
  FileTextIcon,
  UploadIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react"

import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"

const launchSteps = [
  {
    title: "Link Deliverables",
    description: "Keep milestones, owners, and blockers in view.",
    icon: ChartNoAxesColumnIcon,
    className:
      "bg-fuchsia-50 hover:bg-fuchsia-100 dark:bg-fuchsia-500/10 dark:hover:bg-fuchsia-500/15",
    iconClassName: "text-fuchsia-600 dark:text-fuchsia-400",
  },
  {
    title: "Open Brief",
    description: "Capture context, decisions, and handoff notes.",
    icon: FileTextIcon,
    className:
      "bg-sky-50 hover:bg-sky-100 dark:bg-sky-500/10 dark:hover:bg-sky-500/15",
    iconClassName: "text-sky-600 dark:text-sky-400",
  },
  {
    title: "Start Check-In",
    description: "Gather the team when a thread needs answers.",
    icon: UsersIcon,
    className:
      "bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/15",
    iconClassName: "text-emerald-600 dark:text-emerald-400",
  },
]

export function EmptyStateTeamLaunchStepsBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Empty className="max-w-[26rem] flex-none gap-0 border-0 p-0">
        <EmptyHeader className="gap-2">
          <EmptyTitle className="text-2xl font-semibold tracking-tight">
            Launch the Team Workspace
          </EmptyTitle>
          <EmptyDescription>
            Bring the core team together and sync the roster, so plans and
            follow-ups stay visible.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="mt-6 max-w-none gap-1.5">
          <Button variant="outline" className="w-full">
            <UserPlusIcon data-icon="inline-start" />
            Add Core Team
          </Button>
          <Button variant="outline" className="w-full">
            <UploadIcon data-icon="inline-start" />
            Sync Directory
          </Button>
        </EmptyContent>

        <div className="mt-6 flex w-full flex-col gap-2">
          {launchSteps.map((step) => (
            <Item key={step.title} asChild className={step.className}>
              <a href="#" className="items-start gap-3 px-3.5 py-2 text-left">
                <step.icon
                  className={cn("mt-0.5 size-4 shrink-0", step.iconClassName)}
                />
                <ItemContent>
                  <ItemTitle>{step.title}</ItemTitle>
                  <ItemDescription>{step.description}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
          ))}
        </div>
      </Empty>
    </div>
  )
}

export default EmptyStateTeamLaunchStepsBlock
