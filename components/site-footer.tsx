import Image from "next/image"
import Link from "next/link"
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"

export function SiteFooter() {
  return (
    <footer className="site-footer relative mt-12 px-5 pb-4 sm:px-7 sm:pb-6 md:mt-16 md:px-10 md:pb-8 lg:px-14 lg:pb-10">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Brand plate — end-card */}
        <div
          data-reveal
          className="on-scroll brand-plate relative overflow-hidden rounded-md"
        >
          <div className="relative z-10 grid gap-6 px-6 py-12 sm:px-8 md:grid-cols-[auto_1fr_auto] md:items-end md:gap-10 md:px-12 md:py-16">
            {/* Mark */}
            <div className="flex items-center gap-4">
              <span className="relative block h-14 w-14 md:h-20 md:w-20">
                <Image
                  src="/media/brand/logo-transparent.png"
                  alt="Ace Visuals mark"
                  fill
                  sizes="80px"
                  className="object-contain invert dark:invert-0"
                />
              </span>
              <span className="text-ink-muted hidden font-mono text-[10px] leading-[1.4] tracking-[0.22em] uppercase md:block">
                <span className="text-foreground block">AV · Independent</span>
                <span className="block">Est. MMXX</span>
              </span>
            </div>

            {/* Wordmark */}
            <div className="md:justify-self-center md:text-center">
              <h2 className="font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.02em] sm:text-[56px] md:text-[72px] lg:text-[84px]">
                Ace <em className="text-primary not-italic">Visuals</em>
              </h2>
            </div>

            {/* Contact lockup */}
            <div className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase md:text-right">
              <a
                href="mailto:andrew@acevisuals.io"
                className="text-foreground hover:text-primary link-u font-serif text-base tracking-normal normal-case transition-colors"
              >
                andrew@acevisuals.io
              </a>
              <div className="mt-3 flex gap-3 md:justify-end">
                <a
                  href="https://www.instagram.com/ace_visuals.3d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram — @ace_visuals.3d"
                  className="hairline border-border text-foreground/75 hover:text-primary hover:border-primary/55 grid size-8 place-items-center rounded-full border transition-colors duration-[200ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <InstagramLogo size={14} weight="regular" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon row */}
        <div className="text-ink-muted mt-5 grid grid-cols-2 items-center gap-3 font-mono text-[10px] tracking-[0.18em] tabular-nums uppercase md:grid-cols-3">
          <span className="tracking-[0.18em]">© MMXXVI · Ace·Visuals</span>
          <span className="hidden justify-self-center md:inline">
            41.8°N / 87.6°W — In Production
          </span>
          <span className="inline-flex items-center justify-end gap-1.5">
            Colophon
          </span>
        </div>
      </div>
    </footer>
  )
}
