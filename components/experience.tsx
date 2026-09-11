export function Experience() {
  const experiences = [
    {
      period: "Sep 2024 — Present",
      location: "Ho Chi Minh City",
      role: "Data & Operations Collaborator",
      company: "UMT Library & Information Center",
      bullets: [
        "Operate circulation workflows, academic resource retrieval, and batch textbook distribution per semester across the student body.",
        "Standardize bibliographic and student records within centralized library information systems.",
        "Collaborate with communications team to design digital media assets and author student guides for academic database research.",
      ],
    },
    {
      period: "2023 — 2025",
      location: "Remote",
      role: "Domain Reseller & Infrastructure Technician",
      company: "Domain Reseller Tenten.vn",
      bullets: [
        "Consulted, registered, renewed, transferred, and configured global (.com, .net) and national (.vn) domains for individual and SME clients.",
        "Configured and troubleshot DNS records, Nameservers, MX records, Email Routing, Cloudflare WAF, and SSL/TLS certificates.",
        "Integrated domain endpoints with cloud hosting/VPS instances, web applications, and Google Workspace environments.",
        "Managed full lifecycles of 600+ sold domain portfolios with high reliability and uptime.",
      ],
    },
    {
      period: "2022 — Present",
      location: "Dong Nai, Vietnam",
      role: "System & Community Webmaster",
      company: "Nhon Trach High School Confessions Portal",
      bullets: [
        "Operate and maintain web infrastructure for nhontrachcfs.edu.vn and community fanpage with ~3,000 active followers.",
        "Moderate user-submitted content to uphold community guidelines, privacy, and cybersecurity standards.",
        "Directly maintain application source code, monitor uptime, and resolve operational issues promptly.",
      ],
    },
  ]

  return (
    <section id="experience" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="border-b border-border/60 pb-3">
        <h2 className="text-sm font-bold tracking-wider text-foreground uppercase font-mono">
          Professional Experience
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Data systems operations, domain infrastructure, and community administration
        </p>
      </div>

      {/* Flat Experience Ledger List */}
      <div className="divide-y divide-border/40">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="py-5 first:pt-0 flex flex-col sm:flex-row gap-2 sm:gap-8 items-start"
          >
            {/* Left: Period & Location */}
            <div className="w-full sm:w-36 shrink-0 pt-0.5">
              <span className="font-mono text-xs font-semibold text-foreground block">
                {exp.period}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground block mt-0.5">
                {exp.location}
              </span>
            </div>

            {/* Right: Role, Company & Bullets */}
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-xs font-mono text-primary font-medium mt-0.5">
                  {exp.company}
                </p>
              </div>

              <ul className="space-y-1 pt-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary font-mono select-none">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
