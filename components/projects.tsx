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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Github, ArrowUpRight } from "lucide-react"

export function Projects() {
    const projects = [
        // Web Apps
        {
            title: "SUI Shopping Cart Platform",
            description: "A comprehensive e-commerce platform built on the SUI blockchain, featuring a marketplace for physical and digital goods, secure atomic transactions, and a seller dashboard.",
            tech: ["Next.js", "Supabase", "Sui Move", "Tailwind CSS"],
            link: "https://github.com/qminh77/SUI_Shopping_Cart",
            image: "/sui_shopping_cart_platform.png",
            role: "Team Leader & Full Stack Developer",
            period: "Jan 2026",
            category: "Web App"
        },
        {
            title: "EMS - Student & Event Management",
            description: "A full-stack web application for managing students and academic events. Features QR code attendance, module-based architecture, and DevOps integration.",
            tech: ["Web Stack", "DevOps", "QR Code"],
            link: "https://github.com/qminh77/ems",
            image: "/ems_student_management.png",
            role: "Solo Developer",
            period: "May 2025",
            category: "Web App"
        },
        {
            title: "THPT 2025 Score Lookup",
            description: "A web application for looking up high school graduation exam scores. demonstrates API integration and database management.",
            tech: ["JavaScript", "API", "Database"],
            link: "https://github.com/qminh77/tracuudiem",
            image: "/thpt_2025_score_lookup.png",
            role: "Solo Developer",
            period: "July 2025",
            category: "Web App"
        },
        // AI / Data
        {
            title: "Chat Bot UMT",
            description: "An automated customer support chatbot developed as a course project. Built with Python and basic web technologies to handle user queries.",
            tech: ["Python", "HTML/CSS", "JavaScript"],
            link: "https://github.com/qminh77/chatbot-umt",
            image: "/chat_bot_umt.png",
            role: "Developer",
            period: "July 2025",
            category: "AI/Data"
        },
        // Systems
        {
            title: "Content Review System",
            description: "A system for reviewing and managing content, utilizing Google Sheets as a backend and deployed on Vercel. Explores AI Agent integration.",
            tech: ["Google Sheets API", "Vercel", "AI Agent"],
            link: "https://github.com/qminh77/libumt",
            image: "/content_review_system.png", // Placeholder if no image provided yet, but based on CV it exists
            role: "Solo Developer",
            period: "Dec 2025 - Present",
            category: "System"
        },
    ]

    const categories = ["All", "Web App", "AI/Data", "System"]

    return (
        <section id="projects" className="container mx-auto py-24 px-4 space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Featured Projects
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                    A showcase of my technical projects, ranging from blockchain e-commerce to AI chatbots.
                </p>
            </div>

            <Tabs defaultValue="All" className="w-full space-y-8">
                <div className="flex justify-center">
                    <TabsList className="grid w-full max-w-md grid-cols-4">
                        {categories.map((cat) => (
                            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {categories.map((category) => (
                    <TabsContent key={category} value={category} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500 will-change-transform">
                        <div className="grid gap-8 md:grid-cols-2">
                            {projects
                                .filter((project) => category === "All" || project.category === category)
                                .map((project) => (
                                    <Card key={project.title} className="flex flex-col group overflow-hidden border bg-card hover:border-primary/50 transition-all duration-300 h-full">
                                        {project.image && (
                                            <div className="relative w-full aspect-video overflow-hidden border-b">
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
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
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    )
}

