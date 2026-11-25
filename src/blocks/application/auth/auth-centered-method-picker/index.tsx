import { useState } from "react"
import { ArrowLeftIcon, FingerprintIcon, InfoIcon } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
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

export function AuthCenteredMethodPickerBlock() {
  const [step, setStep] = useState<"methods" | "email">("methods")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email address.")
      return
    }
    setError(null)
    setNotice(`A sign-in link is on its way to ${email}.`)
  }

  function handlePasskey() {
    setNotice("This browser will ask you to confirm with your passkey.")
  }

  return (
    <div className="bg-background flex min-h-svh items-center justify-center px-6 pt-6 pb-32">
      <div className="w-full max-w-[320px]">
        <ReuiMark className="mx-auto size-10" />
        <h1 className="mt-8 text-center text-xl font-semibold tracking-tight">Log in to ReUI</h1>

        {step === "methods" ? (
          <div className="mt-8 space-y-2.5">
            <Button className="h-8 w-full">Continue with Google</Button>
            <Button
              variant="outline"
              className="h-8 w-full"
              onClick={() => {
                setStep("email")
                setNotice(null)
              }}
            >
              Continue with email
            </Button>
            <Button variant="outline" className="h-8 w-full">
              Continue with SAML SSO
            </Button>
            <Button variant="outline" className="h-8 w-full gap-1.5" onClick={handlePasskey}>
              <FingerprintIcon aria-hidden="true" />
              Log in with passkey
            </Button>
            <Button variant="outline" className="h-8 w-full">
              Use backup code
            </Button>
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} noValidate className="mt-8 space-y-3">
            <Field data-invalid={error ? true : undefined}>
              <FieldLabel htmlFor="auth-17-email">Email</FieldLabel>
              <Input
                id="auth-17-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="h-9"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error ? true : undefined}
                autoFocus
              />
              {error ? <FieldError>{error}</FieldError> : null}
            </Field>
            <Button type="submit" className="h-8 w-full">
              Continue
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full gap-1.5"
              onClick={() => {
                setStep("methods")
                setError(null)
                setNotice(null)
              }}
            >
              <ArrowLeftIcon aria-hidden="true" />
              All sign-in options
            </Button>
          </form>
        )}

        {notice ? (
          <Alert className="mt-4 py-2.5">
            <InfoIcon aria-hidden="true" />
            <AlertDescription className="text-xs">{notice}</AlertDescription>
          </Alert>
        ) : null}

        <p className="text-muted-foreground mt-6 text-center text-[13px]">
          Don't have an account?{" "}
          <a href="#" className="text-foreground font-medium underline underline-offset-4">
            Sign up
          </a>{" "}
          or{" "}
          <a href="#" className="text-foreground font-medium underline underline-offset-4">
            learn more
          </a>
        </p>
      </div>
    </div>
  )
}

export default AuthCenteredMethodPickerBlock
