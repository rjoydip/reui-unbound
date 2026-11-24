import { useState } from "react"
import { ArrowUpRightIcon, EyeIcon, EyeOffIcon } from "lucide-react"
import { RiAppleFill, RiGithubFill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "cn"
import { Slack } from "@/components/ui/svgs/slack"
import { Supabase } from "@/components/ui/svgs/supabase"

const PHOTO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"

const BRANDS = [
  { name: "OpenAI", node: <span className="text-xs font-semibold tracking-tight">OpenAI</span> },
  { name: "stripe", node: <span className="text-lg font-bold tracking-tight text-[#635bff] lowercase">stripe</span> },
  {
    name: "supabase",
    node: (
      <span className="flex items-center gap-1.5">
        <Supabase className="size-4" />
        <span className="text-sm font-semibold lowercase">supabase</span>
      </span>
    ),
  },
  {
    name: "slack",
    node: (
      <span className="flex items-center gap-1.5">
        <Slack className="size-4" />
        <span className="text-sm font-bold lowercase">slack</span>
      </span>
    ),
  },
  { name: "Cursor", node: <span className="text-base font-semibold tracking-[0.18em] uppercase">Cursor</span> },
  {
    name: "mintlify",
    node: (
      <span className="flex items-center gap-1">
        <span className="size-3.5 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="text-sm font-semibold lowercase">mintlify</span>
      </span>
    ),
  },
]

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

export function Auth6Block() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return setError("Enter your email or username.")
    if (!password) return setError("Enter your password.")
    setError(null)
    setSubmitted(true)
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col px-6 py-10">
        <div className="flex items-center justify-center gap-2">
          <ReuiMark className="size-8" />
          <span className="text-base font-semibold tracking-tight">ReUI</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-10">
          <div className="mx-auto w-full max-w-[360px]">
            <h1 className="text-center text-[22px] font-semibold tracking-tight">
              Log in to your ReUI account.
            </h1>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-3.5">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="auth-6-email">Email or username</FieldLabel>
                <Input
                  id="auth-6-email"
                  name="email"
                  autoComplete="username"
                  placeholder="Email or username"
                  className="h-9"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? true : undefined}
                />
              </Field>

              <Field data-invalid={error ? true : undefined}>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="auth-6-password">Password</FieldLabel>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-[13px] transition-colors">
                    Forgot password?
                  </a>
                </div>
                <InputGroup className="h-9">
                  <InputGroupInput
                    id="auth-6-password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    aria-invalid={error ? true : undefined}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      size="icon-xs"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((value) => !value)}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {error ? <FieldError>{error}</FieldError> : null}
              </Field>

              <Button type="submit" className="h-9 w-full" disabled={submitted}>
                Sign in
              </Button>
            </form>

            <div className="my-5 flex items-center gap-3">
              <span className="bg-border h-px flex-1" />
              <span className="text-muted-foreground text-xs">Or continue with</span>
              <span className="bg-border h-px flex-1" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="h-9 gap-1.5 px-2 text-[13px]">
                <GoogleIcon className="size-4" />
                Google
              </Button>
              <Button variant="outline" className="h-9 gap-1.5 px-2 text-[13px]">
                <RiAppleFill className="size-4" aria-hidden="true" />
                Apple
              </Button>
              <Button variant="outline" className="h-9 gap-1.5 px-2 text-[13px]">
                <RiGithubFill className="size-4" aria-hidden="true" />
                GitHub
              </Button>
            </div>

            <p className="text-muted-foreground mt-6 text-center text-[13px]">
              Need an account?{" "}
              <a href="#" className="text-foreground font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mx-auto max-w-[360px] text-center text-[12px] leading-relaxed">
          By continuing, you agree to ReUI&apos;s{" "}
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

      <div className="relative hidden overflow-hidden border-l lg:flex lg:flex-col">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 flex-col justify-between gap-10 px-10 py-12">
          <div>
            <img
              src={PHOTO}
              alt="Team collaborating around a laptop in a bright office"
              className="h-[300px] w-full rounded-xl object-cover"
              loading="lazy"
            />
            <div className="mt-7 flex items-center gap-1.5">
              <Slack className="size-5" />
              <span className="text-xl font-bold tracking-tight lowercase">slack</span>
            </div>
            <p className="mt-3 max-w-[430px] text-[15px] leading-relaxed">
              We moved to ReUI and shipped faster with less design drift. It&apos;s one system our whole team
              trusts.
            </p>
            <Button variant="outline" className="mt-5 h-8 gap-1.5">
              Read more
              <ArrowUpRightIcon className="size-3.5" />
            </Button>
          </div>

          <div className="grid grid-cols-3 items-center gap-y-9 text-center">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="text-foreground/90 flex items-center justify-center">
                {brand.node}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth6Block
