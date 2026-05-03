import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Field Notes — Process, R&D, and craft notes from the chair",
  description:
    "Behind-the-scenes notes on lighting, look-dev, and one-operator pipelines. Render diaries, software opinions, and project teardowns from Ace Visuals.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Field Notes — Ace Visuals",
    description:
      "Behind-the-scenes notes on lighting, look-dev, and one-operator pipelines.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Notes — Ace Visuals",
    description:
      "Behind-the-scenes notes on lighting, look-dev, and one-operator pipelines.",
  },
}

type Category = "Process" | "R&D" | "Diary" | "Teardown" | "Studio"

type ThumbVariant =
  | "halo"
  | "dotfield"
  | "dither"
  | "scanline"
  | "rings"
  | "blade"
  | "horizon"

type Note = {
  slug: string
  index: string
  date: string
  dateISO: string
  category: Category
  title: string
  italics: string
  excerpt: string
  readMin: number
  thumb: ThumbVariant
}

const NOTES: Note[] = [
  {
    slug: "lighting-metal-at-frame-zero",
    index: "012",
    date: "APR · 12 · 2026",
    dateISO: "2026-04-12",
    category: "Process",
    title: "On lighting metal at frame zero",
    italics: "frame zero",
    excerpt:
      "Anodized aluminum doesn't read on camera the way the eye remembers it. A note on building a key, a kicker, and a fill before the shot exists — and why I almost never light to a HDRI alone.",
    readMin: 6,
    thumb: "horizon",
  },
  {
    slug: "tie-three-weeks-chasing-silhouette",
    index: "011",
    date: "MAR · 28 · 2026",
    dateISO: "2026-03-28",
    category: "Diary",
    title: "TIE: three weeks chasing the perfect silhouette",
    italics: "silhouette",
    excerpt:
      "The model was finished by week one. The lighting took two more. Notes on the shots that didn't make the cut, and the one frame that did all the work.",
    readMin: 9,
    thumb: "blade",
  },
  {
    slug: "render-in-cycles-when-eevee-would-do",
    index: "010",
    date: "MAR · 14 · 2026",
    dateISO: "2026-03-14",
    category: "R&D",
    title: "Why I render in Cycles, even when Eevee would do",
    italics: "would do",
    excerpt:
      "Speed is a real thing, but so is the floor of the look. A short defense of paying the render-time tax for product work, and the two cases where I still reach for the realtime pipeline.",
    readMin: 5,
    thumb: "rings",
  },
  {
    slug: "anatomy-of-a-six-second-product-film",
    index: "009",
    date: "FEB · 22 · 2026",
    dateISO: "2026-02-22",
    category: "Teardown",
    title: "Anatomy of a six-second product film",
    italics: "six-second",
    excerpt:
      "180 frames, three camera moves, one product. A frame-by-frame teardown of a recent launch hero — what's modeled, what's a card, and what's hidden behind motion blur.",
    readMin: 8,
    thumb: "dither",
  },
  {
    slug: "geometry-nodes-two-years-later",
    index: "008",
    date: "FEB · 03 · 2026",
    dateISO: "2026-02-03",
    category: "Process",
    title: "Geometry nodes, two years later",
    italics: "two years later",
    excerpt:
      "I was skeptical. Then I was a convert. Now I'm somewhere in between. A working list of what nodes have replaced in my pipeline — and what's still faster done by hand.",
    readMin: 7,
    thumb: "dotfield",
  },
  {
    slug: "booking-q2-how-i-scope-a-brief",
    index: "007",
    date: "JAN · 18 · 2026",
    dateISO: "2026-01-18",
    category: "Studio",
    title: "Booking Q2: how I scope a brief",
    italics: "scope",
    excerpt:
      "What I ask in the first email, what I ignore, and the three constraints that turn a good brief into a fast one. Mostly written for the brands and founders I haven't worked with yet.",
    readMin: 4,
    thumb: "scanline",
  },
]

const FEATURED = NOTES[0]
const REST = NOTES.slice(1)

const CATEGORIES: { name: Category | "All"; count: number }[] = [
  { name: "All", count: NOTES.length },
  { name: "Process", count: NOTES.filter((n) => n.category === "Process").length },
  { name: "R&D", count: NOTES.filter((n) => n.category === "R&D").length },
  { name: "Diary", count: NOTES.filter((n) => n.category === "Diary").length },
  { name: "Teardown", count: NOTES.filter((n) => n.category === "Teardown").length },
  { name: "Studio", count: NOTES.filter((n) => n.category === "Studio").length },
]

function thumbClass(v: ThumbVariant) {
  return `thumb-${v}`
}

function NoteTitle({
  title,
  italics,
  className,
}: {
  title: string
  italics: string
  className?: string
}) {
  if (!italics || !title.includes(italics)) {
    return <span className={cn(className)}>{title}</span>
  }
  const [before, after] = title.split(italics)
  return (
    <span className={cn(className)}>
      {before}
      <em className="text-primary not-italic">{italics}</em>
      {after}
    </span>
  )
}

