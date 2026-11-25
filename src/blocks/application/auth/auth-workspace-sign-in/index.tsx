import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
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

function StackedArt() {
  return (
    <div className="relative hidden items-center justify-center overflow-hidden lg:flex">
      <div className="relative h-[600px] w-[460px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-8 -translate-y-4 rounded-2xl bg-gradient-to-br from-sky-200/80 to-cyan-100/80 dark:from-sky-900/70 dark:to-cyan-950/70"
        />
        <div
          aria-hidden="true"
          className="bg-card/70 absolute inset-0 translate-x-4 -translate-y-2 rounded-2xl shadow-sm"
        />
        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-pink-50 to-pink-100 dark:from-zinc-950 dark:via-black dark:to-teal-950" />
          <div className="absolute -left-16 top-[18%] size-72 rounded-full bg-pink-400/50 blur-3xl dark:bg-teal-600/25" />
          <div className="absolute right-0 top-0 size-64 rounded-full bg-fuchsia-500/40 blur-2xl dark:bg-cyan-700/25" />
          <div className="absolute bottom-[20%] left-[10%] size-64 rounded-full bg-sky-300/50 blur-3xl dark:bg-emerald-700/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.7),transparent_55%)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>
      </div>
    </div>
  )
}

export function AuthWorkspaceSignInBlock() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: typeof errors = {}
    if (!email.trim() || !email.includes("@")) next.email = "Enter a valid work email address."
    if (!password) next.password = "Enter your password."
    setErrors(next)
  }

  return (
    <div className="bg-background grid min-h-svh lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[360px]">
          <ReuiMark className="mx-auto size-9" />
          <h1 className="mt-6 text-center text-xl font-semibold tracking-tight">
            Sign in to ReUI Control
          </h1>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
            <Field data-invalid={errors.email ? true : undefined}>
              <FieldLabel htmlFor="auth-14-email">Work email</FieldLabel>
              <Input
                id="auth-14-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                className="h-9"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={errors.email ? true : undefined}
              />
              {errors.email ? <FieldError>{errors.email}</FieldError> : null}
            </Field>

            <Field data-invalid={errors.password ? true : undefined}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="auth-14-password">Password</FieldLabel>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground text-[13px] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <InputGroup className="h-9">
                <InputGroupInput
                  id="auth-14-password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={errors.password ? true : undefined}
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
              {errors.password ? <FieldError>{errors.password}</FieldError> : null}
            </Field>

            <Button type="submit" className="h-9 w-full">
              Sign in
            </Button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <span className="bg-border h-px flex-1" />
            <span className="text-muted-foreground text-xs">Or continue with</span>
            <span className="bg-border h-px flex-1" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <Button variant="outline" className="h-8 gap-1.5 text-[13px]">
              <GoogleIcon className="size-4" />
              Google
            </Button>
            <Button variant="outline" className="h-8 gap-1.5 text-[13px]">
              <RiAppleFill className="size-4" aria-hidden="true" />
              Apple
            </Button>
            <Button variant="outline" className="h-8 gap-1.5 text-[13px]">
              <RiGithubFill className="size-4" aria-hidden="true" />
              GitHub
            </Button>
          </div>

          <p className="text-muted-foreground mt-7 text-center text-[13px]">
            Need access?{" "}
            <a href="#" className="text-foreground font-medium hover:underline">
              Request an invite
            </a>
          </p>
        </div>
      </div>

      <StackedArt />
    </div>
  )
}

export default AuthWorkspaceSignInBlock
