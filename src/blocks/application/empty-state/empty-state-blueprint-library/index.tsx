import { LayoutTemplateIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconStack } from "@/components/kit/icon-stack"

export function EmptyStateBlueprintLibraryBlock() {
  return (
    <div className="bg-background min-h-svh px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Blueprint Library
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Turn repeatable launches, onboarding flows, and reports into reusable
          project blueprints.
        </p>

        <Card className="mt-4 py-0">
          <CardContent className="p-0">
            <Empty className="flex-col items-start gap-6 border-0 p-8 text-left md:flex-row md:items-center md:gap-8">
              <EmptyMedia className="mb-0 shrink-0">
                <IconStack aria-hidden="true">
                  <LayoutTemplateIcon className="size-6" />
                </IconStack>
              </EmptyMedia>
              <div className="flex flex-col items-start gap-2">
                <EmptyTitle className="text-base font-semibold">
                  No blueprints yet
                </EmptyTitle>
                <EmptyDescription className="max-w-[300px]">
                  Create a reusable starting point so every new project starts
                  structured.
                </EmptyDescription>
                <EmptyContent className="mt-2 items-start flex-row">
                  <Button size="sm">Create blueprint</Button>
                  <Button size="sm" variant="secondary">
                    Import blueprint
                  </Button>
                </EmptyContent>
              </div>
            </Empty>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmptyStateBlueprintLibraryBlock
