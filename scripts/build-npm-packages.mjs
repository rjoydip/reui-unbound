/**
 * Builds npm packages grouped the way ReUI groups its registry:
 *
 *   packages/registry/bases/<base>/components/<component>/
 *   packages/registry/bases/radix/blocks/<category>/
 *
 * Each package contains the preview/block sources for that category plus a
 * generated `src/index.ts` lazy-loader map. Package names come from the group,
 * not from the folder:
 *
 *   @reui-unbound/components-radix-accordion
 *   @reui-unbound/components-base-autocomplete
 *   @reui-unbound/data-grid-blocks-advanced
 *
 * Run `bun run registry:build` first (writes `public/r`), then:
 *   bun run packages:build
 */
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const registryDir = path.join(root, "public", "r")
const outDir = path.join(root, "packages", "registry")
const rootPkg = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8"),
)

const args = process.argv.slice(2)
const versionArg = args.find((arg) => arg.startsWith("--version="))
const version =
  versionArg?.slice("--version=".length) || rootPkg.version || "0.0.0"

for (const stale of ["bases", "items", "components", "blocks"]) {
  fs.rmSync(path.join(outDir, stale), { recursive: true, force: true })
}
fs.mkdirSync(outDir, { recursive: true })

if (!fs.existsSync(path.join(registryDir, "registry.json"))) {
  console.error(
    "packages: public/r/registry.json is missing. Run `bun run registry:build` first.",
  )
  process.exit(1)
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8")
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function detail(name) {
  const file = path.join(registryDir, `${name}.json`)
  if (!fs.existsSync(file)) return null
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

function dependencyVersion(name) {
  return (
    rootPkg.dependencies?.[name] ?? rootPkg.devDependencies?.[name] ?? "*"
  )
}

function collectDependencies(entries) {
  const dependencies = {}
  for (const entry of entries) {
    const item = entry.detail
    if (!item) continue
    for (const name of item.dependencies ?? []) {
      dependencies[name] = dependencyVersion(name)
    }
  }
  return dependencies
}

function writePackage({
  dir,
  name,
  description,
  dependencies,
  index,
  liveUrl,
}) {
  fs.mkdirSync(path.join(dir, "src"), { recursive: true })
  fs.writeFileSync(path.join(dir, "src", "index.ts"), index)

  const tsconfigPath = path
    .relative(dir, path.join(root, "config", "tsconfig.app.json"))
    .replaceAll("\\", "/")

  const pkg = {
    name,
    version,
    private: false,
    type: "module",
    main: "./dist/index.js",
    module: "./dist/index.js",
    types: "./src/index.ts",
    sideEffects: false,
    files: ["src", "dist", "README.md"],
    exports: {
      ".": {
        types: "./src/index.ts",
        import: "./dist/index.js",
      },
    },
    dependencies,
    peerDependencies: {
      react: ">=18",
      "react-dom": ">=18",
    },
    scripts: {
      build:
        "bun build ./src/index.ts --outdir dist --format esm --splitting --packages external",
      prepublishOnly: "bun run build",
    },
    publishConfig: {
      access: "public",
    },
  }

  fs.writeFileSync(
    path.join(dir, "package.json"),
    JSON.stringify(pkg, null, 2) + "\n",
  )

  fs.writeFileSync(
    path.join(dir, "tsconfig.json"),
    `${JSON.stringify(
      {
        extends: tsconfigPath,
        compilerOptions: {
          noEmit: true,
        },
        include: ["src"],
      },
      null,
      2,
    )}\n`,
  )

  fs.writeFileSync(path.join(dir, ".gitignore"), "dist/\nnode_modules/\n")

  fs.writeFileSync(
    path.join(dir, "README.md"),
    `# ${name}

${description}

- Live preview: ${liveUrl}
- This package mirrors the ReUI registry layout: \`src/index.ts\` is a lazy
  loader map that imports the registry sources from the app's \`src/\` tree.
- shadcn install: \`bunx --bun shadcn@latest add @reui-unbound/<item>\`
`,
  )
}

/* -------------------------------------------------------------------------- */
/* Components (grouped by flavor + component name)                            */
/* -------------------------------------------------------------------------- */

function parseCatalog(file) {
  const source = read(file).replace(/\r\n/g, "\n")
  const rawImports = new Map()
  for (const match of source.matchAll(
    /import\s+(\w+)\s+from\s+"\.\/radix\/([^"?]+)\?raw"/g,
  )) {
    rawImports.set(match[1], `radix/${match[2]}`)
  }
  for (const match of source.matchAll(
    /import\s+(\w+)\s+from\s+"\.\/base\/([^"?]+)\?raw"/g,
  )) {
    rawImports.set(match[1], `base/${match[2]}`)
  }

  const entries = []
  for (const match of source.matchAll(
    /(componentEntry|uiEntry)\(\{([\s\S]*?)\n  \}\),/g,
  )) {
    const kind = match[1] === "uiEntry" ? "ui" : "reui"
    const block = match[2]
    const fields = Object.fromEntries(
      [...block.matchAll(/(\w+):\s*"([^"]*)"/g)].map((field) => [
        field[1],
        field[2],
      ]),
    )
    const sourceName = block.match(/source:\s*(\w+)/)?.[1]
    const sourcePath = rawImports.get(sourceName)
    if (!sourcePath) continue
    entries.push({
      kind,
      id: fields.id ?? `${fields.name}-radix`,
      name: kind === "ui" ? fields.label : fields.name,
      item: fields.item ?? fields.name,
      variant: fields.variant,
      flavor: fields.flavor ?? "radix",
      installTarget: fields.installTarget,
      path: sourcePath,
    })
  }
  return entries
}

