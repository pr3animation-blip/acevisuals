/// <reference types="react/canary" />
import { ViewTransition } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LoopingVideo } from "@/components/looping-video"
import { SwipeHaptics } from "@/components/swipe-haptics"
import { WORK_IMAGES, type WorkImage } from "@/lib/work-images"
import { WORK_VIDEOS } from "@/lib/work-videos"

export const metadata: Metadata = {
  title: "Selected Work — Product Films, Brand Visuals & Cinematic CG",
  description:
    "A working index of motion, product, and brand work — looping reel cuts, render-index stills, and a TIE-fighter case study. End-to-end CG by one operator.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    title: "Selected Work — Ace Visuals",
    description:
      "Reel cuts, product films, and cinematic stills. End-to-end CG by one operator.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work — Ace Visuals",
    description:
      "Reel cuts, product films, and cinematic stills. End-to-end CG by one operator.",
  },
}

const TILES = WORK_IMAGES.filter((img) => img.section === "tiles")
const RENDER_INDEX = WORK_IMAGES.filter(
  (img) => img.section === "render-index",
)
const CASE_STUDY_GRID = WORK_IMAGES.filter(
  (img) => img.section === "case-study-grid",
)

const CASE_STUDY_TAGS = ["Modeling", "Look-dev", "Lighting", "Compositing"]

const CASE_STUDY_LAYOUT: { className: string; sizes: string }[] = [
  {
    className: "row-span-2",
    sizes: "(min-width: 1024px) 480px, 60vw",
  },
  {
    className: "",
    sizes: "(min-width: 1024px) 240px, 30vw",
  },
  {
    className: "",
    sizes: "(min-width: 1024px) 240px, 30vw",
  },
]

