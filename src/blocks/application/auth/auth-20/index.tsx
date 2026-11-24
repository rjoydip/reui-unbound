import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { RiAppleFill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

export function Auth20Block() {
  const [showPassword, setShowPassword] = useState(false)
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: typeof errors = {}
    if (!identifier.trim()) next.identifier = "Enter your email or username."
    if (!password) next.password = "Enter your password."
    setErrors(next)
  }

  return (
    <div className="bg-muted/30 flex min-h-svh flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px]">
        <Card className="gap-0 shadow-xs">
          <CardContent className="px-7 pb-4 pt-6">
            <ReuiMark className="mx-auto size-9" />
            <h1 className="mt-4 text-center text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground mt-1.5 text-center text-sm">
              Sign in to continue to your workspace.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-9 gap-2">
                <GoogleIcon className="size-4" />
                Google
              </Button>
              <Button variant="outline" className="h-9 gap-2">
                <RiAppleFill className="size-4" aria-hidden="true" />
                Apple
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="bg-border h-px flex-1" />
              <span className="text-muted-foreground text-xs">Or sign in with email</span>
              <span className="bg-border h-px flex-1" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              <Field data-invalid={errors.identifier ? true : undefined}>
                <FieldLabel htmlFor="auth-20-identifier">Email or username</FieldLabel>
                <Input
                  id="auth-20-identifier"
                  name="identifier"
                  autoComplete="username"
                  placeholder="Email or username"
                  className="h-9"
                  value={identifier}
                  onChange={(event) => setIdentifier(event.target.value)}
                  aria-invalid={errors.identifier ? true : undefined}
                />
                {errors.identifier ? <FieldError>{errors.identifier}</FieldError> : null}
              </Field>

              <Field data-invalid={errors.password ? true : undefined}>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="auth-20-password">Password</FieldLabel>
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-foreground text-[13px] transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <InputGroup className="h-9">
                  <InputGroupInput
                    id="auth-20-password"
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
          </CardContent>
        </Card>

        <p className="text-muted-foreground mt-5 text-center text-[13px]">
          Don't have an account?{" "}
          <a href="#" className="text-foreground font-medium hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  )
}

export default Auth20Block
