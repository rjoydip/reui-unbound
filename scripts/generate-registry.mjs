import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), "utf8")
const exists = (file) => fs.existsSync(path.join(root, file))
const writeJson = (file, data) => {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true })
  fs.writeFileSync(path.join(root, file), JSON.stringify(data, null, 2) + "\n")
}

const IMPORT_RE = /from\s+["']([^"']+)["']/g
const SKIP_PACKAGES = new Set(["react", "react-dom", "react/jsx-runtime"])

function packageName(specifier) {
  if (
    specifier.startsWith(".") ||
    specifier.startsWith("@/") ||
    specifier.startsWith("node:")
  ) {
    return null
  }
  if (SKIP_PACKAGES.has(specifier)) return null
  if (specifier.startsWith("@")) {
    return specifier.split("/").slice(0, 2).join("/")
  }
  return specifier.split("/")[0]
}

function registryDep(specifier) {
  if (specifier.startsWith("@/components/ui/")) {
    return specifier.slice("@/components/ui/".length).split("/")[0]
  }
  if (specifier.startsWith("@/components/kit/base/ui/")) {
    return (
      "@reui-unbound/base-ui-" +
      specifier.slice("@/components/kit/base/ui/".length).split("/")[0]
    )
  }
  if (specifier.startsWith("@/components/kit/base/")) {
    const name = specifier
      .slice("@/components/kit/base/".length)
      .split("/")[0]
      .replace(/\.tsx?$/, "")
    return "@reui-unbound/base-" + name
  }
  if (specifier.startsWith("@/components/kit/")) {
    const name = specifier
      .slice("@/components/kit/".length)
      .split("/")[0]
      .replace(/\.tsx?$/, "")
    return "@reui-unbound/" + name
  }
  if (specifier.startsWith("@/hooks/")) {
    return (
      "@reui-unbound/" +
      specifier.slice("@/hooks/".length).split("/")[0].replace(/\.tsx?$/, "")
    )
  }
  return null
}

const REUI_ROOT = "src/components/kit/"

function relativeItemName(file, specifier) {
  const absolute = path.posix.normalize(
    path.posix.join(path.posix.dirname(file), specifier),
  )
  if (!absolute.startsWith(REUI_ROOT)) return null
  const parts = absolute.slice(REUI_ROOT.length).split("/")
  if (parts[0] === "base" && parts[1] === "ui") {
    return "base-ui-" + parts[2].replace(/\.tsx?$/, "")
  }
  if (parts[0] === "base") {
    return "base-" + parts[1].replace(/\.tsx?$/, "")
  }
  return parts[0].replace(/\.tsx?$/, "")
}

function scanSource(files, selfName) {
  const dependencies = new Set()
  const registryDependencies = new Set()

  for (const file of files) {
    const source = read(file)
    for (const match of source.matchAll(IMPORT_RE)) {
      const specifier = match[1]
      const pkg = packageName(specifier)
      if (pkg) dependencies.add(pkg)
      const dep = registryDep(specifier)
      if (dep) registryDependencies.add(dep)
      if (specifier.startsWith(".")) {
        const name = relativeItemName(file, specifier)
        if (name && name !== selfName) {
          registryDependencies.add("@reui-unbound/" + name)
        }
      }
    }
  }

  return {
    dependencies: [...dependencies].sort(),
    registryDependencies: [...registryDependencies].sort(),
  }
}

function listFiles(dir) {
  const absolute = path.join(root, dir)
  if (!fs.existsSync(absolute)) return []
  const result = []
  for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue
    const child = path.posix.join(dir, entry.name)
    if (entry.isDirectory()) {
      result.push(...listFiles(child))
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      result.push(child)
    }
  }
  return result
}

/* -------------------------------------------------------------------------- */
/* Blocks                                                                     */
/* -------------------------------------------------------------------------- */

