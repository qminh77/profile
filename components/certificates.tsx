"use client"

import * as React from "react"
import Link from "next/link"
import { Eye, ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Certificates() {
  const certs = [
    {
      date: "11/09/2026",
      title: "The Global Citizen Fellowship 2026 Program",
      issuer: "AIT Extension, Asian Institute of Technology (Thailand)",
      description: "Awarded upon successful completion of the international professional development program 'The Global Citizen Fellowship 2026' for UMT students. Verification Ref. No. 22400.",
      image: "/ait_certificate.png",
      verifyUrl: "https://extension.ait.asia/external/index.php?id=MjI0MDA=",
    },
    {
      date: "14/07/2025",
      title: "ICPC UMT 2025 Competitive Programming Contest Certificate",
      issuer: "University of Management and Technology (UMT)",
      description: "Certificate of completion for the International Collegiate Programming Contest (ICPC) collegiate round.",
      image: "/icpc.jpg",
    },
    {
      date: "11/04/2025",
      title: "Access to Database Resources Program from RMIT",
      issuer: "RMIT University Vietnam & UMT",
      description: "Training in navigating and researching international academic database systems.",
    },
    {
      date: "11/11/2024",
      title: "STINET Professional Certificate",
      issuer: "Science & Technology Information Network of HCMC (STINET)",
      description: "Professional recognition in science and technology information management.",
    },
    {
      date: "2019",
      title: "District Merit Award in Informatics (High School Exam)",
      issuer: "Bureau of Education & Training, Nhon Trach District",
      description: "District-level student contest distinction in Computer Science (Pascal & Office).",
    },
  ]

  return (
    <section id="certificates" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="border-b border-border/60 pb-3">
        <h2 className="text-sm font-bold tracking-wider text-foreground uppercase font-mono">
          Honors &amp; Certifications
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Academic distinctions, international fellowships, and competitive programming
        </p>
      </div>

      {/* Flat Certs List */}
      <div className="divide-y divide-border/40">
        {certs.map((cert, idx) => (
          <div key={idx} className="py-3.5 first:pt-0 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                {cert.title}
              </h3>
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground pt-0.5">
                {cert.date}
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-foreground/90 font-medium">{cert.issuer}</span>
              {" — "}
              <span>{cert.description}</span>
            </p>

            {(cert.verifyUrl || cert.image) && (
              <div className="flex items-center gap-3 pt-0.5 font-mono text-[11px]">
                {cert.verifyUrl && (
                  <Link
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                    title="Verify credentials at AIT Extension Portal"
                  >
                    <span>Verify AIT</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
                {cert.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
                        <span>View Certificate</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] p-4 bg-card border border-border flex flex-col">
                      <DialogTitle className="text-xs font-mono font-semibold text-foreground">
                        {cert.title}
                      </DialogTitle>
                      <div className="flex-1 min-h-0 flex items-center justify-center p-2 bg-muted/40 rounded-md border border-border/50 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="max-h-[75vh] w-auto max-w-full object-contain rounded"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
