import { TagIcon, TargetIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconStack } from "@/components/kit/icon-stack"

const PROJECTS_SETTINGS_TABS = [
  {
    value: "project-states",
    label: "Project states",
    title: "Set up project states",
    description:
      "Create a shared stage system so every project follows the same progress flow.",
    Icon: TargetIcon,
  },
  {
    value: "project-labels",
    label: "Project labels",
    title: "Set up project labels",
    description:
      "Add a simple label system to keep project streams easier to sort and review.",
    Icon: TagIcon,
  },
]

export function EmptyState8Block() {
  return (
    <div className="bg-background min-h-svh px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage the shared project fields your workspace uses to stay
          organized.
        </p>

        <Tabs defaultValue="project-states" className="mt-6">
          <TabsList variant="line" className="w-full justify-start gap-5 border-b">
            {PROJECTS_SETTINGS_TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-none px-0 pb-2"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {PROJECTS_SETTINGS_TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Empty className="min-h-[420px] items-start border-0 px-0 pt-12 text-left md:pl-52">
                <EmptyHeader className="max-w-[280px] items-start">
                  <EmptyMedia className="mb-1">
                    <IconStack aria-hidden="true">
                      <tab.Icon className="size-6" />
                    </IconStack>
                  </EmptyMedia>
                  <EmptyTitle className="text-base font-semibold">
                    {tab.title}
                  </EmptyTitle>
                  <EmptyDescription>{tab.description}</EmptyDescription>
                </EmptyHeader>
                <EmptyContent className="items-start">
                  <Button size="sm">Enable</Button>
                </EmptyContent>
              </Empty>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default EmptyState8Block
