"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Certificate = {
  date: string
  title: string
  issuer: string
  description: string
  image?: string
  verifyUrl?: string
}

const certificates: Certificate[] = [
  {
    date: "11/09/2026",
    title: "The Global Citizen Fellowship 2026 Program",
    issuer: "AIT Extension, Asian Institute of Technology (Thailand)",
    description:
      "Awarded upon successful completion of the international professional development program 'The Global Citizen Fellowship 2026' for UMT students. Verification Ref. No. 22400.",
    image: "/ait_certificate.png",
    verifyUrl:
      "https://extension.ait.asia/external/index.php?id=MjI0MDA=",
  },
  {
    date: "14/07/2025",
    title: "ICPC UMT 2025 Competitive Programming Contest Certificate",
    issuer: "University of Management and Technology (UMT)",
    description:
      "Certificate of completion for the International Collegiate Programming Contest (ICPC) collegiate round.",
    image: "/icpc.jpg",
  },
  {
    date: "11/04/2025",
    title: "Access to Database Resources Program from RMIT",
    issuer: "RMIT University Vietnam & UMT",
    description:
      "Training in navigating and researching international academic database systems.",
  },
  {
    date: "11/11/2024",
    title: "STINET Professional Certificate",
    issuer: "Science & Technology Information Network of HCMC (STINET)",
    description:
      "Professional recognition in science and technology information management.",
  },
  {
    date: "2019",
    title: "District Merit Award in Informatics (High School Exam)",
    issuer: "Bureau of Education & Training, Nhon Trach District",
    description:
      "District-level student contest distinction in Computer Science (Pascal & Office).",
  },
]

export function Certificates() {
  return (
    <div className="space-y-5">
      <p className="label flex items-center justify-between gap-3 border-b border-border pb-2">
        <span>Records / 05</span>
        <span>Latest 2026</span>
      </p>

      <div className="divide-y divide-border">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="grid gap-3 py-5 first:pt-0 md:grid-cols-[104px_minmax(0,1fr)] md:gap-6"
          >
            <p className="label pt-0.5">{certificate.date}</p>

            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-mono text-[13px] font-medium leading-snug tracking-[-0.01em] text-foreground">
                    {certificate.title}
                  </h3>
                  <p className="label label-accent mt-1">
                    {certificate.issuer}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  {certificate.verifyUrl ? (
                    <Link
                      href={certificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label text-foreground transition-colors hover:text-primary"
                    >
                      Verify <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}

                  {certificate.image ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="xs">
                          View <span aria-hidden="true">↗</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{certificate.title}</DialogTitle>
                          <DialogDescription>
                            {certificate.issuer} · {certificate.date}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex max-h-[72vh] items-center justify-center overflow-hidden bg-secondary p-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={certificate.image}
                            alt={`Certificate: ${certificate.title}`}
                            className="max-h-[68vh] w-auto max-w-full object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : null}
                </div>
              </div>

              <p className="max-w-3xl text-[11px] leading-relaxed text-muted-foreground">
                {certificate.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
