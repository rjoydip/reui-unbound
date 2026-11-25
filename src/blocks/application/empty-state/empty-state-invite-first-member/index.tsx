import { useState } from "react"
import { CheckIcon, CopyIcon, UserPlusIcon, UserRoundPlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

const INVITE_LINK = "https://app.reui.io/invite/team-workspace"

export function EmptyStateInviteFirstMemberBlock() {
  const [copied, setCopied] = useState(false)

  const copyInviteLink = () => {
    void navigator.clipboard
      ?.writeText(INVITE_LINK)
      .then(() => setCopied(true))
      .catch(() => setCopied(false))
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-6">
      <Empty className="max-w-md flex-none gap-0 border-0 p-0">
        <div className="flex size-14 items-center justify-center rounded-full border border-border bg-card shadow-xs">
          <UserRoundPlusIcon className="size-5" />
        </div>

        <EmptyHeader className="mt-7 w-full max-w-[24rem] gap-2">
          <EmptyTitle className="text-2xl font-semibold tracking-tight">
            Invite the first people in
          </EmptyTitle>
          <EmptyDescription>
            Bring owners, editors, and reviewers into the workspace with a fast
            email invite or one secure share link.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="mt-6 max-w-none flex-row justify-center gap-2">
          <Button>
            <UserPlusIcon data-icon="inline-start" />
            Invite members
          </Button>
          <Button variant="outline" onClick={copyInviteLink}>
            {copied ? (
              <CheckIcon data-icon="inline-start" />
            ) : (
              <CopyIcon data-icon="inline-start" />
            )}
            {copied ? "Link copied" : "Copy invite link"}
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}

export default EmptyStateInviteFirstMemberBlock
