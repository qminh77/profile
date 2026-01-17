import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, MapPin, Download, Send } from "lucide-react"

export function Hero() {
    return (
        <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] gap-8 px-4 text-center md:gap-10 mx-auto py-24 md:py-32 relative overflow-hidden">
            {/* Background embellishments could go here, for now using pure CSS/Tailwind */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

            <div className="space-y-6 animate-in fade-in zoom-in duration-700 slide-in-from-bottom-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm border-primary/20 backdrop-blur-sm bg-background/50">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for Internship
                </Badge>

                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                        Hello, I'm <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]">
                            Nguyễn Quốc Minh
                        </span>
                    </h1>
                    <p className="max-w-[42rem] mx-auto text-muted-foreground text-lg sm:text-xl md:text-2xl leading-relaxed">
                        Software Engineer Intern specializing in building <span className="text-foreground font-medium">modern web applications</span>.
                        <br />Aspiring to master full-stack development.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-8 delay-200">
                <Button asChild size="lg" className="h-12 px-8 text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                    <Link href="#contact">
                        Contact Me <Send className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-12 px-8 text-lg backdrop-blur-sm bg-background/50 hover:bg-accent/50 hover:scale-105 transition-all">
                    <Link href="/Nguyen-Quoc-Minh-CV.pdf" target="_blank" rel="noopener noreferrer">
                        Download CV <Download className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Dong Nai, Vietnam</span>
                </div>
                <Link href="https://github.com/qminh77" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50 hover:bg-secondary/50 hover:text-foreground transition-all">
                    <Github className="h-4 w-4 text-primary" />
                    <span>github.com/qminh77</span>
                </Link>
                <a href="mailto:minhminh3456minh@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50 hover:bg-secondary/50 hover:text-foreground transition-all">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>Email Me</span>
                </a>
            </div>
        </section>
    )
}
