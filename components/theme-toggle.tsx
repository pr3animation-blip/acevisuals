"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <div
      className="hairline border-border bg-background/60 relative inline-flex items-center rounded-full border p-0.5 backdrop-blur-sm"
      role="group"
      aria-label="Theme"
      suppressHydrationWarning
    >
      <span
        aria-hidden
        data-mounted={mounted}
        style={{ transform: isDark ? "translateX(100%)" : "translateX(0%)" }}
        className="theme-pill-indicator bg-primary absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full"
      />
      {(["light", "dark"] as const).map((t) => {
        const active = mounted && resolvedTheme === t
        return (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            aria-pressed={active}
            suppressHydrationWarning
            className={cn(
              "relative z-10 flex-1 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase",
              "transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
              "active:scale-[0.97]",
              active
                ? "text-primary-foreground"
                : "text-ink-muted hover:text-foreground",
            )}
          >
            {t}
          </button>
        )
      })}
    </div>
  )
}
