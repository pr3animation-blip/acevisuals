"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  MapPin,
  Clock,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eyebrow } from "@/components/ui/eyebrow"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const STATS: [string, string][] = [
  ["Booking", "Q2 · 2026"],
  ["Open slots", "02"],
  ["Reply", "≤ 48h"],
  ["Channels", "Email · Vimeo · IG"],
]

const legendClass =
  "text-ink-muted -ml-1 mb-5 inline-flex w-fit items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase"

const labelClass =
  "text-ink-muted flex items-baseline justify-between font-mono text-[10px] tracking-[0.22em] uppercase"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <main className="site-page relative min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-3 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <div className="px-5 pt-10 pb-10 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* ---------- HEADER ---------- */}
          <header className="relative pb-12 md:pb-16">
            <Eyebrow tone="primary" className="reveal reveal-d2">
              Contact · 04 / Brief
            </Eyebrow>
            <h1 className="reveal reveal-d3 mt-5 font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[80px] lg:text-[96px]">
              Send the
              <br />
              <em className="text-primary not-italic">brief</em>.
              <span className="text-ink-muted/40 ml-3 align-top font-mono text-[12px] tracking-[0.22em] uppercase md:text-[13px]">
                / Frame 0001
              </span>
            </h1>
            <p className="reveal reveal-d4 text-ink-muted mt-7 max-w-[58ch] text-sm leading-[1.7] md:text-base">
              Three minutes of your time, a project in motion. Tell me what
              you&rsquo;re building, what it should feel like, and when it needs
              to land. Every brief is read by me — replies within{" "}
              <em className="text-foreground not-italic">forty-eight hours</em>.
            </p>
          </header>

          {/* ---------- TWO-COLUMN MAIN ---------- */}
          <section className="relative grid gap-10 pb-10 md:grid-cols-[1.2fr_0.85fr] md:gap-14 md:pb-16">
            {/* -------- LEFT: FORM (or success) -------- */}
            <div className="relative">
              {/* Vertical "BRIEF" — flair */}
              <span
                aria-hidden
                className="text-ink-muted/30 pointer-events-none absolute -left-2 top-2 hidden font-mono text-[10px] tracking-[0.55em] uppercase [writing-mode:vertical-rl] md:block"
              >
                · Brief · Specimen · Frame ·
              </span>

              <div className="md:pl-6">
                {submitted ? (
                  <Card
                    variant="hairline"
                    size="none"
                    data-reveal
                    className="on-scroll relative p-8 md:p-12"
                  >
                    <Eyebrow tone="primary">Brief received · ack</Eyebrow>
                    <div className="mt-5 flex items-start gap-4">
                      <span className="text-primary mt-1 shrink-0">
                        <CheckCircle size={32} weight="duotone" />
                      </span>
                      <h2 className="font-serif text-[38px] leading-[0.98] font-normal tracking-[-0.03em] md:text-[52px]">
                        That&rsquo;s the
                        <br />
                        <em className="text-primary not-italic">first frame</em>.
                      </h2>
                    </div>
                    <p className="text-ink-muted mt-6 max-w-[44ch] text-sm leading-[1.7]">
                      Your brief is in the queue. I&rsquo;ll write back from{" "}
                      <span className="text-foreground">
                        hello@acevisuals.studio
                      </span>{" "}
                      within forty-eight hours — usually sooner. If it&rsquo;s
                      time-critical, mark the email subject{" "}
                      <span className="text-foreground font-mono text-[12px] tracking-[0.1em]">
                        ASAP
                      </span>
                      .
                    </p>
                    <dl className="mt-8 grid grid-cols-2 gap-3">
                      <Card variant="hairline" size="none" className="p-3">
                        <dt className="text-ink-muted font-mono text-[10px] tracking-[0.18em] uppercase">
                          Reference
                        </dt>
                        <dd className="text-foreground mt-1.5 font-mono text-[10px] tracking-normal">
                          AV-04-2026-04-25
                        </dd>
                      </Card>
                      <Card variant="hairline" size="none" className="p-3">
                        <dt className="text-ink-muted font-mono text-[10px] tracking-[0.18em] uppercase">
                          Reply window
                        </dt>
                        <dd className="text-foreground mt-1.5 font-mono text-[10px] tracking-normal">
                          ≤ 48 hours
                        </dd>
                      </Card>
                    </dl>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <Button asChild size="lg" className="h-11 gap-2 rounded-full px-5 text-[12px] tracking-[0.05em]">
                        <Link href="/">
                          <ArrowLeft
                            size={12}
                            weight="bold"
                            data-icon="inline-start"
                          />
                          Back to portfolio
                        </Link>
                      </Button>
                      <Button
                        type="button"
                        variant="link"
                        size="sm"
                        onClick={() => setSubmitted(false)}
                        className="text-ink-muted hover:text-foreground link-u h-auto px-0 text-sm font-normal no-underline hover:no-underline"
                      >
                        Send another brief
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-12">
                    {/* SECTION 01 — IDENTITY */}
                    <FieldSet data-reveal className="on-scroll border-0">
                      <FieldLegend className={legendClass}>
                        <span className="text-primary">01</span>
                        <span aria-hidden className="opacity-50">
                          /
                        </span>
                        <span>Identity</span>
                      </FieldLegend>

                      <FieldGroup>
                        <div className="grid gap-5 md:grid-cols-2">
                          <Field>
                            <FieldLabel
                              htmlFor="brief-name"
                              className={labelClass}
                            >
                              <span>
                                Your name{" "}
                                <span className="text-primary">*</span>
                              </span>
                            </FieldLabel>
                            <Input
                              id="brief-name"
                              type="text"
                              required
                              placeholder="Riley Vance"
                            />
                          </Field>
                          <Field>
                            <FieldLabel
                              htmlFor="brief-email"
                              className={labelClass}
                            >
                              <span>
                                Email <span className="text-primary">*</span>
                              </span>
                            </FieldLabel>
                            <Input
                              id="brief-email"
                              type="email"
                              required
                              placeholder="riley@studio.co"
                            />
                          </Field>
                        </div>
                        <Field>
                          <FieldLabel
                            htmlFor="brief-company"
                            className={labelClass}
                          >
                            <span>Studio / Company</span>
                            <span className="text-ink-muted/70 text-[9px] tracking-[0.18em] normal-case">
                              optional
                            </span>
                          </FieldLabel>
                          <Input
                            id="brief-company"
                            type="text"
                            placeholder="Northwood & Co."
                          />
                        </Field>
                      </FieldGroup>
                    </FieldSet>

                    {/* SECTION 02 — BRIEF */}
                    <FieldSet data-reveal className="on-scroll border-0">
                      <FieldLegend className={legendClass}>
                        <span className="text-primary">02</span>
                        <span aria-hidden className="opacity-50">
                          /
                        </span>
                        <span>The brief</span>
                      </FieldLegend>

                      <FieldGroup>
                        <Field>
                          <FieldLabel
                            htmlFor="brief-body"
                            className={labelClass}
                          >
                            <span>
                              Tell me about it{" "}
                              <span className="text-primary">*</span>
                            </span>
                            <span className="text-ink-muted/70 text-[9px] tracking-[0.18em] normal-case">
                              who · what · why
                            </span>
                          </FieldLabel>
                          <Textarea
                            id="brief-body"
                            required
                            rows={6}
                            placeholder="A 30-second hero film for our flagship product. We want it to feel cinematic, with a hint of menace. Inspired by 70s sci-fi packaging…"
                            className="resize-y leading-[1.65]"
                          />
                        </Field>

                        <Field>
                          <FieldLabel
                            htmlFor="brief-refs"
                            className={labelClass}
                          >
                            <span>References</span>
                            <span className="text-ink-muted/70 text-[9px] tracking-[0.18em] normal-case">
                              links — optional
                            </span>
                          </FieldLabel>
                          <Input
                            id="brief-refs"
                            type="text"
                            placeholder="vimeo.com/… , are.na/…"
                          />
                        </Field>
                      </FieldGroup>
                    </FieldSet>

                    {/* SUBMIT */}
                    <div
                      data-reveal
                      className="on-scroll border-border flex flex-col items-stretch gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <p className="text-ink-muted max-w-[36ch] font-mono text-[10px] leading-[1.65] tracking-[0.12em] uppercase">
                        By sending you agree to a quick reply
                        <br />
                        from{" "}
                        <span className="text-foreground">
                          hello@acevisuals.studio
                        </span>
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        className="h-11 gap-2 rounded-full px-5 text-[12px] tracking-[0.05em]"
                      >
                        Send the brief
                        <PaperPlaneTilt
                          size={14}
                          weight="fill"
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* -------- RIGHT: SPECIMEN -------- */}
            <aside className="relative">
              <div data-reveal className="on-scroll">
                <div data-parallax data-parallax-speed="0.05">
                  {/* Specimen card — uses reel-frame for the cinematic shadow lift */}
                  <Card
                    variant="hairline"
                    size="none"
                    className="reel-frame relative"
                  >
                    <div className="relative aspect-[4/5]">
                      <div className="media-still">
                        <Image
                          src="/media/brand/header-still.png"
                          alt="Ace Visuals — brand specimen"
                          fill
                          sizes="(min-width: 1024px) 460px, 50vw"
                          className="object-cover"
                        />
                      </div>

                      <Badge
                        variant="media-primary"
                        className="absolute top-3 right-3"
                      >
                        Reply 48h
                      </Badge>

                      {/* Crosshair detail — cinematic flair */}
                      <span
                        aria-hidden
                        className="absolute right-4 bottom-4 h-6 w-6 opacity-70"
                      >
                        <span className="absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-white/60" />
                        <span className="absolute top-0 left-1/2 block h-full w-px -translate-x-1/2 bg-white/60" />
                        <span className="absolute top-1/2 left-1/2 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80" />
                      </span>
                    </div>

                    {/* Info plate */}
                    <div className="hairline border-border relative border-t px-4 py-4 md:px-5">
                      <Eyebrow size="sm">Direct line</Eyebrow>
                      <a
                        href="mailto:hello@acevisuals.studio"
                        className="text-foreground hover:text-primary link-u mt-1 block font-serif text-[17px] transition-colors"
                      >
                        hello@acevisuals.studio
                      </a>
                      <ul className="text-ink-muted mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[9.5px] tracking-[0.18em] uppercase">
                        <li className="inline-flex items-center gap-1.5">
                          <MapPin size={11} weight="bold" /> 41.8°N / 87.6°W
                        </li>
                        <li className="inline-flex items-center gap-1.5">
                          <Clock size={11} weight="bold" /> CST · 09—18
                        </li>
                      </ul>
                    </div>

                    {/* Signature row */}
                    <div className="bg-secondary/40 hairline border-border flex items-center justify-between border-t px-4 py-3 md:px-5">
                      <Eyebrow size="sm">Signed</Eyebrow>
                      <span className="font-serif text-[15px] tracking-[-0.01em]">
                        Ace
                        <span className="text-primary not-italic">·</span>
                        Visuals
                      </span>
                    </div>
                  </Card>
                </div>

                {/* Stats */}
                <dl className="mt-5 grid grid-cols-2 gap-2.5">
                  {STATS.map(([k, v], i) => (
                    <div
                      key={k}
                      data-reveal
                      style={{ "--stagger": i } as React.CSSProperties}
                      className="on-scroll p-3"
                    >
                      <dt className="text-ink-muted font-mono text-[9px] tracking-[0.18em] uppercase">
                        {k}
                      </dt>
                      <dd className="mt-1.5 font-serif text-[14px] tracking-[-0.01em]">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Quote / personal note */}
                <div data-reveal className="on-scroll mt-5 p-5">
                  <blockquote>
                    <span className="text-primary font-serif text-2xl leading-none">
                      &ldquo;
                    </span>
                    <p className="text-ink-muted mt-1 font-serif text-[15px] leading-[1.55]">
                      A good brief is half the film. Tell me what it
                      <span className="text-foreground"> should feel like</span>{" "}
                      — the rest is craft.
                    </p>
                    <footer className="text-ink-muted mt-4 font-mono text-[9px] tracking-[0.22em] uppercase">
                      — Ace, field note
                    </footer>
                  </blockquote>
                </div>
              </div>
            </aside>
          </section>

        </div>
      </div>
    </main>
  )
}
