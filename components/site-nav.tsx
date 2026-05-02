"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  List as MenuIcon,
  X as CloseIcon,
} from "@phosphor-icons/react/dist/ssr"

type NavLink = { label: string; href: string }

const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Hero mode = transparent overlay over the homepage video.
  // Interior mode = blurred pill over content on every other route.
  const mode: "hero" | "interior" = pathname === "/" ? "hero" : "interior"
  const onContact = pathname === "/contact"

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
        className="site-nav reveal reveal-d1 fixed inset-x-0 top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center gap-6 px-5 pt-5 sm:px-7 sm:pt-6 md:grid-cols-[1fr_auto_1fr] md:px-10 md:pt-7 lg:px-14"
      >
        {/* Mark + wordmark */}
        <Link href="/" className="nav-lockup group flex items-center gap-3">
          <span className="relative block h-8 w-8 md:h-9 md:w-9">
            <Image
              src="/media/brand/logo-transparent.png"
              alt="Ace Visuals mark"
              fill
              sizes="36px"
              priority
              className="site-nav-mark object-contain"
            />
          </span>
          <span aria-hidden className="site-nav-rule block h-6 w-px md:h-7" />
          <span className="font-serif text-[17px] leading-[1] tracking-[-0.02em] md:text-[19px]">
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
        <div className="flex items-center justify-end gap-3">
          {onContact ? (
            <Link
              href="/"
              className="site-nav-cta hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] tracking-wide whitespace-nowrap sm:inline-flex"
            >
              <ArrowLeft size={12} weight="bold" />
              Back to portfolio
            </Link>
          ) : (
            <Link
              href="/contact"
              className="site-nav-cta hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] tracking-wide whitespace-nowrap sm:inline-flex"
            >
              Start a project
              <ArrowRight size={12} weight="bold" />
            </Link>
          )}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="site-nav-menu-trigger hairline grid h-9 w-9 place-items-center rounded-full md:hidden"
          >
            <MenuIcon size={16} weight="bold" />
          </button>
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
          onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
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
