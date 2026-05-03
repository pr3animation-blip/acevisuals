/// <reference types="react/canary" />
import { ViewTransition } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/eyebrow"
import { WORK_IMAGES } from "@/lib/work-images"

const REEL_VIDEO_URL =
  "https://pqr8hw3l69.ufs.sh/f/imAJ8rSJG1YPC4rV0XWuwilxGK4t1ZPgXMervqCjBVE02SUT"

const SELECTED_SLUGS = [
  "tie-front",
  "piper-reveal",
  "archer-hangar",
] as const

const SELECTED_WORK = SELECTED_SLUGS.map((slug) => {
  const match = WORK_IMAGES.find((img) => img.slug === slug)
  if (!match) throw new Error(`Selected work slug not found: ${slug}`)
  return match
})

const MARQUEE_TOKENS = [
  "Cinema 4D",
  "Houdini",
  "Blender",
  "Octane",
  "After Effects",
  "Unreal Engine",
  "Redshift",
  "Embergen",
  "Nuke",
  "Substance",
]

const TRANSLATED_CARDS = [
  {
    k: "Product · Brand",
    t: "Product films & launches",
    body: "Hero films for product launches, ad campaigns, and landing pages. Photoreal models, controlled lighting, and motion that sells the object — without flying a camera crew or shipping prototypes.",
    outcome: "Sketch to 30-second film · 4–6 weeks",
  },
  {
    k: "Film · Editorial",
    t: "Brand films & cinematic visuals",
    body: "Worlds you can't (or shouldn't) shoot on location. Aircraft on a polished hangar floor, underwater scenes without a tank, sci-fi establishing shots at a fraction of a VFX-house quote.",
    outcome: "One operator · full pipeline · theatrical look",
  },
  {
    k: "Pitch · R&D",
    t: "Pitch reels & R&D",
    body: "Look-dev, key art, and motion tests for teams pitching a campaign, a product, or a film. Useful when you need a believable \"what would this look like?\" before you green-light the real thing.",
    outcome: "Treatments and stills · 5 days · direct line",
  },
]

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background text-foreground">
      {/* ---------- HERO — full-bleed cinematic title card ---------- */}
      <section className="hero-cinema relative h-svh w-full overflow-hidden bg-black text-white">
        {/* Layer 1 — still fallback (visible until <video> loads) */}
        <div className="absolute inset-0">
          <Image
            src="/media/brand/header-still.png"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            priority
            className="hero-still object-cover"
          />
        </div>

        {/* Layer 2 — video. Source is a placeholder path; fallback still shows through until it lands. */}
        <video
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/media/brand/header-still.png"
        >
          <source
            src="https://pqr8hw3l69.ufs.sh/f/imAJ8rSJG1YPDGtDldjONgTRkGt0phnJjwimXUHraYS3oA1e"
            type="video/webm"
            media="(max-width: 767px)"
          />
          <source
            src="https://pqr8hw3l69.ufs.sh/f/imAJ8rSJG1YPSbUjAzr2BlaDYtyeHFVp85uEiNqwU6CrTQg3"
            type="video/webm"
            media="(max-width: 819px)"
          />
          <source
            src="https://pqr8hw3l69.ufs.sh/f/imAJ8rSJG1YP6gYaDaVlEtZy8GzfS9AoL3HCagXid1eRjqYv"
            type="video/webm"
            media="(max-width: 1279px)"
          />
          <source
            src="https://pqr8hw3l69.ufs.sh/f/imAJ8rSJG1YPVMFc9CKRMLmY6K4T3UANqCbkWonGg8pajlBI"
            type="video/webm"
          />
        </video>

        {/* Layer 3 — gradient floors for legibility + brand-tinted vignette */}
        <div aria-hidden className="hero-grad absolute inset-0 pointer-events-none" />

        {/* HERO CONTENT — stacked column on mobile (primary full-width, secondary
            pill centered beneath); inline row centered at sm; bottom-left film-
            title placement at md+. */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-10 sm:px-7 sm:pb-12 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
          <div className="reveal reveal-d5 flex flex-col items-center gap-3 sm:flex-row sm:flex-nowrap sm:justify-center md:justify-start md:gap-4">
            <Button
              asChild
              size="lg"
              className="h-11 w-full justify-center gap-2 rounded-full px-5 text-[12px] tracking-[0.05em] sm:w-auto"
            >
              <Link href="/work">
                See my work
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </Button>
            <Link
              href="/contact"
              className="hairline inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 font-mono text-[10px] tracking-[0.22em] text-white/85 uppercase backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Start a project
              <ArrowUpRight size={12} weight="bold" />
            </Link>
            <span className="hairline hidden h-11 items-center gap-2 rounded-full border border-white/20 px-4 font-mono text-[10px] tracking-[0.22em] text-white/70 uppercase backdrop-blur-sm sm:inline-flex">
              <span aria-hidden className="hero-status-dot block h-1.5 w-1.5 rounded-full bg-primary" />
              Booking Q2
            </span>
          </div>
        </div>
      </section>

      {/* ---------- TOOLING INTRO — plain-English context for the marquee ---------- */}
      <section className="bg-background py-4">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 md:px-10 lg:px-14">
          <p className="text-ink-muted text-center font-mono text-[10px] tracking-[0.22em] uppercase">
            The full pipeline, run from one chair —
          </p>
        </div>
      </section>

      {/* ---------- TOOLS MARQUEE — moving band under the hero ---------- */}
      <section
        aria-label="Toolset"
        className="marquee bg-primary text-primary-foreground relative overflow-hidden border-y border-black/10 py-3"
      >
        <div className="marquee-track font-mono text-[10px] tracking-[0.25em] uppercase">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="inline-flex shrink-0 gap-10 pr-10">
              {MARQUEE_TOKENS.map((t, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="inline-flex items-center gap-10"
                >
                  <span>{t}</span>
                  <span aria-hidden className="opacity-60">
                    ✦
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- REEL — single 16:9 cinematic card with auto-loop ---------- */}
      <section className="bg-background relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 md:px-10 lg:px-14">
          <header
            data-reveal
            className="on-scroll mb-8 flex items-end justify-between gap-6 md:mb-12"
          >
            <div>
              <Eyebrow tone="primary" index="02">
                Reel
              </Eyebrow>
              <h2 className="mt-4 text-balance font-serif text-[36px] leading-[1.02] font-normal tracking-[-0.03em] md:text-[52px]">
                Ninety seconds, end to{" "}
                <em className="text-primary not-italic">end</em>.
              </h2>
            </div>
            <span className="text-ink-muted hidden shrink-0 pb-2 font-mono text-[10px] tracking-[0.22em] uppercase sm:inline-flex">
              MMXXVI · selected cuts
            </span>
          </header>

          <Link
            href="/work"
            data-reveal
            className="on-scroll group reel-frame relative block aspect-video overflow-hidden rounded-md ring-1 ring-white/10"
            aria-label="Browse the work — selected reel"
          >
            <video
              src={REEL_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.015]"
              aria-hidden="true"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/40"
            />

<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 md:px-8 md:pb-7">
              <p className="font-serif text-[20px] leading-[1.05] font-normal tracking-[-0.02em] text-white md:text-[26px]">
                Selected work —{" "}
                <em className="text-primary not-italic">2024 / 2026</em>
              </p>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70">
                Watch
                <ArrowUpRight
                  size={12}
                  weight="bold"
                  className="ml-1.5 inline-block"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ---------- SELECTED WORK — proof of craft, with shared-element morph into /work/image/[slug] ---------- */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 md:px-10 lg:px-14">
          <header
            data-reveal
            className="on-scroll mb-8 flex items-end justify-between gap-6 md:mb-12"
          >
            <div>
              <Eyebrow tone="primary" index="03">
                Selected
              </Eyebrow>
              <h2 className="mt-4 text-balance font-serif text-[36px] leading-[1.02] font-normal tracking-[-0.03em] md:text-[52px]">
                A few <em className="text-primary not-italic">frames</em>.
              </h2>
            </div>
            <Link
              href="/work"
              className="link-u text-foreground hidden shrink-0 items-center gap-2 pb-2 font-mono text-[10px] tracking-[0.22em] uppercase sm:inline-flex"
            >
              View all work
              <ArrowUpRight size={12} weight="bold" />
            </Link>
          </header>

          <div className="grid grid-cols-1 gap-3 md:auto-rows-[260px] md:grid-cols-3 md:gap-4">
            {SELECTED_WORK.map((tile, i) => {
              const isHero = i === 0
              return (
                <Link
                  key={tile.slug}
                  href={`/work/image/${tile.slug}`}
                  data-reveal
                  style={{ "--stagger": i } as React.CSSProperties}
                  className={`on-scroll group hairline border-border bg-card relative aspect-[4/3] overflow-hidden rounded-md md:aspect-auto ${
                    isHero ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <ViewTransition name={`image-${tile.slug}`}>
                    <div className="media-still">
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes={
                          isHero
                            ? "(min-width: 1024px) 780px, 100vw"
                            : "(min-width: 1024px) 380px, 100vw"
                        }
                        className="object-cover"
                        style={
                          tile.position
                            ? { objectPosition: tile.position }
                            : undefined
                        }
                      />
                    </div>
                  </ViewTransition>
                  <div className="relative z-10 flex h-full flex-col justify-between p-3.5 md:p-4">
                    <Badge variant="media">{tile.meta}</Badge>
                    <div className="flex items-end justify-between gap-3">
                      <h3
                        className={`tile-title hairline border-border w-fit rounded-sm border px-2 py-1 font-serif font-normal leading-[1.1] tracking-[-0.01em] ${
                          isHero
                            ? "text-[20px] md:text-[24px]"
                            : "text-[14px] md:text-[15px]"
                        }`}
                      >
                        {tile.title}
                      </h3>
                      <span
                        aria-hidden
                        className={`text-primary bg-background/85 hairline border-border grid shrink-0 place-items-center rounded-full border opacity-70 transition-opacity duration-200 group-hover:opacity-100 ${
                          isHero ? "size-9" : "size-7"
                        }`}
                      >
                        <ArrowUpRight
                          size={isHero ? 14 : 12}
                          weight="bold"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- TRANSLATED — plain-English value for non-industry buyers ---------- */}
      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 md:px-10 lg:px-14">
          <header data-reveal className="on-scroll mb-10 max-w-[60ch] md:mb-14">
            <Eyebrow tone="primary" index="04">
              For brands &amp; founders
            </Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-[36px] leading-[1.02] font-normal tracking-[-0.03em] md:text-[52px]">
              Hiring a 3D generalist,
              <span className="sr-only"> </span>
              <br />
              <em className="text-primary not-italic">translated</em>.
            </h2>
            <p className="text-ink-muted mt-6 max-w-[60ch] text-pretty text-sm leading-[1.7] md:text-[15px]">
              Most studios staff a project with a modeler, a lighter, a sim
              artist, an animator, and a comp artist — five people, five
              rates, five handoffs. A generalist does all of that. One brain
              on the shot, from blank file to finished frame. Faster
              turnarounds, fewer middlemen, lower budget — without the look
              you&rsquo;d get from a stock asset or a freelancer who only
              knows half the pipeline.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {TRANSLATED_CARDS.map((c, i) => (
              <div
                key={c.k}
                data-reveal
                style={{ "--stagger": i } as React.CSSProperties}
                className="on-scroll bezel-shell group/bezel relative rounded-[2rem] p-1.5"
              >
                <article className="bezel-core relative flex h-full flex-col rounded-[1.625rem] px-6 py-7 md:px-7 md:py-8">
                  <header>
                    <Eyebrow tone="primary">
                      {`0${i + 1} · ${c.k}`}
                    </Eyebrow>
                    <h3 className="mt-4 min-h-[2lh] font-serif text-[24px] leading-[1.1] font-normal tracking-[-0.02em] md:text-[26px]">
                      {c.t}
                    </h3>
                  </header>
                  <p className="text-ink-muted flex-1 pt-5 pb-6 text-sm leading-[1.65]">
                    {c.body}
                  </p>
                  <footer>
                    <p className="text-foreground min-h-[2lh] font-mono text-[10px] leading-[1.55] tracking-[0.18em] uppercase">
                      {c.outcome}
                    </p>
                  </footer>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
