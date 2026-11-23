export interface LabelRow {
  id: string
  name: string
  color: string
}

export const LABEL_COLORS = [
  "#8b5cf6",
  "#f97316",
  "#ef4444",
  "#10b981",
  "#0ea5e9",
  "#22c55e",
  "#ec4899",
  "#6366f1",
]

export const INITIAL_LABELS: LabelRow[] = [
  { id: "l-1", name: "Customer impact", color: LABEL_COLORS[0]! },
  { id: "l-2", name: "Engineering", color: LABEL_COLORS[1]! },
  { id: "l-3", name: "Release risk", color: LABEL_COLORS[2]! },
  { id: "l-4", name: "Growth", color: LABEL_COLORS[3]! },
  { id: "l-5", name: "Documentation", color: LABEL_COLORS[4]! },
  { id: "l-6", name: "Support", color: LABEL_COLORS[5]! },
  { id: "l-7", name: "UX polish", color: LABEL_COLORS[6]! },
  { id: "l-8", name: "Operations", color: LABEL_COLORS[7]! },
]
