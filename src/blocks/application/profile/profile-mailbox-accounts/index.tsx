import { useState } from "react"
import {
  ArrowLeftIcon,
  EllipsisIcon,
  MailIcon,
  PuzzleIcon,
  HashIcon,
  VideoIcon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

type Account = {
  email: string
  badge: string
  note: string
  dot: string
  letter: string
}

const SENDERS: Account[] = [
  { email: "alex@northstarstudio.com", badge: "Primary", note: "Primary sender mailbox and booking calendar", dot: "bg-blue-500", letter: "A" },
  { email: "meetings@northstarstudio.com", badge: "Synced", note: "Google Meet links for scheduled demos", dot: "bg-emerald-500", letter: "M" },
]

const ROUTES = [
  { email: "ryan@reui.io", badge: "Verified", note: "Primary reply owner for outbound sequences", initials: "RA", tone: "bg-muted" },
  { email: "adam@reui.io", badge: "", note: "Compliance copy for outbound mail", initials: "AC", tone: "bg-amber-100 text-amber-800" },
  { email: "mason@reui.io", badge: "Shared", note: "Shared inbox alias for delegated handoff", initials: "MT", tone: "bg-sky-100 text-sky-700" },
]

function AccountMenu({ label }: { label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={`Open actions for ${label}`}>
          <EllipsisIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem>Set as primary</DropdownMenuItem>
        <DropdownMenuItem>Edit routing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Disconnect</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ProfileMailboxAccountsBlock() {
  const [signature, setSignature] = useState(true)
  const [bookingLink, setBookingLink] = useState(true)
  const [bounceAlerts, setBounceAlerts] = useState(false)

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[768px]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Outreach Inboxes</h1>
            <p className="text-muted-foreground mt-1 text-sm">Keep sending accounts, reply routing, and booking calendars aligned.</p>
          </div>
          <Button variant="outline" size="sm"><ArrowLeftIcon />Back to profile</Button>
        </div>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Connected Accounts</h2>
            <p className="text-muted-foreground text-sm">Primary mailbox used for sends and calendar booking.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            {SENDERS.map((account) => (
              <div key={account.email} className="flex items-center gap-3 border-b px-4 py-3">
                <span className={`flex size-8 items-center justify-center rounded-md text-sm font-bold text-white ${account.dot}`}>{account.letter}</span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    {account.email}
                    <Badge variant={account.badge === "Primary" ? "focus-light" : "success-light"} size="sm">{account.badge}</Badge>
                  </p>
                  <p className="text-muted-foreground text-sm">{account.note}</p>
                </div>
                <AccountMenu label={account.email} />
              </div>
            ))}
            <div className="grid gap-2 p-2 sm:grid-cols-2">
              <Button variant="outline" size="sm"><VideoIcon />Connect Loom workspace</Button>
              <Button variant="outline" size="sm"><HashIcon />Connect Slack handoff</Button>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Reply Routing</h2>
            <p className="text-muted-foreground text-sm">Where replies and bounce notices should land.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            {ROUTES.map((route) => (
              <div key={route.email} className="flex items-center gap-3 border-b px-4 py-3 last:border-0">
                {route.email === "ryan@reui.io" ? (
                  <Avatar size="sm">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" alt="" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                ) : (
                  <span className={`flex size-9 items-center justify-center rounded-full text-xs font-semibold ${route.tone}`}>{route.initials}</span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    {route.email}
                    {route.badge ? <Badge variant={route.badge === "Verified" ? "success-light" : "warning-light"} size="sm">{route.badge}</Badge> : null}
                  </p>
                  <p className="text-muted-foreground text-sm">{route.note}</p>
                </div>
                <AccountMenu label={route.email} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <div>
            <h2 className="text-sm font-semibold">Sender Signature</h2>
            <p className="text-muted-foreground text-sm">Shared footer content for outbound mail.</p>
          </div>
          <div className="bg-card overflow-hidden rounded-lg border">
            <div className="flex items-center gap-3 border-b px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 text-sm font-medium">
                  Attach workspace signature
                  <Badge variant="focus-light" size="sm">Recommended</Badge>
                </p>
                <p className="text-muted-foreground text-sm">Add the shared sender details and booking link to every outbound mail.</p>
              </div>
              <Switch checked={signature} onCheckedChange={setSignature} aria-label="Attach workspace signature" />
            </div>
            <div className="flex items-center gap-3 border-b px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Include booking link</p>
                <p className="text-muted-foreground text-sm">Let prospects self-schedule from the signature.</p>
              </div>
              <Switch checked={bookingLink} onCheckedChange={setBookingLink} aria-label="Include booking link" />
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Bounce alerts</p>
                <p className="text-muted-foreground text-sm">Email the reply owner when a send bounces.</p>
              </div>
              <Switch checked={bounceAlerts} onCheckedChange={setBounceAlerts} aria-label="Bounce alerts" />
            </div>
          </div>
        </section>

        <div className="text-muted-foreground mt-8 flex items-center gap-2 text-xs">
          <MailIcon className="size-4" />
          <PuzzleIcon className="size-4" />
          Connected mailboxes stay in sync with your workspace calendar and reply history.
        </div>
      </div>
    </div>
  )
}

export default ProfileMailboxAccountsBlock
