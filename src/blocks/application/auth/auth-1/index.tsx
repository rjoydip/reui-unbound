import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { RiAppleFill } from "@remixicon/react"

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

function PhotoPanel() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[470px] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-100 via-slate-50 to-sky-200 ring-1 ring-black/5 dark:from-zinc-900 dark:via-black dark:to-zinc-800 dark:ring-white/10">
      <div
        aria-hidden="true"
        className="absolute -top-1/4 -left-1/4 size-[125%] rotate-45 rounded-[48%] border-[3px] border-white/70 dark:border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute top-[18%] -left-[35%] size-[115%] rotate-12 rounded-[46%] border-[2px] border-white/80 dark:border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[42%] -right-[30%] size-[90%] -rotate-12 rounded-[44%] border-[2px] border-white/90 dark:border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_10%,rgba(255,255,255,0.85),transparent_60%)] dark:bg-[radial-gradient(120%_80%_at_70%_10%,rgba(255,255,255,0.08),transparent_60%)]"
      />
    </div>
  )
}

export function Auth1Block() {
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
    <div className="bg-background relative min-h-svh overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative grid min-h-svh lg:grid-cols-2">
        <div className="flex items-center justify-center px-6 py-14">
          <div className="w-full max-w-[360px]">
            <div className="flex justify-center">
              <ReuiMark className="size-8" />
            </div>
            <h1 className="mt-6 text-center text-2xl font-semibold tracking-tight">Sign in to ReUI</h1>
            <p className="text-muted-foreground mt-1.5 text-center text-sm">Welcome back.</p>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-3.5">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="auth-1-email">Email or username</FieldLabel>
                <Input
                  id="auth-1-email"
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
                  <FieldLabel htmlFor="auth-1-password">Password</FieldLabel>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-[13px] transition-colors">
                    Forgot password?
                  </a>
                </div>
                <InputGroup className="h-9">
                  <InputGroupInput
                    id="auth-1-password"
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

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-9 gap-2">
                <GoogleIcon className="size-4" />
                Google
              </Button>
              <Button variant="outline" className="h-9 gap-2">
                <RiAppleFill className="size-4" aria-hidden="true" />
                Apple
              </Button>
            </div>

            <p className="text-muted-foreground mt-7 text-center text-[13px]">
              Need an account?{" "}
              <a href="#" className="text-foreground font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="hidden items-center justify-center p-10 lg:flex">
          <PhotoPanel />
        </div>
      </div>
    </div>
  )
}

export default Auth1Block
