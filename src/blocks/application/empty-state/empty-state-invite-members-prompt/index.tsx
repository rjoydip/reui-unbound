import { CopyIcon, UserRoundPlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconStack } from "@/components/kit/icon-stack"

export function EmptyStateInviteMembersPromptBlock() {
  return (
    <div className="bg-background flex min-h-svh w-full items-center justify-center px-4 py-16">
      <Empty className="min-h-[820px] max-w-3xl justify-center border-0">
        <EmptyMedia>
          <IconStack aria-hidden="true">
            <UserRoundPlusIcon className="size-6" />
          </IconStack>
        </EmptyMedia>
        <EmptyHeader className="max-w-[380px] gap-3">
          <EmptyTitle className="font-heading text-3xl font-semibold tracking-tight">
            Invite the first people in
          </EmptyTitle>
          <EmptyDescription className="text-[15px]/relaxed">
            Bring owners, editors, and reviewers into the workspace with a fast
            email invite or one secure share link.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="mt-1 flex-row justify-center">
          <Button>
            <UserRoundPlusIcon />
            Invite members
          </Button>
          <Button variant="outline">
            <CopyIcon />
            Copy invite link
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export default EmptyStateInviteMembersPromptBlock
