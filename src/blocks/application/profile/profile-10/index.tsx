import { useState } from "react"
import {
  CheckIcon,
  CopyIcon,
  EllipsisIcon,
  GlobeIcon,
  LockIcon,
  PlusIcon,
  RotateCwIcon,
  Trash2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "cn"

type ApiKey = {
  name: string
  used: string
  key: string
  type: "Secret" | "Publishable"
  domain: string
  created: string
  avatar: string
  revoked?: boolean
}

const INITIAL_KEYS: ApiKey[] = [
  { name: "Production Server", used: "Used 2 min ago", key: "nstr_live_sk_••••7f2a", type: "Secret", domain: "Server only", created: "Aug 12", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
  { name: "Web Checkout", used: "Used 14 min ago", key: "nstr_live_pk_••••c41d", type: "Publishable", domain: "app.northstar.dev +1", created: "Jul 30", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&dpr=2&q=80" },
  { name: "Staging Worker", used: "Used 3 days ago", key: "nstr_test_sk_••••09be", type: "Secret", domain: "Server only", created: "Jul 18", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&dpr=2&q=80" },
  { name: "Preview Deploys", used: "Never used", key: "nstr_test_pk_••••e8a3", type: "Publishable", domain: "*.preview.northstar.dev", created: "Jun 4", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&dpr=2&q=80" },
  { name: "Legacy Mobile", used: "Revoked Aug 2", key: "nstr_live_pk_••••d7c1", type: "Publishable", domain: "m.northstar.dev", created: "Mar 21", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&dpr=2&q=80", revoked: true },
]

const SAMPLES = {
  Events: {
    file: "track-checkout.ts",
    code: `import { Northstar } from "@northstar/sdk"

const northstar = new Northstar({
  apiKey: process.env.NORTHSTAR_SECRET_KEY,
})

await northstar.events.track({
  name: "checkout.completed",
  userId: "usr_8f21",
  properties: { plan: "growth", seats: 24 },
})`,
  },
  Metrics: {
    file: "usage-metrics.ts",
    code: `import { Northstar } from "@northstar/sdk"

const northstar = new Northstar({
  apiKey: process.env.NORTHSTAR_SECRET_KEY,
})

const usage = await northstar.metrics.query({
  metric: "tracked_records",
  period: "month",
})`,
  },
  Webhooks: {
    file: "webhook-handler.ts",
    code: `import { verifySignature } from "@northstar/sdk"

export async function POST(request: Request) {
  const event = await verifySignature(request)
  if (event.type === "invoice.paid") {
    await syncInvoice(event.data)
  }
}`,
  },
}

export function Profile10Block() {
  const [keys, setKeys] = useState(INITIAL_KEYS)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [newName, setNewName] = useState("Billing Worker")
  const [newType, setNewType] = useState("Secret")
  const [sample, setSample] = useState<keyof typeof SAMPLES>("Events")
  const [language, setLanguage] = useState("TypeScript")
  const [copied, setCopied] = useState(false)

  const roll = (name: string) =>
    setKeys((current) => current.map((key) => key.name === name ? { ...key, key: key.key.replace(/••••\w{4}$/, "••••9a2f"), used: "Used just now" } : key))
  const revoke = (name: string) =>
    setKeys((current) => current.map((key) => key.name === name ? { ...key, revoked: true, used: "Revoked just now" } : key))
  const remove = (name: string) => setKeys((current) => current.filter((key) => key.name !== name))

  const createKey = () => {
    setKeys((current) => [
      { name: newName || "Untitled key", used: "Never used", key: newType === "Secret" ? "nstr_live_sk_••••a1b2" : "nstr_live_pk_••••a1b2", type: newType as ApiKey["type"], domain: newType === "Secret" ? "Server only" : "app.northstar.dev", created: "Today", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&dpr=2&q=80" },
      ...current,
    ])
    setDialogOpen(false)
    setNewName("")
  }

  const copySample = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLES[sample].code)
    } catch {
      // Clipboard permissions can be unavailable in preview iframes.
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="bg-background text-foreground min-h-svh p-8">
      <div className="mx-auto max-w-[896px]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">API Keys</h1>
          <p className="text-muted-foreground mt-1 text-sm">Authenticate requests from your servers and browsers.</p>
          <Button className="mt-4" size="sm" onClick={() => setDialogOpen(true)}><PlusIcon />New Key</Button>
        </div>

        <div className="bg-card mt-6 overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Domains</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map((key) => (
                <TableRow key={key.name} className={key.revoked ? "text-muted-foreground" : undefined}>
                  <TableCell>
                    <p className="font-medium">{key.name}</p>
                    <p className={cn("text-xs", key.revoked ? "text-destructive" : "text-muted-foreground")}>{key.used}</p>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs">
                      <span className={key.revoked ? "line-through" : undefined}>{key.key}</span>
                      <CopyIcon className="size-3" />
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={key.type === "Secret" ? "warning-light" : "success-light"} size="sm">
                      {key.type === "Secret" ? <LockIcon /> : <GlobeIcon />}
                      {key.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{key.domain}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1.5 text-sm">
                      <Avatar size="sm" className="size-5"><AvatarImage src={key.avatar} alt="" /><AvatarFallback>NA</AvatarFallback></Avatar>
                      {key.created}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-xs" aria-label={`Actions for ${key.name}`}>
                          <EllipsisIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem disabled={key.revoked} onSelect={() => roll(key.name)}>
                          <RotateCwIcon />Roll Key
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {key.revoked ? (
                          <DropdownMenuItem variant="destructive" onSelect={() => remove(key.name)}>
                            <Trash2Icon />Delete Key
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem variant="destructive" onSelect={() => revoke(key.name)}>
                            <Trash2Icon />Revoke Key
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-semibold">Quick Start</h2>
            <Tabs value={sample} onValueChange={(value) => setSample(value as keyof typeof SAMPLES)}>
              <TabsList>
                {Object.keys(SAMPLES).map((item) => (
                  <TabsTrigger key={item} value={item} className="px-3">{item}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="bg-card mt-3 overflow-hidden rounded-lg border">
            <div className="flex items-center gap-2 border-b px-4 py-2">
              <span className="text-muted-foreground font-mono text-xs">{SAMPLES[sample].file}</span>
              <div className="ml-auto flex items-center gap-1">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger size="sm" className="w-28"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["TypeScript", "Python", "Go", "Ruby", "PHP"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon-xs" aria-label="Copy code sample" onClick={copySample}>
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </Button>
              </div>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-6"><code>{SAMPLES[sample].code}</code></pre>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Key</DialogTitle>
            <DialogDescription>Name it after the app that will use it.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="key-name" className="text-sm font-medium">Name</label>
              <Input id="key-name" value={newName} onChange={(event) => setNewName(event.target.value)} />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Type</p>
              <RadioGroup value={newType} onValueChange={setNewType} className="gap-2">
                {[
                  ["Secret", "Server calls with every scope."],
                  ["Publishable", "Browser calls from domains you approve."],
                ].map(([value, note]) => (
                  <label key={value} className="flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2.5">
                    <RadioGroupItem value={value} className="mt-0.5" />
                    <span>
                      <span className="block text-sm font-medium">{value}</span>
                      <span className="text-muted-foreground block text-xs">{note}</span>
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={createKey}>Create Key</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Profile10Block
