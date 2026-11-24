import { LayersIcon, SearchIcon, WandSparklesIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Frame, FramePanel } from "@/components/kit/frame"

export function EmptyState5Block() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Frame className="w-full max-w-4xl">
        <FramePanel className="p-0">
          <div className="grid min-h-[28rem] md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 md:px-14">
              <Empty className="items-start gap-0 border-0 p-0 text-left">
                <EmptyMedia variant="icon">
                  <LayersIcon />
                </EmptyMedia>

                <EmptyHeader className="mt-4 items-start gap-1.5">
                  <EmptyTitle className="text-2xl font-semibold tracking-tight">
                    No Brief Is Ready Yet
                  </EmptyTitle>
                  <EmptyDescription>
                    Pull open signals, notes, and decisions into one clear brief
                    before the review starts.
                  </EmptyDescription>
                </EmptyHeader>

                <EmptyContent className="mt-6 max-w-none flex-row justify-start gap-2">
                  <Button>
                    <WandSparklesIcon data-icon="inline-start" />
                    Draft Brief
                  </Button>
                  <Button variant="outline">
                    <SearchIcon data-icon="inline-start" />
                    Browse Signals
                  </Button>
                </EmptyContent>
              </Empty>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-x-0 top-20 bottom-0 rounded-tl-xl border-t border-l border-border bg-background" />
            </div>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}

export default EmptyState5Block
