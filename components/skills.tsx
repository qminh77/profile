export function Skills() {
  const groups = [
    {
      category: "AI & Applied Algorithms",
      skills: [
        "Python",
        "TensorFlow / Keras",
        "Neural Networks (ANN)",
        "A* Search Algorithm",
        "BFS (Breadth-First Search)",
        "Heuristic Search",
        "Synthetic Data Generation",
        "Cross-Validation",
      ],
    },
    {
      category: "Full-stack Web",
      skills: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "shadcn/ui",
        "Server Actions",
        "TanStack Query",
        "Zod Validation",
        "HTML5 / CSS3",
      ],
    },
    {
      category: "Databases & Backend",
      skills: [
        "Supabase",
        "PostgreSQL (40+ Tables)",
        "Row Level Security (RLS)",
        "Stored Procedures / RPC",
        "Realtime Subscriptions",
        "Storage Buckets",
        "pg_trgm Full-text Search",
        "Google Sheets API",
      ],
    },
    {
      category: "Infrastructure & Networking",
      skills: [
        "Git & GitHub",
        "Vercel Platform",
        "Cloudflare (DNS, SSL, WAF)",
        "600+ Domains Management",
        "Nameserver & MX Records",
        "Hosting / VPS",
        "SSL/TLS Security",
      ],
    },
  ]

  return (
    <section id="skills" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="border-b border-border/60 pb-3">
        <h2 className="text-sm font-bold tracking-wider text-foreground uppercase font-mono">
          Technical Skills &amp; Tooling
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Languages, frameworks, databases, and operational infrastructure
        </p>
      </div>

      {/* Flat Skills Grouping */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {groups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{group.category}</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-muted/40 text-foreground/90 border border-border/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills & language note */}
      <div className="pt-3 border-t border-border/40 flex flex-col gap-1.5 font-mono text-xs text-muted-foreground">
        <div>
          <span className="text-foreground font-semibold">Languages:</span>{" "}
          <span>Proficient in reading technical documentation and English communication</span>
        </div>
        <div>
          <span className="text-foreground font-semibold">Work Ethic:</span>{" "}
          <span>Fast Learner • Teamwork &amp; Autonomous Execution • High Ownership</span>
        </div>
      </div>
    </section>
  )
}
