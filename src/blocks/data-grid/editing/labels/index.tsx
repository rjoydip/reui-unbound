import { useState } from "react"
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVerticalIcon, PencilIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "cn"

import { INITIAL_LABELS, LABEL_COLORS } from "./data"
import type { LabelRow } from "./data"

function SortableLabel({
  label,
  onEdit,
  onDelete,
}: {
  label: LabelRow
  onEdit: () => void
  onDelete: () => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: label.id })

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        "bg-background flex items-center gap-2 rounded-lg border px-3 py-2.5 shadow-xs",
        isDragging && "relative z-10 opacity-80 shadow-md",
      )}
    >
      <button
        type="button"
        className="text-muted-foreground hover:text-foreground cursor-grab touch-none rounded p-0.5 active:cursor-grabbing"
        aria-label={`Reorder ${label.name}`}
        {...attributes}
        {...listeners}
      >
        <GripVerticalIcon className="size-4" />
      </button>
      <span
        className="size-3 rotate-45 rounded-[3px]"
        style={{ backgroundColor: label.color }}
      />
      <span className="flex-1 text-sm font-medium">{label.name}</span>
      <Button variant="ghost" size="icon-sm" aria-label={`Edit ${label.name}`} onClick={onEdit}>
        <PencilIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label={`Delete ${label.name}`} onClick={onDelete}>
        <Trash2Icon />
      </Button>
    </div>
  )
}

export function LabelManagerBlock() {
  const [labels, setLabels] = useState(INITIAL_LABELS)
  const [editing, setEditing] = useState<LabelRow | null>(null)
  const [adding, setAdding] = useState(false)
  const [draftName, setDraftName] = useState("")
  const [draftColor, setDraftColor] = useState(LABEL_COLORS[0]!)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = labels.findIndex((label) => label.id === active.id)
    const newIndex = labels.findIndex((label) => label.id === over.id)
    if (oldIndex < 0 || newIndex < 0) return
    setLabels(arrayMove(labels, oldIndex, newIndex))
  }

  function openNew() {
    setDraftName("")
    setDraftColor(LABEL_COLORS[labels.length % LABEL_COLORS.length]!)
    setAdding(true)
  }

  function openEdit(label: LabelRow) {
    setDraftName(label.name)
    setDraftColor(label.color)
    setEditing(label)
  }

  function save() {
    const name = draftName.trim()
    if (!name) return
    if (editing) {
      setLabels((current) =>
        current.map((label) =>
          label.id === editing.id ? { ...label, name, color: draftColor } : label,
        ),
      )
    }
    setEditing(null)
  }

  function addLabel() {
    const name = draftName.trim()
    if (!name) return
    setLabels((current) => [
      { id: `l-${Date.now()}`, name, color: draftColor },
      ...current,
    ])
    setAdding(false)
    setDraftName("")
  }

  return (
    <div className="min-h-svh bg-background p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-[830px] flex-col gap-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-base font-semibold">Labels</h1>
            <p className="text-muted-foreground text-sm">
              Structure and organize project labels.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={openNew}>
            <PlusIcon />
            Add label
          </Button>
        </div>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={labels.map((label) => label.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-2">
              {adding && (
                <div className="bg-muted/40 flex flex-wrap items-center gap-2 rounded-lg border px-3 py-2">
                  <button
                    type="button"
                    aria-label="Change color"
                    onClick={() => {
                      const index = LABEL_COLORS.indexOf(draftColor)
                      setDraftColor(LABEL_COLORS[(index + 1) % LABEL_COLORS.length]!)
                    }}
                    className="size-5 shrink-0 rounded-full border-2 border-background shadow-sm"
                    style={{ backgroundColor: draftColor }}
                  />
                  <Input
                    autoFocus
                    value={draftName}
                    onChange={(event) => setDraftName(event.target.value)}
                    placeholder="Label title"
                    className="h-8 min-w-40 flex-1 bg-background"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") addLabel()
                      if (event.key === "Escape") setAdding(false)
                    }}
                  />
                  <Button variant="outline" size="sm" onClick={() => setAdding(false)}>
                    Cancel
                  </Button>
                  <Button size="sm" onClick={addLabel}>
                    Add
                  </Button>
                </div>
              )}
              {labels.map((label) => (
                <SortableLabel
                  key={label.id}
                  label={label}
                  onEdit={() => openEdit(label)}
                  onDelete={() =>
                    setLabels((current) => current.filter((entry) => entry.id !== label.id))
                  }
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      <Dialog open={editing !== null} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit label</DialogTitle>
            <DialogDescription>
              Choose a name and a color for this project label.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <Input
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              placeholder="Label name"
              autoFocus
            />
            <div className="flex flex-wrap gap-2">
              {LABEL_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  aria-label={`Use ${color}`}
                  onClick={() => setDraftColor(color)}
                  className={cn(
                    "size-7 rotate-45 rounded-[4px] border-2 transition-transform",
                    draftColor === color
                      ? "scale-110 border-foreground"
                      : "border-transparent",
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button onClick={save}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LabelManagerBlock
