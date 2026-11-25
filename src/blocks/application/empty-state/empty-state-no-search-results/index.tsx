import { PlayIcon, SlidersHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

const suggestions = [
  '"meeting transcript"',
  '"#launch-plan"',
  '"handoff notes"',
]

function SearchEmptyIllustration() {
  return (
    <div className="relative h-[6.25rem] w-56" aria-hidden="true">
      <div className="relative z-10 flex h-16 items-center gap-3 rounded-lg border border-border bg-card px-4 shadow-xs">
        <div className="size-8 shrink-0 rounded-md bg-muted" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-2 w-4/5 rounded-full bg-muted" />
          <div className="h-2 w-3/5 rounded-full bg-muted" />
        </div>
      </div>
      <div className="absolute inset-x-4 top-[4.5rem] h-6 rounded-b-lg border border-t-0 border-border/60 bg-muted/40" />
      <div className="absolute inset-x-8 top-[5.5rem] h-6 rounded-b-lg border border-t-0 border-border/40 bg-muted/20" />
    </div>
  )
}

export function EmptyStateNoSearchResultsBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Empty className="max-w-md flex-none gap-0 border-0 p-0">
        <SearchEmptyIllustration />

        <EmptyHeader className="mt-7 w-full max-w-sm gap-2">
          <EmptyTitle className="text-2xl font-semibold tracking-tight">
            No search matches yet
          </EmptyTitle>
          <EmptyDescription>
            Broaden your query or browse the library to explore files, notes,
            and tagged moments across the workspace.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="mt-6 max-w-none">
          <ButtonGroup>
            <Button>
              <PlayIcon data-icon="inline-start" />
              Browse library
            </Button>
            <Button variant="outline">
              <SlidersHorizontalIcon data-icon="inline-start" />
              Refine filters
            </Button>
          </ButtonGroup>
        </EmptyContent>

        <div className="mt-32 w-full text-left">
          <p className="text-sm text-muted-foreground">Try these searches</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                className="rounded-full px-3"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </Empty>
    </div>
  )
}

export default EmptyStateNoSearchResultsBlock
