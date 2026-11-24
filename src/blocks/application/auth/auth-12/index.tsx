import { useState } from "react"
import { ArrowLeftIcon, BadgeCheckIcon, StarIcon } from "lucide-react"
import { RiAppleFill } from "@remixicon/react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "cn"
import { Discord } from "@/components/ui/svgs/discord"
import { Dropbox } from "@/components/ui/svgs/dropbox"
import { Loom } from "@/components/ui/svgs/loom"
import { Slack } from "@/components/ui/svgs/slack"
import { Zoom } from "@/components/ui/svgs/zoom"

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

const GHOST_BRANDS = [
  { name: "Apple", node: <RiAppleFill className="size-5" />, className: "left-[70%] top-[4%]" },
  { name: "Slack", node: <Slack className="size-5" />, className: "left-[26%] top-[3%]" },
  { name: "Zoom", node: <Zoom className="size-5" />, className: "left-[4%] top-[14%]" },
  { name: "Discord", node: <Discord className="size-5" />, className: "left-[86%] top-[78%]" },
  { name: "Dropbox", node: <Dropbox className="size-5" />, className: "left-[4%] top-[88%]" },
  { name: "Loom", node: <Loom className="size-5" />, className: "left-[76%] top-[82%]" },
]

export function Auth12Block() {
  const [step, setStep] = useState<"methods" | "email">("methods")
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !email.includes("@")) {
      setError("Enter a valid email address.")
      return
    }
    setError(null)
  }

  return (
    <div className="bg-background grid min-h-svh lg:grid-cols-[5fr_3fr]">
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[320px]">
          <ReuiMark className="mx-auto size-10" />
          <h1 className="mt-8 text-center text-xl font-semibold tracking-tight">Log in to ReUI</h1>

          {step === "methods" ? (
            <div className="mt-8 space-y-2.5">
              <Button className="h-8 w-full">Continue with Google</Button>
              <Button variant="outline" className="h-8 w-full" onClick={() => setStep("email")}>
                Continue with email
              </Button>
              <Button variant="outline" className="h-8 w-full">
                Continue with SAML SSO
              </Button>
              <Button variant="outline" className="h-8 w-full">
                Log in with passkey
              </Button>
              <Button variant="outline" className="h-8 w-full">
                Use backup code
              </Button>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} noValidate className="mt-8 space-y-3">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="auth-12-email">Email</FieldLabel>
                <Input
                  id="auth-12-email"
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
                }}
              >
                <ArrowLeftIcon aria-hidden="true" />
                All sign-in options
              </Button>
            </form>
          )}

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

      <div className="bg-background relative hidden overflow-hidden border-l lg:block">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] opacity-60 [background-size:96px_96px]"
        />
        <div aria-hidden="true" className="absolute inset-0">
          {GHOST_BRANDS.map((brand) => (
            <span
              key={brand.name}
              className={cn("text-foreground absolute opacity-[0.14]", brand.className)}
            >
              {brand.node}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-10">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((star) => (
              <StarIcon key={star} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-6 max-w-[400px] text-center text-xl font-semibold leading-snug tracking-tight">
            “ReUI gave us a cleaner starting point, so the product felt polished much earlier in the
            sprint.”
          </blockquote>
          <div className="mt-7 flex items-center gap-2.5">
            <Avatar className="size-9">
              <AvatarFallback className="bg-gradient-to-br from-rose-300 to-rose-700 text-[11px] font-semibold text-white">
                MP
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-medium">
                Mina Park
                <BadgeCheckIcon className="text-muted-foreground size-3.5" aria-hidden="true" />
              </p>
              <p className="text-muted-foreground text-xs">Product Design Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth12Block
