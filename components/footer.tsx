"use client"

import * as React from "react"
import Link from "next/link"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const weights = [
  { value: 100, name: "Thin" },
  { value: 200, name: "ExtraLight" },
  { value: 300, name: "Light" },
  { value: 400, name: "Regular" },
  { value: 500, name: "Medium" },
  { value: 600, name: "SemiBold" },
  { value: 700, name: "Bold" },
  { value: 800, name: "ExtraBold" },
  { value: 900, name: "Black" },
]

export function Footer() {
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

  return (
    <div className="space-y-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="label label-accent">06.1 / Availability</p>

          <h3 className="max-w-2xl font-mono text-[clamp(32px,5vw,64px)] font-extralight uppercase leading-[0.94] tracking-[-0.045em]">
            Let&apos;s build something{" "}
            <span className="italic text-primary">precise.</span>
          </h3>

          <p className="max-w-xl text-[12px] leading-relaxed text-muted-foreground">
            I am actively seeking{" "}
            <span className="text-foreground">
              Software Engineer Intern / AI Developer
            </span>{" "}
            roles for 2026. If you have an open position, an interesting
            challenge, or a collaboration in mind, the line is open.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button asChild>
              <a href={`mailto:${site.email}`}>
                Email me <span aria-hidden="true">↗</span>
              </a>
            </Button>
            <Button variant="outline" type="button" onClick={copyEmail}>
              {copied ? <span className="text-primary">Copied</span> : "Copy email"}
            </Button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email copied to clipboard" : ""}
            </span>
            <Button variant="ghost" asChild>
              <Link href={site.cv} target="_blank" rel="noopener noreferrer">
                CV <span aria-hidden="true">↓</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-4 border-t border-border pt-4 sm:grid-cols-2">
            <div>
              <dt className="label">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="rule-link break-all font-mono text-[11px] text-foreground"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">Phone / Zalo</dt>
              <dd className="mt-1">
                <a
                  href={site.phoneHref}
                  className="rule-link font-mono text-[11px] text-foreground"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label">GitHub</dt>
              <dd className="mt-1">
                <Link
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link font-mono text-[11px] text-foreground"
                >
                  github.com/qminh77 <span aria-hidden="true">↗</span>
                </Link>
              </dd>
            </div>
            <div>
              <dt className="label">Resume</dt>
              <dd className="mt-1">
                <Link
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link font-mono text-[11px] text-foreground"
                >
                  PDF / 2026 <span aria-hidden="true">↓</span>
                </Link>
              </dd>
            </div>
          </dl>

          <div className="border-t border-border pt-4">
            <p className="label">Colophon</p>
            <dl className="spec-list mt-2">
              <div className="spec-row">
                <dt>Typeface</dt>
                <dd>Obel Mono 1.001</dd>
              </div>
              <div className="spec-row">
                <dt>Foundry</dt>
                <dd>Typographic Systems</dd>
              </div>
              <div className="spec-row">
                <dt>Axis</dt>
                <dd>wght 100—900 + italic</dd>
              </div>
              <div className="spec-row">
                <dt>License</dt>
                <dd>
                  <Link
                    href="/fonts/OFL.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    SIL OFL 1.1 ↗
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="grid gap-8 border-t border-border pt-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="label flex items-center justify-between gap-3">
            <span>Type specimen</span>
            <span>Obel Mono / 09 weights</span>
          </p>

          <div className="mt-3 space-y-1">
            {weights.map((weight) => (
              <div
                key={weight.value}
                className="flex items-baseline gap-4 border-b border-border/50 pb-1"
              >
                <span className="label w-8 shrink-0">{weight.value}</span>
                <span
                  className="truncate text-[13px] leading-tight text-foreground"
                  style={{ fontWeight: weight.value }}
                >
                  Nguyen Quoc Minh
                </span>
                <span className="label ml-auto shrink-0">{weight.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="label flex items-center justify-between gap-3">
              <span>Masking / ss01</span>
              <span className="text-primary">Obel Mono</span>
            </p>
            <p className="masked mt-2 break-all font-mono text-[11px] leading-relaxed text-muted-foreground">
              GITHUB_TOKEN=ghp_aB3dEFGHiJ7kLmN0pQr
            </p>
            <p className="label mt-2">
              A visual veil, not security. Copy still returns the real
              characters.
            </p>
          </div>

          <Separator />

          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="label">Build</dt>
              <dd className="mt-1 font-mono text-[11px] text-foreground">
                Next.js 16 / React 19
              </dd>
            </div>
            <div>
              <dt className="label">Type</dt>
              <dd className="mt-1 font-mono text-[11px] text-foreground">
                TypeScript / Tailwind v4
              </dd>
            </div>
            <div>
              <dt className="label">Deploy</dt>
              <dd className="mt-1 font-mono text-[11px] text-foreground">
                Vercel
              </dd>
            </div>
            <div>
              <dt className="label">Edition</dt>
              <dd className="mt-1 font-mono text-[11px] text-foreground">
                2026 / v1.001
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="label flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Nguyen Quoc Minh.</span>
        <span>Build systems. Set type. Ship.</span>
        <a
          href="#top"
          className="text-foreground transition-colors hover:text-primary"
        >
          Back to top ↑
        </a>
      </div>
    </div>
  )
}