const blocksSource = read("src/blocks/~internal/registry.tsx").replace(/\r\n/g, "\n")
const rawImports = new Map()
for (const match of blocksSource.matchAll(
  /import\s+(\w+)\s+from\s+"(@\/blocks\/[^"?]+)\?raw"/g,
)) {
  rawImports.set(match[1], match[2].replace("@/blocks/", ""))
}

const blockParts = blocksSource.split(/\n  \{\n    id: "/).slice(1)
const blockItems = []

for (const part of blockParts) {
  const id = part.slice(0, part.indexOf('"'))
  const group = part.match(/group:\s*"([^"]+)"/)?.[1] ?? "data-grid"
  if (!id || (group !== "application" && !id.startsWith("data-grid-"))) continue

  const name = part.match(/name:\s*"([^"]+)"/)?.[1] ?? id
  const category = part.match(/category:\s*"([^"]+)"/)?.[1]
  const installTarget = part.match(/installTarget:\s*"([^"]+)"/)?.[1]
  const itemName = installTarget?.startsWith("@reui-unbound/")
    ? installTarget.slice("@reui-unbound/".length)
    : id
  const depsMatch = part.match(
    /dependencies:\s*\{\s*registry:\s*\[([\s\S]*?)\],\s*packages:\s*\[([\s\S]*?)\],?\s*\}/,
  )
  const declaredRegistry = [...(depsMatch?.[1] ?? "").matchAll(/"([^"]+)"/g)].map(
    (match) => match[1].replace(/^@reui\//, "@reui-unbound/"),
  )
  const declaredPackages = [...(depsMatch?.[2] ?? "").matchAll(/"([^"]+)"/g)].map(
    (match) => match[1],
  )

  const fileMatches = [...part.matchAll(/file\("([^"]+)",\s*(\w+)/g)]
  const filePaths = fileMatches
    .map((match) => rawImports.get(match[2]))
    .filter(Boolean)

  const scanned = scanSource(
    filePaths.map((file) => path.posix.join("src/blocks", file)),
    id,
  )

  blockItems.push({
    name: itemName,
    type: "registry:block",
    title: name,
    description: `${name} ${group === "application" ? "application" : "data grid"} block.`,
    ...(category ? { meta: { category, id } } : {}),
    dependencies: [...new Set([...declaredPackages, ...scanned.dependencies])].sort(),
    registryDependencies: [
      ...new Set([...declaredRegistry, ...scanned.registryDependencies]),
    ].sort(),
    files: filePaths.map((file) => ({
      path: file,
      type: "registry:component",
      target: `@components/blocks/${id}/${path.posix.basename(file)}`,
    })),
  })
}

/* Application blocks: scan implemented folders, metadata from the manifest. */
const appManifest = JSON.parse(read("src/blocks/application/~manifest.json"))
const appRoot = "src/blocks/application"

for (const categoryEntry of fs.readdirSync(path.join(root, appRoot), {
  withFileTypes: true,
})) {
  if (!categoryEntry.isDirectory() || categoryEntry.name.startsWith("~")) continue
  const categoryDir = path.posix.join(appRoot, categoryEntry.name)
  for (const blockEntry of fs.readdirSync(path.join(root, categoryDir), {
    withFileTypes: true,
  })) {
    if (!blockEntry.isDirectory()) continue
    const file = path.posix.join(categoryDir, blockEntry.name, "index.tsx")
    if (!exists(file)) continue
    const meta = appManifest.find((item) => item.slug === blockEntry.name)
    if (!meta) {
      console.warn(`registry: no manifest entry for ${blockEntry.name}`)
      continue
    }
    const scanned = scanSource([file], blockEntry.name)
    const relative = path.posix.join(categoryEntry.name, blockEntry.name, "index.tsx")
    blockItems.push({
      name: blockEntry.name,
      type: "registry:block",
      title: meta.title,
      description: `${meta.title} ${categoryEntry.name.toLowerCase()} block.`,
      meta: { category: meta.category, id: blockEntry.name },
      dependencies: scanned.dependencies,
      registryDependencies: scanned.registryDependencies,
      files: [
        {
          path: `application/${categoryEntry.name}/${blockEntry.name}/index.tsx`,
          type: "registry:component",
          target: `@components/blocks/${blockEntry.name}/index.tsx`,
        },
      ],
    })
  }
}

