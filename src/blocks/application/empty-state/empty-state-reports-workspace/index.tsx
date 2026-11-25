import { ChartColumnIcon, EyeIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyStateReportsWorkspaceBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Card className="w-full max-w-4xl gap-0 py-0">
        <div className="grid min-h-[27rem] md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-12 md:px-14">
            <Empty className="items-start gap-0 border-0 p-0 text-left">
              <EmptyMedia variant="icon">
                <ChartColumnIcon />
              </EmptyMedia>

              <EmptyHeader className="mt-4 items-start gap-1.5">
                <EmptyTitle className="text-2xl font-semibold tracking-tight">
                  No reports for this workspace
                </EmptyTitle>
                <EmptyDescription>
                  Create your first report to turn tracked companies into one
                  clear view your team can share.
                </EmptyDescription>
              </EmptyHeader>

              <EmptyContent className="mt-6 max-w-none flex-row justify-start gap-2">
                <Button>
                  <PlusIcon data-icon="inline-start" />
                  Add report
                </Button>
                <Button variant="outline">
                  <EyeIcon data-icon="inline-start" />
                  View sample
                </Button>
              </EmptyContent>
            </Empty>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-x-0 top-20 bottom-0 rounded-tl-xl border-t border-l border-border bg-background" />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default EmptyStateReportsWorkspaceBlock
