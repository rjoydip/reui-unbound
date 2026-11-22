export type DriveKind = "Folder" | "PDF" | "Doc" | "Image" | "Sheet" | "JSON"

export interface DriveNode {
  id: string
  parentId: string | null
  name: string
  kind: DriveKind
  size: string
  count?: string
  owner: string
  modified: string
  relative: string
}

const node = (
  id: string,
  parentId: string | null,
  name: string,
  kind: DriveKind,
  size: string,
  owner: string,
  modified: string,
  relative: string,
  count?: string,
): DriveNode => ({ id, parentId, name, kind, size, count, owner, modified, relative })

export const DRIVE_NODES: DriveNode[] = [
  node("d-1", null, "Product Design", "Folder", "200.1 MB", "Mira Stone", "Jul 23, 2026", "Yesterday", "13 items"),
  node("d-2", null, "Design System", "Folder", "9.68 MB", "Mira Stone", "Jul 22, 2026", "2 days ago", "7 items"),
  node("d-2-1", "d-2", "Components", "Folder", "8.32 MB", "Leo Grant", "Jul 22, 2026", "2 days ago", "3 items"),
  node("d-2-1-1", "d-2-1", "Button Specs.pdf", "PDF", "4.59 MB", "Leo Grant", "Jul 22, 2026", "2 days ago"),
  node("d-2-1-2", "d-2-1", "Form Patterns.pdf", "PDF", "2.96 MB", "Mira Stone", "Jul 18, 2026", "Last week"),
  node("d-2-1-3", "d-2-1", "Component Audit.xlsx", "Sheet", "793.0 KB", "Nora Vale", "Jul 9, 2026", "2 weeks ago"),
  node("d-2-2", "d-2", "Foundations", "Folder", "1.35 MB", "Theo Park", "Jul 21, 2026", "3 days ago", "2 items"),
  node("d-2-2-1", "d-2-2", "Color Tokens.json", "JSON", "47.0 KB", "Theo Park", "Jul 21, 2026", "3 days ago"),
  node("d-3", null, "Marketing Site", "Folder", "188.0 MB", "Sana Qureshi", "Jul 23, 2026", "Yesterday", "3 items"),
  node("d-3-1", "d-3", "Homepage Hero.png", "Image", "8.6 MB", "Sana Qureshi", "Jul 20, 2026", "3 days ago"),
  node("d-4", null, "Design Review.pdf", "PDF", "2.35 MB", "Mira Stone", "Jul 17, 2026", "Last week"),
  node("d-5", null, "Engineering", "Folder", "7.37 MB", "Elijah Morgan", "Jul 23, 2026", "Yesterday", "10 items"),
  node("d-5-1", "d-5", "Architecture.md", "Doc", "240 KB", "Elijah Morgan", "Jul 21, 2026", "2 days ago"),
  node("d-6", null, "Brand Assets", "Folder", "763.2 MB", "Sana Qureshi", "Jul 14, 2026", "Last week", "7 items"),
  node("d-6-1", "d-6", "Logo Pack.zip", "Doc", "42.8 MB", "Sana Qureshi", "Jul 13, 2026", "Last week"),
  node("d-7", null, "Finance", "Folder", "10.5 MB", "Nora Vale", "Jul 22, 2026", "2 days ago", "7 items"),
  node("d-7-1", "d-7", "FY26 Forecast.sheet", "Sheet", "2.1 MB", "Nora Vale", "Jul 22, 2026", "2 days ago"),
  node("d-8", null, "Operations", "Folder", "83.1 MB", "Priya Patel", "Jul 23, 2026", "Yesterday", "4 items"),
  node("d-8-1", "d-8", "Vendor List.sheet", "Sheet", "680 KB", "Priya Patel", "Jul 21, 2026", "2 days ago"),
  node("d-9", null, "Company Handbook.pdf", "PDF", "5.50 MB", "Leo Grant", "Jul 12, 2026", "2 weeks ago"),
]

export const INITIAL_ORDER = DRIVE_NODES.map((entry) => entry.id)
