"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  X as CloseIcon,
} from "@phosphor-icons/react/dist/ssr"
import { haptic } from "@/lib/haptic/haptic"

type NavLink = { label: string; href: string }

const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

// Scroll past 60% of viewport height before the home nav compacts into the
// floating pill. The hero is full-svh, so this fires as the hero is sliding
// out and content is sliding in — the morph reads as a chrome handoff, not
// an unrelated nav animation.
const HOME_MORPH_THRESHOLD_VH = 0.6
// Matches the pill's background-color / border-color / box-shadow transition
// duration in globals.css so the chrome morph and the lockup/CTA glide land
// on the same frame.
const MORPH_DURATION_MS = 320
const MORPH_EASING = "cubic-bezier(0.2, 0, 0.1, 1)"

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hero mode = transparent overlay over the homepage video.
  // Interior mode = blurred pill over content on every other route, and on
  // the home page once the user has scrolled past the hero.
  const isHome = pathname === "/"
  const mode: "hero" | "interior" = isHome && !scrolled ? "hero" : "interior"
  const onContact = pathname === "/contact"

  // FLIP refs — the lockup (mark + wordmark) and the right-side cluster
  // (CTA + burger) are the elements whose horizontal position changes
  // dramatically between hero (edge-to-edge) and interior (centered pill).
  // Capture pre-mode-change bounds and slide them from old → new with
  // hardware-accelerated transforms so the layout snap reads as a glide.
  const lockupRef = useRef<HTMLAnchorElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)
  const prevBoundsRef = useRef<{ lockup?: DOMRect; right?: DOMRect }>({})
  const lastModeRef = useRef(mode)

  // Close mobile menu on route change. Reset scrolled flag when we leave
  // home so reentering / starts in hero mode again.
  useEffect(() => {
    setOpen(false)
    if (!isHome) setScrolled(false)
  }, [pathname, isHome])

  // Scroll listener — only attached on the home page. rAF-throttled so it
  // never fires more than once per frame.
  useEffect(() => {
    if (!isHome) return
    let raf = 0
    const evaluate = () => {
      raf = 0
      const threshold = window.innerHeight * HOME_MORPH_THRESHOLD_VH
      const next = window.scrollY > threshold
      setScrolled((prev) => {
        if (prev === next) return prev
        // Capture FIRST (current) bounds before React re-renders into LAST.
        prevBoundsRef.current = {
          lockup: lockupRef.current?.getBoundingClientRect(),
          right: rightRef.current?.getBoundingClientRect(),
        }
        return next
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(evaluate)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [isHome])

  // Play the FLIP after layout commits with the new mode. Reads BOTH
  // elements' bounds in one batch before starting any animation, so the
  // lockup and the CTA cluster are guaranteed to glide on the exact same
  // timeline. Honors reduced motion by bailing without animating.
  useLayoutEffect(() => {
    if (lastModeRef.current === mode) return
    lastModeRef.current = mode

    const captured = prevBoundsRef.current
    prevBoundsRef.current = {}
    if (!captured.lockup && !captured.right) return

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    type FlipPair = { el: HTMLElement; dx: number; dy: number }
    // Anchor matters: the lockup's visible content sits at its bounding-box
    // LEFT edge, so we anchor by left. The right cluster is `justify-end`
    // and its width changes between modes (full 1fr column in hero → auto
    // in interior), so anchoring by left would let the CTA visually snap
    // 250px+ on the layout switch. Anchoring by right edge keeps the CTA
    // visually pinned through the glide, matching the lockup's tempo.
    const targets: {
      el: HTMLElement | null
      before?: DOMRect
      anchor: "left" | "right"
    }[] = [
      { el: lockupRef.current, before: captured.lockup, anchor: "left" },
      { el: rightRef.current, before: captured.right, anchor: "right" },
    ]

    // Read all AFTER bounds first so layout is flushed once.
    const pairs: FlipPair[] = []
    for (const { el, before, anchor } of targets) {
      if (!el || !before) continue
      const after = el.getBoundingClientRect()
      const dx =
        anchor === "right" ? before.right - after.right : before.left - after.left
      const dy = before.top - after.top
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) continue
      pairs.push({ el, dx, dy })
    }
    if (pairs.length === 0) return

    // Start every animation at the same timeline origin so they share an
    // identical start time, duration, and easing — no sub-frame drift.
    const startTime = document.timeline.currentTime
    for (const { el, dx, dy } of pairs) {
      el.style.willChange = "transform"
      const anim = el.animate(
        [
          { transform: `translate(${dx}px, ${dy}px)` },
          { transform: "translate(0, 0)" },
        ],
        {
          duration: MORPH_DURATION_MS,
          easing: MORPH_EASING,
          fill: "both",
          composite: "replace",
        },
      )
      if (typeof startTime === "number") anim.startTime = startTime
      anim.finished
        .catch(() => {})
        .finally(() => {
          el.style.willChange = ""
        })
    }
  }, [mode])

  // Lock scroll when mobile menu open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <nav
        data-mode={mode}
        aria-label="Primary"
        className="site-nav reveal reveal-d1 fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-7 sm:pt-6 md:px-10 md:pt-7 lg:px-14"
      >
        <div className="site-nav-pill">
          {/* Mark + wordmark */}
          <Link
            ref={lockupRef}
            href="/"
            className="nav-lockup group flex items-center gap-3"
          >
            <span className="relative block h-7 w-7 md:h-8 md:w-8">
              <Image
                src="/media/brand/logo-transparent.png"
                alt="Ace Visuals mark"
                fill
                sizes="32px"
                priority
                className="site-nav-mark object-contain"
              />
            </span>
            <span aria-hidden className="site-nav-rule block h-5 w-px md:h-6" />
            <span className="font-serif text-[16px] leading-[1] tracking-[-0.02em] md:text-[18px]">
              Ace<span className="text-primary not-italic">·</span>Visuals
            </span>
          </Link>

          {/* Center links — desktop only */}
          <ul className="site-nav-links hidden justify-self-center gap-6 font-mono text-[11px] tracking-[0.22em] uppercase md:flex md:gap-7">
            {NAV_LINKS.map((l) => {
              const active = isActive(pathname, l.href)
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    data-active={active ? "" : undefined}
                    className="site-nav-link relative inline-flex items-center"
                  >
                    <span>{l.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div ref={rightRef} className="flex items-center justify-end gap-2.5">
            {onContact ? (
              <Link
                href="/"
                className="site-nav-cta group/cta hidden items-center gap-2 rounded-full py-1 pr-3.5 pl-1 text-[11px] tracking-wide whitespace-nowrap sm:inline-flex"
              >
                <span aria-hidden className="site-nav-cta-chip grid size-5 place-items-center rounded-full">
                  <ArrowLeft
                    size={10}
                    weight="bold"
                    className="transition-transform duration-[260ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:-translate-x-0.5"
                  />
                </span>
                Back to portfolio
              </Link>
            ) : (
              <Link
                href="/contact"
                className="site-nav-cta group/cta hidden items-center gap-2 rounded-full py-1 pr-1 pl-3.5 text-[11px] tracking-wide whitespace-nowrap sm:inline-flex"
              >
                Start a project
                <span aria-hidden className="site-nav-cta-chip grid size-5 place-items-center rounded-full">
                  <ArrowRight
                    size={10}
                    weight="bold"
                    className="transition-transform duration-[260ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:translate-x-0.5"
                  />
                </span>
              </Link>
            )}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              data-open={open ? "" : undefined}
              onClick={() => {
                haptic(10)
                setOpen(true)
              }}
              className="nav-burger site-nav-menu-trigger hairline relative grid h-9 w-9 place-items-center rounded-full md:hidden"
            >
              <span aria-hidden className="nav-burger-bar nav-burger-bar-top" />
              <span aria-hidden className="nav-burger-bar nav-burger-bar-bottom" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className="site-nav-sheet"
        data-open={open ? "" : undefined}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="site-nav-sheet-scrim"
          onClick={() => {
            haptic(8)
            setOpen(false)
          }}
          tabIndex={open ? 0 : -1}
        />
        <div className="site-nav-sheet-panel" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-muted">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => {
                haptic(8)
                setOpen(false)
              }}
              className="hairline border-border grid h-9 w-9 place-items-center rounded-full"
            >
              <CloseIcon size={16} weight="bold" />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-6">
            {NAV_LINKS.map((l, i) => {
              const active = isActive(pathname, l.href)
              return (
                <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    data-active={active ? "" : undefined}
                    onClick={() => haptic(8)}
                    className="site-nav-sheet-link block font-serif text-[44px] leading-[0.95] tracking-[-0.02em]"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
            <li style={{ "--i": NAV_LINKS.length } as React.CSSProperties}>
              <Link
                href="/contact"
                aria-current={onContact ? "page" : undefined}
                data-active={onContact ? "" : undefined}
                onClick={() => haptic(8)}
                className="site-nav-sheet-link block font-serif text-[44px] leading-[0.95] tracking-[-0.02em]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-muted">
            <span aria-hidden className="block h-px w-8 bg-border" />
            <span>Booking Q2</span>
          </div>
        </div>
      </div>
    </>
  )
}
