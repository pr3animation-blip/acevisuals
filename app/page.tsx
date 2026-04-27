import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eyebrow } from "@/components/ui/eyebrow"

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
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/media/brand/header-still.png"
        >
          <source src="/media/hero/showreel.mp4" type="video/mp4" />
        </video>

        {/* Layer 3 — gradient floors for legibility + brand-tinted vignette */}
        <div aria-hidden className="hero-grad absolute inset-0 pointer-events-none" />

        {/* HERO CONTENT — bottom-left film-title placement */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-10 sm:px-7 sm:pb-12 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
          <h1 className="reveal reveal-d4 hero-headline font-serif text-[40px] leading-[0.95] font-normal tracking-[-0.03em] text-white sm:text-[52px] md:text-[64px] lg:text-[76px]">
            Worlds,
            <br />
            <em className="text-primary not-italic">rendered</em>.
          </h1>

          <p className="reveal reveal-d5 mt-5 max-w-[44ch] text-sm leading-[1.55] text-white/80 md:mt-6 md:text-[15px]">
            Product films, brand visuals, and cinematic CG — built
            end-to-end by one person with a six-year shot count.
          </p>

          <div className="reveal reveal-d5 mt-7 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
            <Button
              asChild
              size="lg"
              className="h-11 gap-2 rounded-full px-5 text-[12px] tracking-[0.05em]"
            >
              <Link href="/work">
                Enter the work
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </Button>
            <Link
              href="/contact"
              className="hairline inline-flex h-11 items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 font-mono text-[10px] tracking-[0.22em] text-white/85 uppercase backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10 hover:text-white"
            >
              <span>Start a project</span>
              <ArrowUpRight size={12} weight="bold" />
            </Link>
            <span className="hairline inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-4 font-mono text-[10px] tracking-[0.22em] text-white/70 uppercase backdrop-blur-sm">
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

      {/* ---------- TRANSLATED — plain-English value for non-industry buyers ---------- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-7 md:px-10 lg:px-14">
          <header data-reveal className="on-scroll mb-10 max-w-[60ch] md:mb-14">
            <Eyebrow tone="primary" index="02">
              For brands &amp; founders
            </Eyebrow>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.02] font-normal tracking-[-0.03em] md:text-[52px]">
              Hiring a 3D generalist,
              <br />
              <em className="text-primary not-italic">translated</em>.
            </h2>
            <p className="text-ink-muted mt-6 max-w-[60ch] text-sm leading-[1.7] md:text-[15px]">
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
              <Card
                key={c.k}
                variant="hairline"
                size="none"
                data-reveal
                style={{ "--stagger": i } as React.CSSProperties}
                className="on-scroll relative flex h-full flex-col p-5 md:p-6"
              >
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
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
