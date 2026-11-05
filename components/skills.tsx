const capabilities = [
  {
    title: "Product engineering",
    summary:
      "Take a workflow from requirement to shipped surface: information architecture, permissions, empty and error states, and the interface that holds them together.",
    evidence: [
      "Joblink: candidate and employer accounts, a professional feed, job posts, applicant tracking, and realtime messaging in one product.",
      "SF2026: an editable festival programme and a drag-and-drop curatorial tour, bilingual from the content model up.",
      "EMS: event setup, QR pass issuance, and attendance views that update from the same ledger.",
    ],
  },
  {
    title: "Data & backend",
    summary:
      "Model the domain, enforce access where the data lives, and shape queries around the screens people actually use.",
    evidence: [
      "Joblink's schema covers identity, companies, jobs, applications, interview stages, messages, notifications, saved items, and admin audit records. Row-level policies scope each read and write to the right account — a company sees its own applicants, not the whole table.",
      "Partial-match search over job and candidate text, plus database functions for multi-step writes that must stay consistent.",
      "Score portal: indexed lookups and compressed responses kept queries under 200 ms on release day.",
    ],
  },
  {
    title: "Applied AI",
    summary:
      "Train and evaluate a model, then put it inside a running system where its output changes behaviour.",
    evidence: [
      "A* with a learned ANN heuristic kept the 20-step optimal path while expanding 33 nodes instead of 104 (BFS) or 46 (Manhattan) — 68% fewer nodes.",
      "Training data generated with BFS, 10-dimensional maze features, cross-validated; mean absolute error ~2.28 steps.",
      "UMT chatbot matched student-handbook questions by intent and shipped as an embeddable widget.",
    ],
  },
  {
    title: "Delivery & operations",
    summary:
      "Keep the system reachable: deploy it, address it correctly, terminate TLS, and know where to look when it breaks.",
    evidence: [
      "Two years of domain operations: 600+ registrations, renewals, transfers, nameserver and MX cutovers, Cloudflare WAF, and SSL/TLS.",
      "Live deployments on Vercel and managed WordPress hosting, including domain cutovers and cache/DNS troubleshooting.",
      "Uptime, content, and community operations for a school portal with ~3,000 followers.",
    ],
  },
]

const stack = [
  {
    name: "Next.js / React",
    job: "Server-renders public pages and keeps mutations on the server, so CRUD-heavy products need fewer hand-written endpoints.",
  },
  {
    name: "PostgreSQL / Supabase",
    job: "Holds the relational model, enforces row-level access, runs multi-step functions, and pushes live changes to messaging and attendance screens.",
  },
  {
    name: "TypeScript",
    job: "Keeps shared types aligned from database shape to UI, so schema changes surface at build time instead of in production.",
  },
  {
    name: "Python / TensorFlow",
    job: "Trains and evaluates the ANN offline; search only pays for a small forward pass per node.",
  },
  {
    name: "WordPress / Interactivity API",
    job: "Gives editors structured, editable content while the interactive tour keeps visitor state in the browser.",
  },
  {
    name: "Cloudflare",
    job: "DNS, CDN caching, WAF, and TLS in front of live sites; absorbed release-day traffic for the score portal.",
  },
  {
    name: "Sui Move",
    job: "Settles checkout state on-chain atomically for the hackathon build; off-chain metadata stays queryable.",
  },
]

export function Skills() {
  return (
    <div className="space-y-8">
      <p className="label flex items-center justify-between gap-3 border-b border-border pb-2">
        <span>Capabilities / 04 groups</span>
        <span>Evidence over inventory</span>
      </p>

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {capabilities.map((group, index) => (
          <section key={group.title} className="space-y-3">
            <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
              <h3 className="font-mono text-[11px] font-medium uppercase leading-tight tracking-[0.06em] text-foreground">
                <span className="mr-2 text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {group.title}
              </h3>
              <span className="label shrink-0">
                0{group.evidence.length}
              </span>
            </div>

            <p className="text-[11px] leading-relaxed text-muted-foreground">
              {group.summary}
            </p>

            <ul className="space-y-1.5">
              {group.evidence.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[11px] leading-relaxed text-foreground/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-px shrink-0 text-primary"
                  >
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="space-y-3 border-t border-border pt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-foreground">
            Stack / what each piece does
          </h3>
          <span className="label">07 notes</span>
        </div>

        <dl className="divide-y divide-border/50">
          {stack.map((item) => (
            <div
              key={item.name}
              className="grid gap-1 py-2 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6"
            >
              <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-foreground">
                {item.name}
              </dt>
              <dd className="text-[11px] leading-relaxed text-muted-foreground">
                {item.job}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