const entries = [
  ...parseCatalog("src/blocks/components/catalog.tsx"),
  ...parseCatalog("src/blocks/components/ui-catalog.tsx"),
]

for (const entry of entries) {
  const target = entry.installTarget ?? entry.item
  entry.detail = detail(
    target.startsWith("@reui-unbound/")
      ? target.slice("@reui-unbound/".length)
      : target,
  )
}

const componentGroups = new Map()
for (const entry of entries) {
  const key = `${entry.flavor}::${entry.name}`
  const group = componentGroups.get(key) ?? {
    flavor: entry.flavor,
    name: entry.name,
    entries: [],
  }
  group.entries.push(entry)
  componentGroups.set(key, group)
}

const generatedPackages = []

for (const group of componentGroups.values()) {
  const slug = slugify(group.name)
  const dir = path.join(outDir, "components", group.flavor, slug)
  const index = `// Generated by build-npm-packages.mjs. Do not edit by hand.
// Lazy-import map of every ${group.name} preview in the ${group.flavor} group.

export const previews = {
${group.entries
  .map(
    (entry) =>
      `  ${JSON.stringify(entry.id)}: () => import(${JSON.stringify(
        `@/blocks/components/${entry.path.replace(/\.tsx?$/, "")}`,
      )}),`,
  )
  .join("\n")}
}
`

  writePackage({
    dir,
    name: `@reui-unbound/components-${group.flavor}-${slug}`,
    description: `${group.name} previews for the ${group.flavor} ReUI Unbound registry.`,
    dependencies: collectDependencies(group.entries),
    index,
    liveUrl: `https://reui-unbound.pages.dev/?preview=${group.entries[0].id}`,
  })
  generatedPackages.push(dir)
}

/* -------------------------------------------------------------------------- */
/* Blocks (grouped by data grid category, radix flavor)                       */
/* -------------------------------------------------------------------------- */

const blocksRegistry = JSON.parse(read("src/blocks/registry.json"))

for (const block of blocksRegistry.items ?? []) {
  block.detail = detail(block.name)
}

const blockGroups = new Map()
for (const block of blocksRegistry.items ?? []) {
  const category = block.meta?.category ?? "General"
  const group = blockGroups.get(category) ?? { category, items: [] }
  group.items.push(block)
  blockGroups.set(category, group)
}

for (const group of blockGroups.values()) {
  const slug = slugify(group.category)
  const dir = path.join(outDir, "blocks", slug)

  const index = `// Generated by build-npm-packages.mjs. Do not edit by hand.
// Lazy-import map of every ${group.category} data grid block.

export const blocks = {
${group.items
  .map(
    (block) =>
      `  ${JSON.stringify(block.name)}: () => import(${JSON.stringify(
        `@/blocks/${block.meta?.id ?? block.name}`,
      )}),`,
  )
  .join("\n")}
}
`

  writePackage({
    dir,
    name: `@reui-unbound/data-grid-blocks-${slug}`,
    description: `${group.category} data grid blocks for ReUI Unbound.`,
    dependencies: collectDependencies(group.items.map((item) => ({ detail: item.detail }))),
    index,
    liveUrl: `https://reui-unbound.pages.dev/?preview=${group.items[0].meta?.id ?? group.items[0].name}`,
  })
  generatedPackages.push(dir)
}

console.log(
  `packages: ${generatedPackages.length} packages generated under packages/registry (version ${version})`,
)
