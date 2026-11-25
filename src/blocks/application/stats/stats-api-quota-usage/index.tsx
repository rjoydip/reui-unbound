import { Button } from "@/components/ui/button"

export function StatsApiQuotaUsageBlock() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">API Call Quota</p>
          <Button variant="outline" size="sm" className="ml-auto">View API usage</Button>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Used calls: <span className="text-foreground font-medium">2000</span></span>
          <span className="font-medium">$4.00</span>
        </div>
        <div className="bg-muted mt-2 h-2 overflow-hidden rounded-full"><div className="bg-foreground h-full w-[40%] rounded-full" /></div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="font-medium text-emerald-600">3000 free calls left</span>
          <span className="text-muted-foreground">of 5000 monthly quota</span>
        </div>

        <div className="border-muted-foreground/30 mt-4 flex items-center justify-between rounded-md border border-dashed px-3 py-2 text-sm">
          <span className="text-muted-foreground">Quota renews on</span>
          <span className="font-medium">September 1, 2025</span>
        </div>
      </div>
    </div>
  )
}

export default StatsApiQuotaUsageBlock