export default function BlogPage() {
  return (
    <main className="site-page relative min-h-dvh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="px-5 pt-10 pb-10 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* ---------- HEADER ---------- */}
          <header className="pb-12 md:pb-16">
            <Eyebrow tone="primary" index="05">
              Field notes
            </Eyebrow>
            <h1 className="mt-4 text-balance font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              From the
              <span className="sr-only"> </span>
              <br />
              <em className="text-primary not-italic">chair</em>.
            </h1>
            <p className="text-ink-muted mt-7 max-w-[58ch] text-pretty text-sm leading-[1.7] md:text-base">
              Process notes, render diaries, software opinions, and the
              occasional teardown. Written between projects — short, honest,
              and useful to the next person at the same blank file.
            </p>

            {/* Masthead strip — taxonomy + counts, presentational */}
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-t border-border pt-6 md:mt-14">
              <Eyebrow size="sm" className="mr-2">
                Filed under
              </Eyebrow>
              <ul className="flex flex-wrap items-center gap-2">
                {CATEGORIES.map((c, i) => (
                  <li key={c.name} className="inline-flex items-center gap-2">
                    <Badge
                      variant={i === 0 ? "mono-strong" : "mono"}
                      aria-current={i === 0 ? "page" : undefined}
                    >
                      {c.name}
                      <span
                        aria-hidden
                        className="ml-1.5 tabular-nums opacity-60"
                      >
                        {String(c.count).padStart(2, "0")}
                      </span>
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          {/* ---------- FEATURED NOTE ---------- */}
          <section aria-labelledby="featured-heading" className="pb-20 md:pb-28">
            <header className="flex items-baseline justify-between pb-6">
              <div>
                <Eyebrow tone="primary" index="01">
                  Latest
                </Eyebrow>
                <h2
                  id="featured-heading"
                  className="mt-3 font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl"
                >
                  Off the <em className="text-primary not-italic">desk</em>.
                </h2>
              </div>
              <Eyebrow className="hidden sm:inline-flex">
                <span className="tabular-nums">{FEATURED.index}</span>
                <span aria-hidden className="opacity-50">/</span>
                <span>Featured</span>
              </Eyebrow>
            </header>

            <article className="bezel-shell group/bezel relative rounded-[2rem] p-1.5">
              <div className="bezel-core relative grid gap-0 overflow-hidden rounded-[1.625rem] md:grid-cols-[0.95fr_1.05fr]">
                {/* Visual — uses an existing thumb-* utility, no new gradients */}
                <Link
                  href={`/blog/${FEATURED.slug}`}
                  aria-label={`Read: ${FEATURED.title}`}
                  className="relative block aspect-[4/3] overflow-hidden md:aspect-auto"
                >
                  <div
                    aria-hidden
                    className={cn("absolute inset-0", thumbClass(FEATURED.thumb))}
                  />
                  {/* Index plate — large numeric over the visual */}
                  <div className="absolute inset-0 flex items-end justify-between p-5 md:p-7">
                    <span className="font-serif text-[88px] leading-[0.85] tracking-[-0.04em] text-white/85 md:text-[120px]">
                      {FEATURED.index}
                    </span>
                    <Badge variant="media-primary" className="self-start">
                      {FEATURED.category}
                    </Badge>
                  </div>
                </Link>

                {/* Body */}
                <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <Eyebrow tone="primary" dot>
                        New entry
                      </Eyebrow>
                      <time
                        dateTime={FEATURED.dateISO}
                        className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase tabular-nums"
                      >
                        {FEATURED.date}
                      </time>
                      <span
                        aria-hidden
                        className="text-ink-muted hidden font-mono text-[10px] uppercase opacity-50 sm:inline"
                      >
                        ·
                      </span>
                      <span className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase tabular-nums">
                        {FEATURED.readMin} min read
                      </span>
                    </div>

                    <h3 className="mt-5 text-balance font-serif text-[28px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[40px]">
                      <Link
                        href={`/blog/${FEATURED.slug}`}
                        className="link-u text-foreground"
                      >
                        <NoteTitle
                          title={FEATURED.title}
                          italics={FEATURED.italics}
                        />
                      </Link>
                    </h3>

                    <p className="text-ink-muted mt-5 max-w-[52ch] text-pretty text-sm leading-[1.7] md:text-[15px]">
                      {FEATURED.excerpt}
                    </p>
                  </div>

                  <footer className="flex items-end justify-between gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="h-11 gap-2 rounded-full px-5 text-[12px] tracking-[0.05em]"
                    >
                      <Link href={`/blog/${FEATURED.slug}`}>
                        Read the note
                        <ArrowUpRight size={14} weight="bold" />
                      </Link>
                    </Button>
                    <span className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase">
                      Est.{" "}
                      <span className="tabular-nums">{FEATURED.readMin}</span>{" "}
                      min
                    </span>
                  </footer>
                </div>
              </div>
            </article>
          </section>

          {/* ---------- INDEX ---------- */}
          <section aria-labelledby="index-heading">
            <header className="flex items-baseline justify-between pb-6">
              <div>
                <Eyebrow tone="primary" index="02">
                  Archive
                </Eyebrow>
                <h2
                  id="index-heading"
                  className="mt-3 font-serif text-2xl font-normal tracking-[-0.02em] md:text-3xl"
                >
                  All <em className="text-primary not-italic">notes</em>.
                </h2>
              </div>
              <Eyebrow className="hidden sm:inline-flex">
                <span>MMXXVI</span>
                <span aria-hidden className="opacity-50">·</span>
                <span className="tabular-nums">
                  {String(NOTES.length).padStart(2, "0")} entries
                </span>
              </Eyebrow>
            </header>

            <p className="text-ink-muted max-w-[58ch] pb-8 text-pretty text-sm leading-[1.7] md:pb-10">
              Newest first. Reading times are honest — written, not estimated
              by word-count.
            </p>

            <ol className="border-t border-border">
              {REST.map((note) => (
                <li key={note.slug} className="border-b border-border">
                  <Link
                    href={`/blog/${note.slug}`}
                    className="group/row block py-6 transition-colors duration-200 hover:bg-foreground/[0.025] md:py-8"
                  >
                    <div className="grid gap-4 md:grid-cols-[88px_1fr_auto] md:items-start md:gap-8">
                      {/* Index + date column */}
                      <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
                        <span className="font-serif text-[28px] leading-[0.9] tracking-[-0.02em] text-primary tabular-nums md:text-[36px]">
                          {note.index}
                        </span>
                        <time
                          dateTime={note.dateISO}
                          className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase tabular-nums"
                        >
                          {note.date}
                        </time>
                      </div>

                      {/* Title + excerpt */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 pb-2">
                          <Badge variant="mono">{note.category}</Badge>
                        </div>
                        <h3 className="text-balance font-serif text-[22px] leading-[1.1] font-normal tracking-[-0.02em] md:text-[28px]">
                          <span className="link-u">
                            <NoteTitle
                              title={note.title}
                              italics={note.italics}
                            />
                          </span>
                        </h3>
                        <p className="text-ink-muted mt-3 max-w-[64ch] text-pretty text-sm leading-[1.65] line-clamp-2 md:text-[15px]">
                          {note.excerpt}
                        </p>
                      </div>

                      {/* Read meta */}
                      <div className="flex items-center justify-between gap-3 md:flex-col md:items-end md:gap-3">
                        <span className="text-ink-muted font-mono text-[10px] tracking-[0.22em] uppercase tabular-nums">
                          {note.readMin} min
                        </span>
                        <span
                          aria-hidden
                          className="text-primary bg-background/85 hairline border-border grid size-8 shrink-0 place-items-center rounded-full border opacity-70 transition-opacity duration-200 group-hover/row:opacity-100"
                        >
                          <ArrowUpRight size={12} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>

            {/* Empty-state-style end cap — clear next action */}
            <footer className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <p className="text-ink-muted text-sm">
                That&rsquo;s every note so far. New entries land roughly every
                other Sunday.
              </p>
              <Link
                href="/contact"
                className="text-foreground link-u inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase"
              >
                Got a suggestion? Send a note
                <ArrowRight size={12} weight="bold" />
              </Link>
            </footer>
          </section>

          {/* ---------- SUBSCRIBE RIBBON ---------- */}
          <section
            aria-labelledby="subscribe-heading"
            className="mt-20 md:mt-28"
          >
            <div className="bezel-shell group/bezel relative rounded-[2rem] p-1.5">
              <div className="bezel-core relative grid gap-8 rounded-[1.625rem] px-6 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-12 md:px-10 md:py-12">
                <div>
                  <Eyebrow tone="primary" index="03">
                    Subscribe
                  </Eyebrow>
                  <h2
                    id="subscribe-heading"
                    className="mt-3 text-balance font-serif text-[28px] leading-[1.05] font-normal tracking-[-0.02em] md:text-[36px]"
                  >
                    A short note when something{" "}
                    <em className="text-primary not-italic">drops</em>.
                  </h2>
                  <p className="text-ink-muted mt-4 max-w-[48ch] text-pretty text-sm leading-[1.65]">
                    No newsletter. No tracking. Just the new entry, in plain
                    text, the day it goes up. Roughly twice a month.
                  </p>
                </div>

                <form
                  action="/api/subscribe"
                  method="post"
                  noValidate
                  className="flex w-full flex-col gap-3"
                >
                  <label htmlFor="subscribe-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex w-full items-center gap-2">
                    <div className="relative flex-1">
                      <EnvelopeSimple
                        aria-hidden
                        size={14}
                        weight="bold"
                        className="text-ink-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
                      />
                      <Input
                        id="subscribe-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        placeholder="you@studio.com"
                        className="h-11 rounded-full pl-9 pr-3 text-[13px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="h-11 shrink-0 gap-2 rounded-full px-5 text-[12px] tracking-[0.05em]"
                    >
                      Subscribe
                      <ArrowRight size={14} weight="bold" />
                    </Button>
                  </div>
                  <p className="text-ink-muted font-mono text-[9px] tracking-[0.18em] uppercase">
                    Unsubscribe with one click. Address never shared.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
