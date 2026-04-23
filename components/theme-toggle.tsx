"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div
      className="hairline border-border inline-flex items-center gap-0.5 rounded-full border bg-background/60 p-0.5 backdrop-blur-sm"
      role="group"
      aria-label="Theme"
      suppressHydrationWarning
    >
      {(["light", "dark"] as const).map((t) => {
        const active = resolvedTheme === t
        return (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            aria-pressed={active}
            suppressHydrationWarning
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1 rounded-full transition-colors",
              active
                ? "bg-primary text-primary-foreground"
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
