"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { BinaryField } from "@/components/binary-field"
import { CodeRain } from "@/components/code-rain"
import { LocalTime } from "@/components/local-time"

function MagneticWord({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((character, index) =>
        character === " " ? (
          <span
            key={`space-${index}`}
            aria-hidden="true"
            className="inline-block w-[0.26em]"
          />
        ) : (
          <span
            key={`${character}-${index}`}
            aria-hidden="true"
            className="hero-letter"
            style={{ "--depth": 3 + (index % 4) * 2 } as React.CSSProperties}
          >
            {character}
          </span>
        )
      )}
    </>
  )
}

function PortraitPlate() {
  return (
    <div
      className="hero-portrait relative mb-1 w-full max-w-[216px] pb-1"
      data-parallax="0.2"
    >
      <div className="portrait-reveal relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-2 translate-y-2 bg-primary"
        />

        <div className="portrait-tilt relative">
          <figure className="portrait-frame relative border border-foreground/35 bg-card p-1.5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between gap-2 px-0.5 pb-1.5">
              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.08em] text-foreground">
                Specimen / 01
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted-foreground">
                NQM—26
              </span>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/profile.jpg"
                alt="Portrait of Nguyen Quoc Minh"
                fill
                priority
                sizes="216px"
                className="object-cover object-center saturate-[1.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
              />
              <span
                aria-hidden="true"
                className="portrait-scan pointer-events-none absolute inset-0"
              />
              <span className="absolute right-1.5 top-1.5 bg-primary px-1.5 py-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.08em] text-primary-foreground">
                2026
              </span>
            </div>

            <figcaption className="flex items-center justify-between gap-2 px-0.5 pt-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-muted-foreground">
              <span>FIG. 01</span>
              <span>HCMC · VN</span>
            </figcaption>
          </figure>

          <span className="hero-stamp absolute -left-4 top-9 bg-primary px-2.5 py-1.5 font-mono text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-primary-foreground">
            Open
            <br />
            2026
          </span>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [copied, setCopied] = React.useState(false)
  const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)

      if (timeout.current) clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const trackPointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const style = event.currentTarget.style

    style.setProperty("--spot-x", `${x}px`)
    style.setProperty("--spot-y", `${y}px`)
    style.setProperty("--hero-mx", ((x / rect.width - 0.5) * 2).toFixed(3))
    style.setProperty("--hero-my", ((y / rect.height - 0.5) * 2).toFixed(3))
  }

  const resetPointer = (event: React.PointerEvent<HTMLElement>) => {
    const style = event.currentTarget.style
    style.setProperty("--hero-mx", "0")
    style.setProperty("--hero-my", "0")
  }

  return (
    <section
      id="top"
      aria-labelledby="cover-title"
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      className="hero-spotlight relative isolate overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        data-parallax="0.16"
      >
        <BinaryField />
        <CodeRain className="opacity-35" />
      </div>

      <div className="shell relative z-10 flex min-h-[calc(100svh-3.5rem)] flex-col">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden grid-cols-4 lg:grid"
        >
          <span className="border-r border-border/40" />
          <span className="border-r border-border/40" />
          <span className="border-r border-border/40" />
          <span />
        </div>

        <div className="hero-in relative flex flex-col gap-1 border-b border-border/70 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4">
          <p className="label">
            ( F/01 ){" "}
            <span className="text-foreground">Portfolio</span> · 2026
          </p>
          <p className="label flex items-center gap-2">
            <span
              aria-hidden="true"
              className="status-dot inline-block size-1.5 bg-primary"
            />
            HCMC <LocalTime /> <span className="hidden sm:inline">· GMT+7</span>
          </p>
        </div>

        <div className="relative flex flex-1 flex-col pt-6 lg:pt-8">
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className="label label-accent hero-in hero-in-1">
                00 / Cover — Subject file
              </p>
              <p className="label text-right lg:hidden">Edition / 2026</p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 hidden text-right lg:block"
              data-parallax="0.22"
            >
              <div className="flex items-center justify-end gap-3">
                <span className="label"> Edition / 2026 </span>
                <span className="h-px w-14 bg-border" />
                <span className="label text-primary">01 / 26</span>
              </div>
              <p className="hero-year mt-1.5">2026</p>
              <p className="label mt-2">Portfolio / Index</p>
            </div>

            <h1
              id="cover-title"
              aria-label="Nguyen Quoc Minh"
              className="cover-name relative mt-5 lg:mt-6"
            >
              <span className="hero-line block">
                <span
                  aria-hidden="true"
                  className="hero-line-inner hero-line-1 block font-extralight"
                >
                  <MagneticWord text="NGUYEN" />
                </span>
              </span>
              <span className="hero-line block">
                <span
                  aria-hidden="true"
                  className="hero-line-inner hero-line-2 block font-semibold"
                >
                  <MagneticWord text="QUOC MINH" />
                  <span className="text-primary">.</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="mt-8 grid gap-x-8 gap-y-8 border-t border-border pt-6 lg:mt-auto lg:grid-cols-12">
            <div className="order-1 flex flex-col lg:order-none lg:col-span-6">
              <p className="max-w-xl text-[clamp(15px,1.28vw,19px)] font-light leading-[1.45] tracking-[-0.015em] text-foreground">
                I build{" "}
                <span className="text-primary">full-stack products</span> and
                applied AI systems — hiring workflows, event check-in,
                publishing platforms, and search heuristics that reach the same
                answer with less work.
              </p>

              <p className="label mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>Based in {site.location}</span>
                <span aria-hidden="true" className="text-primary">
                  /
                </span>
                <span>Available for 2026 internship</span>
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="h-11 px-5"
                >
                  <Link href="#work">
                    View selected work <span aria-hidden="true">→</span>
                  </Link>
                </Button>

                <Button variant="outline" size="lg" className="h-11" asChild>
                  <Link
                    href={site.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV <span aria-hidden="true">↓</span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="h-11"
                  type="button"
                  onClick={copyEmail}
                >
                  {copied ? (
                    <span className="text-primary">Copied</span>
                  ) : (
                    "Copy email"
                  )}
                </Button>
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email copied to clipboard" : ""}
                </span>
              </div>

              <a
                href="#profile"
                className="group mt-10 flex items-end gap-4 pb-3 lg:mt-auto lg:pt-10"
              >
                <span
                  aria-hidden="true"
                  className="next-index font-mono text-[clamp(64px,7.5vw,108px)] font-extralight leading-[0.78] tracking-[-0.06em]"
                >
                  01
                </span>
                <span className="pb-1">
                  <span className="label block text-primary">
                    Next / Profile
                  </span>
                  <span className="label block transition-colors group-hover:text-foreground">
                    Scroll to index ↓
                  </span>
                </span>
              </a>
            </div>

            <div className="hidden lg:col-span-3 lg:col-start-7 lg:block">
              <p className="label mb-2 flex items-center justify-between gap-3">
                <span>Portrait / 01</span>
                <span className="text-primary">●</span>
              </p>
              <PortraitPlate />
            </div>

            <dl className="spec-list order-3 lg:order-none lg:col-span-3 lg:col-start-10">
              <div className="spec-row">
                <dt>Base</dt>
                <dd>Ho Chi Minh City, VN</dd>
              </div>
              <div className="spec-row">
                <dt>Focus</dt>
                <dd>Full-stack / Applied AI</dd>
              </div>
              <div className="spec-row">
                <dt>Education</dt>
                <dd>UMT · B.S. IT, 2024—2028</dd>
              </div>
              <div className="spec-row">
                <dt>Status</dt>
                <dd className="text-primary">Open to 2026</dd>
              </div>
            </dl>

            <div className="order-2 lg:hidden">
              <PortraitPlate />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6 border-t border-border py-4">
          <dl className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            <div className="group">
              <dt className="label">Live systems</dt>
              <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
                06
              </dd>
            </div>
            <div className="group">
              <dt className="label">Domains managed</dt>
              <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
                600<span className="text-primary">+</span>
              </dd>
            </div>
            <div className="group">
              <dt className="label">Years shipping</dt>
              <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
                04
              </dd>
            </div>
            <div className="group">
              <dt className="label">Selected systems</dt>
              <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
                09
              </dd>
            </div>
          </dl>

          <a
            href="#profile"
            className="group hidden shrink-0 items-end gap-3 pb-1 lg:flex"
          >
            <span className="label transition-colors group-hover:text-foreground">
              Scroll / 01
            </span>
            <span
              aria-hidden="true"
              className="scroll-cue-line relative h-10 w-px overflow-hidden bg-border"
            />
            <span className="label pb-0.5 text-primary">↓</span>
          </a>
        </div>

        <div className="label flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-border/70 py-2">
          <span>(* 2026 &gt;</span>
          <span aria-hidden="true">{"//"}</span>
          <span>Full-stack · Applied AI</span>
          <span aria-hidden="true">[ ]</span>
          <span className="hidden sm:inline">Obel Mono 1.001</span>
          <span>/ SIL OFL 1.1 )</span>
        </div>
      </div>
    </section>
  )
}
