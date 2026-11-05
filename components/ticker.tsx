import { cn } from "@/lib/utils"

const items = [
  "Available for 2026 internships",
  "Product engineering",
  "Applied AI",
  "Hiring workflows",
  "Event operations",
  "Knowledge platforms",
  "HCMC · GMT+7",
]

export function Ticker({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "ticker flex items-center border-y border-border bg-background py-2.5",
        className
      )}
      aria-hidden="true"
    >
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="ticker-group">
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-7">
                <span>{item}</span>
                <span className="text-primary">*</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
