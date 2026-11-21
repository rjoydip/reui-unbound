import fs from "node:fs"
import path from "node:path"

/**
 * Adapted from reui/scripts/verify-registry.mts.
 * Validates the generated shadcn registry in public/r before shipping.
 */

const root = process.cwd()
const registryDir = path.join(root, "public", "r")
const ALLOWED_SCAFFOLD = new Set([
  "react",
  "react-dom",
  "react/jsx-runtime",
  "next",
])
function importSpecifiers(content) {
  const specifiers = new Set()
  const patterns = [
    /(?:^|\n)\s*import\s+(?:type\s+)?[^\n]*?from\s+["']([^"']+)["']/g,
    /(?:^|\n)\s*import\s+["']([^"']+)["']/g,
    /(?:^|\n)\s*export\s+(?:type\s+)?[^\n]*?from\s+["']([^"']+)["']/g,
    /require\(\s*["']([^"']+)["']\s*\)/g,
    /import\(\s*["']([^"']+)["']\s*\)/g,
  ]
  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) specifiers.add(match[1])
  }
  return specifiers
}

const errors = []

function fail(message) {
  errors.push(message)
}

function packageName(specifier) {
  if (
    specifier.startsWith(".") ||
    specifier.startsWith("@/") ||
    specifier.startsWith("node:")
  ) {
    return null
  }
  if (ALLOWED_SCAFFOLD.has(specifier)) return null
  if (specifier.startsWith("@")) {
    return specifier.split("/").slice(0, 2).join("/")
  }
  return specifier.split("/")[0]
}

if (!fs.existsSync(registryDir)) {
  console.error("registry: run `npm run registry:build` first (public/r missing)")
  process.exit(1)
}

const registryFile = path.join(registryDir, "registry.json")
if (!fs.existsSync(registryFile)) {
  console.error("registry: public/r/registry.json is missing")
  process.exit(1)
}

const catalog = JSON.parse(fs.readFileSync(registryFile, "utf8"))
const names = new Set((catalog.items ?? []).map((item) => item.name))
const targets = new Map()

const itemFiles = fs
  .readdirSync(registryDir)
  .filter((file) => file.endsWith(".json") && file !== "registry.json")

for (const file of itemFiles) {
  const item = JSON.parse(fs.readFileSync(path.join(registryDir, file), "utf8"))
  const label = `public/r/${file}`

  if (!item.name || typeof item.name !== "string") fail(`${label}: missing name`)
  if (!item.type || typeof item.type !== "string") fail(`${label}: missing type`)
  if (!Array.isArray(item.files) || item.files.length === 0) {
    fail(`${label}: files must be a non-empty array`)
    continue
  }

  const dependencies = new Set(
    Array.isArray(item.dependencies) ? item.dependencies : [],
  )
  const registryDependencies = Array.isArray(item.registryDependencies)
    ? item.registryDependencies
    : []

  for (const dependency of registryDependencies) {
    if (typeof dependency !== "string" || dependency.length === 0) {
      fail(`${label}: invalid registry dependency`)
      continue
    }
    if (dependency.startsWith("@reui-unbound/")) {
      const name = dependency.slice("@reui-unbound/".length)
      if (!names.has(name)) {
        fail(`${label}: unknown registry dependency ${dependency}`)
      }
    }
  }

  const imported = new Set()

  for (const entry of item.files) {
    if (typeof entry.content !== "string" || entry.content.length === 0) {
      fail(`${label}: file ${entry.path ?? "?"} has no content`)
      continue
    }
    if (entry.target) {
      const owner = targets.get(entry.target)
      if (owner && owner !== item.name) {
        fail(`${label}: target ${entry.target} also used by ${owner}`)
      }
      targets.set(entry.target, item.name)
    }

    if (
      entry.content.includes("@/registry/") ||
      entry.content.includes("@/registry-reui/") ||
      entry.content.includes("@/app/")
    ) {
      fail(`${label}: file ${entry.path} leaks internal registry imports`)
    }

    for (const specifier of importSpecifiers(entry.content)) {
      const pkg = packageName(specifier)
      if (pkg) imported.add(pkg)
    }
  }

  for (const pkg of imported) {
    if (!dependencies.has(pkg)) {
      fail(`${label}: imports ${pkg} but does not declare it in dependencies`)
    }
  }
}

if (errors.length > 0) {
  console.error(`registry verification failed (${errors.length}):`)
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}

console.log(
  `registry verified: ${itemFiles.length} items, ${targets.size} unique install targets`,
)
