"use client"

import { useEffect, useRef } from "react"

type Props = {
  src: string
  className?: string
}

export function LoopingVideo({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === "function") p.catch(() => {})
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tryPlay()
          else v.pause()
        }
      },
      { rootMargin: "200px 0px", threshold: 0.1 },
    )

    io.observe(v)

    const onVisibility = () => {
      if (document.hidden) v.pause()
      else if (v.getBoundingClientRect().top < window.innerHeight + 200) tryPlay()
    }
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      loop
      autoPlay
      preload="metadata"
      className={className}
    />
  )
}