writeJson("src/blocks/registry.json", {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  items: blockItems,
})

/* -------------------------------------------------------------------------- */
/* Component examples                                                          */
/* -------------------------------------------------------------------------- */

function quotedFields(block) {
  return Object.fromEntries(
    [...block.matchAll(/(\w+):\s*"([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  )
}

const exampleItems = []

for (const catalogFile of [
  "src/blocks/components/~catalog/catalog.tsx",
  "src/blocks/components/~catalog/ui-catalog.tsx",
]) {
  const catalogSource = read(catalogFile).replace(/\r\n/g, "\n")
  const rawImports = new Map()
  for (const match of catalogSource.matchAll(
    /import\s+(\w+)\s+from\s+"\.\.?\/(?:radix|base)\/([^"?]+)\?raw"/g,
  )) {
    rawImports.set(match[1], match[2])
  }

  for (const match of catalogSource.matchAll(
    /(?:componentEntry|uiEntry)\(\{\n    (?:flavor|name): [\s\S]*?\n  \}\),/g,
  )) {
    const block = match[0]
    const fields = quotedFields(block)
    const installTarget = fields.installTarget
    if (!installTarget?.startsWith("@reui-unbound/")) continue

    const name = installTarget.slice("@reui-unbound/".length)
    const sourceName = block.match(/source:\s*(\w+)/)?.[1]
    const rawFile = rawImports.get(sourceName)
    if (!rawFile) {
      console.warn(`registry: no source file for ${name}`)
      continue
    }
    const relative = `radix/${rawFile}`

    const file = `src/blocks/components/${relative}`
    const scanned = scanSource([file], name)
    const declaredDependencies = [
      ...(block
        .match(/(?:extraDependencies|dependencies):\s*\[([\s\S]*?)\]/)?.[1] ?? "")
        .matchAll(/"([^"]+)"/g),
    ].map((entry) => entry[1])
    const declaredPackages = [
      ...(block.match(/extraPackages:\s*\[([\s\S]*?)\]/)?.[1] ?? "").matchAll(
        /"([^"]+)"/g,
      ),
    ].map((entry) => entry[1])

    const component = fields.label ?? fields.name ?? "Component"
    const variant = fields.variant ?? component

    exampleItems.push({
      name,
      type: "registry:block",
      title: `${variant} ${component}`,
      description: `${variant} example for ${component}.`,
      dependencies: [...new Set([...scanned.dependencies, ...declaredPackages])].sort(),
      registryDependencies: [
        ...new Set([...scanned.registryDependencies, ...declaredDependencies]),
      ].sort(),
      files: [
        {
          path: relative,
          type: "registry:component",
          target: `@components/examples/${name}.tsx`,
        },
      ],
    })
  }
}

exampleItems.sort((a, b) => a.name.localeCompare(b.name))

writeJson("src/blocks/components/registry.json", {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  items: exampleItems,
})

/* -------------------------------------------------------------------------- */
/* ReUI components (radix / current)                                          */
/* -------------------------------------------------------------------------- */

const reuiDir = "src/components/kit"
const reuiItems = []

function reuiItemName(entry) {
  return entry.endsWith(".tsx") ? entry.slice(0, -4) : entry
}

