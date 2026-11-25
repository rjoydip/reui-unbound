import { useState } from "react"
import { ArrowRightIcon, MailIcon } from "lucide-react"
import { RiGithubFill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
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

export function AuthInviteOnlySignInBlock() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !email.includes("@")) {
      setError("Enter your approved workspace email.")
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
          Need workspace access?{" "}
          <a href="#" className="text-foreground font-medium hover:underline">
            Request invite
          </a>
        </p>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-[430px]">
          <Card className="shadow-xs">
            <CardHeader className="pt-3">
              <CardTitle className="text-2xl font-semibold tracking-tight">Welcome back</CardTitle>
              <CardDescription className="max-w-[340px] leading-relaxed">
                Use your approved workspace email to receive a secure sign-in link.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <Button variant="outline" className="h-9 w-full justify-center gap-2">
                  <GoogleIcon className="size-4" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="h-9 w-full justify-center gap-2">
                  <RiGithubFill className="size-4" aria-hidden="true" />
                  Continue with GitHub
                </Button>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="bg-border h-px flex-1" />
                <span className="text-muted-foreground text-xs">or</span>
                <span className="bg-border h-px flex-1" />
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-4">
                <Field data-invalid={error ? true : undefined}>
                  <FieldLabel htmlFor="auth-19-email">Work email</FieldLabel>
                  <InputGroup className="h-9">
                    <InputGroupAddon align="inline-start">
                      <MailIcon aria-hidden="true" />
                    </InputGroupAddon>
                    <InputGroupInput
                      id="auth-19-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid={error ? true : undefined}
                    />
                  </InputGroup>
                  {error ? <FieldError>{error}</FieldError> : null}
                </Field>
                <Button type="submit" className="mt-3 h-9 w-full gap-1.5">
                  Continue with email
                  <ArrowRightIcon aria-hidden="true" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-muted-foreground mt-4 text-center text-[13px]">
            By continuing, you agree to ReUI's{" "}
            <a href="#" className="text-foreground underline underline-offset-2">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-foreground underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  )
}

export default AuthInviteOnlySignInBlock
