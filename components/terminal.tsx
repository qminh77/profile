"use client"

import * as React from "react"

type LineKind = "command" | "output" | "code"

type TerminalLine = {
  kind: LineKind
  text: string
}

const LINES: TerminalLine[] = [
  { kind: "command", text: "whoami" },
  { kind: "output", text: "nguyen-quoc-minh // software engineer" },
  { kind: "command", text: "cat profile.ts" },
  { kind: "code", text: "const profile = {" },
  {
    kind: "code",
    text: '  stack: ["Next.js", "Supabase", "TensorFlow"],',
  },
  { kind: "code", text: '  focus: ["full-stack", "applied-ai"],' },
  { kind: "code", text: '  status: "open_to_2026",' },
  { kind: "code", text: "}" },
  { kind: "output", text: "// build passed · 0 errors · 0 warnings" },
]

const TOTAL = LINES.reduce((length, line) => length + line.text.length, 0)

const OFFSETS = LINES.map((_, index) =>
  LINES.slice(0, index).reduce((length, line) => length + line.text.length, 0)
)

const lineClass: Record<LineKind, string> = {
  command: "text-foreground",
  output: "text-muted-foreground",
  code: "text-foreground/85",
}

export function Terminal() {
  const ref = React.useRef<HTMLDivElement>(null)
  const timer = React.useRef<number | null>(null)
  const [typed, setTyped] = React.useState(0)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(TOTAL)
      return
    }

    const startTyping = () => {
      if (timer.current) return
      timer.current = window.setInterval(() => {
        setTyped((current) => {
          if (current >= TOTAL) {
            if (timer.current) window.clearInterval(timer.current)
            timer.current = null
            return TOTAL
          }
          return current + 1
        })
      }, 14)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping()
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [])

  const complete = typed >= TOTAL

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="terminal relative overflow-hidden border border-border bg-card"
    >
      <div className="terminal-bar flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-1.5 bg-primary" />
        <span className="size-1.5 bg-muted-foreground/40" />
        <span className="size-1.5 bg-muted-foreground/40" />
        <span className="label ml-2 truncate">~/profile — zsh</span>
        <span className="label ml-auto flex shrink-0 items-center gap-1.5 text-primary">
          <span className="status-dot inline-block size-1 bg-primary" />
          live
        </span>
      </div>

      <div className="terminal-body relative px-4 py-4 font-mono text-[10.5px] leading-[1.8] sm:text-[11px]">
        {LINES.map((line, index) => {
          const start = OFFSETS[index]

          if (typed < start) return null

          const visible = Math.min(line.text.length, typed - start)
          const isActive =
            typed >= start && typed < start + line.text.length

          return (
            <div
              key={`${line.kind}-${index}`}
              className={`whitespace-pre-wrap break-words ${lineClass[line.kind]}`}
            >
              {line.kind === "command" ? (
                <span className="text-primary">$ </span>
              ) : null}
              {line.text.slice(0, visible)}
              {isActive ? (
                <span className="terminal-cursor ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.12em] bg-primary" />
              ) : null}
            </div>
          )
        })}

        {complete ? (
          <div className="text-foreground">
            <span className="text-primary">$ </span>
            <span className="terminal-cursor ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.12em] bg-primary" />
          </div>
        ) : null}
      </div>

      <span aria-hidden="true" className="terminal-scan pointer-events-none" />
    </div>
  )
}
