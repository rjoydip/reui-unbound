import { useState } from "react"
import { ArrowRightIcon } from "lucide-react"
import { RiAppleFill, RiGithubFill } from "@remixicon/react"

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

function MagicArt({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-gradient-to-br from-sky-100 via-pink-50 to-pink-100 dark:from-zinc-950 dark:via-black dark:to-teal-950",
        className
      )}
    >
      <div className="absolute -left-16 top-[18%] size-72 rounded-full bg-pink-400/50 blur-3xl dark:bg-teal-600/25" />
      <div className="absolute right-0 top-0 size-64 rounded-full bg-fuchsia-500/40 blur-2xl dark:bg-cyan-700/25" />
      <div className="absolute bottom-[20%] left-[10%] size-64 rounded-full bg-sky-300/50 blur-3xl dark:bg-emerald-700/20" />
      <div className="absolute bottom-0 right-[10%] size-40 rounded-full bg-rose-300/40 blur-2xl dark:bg-teal-800/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.7),transparent_55%)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
    </div>
  )
}

export function Auth13Block() {
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
    <div className="bg-muted/30 relative min-h-svh p-6 lg:p-8">
      <div
        aria-hidden="true"
        className="bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] pointer-events-none absolute inset-0 opacity-40 [background-size:7px_7px]"
      />
      <div className="relative grid min-h-[calc(100svh_-_3rem)] gap-10 lg:min-h-[calc(100svh_-_4rem)] lg:grid-cols-2">
        <div className="relative hidden overflow-hidden rounded-2xl lg:block">
          <MagicArt className="absolute inset-0" />
        </div>

        <div className="flex items-center justify-center lg:justify-start lg:pl-14">
          <div className="w-full max-w-[352px]">
            <ReuiMark className="size-7" />
            <h1 className="mt-8 text-3xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-muted-foreground mt-2 max-w-[290px] text-sm">
              Enter your work email to get a secure magic link.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="auth-13-email">Work email</FieldLabel>
                <Input
                  id="auth-13-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="bg-background h-9"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? true : undefined}
                />
                {error ? (
                  <FieldError>{error}</FieldError>
                ) : (
                  <p className="text-muted-foreground text-xs">
                    Your sign-in link stays active for 15 minutes.
                  </p>
                )}
              </Field>

              <Button type="submit" className="mt-3 h-9 w-full gap-1.5">
                Send magic link
                <ArrowRightIcon aria-hidden="true" />
              </Button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <span className="bg-border h-px flex-1" />
              <span className="text-muted-foreground text-xs">Or continue with</span>
              <span className="bg-border h-px flex-1" />
            </div>

            <div className="mt-4 space-y-2">
              <Button variant="outline" className="bg-card h-9 w-full justify-center gap-2 shadow-xs">
                <GoogleIcon className="size-4" />
                Continue with Google
              </Button>
              <Button variant="outline" className="bg-card h-9 w-full justify-center gap-2 shadow-xs">
                <RiAppleFill className="size-4" aria-hidden="true" />
                Continue with Apple
              </Button>
              <Button variant="outline" className="bg-card h-9 w-full justify-center gap-2 shadow-xs">
                <RiGithubFill className="size-4" aria-hidden="true" />
                Continue with GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth13Block
