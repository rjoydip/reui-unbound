import { useState } from "react"
import {
  BookOpenIcon,
  MailIcon,
  MessageSquareIcon,
  VideoIcon,
} from "lucide-react"

import { Badge } from "@/components/kit/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const HELP_ROUTES = [
  {
    id: "guides",
    title: "Setup guides",
    description: "Admin and onboarding references.",
    action: "Open guides",
    icon: BookOpenIcon,
  },
  {
    id: "walkthroughs",
    title: "Short walkthroughs",
    description: "Quick lessons for rollout.",
    action: "Watch videos",
    icon: VideoIcon,
  },
  {
    id: "feedback",
    title: "Product feedback",
    description: "Share missing patterns.",
    action: "Send feedback",
    icon: MessageSquareIcon,
  },
]

export function Dialog7Block() {
  const [open, setOpen] = useState(false)

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="sr-only">Support hub dialog</h1>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open support hub
      </Button>

      <DialogRoot open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90svh] gap-0 overflow-y-auto p-0 sm:max-w-[680px]">
          <DialogHeader className="gap-1 p-5 pb-4">
            <DialogTitle>Need a hand with setup?</DialogTitle>
            <DialogDescription>Choose the fastest path to the right team.</DialogDescription>
          </DialogHeader>

          <div className="divide-y divide-dashed border-y">
            {HELP_ROUTES.map((route) => (
              <div key={route.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="bg-muted/60 flex size-10 shrink-0 items-center justify-center rounded-lg border">
                  <route.icon className="size-4.5" />
                </div>
                <div className="grid flex-1 gap-0.5">
                  <span className="text-sm font-medium">{route.title}</span>
                  <span className="text-muted-foreground text-xs">{route.description}</span>
                </div>
                <Button type="button" variant="outline" size="sm">
                  {route.action}
                </Button>
              </div>
            ))}
          </div>

          <div className="grid gap-3 p-5">
            <p className="text-muted-foreground text-xs font-medium">Escalation paths</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col rounded-xl border p-3">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarImage src="https://picsum.photos/seed/advisor-office/96/96" alt="Avery Moss" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-sm font-medium">Advisor office hours</span>
                      <Badge variant="focus-outline" radius="full" size="sm">
                        Office hours
                      </Badge>
                    </div>
                    <span className="text-muted-foreground text-xs">Guided setup review.</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3 flex-1 text-xs leading-relaxed">
                  Bring setup questions for a faster next step.
                </p>
                <Button type="button" size="sm" className="mt-4 w-full">
                  Reserve a session
                </Button>
              </div>

              <div className="flex flex-col rounded-xl border p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-muted/60 flex size-9 shrink-0 items-center justify-center rounded-lg border">
                    <MailIcon className="size-4" />
                  </div>
                  <div className="grid gap-0.5">
                    <span className="text-sm font-medium">Direct support desk</span>
                    <span className="text-muted-foreground text-xs">Account and product help.</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3 flex-1 text-xs leading-relaxed">
                  Replies usually land within one business day.
                </p>
                <Button type="button" variant="outline" size="sm" className="mt-4 w-full">
                  Email support
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogRoot>
    </main>
  )
}

export default Dialog7Block
