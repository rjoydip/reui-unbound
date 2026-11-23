/**
 * Publishes every generated package in `packages/registry/items/` to npm.
 *
 * Usage:
 *   bun run packages:publish                 # publish all
 *   bun run packages:publish --dry-run       # what would be published
 *   bun run packages:publish --filter=accordion
 *   bun run packages:publish --tag=beta
 *   bun run packages:publish --version=0.2.0
 *   bun run packages:publish --otp=123456
 *   bun run packages:publish --continue      # keep going after a failure
 *
 * Auth: set NPM_TOKEN (or run `npm login`) before publishing.
 */
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const root = process.cwd()
const packagesDir = path.join(root, "packages", "registry")

const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
const value = (name) =>
  args.find((arg) => arg.startsWith(`--${name}=`))?.split("=").slice(1).join("=")

const dryRun = flag("dry-run")
const keepGoing = flag("continue")
const filter = value("filter")
const tag = value("tag")
const otp = value("otp")
const version = value("version")

if (!fs.existsSync(packagesDir)) {
  console.error(
    "publish: packages/registry is missing. Run `bun run packages:build` first.",
  )
  process.exit(1)
}

function findPackages(dir) {
  const result = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const child = path.join(dir, entry.name)
    if (fs.existsSync(path.join(child, "package.json"))) {
      result.push(child)
    } else {
      result.push(...findPackages(child))
    }
  }
  return result
}

const npm = "npm"
const packages = findPackages(packagesDir).filter((dir) => {
  if (!filter) return true
  const pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"))
  return pkg.name.includes(filter)
})

if (packages.length === 0) {
  console.error("publish: no packages matched.")
  process.exit(1)
}

let published = 0
let failed = 0

for (const dir of packages) {
  const pkgFile = path.join(dir, "package.json")
  const pkg = JSON.parse(fs.readFileSync(pkgFile, "utf8"))

  if (version) {
    pkg.version = version
    fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2) + "\n")
  }

  const command = [
    "publish",
    "--access",
    "public",
    ...(dryRun ? ["--dry-run"] : []),
    ...(tag ? ["--tag", tag] : []),
    ...(otp ? ["--otp", otp] : []),
  ]

  console.log(
    `${dryRun ? "dry-run" : "publish"} ${pkg.name}@${pkg.version}`,
  )

  const result = spawnSync(npm, command, {
    cwd: dir,
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  })

  if (result.status === 0) {
    published++
    continue
  }

  failed++
  if (!keepGoing) {
    console.error(`publish: ${pkg.name} failed, stopping.`)
    process.exit(result.status ?? 1)
  }
}

console.log(
  `publish: ${published} ${dryRun ? "checked" : "published"}, ${failed} failed.`,
)
process.exit(failed > 0 ? 1 : 0)
