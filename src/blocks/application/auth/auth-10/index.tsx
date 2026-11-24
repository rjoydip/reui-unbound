import { useState } from "react"
import { ArrowRightIcon, BotIcon, Share2Icon, StarIcon } from "lucide-react"
import { RiAppleFill, RiGithubFill } from "@remixicon/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Frame, FramePanel } from "@/components/kit/frame"
import { cn } from "cn"

const BRANDS = [
  { name: "Anthropic", node: <span className="text-[11px] font-semibold tracking-[0.12em] uppercase">{"ANTHROP\\C"}</span> },
  {
    name: "converx",
    node: (
      <span className="flex items-center gap-1.5">
        <span className="size-3 rounded-full border-2 border-rose-500" aria-hidden="true" />
        <span className="text-sm font-semibold lowercase">converx</span>
      </span>
    ),
  },
  {
    name: "n8n",
    node: (
      <span className="flex items-center gap-1">
        <Share2Icon className="size-3.5 text-rose-400" aria-hidden="true" />
        <span className="text-sm font-semibold">n8n</span>
      </span>
    ),
  },
  { name: "NVIDIA", node: <span className="text-[13px] font-bold tracking-tight text-[#76b900]">NVIDIA</span> },
  { name: "Resend", node: <span className="text-sm font-semibold tracking-tight">Resend</span> },
  {
    name: "mintlify",
    node: (
      <span className="flex items-center gap-1">
        <span className="size-3 rounded-sm bg-emerald-500" aria-hidden="true" />
        <span className="text-sm font-semibold lowercase">mintlify</span>
      </span>
    ),
  },
]

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

function SidebarFrame() {
  return (
    <Frame variant="ghost" spacing="lg" className="w-full max-w-[520px] bg-transparent p-0 lg:h-[calc(100svh-3rem)] [--frame-px:0px]">
      <FramePanel className="border-border flex flex-col justify-between border px-10">
        <div className="flex flex-1 flex-col items-center justify-center py-8">
          <div className="flex gap-1" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((star) => (
              <StarIcon key={star} className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-6 max-w-[360px] text-center text-[22px] leading-snug font-semibold tracking-tight">
            “ReUI gave our team a sharper starting point, so the first login pass already felt ready to
            ship.”
          </blockquote>
          <div className="mt-6 flex items-center gap-2.5">
            <Avatar className="size-9">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"
                alt=""
              />
              <AvatarFallback className="text-xs">MA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Mina Alvarez</p>
              <p className="text-muted-foreground flex items-center gap-1.5 text-xs">
                Head of Product Design
                <BotIcon className="size-3" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-y-8 pb-8">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="text-foreground/90 flex items-center justify-center">
              {brand.node}
            </div>
          ))}
        </div>
      </FramePanel>
    </Frame>
  )
}

export function Auth10Block() {
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
    <div className="bg-muted/30 relative grid min-h-svh lg:grid-cols-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--border) 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-[350px]">
          <ReuiMark className="size-9" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Sign in</h1>

          <form onSubmit={handleSubmit} noValidate className="mt-7">
            <Field data-invalid={error ? true : undefined}>
              <FieldLabel htmlFor="auth-10-email">Work email</FieldLabel>
              <Input
                id="auth-10-email"
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
                <FieldDescription>Your sign-in link stays active for 15 minutes.</FieldDescription>
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

      <div className="relative hidden items-center justify-end p-6 lg:flex">
        <SidebarFrame />
      </div>
    </div>
  )
}

export default Auth10Block
