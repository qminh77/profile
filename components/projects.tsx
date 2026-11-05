"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrambleText } from "@/components/scramble-text"

type ProjectCategory = "web" | "ai" | "system"
type ProjectFilter = "all" | ProjectCategory

type Project = {
  id: string
  title: string
  role: string
  period: string
  category: ProjectCategory
  summary: string
  highlights: string[]
  tech: string[]
  github?: string
  live?: string
  image?: string
}

const projects: Project[] = [
  {
    id: "science-fair-2026",
    title: "Science Fair 2026 — Official Event Website",
    role: "Website Developer",
    period: "2026",
    category: "web",
    summary:
      "Official website for Science Fair 2026 — “Dialogue with the Future: AI – Society – Responsibility” — a three-day science festival (09—11.10.2026, Ho Chi Minh City) curated by The Too Blue Scientist, with Goethe-Institut, the German Consulate HCMC, Science Film Festival, artLIVE, Siemens, and Rolls-Royce.",
    highlights: [
      "Built on a custom WordPress block theme (science-fair-2026) with a companion science-fair-content plugin — custom blocks for the 3-day program schedule, credits, feedback form, and visitor stories",
      "Shipped the “Bong Bóng” interactive curatorial tour with the WordPress Interactivity API: visitors place artworks on a Manual ↔ Automated × Artifactual ↔ Non-artifactual coordinate plane, persisted in-browser and exportable as an image",
      "Bilingual vi/en experience, agenda across three festival days, program updates editable in WordPress, RSS feeds, and REST API",
    ],
    tech: [
      "WordPress",
      "PHP",
      "JavaScript",
      "Block Theme",
      "Interactivity API",
      "REST API",
      "vi/en i18n",
    ],
    live: "https://sf2026.thetoobluescientist.com",
  },
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
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "RLS",
      "Realtime",
    ],
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
    tech: [
      "Python",
      "TensorFlow / Keras",
      "ANN",
      "A* Algorithm",
      "BFS",
      "Heuristic Search",
    ],
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
    tech: [
      "Next.js",
      "Web Platform",
      "Content Architecture",
      "Authentication",
      "RSS",
    ],
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

const categories: Record<ProjectCategory, string> = {
  web: "Web",
  ai: "AI",
  system: "Systems",
}

const filters: Array<{ key: ProjectFilter; label: string }> = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "ai", label: "AI" },
  { key: "system", label: "Systems" },
]

export function Projects() {
  const [filter, setFilter] = React.useState<ProjectFilter>("all")
  const [preview, setPreview] = React.useState<Project | null>(null)
  const previewRef = React.useRef<HTMLDivElement>(null)

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter)

  const movePreview = (event: React.MouseEvent<HTMLElement>) => {
    const element = previewRef.current
    if (!element) return

    const width = 304
    const height = 260
    const x = Math.max(
      16,
      Math.min(event.clientX + 24, window.innerWidth - width - 16)
    )
    const y = Math.max(
      16,
      Math.min(event.clientY + 24, window.innerHeight - height - 16)
    )

    element.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p className="label">
          Index / {String(filteredProjects.length).padStart(2, "0")} entries
        </p>

        <div className="no-scrollbar -mx-1 w-full min-w-0 overflow-x-auto px-1 sm:mx-0 sm:w-auto sm:px-0">
          <Tabs
            value={filter}
            onValueChange={(value) => setFilter(value as ProjectFilter)}
          >
            <TabsList aria-label="Filter projects by category">
              {filters.map((item) => {
                const count =
                  item.key === "all"
                    ? projects.length
                    : projects.filter(
                        (project) => project.category === item.key
                      ).length

                return (
                  <TabsTrigger key={item.key} value={item.key}>
                    {item.label}
                    <span className="text-muted-foreground">{count}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="divide-y divide-border">
        {filteredProjects.map((project) => {
          const index = projects.findIndex((item) => item.id === project.id) + 1

          return (
            <article
              key={project.id}
              onMouseEnter={(event) => {
                setPreview(project)
                movePreview(event)
              }}
              onMouseMove={movePreview}
              onMouseLeave={() => setPreview(null)}
              className="group grid gap-4 py-7 transition-colors hover:bg-secondary/30 md:grid-cols-[44px_minmax(0,1fr)]"
            >
              <p className="label pt-1 text-primary">
                {String(index).padStart(2, "0")}
              </p>

              <div className="min-w-0 space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-[16px] font-medium leading-tight tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-[18px]">
                      <ScrambleText text={project.title} />
                    </h3>
                    <p className="label label-accent mt-1.5">{project.role}</p>
                  </div>

                  <p className="label flex flex-wrap items-center gap-2">
                    <span>{project.period}</span>
                    <span aria-hidden="true" className="text-primary">
                      /
                    </span>
                    <span>{categories[project.category]}</span>
                  </p>
                </div>

                <p className="max-w-3xl text-[12px] leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-[11px] leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-px shrink-0 text-primary"
                      >
                        +
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.live ? (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label text-foreground transition-colors hover:text-primary"
                      >
                        Live <span aria-hidden="true">↗</span>
                      </Link>
                    ) : null}

                    {project.github ? (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Code <span aria-hidden="true">↗</span>
                      </Link>
                    ) : null}

                    {project.image ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="xs"
                            onClick={() => setPreview(null)}
                          >
                            Preview <span aria-hidden="true">↗</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>
                              {project.role} · {project.period}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-2 p-4">
                            <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-secondary">
                              <Image
                                src={project.image}
                                alt={`Interface preview of ${project.title}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-contain"
                              />
                            </div>
                            <p className="label">
                              FIG. {String(index).padStart(2, "0")} — Interface
                              preview
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div
        ref={previewRef}
        aria-hidden="true"
        className={cn(
          "project-preview pointer-events-none fixed left-0 top-0 z-40 hidden w-[304px] border border-border bg-card p-2 shadow-2xl lg:block",
          preview && "is-on"
        )}
      >
        {preview ? (
          <>
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-secondary">
              {preview.image ? (
                <Image
                  src={preview.image}
                  alt=""
                  fill
                  sizes="304px"
                  className="object-cover"
                />
              ) : (
                <div
                  className="flex h-full items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 65%)",
                  }}
                >
                  <span className="font-mono text-[64px] font-extralight leading-none text-primary">
                    {String(
                      projects.findIndex((item) => item.id === preview.id) + 1
                    ).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="label text-foreground">{preview.id}</span>
              <span className="label">{categories[preview.category]}</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