export default function WorkPage() {
  return (
    <main className="site-page relative min-h-svh bg-background text-foreground">
      <SwipeHaptics />
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="px-5 pt-10 pb-10 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* Page header */}
          <header className="pb-12 md:pb-16">
            <Eyebrow tone="primary" index="01">
              Work
            </Eyebrow>
            <h1 className="mt-4 text-balance font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              Selected
              <span className="sr-only"> </span>
              <br />
              <em className="text-primary not-italic">work</em>.
            </h1>
            <p className="text-ink-muted mt-7 max-w-[58ch] text-pretty text-sm leading-[1.7] md:text-base">
              A working index — film, brand, product. Each tile is a frame from
              a longer story; click through for treatment, stills, and craft
              notes.
            </p>
          </header>

          {/* ---------- REEL ---------- */}
          <section>
            <header className="flex items-baseline justify-between pb-6">
              <div>
                <Eyebrow tone="primary" index="01">
                  Reel
                </Eyebrow>
                <h2 className="mt-3 font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl">
                  Motion <em className="text-primary not-italic">cuts</em>.
                </h2>
              </div>
              <Eyebrow>01 / Reel</Eyebrow>
            </header>

            <p className="text-ink-muted max-w-[58ch] pb-8 text-pretty text-sm leading-[1.7] md:pb-10">
              Looping previews — muted by default. Click any frame to open
              the full piece in a new tab.
            </p>

            <div className="swipe-row flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:grid-cols-12 md:gap-4 md:overflow-visible md:snap-none">
              {WORK_VIDEOS.map((clip) => (
                <a
                  key={clip.slug}
                  href={clip.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group hairline border-border bg-card relative aspect-video shrink-0 basis-[85%] snap-center overflow-hidden rounded-md md:basis-auto md:shrink md:snap-align-none ${clip.span}`}
                >
                  <div className="media-clip">
                    <LoopingVideo src={clip.src} />
                  </div>
                  <div className="relative z-10 flex h-full flex-col justify-end p-3.5 md:p-4">
                    <div className="flex items-end justify-between gap-3">
                      <h3 className="tile-title hairline border-border w-fit rounded-sm border bg-card px-2 py-1 font-serif text-[14px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[16px]">
                        {clip.title}
                      </h3>
                      <span
                        aria-hidden
                        className="bg-background/85 hairline border-border grid size-7 shrink-0 place-items-center rounded-full border text-white opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                      >
                        <ArrowUpRight size={12} weight="bold" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ---------- SELECTED WORK ---------- */}
          <section className="mt-20 md:mt-28">
            <header className="flex items-baseline justify-between pb-6">
              <h2 className="font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl">
                Selected work
              </h2>
              <Eyebrow>02 / Index</Eyebrow>
            </header>

            <div className="swipe-row flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:auto-rows-[130px] md:grid-cols-6 md:gap-4 md:overflow-visible md:snap-none">
              {TILES.map((tile) => {
                const arrowSize =
                  tile.size === "lg"
                    ? "size-9"
                    : tile.size === "md"
                      ? "size-7"
                      : "size-6"
                return (
                  <Link
                    key={tile.slug}
                    href={`/work/image/${tile.slug}`}
                    className={`group hairline border-border bg-card relative aspect-[4/3] shrink-0 basis-[85%] snap-center overflow-hidden rounded-md md:aspect-auto md:basis-auto md:shrink md:snap-align-none ${tile.span ?? ""}`}
                  >
                    <ViewTransition name={`image-${tile.slug}`}>
                      <div className="media-still">
                        <Image
                          src={tile.src}
                          alt={tile.alt}
                          fill
                          sizes={
                            tile.size === "lg"
                              ? "(min-width: 1024px) 780px, 100vw"
                              : "(min-width: 1024px) 380px, 50vw"
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
                    <div className="relative z-10 flex h-full flex-col justify-end p-3.5 md:p-4">
                      <div className="flex items-end justify-between gap-3">
                        <h3
                          className={`tile-title hairline border-border w-fit rounded-sm border bg-card px-2 py-1 font-serif font-normal leading-[1.1] tracking-[-0.01em] ${
                            tile.size === "lg"
                              ? "text-[22px] md:text-[26px]"
                              : tile.size === "md"
                                ? "text-[16px] md:text-[18px]"
                                : "text-[14px] md:text-[15px]"
                          }`}
                        >
                          {tile.title}
                        </h3>
                        <span
                          aria-hidden
                          className={`bg-background/85 hairline border-border grid ${arrowSize} shrink-0 place-items-center rounded-full border text-white opacity-70 transition-opacity duration-200 group-hover:opacity-100`}
                        >
                          <ArrowUpRight
                            size={tile.size === "lg" ? 14 : 12}
                            weight="bold"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Render index */}
            <header className="mt-12 flex items-baseline justify-between pb-4 md:mt-16">
              <Eyebrow>Render index</Eyebrow>
              <Eyebrow>a — e</Eyebrow>
            </header>
            <div className="swipe-row flex snap-x snap-proximity gap-3 overflow-x-auto md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:snap-none">
              {RENDER_INDEX.map((item) => (
                <figure
                  key={item.slug}
                  className="hairline border-border bg-card relative aspect-[3/4] shrink-0 basis-[45%] snap-start overflow-hidden rounded-md md:basis-auto md:shrink md:snap-align-none"
                >
                  <div className="media-still">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 200px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="relative z-10 flex h-full flex-col justify-end p-3">
                    <h4 className="tile-title hairline border-border w-fit rounded-sm border bg-card px-2 py-1 font-serif text-[13px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[14px]">
                      {item.title}
                    </h4>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Featured case study cross-link */}
          <section className="mt-20 grid gap-10 py-14 md:mt-28 md:grid-cols-[1fr_1.35fr] md:gap-14 md:py-20">
            <div>
              <Eyebrow tone="primary" index="03">
                Case study
              </Eyebrow>
              <h3 className="mt-3 text-balance font-serif text-[28px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[34px]">
                TIE — a personal study in{" "}
                <em className="text-primary not-italic">mass &amp; menace</em>.
              </h3>
              <p className="text-ink-muted mt-5 max-w-[50ch] text-pretty text-sm leading-[1.7]">
                Full CG modeling, look-dev, and lighting. Every panel hand-placed,
                every solar-array louver traced to reference. Rendered against a
                void so the silhouette does the acting.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {CASE_STUDY_TAGS.map((t) => (
                  <li key={t}>
                    <Badge variant="mono">{t}</Badge>
                  </li>
                ))}
              </ul>
              <Link
                href="/work/tie"
                className="text-foreground hover:text-primary mt-8 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <span className="link-u">Read the full case study</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>

            <div className="grid aspect-[4/3] grid-cols-[2fr_1fr] grid-rows-2 gap-2 md:gap-3">
              {CASE_STUDY_GRID.map((image: WorkImage, i: number) => {
                const layout = CASE_STUDY_LAYOUT[i] ?? CASE_STUDY_LAYOUT[1]
                return (
                  <Link
                    key={image.slug}
                    href={`/work/image/${image.slug}`}
                    className={`group hairline border-border relative overflow-hidden rounded-md ${layout.className}`}
                  >
                    <ViewTransition name={`image-${image.slug}`}>
                      <div className="media-still">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes={layout.sizes}
                          className="object-cover"
                        />
                      </div>
                    </ViewTransition>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
