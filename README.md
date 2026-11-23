# reui-unbound

Open-source, AI-assisted implementations of advanced UI components and blocks inspired by [ReUI](https://reui.io/). Built from scratch using modern React, TypeScript, and Tailwind CSS to replicate and extend PRO and ULTIMATE tier functionality without proprietary dependencies.

> **Disclaimer:** This is an independent, community-driven project. It does not redistribute proprietary source code; all components are clean-room implementations generated and refined from public visual references.

---

## ✨ Features

- **Clean-Room Implementations:** Built from scratch using standard open-source primitives (Radix UI / Base UI, Tailwind CSS, Lucide Icons).
- **Copy-Paste Ready:** Designed to drop directly into existing Next.js or Vite + React projects.
- **Type-Safe:** Strict TypeScript definitions with composable prop interfaces.
- **Accessible:** Keyboard navigation, ARIA attributes, and focus management baked in.
- **61 Data Grid Blocks + 4 Application Shells:** Data-grid demos plus app shells from the reui.io Application catalog (Icon Rail Dashboard, Floating Sidebar Admin, Project Tracker Sidebar, Mail Inbox).
- **305 Captured Application Blocks:** Every block at <https://reui.io/blocks/application> captured (light, dark, interaction) under `captures/application`.
- **Catalogue-Style Navigation:** `/blocks` renders the blocks page with the 687-block group selector (Application, Data Grid, Charts, Solutions, AI & Agents, eCommerce, Marketing).
- **87 Component Categories:** 1,365 Radix/Base and shadcn/ui previews with searchable navigation and flavor filtering.
- **Composable Components:** Radix (shadcn) and Base UI flavors share one canonical implementation per module.
- **shadcn Registry:** 65 block items plus 1,265 component items — 1,406+ items / 1,600+ install targets served at `/r/*.json`.
- **npm Packages:** Per-component (radix/base) and per-block-category packages under `packages/registry`.
- **Markdown Docs:** Generated docs for every block and component, also rendered in-app under **Docs**.
- **Tested:** Bun unit tests and Playwright E2E coverage for every block and component.

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

Install any item straight from the registry (recommended):

```bash
bunx --bun shadcn@latest add @reui-unbound/avatar-standard
bunx --bun shadcn@latest add @reui-unbound/data-grid-base-1
```

Or copy the source from the repo and add the peer dependencies listed by the
docs page:

- Components: `src/components/kit/` (Radix flavor) and `src/components/kit/base/` (Base UI flavor), with shadcn primitives in `src/components/ui/`.
- Previews: `src/blocks/components/<flavor>/<component>/<variant>.tsx`.
- Blocks: `src/blocks/data-grid/<category>/<name>/`.

```bash
# Example peer dependencies
bunx --bun shadcn@latest add button dialog popover
bun add lucide-react
```

---

## 📚 Documentation

Generated documentation lives in `docs/`:

- [Blocks](docs/blocks/README.md) — 65 blocks: 61 data grid blocks across 9 categories and 4 application shells.
- [Components](docs/components/README.md) — 87 categories, 1,365 previews, Radix and Base flavors.

Each page includes the live preview link, install command, source files, dependencies and usage.
The same Markdown files are rendered inside the app under **Docs**, using
react-markdown with GitHub-flavored Markdown and build-time syntax highlighting.

```bash
bun run docs:generate
```

---

## 📊 Coverage

### Application blocks — 305 catalogued

All 305 blocks from <https://reui.io/blocks/application> are catalogued with light,
dark and interaction screenshots in `captures/application`. Implementations land
in batches; the first four App Shell blocks are live.

| Category | Blocks | Implemented |
| :--- | :---: | :--- |
| App Shell | 36 | Icon Rail Dashboard, Floating Sidebar Admin, Project Tracker Sidebar, Mail Inbox (4) |
| Auth, Card, Dashboard, Dialog, Empty State, Event Calendar, Flow, Form, Gantt, Kanban Board, List, Navbar, Onboarding, Profile, Rich Text Editor, Schedule, Settings, Sheet, Stats, Timeline, Whiteboard, Wizard | 269 | Queued |

### Data Grid blocks — 61

| Category | Blocks |
| :--- | :---: |
| Advanced | 21 |
| Base | 9 |
| Columns | 5 |
| Drag & Drop | 4 |
| Editing | 6 |
| Expansion | 3 |
| Filtering | 4 |
| Grouping | 7 |
| Virtualization | 2 |

Highlights: Customer Balances (`data-grid-base-1`), Invoice Manager (`data-grid-advanced-21`), Lead Scoring Contacts (`data-grid-base-2`), Deal Pipeline (`data-grid-base-3`), Support Tickets (`data-grid-base-5`), Cloud Rate Card (`data-grid-base-8`), API Request Logs (`data-grid-base-9`) — all with CSV export, faceted filters, bulk actions and detail sheets where applicable.

### Components — 87 categories

- **Radix/shadcn:** 87 categories, 1,265 previews.
- **Base UI:** 23 categories with dedicated Base-flavor previews.
- Catalog UI with search, flavor filter, hover previews and per-example install targets.

---

## 📸 Captures

`captures/application` is the clean-room reference set for the application blocks:

- `screenshots/<slug>-light.png`, `<slug>-dark.png`, `<slug>-interaction.png` — 915 images.
- `sources/<slug>.md` — the agent-facing block page from reui.io.
- `index.json` — title, category, source URL and interaction target per block.
- `README.md` — index table across all 23 categories.

Re-capture with:

```bash
node scripts/capture-preview.mjs   # Playwright bulk capture, resumable
```

---

## 🏗️ Architecture Notes

### Directory Structure

```text
src/
├── components/
│   ├── ui/                    # shadcn primitives (Radix)
│   ├── kit/                    # ReUI components (Radix flavor)
│   │   └── base/               # Base UI flavor + base/ui primitives
│   └── ~app/                   # App chrome and shell
├── blocks/
│   ├── application/<category>/<slug>/  # Application blocks (app shells, auth, cards…)
│   ├── data-grid/<category>/<name>/   # Demo blocks (index.tsx, data.ts, parts…)
│   ├── components/<flavor>/<component>/<variant>.tsx
│   ├── components/~catalog/    # Component catalogs
│   └── ~internal/registry.tsx  # Runtime catalog + raw source imports
├── hooks/                      # ReUI hooks
├── lib/                        # Utilities (cn, formatters…)
├── test/                       # Bun unit-test helpers
└── App.tsx
docs/                           # Generated Markdown docs
packages/registry/              # Generated npm packages
scripts/                        # Registry, docs and package generators
e2e/                            # Playwright specs
```

Internal implementation files inside component folders are prefixed `~`. Identical
cross-flavor modules have one canonical copy; base files import it.

### Design Principles

1. **Zero Lock-In:** Components avoid heavy custom abstractions. Everything relies on utility classes (`cn` + `tailwind-merge`) so styling overrides work predictably.
2. **Compound Component Pattern:** Complex blocks (like the Data Grid) expose composable sub-components rather than monolithic config props, making customization straightforward.
3. **One Source of Truth:** Every source file belongs to one registry item; there are no duplicate implementations across flavors.
4. **AI-Assisted Workflow:** Each component is scaffolded by analyzing layout structure, state transitions, and responsive breakpoints, followed by manual refactoring for accessibility, edge-case handling, and bundle efficiency.

---

## 📦 Registry

The project exposes its blocks and components as a [shadcn registry](https://ui.shadcn.com/docs/registry).

- `registry.json` is the registry entry point. It composes the source registries with `include`:
  - `src/blocks/registry.json` — 65 `registry:block` items (61 data grid + 4 application)
  - `src/blocks/components/registry.json` — 1,265 component preview items
  - `src/components/kit/registry.json` — ReUI components and the shared icon placeholder
  - `src/components/kit/base/registry.json` — Base-flavor ReUI components and primitives
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

## 📤 npm Packages

`packages/registry` mirrors ReUI's layout: one package per component, split by
**radix / base** flavor, plus one package per block category.

```text
packages/registry/
  components/radix/accordion/    # @reui-unbound/components-radix-accordion
  components/base/autocomplete/  # @reui-unbound/components-base-autocomplete
  blocks/advanced/               # @reui-unbound/data-grid-blocks-advanced
```

```bash
bun run packages:build                 # registry:build + generate all packages
bun run packages:build --version=0.2.0
bun run packages:publish:dry           # list publishable packages
bun run packages:publish               # publish all groups
bun run packages:publish --filter=accordion
```

Each package's `src/index.ts` is a lazy loader map over the registry sources, and
`prepublishOnly` builds `dist/` with Bun. See [`packages/registry/README.md`](packages/registry/README.md)
for details.

---

## 🧪 Testing

```bash
bun test src          # unit tests (catalog, source URLs)
bun run test:e2e      # Playwright, starts the dev server
```

The E2E suite covers the app shell, every block and every component preview.
Typecheck and lint must pass too:

```bash
bun run typecheck
bun run lint
bun run build
```

---

## 🤝 Contributing

Contributions, bug reports, and new component reconstructions are welcome:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/component-name`).
3. Ensure TypeScript checks and linting pass (`bun run lint && bun run typecheck`).
4. Update the registry/catalog and run `bun run docs:generate`; never hand-edit `docs/`.
5. Open a Pull Request with a brief demo GIF or screenshot.

Project skills live in `skills/` (`data-grid-block`, `registry`, `component-flavors`, `bun-cloudflare`).

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.
