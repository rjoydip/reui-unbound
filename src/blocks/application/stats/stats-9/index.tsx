import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const COLUMNS = [
  { label: "Backlog", value: 28, tone: "text-emerald-600" },
  { label: "In Progress", value: 14, tone: "text-amber-500" },
  { label: "In Review", value: 8, tone: "text-violet-600" },
]

export function Stats9Block() {
  return (
    <div className="bg-background text-foreground flex min-h-svh justify-center p-8">
      <div className="bg-card h-fit w-[444px] rounded-xl border p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Tasks Overview</p>
          <Select defaultValue="This Month">
            <SelectTrigger size="sm" className="ml-auto w-32"><SelectValue /></SelectTrigger>
            <SelectContent>{["This Month", "Last Month", "This Quarter"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
          </Select>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm"><span>Tasks Done</span><span className="text-muted-foreground text-xs">12</span></div>
          <div className="bg-muted mt-2 h-2 overflow-hidden rounded-full"><div className="bg-foreground h-full w-[65%] rounded-full" /></div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {COLUMNS.map((column) => (
            <div key={column.label} className="bg-muted/40 rounded-lg px-2 py-4">
              <p className={`text-2xl font-semibold ${column.tone}`}>{column.value}</p>
              <p className="mt-1 text-sm">{column.label}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-6 text-center text-xs">AI prediction to finish all tasks: <span className="text-foreground font-medium">1w 4d 2h</span></p>
      </div>
    </div>
  )
}

export default Stats9Block
