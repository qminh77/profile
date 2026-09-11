"use client"

import * as React from "react"
import Link from "next/link"
import { Download, ArrowUpRight } from "lucide-react"

export function Footer() {
  const [copied, setCopied] = React.useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("minhminh3456minh@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="pt-8 pb-16 border-t border-border/60 space-y-6 scroll-mt-20">
      {/* Contact Note */}
      <div className="space-y-2">
        <h2 className="text-sm font-bold tracking-wider text-foreground uppercase font-mono">
          Get in Touch &amp; Collaborate
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
          I am actively seeking <strong className="text-foreground font-semibold">Software Engineer Intern / AI Developer</strong> roles for 2026. If you have an open position, exciting challenge, or would like to collaborate, feel free to contact me directly.
        </p>
      </div>

      {/* Flat Links Grid (Zero Box) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs pt-1">
        <div className="flex items-center justify-between py-2 border-b border-border/40">
          <span className="text-muted-foreground">Email:</span>
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">minhminh3456minh@gmail.com</span>
            <button
              type="button"
              onClick={copyEmail}
              className="text-[11px] text-primary hover:underline cursor-pointer"
            >
              {copied ? (
                <span className="text-emerald-600 font-semibold">Copied</span>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-border/40">
          <span className="text-muted-foreground">Phone / Zalo:</span>
          <a
            href="tel:0964560507"
            className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-0.5 font-medium"
          >
            <span>+84 964 560 507</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-border/40">
          <span className="text-muted-foreground">GitHub Profile:</span>
          <Link
            href="https://github.com/qminh77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-0.5 font-medium"
          >
            <span>github.com/qminh77</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex items-center justify-between py-2 border-b border-border/40">
          <span className="text-muted-foreground">Resume (PDF):</span>
          <Link
            href="/Nguyen-Quoc-Minh-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1 font-semibold"
          >
            <Download className="w-3 h-3" />
            <span>Download 2026 CV</span>
          </Link>
        </div>
      </div>

      {/* Colophon */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-muted-foreground">
        <div>
          <span>© {new Date().getFullYear()} Nguyen Quoc Minh. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Next.js 16</span>
          <span>•</span>
          <span>React 19</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
