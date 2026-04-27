import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const eyebrowVariants = cva(
  "inline-flex items-center gap-2 font-mono uppercase",
  {
    variants: {
      size: {
        sm: "text-[9px] tracking-[0.18em]",
        default: "text-[10px] tracking-[0.22em]",
        lg: "text-[11px] tracking-[0.28em]",
      },
      tone: {
        muted: "text-ink-muted",
        foreground: "text-foreground",
        primary: "text-primary",
        white: "text-white/70",
      },
    },
    defaultVariants: {
      size: "default",
      tone: "muted",
    },
  }
)

function Eyebrow({
  className,
  size,
  tone,
  dot = false,
  index,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof eyebrowVariants> & {
    dot?: boolean
    index?: string | number
  }) {
  return (
    <div
      data-slot="eyebrow"
      className={cn(eyebrowVariants({ size, tone }), className)}
      {...props}
    >
      {dot ? (
        <span aria-hidden className="text-primary">
          ●
        </span>
      ) : null}
      {index !== undefined ? (
        <>
          <span className="text-primary">{index}</span>
          <span aria-hidden className="opacity-50">
            ·
          </span>
        </>
      ) : null}
      {children}
    </div>
  )
}

export { Eyebrow, eyebrowVariants }
