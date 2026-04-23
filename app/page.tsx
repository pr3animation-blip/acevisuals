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
  thumb: string
  span: string
  size: "sm" | "md" | "lg"
}

const TILES: Tile[] = [
  {
    title: "The Quiet Machine",
    meta: "Film · 2025",
    thumb: "thumb-halo",
    span: "col-span-6 row-span-3 md:col-span-4",
    size: "lg",
  },
  {
    title: "Kiln & Co.",
    meta: "Branding",
    thumb: "thumb-dotfield",
    span: "col-span-3 row-span-2 md:col-span-2",
    size: "md",
  },
  {
    title: "Astra Helmet",
    meta: "Product · Film",
    thumb: "thumb-blade",
    span: "col-span-3 row-span-2 md:col-span-2",
    size: "md",
  },
  {
    title: "Frame 07",
    meta: "Editorial",
    thumb: "thumb-dither",
    span: "col-span-3 row-span-1 md:col-span-2",
    size: "sm",
  },
  {
    title: "Sim Loops — Vol. II",
    meta: "R&D · Houdini",
    thumb: "thumb-rings",
    span: "col-span-3 row-span-1 md:col-span-2",
    size: "sm",
  },
  {
    title: "North of Nowhere",
    meta: "Title sequence",
    thumb: "thumb-horizon",
    span: "col-span-6 row-span-2 md:col-span-3",
    size: "md",
  },
  {
    title: "Mothbot",
    meta: "Character · Look-dev",
    thumb: "thumb-scanline",
    span: "col-span-6 row-span-1 md:col-span-3",
    size: "sm",
  },
]

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-6 pt-6 pb-10 md:px-12 md:pt-10 md:pb-16">
        {/* ---------- NAV ---------- */}
        <nav className="reveal reveal-d1 hairline border-border grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b pb-6 md:grid-cols-[1fr_auto_1fr] md:pb-8">
          <div className="font-serif text-xl tracking-[-0.02em] italic md:text-2xl">
            Ace<span className="text-primary not-italic">·</span>Visuals
          </div>

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
        <section className="hairline border-border relative grid gap-10 border-b py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="reveal reveal-d2 text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
              3D generalist · visual storyteller · 2020—∞
            </div>
            <h1 className="reveal reveal-d3 mt-5 font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.035em] sm:text-[56px] md:text-[68px] lg:text-[78px]">
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
                <dt className="sr-only">Projects</dt>
                <dd>
                  <span className="text-foreground font-medium">42</span>{" "}
                  projects
                </dd>
              </div>
              <div>
                <dt className="sr-only">Clients</dt>
                <dd>
                  <span className="text-foreground font-medium">17</span>{" "}
                  clients
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd>
                  <span className="text-foreground font-medium">Based</span>{" "}
                  Chicago
                </dd>
              </div>
            </dl>
          </div>

          {/* Reel card */}
          <div className="reveal reveal-d4 relative">
            <div className="group hairline border-border bg-card relative aspect-[4/5] overflow-hidden rounded-md">
              <div className="thumb thumb-halo" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-background/50 bg-background/10 rounded border border-dashed px-4 py-2.5 font-mono text-[10px] tracking-[0.22em] text-white uppercase backdrop-blur-sm">
                  Showreel 2026
                </div>
              </div>
              <span className="hairline border-border bg-background/80 absolute top-3 left-3 rounded-sm border px-2 py-1 font-mono text-[9px] tracking-[0.18em] uppercase backdrop-blur-sm">
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

          {/* Marquee */}
          <div className="reveal reveal-d6 marquee bg-primary text-primary-foreground absolute -right-6 -bottom-4 -left-6 overflow-hidden py-2.5 [transform:rotate(-0.4deg)] md:-right-12 md:-left-12">
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
          <header className="flex items-baseline justify-between pb-6">
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
                className={`group hairline border-border bg-card relative overflow-hidden rounded-md ${tile.span}`}
              >
                <div className={`thumb ${tile.thumb}`} aria-hidden />
                <div className="relative z-10 flex h-full flex-col justify-between p-3.5 md:p-4">
                  <span className="text-ink-muted hairline border-border bg-background/80 w-fit rounded-sm border px-1.5 py-0.5 font-mono text-[9px] tracking-[0.14em] uppercase backdrop-blur-sm">
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
        </section>

        {/* ---------- CASE STUDY ---------- */}
        <section className="hairline border-border mt-20 grid gap-10 border-y py-14 md:mt-28 md:grid-cols-[1fr_1.35fr] md:gap-14 md:py-20">
          <div>
            <div className="text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
              Case study · 02
            </div>
            <h3 className="mt-3 font-serif text-[28px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[34px]">
              Astra Helmet — a product film in{" "}
              <em className="text-primary italic">three acts</em>.
            </h3>
            <p className="text-ink-muted mt-5 max-w-[50ch] text-sm leading-[1.7]">
              Art direction, modeling, look-dev, and finishing. Shot entirely
              in-camera using a procedural studio built in Houdini, then graded
              to feel like Kodachrome at dusk.
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
              href="#astra"
              className="text-foreground hover:text-primary mt-8 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <span className="link-u">Read the full case study</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>

          <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-2 md:gap-3">
            <div className="hairline border-border relative row-span-2 overflow-hidden rounded-md">
              <div className="thumb thumb-blade" />
            </div>
            <div className="hairline border-border relative overflow-hidden rounded-md">
              <div className="thumb thumb-dither" />
            </div>
            <div className="hairline border-border relative overflow-hidden rounded-md">
              <div className="thumb thumb-rings" />
            </div>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section
          id="studio"
          className="hairline border-border grid gap-10 border-b py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24"
        >
          <div className="relative">
            <div className="hairline border-border relative aspect-[4/5] overflow-hidden rounded-md bg-secondary">
              <div className="thumb-halo absolute inset-0 opacity-70" />
              <div
                aria-hidden
                className="bg-primary/15 absolute inset-[18%] rounded-full"
              />
              <div
                aria-hidden
                className="bg-primary/10 absolute inset-[8%] rounded-full mix-blend-multiply"
              />
              <span className="text-ink-muted absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.2em] uppercase">
                Portrait · TK
              </span>
            </div>
          </div>

          <div>
            <div className="text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
              About · 03
            </div>
            <p className="mt-5 font-serif text-[30px] leading-[1.08] font-normal tracking-[-0.02em] md:text-[38px]">
              I build <em className="text-primary italic">small, strange worlds</em>{" "}
              — then I photograph them like they&rsquo;ve always existed.
            </p>
            <p className="text-ink-muted mt-6 max-w-[60ch] text-sm leading-[1.75]">
              Eight years between cinema and code. I work with studios, brands,
              and filmmakers who care about the texture of a story as much as
              the shape of it. Pipeline-agnostic, detail-obsessed, occasionally
              on location.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-2.5 md:grid-cols-4">
              {[
                ["Modeling", "Blender · C4D"],
                ["Sim", "Houdini · Embergen"],
                ["Render", "Octane · Redshift"],
                ["Finishing", "AE · Resolve"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="hairline border-border rounded-md border p-3"
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

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="py-20 text-center md:py-28">
          <div className="text-primary font-mono text-[10px] tracking-[0.22em] uppercase">
            Contact · 04
          </div>
          <p className="mt-6 font-serif text-[52px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[72px] md:text-[96px] lg:text-[112px]">
            Got a <em className="text-primary italic">story</em>
            <br />
            worth rendering?
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href="mailto:hello@acevisuals.studio"
              className="text-foreground hover:text-primary font-serif text-xl italic transition-colors md:text-2xl"
            >
              <span className="link-u">hello@acevisuals.studio</span>
            </a>
            <div className="text-ink-muted flex items-center gap-5 font-mono text-[10px] tracking-[0.22em] uppercase">
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
              <span aria-hidden className="opacity-40">
                /
              </span>
              <a href="#" className="hover:text-foreground transition-colors">
                Vimeo
              </a>
              <span aria-hidden className="opacity-40">
                /
              </span>
              <a href="#" className="hover:text-foreground transition-colors">
                Are.na
              </a>
            </div>
          </div>
        </section>

        {/* ---------- FOOTER ---------- */}
        <footer className="hairline border-border text-ink-muted grid grid-cols-2 gap-3 border-t pt-6 font-mono text-[10px] tracking-[0.1em] md:grid-cols-3">
          <span>© 2026 Ace·Visuals Studio</span>
          <span className="hidden justify-self-center md:inline">
            Built with Next · Tailwind · ShadCN
          </span>
          <a
            href="#"
            className="hover:text-foreground inline-flex items-center justify-end gap-1 transition-colors"
          >
            Colophon
            <ArrowUpRight size={11} weight="bold" />
          </a>
        </footer>
      </div>
    </main>
  )
}
