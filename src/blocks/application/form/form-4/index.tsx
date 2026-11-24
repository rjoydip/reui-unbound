import { useState } from "react"
import {
  CheckCircle2Icon,
  InfoIcon,
  LockIcon,
  RotateCcwIcon,
  SaveIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react"
import { cn } from "cn"

import { Badge } from "@/components/kit/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const TABS = [
  { value: "email", label: "Email", dot: "success" },
  { value: "phone", label: "Phone", badge: "Pro" },
  { value: "username", label: "Username" },
  { value: "password", label: "Password", dot: "success" },
  { value: "passkeys", label: "Passkeys", dot: "warning" },
  { value: "protection", label: "Protection" },
  { value: "user-model", label: "User Model" },
] as const

const DEFAULT_SWITCHES: Record<string, boolean> = {
  emailSignup: true,
  emailRequired: false,
  emailVerify: true,
  emailRestrict: false,
  emailSignin: true,
  emailCode: true,
  phoneSignup: true,
  phoneVerified: true,
  phoneDisposable: true,
  phoneSignin: true,
  usernameSignup: false,
  usernameSignin: false,
  passwordSignin: true,
  passwordRecovery: true,
  passwordBreach: true,
  passwordLength: true,
  passwordComplexity: true,
  passkeySignin: true,
  passkeyDiscoverable: true,
  passkeyRecent: false,
  lockoutEnabled: true,
  lockoutAdmin: false,
  revokeSessions: true,
  notifySignIn: false,
}

const USER_MODEL_FIELDS = [
  { label: "Primary identifier", value: "Email address" },
  { label: "Display name", value: "Required" },
  { label: "Phone number", value: "Optional" },
  { label: "Timezone", value: "Auto-detected" },
]

function InfoTip({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground inline-flex transition-colors"
          aria-label="More information"
        >
          <InfoIcon className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-60">{children}</TooltipContent>
    </Tooltip>
  )
}

function Panel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("divide-y overflow-hidden rounded-xl border bg-card", className)}>
      {children}
    </div>
  )
}

function Row({
  title,
  description,
  trailing,
  children,
  disabled,
}: {
  title: React.ReactNode
  description?: string
  trailing?: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
}) {
  return (
    <div className="px-4 py-3.5">
      <div className="flex items-start justify-between gap-6">
        <div className={cn("flex flex-col gap-0.5", disabled && "opacity-60")}>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            {title}
          </div>
          {description && (
            <p className="text-muted-foreground max-w-lg text-sm">{description}</p>
          )}
        </div>
        {trailing && <div className="shrink-0 pt-0.5">{trailing}</div>}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}

function Note({
  title,
  children,
  tone = "warning",
}: {
  title: string
  children: React.ReactNode
  tone?: "warning" | "info"
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 rounded-xl border px-4 py-3",
        tone === "warning"
          ? "border-warning/30 bg-warning/5"
          : "border-info/30 bg-info/5",
      )}
    >
      {tone === "warning" ? (
        <TriangleAlertIcon className="text-warning-foreground mt-0.5 size-4 shrink-0" />
      ) : (
        <InfoIcon className="text-info mt-0.5 size-4 shrink-0" />
      )}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-muted-foreground text-sm">{children}</p>
      </div>
    </div>
  )
}

