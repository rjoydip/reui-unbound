import { useState } from "react"
import { ArrowRightIcon, EyeIcon, EyeOffIcon } from "lucide-react"
import { RiGithubFill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Frame, FramePanel } from "@/components/kit/frame"

function ReuiMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="9" className="fill-foreground" />
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

export function Auth5Block() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return setError("Enter your work email.")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid work email address.")
    if (password.length < 8) return setError("Use at least 8 characters for your password.")
    setError(null)
    setSubmitted(true)
  }

  return (
    <div className="bg-background relative min-h-svh overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(55% 50% at 88% 8%, rgba(251,146,60,0.55), transparent 70%), radial-gradient(45% 55% at 18% 42%, rgba(244,114,182,0.25), transparent 70%), radial-gradient(55% 55% at 96% 88%, rgba(139,92,246,0.45), transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(55% 50% at 85% 10%, rgba(234,88,12,0.45), transparent 70%), radial-gradient(45% 60% at 25% 45%, rgba(190,24,93,0.35), transparent 72%), radial-gradient(55% 55% at 95% 90%, rgba(79,70,229,0.35), transparent 72%)",
        }}
      />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1280px] flex-col px-6 py-6 lg:px-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ReuiMark className="size-8" />
            <span className="text-base font-semibold tracking-tight">ReUI</span>
          </div>
          <p className="text-muted-foreground text-[13px]">
            Already on ReUI?{" "}
            <a href="#" className="text-foreground font-medium hover:underline">
              Sign in
            </a>
          </p>
        </header>

        <main className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-2 lg:gap-16">
          <div className="hidden max-w-[580px] lg:block">
            <span className="border-border bg-background/60 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur">
              <span className="bg-foreground size-1.5 rounded-full" aria-hidden="true" />
              Global product teams ship on ReUI
            </span>
            <h1 className="mt-6 text-[56px] leading-[1.05] font-semibold tracking-tight">
              The UI layer to
              <br />
              grow your{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                product
              </span>
              .
            </h1>
            <p className="text-muted-foreground mt-6 max-w-[540px] text-[15px] leading-relaxed">
              A premium block library built on shadcn. Auth, billing, dashboards, and settings.
              Production-ready the day you clone it.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Frame variant="ghost" spacing="lg" className="w-full max-w-[420px] bg-transparent p-0 [--frame-px:0px]">
              <FramePanel className="border-border flex flex-col border px-8 py-7 shadow-xl">
                <h2 className="text-xl font-semibold tracking-tight">Start your 14-day trial</h2>
                <p className="text-muted-foreground mt-1.5 text-sm">No credit card. No sales call. Just ship.</p>

                <div className="mt-6 space-y-2.5">
                  <Button variant="outline" className="h-9 w-full gap-2">
                    <GoogleIcon className="size-4" />
                    Continue with Google
                  </Button>
                  <Button variant="outline" className="h-9 w-full gap-2">
                    <RiGithubFill className="size-4" aria-hidden="true" />
                    Continue with GitHub
                  </Button>
                </div>

                <div className="my-5 flex items-center gap-3">
                  <span className="bg-border h-px flex-1" />
                  <span className="text-muted-foreground text-[11px] tracking-wide uppercase">OR</span>
                  <span className="bg-border h-px flex-1" />
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                  <Field data-invalid={error ? true : undefined}>
                    <FieldLabel htmlFor="auth-5-email">Work email</FieldLabel>
                    <Input
                      id="auth-5-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="h-9"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid={error ? true : undefined}
                    />
                  </Field>

                  <Field data-invalid={error ? true : undefined}>
                    <FieldLabel htmlFor="auth-5-password">Password</FieldLabel>
                    <InputGroup className="h-9">
                      <InputGroupInput
                        id="auth-5-password"
                        name="password"
                        autoComplete="new-password"
                        placeholder="8+ characters"
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

                  <Button type="submit" className="h-9 w-full gap-2" disabled={submitted}>
                    Start free trial
                    <ArrowRightIcon />
                  </Button>
                </form>

                <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                  By continuing you agree to ReUI&apos;s{" "}
                  <a href="#" className="text-foreground underline underline-offset-4">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-foreground underline underline-offset-4">
                    Privacy Policy
                  </a>
                  .
                </p>
              </FramePanel>
            </Frame>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Auth5Block
