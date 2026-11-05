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

export function Skills() {
  const total = groups.reduce((count, group) => count + group.skills.length, 0)

  return (
    <div className="space-y-6">
      <p className="label flex items-center justify-between gap-3 border-b border-border pb-2">
        <span>Taxonomy / 04 groups</span>
        <span>{total} tools &amp; methods</span>
      </p>

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {groups.map((group, index) => (
          <section key={group.category} className="space-y-3">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
              <h3 className="font-mono text-[11px] font-medium uppercase leading-tight tracking-[0.06em] text-foreground">
                <span className="mr-2 text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {group.category}
              </h3>
              <span className="label shrink-0">{group.skills.length}</span>
            </div>

            <ul className="grid grid-cols-1 gap-x-6 xl:grid-cols-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-baseline justify-between gap-3 border-b border-border/50 py-1.5 text-[11px] leading-snug text-foreground/85"
                >
                  <span>{skill}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[9px] text-muted-foreground"
                  >
                    +
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <dl className="grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2">
        <div>
          <dt className="label">Languages</dt>
          <dd className="mt-1 text-[11px] leading-relaxed text-foreground/90">
            Proficient in reading technical documentation and English
            communication
          </dd>
        </div>
        <div>
          <dt className="label">Work ethic</dt>
          <dd className="mt-1 text-[11px] leading-relaxed text-foreground/90">
            Fast learner · Teamwork &amp; autonomous execution · High ownership
          </dd>
        </div>
      </dl>
    </div>
  )
}