export function Form4Block() {
  const [switches, setSwitches] = useState(DEFAULT_SWITCHES)
  const [target, setTarget] = useState("preview")
  const [country, setCountry] = useState("US, CA, UK, EU")
  const [channel, setChannel] = useState("SMS code")
  const [minLength, setMinLength] = useState("12")
  const [lockoutDuration, setLockoutDuration] = useState("15 minutes")
  const [saved, setSaved] = useState(false)

  const toggle = (key: string) => (checked: boolean) => {
    setSwitches((current) => ({ ...current, [key]: checked }))
    setSaved(false)
  }

  return (
    <TooltipProvider>
      <main className="min-h-svh p-6 md:py-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <h1 className="font-heading text-xl font-semibold">User Authentication</h1>
              <p className="text-muted-foreground text-sm">
                Configure sign-up, sign-in, and protection rules.
              </p>
            </div>
            <Select value={target} onValueChange={setTarget}>
              <SelectTrigger className="w-36">
                <span className="flex items-center gap-2">
                  <span className="bg-info size-2 rounded-full" />
                  <SelectValue />
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="preview">Preview</SelectItem>
                <SelectItem value="staging">Staging</SelectItem>
                <SelectItem value="production">Production</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="email" className="mt-5 gap-6">
            <TabsList variant="line" className="gap-2 p-0">
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="gap-2 px-2">
                  {"dot" in tab && (
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        tab.dot === "success" ? "bg-success" : "bg-warning",
                      )}
                    />
                  )}
                  {tab.label}
                  {"badge" in tab && (
                    <Badge variant="success" size="xs">
                      {tab.badge}
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="email" className="flex flex-col gap-5">
              <Panel>
                <Row
                  title="Sign-up with email"
                  description="Allow users to create accounts with a verified email address."
                  trailing={
                    <Switch checked={switches.emailSignup} onCheckedChange={toggle("emailSignup")} />
                  }
                />
                <Row
                  title="Require email address"
                  description="Users must keep one reachable email address on their account."
                  disabled={!switches.emailRequired}
                  trailing={
                    <Switch
                      checked={switches.emailRequired}
                      disabled
                      onCheckedChange={toggle("emailRequired")}
                    />
                  }
                >
                  <div className="mt-2.5">
                    <Note title="Required method" tone="info">
                      Email is the only enabled sign-up option, so it remains required.
                    </Note>
                  </div>
                </Row>
                <Row
                  title="Verify at sign-up"
                  description="Require ownership verification before a new account is created."
                  trailing={<Switch checked={switches.emailVerify} onCheckedChange={toggle("emailVerify")} />}
                >
                  <div className="mt-3 flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium">Verification methods</p>
                      <p className="text-muted-foreground text-sm">
                        Choose how users confirm control of an email address.
                      </p>
                    </div>
                    {[
                      { id: "otp", label: "One-time verification code", desc: "Send a short passcode to the submitted address.", checked: true },
                      { id: "link", label: "Verification link", desc: "Send a secure link with an expiring session token.", checked: false },
                    ].map((item) => (
                      <div key={item.id} className="flex items-start gap-2.5">
                        <Checkbox id={item.id} defaultChecked={item.checked} className="mt-0.5" />
                        <div className="flex flex-col">
                          <label htmlFor={item.id} className="text-sm">{item.label}</label>
                          <span className="text-muted-foreground text-xs">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Row>
                <Row
                  title="Restrict email changes"
                  description="Prevent users from changing their email after sign-up."
                  disabled
                  trailing={
                    <Switch checked={switches.emailRestrict} disabled onCheckedChange={toggle("emailRestrict")} />
                  }
                />
              </Panel>
              <Panel>
                <Row
                  title="Sign-in with email"
                  description="Allow returning users to sign in with their email address."
                  trailing={<Switch checked={switches.emailSignin} onCheckedChange={toggle("emailSignin")} />}
                />
                <Row
                  title="Email verification code"
                  description="Users can sign in with a one-time code."
                  trailing={<Switch checked={switches.emailCode} onCheckedChange={toggle("emailCode")} />}
                />
              </Panel>
            </TabsContent>

            <TabsContent value="phone" className="flex flex-col gap-5">
              <Note title="SMS allowlist">
                SMS sign-in is limited to phone numbers from countries enabled in the messaging allowlist.
              </Note>
              <Panel>
                <Row
                  title={
                    <>
                      Sign-up with phone
                      <Badge variant="success" size="xs">Pro</Badge>
                      <InfoTip>Requires a connected SMS provider.</InfoTip>
                    </>
                  }
                  description="Allow users to create accounts with a phone number."
                  trailing={<Switch checked={switches.phoneSignup} onCheckedChange={toggle("phoneSignup")} />}
                />
                <Row title="Country allowlist" description="Accept registrations only from supported messaging regions.">
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="w-full max-w-[380px]"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["US, CA, UK, EU", "US and Canada", "EU only", "Global"].map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Row>
                <Row title="Verification channel" description="Primary channel used to confirm control of the phone number.">
                  <Select value={channel} onValueChange={setChannel}>
                    <SelectTrigger className="w-full max-w-[380px]"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {["SMS code", "Voice call", "WhatsApp"].map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Row>
                <Row
                  title="Require verified phone"
                  description="Create the account only after the first code challenge succeeds."
                  trailing={<Switch checked={switches.phoneVerified} onCheckedChange={toggle("phoneVerified")} />}
                />
                <Row
                  title="Block disposable numbers"
                  description="Reject high-risk virtual, temporary, and relay phone numbers."
                  trailing={<Switch checked={switches.phoneDisposable} onCheckedChange={toggle("phoneDisposable")} />}
                />
              </Panel>
              <Panel>
                <Row
                  title={
                    <>
                      Sign-in with phone
                      <Badge variant="success" size="xs">Pro</Badge>
                    </>
                  }
                  description="Allow users to sign in with a phone number."
                  trailing={<Switch checked={switches.phoneSignin} onCheckedChange={toggle("phoneSignin")} />}
                />
              </Panel>
            </TabsContent>

            <TabsContent value="username" className="grid gap-5 sm:grid-cols-[1fr_280px]">
              <div className="flex flex-col gap-5">
                <Panel>
                  <Row
                    title="Sign-up with username"
                    description="Allow users to choose a username during account creation."
                    trailing={<Switch checked={switches.usernameSignup} onCheckedChange={toggle("usernameSignup")} />}
                  />
                </Panel>
                <Panel>
                  <Row
                    title="Sign-in with username"
                    description="Allow users to sign in using their username."
                    trailing={<Switch checked={switches.usernameSignin} onCheckedChange={toggle("usernameSignin")} />}
                  />
                </Panel>
              </div>
              <Panel className="h-fit">
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold">Username Rules</p>
                  <p className="text-muted-foreground text-sm">Current reserved-name policy.</p>
                </div>
                {[
                  { label: "Minimum length", value: "4 characters" },
                  { label: "Maximum length", value: "48 characters" },
                  { label: "Extended symbols", value: "Off" },
                ].map((item) => (
                  <div key={item.label} className="px-4 py-3">
                    <p className="text-muted-foreground text-xs">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
                <div className="px-4 py-3">
                  <Button variant="outline" className="w-full" disabled>
                    <LockIcon />
                    Update rules
                  </Button>
                </div>
              </Panel>
            </TabsContent>

            <TabsContent value="password" className="flex flex-col gap-5">
              <Note title="Password recovery caution">
                Recovery and breach checks should stay enabled before password sign-in is published to production.
              </Note>
              <Panel>
                <Row
                  title="Password sign-in"
                  description="Allow users to authenticate with a password."
                  trailing={<Switch checked={switches.passwordSignin} onCheckedChange={toggle("passwordSignin")} />}
                />
                <Row
                  title="Password recovery"
                  description="Send recovery codes only to verified identifiers."
                  trailing={<Switch checked={switches.passwordRecovery} onCheckedChange={toggle("passwordRecovery")} />}
                />
                <Row
                  title="Compromised password check"
                  description="Block sign-in when a password appears in known breach data."
                  trailing={<Switch checked={switches.passwordBreach} onCheckedChange={toggle("passwordBreach")} />}
                />
              </Panel>
              <Panel>
                <Row
                  title="Password Policy"
                  description="Baseline requirements for new passwords."
                  trailing={<Badge variant="success-light" size="sm">Enforced</Badge>}
                />
                <Row
                  title="Minimum length"
                  description="Require at least 12 characters."
                  trailing={<Switch checked={switches.passwordLength} onCheckedChange={toggle("passwordLength")} />}
                >
                  <Input
                    className="mt-2 w-24"
                    inputMode="numeric"
                    value={minLength}
                    aria-label="Minimum password length"
                    onChange={(event) => setMinLength(event.target.value)}
                  />
                </Row>
                <Row
                  title="Require complexity"
                  description="Ask for a number, symbol, uppercase, and lowercase character."
                  trailing={<Switch checked={switches.passwordComplexity} onCheckedChange={toggle("passwordComplexity")} />}
                />
              </Panel>
            </TabsContent>

            <TabsContent value="passkeys" className="flex flex-col gap-5">
              <Panel>
                <Row
                  title={
                    <>
                      Passkey sign-in
                      <Badge variant="success-light" size="sm">Beta</Badge>
                    </>
                  }
                  description="Let users sign in with device-bound credentials."
                  trailing={<Switch checked={switches.passkeySignin} onCheckedChange={toggle("passkeySignin")} />}
                />
                <Row
                  title="Discoverable credentials"
                  description="Allow platform passkeys without entering an identifier first."
                  trailing={<Switch checked={switches.passkeyDiscoverable} onCheckedChange={toggle("passkeyDiscoverable")} />}
                />
                <Row
                  title="Require recent verification"
                  description="Ask for a fresh passkey challenge before sensitive changes."
                  trailing={<Switch checked={switches.passkeyRecent} onCheckedChange={toggle("passkeyRecent")} />}
                />
              </Panel>
              <Panel>
                <div className="px-4 py-3.5">
                  <p className="text-sm font-medium">Allowed Authenticators</p>
                  <p className="text-muted-foreground text-sm">Registration sources accepted by default.</p>
                </div>
                {[
                  { id: "platform", label: "Platform authenticators", desc: "Face ID, Touch ID, Windows Hello, and Android screen lock." },
                  { id: "keys", label: "Security keys", desc: "Hardware keys using WebAuthn-compatible protocols." },
                ].map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 px-4 py-3">
                    <Checkbox id={item.id} defaultChecked className="mt-0.5" />
                    <div className="flex flex-col">
                      <label htmlFor={item.id} className="text-sm">{item.label}</label>
                      <span className="text-muted-foreground text-xs">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </Panel>
            </TabsContent>

            <TabsContent value="protection" className="flex flex-col gap-5">
              <Note title="Lockout policy" tone="info">
                Repeated failures temporarily lock the account. Owners can lift a lockout early.
              </Note>
              <Panel>
                <Row
                  title="Account lockout"
                  description="Lock accounts after repeated failed attempts."
                  trailing={<Switch checked={switches.lockoutEnabled} onCheckedChange={toggle("lockoutEnabled")} />}
                >
                  <div className="mt-2 flex flex-wrap items-end gap-3">
                    <label className="flex flex-col gap-1 text-sm">
                      Failed attempts
                      <Input defaultValue="5" className="w-20" inputMode="numeric" />
                    </label>
                    <label className="flex flex-col gap-1 text-sm">
                      Lockout duration
                      <Select value={lockoutDuration} onValueChange={setLockoutDuration}>
                        <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {["5 minutes", "15 minutes", "30 minutes", "1 hour"].map((item) => (
                            <SelectItem key={item} value={item}>{item}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                </Row>
                <Row
                  title="Require admin unlock"
                  description="Only workspace owners can restore a locked account."
                  trailing={<Switch checked={switches.lockoutAdmin} onCheckedChange={toggle("lockoutAdmin")} />}
                />
                <Row
                  title="Revoke sessions on role change"
                  description="Sign the member out everywhere when their role changes."
                  trailing={<Switch checked={switches.revokeSessions} onCheckedChange={toggle("revokeSessions")} />}
                />
                <Row
                  title="Notify on new sign-in"
                  description="Email the member when a new device authenticates."
                  trailing={<Switch checked={switches.notifySignIn} onCheckedChange={toggle("notifySignIn")} />}
                />
              </Panel>
            </TabsContent>

            <TabsContent value="user-model">
              <Panel>
                <div className="px-4 py-3.5">
                  <p className="text-sm font-medium">User Model</p>
                  <p className="text-muted-foreground text-sm">
                    Fields requested from every new account.
                  </p>
                </div>
                {USER_MODEL_FIELDS.map((item) => (
                  <Row key={item.label} title={item.label} trailing={<span className="text-sm">{item.value}</span>} />
                ))}
              </Panel>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
            <p className="text-muted-foreground text-sm">
              {saved ? "Preview policy updated." : "Policy changes stay in preview until published."}
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setSaved(false)}>
                <RotateCcwIcon />
                Discard
              </Button>
              <Button onClick={() => setSaved(true)}>
                <SaveIcon />
                Save policy
              </Button>
            </div>
          </div>
        </div>

        {saved && (
          <div
            role="status"
            className="bg-popover fixed top-4 left-1/2 z-50 flex w-full max-w-sm -translate-x-1/2 items-start gap-3 rounded-xl border px-4 py-3 shadow-lg"
          >
            <CheckCircle2Icon className="text-success mt-0.5 size-4 shrink-0" />
            <div className="flex flex-1 flex-col gap-0.5">
              <p className="text-sm font-medium">Authentication settings saved</p>
              <p className="text-muted-foreground text-sm">
                The {target} environment was updated with the latest policy draft.
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSaved(false)}
            >
              <XIcon className="size-4" />
            </button>
          </div>
        )}
      </main>
    </TooltipProvider>
  )
}

export default Form4Block
