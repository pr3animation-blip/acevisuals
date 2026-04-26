import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Play,
} from "@phosphor-icons/react/dist/ssr"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_LINKS = ["Work", "Reel", "Process", "Studio", "Journal"]

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

type Tile = {
  title: string
  meta: string
  src: string
  alt: string
  span: string
  size: "sm" | "md" | "lg"
  position?: string
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
  },
]

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="hairline border-border rounded-sm border px-5 pt-6 pb-10 sm:px-7 md:px-10 md:pt-10 md:pb-16 lg:px-14">
        {/* ---------- NAV ---------- */}
        <nav className="reveal reveal-d1 grid grid-cols-[auto_1fr_auto] items-center gap-6 pb-6 md:grid-cols-[1fr_auto_1fr] md:pb-8">
          <a
            href="#"
            className="nav-lockup group flex items-center gap-3"
          >
            <span className="relative block h-8 w-8 md:h-9 md:w-9">
              <Image
                src="/media/brand/logo-transparent.png"
                alt="Ace Visuals mark"
                fill
                sizes="36px"
                priority
                className="object-contain invert dark:invert-0"
              />
            </span>
            <span
              aria-hidden
              className="hairline border-border block h-6 w-px border-l md:h-7"
            />
            <span className="flex flex-col leading-[1]">
              <span className="font-serif text-[17px] tracking-[-0.02em] italic md:text-[19px]">
                Ace<span className="text-primary not-italic">·</span>Visuals
              </span>
              <span className="text-ink-muted mt-1.5 font-mono text-[8.5px] tracking-[0.28em] uppercase md:text-[9px]">
                Studio · MMXX
              </span>
            </span>
          </a>

          <ul className="text-ink-muted hidden justify-self-center gap-6 text-[11px] tracking-[0.16em] uppercase md:flex md:gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="link-u">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hairline border-foreground hover:bg-foreground hover:text-background hidden items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] tracking-wide whitespace-nowrap transition-colors sm:inline-flex"
            >
              Start a project
              <ArrowRight size={12} weight="bold" />
            </a>
          </div>
        </nav>

        {/* ---------- HERO ---------- */}
        <section className="relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="reveal reveal-d2 text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
              3D generalist · visual storyteller · 2020—∞
            </div>
            <h1 className="reveal reveal-d3 mt-5 font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[56px] md:text-[68px] lg:text-[78px]">
              Worlds,
              <br />
              rendered <em className="text-primary italic">frame</em>
              <br />
              by frame.
            </h1>
            <p className="reveal reveal-d4 text-ink-muted mt-6 max-w-[42ch] text-sm leading-[1.65]">
              A portfolio of motion, form, and narrative — built at the
              intersection of cinema, simulation, and craft. Currently booking
              Q2.
            </p>
            <dl className="reveal reveal-d5 text-ink-muted mt-7 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.14em] uppercase">
              <div>
                <dt className="sr-only">Disciplines</dt>
                <dd>
                  <span className="text-foreground font-medium">3D</span> · Film
                  · Product
                </dd>
              </div>
              <div>
                <dt className="sr-only">Clients</dt>
                <dd>
                  <span className="text-foreground font-medium">Piper</span> /
                  Opus / Monitor 01
                </dd>
              </div>
              <div>
                <dt className="sr-only">Availability</dt>
                <dd>
                  <span className="text-foreground font-medium">Q2</span> open
                </dd>
              </div>
            </dl>
          </div>

          {/* Reel card */}
          <div className="reveal reveal-d4 relative">
            <div data-parallax data-parallax-speed="0.06">
            <div className="group reel-frame hairline border-border bg-card relative aspect-[4/5] overflow-hidden rounded-md">
              <div className="media-still">
                <Image
                  src="/media/brand/header-still.png"
                  alt="Ace Visuals — Showreel 2026 poster"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-white/40 bg-black/20 rounded border border-dashed px-4 py-2.5 font-mono text-[10px] tracking-[0.22em] text-white uppercase backdrop-blur-sm">
                  Showreel 2026
                </div>
              </div>
              <span className="hairline border-white/25 bg-black/45 absolute top-3 left-3 rounded-sm border px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-white uppercase backdrop-blur-sm">
                Reel · 01:42
              </span>
              <button
                type="button"
                aria-label="Play showreel"
                className="bg-primary text-primary-foreground hover:bg-primary/90 absolute right-3 bottom-3 grid h-10 w-10 place-items-center rounded-full transition-colors"
              >
                <Play size={14} weight="fill" className="translate-x-[1px]" />
              </button>
            </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="reveal reveal-d6 marquee bg-primary text-primary-foreground absolute -right-5 -bottom-4 -left-5 overflow-hidden py-2.5 [transform:rotate(-0.4deg)] sm:-right-7 sm:-left-7 md:-right-10 md:-left-10 lg:-right-14 lg:-left-14">
            <div className="marquee-track font-mono text-[10px] tracking-[0.25em] uppercase">
              {Array.from({ length: 2 }).map((_, dup) => (
                <span key={dup} className="inline-flex shrink-0 gap-10 pr-10">
                  {MARQUEE_TOKENS.map((t, i) => (
                    <span key={`${dup}-${i}`} className="inline-flex items-center gap-10">
                      <span>{t}</span>
                      <span aria-hidden className="opacity-60">
                        ✦
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SELECTED WORK ---------- */}
        <section id="work" className="pt-16 md:pt-24">
          <header
            data-reveal
            className="on-scroll flex items-baseline justify-between pb-6"
          >
            <h2 className="font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl">
              Selected <em className="text-primary italic">work</em>
            </h2>
            <span className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase">
              01 / index
            </span>
          </header>

          <div className="grid auto-rows-[110px] grid-cols-6 gap-3 md:auto-rows-[130px] md:gap-4">
            {TILES.map((tile, i) => (
              <a
                key={tile.title}
                href={`#work-${i + 1}`}
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
                        : tile.size === "md"
                          ? "(min-width: 1024px) 380px, 50vw"
                          : "(min-width: 1024px) 380px, 50vw"
                    }
                    className="object-cover"
                    style={
                      tile.position ? { objectPosition: tile.position } : undefined
                    }
                  />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between p-3.5 md:p-4">
                  <span className="text-ink-muted hairline border-border bg-background/85 w-fit rounded-sm border px-1.5 py-0.5 font-mono text-[9px] tracking-[0.14em] uppercase backdrop-blur-sm">
                    {tile.meta}
                  </span>
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
                    <span className="text-primary bg-background/80 hairline border-border grid h-6 w-6 shrink-0 place-items-center rounded-full border opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight size={11} weight="bold" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Render index — product strip using the remaining assets */}
          <header
            data-reveal
            className="on-scroll mt-12 flex items-baseline justify-between pb-4 md:mt-16"
          >
            <h3 className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase">
              Render index
            </h3>
            <span className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase">
              a — e
            </span>
          </header>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {RENDER_INDEX.map((item, i) => (
              <a
                key={item.src}
                href={`#render-${i + 1}`}
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
                  <span className="text-ink-muted hairline border-border bg-background/85 w-fit rounded-sm border px-1.5 py-0.5 font-mono text-[9px] tracking-[0.14em] uppercase backdrop-blur-sm">
                    {item.meta}
                  </span>
                  <h4 className="tile-title hairline border-border w-fit rounded-sm border px-2 py-1 font-serif text-[13px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[14px]">
                    {item.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------- CASE STUDY ---------- */}
        <section className="mt-20 grid gap-10 py-14 md:mt-28 md:grid-cols-[1fr_1.35fr] md:gap-14 md:py-20">
          <div data-reveal className="on-scroll">
            <div className="text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
              Case study · 02
            </div>
            <h3 className="mt-3 font-serif text-[28px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[34px]">
              TIE — a personal study in{" "}
              <em className="text-primary italic">mass & menace</em>.
            </h3>
            <p className="text-ink-muted mt-5 max-w-[50ch] text-sm leading-[1.7]">
              Full CG modeling, look-dev, and lighting. Every panel hand-placed,
              every solar-array louver traced to reference. Rendered against a
              void so the silhouette does the acting.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Modeling", "Look-dev", "Lighting", "Compositing"].map((t) => (
                <li
                  key={t}
                  className="hairline border-border text-ink-muted rounded-full border px-3 py-1 font-mono text-[9px] tracking-[0.14em] uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="#tie"
              className="text-foreground hover:text-primary mt-8 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <span className="link-u">Read the full case study</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>

          <div data-reveal className="on-scroll">
            <div
              data-parallax
              data-parallax-speed="0.08"
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
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section
          id="studio"
          className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24"
        >
          <div className="relative">
            <div data-reveal className="on-scroll">
              <div data-parallax data-parallax-speed="0.05">
                <div className="hairline border-border bg-secondary relative aspect-[4/5] overflow-hidden rounded-md">
                  <div className="media-still">
                    <Image
                      src="/media/tie-fighter/back-low.webp"
                      alt="TIE-fighter — rear low, running lights glowing"
                      fill
                      sizes="(min-width: 1024px) 340px, 50vw"
                      className="object-cover"
                      style={{ objectPosition: "center 55%" }}
                    />
                  </div>
                  <span className="hairline border-white/25 bg-black/45 text-white/90 absolute bottom-3 left-3 rounded-sm border px-2 py-1 font-mono text-[9px] tracking-[0.2em] uppercase backdrop-blur-sm">
                    Studio · Look-dev
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal className="on-scroll">
            <div className="text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
              About · 03
            </div>
            <p className="mt-5 font-serif text-[30px] leading-[1.08] font-normal tracking-[-0.02em] md:text-[38px]">
              I build <em className="text-primary italic">small, strange worlds</em>{" "}
              — then I photograph them like they&rsquo;ve always existed.
            </p>
            <p className="text-ink-muted mt-6 max-w-[60ch] text-sm leading-[1.75]">
              Years between cinema and code. I work with studios, brands, and
              filmmakers who care about the texture of a story as much as the
              shape of it. Pipeline-agnostic, detail-obsessed, occasionally on
              location.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-2.5 md:grid-cols-4">
              {[
                ["Modeling", "Blender · C4D"],
                ["Sim", "Houdini · Embergen"],
                ["Render", "Octane · Redshift"],
                ["Finishing", "AE · Resolve"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  data-reveal
                  style={{ "--stagger": i } as React.CSSProperties}
                  className="on-scroll hairline border-border rounded-md border p-3"
                >
                  <dt className="text-ink-muted font-mono text-[9px] tracking-[0.18em] uppercase">
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-[13px]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- CONTACT — headline only; contact details live in footer ---------- */}
        <section
          id="contact"
          data-reveal
          className="on-scroll py-20 text-center md:py-28"
        >
          <div className="text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
            Contact · 04
          </div>
          <p className="mt-6 font-serif text-[52px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[72px] md:text-[96px] lg:text-[112px]">
            Got a <em className="text-primary italic">story</em>
            <br />
            worth rendering?
          </p>
        </section>

        {/* ---------- FOOTER — end-card brand plate ---------- */}
        <footer className="relative mt-8 md:mt-12">
          {/* Brand plate — echoes the header-still poster at the bottom */}
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
                  <span className="text-foreground block">AV · Studio</span>
                  <span className="block">Est. MMXX</span>
                </span>
              </div>

              {/* Wordmark — echoes the header-still "ACE VISUALS" treatment */}
              <div className="md:justify-self-center md:text-center">
                <h2 className="font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.02em] sm:text-[56px] md:text-[72px] lg:text-[84px]">
                  Ace<span className="text-primary not-italic">·</span>
                  <em className="text-primary italic">Visuals</em>
                </h2>
                <div className="text-ink-muted mt-3 flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] uppercase md:justify-center">
                  <span aria-hidden className="hairline border-border block h-px w-8 border-t" />
                  <span>Worlds, rendered frame by frame</span>
                  <span aria-hidden className="hairline border-border block h-px w-8 border-t" />
                </div>
              </div>

              {/* Contact lockup */}
              <div className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase md:text-right">
                <a
                  href="mailto:hello@acevisuals.studio"
                  className="text-foreground hover:text-primary link-u font-serif text-base tracking-normal italic normal-case transition-colors"
                >
                  hello@acevisuals.studio
                </a>
                <div className="mt-2 flex gap-3 md:justify-end">
                  <a href="#" className="hover:text-foreground transition-colors">
                    IG
                  </a>
                  <span aria-hidden className="opacity-40">/</span>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Vimeo
                  </a>
                  <span aria-hidden className="opacity-40">/</span>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Are.na
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Colophon row */}
          <div className="text-ink-muted mt-5 grid grid-cols-2 items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase md:grid-cols-3">
            <span className="tracking-[0.18em]">© MMXXVI · Ace·Visuals Studio</span>
            <span className="hidden justify-self-center md:inline">
              41.8°N / 87.6°W — In Studio
            </span>
            <a
              href="#"
              className="hover:text-foreground inline-flex items-center justify-end gap-1.5 transition-colors"
            >
              Colophon
              <ArrowUpRight size={11} weight="bold" />
            </a>
          </div>
        </footer>
        </div>
      </div>
    </main>
  )
}
