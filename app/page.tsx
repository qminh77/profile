import { About } from "@/components/about"
import { Certificates } from "@/components/certificates"
import { Chapter } from "@/components/chapter"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/nav"
import { OpenSource } from "@/components/open-source"
import { Projects } from "@/components/projects"
import { ScrollEffects } from "@/components/scroll-effects"
import { Skills } from "@/components/skills"
import { Terminal } from "@/components/terminal"
import { Ticker } from "@/components/ticker"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <ScrollEffects />
      <Navbar />

      <main id="main">
        <Hero />
        <Ticker />

        <div className="shell">
          <Chapter
            id="profile"
            index="01"
            title="Profile"
            deck="The operating context behind the work."
            specs={[
              { label: "Base", value: "HCMC, VN" },
              { label: "Degree", value: "B.S. IT" },
              { label: "Year", value: "Junior" },
              { label: "Status", value: "Open to 2026" },
            ]}
          >
            <div className="space-y-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                <div className="space-y-6">
                  <p className="max-w-2xl text-[clamp(20px,2.2vw,30px)] font-light leading-[1.32] tracking-[-0.025em] text-foreground">
                    I turn messy requirements into{" "}
                    <span className="text-primary">working systems</span> —
                    honest data models, clear permissions, and interfaces that
                    stay legible under pressure.
                  </p>

                  <div className="max-w-2xl space-y-4 text-[12px] leading-relaxed text-muted-foreground">
                    <p>
                      Junior IT student at UMT. I build full-stack products —
                      hiring workflows, event operations, publishing platforms —
                      and applied AI systems. Most of the work sits where
                      product decisions meet data: who can see what, which state
                      transitions are allowed, and how a screen stays fast as
                      the dataset grows.
                    </p>
                    <p>
                      Before product work, I spent two years in domain and
                      hosting operations: 600+ registrations, transfers, DNS and
                      MX cutovers, Cloudflare, and TLS. That taught me to treat
                      deployment, permissions, and failure states as part of the
                      feature, not cleanup after it.
                    </p>
                  </div>

                  <div className="max-w-2xl border-l-2 border-primary pl-4">
                    <p className="label label-accent">Operating principle</p>
                    <p className="mt-1.5 text-[15px] font-light leading-snug text-foreground">
                      Understand the system, own the edges, ship the whole.
                    </p>
                  </div>

                  <div className="max-w-2xl border-t border-border pt-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="label label-accent">Scope / layers</p>
                      <span className="label">05 layers</span>
                    </div>
                    <ol className="mt-2 divide-y divide-border">
                      {[
                        {
                          name: "Interface",
                          tools:
                            "Server-rendered surfaces, forms, dashboards, and state-heavy flows.",
                        },
                        {
                          name: "Logic",
                          tools:
                            "Typed domain rules, permission checks, and multi-step writes.",
                        },
                        {
                          name: "Data",
                          tools:
                            "Relational models, row-level access, search indexes, realtime updates.",
                        },
                        {
                          name: "Intelligence",
                          tools:
                            "Model training and evaluation, then inference inside the product flow.",
                        },
                        {
                          name: "Delivery",
                          tools:
                            "DNS, TLS, caching, deploys, and the work of keeping sites up.",
                        },
                      ].map((layer, index) => (
                        <li
                          key={layer.name}
                          className="group flex items-baseline gap-3 py-1.5 transition-[padding] duration-300 hover:pl-1.5"
                        >
                          <span className="label shrink-0 text-primary">
                            0{index + 1}
                          </span>
                          <span className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-foreground">
                            {layer.name}
                          </span>
                          <span className="ml-auto text-right text-[10px] leading-snug text-muted-foreground transition-colors group-hover:text-foreground">
                            {layer.tools}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="space-y-6">
                  <About />
                  <Terminal />
                </div>
              </div>

              <OpenSource />
            </div>
          </Chapter>

          <Chapter
            id="work"
            index="02"
            title="Work"
            deck="Platforms, experiments, and systems in production."
            specs={[
              { label: "Entries", value: "09" },
              { label: "Fields", value: "Web / AI / Systems" },
              { label: "Selected", value: "2025—2026" },
              { label: "Links", value: "Live / Code" },
            ]}
          >
            <Projects />
          </Chapter>

          <Chapter
            id="experience"
            index="03"
            title="Experience"
            deck="A ledger of operational work and ownership."
            specs={[
              { label: "Roles", value: "03" },
              { label: "Since", value: "2022" },
              { label: "Domains", value: "600+" },
              { label: "Focus", value: "Ops / Infra" },
            ]}
          >
            <Experience />
          </Chapter>

          <Chapter
            id="toolkit"
            index="04"
            title="Toolkit"
            deck="Capabilities across product, data, AI, and infrastructure."
            specs={[
              { label: "Groups", value: "04" },
              { label: "Stack notes", value: "07" },
              { label: "Core", value: "Product / Data / AI" },
              { label: "Ops", value: "600+ domains" },
            ]}
          >
            <Skills />
          </Chapter>

          <Chapter
            id="credentials"
            index="05"
            title="Credentials"
            deck="Records, fellowships, and competition."
            specs={[
              { label: "Records", value: "05" },
              { label: "Latest", value: "2026" },
              { label: "Fellowship", value: "AIT" },
              { label: "Contest", value: "ICPC" },
            ]}
          >
            <Certificates />
          </Chapter>

          <Chapter
            id="contact"
            index="06"
            title="Contact"
            deck="Open channels for 2026 opportunities."
            specs={[
              { label: "Response", value: "< 24h" },
              { label: "Timezone", value: "GMT+7" },
              { label: "Email", value: "nquoc.minh.work" },
              { label: "Resume", value: "PDF" },
            ]}
          >
            <Footer />
          </Chapter>
        </div>

        <div className="h-10" />
      </main>
    </div>
  )
}
