"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { BinaryField } from "@/components/binary-field"
import { CodeRain } from "@/components/code-rain"
import { LocalTime } from "@/components/local-time"

function PortraitPlate() {
  return (
    <div className="portrait-frame">
      <figure className="plate relative p-1.5 sm:p-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
          <Image
            src="/profile.jpg"
            alt="Portrait of Nguyen Quoc Minh"
            fill
            priority
            sizes="(max-width: 639px) 132px, (max-width: 1023px) 160px, 200px"
            className="object-cover object-center saturate-[1.08]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
          />
          <span
            aria-hidden="true"
            className="portrait-scan pointer-events-none absolute inset-0"
          />
          <span className="absolute right-1.5 top-1.5 bg-primary px-1.5 py-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.08em] text-primary-foreground">
            2026
          </span>
        </div>
        <figcaption className="label flex items-center justify-between gap-2 px-0.5 pt-1.5 text-[8px]">
          <span>FIG. 01</span>
          <span>HCMC · VN</span>
        </figcaption>
      </figure>
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
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty(
      "--spot-x",
      `${event.clientX - rect.left}px`
    )
    event.currentTarget.style.setProperty(
      "--spot-y",
      `${event.clientY - rect.top}px`
    )
  }

  return (
    <section
      id="top"
      aria-labelledby="cover-title"
      onPointerMove={trackPointer}
      className="hero-spotlight relative overflow-hidden border-b border-border"
    >
      <BinaryField />
      <CodeRain className="opacity-80" />

      <div className="shell relative z-10">
        <div className="hero-in flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border/70 py-3">
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

        <div className="relative pt-10 lg:pt-14">
          <p className="label label-accent hero-in hero-in-1">00 / Cover</p>

          <h1
            id="cover-title"
            className="cover-name hero-in hero-in-2 mt-5 lg:mt-7"
          >
            <span className="block font-extralight">Nguyen</span>
            <span className="block font-semibold">
              Quoc Minh<span className="text-primary">.</span>
            </span>
          </h1>

          <div className="hero-in hero-in-3 relative mt-8 w-[132px] sm:w-[160px] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[160px] xl:w-[200px]">
            <PortraitPlate />
            <p className="label mt-3 hidden items-center gap-2 lg:flex">
              <span
                aria-hidden="true"
                className="status-dot inline-block size-1.5 bg-primary"
              />
              Open for 2026
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-border pt-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="max-w-xl text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              Software engineer building{" "}
              <span className="text-foreground">full-stack web platforms</span>{" "}
              and <span className="text-foreground">applied AI systems</span> —
              from PostgreSQL schemas with 40+ tables to neural-network
              heuristics for A* search.
            </p>

            <p className="label mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Based in {site.location}</span>
              <span aria-hidden="true" className="text-primary">
                /
              </span>
              <span>Available for 2026 internship</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Button asChild>
                <Link
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </Link>
              </Button>

              <Button variant="outline" type="button" onClick={copyEmail}>
                {copied ? (
                  <span className="text-primary">Copied</span>
                ) : (
                  "Copy email"
                )}
              </Button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email copied to clipboard" : ""}
              </span>

              <Button variant="ghost" asChild>
                <Link
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:col-start-7 lg:flex lg:items-end">
            <p className="label pb-1 [writing-mode:vertical-rl] rotate-180">
              Scroll to index / 01 Profile ↓
            </p>
          </div>

          <dl className="spec-list lg:col-span-4 lg:col-start-9">
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
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border py-5 md:grid-cols-4">
          <div className="group">
            <dt className="label">Repositories</dt>
            <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
              33
            </dd>
          </div>
          <div className="group">
            <dt className="label">Domains managed</dt>
            <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
              600<span className="text-primary">+</span>
            </dd>
          </div>
          <div className="group">
            <dt className="label">SQL tables shipped</dt>
            <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
              40<span className="text-primary">+</span>
            </dd>
          </div>
          <div className="group">
            <dt className="label">Selected systems</dt>
            <dd className="stat-value mt-2 transition-colors group-hover:text-primary">
              09
            </dd>
          </div>
        </dl>

        <div className="label flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-border/70 py-2.5">
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
