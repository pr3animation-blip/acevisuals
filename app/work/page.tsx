import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Eyebrow } from "@/components/ui/eyebrow"

type Tile = {
  title: string
  meta: string
  src: string
  alt: string
  span: string
  size: "sm" | "md" | "lg"
  position?: string
  href?: string
}

type RenderItem = {
  title: string
  meta: string
  src: string
  alt: string
}

const RENDER_INDEX: RenderItem[] = [
  {
    title: "Splash Bottle",
    meta: "a · Sim",
    src: "/media/products/bottle.webp",
    alt: "Insulated bottle suspended in frozen water splash",
  },
  {
    title: "Berry Cola",
    meta: "b · Product",
    src: "/media/products/can.webp",
    alt: "Energy drink can with berries in mid-air",
  },
  {
    title: "Noir Lipstick",
    meta: "c · Beauty",
    src: "/media/products/lipstick.webp",
    alt: "Deep red lipstick, angled bevel, water beads",
  },
  {
    title: "Keycap · 01",
    meta: "d · Product",
    src: "/media/products/keypop.webp",
    alt: "Mechanical keycap lifted out of a keyboard in a purple halo",
  },
  {
    title: "Resin Figure",
    meta: "e · Study",
    src: "/media/products/other-card.webp",
    alt: "Translucent blue resin figurine on stone",
  },
]

const TILES: Tile[] = [
  {
    title: "Imperial TIE-Fighter",
    meta: "Personal · Film",
    src: "/media/tie-fighter/front.webp",
    alt: "Imperial TIE-fighter, frontal hero render, shallow key light on the cockpit",
    span: "col-span-6 row-span-3 md:col-span-4",
    size: "lg",
    position: "center 40%",
    href: "/work/tie",
  },
  {
    title: "Piper Archer TX",
    meta: "Brand Film · Piper",
    src: "/media/aviation/piper-reveal.webp",
    alt: "Piper Archer TX — nose badge lit by a single slash of studio light",
    span: "col-span-3 row-span-2 md:col-span-2",
    size: "md",
  },
  {
    title: "Opus — Eau de Parfum",
    meta: "Product · Render",
    src: "/media/products/perfume-frame.webp",
    alt: "Amber perfume bottle suspended in amber liquid beads",
    span: "col-span-3 row-span-2 md:col-span-2",
    size: "md",
  },
  {
    title: "Monitor 01 — Colorway",
    meta: "Product · Look-dev",
    src: "/media/products/headphones.webp",
    alt: "Over-ear headphones in four colorways, studio grey sweep",
    span: "col-span-3 row-span-1 md:col-span-2",
    size: "sm",
    position: "center 45%",
  },
  {
    title: "Writing Set",
    meta: "Product · R&D",
    src: "/media/products/pens.webp",
    alt: "Ring of pens converging, one central stylus in hero light",
    span: "col-span-3 row-span-1 md:col-span-2",
    size: "sm",
  },
  {
    title: "Archer TX — Hangar",
    meta: "Aviation · Editorial",
    src: "/media/aviation/field-0003.webp",
    alt: "Piper Archer TX fuselage detail with the Archer TX wordmark",
    span: "col-span-6 row-span-2 md:col-span-3",
    size: "md",
    position: "center 55%",
  },
  {
    title: "TIE · Wing Detail",
    meta: "Study · Personal",
    src: "/media/tie-fighter/wing.webp",
    alt: "TIE-fighter wing hub from behind, solar panel geometry",
    span: "col-span-6 row-span-1 md:col-span-3",
    size: "sm",
    position: "center 40%",
    href: "/work/tie",
  },
]

const CASE_STUDY_TAGS = ["Modeling", "Look-dev", "Lighting", "Compositing"]

