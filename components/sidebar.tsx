"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, MapPin, Download } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function Sidebar() {
    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certificates", href: "#certificates" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <aside className="h-screen sticky top-0 flex flex-col gap-6 p-6 border-r bg-muted/10 w-full max-w-xs hidden lg:flex">
            <div className="flex flex-col items-center gap-4 text-center">
                <Avatar className="h-32 w-32 border border-border aspect-square overflow-hidden">
                    <AvatarImage src="/profile.jpg" alt="Nguyen Quoc Minh" className="h-full w-full object-cover" />
                    <AvatarFallback className="text-4xl">NM</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold">Nguyễn Quốc Minh</h1>
                    <p className="text-muted-foreground font-medium">Software Engineer Intern</p>
                </div>
            </div>

            <Separator />

            <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="flex flex-col gap-4">
                <div className="text-sm text-center text-muted-foreground space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Dong Nai, Vietnam</span>
                    </div>
                </div>

                <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com/qminh77" target="_blank">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">Github</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:minhminh3456minh@gmail.com">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </a>
                    </Button>
                    <div className="flex items-center">
                        <ModeToggle />
                    </div>
                </div>

                <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href="/Nguyen-Quoc-Minh-CV.pdf" target="_blank">
                        <Download className="h-4 w-4" />
                        Download CV
                    </Link>
                </Button>
            </div>
        </aside>
    )
}
