import { useState } from "react"
import { ArrowRightIcon, AsteriskIcon, MailIcon, PlusIcon } from "lucide-react"
import { RiAppleFill, RiGithubFill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Field, FieldError } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "cn"
import { Slack } from "@/components/ui/svgs/slack"
import { Supabase } from "@/components/ui/svgs/supabase"

const BRANDS = [
  { name: "stripe", node: <span className="text-base font-bold tracking-tight text-[#635bff] lowercase">stripe</span> },
  { name: "OpenAI", node: <span className="text-[11px] font-semibold tracking-tight">OpenAI</span> },
  {
    name: "slack",
    node: (
      <span className="flex items-center gap-1">
        <Slack className="size-3.5" />
        <span className="text-sm font-bold lowercase">slack</span>
      </span>
    ),
  },
  { name: "Anthropic", node: <span className="text-[11px] font-semibold tracking-[0.12em] uppercase">{"ANTHROP\\C"}</span> },
  {
    name: "Claude",
    node: (
      <span className="flex items-center gap-1">
        <AsteriskIcon className="size-3.5 text-orange-400" aria-hidden="true" />
        <span className="text-sm font-semibold">Claude</span>
      </span>
    ),
  },
  {
    name: "supabase",
    node: (
      <span className="flex items-center gap-1">
        <Supabase className="size-3.5" />
        <span className="text-sm font-semibold lowercase">supabase</span>
      </span>
    ),
  },
  {
    name: "mintlify",
    node: (
      <span className="flex items-center gap-1">
        <span className="size-3 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="text-sm font-semibold lowercase">mintlify</span>
      </span>
    ),
  },
  { name: "Resend", node: <span className="text-sm font-semibold tracking-tight">Resend</span> },
]

function ReuiMark() {
  return (
    <span className="border-border bg-card text-foreground flex size-9 items-center justify-center rounded-[10px] border shadow-xs">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          d="M8 6v6a4 4 0 0 0 8 0V6"
          className="fill-none stroke-foreground"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.8-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.3 14.3A7.2 7.2 0 0 1 4.9 12c0-.8.1-1.6.4-2.3V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-5 6.7-5Z" />
    </svg>
  )
}

function Corner({ className }: { className?: string }) {
  return (
    <PlusIcon
      aria-hidden="true"
      strokeWidth={1}
      className={cn("text-border absolute size-4", className)}
    />
  )
}

export function Auth7Block() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return setError("Enter your work email.")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email address.")
    setError(null)
    setSubmitted(true)
  }

  return (
    <div className="dark">
      <div className="bg-background text-foreground flex min-h-svh flex-col items-center justify-center px-6 py-14">
        <div className="w-full max-w-[444px]">
        <div className="border-border relative border border-dashed px-8 pt-9 pb-8">
          <Corner className="-top-2 -left-2" />
          <Corner className="-top-2 -right-2" />
          <Corner className="-bottom-2 -left-2" />
          <Corner className="-bottom-2 -right-2" />

          <div className="flex justify-center">
            <ReuiMark />
          </div>
          <h1 className="mt-5 text-center text-2xl font-semibold tracking-tight">Welcome back to ReUI.</h1>

          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <Field data-invalid={error ? true : undefined}>
              <InputGroup className="h-9">
                <InputGroupAddon align="inline-start">
                  <MailIcon className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  id="auth-7-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-label="Work email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? true : undefined}
                />
              </InputGroup>
              {error ? <FieldError className="mt-2">{error}</FieldError> : null}
            </Field>

            <Button type="submit" className="mt-3 h-9 w-full gap-2" disabled={submitted}>
              Send sign-in link
              <ArrowRightIcon />
            </Button>
          </form>

          <p className="text-muted-foreground mt-5 text-center text-[13px]">Or continue with</p>

          <div className="mt-4 flex justify-center gap-3">
            <Button variant="outline" className="h-9 gap-2">
              <GoogleIcon className="size-4" />
              Google
            </Button>
            <Button variant="outline" className="h-9 gap-2">
              <RiAppleFill className="size-4" aria-hidden="true" />
              Apple
            </Button>
            <Button variant="outline" className="h-9 gap-2">
              <RiGithubFill className="size-4" aria-hidden="true" />
              GitHub
            </Button>
          </div>

          <p className="text-muted-foreground mt-5 text-center text-[13px]">
            First time here?{" "}
            <a href="#" className="text-foreground font-semibold hover:underline">
              Start a free trial
            </a>
          </p>

          <div className="border-border relative mt-7 -mx-8 border-t border-dashed px-8 pt-6">
            <Corner className="-top-2 -left-2" />
            <Corner className="-top-2 -right-2" />
            <p className="text-muted-foreground text-center text-[13px]">Shipping with teams at</p>
            <div className="mt-5 grid grid-cols-4 items-center gap-y-6 text-center">
              {BRANDS.map((brand) => (
                <div key={brand.name} className="text-foreground/90 flex items-center justify-center">
                  {brand.node}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mt-6 text-center text-xs leading-relaxed">
          By continuing you agree to ReUI&apos;s{" "}
          <a href="#" className="text-foreground underline underline-offset-4">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-foreground underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>
        </div>
      </div>
    </div>
  )
}

export default Auth7Block
