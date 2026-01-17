import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"

export function Projects() {
    const projects = [
        {
            title: "SUI Shopping Cart Platform",
            role: "Team Leader",
            period: "Jan 2026",
            tech: ["SUI Blockchain", "Move", "Next.js", "Supabase", "AI Models"],
            description: "HACKATHON SUI project. Built an MVP product in 48h using AI tools and SUI blockchain technology. Features include a marketplace for physical & digital goods, atomic transactions via Move smart contracts, and a comprehensive seller/admin dashboard.",
            image: "/sui_shopping_cart_platform.png",
            link: "https://github.com/qminh77/SUI_Shopping_Cart"
        },
        {
            title: "THPT 2025 Score Lookup",
            role: "Personal Project",
            period: "July 2025",
            tech: ["JavaScript", "API Integration", "Database"],
            description: "A website for looking up high school graduation exam scores (THPT 2025). Demonstrates understanding of API operation, data handling, and database integration.",
            image: "/thpt_2025_score_lookup.png",
            link: "https://github.com/qminh77/tracuudiem"
        },
        {
            title: "Chat Bot UMT",
            role: "Course Project",
            period: "July 2025",
            tech: ["Python", "JavaScript", "HTML/CSS"],
            description: "A simple chatbot developed for university support purposes. Features an automated chat interface, showcasing fundamental knowledge of web technologies and Python.",
            image: "/chat_bot_umt.png",
            link: "https://github.com/qminh77/chatbot-umt"
        },
        {
            title: "Content Review System",
            role: "Personal Project",
            period: "Dec 2025 - Present",
            tech: ["Google Sheets Backend", "Vercel", "AI Agent"],
            description: "A content approval system utilizing Google Sheets as a backend. Focuses on Vercel deployment familiarity and integrating AI Agents into the workflow.",
            image: "/content_review_system.png",
            link: "https://github.com/qminh77/libumt"
        },
        {
            title: "EMS - Student & Event Management",
            role: "Personal Project",
            period: "May 2025",
            tech: ["Fullstack", "DevOps", "AI Agent", "QR Code"],
            description: "A comprehensive web system for managing students and academic events. Features QR code attendance, modular architecture (client/server/shared), and basic DevOps deployment.",
            image: "/ems_student_management.png",
            link: "https://github.com/qminh77/ems"
        },
    ]

    return (
        <section id="projects" className="container mx-auto py-24 px-4 space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Featured Projects
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                    A collection of my key projects, ranging from blockchain applications to academic management systems.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col group overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:border-primary/20 h-full">
                        {project.image && (
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                    {project.link && (
                                        <Link href={project.link} target="_blank">
                                            <Button variant="secondary" size="default" className="gap-2 font-semibold">
                                                View Project <ArrowUpRight className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        )}
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start gap-4 mb-2">
                                <Badge variant="outline" className="shrink-0 font-medium">{project.period}</Badge>
                                <div className="flex gap-2">
                                    {project.link && (
                                        <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" title={project.title}>
                                {project.title}
                            </CardTitle>
                            <CardDescription className="text-base font-medium text-primary/80">{project.role}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <p className="text-muted-foreground leading-relaxed line-clamp-3" title={project.description}>
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="px-3 py-1 text-xs font-medium bg-secondary/50 hover:bg-secondary transition-colors border-transparent hover:border-primary/20 border">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
