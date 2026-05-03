"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function MotionInit() {
  const pathname = usePathname()
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const seenKey = `seen:${pathname}`
    let revisiting = false
    try {
      revisiting = sessionStorage.getItem(seenKey) === "1"
    } catch {}

    if (mql.matches || revisiting) {
      // On back-nav / revisit, skip the entrance cascade so only the
      // shared-element morph plays. Suppress the .reveal keyframe and the
      // .on-scroll transition for this paint, then drop the flag so future
      // interactions animate normally.
      document.documentElement.dataset.instantReveals = "1"
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"))
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          delete document.documentElement.dataset.instantReveals
        })
      })
      try {
        sessionStorage.setItem(seenKey, "1")
      } catch {}
      if (mql.matches) return
    } else {
      try {
        sessionStorage.setItem(seenKey, "1")
      } catch {}
    }

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

    // Pause marquee when off-screen (compositor + battery hygiene).
    const marqueeIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ;(entry.target as HTMLElement).style.animationPlayState =
            entry.isIntersecting ? "running" : "paused"
        }
      },
      { threshold: 0 },
    )
    const marqueeEls =
      document.querySelectorAll<HTMLElement>(".marquee-track")
    marqueeEls.forEach((el) => marqueeIo.observe(el))

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!fine) {
      return () => {
        io.disconnect()
        marqueeIo.disconnect()
      }
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
      marqueeIo.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}
