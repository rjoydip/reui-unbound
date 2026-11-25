import { WorkflowIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconStack } from "@/components/kit/icon-stack"

export function EmptyStateSectionAddPromptBlock() {
  return (
    <div className="bg-background min-h-svh px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              Routing Signals
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Shape incoming work before it reaches the roadmap.
            </p>
          </div>
          <Button size="sm">Add signal</Button>
        </div>

        <Card className="bg-muted/40 mt-4 min-h-[330px] py-0">
          <CardContent className="flex min-h-[330px] items-center justify-center p-6">
            <Empty className="border-0">
              <EmptyMedia>
                <IconStack aria-hidden="true">
                  <WorkflowIcon className="size-6" />
                </IconStack>
              </EmptyMedia>
              <EmptyHeader>
                <EmptyTitle className="text-base font-semibold">
                  Create signals to route new work
                </EmptyTitle>
                <EmptyDescription>
                  Define signals so every intake item starts with context.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmptyStateSectionAddPromptBlock
