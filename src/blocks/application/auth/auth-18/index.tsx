import { useState } from "react"
import { EyeIcon, EyeOffIcon, StarIcon } from "lucide-react"
import { RiAppleFill } from "@remixicon/react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
  { name: "OpenAI", node: <span className="text-xs font-semibold tracking-tight">OpenAI</span> },
  {
    name: "stripe",
    node: <span className="text-[#635bff] text-lg font-bold tracking-tight lowercase">stripe</span>,
  },
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
]

export function Auth18Block() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: typeof errors = {}
    if (!email.trim()) next.email = "Enter your email or username."
    if (!password) next.password = "Enter your password."
    setErrors(next)
  }

  return (
    <div className="bg-background grid min-h-svh lg:grid-cols-[2fr_3fr]">
      <div className="bg-muted/20 relative hidden flex-col justify-between overflow-hidden border-r p-10 lg:flex">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] opacity-50 [background-size:64px_64px]"
        />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((star) => (
              <StarIcon key={star} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-5 max-w-[430px] text-2xl font-semibold leading-tight tracking-tight">
            “The best login pages disappear. This one already feels fast.”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <Avatar className="size-9">
              <AvatarFallback className="bg-gradient-to-br from-slate-400 to-slate-800 text-[11px] font-semibold text-white">
                SB
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sean Bold</p>
              <p className="text-muted-foreground text-xs">Co-founder · ReUI</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-foreground text-sm">Trusted by leading teams</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
            {TRUST_BRANDS.map((brand) => (
              <div key={brand.name} className="text-foreground/80 flex items-center">
                {brand.node}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[360px]">
          <div className="border-border bg-card mx-auto flex size-10 items-center justify-center rounded-xl border">
            <ReuiMark className="size-5" />
          </div>
          <h1 className="mt-5 text-center text-2xl font-semibold tracking-tight">Sign in to ReUI</h1>
          <p className="text-muted-foreground mt-1.5 text-center text-sm">Welcome back.</p>

          <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
            <Field data-invalid={errors.email ? true : undefined}>
              <FieldLabel htmlFor="auth-18-email">Email or username</FieldLabel>
              <Input
                id="auth-18-email"
                name="email"
                autoComplete="username"
                placeholder="Email or username"
                className="h-9"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={errors.email ? true : undefined}
              />
              {errors.email ? <FieldError>{errors.email}</FieldError> : null}
            </Field>

            <Field data-invalid={errors.password ? true : undefined}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="auth-18-password">Password</FieldLabel>
                <button
                  type="button"
                  className="text-muted-foreground hover:text-foreground text-[13px] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <InputGroup className="h-9">
                <InputGroupInput
                  id="auth-18-password"
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

          <div className="mt-5 grid grid-cols-2 gap-3">
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
    </div>
  )
}

export default Auth18Block
