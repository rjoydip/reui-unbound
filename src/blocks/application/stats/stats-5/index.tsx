import { ArrowUpRightIcon, CreditCardIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const CURRENCIES = [
  { code: "USD", percent: 30, color: "bg-neutral-200" },
  { code: "GBP", percent: 20, color: "bg-indigo-400" },
  { code: "EUR", percent: 15, color: "bg-blue-500" },
  { code: "JPY", percent: 20, color: "bg-violet-500" },
  { code: "CNY", percent: 15, color: "bg-fuchsia-500" },
]

export function Stats5Block() {
  return (
    <div className="bg-background flex min-h-svh justify-center p-8">
      <div className="bg-neutral-950 text-white h-fit w-[444px] rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-sm text-white/70">Balance</p>
          <Button variant="secondary" size="sm" className="ml-auto bg-white/10 text-white hover:bg-white/20"><CreditCardIcon />Topup</Button>
        </div>
        <div className="mt-6 flex items-end gap-2">
          <span className="text-[28px] leading-none font-semibold">$10,976.95</span>
          <span className="flex items-center gap-0.5 text-sm text-emerald-400"><ArrowUpRightIcon className="size-3.5" />+5.7%</span>
        </div>
        <div className="mt-7 flex gap-1 border-t border-white/10 pt-4">
          {CURRENCIES.map((currency) => <span key={currency.code} className={`h-1.5 rounded-full ${currency.color}`} style={{ width: `${currency.percent}%` }} />)}
        </div>
        <div className="mt-2 grid grid-cols-5 gap-1.5">
          {CURRENCIES.map((currency) => (
            <div key={currency.code}>
              <p className="text-xs text-white/50">{currency.code}</p>
              <p className="text-sm font-medium">{currency.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats5Block
