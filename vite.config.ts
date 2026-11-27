import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      // "use no memo" is a React Compiler module directive: it only matters
      // when compiling source, and the registry publishes source files, so
      // dropping it from the bundle is fine. Rolldown warns for every
      // top-level custom directive it cannot preserve.
      onLog(level, log, handler) {
        if (
          log.code === 'MODULE_LEVEL_DIRECTIVE' &&
          log.message.includes('"use no memo"')
        ) {
          return
        }
        handler(level, log)
      },
    },
  },
})
