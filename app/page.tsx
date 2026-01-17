import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col lg:flex-row">
      <Sidebar />
      <MobileNav />

      <main className="flex-1 min-w-0 relative">
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12 space-y-24 relative">
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          <Footer />
        </div>
      </main>
    </div>
  );
}
