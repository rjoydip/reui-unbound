const NOTICES = [
  {
    label: "Reminder!",
    description: "Renewal coming up in 3 days on February 28th",
  },
  {
    label: "Tip!",
    description: "Try dark mode for better night viewing",
  },
  {
    label: "Update!",
    description: "New features added to your dashboard",
  },
  {
    label: "Alert!",
    description: "Renewal is coming up in 3 days on May 28th",
  },
]

export function Card11Block() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {NOTICES.map((notice) => (
          <div
            key={notice.label}
            className="relative min-h-28 overflow-hidden rounded-xl border bg-card p-4 transition-colors hover:bg-muted/20"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] opacity-70 [background-size:7px_7px] dark:opacity-40"
              style={{
                maskImage:
                  "linear-gradient(to bottom left, black 5%, transparent 70%)",
              }}
            />
            <p className="relative text-[13px]">{notice.label}</p>
            <p className="relative mt-4 text-[15px] leading-snug">
              {notice.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card11Block
