export function About() {
  return (
    <section id="about" className="space-y-4 scroll-mt-20">
      {/* Section Header */}
      <div className="border-b border-border/60 pb-3">
        <h2 className="text-sm font-bold tracking-wider text-foreground uppercase font-mono">
          Education &amp; Objectives
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Academic foundation and long-term career aspirations
        </p>
      </div>

      <div className="space-y-4">
        {/* Education Entry */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xs sm:text-sm font-bold text-foreground">
              University of Management and Technology (UMT)
            </h3>
            <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
              2024 — 2028
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="text-primary font-medium">B.S. in Information Technology</span>
            <span className="text-muted-foreground/60">•</span>
            <span className="text-foreground/90 font-medium">Junior Year (3rd Year)</span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Rigorous curriculum focused on software engineering standards and international benchmarks. Active participant in collegiate competitive programming (ICPC) and applied AI research.
          </p>
        </div>

        {/* Objective Entry */}
        <div className="pt-3 border-t border-border/40 space-y-1 text-xs text-muted-foreground leading-relaxed">
          <h4 className="font-mono text-xs font-semibold text-foreground">
            Career Objective
          </h4>
          <p>
            Seeking a Software Engineer Intern / AI Developer position to contribute full-stack ownership to production systems: from system analysis, Next.js/Supabase architecture, to AI algorithmic optimization. Dedicated to long-term growth and technical excellence alongside an agile team.
          </p>
        </div>
      </div>
    </section>
  )
}