for (const entry of fs.readdirSync(path.join(root, reuiDir), {
  withFileTypes: true,
})) {
  if (entry.name.startsWith(".")) continue
  if (entry.name === "base") continue
  if (entry.name === "icon-placeholder.tsx") continue
  if (entry.name === "registry.json") continue
  if (entry.isDirectory()) {
    const componentDir = path.posix.join(reuiDir, entry.name)
    const files = listFiles(componentDir)
    if (files.length === 0) continue
    const name = entry.name
    const scanned = scanSource(files, name)
    const mainFile =
      files.find(
        (file) => path.posix.basename(file) === `${entry.name}.tsx`,
      ) ?? files[0]
    reuiItems.push({
      name,
      type: "registry:ui",
      title: name,
      files: files.map((file) => {
        const relative = path.posix.relative(reuiDir, file)
        return {
          path: relative,
          type: file === mainFile ? "registry:ui" : "registry:component",
          target: `@components/kit/${relative}`,
        }
      }),
      dependencies: scanned.dependencies,
      registryDependencies: scanned.registryDependencies.filter(
        (dep) => dep !== `@reui-unbound/${name}`,
      ),
    })
  } else if (entry.name.endsWith(".tsx")) {
    const name = reuiItemName(entry.name)
    const file = path.posix.join(reuiDir, entry.name)
    const scanned = scanSource([file], name)
    reuiItems.push({
      name,
      type: "registry:ui",
      title: name,
      files: [
        {
          path: entry.name,
          type: "registry:ui",
          target: `@components/kit/${entry.name}`,
        },
      ],
      dependencies: scanned.dependencies,
      registryDependencies: scanned.registryDependencies.filter(
        (dep) => dep !== `@reui-unbound/${name}`,
      ),
    })
  }
}

reuiItems.push({
  name: "icon-placeholder",
  type: "registry:component",
  title: "Icon Placeholder",
  files: [
    {
      path: "icon-placeholder.tsx",
      type: "registry:component",
      target: "@components/kit/icon-placeholder.tsx",
    },
  ],
  dependencies: ["lucide-react"],
})

writeJson(path.posix.join(reuiDir, "registry.json"), {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  items: reuiItems,
})

/* -------------------------------------------------------------------------- */
/* ReUI components (base flavor) + Base UI primitives                         */
/* -------------------------------------------------------------------------- */

const baseDir = "src/components/kit/base"
const baseItems = []

for (const entry of fs.readdirSync(path.join(root, baseDir), {
  withFileTypes: true,
})) {
  if (entry.name.startsWith(".")) continue
  if (entry.name === "ui") continue
  if (entry.name === "registry.json") continue

  if (entry.isDirectory()) {
    const componentDir = path.posix.join(baseDir, entry.name)
    const files = listFiles(componentDir)
    if (files.length === 0) continue
    const name = `base-${entry.name}`
    const scanned = scanSource(files, name)
    const mainFile =
      files.find(
        (file) => path.posix.basename(file) === `${entry.name}.tsx`,
      ) ?? files[0]
    baseItems.push({
      name,
      type: "registry:ui",
      title: name,
      files: files.map((file) => {
        const relative = path.posix.relative(baseDir, file)
        return {
          path: relative,
          type: file === mainFile ? "registry:ui" : "registry:component",
          target: `@components/kit/base/${relative}`,
        }
      }),
      dependencies: scanned.dependencies,
      registryDependencies: scanned.registryDependencies.filter(
        (dep) => dep !== `@reui-unbound/${name}`,
      ),
    })
  } else if (entry.name.endsWith(".tsx")) {
    const name = `base-${reuiItemName(entry.name)}`
    const file = path.posix.join(baseDir, entry.name)
    const scanned = scanSource([file], name)
    baseItems.push({
      name,
      type: "registry:ui",
      title: name,
      files: [
        {
          path: entry.name,
          type: "registry:ui",
          target: `@components/kit/base/${entry.name}`,
        },
      ],
      dependencies: scanned.dependencies,
      registryDependencies: scanned.registryDependencies.filter(
        (dep) => dep !== `@reui-unbound/${name}`,
      ),
    })
  }
}

