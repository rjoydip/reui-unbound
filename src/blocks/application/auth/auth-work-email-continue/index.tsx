import { useState } from "react"
import { ArrowRightIcon, EyeIcon, KeyRoundIcon, SendIcon } from "lucide-react"
import { RiGithubFill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "cn"
import { Supabase } from "@/components/ui/svgs/supabase"

function ReuiMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("fill-foreground", className)}>
      <rect width="32" height="32" rx="9" />
      <path
        d="M11 8.5v8a5 5 0 0 0 10 0v-8"
        className="fill-none stroke-background"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
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

const TRUST_BRANDS = [
  {
    name: "Anthropic",
    node: <span className="text-[13px] font-semibold tracking-[0.18em]">ANTHROP\C</span>,
  },
  {
    name: "Supabase",
    node: (
      <span className="flex items-center gap-1.5">
        <Supabase className="size-4" />
        <span className="text-sm font-semibold lowercase">supabase</span>
      </span>
    ),
  },
  {
    name: "NVIDIA",
    node: (
      <span className="flex items-center gap-1.5">
        <EyeIcon className="size-4 text-[#76b900]" aria-hidden="true" />
        <span className="text-sm font-semibold lowercase">nvidia</span>
      </span>
    ),
  },
  {
    name: "Resend",
    node: (
      <span className="flex items-center gap-1 text-sm font-semibold">
        <SendIcon className="size-3.5 -rotate-45" aria-hidden="true" />
        Resend
      </span>
    ),
  },
  { name: "OpenAI", node: <span className="text-[11px] font-semibold">OpenAI</span> },
]

export function AuthWorkEmailContinueBlock() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid work email address.")
      return
    }
    setError(null)
  }

  return (
    <div className="bg-background flex min-h-svh flex-col">
      <header className="flex items-center justify-between gap-4 px-6 py-6">
        <div className="flex items-center gap-2">
          <ReuiMark className="size-7" />
          <span className="text-base font-semibold tracking-tight">ReUI</span>
        </div>
        <p className="text-muted-foreground hidden text-[13px] sm:block">
          Not on ReUI yet?{" "}
          <a href="#" className="text-foreground font-medium hover:underline">
            Create a workspace
          </a>
        </p>
      </header>

      <main className="flex flex-col items-center px-6 pt-10">
        <div className="w-full max-w-[384px]">
          <h1 className="text-center text-[2rem] font-semibold tracking-tight">Back to building.</h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-[336px] text-center text-sm leading-relaxed">
            Sign in to sync your team, tasks, and timelines across every surface.
          </p>

          <div className="mt-8 space-y-2">
            <Button variant="outline" className="h-9 w-full justify-center gap-2">
              <GoogleIcon className="size-4" />
              Continue with Google
            </Button>
            <Button variant="outline" className="h-9 w-full justify-center gap-2">
              <RiGithubFill className="size-4" aria-hidden="true" />
              Continue with GitHub
            </Button>
            <Button variant="outline" className="h-9 w-full justify-center gap-2">
              <KeyRoundIcon className="size-4" aria-hidden="true" />
              Use Single Sign-On
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="bg-border h-px flex-1" />
            <span className="text-muted-foreground text-xs">or</span>
            <span className="bg-border h-px flex-1" />
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <Field data-invalid={error ? true : undefined}>
              <FieldLabel htmlFor="auth-16-email">Work email</FieldLabel>
              <Input
                id="auth-16-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="h-9"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error ? true : undefined}
              />
              {error ? <FieldError>{error}</FieldError> : null}
            </Field>
            <Button type="submit" className="mt-3 h-9 w-full gap-1.5">
              Continue
              <ArrowRightIcon aria-hidden="true" />
            </Button>
          </form>

          <p className="text-muted-foreground mt-5 text-center text-xs leading-relaxed">
            By continuing, you agree to ReUI's{" "}
            <a href="#" className="text-foreground underline underline-offset-2">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-foreground underline underline-offset-2">
              Privacy Policy
            </a>
          </p>
        </div>
      </main>

      <footer className="mt-auto px-6 pb-10 pt-16">
        <p className="text-muted-foreground text-center text-sm">
          Joining 14,000+ product teams shipping faster with ReUI
        </p>
        <div className="text-foreground/80 mx-auto mt-5 flex max-w-[640px] flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {TRUST_BRANDS.map((brand) => (
            <div key={brand.name} className="flex items-center">
              {brand.node}
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default AuthWorkEmailContinueBlock
