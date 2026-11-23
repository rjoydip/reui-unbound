import * as React from "react"

import { cn } from "cn"

export interface LogoProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  width?: number
}

/**
 * ReUI Unbound mark: a frame with one corner broken open, the dot escaping it.
 * The wordmark lives beside it as text so it always uses the site font.
 */
export function Logo({ className, onClick, width }: LogoProps) {
  const logoWidth = width ?? 32

  return (
    <div
      onClick={onClick}
      className={cn("text-site-foreground flex items-center", className)}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // `block` removes the inline-baseline that browsers reserve
        // for an inline SVG (a few pixels of phantom descender space).
        className="block h-auto shrink-0"
        style={{ width: logoWidth }}
      >
        <path
          d="M56 10H32A22 22 0 0 1 10 32V68A22 22 0 0 1 32 90H68A22 22 0 0 1 90 68V38"
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="83.6" cy="16.4" r="8" fill="currentColor" />
      </svg>
    </div>
  )
}
