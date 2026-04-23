"use client"

import { useEffect } from "react"

export function MotionInit() {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mql.matches) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )

    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]")
    revealEls.forEach((el) => io.observe(el))

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!fine) {
      return () => io.disconnect()
    }

    const parallaxEls: { el: HTMLElement; speed: number }[] = []
    document
      .querySelectorAll<HTMLElement>("[data-parallax]")
      .forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed ?? "0.08")
        parallaxEls.push({ el, speed })
      })

    let raf = 0
    const tick = () => {
      const vh = window.innerHeight
      for (const { el, speed } of parallaxEls) {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const delta = (center - vh / 2) * -speed
        el.style.transform = `translate3d(0, ${delta.toFixed(2)}px, 0)`
      }
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    tick()

    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
