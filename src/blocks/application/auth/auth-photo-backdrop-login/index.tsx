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
import { Frame, FramePanel } from "@/components/kit/frame"

const BACKDROP =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"

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

export function AuthPhotoBackdropLoginBlock() {
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
    <div className="relative min-h-svh overflow-hidden">
      <img src={BACKDROP} alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
      <div aria-hidden="true" className="bg-background/85 dark:bg-background/70 absolute inset-0" />

      <div className="relative flex min-h-svh flex-col px-6 py-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ReuiMark className="size-8" />
            <span className="text-base font-semibold tracking-tight">ReUI</span>
          </div>
          <a
            href="#"
            className="border-border bg-background/80 hover:bg-background inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] shadow-sm backdrop-blur transition-colors"
          >
            New here? <span className="font-medium">Create an account</span>
          </a>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center py-10">
          <Frame variant="ghost" spacing="lg" className="w-full max-w-[440px] bg-transparent p-0 [--frame-px:0px]">
            <FramePanel className="border-border flex flex-col border px-8 py-7 shadow-xl">
              <h1 className="text-center text-[22px] font-semibold tracking-tight">Sign in to ReUI</h1>
              <p className="text-muted-foreground mt-1.5 text-center text-sm">Pick up where you left off.</p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-3.5">
                <Field data-invalid={error ? true : undefined}>
                  <FieldLabel htmlFor="auth-8-email">Email or username</FieldLabel>
                  <Input
                    id="auth-8-email"
                    name="email"
                    autoComplete="username"
                    placeholder="you@work.com"
                    className="h-9"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-invalid={error ? true : undefined}
                  />
                </Field>

                <Field data-invalid={error ? true : undefined}>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="auth-8-password">Password</FieldLabel>
                    <a href="#" className="text-muted-foreground hover:text-foreground text-[13px] transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <InputGroup className="h-9">
                    <InputGroupInput
                      id="auth-8-password"
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

              <div className="space-y-2.5">
                <Button variant="outline" className="h-9 w-full gap-2">
                  <GoogleIcon className="size-4" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="h-9 w-full gap-2">
                  <RiAppleFill className="size-4" aria-hidden="true" />
                  Continue with Apple
                </Button>
                <Button variant="outline" className="h-9 w-full gap-2">
                  <RiGithubFill className="size-4" aria-hidden="true" />
                  Continue with GitHub
                </Button>
              </div>

              <p className="text-muted-foreground mt-5 text-center text-[13px]">
                New to ReUI?{" "}
                <a href="#" className="text-foreground font-medium hover:underline">
                  Create an account
                </a>
              </p>
            </FramePanel>
          </Frame>

          <p className="mt-5 text-center text-[13px] font-medium">Joining 14,000+ product teams shipping faster with ReUI</p>
        </main>
      </div>
    </div>
  )
}

export default AuthPhotoBackdropLoginBlock
