# reui-unbound

Open-source, AI-assisted implementations of advanced UI components and blocks inspired by [ReUI](https://reui.io/). Built from scratch using modern React, TypeScript, and Tailwind CSS to replicate and extend PRO and ULTIMATE tier functionality without proprietary dependencies.

> **Disclaimer:** This is an independent, community-driven project. It does not redistribute proprietary source code; all components are clean-room implementations generated and refined from public visual references.

---

## ✨ Features

- **Clean-Room Implementations:** Built from scratch using standard open-source primitives (Radix UI / Base UI, Tailwind CSS, Lucide Icons).
- **Copy-Paste Ready:** Designed to drop directly into existing Next.js or Vite + React projects.
- **Type-Safe:** Strict TypeScript definitions with composable prop interfaces.
- **Accessible:** Keyboard navigation, ARIA attributes, and focus management baked in.
- **61 Data Grid Blocks:** Grouping, filtering, editing, expansion, drag & drop, columns and virtualization demos.
- **87 Component Categories:** 110 Radix/Base and shadcn/ui previews with searchable navigation.
- **Markdown Docs:** Generated docs for every block and component.

---

## 🛠️ Tech Stack

- **Framework:** React 19 / Vite
- **Styling:** Tailwind CSS v4
- **Primitives:** Radix UI / Base UI
- **Icons:** Lucide React
- **Runtime:** Bun 1.4.5

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/rjoydip/reui-unbound.git
cd reui-unbound
```

### 2. Install dependencies

Requires Bun 1.4.5 (see `.bun-version`).

```bash
bun install
```

### 3. Run the local showcase / dev server

```bash
bun run dev
```

### 4. Using a component in your project

Copy the target component from `src/components/reui-unbound/` into your own codebase and install any required peer dependencies listed at the top of the file:

```bash
# Example peer dependencies
bunx --bun shadcn@latest add button dialog popover
bun add lucide-react
```

---

## 📚 Documentation

Generated documentation lives in `docs/`:

- [Blocks](docs/blocks/README.md) — 61 data-grid blocks.
- [Components](docs/components/README.md) — 87 component categories and 110 previews.

Each page includes the live preview link, install command, source files, dependencies and usage.
The same Markdown files are rendered inside the app under **Docs**, using
react-markdown with GitHub-flavored Markdown and build-time syntax highlighting.

```bash
bun run docs:generate
```

---

## 📊 Component Status Tracker

| Category | Component / Block | Tier Target | Status | Notes |
| :--- | :--- | :---: | :---: | :--- |
| **Data Display** | Advanced Data Grid | PRO | 🟢 Ready | Supports sorting, filtering, & column pinning |
| **Data Display** | Customer Balances (`data-grid-base-1`) | PRO | 🟢 Ready | Search, status filter, sorting, bulk actions, CSV export, view/edit sheets, delete with Undo |
| **Data Display** | Invoice Manager (`data-grid-advanced-21`) | PRO | 🟢 Ready | Grouped receivables, collection timeline, expected pay days, customer sheet, CSV export |
| **Data Display** | Lead Scoring Contacts (`data-grid-base-2`) | PRO | 🟢 Ready | Score bars, engagement trends, pinned rows, AND/OR filters, CRUD sheets |
| **Data Display** | Deal Pipeline (`data-grid-base-3`) | PRO | 🟢 Ready | Pinned deals, faceted filters, progress rings, alert tooltips |
| **Data Display** | Weekly Timesheet (`data-grid-base-4`) | PRO | 🟢 Ready | Per-day hours, work-kind bars, coverage totals, week picker |
| **Data Display** | Support Tickets (`data-grid-base-5`) | PRO | 🟢 Ready | SLA countdown, queue/status filters, bulk owner assignment, close dialog |
| **Data Display** | Team Members (`data-grid-base-6`) | PRO | 🟢 Ready | Avatar rows, role/billing/auth filters, hover actions |
| **Data Display** | Project Modules (`data-grid-base-7`) | PRO | 🟢 Ready | Progress rings, date windows, favorites, sort and status filters |
| **Data Display** | Cloud Rate Card (`data-grid-base-8`) | PRO | 🟢 Ready | Add/edit/duplicate with Undo, commit usage, totals footer, density popover |
| **Data Display** | API Request Logs (`data-grid-base-9`) | PRO | 🟢 Ready | Status volume chart with zoom, release markers, request sheet and replay |
| **Data Display** | Kanban Board | ULTIMATE | 🟡 In Progress | Drag-and-drop state sync pending |
| **Navigation** | Command Palette (`Cmd+K`) | PRO | 🟢 Ready | Fuzzy search + keyboard shortcuts |
| **Navigation** | Multi-Tenant Sidebar | PRO | ⚪ Planned | — |
| **Forms** | Multi-Step Wizard | PRO | 🟢 Ready | Zod validation integrated |
| **Forms** | Rich Tag / Mentions Input | ULTIMATE | ⚪ Planned | — |
| **Overlays** | Nested Drawer / Sheet | PRO | 🟡 In Progress | Mobile gesture refinements |
| **Dashboards** | Analytics Overview Block | ULTIMATE | ⚪ Planned | — |

**Legend:** `🟢 Ready` · `🟡 In Progress` · `⚪ Planned`

---

## 🏗️ Architecture Notes

### Directory Structure

```text
src/
├── components/
│   ├── ui/              # Base primitives (shadcn/ui compatible)
│   └── reui/            # Reconstructed PRO & ULTIMATE components
│       ├── data-grid/
│       ├── command/
│       └── wizard/
├── blocks/              # Full page blocks, one folder per block
│   └── data-grid-base-1/
├── hooks/               # Reusable state, keyboard, and media hooks
├── lib/                 # Utility functions (cn, formatters, etc.)
└── app/                 # Interactive documentation & live previews
```

### Design Principles

1. **Zero Lock-In:** Components avoid heavy custom abstractions. Everything relies on utility classes (`cn` + `tailwind-merge`) so styling overrides work predictably.
2. **Compound Component Pattern:** Complex blocks (like the Data Grid and Multi-Step Wizard) expose composable sub-components rather than monolithic config props, making customization straightforward.
3. **AI-Assisted Workflow:** Each component is scaffolded by analyzing layout structure, state transitions, and responsive breakpoints, followed by manual refactoring for accessibility, edge-case handling, and bundle efficiency.

---

## 📦 Registry

The project exposes its blocks and components as a [shadcn registry](https://ui.shadcn.com/docs/registry).

- `registry.json` is the registry entry point. It composes the source registries with `include`:
  - `src/blocks/registry.json` — 61 `registry:block` items
  - `src/components/reui-unbound/registry.json` — ReUI components and the shared icon placeholder
  - `src/components/reui-unbound/base/registry.json` — Base-flavor ReUI components and primitives
  - `src/hooks/registry.json` — hooks
- Blocks use `registryDependencies` for UI/ReUI components instead of bundling duplicate copies, and `dependencies` for npm packages.
- Every source file is owned by exactly one registry item, and every item install `target` is unique. The generator enforces both checks.

Commands:

```bash
bun run registry:generate   # regenerate registry manifests from source
bun run registry:verify     # validate the generated public/r payloads
bun run registry:build      # generate + shadcn build + verify -> public/r
```

`predev` and `prebuild` run `registry:build` automatically. Generated payloads in `public/r` are ignored by git and served at `/r/[name].json`. The `@reui-unbound` namespace is configured in `components.json`:

```bash
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-1
```

---

## 🤝 Contributing

Contributions, bug reports, and new component reconstructions are welcome:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/component-name`).
3. Ensure TypeScript checks and linting pass (`bun run lint && bun run typecheck`).
4. Open a Pull Request with a brief demo GIF or screenshot.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.
