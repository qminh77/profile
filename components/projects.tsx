"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, ArrowUpRight, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
  id: string
  title: string
  role: string
  period: string
  category: "web" | "ai" | "system"
  summary: string
  highlights: string[]
  tech: string[]
  github?: string
  live?: string
  image?: string
}

export function Projects() {
  const [filter, setFilter] = React.useState<"all" | "web" | "ai" | "system">("all")

  const projects: Project[] = [
    {
      id: "joblink",
      title: "Joblink — Professional Social Network & Job Portal",
      role: "Team 18NĐ / Full-stack Developer",
      period: "May 2026 — Present",
      category: "web",
      summary:
        "Candidate and enterprise hiring portal featuring a professional feed, vacancy postings, end-to-end applicant tracking, real-time messaging, and admin dashboard.",
      highlights: [
        "Architecture standard: Next.js Server Actions → Repository Pattern → Supabase Client",
        "PostgreSQL schema with 40+ tables, protected by Row Level Security (RLS) & RPC functions",
        "Full-text search powered by pg_trgm extension, internationalization (i18n vi/en)",
      ],
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL", "RLS", "Realtime"],
      github: "https://github.com/qminh77/joblink",
      live: "https://joblink.umters.club",
    },
    {
      id: "ai-maze",
      title: "AI ANN Maze Pathfinding — Heuristic Search",
      role: "Independent Research Project",
      period: "Jun 2026",
      category: "ai",
      summary:
        "Artificial Neural Network (ANN) engineered in Python/TensorFlow to learn heuristic functions for A* search in complex mazes, minimizing explored node space.",
      highlights: [
        "Preserves optimal shortest path length (20 steps)",
        "Drastically cuts expanded nodes from 104 (BFS) and 46 (Manhattan) down to 33 (ANN) — 68% search cost reduction",
        "Synthetic training dataset generated via BFS with 10-dimensional feature vectors; MAE ~2.28 steps",
      ],
      tech: ["Python", "TensorFlow / Keras", "ANN", "A* Algorithm", "BFS", "Heuristic Search"],
      github: "https://github.com/qminh77/ai_intro_umt",
    },
    {
      id: "memolab",
      title: "MemoLab.io — Knowledge Management & Learning Platform",
      role: "Web Platform Developer",
      period: "2026",
      category: "system",
      summary:
        "Contributed to developing the public web platform for Memo Lab, a digital product enabling individuals and organizations to manage academic materials and structured knowledge.",
      highlights: [
        "Multi-tier content hierarchy: courses, publications, topics, authors, and taxonomy tags",
        "Integrated member access tiers and automated RSS content feeds",
      ],
      tech: ["Next.js", "Web Platform", "Content Architecture", "Authentication", "RSS"],
      live: "https://memolab.io",
    },
    {
      id: "sui-cart",
      title: "SUI Shopping Cart Platform — SUI Hackathon MVP",
      role: "Team Lead & Full-stack Developer",
      period: "Jan 2026",
      category: "web",
      summary:
        "Decentralized e-commerce prototype built in 48 hours at SUI Hackathon. Supports physical/digital goods settlement with seller and admin dashboards.",
      highlights: [
        "Sui Move smart contracts handle atomic checkouts and transparent on-chain transactions",
        "Next.js frontend integrated with Supabase for order metadata caching and state management",
      ],
      tech: ["Next.js", "Sui Move", "Supabase", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/qminh77/SUI_Shopping_Cart",
      image: "/sui_shopping_cart_platform.png",
    },
    {
      id: "ems",
      title: "EMS — Student & Academic Event Management",
      role: "Solo Developer",
      period: "2025 — 2026",
      category: "web",
      summary:
        "Campus event operations platform with instantaneous QR attendance check-in, real-time tracking, and modular architecture.",
      highlights: [
        "Sub-second QR code generator and scanner with instant attendance ledger update",
        "Clean modular division across client, server, and shared types for maintainability",
      ],
      tech: ["TypeScript", "Next.js", "QR Check-in", "Vercel"],
      github: "https://github.com/qminh77/ems",
      live: "https://ems-sand-kappa.vercel.app",
      image: "/ems_student_management.png",
    },
    {
      id: "libumt",
      title: "LibUMT — Article Submission & Review System",
      role: "Solo Developer",
      period: "Dec 2025 — Present",
      category: "system",
      summary:
        "Content submission and editorial management portal leveraging Google Sheets API as a serverless database, deployed on Vercel with AI Agent workflows.",
      highlights: [
        "Two-way live synchronization with Google Sheets API as a serverless backend",
        "AI Agent workflow experiment for automatic categorization and pre-moderation",
      ],
      tech: ["Google Sheets API", "Next.js", "Vercel", "AI Agent Workflow"],
      github: "https://github.com/qminh77/libumt",
      live: "https://libumt.vercel.app",
      image: "/content_review_system.png",
    },
    {
      id: "tra-cuu-diem",
      title: "National High School Exam 2025 Score Portal",
      role: "Solo Developer",
      period: "Jul 2025",
      category: "system",
      summary:
        "High-concurrency score lookup engine built for regional students and parents during nationwide release day with low latency.",
      highlights: [
        "Configured Cloudflare CDN caching and custom domain to absorb traffic surges",
        "Sub-200ms query latency achieved via payload compression and index optimization",
      ],
      tech: ["JavaScript", "REST API", "Database", "Cloudflare DNS"],
      github: "https://github.com/qminh77/tracuudiem",
      live: "https://tracuu.nhontrachcfs.edu.vn",
      image: "/thpt_2025_score_lookup.png",
    },
    {
      id: "chatbot-umt",
      title: "UMT Student Academic Assistant Chatbot",
      role: "Developer",
      period: "Jul 2025",
      category: "ai",
      summary:
        "Intelligent conversational assistant for student handbook inquiries, academic regulations, and campus guidance built in Python.",
      highlights: [
        "Automated intent matching for high-frequency student inquiries",
        "Embeddable interactive chat widget for internal university websites",
      ],
      tech: ["Python", "HTML/CSS", "JavaScript"],
      github: "https://github.com/qminh77/chatbot-umt",
      image: "/chat_bot_umt.png",
    },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/60 pb-3">
        <div>
          <h2 className="text-sm font-bold tracking-wider text-foreground uppercase font-mono">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Production web platforms, applied AI research, and full-stack solutions
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex items-center gap-1 font-mono text-xs">
          {([
            { key: "all", label: "All" },
            { key: "web", label: "Web" },
            { key: "ai", label: "AI" },
            { key: "system", label: "Systems" },
          ] as const).map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                filter === item.key
                  ? "bg-foreground text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flat Projects List (Zero Box, Pure Content) */}
      <div className="divide-y divide-border/40">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="py-5 first:pt-0 space-y-2.5"
          >
            {/* Header Row: Title, Period, Links */}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-foreground hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-muted-foreground">{project.period}</span>
                <div className="flex items-center gap-2">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-foreground hover:text-primary font-medium transition-colors"
                      title="Mở link thực tế"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
                      title="Xem GitHub"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Role */}
            <p className="font-mono text-xs text-primary font-medium">
              {project.role}
            </p>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            {/* Technical Highlights */}
            <div className="space-y-1 pt-0.5">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-foreground/85 font-mono"
                >
                  <span className="text-primary select-none">›</span>
                  <span className="leading-normal font-sans sm:font-mono">{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack & Optional Preview */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-muted/50 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.image && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-primary hover:underline transition-colors cursor-pointer py-0.5"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl p-4 bg-card border border-border">
                    <DialogTitle className="text-xs font-mono mb-2">
                      {project.title}
                    </DialogTitle>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-muted border border-border/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
