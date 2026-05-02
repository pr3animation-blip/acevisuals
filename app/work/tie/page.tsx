import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Eyebrow } from "@/components/ui/eyebrow"

const STILLS = [
  {
    src: "/media/tie-fighter/front.webp",
    alt: "TIE-fighter — frontal hero render, shallow key light on the cockpit",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/3]",
    position: "center 40%",
  },
  {
    src: "/media/tie-fighter/wide.webp",
    alt: "TIE-fighter — classic wide establishing shot",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/media/tie-fighter/back-high.webp",
    alt: "TIE-fighter — three-quarter rear, high angle",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/media/tie-fighter/back-low.webp",
    alt: "TIE-fighter — rear low, running lights glowing",
    span: "",
    aspect: "aspect-[4/5]",
    position: "center 55%",
  },
  {
    src: "/media/tie-fighter/wing.webp",
    alt: "TIE-fighter — wing hub from behind, solar panel geometry",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
    position: "center 40%",
  },
  {
    src: "/media/tie-fighter/front-alt.webp",
    alt: "TIE-fighter — cockpit detail, profile",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
]

const TAGS = ["Modeling", "Look-dev", "Lighting", "Compositing"]

const NOTES = [
  {
    k: "Reference",
    t: "Original 1977 ILM models",
    body: "Dimensions, panel breaks, and louver geometry traced from the surviving studio shots; small cheats made to read in modern aspect ratios.",
  },
  {
    k: "Look-dev",
    t: "Mass over menace",
    body: "Soft key, hard fill, no rim. The silhouette has to do the acting; the panel work shows up only when the camera leans in.",
  },
  {
    k: "Lighting",
    t: "Single source, void floor",
    body: "Three-light setups felt staged. One key, an ambient bounce off invisible geometry, and a tiny practical for the cockpit.",
  },
]

export default function TieCaseStudyPage() {
  return (
    <main className="site-page relative min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="px-5 pt-10 pb-10 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* Breadcrumb */}
          <Eyebrow className="reveal reveal-d1">
            <Link
              href="/work"
              className="link-u inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <ArrowLeft size={11} weight="bold" />
              All work
            </Link>
            <span aria-hidden className="opacity-50">
              /
            </span>
            <span>TIE</span>
          </Eyebrow>

          {/* Header */}
          <header className="reveal reveal-d2 pt-8 pb-12 md:pt-12 md:pb-16">
            <Eyebrow tone="primary">Case study · 02 / TIE</Eyebrow>
            <h1 className="mt-4 text-balance font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              Mass &amp;
              <span className="sr-only"> </span>
              <br />
              <em className="text-primary not-italic">menace</em>.
            </h1>
            <p className="text-ink-muted mt-7 max-w-[58ch] text-pretty text-sm leading-[1.7] md:text-base">
              A personal study in CG craft. Full modeling, look-dev, and
              lighting — every panel hand-placed, every solar-array louver
              traced to reference. Rendered against a void so the silhouette
              does the acting.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <li key={t}>
                  <Badge variant="mono">{t}</Badge>
                </li>
              ))}
            </ul>
          </header>

          {/* Hero still */}
          <div
            data-reveal
            className="on-scroll hairline border-border relative aspect-[16/9] overflow-hidden rounded-md"
          >
            <div className="media-still">
              <Image
                src="/media/tie-fighter/front.webp"
                alt="TIE-fighter — frontal hero"
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                priority
                className="object-cover"
                style={{ objectPosition: "center 38%" }}
              />
            </div>
            <Badge variant="media" className="absolute bottom-3 left-3">
              Frame · 0001
            </Badge>
          </div>

          {/* Stills grid */}
          <section className="mt-16 md:mt-24">
            <header
              data-reveal
              className="on-scroll mb-6 flex items-baseline justify-between"
            >
              <h2 className="font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl">
                Stills
              </h2>
              <Eyebrow>01 — 06</Eyebrow>
            </header>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {STILLS.map((s, i) => (
                <div
                  key={s.src}
                  data-reveal
                  style={{ "--stagger": i } as React.CSSProperties}
                  className={`on-scroll group hairline border-border bg-card relative overflow-hidden rounded-md ${s.span} ${s.aspect}`}
                >
                  <div className="media-still">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 540px, 50vw"
                      className="object-cover"
                      style={
                        s.position ? { objectPosition: s.position } : undefined
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process notes */}
          <section className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-5">
            {NOTES.map((n, i) => (
              <div
                key={n.k}
                data-reveal
                style={{ "--stagger": i } as React.CSSProperties}
                className="on-scroll relative p-5 md:p-6"
              >
                <Eyebrow tone="primary">
                  {`0${i + 1} · ${n.k}`}
                </Eyebrow>
                <h3 className="mt-4 font-serif text-[24px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[26px]">
                  {n.t}
                </h3>
                <p className="text-ink-muted mt-3 text-sm leading-[1.65]">
                  {n.body}
                </p>
                <span
                  aria-hidden
                  className="text-ink-muted/30 pointer-events-none absolute -right-2 -bottom-3 font-serif text-[80px] leading-none select-none md:text-[96px]"
                >
                  {i + 1}
                </span>
              </div>
            ))}
          </section>

          {/* Next */}
          <section
            data-reveal
            className="on-scroll mt-20 flex items-center justify-between border-t border-border pt-8 md:mt-28 md:pt-10"
          >
            <Link
              href="/work"
              className="text-ink-muted hover:text-foreground link-u inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors"
            >
              <ArrowLeft size={12} weight="bold" />
              All work
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary link-u inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors"
            >
              Start a project
              <ArrowUpRight size={12} weight="bold" />
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
