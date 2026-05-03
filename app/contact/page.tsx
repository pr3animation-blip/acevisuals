"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  InstagramLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr"
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
import { haptic } from "@/lib/haptic/haptic"

const CONTACT_VIDEO_URL =
  "https://utfs.io/f/imAJ8rSJG1YPZBEduUiqHpA083hcYKWDofk2CMvmnbxV9OXl"

const legendClass =
  "text-ink-muted -ml-1 mb-5 inline-flex w-fit items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase"

const labelClass =
  "text-ink-muted flex items-baseline justify-between font-mono text-[10px] tracking-[0.22em] uppercase"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    haptic([12, 40, 18])
    setSubmitted(true)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <main className="site-page contact-stage relative min-h-svh bg-background text-foreground">
      {/* ---------- FULL-WIDTH TWO-COLUMN ---------- */}
      <section className="relative grid w-full grid-cols-1 lg:grid-cols-2">
        {/* -------- LEFT: HEADER + FORM -------- */}
        <div className="relative px-5 pt-10 pb-12 sm:px-7 md:px-10 md:pt-14 md:pb-16 lg:px-14">
          {/* Vertical "BRIEF" — flair */}
          <span
            aria-hidden
            className="text-ink-muted/30 pointer-events-none absolute top-14 left-2 hidden font-mono text-[10px] tracking-[0.55em] uppercase [writing-mode:vertical-rl] lg:block"
          >
            · Brief · Specimen · Frame ·
          </span>

          <header className="relative pb-12 md:pb-16">
            <Eyebrow tone="primary">Contact · 04 / Brief</Eyebrow>
            <h1 className="mt-5 font-serif text-[44px] leading-[0.95] font-normal tracking-[-0.04em] sm:text-[60px] md:text-[72px] lg:text-[88px]">
              Send the
              <br />
              <em className="text-primary not-italic">brief</em>.
              <span className="text-ink-muted/40 ml-3 align-top font-mono text-[12px] tracking-[0.22em] uppercase md:text-[13px]">
                / Frame 0001
              </span>
            </h1>
            <p className="text-ink-muted mt-7 max-w-[58ch] text-sm leading-[1.7] md:text-base">
              Three minutes of your time, a project in motion. Tell me what
              you&rsquo;re building, what it should feel like, and when it needs
              to land. Every brief is read by me — replies within{" "}
              <em className="text-foreground not-italic">forty-eight hours</em>.
            </p>

            {/* Alt channels — direct line if the form feels too formal */}
            <div className="text-ink-muted mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[10px] tracking-[0.22em] uppercase">
              <span aria-hidden className="bg-border block h-px w-8" />
              <span>Or reach me direct —</span>
              <a
                href="mailto:andrew@acevisuals.io"
                className="link-u text-foreground hover:text-primary font-serif text-[13px] tracking-normal normal-case transition-colors"
              >
                andrew@acevisuals.io
              </a>
              <a
                href="https://www.instagram.com/ace_visuals.3d/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @ace_visuals.3d"
                className="hairline border-border text-foreground/75 hover:text-primary hover:border-primary/55 grid size-7 place-items-center rounded-full border transition-colors duration-[200ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <InstagramLogo size={12} weight="regular" aria-hidden />
              </a>
            </div>
          </header>

          <div className="lg:pl-6">
            {submitted ? (
              <Card
                variant="hairline"
                size="none"
                className="form-swap-in relative p-8 md:p-12"
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
                  <a
                    href="mailto:andrew@acevisuals.io"
                    className="text-foreground hover:text-primary link-u transition-colors"
                  >
                    andrew@acevisuals.io
                  </a>{" "}
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
              <form
                onSubmit={onSubmit}
                className="form-swap-in flex flex-col gap-12"
              >
                {/* SECTION 01 — IDENTITY */}
                <FieldSet className="border-0">
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
                <FieldSet className="border-0">
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
                <div className="border-border flex flex-col items-stretch gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-ink-muted max-w-[36ch] font-mono text-[10px] leading-[1.65] tracking-[0.12em] uppercase">
                    By sending you agree to a quick reply
                    <br />
                    from{" "}
                    <a
                      href="mailto:andrew@acevisuals.io"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      andrew@acevisuals.io
                    </a>
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

        {/* -------- RIGHT: VIDEO -------- */}
        <aside className="relative bg-black">
          <div className="relative h-[60svh] w-full lg:sticky lg:top-0 lg:h-svh">
            <video
              src={CONTACT_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>
        </aside>
      </section>
    </main>
  )
}
