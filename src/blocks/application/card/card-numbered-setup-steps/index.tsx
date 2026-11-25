const STEPS = [
  {
    number: "0.1",
    title: "Plan Setup",
    description: "Define goals and gather the essentials before starting.",
  },
  {
    number: "0.2",
    title: "Configuration",
    description: "Adjust key settings to match your project needs.",
  },
  {
    number: "0.3",
    title: "Integration",
    description: "Connect services and verify everything is running smoothly.",
  },
  {
    number: "0.4",
    title: "Launch & Monitor",
    description: "Go live and keep track of performance metrics.",
  },
]

export function CardNumberedSetupStepsBlock() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-4 sm:p-6">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="flex min-h-52 flex-col bg-card p-5"
          >
            <span className="text-[13px] tabular-nums text-muted-foreground">
              {step.number}
            </span>
            <div className="mt-auto pt-8">
              <a
                href="#"
                className="block text-[15px] font-medium leading-snug outline-none hover:underline focus-visible:underline"
              >
                {step.title}
              </a>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardNumberedSetupStepsBlock
