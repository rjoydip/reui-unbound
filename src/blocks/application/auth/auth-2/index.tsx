import { useEffect, useState } from "react"
import { EyeIcon, EyeOffIcon, StarIcon } from "lucide-react"
import { RiAppleFill, RiGithubFill } from "@remixicon/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { cn } from "cn"

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80",
]

const TESTIMONIALS = [
  {
    quote: [
      "ReUI helped us turn a rough dashboard sketch into a shipped portal in one focused week.",
      "The structure was ready. We tuned copy and made it feel like our product.",
    ],
    name: "Mira Chen",
    role: "Founder at AtlasForge",
    initials: "MC",
  },
  {
    quote: [
      "The auth and settings patterns gave our team shared language fast.",
      "We stopped debating screen basics and got back to the workflow.",
    ],
    name: "Jonah Price",
    role: "Product Lead at NimbleStack",
    initials: "JP",
  },
  {
    quote: [
      "Labels, states, keyboard paths, spacing. The responsive behavior was already handled.",
      "The copy was close enough that we avoided a launch rewrite.",
    ],
    name: "Elena Marquez",
    role: "Design Lead at Northstar Labs",
    initials: "EM",
  },
  {
    quote: ["It gave us a calm first touch before the real work begins.", "Every screen matched the product we intended to ship."],
    name: "Priya Nair",
    role: "Staff Engineer at Orbit Labs",
    initials: "PN",
  },
]

function ReuiMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("fill-white", className)}>
      <rect width="32" height="32" rx="9" />
      <path d="M11 8.5v8a5 5 0 0 0 10 0v-8" className="fill-none stroke-zinc-950" strokeWidth="3.4" strokeLinecap="round" />
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

function Testimonial({ item, className }: { item: (typeof TESTIMONIALS)[number]; className?: string }) {
  const index = TESTIMONIALS.indexOf(item)
  return (
    <figure className={cn("bg-background text-foreground border-border rounded-xl border p-7 shadow-2xl", className)}>
      <blockquote className="text-sm leading-relaxed">
        {item.quote.map((paragraph) => (
          <p key={paragraph} className="mt-3 first:mt-0">{paragraph}</p>
        ))}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarImage src={AVATARS[index % AVATARS.length]} alt="" />
          <AvatarFallback className="text-xs">{item.initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-muted-foreground text-xs">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

function TrustRating() {
  return (
    <div className="relative z-10 mt-8 hidden flex-col items-center text-center lg:flex">
      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium text-zinc-100">Excellent</span>
        <span className="flex gap-0.5" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((star) => (
            <StarIcon key={star} className="size-4 fill-emerald-500 text-emerald-500" aria-hidden="true" />
          ))}
        </span>
        <span className="text-zinc-400">by</span>
        <span className="flex items-center gap-1 font-semibold text-zinc-100">
          <StarIcon className="size-4 fill-emerald-500 text-emerald-500" aria-hidden="true" />
          Trustpilot
        </span>
      </div>
      <p className="mt-4 text-sm text-zinc-300">Trusted by 14,800+ founders building production software.</p>
    </div>
  )
}

export function Auth2Block() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % TESTIMONIALS.length), 5000)
    return () => window.clearInterval(timer)
  }, [])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return setError("Enter your email or username.")
    if (!password) return setError("Enter your password.")
    setError(null)
    setSubmitted(true)
  }

  const previous = TESTIMONIALS[(active + TESTIMONIALS.length - 1) % TESTIMONIALS.length]
  const next = TESTIMONIALS[(active + 1) % TESTIMONIALS.length]

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <section className="relative flex flex-col items-center overflow-hidden bg-zinc-950 px-8 py-14 text-zinc-100">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_25%,rgba(126,34,206,0.55),transparent_65%),radial-gradient(60%_50%_at_10%_10%,rgba(14,116,144,0.35),transparent_70%)]" />
        <div aria-hidden="true" className="absolute top-[38%] -right-1/4 size-[800px] rounded-[50%] border-[40px] border-fuchsia-500/20 blur-md" />
        <div className="relative z-10 flex items-center gap-2">
          <ReuiMark className="size-8" />
          <span className="text-base font-semibold">ReUI</span>
        </div>
        <h1 className="relative z-10 mt-9 text-center text-[42px] leading-none font-semibold tracking-tight">
          Access With Trust
        </h1>
        <p className="relative z-10 mt-5 max-w-[520px] text-center text-[15px] leading-relaxed text-zinc-300">
          Give teams a calm, confident first touch before work begins.
          <br />
          Secure access, backed by trusted proof.
        </p>

        <div className="relative mt-10 hidden w-full max-w-[760px] items-center justify-center lg:flex">
          <Testimonial item={previous} className="pointer-events-none absolute left-0 w-[330px] opacity-40 blur-[0.5px]" />
          <Testimonial item={TESTIMONIALS[active]} className="relative z-10 w-[376px]" />
          <Testimonial item={next} className="pointer-events-none absolute right-0 w-[330px] opacity-40 blur-[0.5px]" />
        </div>

        <div className="relative z-10 mt-6 hidden items-center gap-1.5 lg:flex">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show quote ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                index === active ? "bg-zinc-100" : "bg-zinc-600 hover:bg-zinc-400"
              )}
            />
          ))}
        </div>

        <TrustRating />
      </section>

      <section className="flex flex-col px-6 py-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-[420px]">
            <h2 className="text-center text-2xl font-semibold tracking-tight">Welcome back</h2>
            <p className="text-muted-foreground mt-1.5 text-center text-sm">
              Sign in with your workspace credentials.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-3.5">
              <Field data-invalid={error ? true : undefined}>
                <FieldLabel htmlFor="auth-2-email">Email or username</FieldLabel>
                <Input
                  id="auth-2-email"
                  name="email"
                  autoComplete="username"
                  placeholder="Email or username"
                  className="h-9"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={error ? true : undefined}
                />
              </Field>

              <Field data-invalid={error ? true : undefined}>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="auth-2-password">Password</FieldLabel>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-[13px] transition-colors">
                    Forgot password?
                  </a>
                </div>
                <InputGroup className="h-9">
                  <InputGroupInput
                    id="auth-2-password"
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

            <div className="grid grid-cols-3 gap-2.5">
              <Button variant="outline" className="h-9 gap-2">
                <GoogleIcon className="size-4" />
                Google
              </Button>
              <Button variant="outline" className="h-9 gap-2">
                <RiAppleFill className="size-4" aria-hidden="true" />
                Apple
              </Button>
              <Button variant="outline" className="h-9 gap-2">
                <RiGithubFill className="size-4" aria-hidden="true" />
                GitHub
              </Button>
            </div>

            <p className="text-muted-foreground mt-6 text-center text-[13px]">
              Need an account?{" "}
              <a href="#" className="text-foreground font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <footer className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-10 text-[13px]">
          <span>© 2026 ReUI</span>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Help
          </a>
        </footer>
      </section>
    </div>
  )
}

export default Auth2Block
