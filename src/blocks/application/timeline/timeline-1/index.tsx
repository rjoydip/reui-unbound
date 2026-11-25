import { useState } from "react"
import { CalendarIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, LoaderCircleIcon, MessageSquareIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "cn"

const MILESTONES = [
  { title: "Contract Signed", owner: "Maya Brooks / Revenue Operations", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", state: "done" },
  { title: "Workspace Provisioning", owner: "Nina Patel / Implementation Lead", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80", state: "active" },
  { title: "Launch Readiness", owner: "Leah Stone / Account Executive", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80", state: "pending" },
]

export function Timeline1Block() {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[584px]">
        <h1 className="text-xl font-semibold">Activation Timeline</h1>
        <p className="text-muted-foreground mt-1 text-sm">Track onboarding milestones.</p>

        <div className="mt-6">
          {MILESTONES.map((milestone, index) => (
            <div key={milestone.title} className="flex gap-3">
              <div className="flex flex-col items-center">
                {milestone.state === "done" ? (
                  <span className="bg-foreground text-background flex size-6 items-center justify-center rounded-full"><CheckIcon className="size-3.5" /></span>
                ) : milestone.state === "active" ? (
                  <span className="border-foreground flex size-6 items-center justify-center rounded-full border-2"><LoaderCircleIcon className="size-3.5 animate-spin" /></span>
                ) : (
                  <span className="border-muted-foreground/40 size-6 rounded-full border-2" />
                )}
                {index < MILESTONES.length - 1 ? <span className="bg-border mt-1 w-px flex-1" /> : null}
              </div>

              <div className="min-w-0 flex-1 pb-5">
                <p className="text-sm font-semibold">{milestone.title}</p>
                {milestone.state === "active" ? (
                  <Collapsible open={open} onOpenChange={setOpen}>
                    <div className="bg-muted/30 mt-2 overflow-hidden rounded-lg border">
                      <CollapsibleTrigger className="flex w-full items-center gap-2 px-3 py-2 text-left">
                        <Avatar size="sm"><AvatarImage src={milestone.avatar} alt="" /><AvatarFallback>NP</AvatarFallback></Avatar>
                        <span className="text-muted-foreground text-sm">{milestone.owner}</span>
                        <ChevronDownIcon className={cn("text-muted-foreground ml-auto size-4 transition-transform", open && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="border-t p-3">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <Badge variant="focus-light" size="sm">Medium</Badge>
                            <Badge variant="warning-light" size="sm">● Pending</Badge>
                            <Badge variant="secondary" size="sm">Identity Setup</Badge>
                          </div>
                          <p className="mt-3 text-sm font-medium">Admin Group Mapping</p>
                          <p className="text-muted-foreground mt-1 text-sm">SCIM groups are being matched to launch roles before the first admin invites go out.</p>
                          <div className="mt-3 flex items-center gap-2 border-t pt-2.5">
                            <div className="flex -space-x-1.5">
                              {["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&dpr=2&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80"].map((src) => (
                                <Avatar key={src} size="sm" className="size-5 ring-2 ring-card"><AvatarImage src={src} alt="" /><AvatarFallback>AT</AvatarFallback></Avatar>
                              ))}
                              <span className="bg-muted text-muted-foreground flex size-5 items-center justify-center rounded-full text-[10px] ring-2 ring-card">+2</span>
                            </div>
                            <span className="text-muted-foreground ml-auto flex items-center gap-1 text-xs"><MessageSquareIcon className="size-3.5" />3</span>
                            <span className="text-muted-foreground flex items-center gap-1 text-xs"><CalendarIcon className="size-3.5" />Today</span>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ) : (
                  <button type="button" className="bg-muted/30 hover:bg-muted/50 mt-2 flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left">
                    <Avatar size="sm"><AvatarImage src={milestone.avatar} alt="" /><AvatarFallback>MS</AvatarFallback></Avatar>
                    <span className="text-muted-foreground text-sm">{milestone.owner}</span>
                    <ChevronRightIcon className="text-muted-foreground ml-auto size-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline1Block