const baseUiDir = path.posix.join(baseDir, "ui")
for (const file of fs
  .readdirSync(path.join(root, baseUiDir))
  .filter((entry) => entry.endsWith(".tsx"))) {
  const name = `base-ui-${reuiItemName(file)}`
  const relative = path.posix.join("ui", file)
  const scanned = scanSource(
    [path.posix.join(baseDir, relative)],
    name,
  )
  baseItems.push({
    name,
    type: "registry:ui",
    title: name,
    files: [
      {
        path: relative,
        type: "registry:ui",
        target: `@components/kit/base/${relative}`,
      },
    ],
    dependencies: scanned.dependencies,
    registryDependencies: scanned.registryDependencies.filter(
      (dep) => dep !== `@reui-unbound/${name}`,
    ),
  })
}

writeJson(path.posix.join(baseDir, "registry.json"), {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  items: baseItems,
})

/* -------------------------------------------------------------------------- */
/* Hooks                                                                      */
/* -------------------------------------------------------------------------- */

const hooksDir = "src/hooks"
const hookItems = []
for (const file of fs
  .readdirSync(path.join(root, hooksDir))
  .filter((entry) => /\.(ts|tsx)$/.test(entry))) {
  const name = file.replace(/\.tsx?$/, "")
  hookItems.push({
    name,
    type: "registry:hook",
    title: name,
    files: [
      {
        path: file,
        type: "registry:hook",
        target: `@hooks/${file}`,
      },
    ],
  })
}

writeJson(path.posix.join(hooksDir, "registry.json"), {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  items: hookItems,
})

/* -------------------------------------------------------------------------- */
/* Root registry                                                              */
/* -------------------------------------------------------------------------- */

const names = [
  ...blockItems.map((item) => item.name),
  ...reuiItems.map((item) => item.name),
  ...baseItems.map((item) => item.name),
  ...hookItems.map((item) => item.name),
]
const duplicates = names.filter((name, index) => names.indexOf(name) !== index)
if (duplicates.length > 0) {
  throw new Error(`Duplicate registry item names: ${duplicates.join(", ")}`)
}

const manifests = [
  { dir: "src/blocks", items: blockItems },
  { dir: "src/blocks/components", items: exampleItems },
  { dir: reuiDir, items: reuiItems },
  { dir: baseDir, items: baseItems },
  { dir: hooksDir, items: hookItems },
]

const owners = new Map()
const targets = new Map()
for (const manifest of manifests) {
  for (const item of manifest.items) {
    for (const file of item.files) {
      if (file.target) {
        const targetOwner = targets.get(file.target)
        if (targetOwner && targetOwner !== item.name) {
          throw new Error(
            `target ${file.target} is declared by both ${targetOwner} and ${item.name}`,
          )
        }
        targets.set(file.target, item.name)
      }
      const absolute = path.posix.normalize(
        path.posix.join(manifest.dir, file.path),
      )
      if (!exists(absolute)) {
        throw new Error(`${item.name}: missing file ${absolute}`)
      }
      const owner = owners.get(absolute)
      if (owner && owner !== item.name) {
        throw new Error(
          `${absolute} is declared by both ${owner} and ${item.name}`,
        )
      }
      owners.set(absolute, item.name)
    }
  }
}

const resolvedNames = new Set(names)
for (const item of manifests.flatMap((manifest) => manifest.items)) {
  for (const dependency of item.registryDependencies ?? []) {
    if (dependency.startsWith("@reui-unbound/")) {
      const name = dependency.slice("@reui-unbound/".length)
      if (!resolvedNames.has(name)) {
        throw new Error(`${item.name}: unknown registry dependency ${dependency}`)
      }
    }
  }
}

writeJson("registry.json", {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "reui-unbound",
  homepage: "https://reui-unbound.pages.dev",
  include: [
    "src/blocks/registry.json",
    "src/blocks/components/registry.json",
    "src/components/kit/registry.json",
    "src/components/kit/base/registry.json",
    "src/hooks/registry.json",
  ],
})

console.log(
  `registry: ${blockItems.length} blocks, ${exampleItems.length} examples, ${reuiItems.length} reui, ${baseItems.length} base, ${hookItems.length} hooks`,
)
