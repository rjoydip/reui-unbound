import {
  BookOpenIcon,
  ChevronRightIcon,
  FileTextIcon,
  UploadIcon,
  WandSparklesIcon,
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

const guides = [
  { title: "How records work", icon: BookOpenIcon },
  { title: "CSV setup", icon: FileTextIcon },
]

function RecordsEmptyIllustration() {
  return (
    <div className="relative h-[6.25rem] w-52" aria-hidden="true">
      <div className="absolute inset-x-6 top-0 h-8 rounded-t-lg border border-b-0 border-border/60 bg-muted/40" />
      <div className="absolute inset-x-3 top-4 h-8 rounded-t-lg border border-b-0 border-border/70 bg-muted/60" />
      <div className="absolute inset-x-0 bottom-0 flex h-20 items-center gap-3 rounded-lg border border-border bg-card px-4 shadow-xs">
        <div className="size-8 shrink-0 rounded-md bg-muted" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-2 w-3/5 rounded-full bg-muted" />
          <div className="h-2 w-2/5 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  )
}

export function EmptyState1Block() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Empty className="max-w-[34rem] flex-none gap-0 border-0 p-0">
        <RecordsEmptyIllustration />

        <EmptyHeader className="mt-7 w-full max-w-sm gap-2">
          <EmptyTitle className="text-2xl font-semibold tracking-tight">
            Your record space is empty
          </EmptyTitle>
          <EmptyDescription>
            Connect a live source or upload a CSV to start organizing people,
            teams, and attributes in one place.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="mt-6 max-w-none flex-row justify-center gap-2">
          <Button>
            <WandSparklesIcon data-icon="inline-start" />
            Connect source
          </Button>
          <Button variant="outline">
            <UploadIcon data-icon="inline-start" />
            Upload CSV
          </Button>
        </EmptyContent>

        <div className="mt-32 w-full text-left">
          <p className="text-sm text-muted-foreground">Quick guides</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {guides.map((guide) => (
              <Item
                key={guide.title}
                asChild
                variant="outline"
                size="xs"
                className="hover:bg-muted"
              >
                <a href="#">
                  <ItemMedia variant="icon" className="text-muted-foreground">
                    <guide.icon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{guide.title}</ItemTitle>
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

export default EmptyState1Block
