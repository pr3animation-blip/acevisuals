import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eyebrow } from "@/components/ui/eyebrow"

export const metadata: Metadata = {
  title: "About Andrew — 3D & Motion Designer | Ace Visuals",
  description:
    "Andrew runs Ace Visuals — a one-person 3D studio for brands, founders, and filmmakers. Product films, cinematic CG, and brand visuals built end-to-end. Booking Q2 2026.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Andrew — Ace Visuals",
    description:
      "A one-person 3D studio for brands, founders, and filmmakers. Product films, cinematic CG, and brand visuals built end-to-end.",
    type: "profile",
  },
}

const DISCIPLINES: [string, string][] = [
  ["Modeling", "Blender · C4D"],
  ["Sim", "Houdini · Embergen"],
  ["Render", "Octane · Redshift"],
  ["Finishing", "AE · Resolve"],
]

const CLIENTS = ["Studios", "Brands", "Filmmakers", "Independent"]

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Andrew",
    jobTitle: "3D Artist & Motion Designer",
    worksFor: { "@type": "Organization", name: "Ace Visuals" },
    knowsAbout: [
      "3D Modeling",
      "Motion Graphics",
      "Product Animation",
      "Cinematic Look-Dev",
      "Blender",
      "After Effects",
      "Houdini",
      "Octane",
      "Redshift",
    ],
    url: "https://acevisuals.io/about",
  },
}

export default function AboutPage() {
  return (
    <main className="site-page relative min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="px-5 pt-10 pb-10 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* Header */}
          <header className="reveal reveal-d2 pb-12 md:pb-16">
            <Eyebrow tone="primary" index="03">
              Who I am
            </Eyebrow>
            <h1 className="mt-4 font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              Andrew.
              <br />
              <em className="text-primary not-italic">3D &amp; motion</em>{" "}
              designer.
            </h1>
          </header>

          {/* Two-column body */}
          <section className="grid gap-10 py-2 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-6">
            <div className="relative">
              <div data-reveal className="on-scroll">
                <div data-parallax data-parallax-speed="0.05">
                  <Link
                    href="/work/tie"
                    aria-label="View TIE-fighter look-dev project"
                    className="hairline border-border bg-secondary group relative block aspect-[4/5] overflow-hidden rounded-md"
                  >
                    <div className="media-still">
                      <Image
                        src="/media/tie-fighter/back-low.webp"
                        alt="Recent look-dev — Imperial TIE-fighter, rear three-quarter, running lights lit"
                        fill
                        sizes="(min-width: 1024px) 340px, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        style={{ objectPosition: "center 55%" }}
                      />
                    </div>
                    <Badge
                      variant="media"
                      className="absolute bottom-3 left-3"
                    >
                      Look-dev · 02
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>

            <div data-reveal className="on-scroll">
              <p className="font-serif text-[30px] leading-[1.08] font-normal tracking-[-0.02em] md:text-[38px]">
                I build{" "}
                <em className="text-primary not-italic">
                  small, strange worlds
                </em>{" "}
                — then I photograph them like they&rsquo;ve always existed.
              </p>
              <p className="mt-5 max-w-[60ch] text-sm leading-[1.7] md:text-[15px]">
                <span className="text-ink-muted mr-2 font-mono text-[10px] tracking-[0.22em] uppercase">
                  Practically —
                </span>
                photoreal product films, brand visuals, and cinematic CG for
                teams that can&rsquo;t (or shouldn&rsquo;t) shoot it live.
                End-to-end: modeled, lit, animated, composited, delivered.
                One operator. One invoice.
              </p>
              <p className="text-ink-muted mt-6 max-w-[60ch] text-sm leading-[1.75]">
                Self-taught at thirteen. Six years in by nineteen. Ace Visuals
                is one person — me — making sleek product animation, motion
                graphics, and{" "}
                <Link
                  href="/work"
                  className="text-foreground link-u underline-offset-4 hover:opacity-80"
                >
                  cinematic shots
                </Link>{" "}
                for studios, brands, and filmmakers who care about the texture
                of a story as much as the shape of it. Blender and After
                Effects out front; Houdini, Octane, Resolve when the shot asks
                for it. Fast turnarounds, no studio overhead, every frame still
                passes through one set of eyes.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-2.5 md:grid-cols-4">
                {DISCIPLINES.map(([k, v], i) => (
                  <Card
                    key={k}
                    variant="hairline"
                    size="none"
                    data-reveal
                    style={{ "--stagger": i } as React.CSSProperties}
                    className="on-scroll p-3"
                  >
                    <dt className="text-ink-muted font-mono text-[9px] tracking-[0.18em] uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1.5 text-[13px]">{v}</dd>
                  </Card>
                ))}
              </dl>

              <div className="mt-10">
                <Eyebrow size="sm" className="mb-3">
                  Working with
                </Eyebrow>
                <ul className="flex flex-wrap gap-2">
                  {CLIENTS.map((c) => (
                    <li key={c}>
                      <Badge variant="mono-strong">{c}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA strip */}
          <section
            data-reveal
            className="on-scroll mt-20 grid gap-6 border-t border-border pt-12 md:mt-28 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12 md:pt-16"
          >
            <div>
              <Eyebrow tone="primary">Now booking</Eyebrow>
              <p className="mt-4 font-serif text-[36px] leading-[1.02] font-normal tracking-[-0.03em] md:text-[48px]">
                Two open slots this quarter.{" "}
                <em className="text-primary not-italic">Selectively</em>{" "}
                booking.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <Button asChild size="lg" className="h-10 gap-2 px-4">
                <Link href="/contact">
                  Send a brief
                  <ArrowRight size={14} weight="bold" data-icon="inline-end" />
                </Link>
              </Button>
              <Link
                href="/work"
                className="text-ink-muted hover:text-foreground link-u text-sm transition-colors"
              >
                or browse the work
              </Link>
            </div>
          </section>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
    </main>
  )
}
