# npm packages

The npm output mirrors ReUI's registry layout: one package per component,
split by **radix / base** flavor, plus one package per block category.

```
packages/registry/
  components/
    radix/accordion/
      package.json   # @reui-unbound/components-radix-accordion
      src/index.ts   # lazy loader map
      src/previews/  # accordion preview sources
    radix/alert/…
    base/autocomplete/
      package.json   # @reui-unbound/components-base-autocomplete
      src/index.ts
      src/previews/…
  blocks/
    advanced/
      package.json   # @reui-unbound/data-grid-blocks-advanced
      src/index.ts   # lazy loader map
      src/blocks/…   # block sources
    base/…
```

Package names are derived from the group, never from folder depth:

| Group | Package |
|---|---|
| radix / Accordion | `@reui-unbound/components-radix-accordion` |
| base / Autocomplete | `@reui-unbound/components-base-autocomplete` |
| Data Grid Advanced blocks | `@reui-unbound/data-grid-blocks-advanced` |

The generated folders are committed by default: this is the publishable layout.

## Build

```bash
bun run packages:build              # registry:build + generate all packages
bun run packages:build --version=0.2.0
```

## Publish

Authenticate first (`npm login` or `NPM_TOKEN`), then:

```bash
bun run packages:publish:dry                 # list everything that would publish
bun run packages:publish                     # publish all groups
bun run packages:publish --filter=accordion
bun run packages:publish --filter=components-base
bun run packages:publish --tag=beta
bun run packages:publish --version=0.2.0
bun run packages:publish --otp=123456
bun run packages:publish --continue
```

Each package runs `npm publish --access public` with the name and version from
its generated `package.json`.

## Notes

- Each package mirrors ReUI's layout: `src/index.ts` is a lazy loader map that
  imports the registry sources from the app's `src/` tree (`@/blocks/...`), so
  there are no copied sources. `package.json` points at `dist/`, `tsconfig.json`
  extends the repo config, and `.gitignore` ignores `dist/` + `node_modules/`.
- `prepublishOnly` builds `dist/index.js` with Bun before publishing.
- Prefer `bunx --bun shadcn@latest add @reui-unbound/<item>` for normal app
  usage; the npm packages are the registry-group build artifacts.
- Dependencies come from the registry payloads (npm deps only); `react` and
  `react-dom` are peers (`>=18`).
- Re-run `bun run packages:build` after changing registry items.
