import fs from "node:fs"

fs.rmSync("public/r", { recursive: true, force: true })
