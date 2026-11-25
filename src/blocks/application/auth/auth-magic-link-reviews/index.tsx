import { useState } from "react"
import { ArrowRightIcon, StarIcon } from "lucide-react"
import { RiAppleFill, RiGithubFill } from "@remixicon/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Slack } from "@/components/ui/svgs/slack"
import { Supabase } from "@/components/ui/svgs/supabase"

const BRANDS = [
  { name: "OpenAI", node: <span className="text-xs font-semibold tracking-tight">OpenAI</span> },
  { name: "stripe", node: <span className="text-lg font-bold tracking-tight text-[#635bff] lowercase">stripe</span> },
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

function ReuiMark() {
  return (
    <span className="border-border bg-card text-foreground flex size-9 items-center justify-center rounded-[10px] border shadow-xs">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
        <path
          d="M8 6v6a4 4 0 0 0 8 0V6"
          className="fill-none stroke-foreground"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
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

function Sidebar() {
  return (
    <div className="bg-muted/30 relative hidden overflow-hidden border-l lg:flex lg:flex-col">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-10">
        <div className="flex gap-1" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((star) => (
            <StarIcon key={star} className="fill-foreground size-4" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-7 max-w-[440px] text-center text-[26px] leading-snug font-semibold tracking-tight">
          “The best login pages disappear. This one already feels fast.”
        </blockquote>
        <div className="mt-7 flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"
              alt=""
            />
            <AvatarFallback className="text-xs">SB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Sean Bold</p>
            <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
              Co-founder <span aria-hidden="true">•</span> ReUI
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-10 pb-10">
        <p className="text-sm font-medium">Trusted by leading teams</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="text-foreground/90 flex items-center">
              {brand.node}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AuthMagicLinkReviewsBlock() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return setError("Enter your work email.")
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid work email address.")
    setError(null)
    setSubmitted(true)
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-[356px]">
          <ReuiMark />
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Sign in</h1>
          <p className="text-muted-foreground mt-2 text-[15px]">Enter your work email to get a magic link.</p>

          <form onSubmit={handleSubmit} noValidate className="mt-7">
            <Field data-invalid={error ? true : undefined}>
              <FieldLabel htmlFor="auth-3-email">Work email</FieldLabel>
              <Input
                id="auth-3-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                className="h-9"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error ? true : undefined}
              />
              {error ? (
                <FieldError>{error}</FieldError>
              ) : (
                <FieldDescription>Your magic link stays active for 15 minutes.</FieldDescription>
              )}
            </Field>

            <Button type="submit" className="mt-4 h-9 w-full gap-2" disabled={submitted}>
              Send magic link
              <ArrowRightIcon />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
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
        </div>
      </div>

      <Sidebar />
    </div>
  )
}

export default AuthMagicLinkReviewsBlock
