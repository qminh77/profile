import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
    const experiences = [
        {
            role: "Collaborator",
            company: "UMT Library Information Center",
            period: "Sep 2024 - Present",
            description: [
                "Manage and operate library service processes, including supporting students with borrowing/returning materials.",
                "Distribute textbooks ensuring accuracy and schedule for students.",
                "Support data management of materials and students on the library system.",
                "Coordinate with the media team to create and approve content for the fanpage.",
                "Design posters and edit content to disseminate academic information."
            ]
        },
        {
            role: "Agent",
            company: "Domain Reseller Tenten.vn",
            period: "2023 - 2025",
            description: [
                "Consult and manage international and domestic domain services for clients.",
                "Handle technical issues related to DNS, Nameservers, MX Records, Email Routing, SSL.",
                "Support clients in connecting domains with hosting, websites, and enterprise email systems.",
                "Manage the lifecycle of over 600 sold domains.",
            ]
        },
        {
            role: "Admin",
            company: "Website & Fanpage Confessions THPT Nhon Trach",
            period: "2022",
            description: [
                "Managed fanpage with nearly 3,000 followers, ensuring stable content.",
                "Operated and administered the website https://nhontrachcfs.edu.vn.",
                "Moderated user-submitted content ensuring safety and compliance.",
            ]
        }
    ]

    return (
        <section id="experience" className="container mx-auto py-24 px-4 space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Professional Experience
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                    My professional journey and career milestones.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2 hidden md:block" />
                <div className="absolute left-6 h-full w-px bg-border transform -translate-x-1/2 md:hidden" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary transform -translate-x-1/2 mt-6 z-10" />

                            {/* Content Spacer for layout balance */}
                            <div className="flex-1 hidden md:block" />

                            {/* Card Content */}
                            <div className="flex-1 pl-12 md:pl-0">
                                <Card className="border bg-card transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <span className="flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {exp.period}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                                        <CardDescription className="text-lg font-medium text-foreground/80">
                                            {exp.company}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-none space-y-2 text-muted-foreground text-sm">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
