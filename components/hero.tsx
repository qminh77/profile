"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Download,
  Github,
  Mail,
  Phone,
  Check,
  ArrowUpRight,
  GitCommit,
  BookOpen,
} from "lucide-react"

export function Hero() {
  const [copied, setCopied] = React.useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("nquoc.minh.work@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const pinnedRepos = [
    {
      name: "joblink",
      desc: "Professional job matching platform: Next.js 16, Supabase, PostgreSQL 40+ tables, Realtime.",
      lang: "TypeScript",
      langColor: "#3178c6",
      url: "https://github.com/qminh77/joblink",
    },
    {
      name: "ai_intro_umt",
      desc: "AI ANN Heuristic Search: Neural network learning heuristic functions for maze A* search (104 -> 33 nodes).",
      lang: "Python",
      langColor: "#3572A5",
      url: "https://github.com/qminh77/ai_intro_umt",
    },
    {
      name: "SUI_Shopping_Cart",
      desc: "E-commerce MVP with Sui Move smart contracts handling atomic checkouts at SUI Hackathon.",
      lang: "Move / TS",
      langColor: "#4C84FF",
      url: "https://github.com/qminh77/SUI_Shopping_Cart",
    },
    {
      name: "ems",
      desc: "Academic event management system with sub-second QR code check-in and modular architecture.",
      lang: "TypeScript",
      langColor: "#3178c6",
      url: "https://github.com/qminh77/ems",
    },
  ]

  return (
    <section className="space-y-6 pt-1">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* 1. LEFT ZONE: PROFILE IDENTITY & DIRECT ACTIONS */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-start gap-4">
            {/* Portrait Image (Balanced, Flat, Golden Ratio) */}
            <div className="relative w-24 h-32 shrink-0 overflow-hidden rounded-xl border border-border/70 bg-muted/20">
              <Image
                src="/profile.jpg"
                alt="Nguyen Quoc Minh"
                fill
                sizes="120px"
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Name, Handle & Title */}
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground truncate">
                  Nguyen Quoc Minh
                </h1>
              </div>

              <p className="text-xs sm:text-sm font-medium text-foreground/90">
                Software Engineer Intern — AI & Full-stack Web
              </p>

              <p className="text-[11px] font-mono text-muted-foreground">
                Dept. of Information Technology • UMT
              </p>

              {/* Status Indicator */}
              <div className="pt-1 font-mono text-xs flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Available for Internship (2026)</span>
              </div>
            </div>
          </div>

          {/* Bio Text (Flat, professional) */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Junior CS student focused on architecting modern full-stack web platforms with{" "}
            <strong className="text-foreground font-semibold">Next.js 16, TypeScript, Supabase / PostgreSQL (40+ tables, RLS)</strong>{" "}
            and solving applied AI algorithmic challenges with{" "}
            <strong className="text-foreground font-semibold">Python / TensorFlow (ANN, A* Heuristic Search)</strong>. Proven track record managing 600+ domain lifecycles and configuring DNS, Cloudflare, and SSL/TLS infrastructure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
            <Link
              href="/Nguyen-Quoc-Minh-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </Link>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/70 hover:bg-muted/50 text-foreground transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="tel:0964560507"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/70 hover:bg-muted/50 text-foreground transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-muted-foreground" />
              <span>+84 964 560 507</span>
            </a>

            <Link
              href="https://github.com/qminh77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/70 hover:bg-muted/50 text-foreground transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-muted-foreground" />
              <span>@qminh77</span>
            </Link>
          </div>
        </div>

        {/* 2. RIGHT ZONE: GITHUB COMMAND CENTER */}
        <div
          id="github"
          className="lg:col-span-7 space-y-3.5 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border/60 lg:pl-8 scroll-mt-20"
        >
          {/* Header */}
          <div className="flex items-baseline justify-between gap-2 border-b border-border/40 pb-2">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-foreground" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                GitHub Activity &amp; Open Source
              </h2>
              <span className="text-muted-foreground font-mono text-xs hidden sm:inline">• 33 Repositories</span>
            </div>

            <Link
              href="https://github.com/qminh77"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-primary hover:underline inline-flex items-center gap-0.5"
            >
              <span>View all</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Flat Contribution Graph */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <GitCommit className="w-3 h-3 text-primary" />
                <span>Contributions Stream</span>
              </span>
              <span>Realtime</span>
            </div>

            <div className="overflow-x-auto py-1">
              <div className="min-w-[580px] p-2 rounded-md bg-muted/20 border border-border/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/0F4C81/qminh77"
                  alt="GitHub Contributions chart"
                  className="w-full h-auto dark:invert dark:hue-rotate-180 opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Pinned Repos Grid (2-columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {pinnedRepos.map((repo, idx) => (
              <Link
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-md hover:bg-muted/40 transition-colors border border-border/40 space-y-1"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <BookOpen className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    <span className="font-mono text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>

                <p className="text-[11px] text-muted-foreground line-clamp-2 leading-snug">
                  {repo.desc}
                </p>

                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground pt-0.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
