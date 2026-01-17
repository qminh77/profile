import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Terminal, Users, Globe2 } from "lucide-react"

export function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="w-5 h-5 mb-1 text-primary" />,
            skills: ["Python", "C++", "HTML/CSS", "JavaScript/TypeScript"],
        },
        {
            title: "Tools & Platforms",
            icon: <Terminal className="w-5 h-5 mb-1 text-primary" />,
            skills: ["Github", "Cloudflare", "Hosting/VPS", "DNS Management"],
        },
        {
            title: "Soft Skills",
            icon: <Users className="w-5 h-5 mb-1 text-primary" />,
            skills: ["Independent Work", "Teamwork", "Self-learning", "System Operation"],
        },
        {
            title: "Languages",
            icon: <Globe2 className="w-5 h-5 mb-1 text-primary" />,
            skills: ["English (Basic Technical Reading)"],
        }
    ]

    return (
        <section id="skills" className="container mx-auto py-24 px-4 space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Skills & Expertise
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                    A showcase of my technical proficiency and professional capabilities.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {skillCategories.map((category, index) => (
                    <Card key={index} className="group transition-all duration-300 border bg-card hover:bg-accent/5">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 rounded-none bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {category.icon}
                                </div>
                                {category.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="px-3 py-1 text-sm bg-secondary hover:bg-secondary/80 transition-colors"
                                    >
                                        {skill}
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
