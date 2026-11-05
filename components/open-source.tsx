import Link from "next/link"

import { site } from "@/lib/site"
import { Subsection } from "@/components/chapter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const pinnedRepos = [
  {
    name: "SF2026",
    desc: "Official Science Fair 2026 site: an editable three-day programme, bilingual copy, and “Bong Bóng” — a drag-to-place curatorial tour that saves and exports the visitor's arrangement.",
    meta: "Live · WordPress",
    url: "https://sf2026.thetoobluescientist.com",
  },
  {
    name: "Memolab",
    desc: "Public platform for a knowledge-management product: courses, publications, topics, and authors in one catalogue, with member access tiers and automated RSS feeds.",
    meta: "Live · Web platform",
    url: "https://memolab.io",
  },
  {
    name: "EMS",
    desc: "Campus event operations in one loop: organisers create events, issue QR passes, and scan arrivals into an attendance ledger that updates immediately.",
    meta: "Code · TypeScript",
    url: "https://github.com/qminh77/ems",
  },
  {
    name: "SUI",
    desc: "48-hour hackathon MVP: a storefront with seller and admin dashboards, where Sui Move contracts settle each checkout atomically.",
    meta: "Code · Sui Move",
    url: "https://github.com/qminh77/SUI_Shopping_Cart",
  },
]

export function OpenSource() {
  return (
    <Subsection
      index="01.1"
      title="Pinned builds"
      meta="04 selected / live + code"
    >
      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="label">Contributions stream</span>
            <span className="label text-primary">Live</span>
          </div>

          <div className="plate relative min-w-0 overflow-hidden">
            <div className="overflow-x-auto p-3">
              <div className="min-w-[420px] sm:min-w-[560px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ghchart.rshah.org/ff3c05/qminh77"
                  alt="GitHub contribution chart for qminh77"
                  className="h-auto w-full opacity-90 dark:invert dark:hue-rotate-180"
                  loading="lazy"
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:hidden"
            />
          </div>

          <p className="label flex items-center justify-between gap-3 pt-1">
            <span className="flex items-center gap-2">
              Source: ghchart / @qminh77
              <span className="text-primary sm:hidden">· swipe →</span>
            </span>
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-foreground transition-colors hover:text-primary"
            >
              GitHub ↗
            </Link>
          </p>
        </div>

        <div className="grid min-w-0 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {pinnedRepos.map((repo) => (
            <Link
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block min-w-0"
            >
              <Card className="h-full min-w-0 transition-colors group-hover:border-foreground">
                <CardHeader className="gap-2 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="truncate font-mono text-[11px] font-medium tracking-[0.02em] text-foreground transition-colors group-hover:text-primary">
                        {repo.name}
                      </h4>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                        {repo.desc}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xs text-muted-foreground transition-colors group-hover:text-primary"
                    >
                      ↗
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="px-3 pb-3 pt-0">
                  <Badge variant="outline" className="gap-1.5">
                    <span
                      aria-hidden="true"
                      className="size-1.5 bg-primary"
                    />
                    {repo.meta}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Subsection>
  )
}
