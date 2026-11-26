import { useMemo } from "react"
import { tokenize } from "kirari"
import { renderDecorated } from "kirari/decorations"
import { tsx, typescript } from "kirari/languages"
import "kirari/themes/github-light.css"

import type { Lang } from "@/blocks/~internal/registry"

/** Syntax-highlighted source view. Lazy-loaded with the kirari tokenizer. */
export default function CodePanel({ code, lang }: { code: string; lang: Lang }) {
  const html = useMemo(
    () =>
      renderDecorated(tokenize(code, lang === "tsx" ? tsx : typescript), {
        lines: true,
      }),
    [code, lang],
  )

  return (
    <pre
      className="kirari kirari-lines max-h-[calc(100svh-9rem)] overflow-auto p-4 text-xs leading-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
