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
      "Configured and troubleshot DNS records, nameservers, MX records, email routing, Cloudflare WAF, and SSL/TLS certificates.",
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

export function Experience() {
  return (
    <div className="space-y-5">
      <p className="label flex items-center justify-between gap-3 border-b border-border pb-2">
        <span>Ledger / 03 roles</span>
        <span>2022 — Present</span>
      </p>

      <div className="divide-y divide-border">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="grid gap-4 py-7 first:pt-0 md:grid-cols-[156px_minmax(0,1fr)] md:gap-8"
          >
            <div className="space-y-1">
              <p className="font-mono text-[11px] font-medium tracking-[0.02em] text-foreground">
                {experience.period}
              </p>
              <p className="label">{experience.location}</p>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-mono text-[16px] font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-[18px]">
                  {experience.role}
                </h3>
                <p className="label label-accent mt-1.5">
                  {experience.company}
                </p>
              </div>

              <ul className="space-y-1.5">
                {experience.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-px shrink-0 text-primary"
                    >
                      +
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
