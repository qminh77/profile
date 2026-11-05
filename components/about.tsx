import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function About() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-start justify-between gap-4">
            <p className="label label-accent">Education</p>
            <span className="label shrink-0">2024—2028</span>
          </div>
          <h3
            id="education-title"
            className="mt-2 font-mono text-[17px] font-medium leading-tight tracking-[-0.02em] text-foreground"
          >
            University of Management and Technology
          </h3>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            B.S. in Information Technology · Junior Year
          </p>
        </CardHeader>
        <CardContent className="pt-3">
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Coursework in software engineering, databases, and algorithms, with
            competitive programming (ICPC) and applied AI research alongside.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <p className="label">Career objective</p>
        <p className="text-[12px] leading-relaxed text-muted-foreground">
          Seeking a Software Engineer Intern / AI Developer role where I can own
          a product surface end to end: clarify the requirement, design the data
          and permissions, build the interface, and stay around for deployment.
          I work best with teams that care about how the system behaves after
          launch.
        </p>
      </div>

      <dl className="grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2">
        <div>
          <dt className="label">Languages</dt>
          <dd className="mt-1 text-[11px] leading-relaxed text-foreground/90">
            English · Vietnamese
          </dd>
        </div>
        <div>
          <dt className="label">Work ethic</dt>
          <dd className="mt-1 text-[11px] leading-relaxed text-foreground/90">
            Ownership · Autonomy · Fast learning
          </dd>
        </div>
      </dl>
    </div>
  )
}