export default function WorkPage() {
  return (
    <main className="site-page relative min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="px-5 pt-10 pb-10 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* Page header */}
          <header className="reveal reveal-d2 pb-12 md:pb-16">
            <Eyebrow tone="primary" index="01">
              Work
            </Eyebrow>
            <h1 className="mt-4 font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              Selected
              <br />
              <em className="text-primary not-italic">work</em>.
            </h1>
            <p className="text-ink-muted mt-7 max-w-[58ch] text-sm leading-[1.7] md:text-base">
              A working index — film, brand, product. Each tile is a frame from
              a longer story; click through for treatment, stills, and craft
              notes.
            </p>
          </header>

          {/* ---------- SELECTED WORK ---------- */}
          <section>
            <header
              data-reveal
              className="on-scroll flex items-baseline justify-between pb-6"
            >
              <h2 className="font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl">
                Selected work
              </h2>
              <Eyebrow>01 / Index</Eyebrow>
            </header>

            <div className="grid auto-rows-[110px] grid-cols-6 gap-3 md:auto-rows-[130px] md:gap-4">
              {TILES.map((tile, i) => {
                const Wrapper: React.ElementType = tile.href ? Link : "div"
                const props = tile.href ? { href: tile.href } : {}
                return (
                  <Wrapper
                    key={tile.title}
                    {...props}
                    data-reveal
                    style={{ "--stagger": i } as React.CSSProperties}
                    className={`on-scroll group hairline border-border bg-card relative overflow-hidden rounded-md ${tile.span}`}
                  >
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
                    <div className="relative z-10 flex h-full flex-col justify-between p-3.5 md:p-4">
                      <Badge variant="media">{tile.meta}</Badge>
                      <div className="flex items-end justify-between gap-3">
                        <h3
                          className={`tile-title hairline border-border w-fit rounded-sm border px-2 py-1 font-serif font-normal leading-[1.1] tracking-[-0.01em] ${
                            tile.size === "lg"
                              ? "text-[22px] md:text-[26px]"
                              : tile.size === "md"
                                ? "text-[16px] md:text-[18px]"
                                : "text-[14px] md:text-[15px]"
                          }`}
                        >
                          {tile.title}
                        </h3>
                        {tile.href ? (
                          <span className="text-primary bg-background/80 hairline border-border grid h-6 w-6 shrink-0 place-items-center rounded-full border opacity-0 transition-opacity group-hover:opacity-100">
                            <ArrowUpRight size={11} weight="bold" />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            {/* Render index */}
            <header
              data-reveal
              className="on-scroll mt-12 flex items-baseline justify-between pb-4 md:mt-16"
            >
              <Eyebrow>Render index</Eyebrow>
              <Eyebrow>a — e</Eyebrow>
            </header>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {RENDER_INDEX.map((item, i) => (
                <div
                  key={item.src}
                  data-reveal
                  style={{ "--stagger": i } as React.CSSProperties}
                  className="on-scroll group hairline border-border bg-card relative aspect-[3/4] overflow-hidden rounded-md"
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
                  <div className="relative z-10 flex h-full flex-col justify-between p-3">
                    <Badge variant="media">{item.meta}</Badge>
                    <h4 className="tile-title hairline border-border w-fit rounded-sm border px-2 py-1 font-serif text-[13px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[14px]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured case study cross-link */}
          <section
            data-reveal
            className="on-scroll mt-20 grid gap-10 py-14 md:mt-28 md:grid-cols-[1fr_1.35fr] md:gap-14 md:py-20"
          >
            <div>
              <Eyebrow tone="primary" index="02">
                Case study
              </Eyebrow>
              <h3 className="mt-3 font-serif text-[28px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[34px]">
                TIE — a personal study in{" "}
                <em className="text-primary not-italic">mass &amp; menace</em>.
              </h3>
              <p className="text-ink-muted mt-5 max-w-[50ch] text-sm leading-[1.7]">
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

            <Link href="/work/tie" className="group block">
              <div
                data-parallax
                data-parallax-speed="0.06"
                className="grid aspect-[4/3] grid-cols-[2fr_1fr] grid-rows-2 gap-2 md:gap-3"
              >
                <div className="hairline border-border relative row-span-2 overflow-hidden rounded-md">
                  <div className="media-still">
                    <Image
                      src="/media/tie-fighter/wide.webp"
                      alt="TIE-fighter — classic wide establishing shot"
                      fill
                      sizes="(min-width: 1024px) 480px, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="hairline border-border relative overflow-hidden rounded-md">
                  <div className="media-still">
                    <Image
                      src="/media/tie-fighter/back-high.webp"
                      alt="TIE-fighter — three-quarter rear, high angle"
                      fill
                      sizes="(min-width: 1024px) 240px, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="hairline border-border relative overflow-hidden rounded-md">
                  <div className="media-still">
                    <Image
                      src="/media/tie-fighter/front-alt.webp"
                      alt="TIE-fighter — cockpit detail, profile"
                      fill
                      sizes="(min-width: 1024px) 240px, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
