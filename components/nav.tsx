"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xs font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span>minh.dev</span>
          <span className="text-muted-foreground/50">/</span>
          <span className="text-muted-foreground font-normal hidden sm:inline">swe & ai</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-1.5">
          <Link
            href="#projects"
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
          >
            Projects
          </Link>
          <Link
            href="#github"
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
          >
            GitHub
          </Link>
          <Link
            href="#experience"
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
          >
            Experience
          </Link>
          <Link
            href="#certificates"
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
          >
            Certifications
          </Link>
          <Link
            href="#skills"
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 hidden md:inline-block"
          >
            Skills
          </Link>
          <Link
            href="#about"
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 hidden md:inline-block"
          >
            About
          </Link>

          <div className="h-3.5 w-px bg-border/60 mx-1 hidden sm:block" />

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="h-8 px-2.5 text-xs font-medium text-foreground gap-1.5 hover:bg-muted/50"
          >
            <Link href="/Nguyen-Quoc-Minh-CV.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Resume</span>
            </Link>
          </Button>

          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
