import { About } from "@/components/about"
import { Certificates } from "@/components/certificates"
import { Chapter } from "@/components/chapter"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/nav"
import { OpenSource } from "@/components/open-source"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Terminal } from "@/components/terminal"
import { Ticker } from "@/components/ticker"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
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
                    I turn complex requirements into{" "}
                    <span className="text-primary">shipping systems</span> —
                    clear architecture, honest data, and interfaces that stay
                    legible under pressure.
                  </p>

                  <div className="max-w-2xl space-y-4 text-[12px] leading-relaxed text-muted-foreground">
                    <p>
                      Junior Computer Science student at UMT focused on
                      architecting modern full-stack web platforms with{" "}
                      <span className="text-foreground">
                        Next.js 16, TypeScript, Supabase / PostgreSQL
                      </span>{" "}
                      (40+ tables, RLS) and solving applied AI algorithmic
                      challenges with{" "}
                      <span className="text-foreground">
                        Python / TensorFlow
                      </span>{" "}
                      (ANN, A* heuristic search).
                    </p>
                    <p>
                      Proven track record managing 600+ domain lifecycles and
                      configuring DNS, Cloudflare, and SSL/TLS infrastructure.
                      Comfortable owning a system from schema design to
                      deployment and the operational details in between.
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
                      <p className="label label-accent">Stack / layers</p>
                      <span className="label">05 layers</span>
                    </div>
                    <ol className="mt-2 divide-y divide-border">
                      {[
                        {
                          name: "Interface",
                          tools: "Next.js 16 / React 19 / Tailwind",
                        },
                        {
                          name: "Logic",
                          tools: "TypeScript / Server Actions / RPC",
                        },
                        {
                          name: "Data",
                          tools: "PostgreSQL / Supabase / RLS",
                        },
                        {
                          name: "Intelligence",
                          tools: "Python / TensorFlow / ANN / A*",
                        },
                        {
                          name: "Delivery",
                          tools: "Vercel / Cloudflare / Git",
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
            deck="Languages, frameworks, and infrastructure."
            specs={[
              { label: "Groups", value: "04" },
              { label: "Tools", value: "31" },
              { label: "Core", value: "Next.js / Supabase" },
              { label: "Methods", value: "ANN / A*" },
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
