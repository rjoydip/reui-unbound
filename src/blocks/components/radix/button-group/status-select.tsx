import { cn } from "cn"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

const statuses = [
  { value: "1", label: "In Progress", color: "bg-violet-500" },
  { value: "2", label: "Completed", color: "bg-green-500" },
  { value: "3", label: "Pending", color: "bg-primary" },
  { value: "4", label: "Cancelled", color: "bg-yellow-500" },
  { value: "5", label: "Rejected", color: "bg-destructive" },
]

export default function Pattern() {
  return (
    <ButtonGroup className="max-w-xs">
      <Select defaultValue={statuses[1].value}>
        <SelectTrigger className="min-w-36">
          <span className="flex items-center gap-2">
            <span className={cn("size-1.5 rounded-full", statuses[1].color)} />
            <span>{statuses[1].label}</span>
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                <span className="flex items-center gap-2">
                  <span className={cn("size-1.5 rounded-full", status.color)} />
                  <span>{status.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input placeholder="Search tasks..." />
    </ButtonGroup>
  )
}