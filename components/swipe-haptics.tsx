"use client"

import { useEffect } from "react"
import { haptic } from "@/lib/haptic/haptic"

export function SwipeHaptics() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!window.matchMedia("(pointer: coarse)").matches) return

    const rows = document.querySelectorAll<HTMLElement>(".swipe-row")
    if (rows.length === 0) return

    const cleanups: Array<() => void> = []

    for (const row of rows) {
      let lastIndex = -1
      let raf = 0

      const compute = () => {
        raf = 0
        const rowRect = row.getBoundingClientRect()
        const center = rowRect.left + rowRect.width / 2
        let nearest = -1
        let nearestDist = Infinity
        const children = row.children
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement
          const rect = child.getBoundingClientRect()
          const c = rect.left + rect.width / 2
          const d = Math.abs(c - center)
          if (d < nearestDist) {
            nearestDist = d
            nearest = i
          }
        }
        if (lastIndex !== -1 && nearest !== lastIndex) haptic(6)
        lastIndex = nearest
      }

      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(compute)
      }
      compute()
      row.addEventListener("scroll", onScroll, { passive: true })
      cleanups.push(() => {
        if (raf) cancelAnimationFrame(raf)
        row.removeEventListener("scroll", onScroll)
      })
    }

    return () => {
      for (const c of cleanups) c()
    }
  }, [])

  return null
}
