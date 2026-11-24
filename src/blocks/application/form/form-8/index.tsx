import { useState } from "react"
import {
  AtomIcon, BoxIcon, CheckIcon, Code2Icon, CopyIcon, EyeIcon, EyeOffIcon, PlusIcon,
  RefreshCwIcon, ServerIcon, ShieldAlertIcon, TerminalIcon, Trash2Icon, WebhookIcon,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "cn"

type KeyStatus = "Active" | "Rotating" | "Restricted"

interface ApiKey {
  id: string
  name: string
  status: KeyStatus
  scope: string
  stack: string
  masked: string
  secret: string
  lastUsed: string
  canReveal: boolean
}

const STACKS = [
  { id: "next", name: "Next.js", Icon: Code2Icon, vars: ["NEXT_PUBLIC_REUI_PUBLISHABLE_KEY", "REUI_SECRET_KEY", "REUI_API_URL"] },
  { id: "react", name: "React SPA", Icon: AtomIcon, vars: ["VITE_REUI_PUBLISHABLE_KEY", "VITE_REUI_SECRET_KEY", "VITE_REUI_API_URL"] },
  { id: "node", name: "Node API", Icon: ServerIcon, vars: ["REUI_PUBLISHABLE_KEY", "REUI_SECRET_KEY", "REUI_API_URL"] },
  { id: "python", name: "Python", Icon: TerminalIcon, vars: ["REUI_PUBLISHABLE_KEY", "REUI_SECRET_KEY", "REUI_API_URL"] },
  { id: "go", name: "Go", Icon: BoxIcon, vars: ["REUI_PUBLISHABLE_KEY", "REUI_SECRET_KEY", "REUI_API_URL"] },
  { id: "webhooks", name: "Webhooks", Icon: WebhookIcon, vars: ["REUI_WEBHOOK_PUBLIC_KEY", "REUI_WEBHOOK_SECRET", "REUI_API_URL"] },
] as const

const INITIAL_KEYS: ApiKey[] = [
  {
    id: "browser", name: "Browser publishable key", status: "Active", scope: "Frontend Platform · Production", stack: "Next.js",
    masked: "pk_example_ui7xl9...Qd2a", secret: "pk_example_ui7xl9f3b2c8a41e0d6b7c5a9Qd2a",
    lastUsed: "Last used 4m ago", canReveal: false,
  },
  {
    id: "server", name: "Server default", status: "Active", scope: "Core API · Production", stack: "Node API",
    masked: "sk_example_••••••••••••••••••••••••", secret: "sk_example_9f3b2c8a41e0d6b7c5a2e1f8d4c3b7a6",
    lastUsed: "Last used 11m ago", canReveal: true,
  },
  {
    id: "worker", name: "Usage sync worker", status: "Rotating", scope: "Data Jobs · Production", stack: "Python",
    masked: "sk_example_worker_••••••••••", secret: "sk_example_worker_4c3b7a69f3b2c8a41e0d",
    lastUsed: "Last used 22m ago", canReveal: true,
  },
  {
    id: "webhook", name: "Webhook verifier", status: "Restricted", scope: "Integrations · Production", stack: "Webhooks",
    masked: "rk_example_wh••••••••••", secret: "rk_example_wh7a69f3b2c8a41e0d",
    lastUsed: "Last used 2h ago", canReveal: true,
  },
]

const STATUS_VARIANT: Record<KeyStatus, "success-light" | "warning-light" | "focus-light"> = {
  Active: "success-light", Rotating: "warning-light", Restricted: "focus-light",
}
const OWNERS = ["Maya Chen", "Kai Morgan", "Priya Nair", "Theo Alvarez"]
const ENVIRONMENTS = ["Production", "Staging", "Development"]
const EXPIRY_OPTIONS = ["30 days", "60 days", "90 days", "Never"]
const SCOPES = ["Read", "Write", "Billing"]

const copyText = async (text: string, message: string) => {
  try {
    await navigator.clipboard.writeText(text)
    toast.success(message)
  } catch {
    toast.error("Clipboard unavailable")
  }
}

function IconAction({ label, onClick, destructive, children }: {
  label: string; onClick: () => void; destructive?: boolean; children: React.ReactNode
}) {
  return (
    <Button
      variant="ghost" size="icon-sm" aria-label={label} title={label} onClick={onClick}
      className={cn(destructive && "text-destructive hover:bg-destructive/10 hover:text-destructive")}
    >
      {children}
    </Button>
  )
}

export function Form8Block() {
  const [apiKeys, setApiKeys] = useState(INITIAL_KEYS)
  const [stack, setStack] = useState("next")
  const [revealed, setRevealed] = useState<string[]>([])
  const [alertVisible, setAlertVisible] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [name, setName] = useState("")
  const [owner, setOwner] = useState(OWNERS[0])
  const [environment, setEnvironment] = useState(ENVIRONMENTS[0])
  const [expiry, setExpiry] = useState(EXPIRY_OPTIONS[2])
  const [scopes, setScopes] = useState<string[]>(["Read"])

  const activeStack = STACKS.find((item) => item.id === stack) ?? STACKS[0]
  const snippet = [
    { key: activeStack.vars[0], value: "pk_example_ui7xl9...Qd2a" },
    { key: activeStack.vars[1], value: "sk_example_****************" },
    { key: activeStack.vars[2], value: "https://api.reui.dev/v1" },
  ]

  const createKey = () => {
    if (!name.trim()) { toast.error("Key name is required"); return }
    if (scopes.length === 0) { toast.error("Select at least one scope"); return }
    setApiKeys((current) => [
      ...current,
      {
        id: `custom-${current.length + 1}`, name: name.trim(), status: "Active",
        scope: `${scopes.join(", ")} · ${environment}`, stack: owner,
        masked: `sk_example_gen${current.length + 1}••••••••••`,
        secret: `sk_example_gen${current.length + 1}c8a41e0d6b7c5a`,
        lastUsed: `Expires ${expiry.toLowerCase()}`, canReveal: true,
      },
    ])
    setCreateOpen(false)
    setName("")
    setScopes(["Read"])
    toast.success("API key created")
  }

  const rotateKey = (key: ApiKey) => {
    setApiKeys((current) => current.map((item) => (item.id === key.id ? { ...item, status: "Rotating" } : item)))
    toast.success(`${key.name} rotation scheduled`)
  }

  const revokeKey = (key: ApiKey) => {
    if (!window.confirm(`Revoke ${key.name}? Services using it will lose access immediately.`)) return
    setApiKeys((current) => current.filter((item) => item.id !== key.id))
    setRevealed((current) => current.filter((id) => id !== key.id))
    toast.success(`${key.name} revoked`)
  }

  return (
    <div className="min-h-svh bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">API Keys</h1>
            <p className="text-sm text-muted-foreground">Manage credentials and copy stack-ready environment values.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{apiKeys.length} {apiKeys.length === 1 ? "key" : "keys"}</span>
            <Button onClick={() => setCreateOpen(true)}><PlusIcon />Create Key</Button>
          </div>
        </div>

        <section className="rounded-xl border bg-card">
          <div className="flex flex-wrap items-start justify-between gap-3 p-5 pb-4">
            <div className="space-y-0.5">
              <h2 className="text-sm font-semibold">Quick Copy</h2>
              <p className="text-sm text-muted-foreground">Choose a stack and paste the environment block.</p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={stack} onValueChange={setStack}>
                <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {STACKS.map((item) => <SelectItem key={item.id} value={item.id}><item.Icon />{item.name}</SelectItem>)}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => copyText(snippet.map((line) => `${line.key}=${line.value}`).join("\n"), "Environment block copied")}
              >
                <CopyIcon />Copy
              </Button>
            </div>
          </div>
          <div className="px-5 pb-5">
            <div className="overflow-x-auto rounded-lg bg-zinc-950 p-4 font-mono text-xs leading-6 dark:bg-zinc-900">
              {snippet.map((line, index) => (
                <div key={line.key} className="flex gap-4 whitespace-nowrap">
                  <span className="w-3 select-none text-right text-zinc-600">{index + 1}</span>
                  <span>
                    <span className="text-emerald-400">{line.key}</span>
                    <span className="text-zinc-500">=</span>
                    <span className="text-zinc-300">{line.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-xl border bg-card">
          <div className="flex flex-wrap items-start justify-between gap-3 p-5 pb-4">
            <div className="space-y-0.5">
              <h2 className="text-sm font-semibold">Keys</h2>
              <p className="text-sm text-muted-foreground">Copy, reveal, rotate, or revoke workspace keys.</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setCreateOpen(true)}><PlusIcon />Add Key</Button>
          </div>
          <div className="divide-y border-t">
            {apiKeys.map((key) => {
              const isRevealed = revealed.includes(key.id)
              return (
                <div key={key.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium">{key.name}</span>
                      <Badge variant={STATUS_VARIANT[key.status]} radius="full">{key.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{key.scope} · {key.stack}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                    <div className="flex items-center gap-1">
                      <div className="flex h-8 w-full min-w-0 items-center gap-2 rounded-lg border bg-background px-2.5 sm:w-64">
                        <span className="min-w-0 flex-1 truncate font-mono text-xs">{isRevealed ? key.secret : key.masked}</span>
                        <IconAction label="Copy key" onClick={() => copyText(key.secret, "Key copied")}>
                          <CopyIcon className="size-3.5" />
                        </IconAction>
                      </div>
                      {key.canReveal && (
                        <>
                          <IconAction
                            label={isRevealed ? "Hide key" : "Reveal key"}
                            onClick={() => setRevealed((current) =>
                              isRevealed ? current.filter((id) => id !== key.id) : [...current, key.id]
                            )}
                          >
                            {isRevealed ? <EyeOffIcon className="size-3.5" /> : <EyeIcon className="size-3.5" />}
                          </IconAction>
                          <IconAction label="Rotate key" onClick={() => rotateKey(key)}>
                            <RefreshCwIcon className="size-3.5" />
                          </IconAction>
                          <IconAction label="Revoke key" destructive onClick={() => revokeKey(key)}>
                            <Trash2Icon className="size-3.5" />
                          </IconAction>
                        </>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{key.lastUsed}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {alertVisible && (
          <div className="flex items-start justify-between gap-4 rounded-xl border border-destructive/20 bg-destructive/5 px-5 py-3.5">
            <div className="flex items-start gap-2.5">
              <ShieldAlertIcon className="mt-0.5 size-4 shrink-0 text-destructive" />
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Keep secret keys server-side</p>
                <p className="text-sm text-muted-foreground">
                  Rotate immediately if a key appears in client code, logs, or shared screenshots.
                </p>
              </div>
            </div>
            <Button
              variant="ghost" size="xs"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setAlertVisible(false)}
            >
              Dismiss
            </Button>
          </div>
        )}
      </div>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create API key</DialogTitle>
            <DialogDescription>Scope a new credential to a service and rotate it on a schedule.</DialogDescription>
          </DialogHeader>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel htmlFor="key-name">Key name</FieldLabel>
              <Input id="key-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Billing sync worker" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel>Owner</FieldLabel>
                <Select value={owner} onValueChange={setOwner}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {OWNERS.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Environment</FieldLabel>
                <Select value={environment} onValueChange={setEnvironment}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {ENVIRONMENTS.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field>
              <FieldLabel>Scopes</FieldLabel>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                {SCOPES.map((scope) => (
                  <label key={scope} className="flex items-center gap-2 text-sm">
                    <Checkbox
                      checked={scopes.includes(scope)}
                      onCheckedChange={(checked) =>
                        setScopes((current) => checked ? [...current, scope] : current.filter((item) => item !== scope))
                      }
                    />
                    {scope}
                  </label>
                ))}
              </div>
            </Field>
            <Field>
              <FieldLabel>Expiration</FieldLabel>
              <Select value={expiry} onValueChange={setExpiry}>
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {EXPIRY_OPTIONS.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button onClick={createKey}><CheckIcon />Create key</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Form8Block
