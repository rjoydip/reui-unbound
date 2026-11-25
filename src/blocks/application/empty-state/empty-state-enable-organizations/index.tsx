import { Building2Icon, InfoIcon } from "lucide-react"

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconStack } from "@/components/kit/icon-stack"
import { Separator } from "@/components/ui/separator"

export function EmptyStateEnableOrganizationsBlock() {
  return (
    <div className="bg-background min-h-svh px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Organizations
        </h1>
        <Separator className="mt-4" />

        <Frame stacked spacing="sm" className="mt-6">
          <FramePanel className="flex min-h-[330px] items-center justify-center py-10">
            <Empty className="border-0">
              <EmptyMedia>
                <IconStack aria-hidden="true">
                  <Building2Icon className="size-6" />
                </IconStack>
              </EmptyMedia>
              <EmptyHeader className="max-w-[320px]">
                <EmptyTitle className="text-base font-semibold">
                  Enable organizations
                </EmptyTitle>
                <EmptyDescription>
                  Enable your users to create organizations, manage team
                  members, and control access with role-based permissions.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button>Enable organizations</Button>
              </EmptyContent>
            </Empty>
          </FramePanel>

          <FramePanel fit className="py-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="text-muted-foreground inline-flex w-fit items-center gap-1.5 text-xs transition-colors hover:text-foreground"
                  >
                    <InfoIcon className="size-3.5" />
                    Learn more about{" "}
                    <span className="text-foreground font-medium">
                      Organizations
                    </span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  Organizations let you manage team members and permissions
                  across multiple teams.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}

export default EmptyStateEnableOrganizationsBlock
