import { Suspense, useRef, type ReactNode } from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

import { PreviewFallback } from "./preview-fallback"

/**
 * Mounts a lazy preview only when it gets close to the viewport, so catalog
 * grids download just the cards you can actually see.
 */
export function LazyPreview({
  children,
  className,
  contentClassName,
}: {
  children: ReactNode
  className?: string
  contentClassName?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIntersectionObserver(ref, {
    rootMargin: "300px",
    freezeOnceVisible: true,
  })

  return (
    <div ref={ref} className={className}>
      {visible ? (
        <Suspense fallback={<PreviewFallback compact />}>
          <div className={contentClassName}>
            <div className="preview-enter">{children}</div>
          </div>
        </Suspense>
      ) : (
        <PreviewFallback compact />
      )}
    </div>
  )
}
