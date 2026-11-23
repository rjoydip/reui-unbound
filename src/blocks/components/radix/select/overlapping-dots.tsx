"use client"

import { useState } from "react"
import { Badge } from "@/components/kit/badge"

import { cn } from "cn"
import { Field } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const statuses = [
  { value: "ready", label: "Ready", color: "bg-emerald-400" },
  { value: "error", label: "Error", color: "bg-red-500" },
  { value: "building", label: "Building", color: "bg-amber-500" },
  { value: "queued", label: "Queued", color: "bg-blue-500" },
  { value: "initializing", label: "Initializing", color: "bg-primary" },
  { value: "canceled", label: "Canceled", color: "bg-fuchsia-500" },
]

export default function Pattern() {
  // Radix Select is single-select; Base UI multi mode has no equivalent.
  const [selected, setSelected] = useState(statuses[0].value)

  return (
    <Field className="max-w-xs">
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-full justify-between">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="min-w-48">
          <SelectGroup>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                <div className="flex items-center gap-2">
                  <div className={cn("size-2 rounded-full", status.color)} />
                  <span>{status.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}