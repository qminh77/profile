import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Target } from "lucide-react"

export function About() {
    return (
        <section id="about" className="container mx-auto py-24 px-4 space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    About Me
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                    My career objectives and educational background.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card className="border bg-card transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            Objective
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            I am eager to join real-world business projects to learn and develop skills in
                            website and application construction, from requirements analysis, interface design,
                            functional development to testing and deployment.
                        </p>
                        <p>
                            My goal is to step-by-step master the digital product development process,
                            accumulate practical experience, and become a software engineer capable of
                            developing web systems and applications serving practical needs.
                            I wish to stick with the enterprise for a long time during my studies and after graduation.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border bg-card transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-foreground">Ho Chi Minh City University of Management and Technology (UMT)</h3>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-primary font-medium">Information Technology</span>
                                <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">2024 - 2028</span>
                            </div>

                            <div className="space-y-2 bg-secondary/30 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">GPA (2025)</span>
                                    <span className="font-bold text-foreground">3.74</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Rank</span>
                                    <span className="font-bold text-primary">Excellent</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
