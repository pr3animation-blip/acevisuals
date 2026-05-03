/// <reference types="react/canary" />
import { ViewTransition } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Eyebrow } from "@/components/ui/eyebrow"
import {
  WORK_IMAGES,
  getWorkImageBySlug,
  getWorkImageNeighbors,
} from "@/lib/work-images"

export function generateStaticParams() {
  return WORK_IMAGES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const image = getWorkImageBySlug(slug)
  if (!image) return {}
  return {
    title: `${image.title} — Ace Visuals`,
    description: image.body.lede,
  }
}

export default async function WorkImagePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const image = getWorkImageBySlug(slug)
  if (!image) notFound()

  const neighbors = getWorkImageNeighbors(slug)
  const orderIndex = WORK_IMAGES.findIndex((img) => img.slug === slug)
  const orderLabel = `${String(orderIndex + 1).padStart(2, "0")} / ${String(WORK_IMAGES.length).padStart(2, "0")}`

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
            <span className="text-ink-muted">{image.meta}</span>
            <span aria-hidden className="opacity-50">
              /
            </span>
            <span>{image.title}</span>
          </Eyebrow>

          {/* Header */}
          <header className="reveal reveal-d2 pt-8 pb-12 md:pt-12 md:pb-16">
            <Eyebrow tone="primary">{`Image · ${orderLabel}`}</Eyebrow>
            <h1 className="mt-4 text-balance font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              {image.title}
            </h1>
            <p className="text-ink-muted mt-7 max-w-[58ch] text-pretty text-sm leading-[1.7] md:text-base">
              {image.body.lede}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              <li>
                <Badge variant="mono">{image.meta}</Badge>
              </li>
              {image.body.notes.map((n) => (
                <li key={n.k}>
                  <Badge variant="mono">{n.k}</Badge>
                </li>
              ))}
            </ul>
          </header>

          {/* Hero still — shared-element transition target */}
          <div
            data-reveal
            className="on-scroll hairline border-border relative aspect-[16/9] overflow-hidden rounded-md"
          >
            <ViewTransition name={`image-${image.slug}`}>
              <div className="media-still">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  priority
                  className="object-cover"
                  style={
                    image.position
                      ? { objectPosition: image.position }
                      : undefined
                  }
                />
              </div>
            </ViewTransition>
            <Badge variant="media" className="absolute bottom-3 left-3">
              {image.title}
            </Badge>
          </div>

          {/* Notes */}
          <section className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-5">
            {image.body.notes.map((n, i) => (
              <div
                key={n.k}
                data-reveal
                style={{ "--stagger": i } as React.CSSProperties}
                className="on-scroll relative p-5 md:p-6"
              >
                <Eyebrow tone="primary">{`0${i + 1} · ${n.k}`}</Eyebrow>
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

          {/* Prev / Next pair */}
          {neighbors ? (
            <section
              data-reveal
              className="on-scroll mt-20 grid gap-4 md:mt-28 md:grid-cols-2 md:gap-5"
            >
              <Link
                href={`/work/image/${neighbors.prev.slug}`}
                className="group hairline border-border relative flex aspect-[16/9] overflow-hidden rounded-md md:aspect-[2/1]"
              >
                <div className="media-still">
                  <Image
                    src={neighbors.prev.src}
                    alt={neighbors.prev.alt}
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-cover"
                    style={
                      neighbors.prev.position
                        ? { objectPosition: neighbors.prev.position }
                        : undefined
                    }
                  />
                </div>
                <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 md:p-5">
                  <Eyebrow tone="white">
                    <ArrowLeft size={11} weight="bold" />
                    Previous
                  </Eyebrow>
                  <h4 className="hairline border-border w-fit rounded-sm border bg-card px-2 py-1 font-serif text-[15px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[16px]">
                    {neighbors.prev.title}
                  </h4>
                </div>
              </Link>
              <Link
                href={`/work/image/${neighbors.next.slug}`}
                className="group hairline border-border relative flex aspect-[16/9] overflow-hidden rounded-md md:aspect-[2/1]"
              >
                <div className="media-still">
                  <Image
                    src={neighbors.next.src}
                    alt={neighbors.next.alt}
                    fill
                    sizes="(min-width: 1024px) 540px, 100vw"
                    className="object-cover"
                    style={
                      neighbors.next.position
                        ? { objectPosition: neighbors.next.position }
                        : undefined
                    }
                  />
                </div>
                <div className="relative z-10 flex h-full w-full flex-col items-end justify-between p-4 text-right md:p-5">
                  <Eyebrow tone="white">
                    Next
                    <ArrowRight size={11} weight="bold" />
                  </Eyebrow>
                  <h4 className="hairline border-border w-fit rounded-sm border bg-card px-2 py-1 font-serif text-[15px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[16px]">
                    {neighbors.next.title}
                  </h4>
                </div>
              </Link>
            </section>
          ) : null}

          {/* Footer nav */}
          <section
            data-reveal
            className="on-scroll mt-16 flex items-center justify-between border-t border-border pt-8 md:mt-24 md:pt-10"
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
