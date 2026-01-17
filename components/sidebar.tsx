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
        <aside className="h-screen sticky top-0 flex flex-col border-r bg-card/50 backdrop-blur-sm w-full max-w-xs hidden lg:flex border-border/40">
            {/* Header / Brand */}
            <div className="p-6 border-b border-border/40">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    PORTFOLIO<span className="text-primary">.</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 text-sm font-medium hover:bg-primary/5 hover:text-primary transition-all border-l-2 border-transparent hover:border-primary flex items-center justify-between group"
                    >
                        {item.name}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                    </Link>
                ))}
            </nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Bottom Profile Section */}
            <div className="p-4 border-t border-border/40 bg-muted/5">
                <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10 border border-border rounded-none shrink-0">
                        <AvatarImage src="/profile.jpg" alt="Nguyen Quoc Minh" className="object-cover" />
                        <AvatarFallback className="rounded-none">QM</AvatarFallback>
                    </Avatar>
                    <div className="overflow-hidden">
                        <h3 className="font-bold text-sm truncate">Nguyễn Quốc Minh</h3>
                        <p className="text-xs text-muted-foreground truncate">Software Engineer Intern</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-4">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-none border-border/50" asChild>
                        <Link href="https://github.com/qminh77" target="_blank">
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-none border-border/50" asChild>
                        <a href="mailto:minhminh3456minh@gmail.com">
                            <Mail className="h-4 w-4" />
                        </a>
                    </Button>
                    <div className="h-8 w-8 flex items-center justify-center">
                        <ModeToggle />
                    </div>
                </div>

                <Button variant="default" className="w-full text-xs h-9 rounded-none font-semibold shadow-none" asChild>
                    <Link href="/Nguyen-Quoc-Minh-CV.pdf" target="_blank">
                        <Download className="mr-2 h-3 w-3" />
                        Download CV
                    </Link>
                </Button>
            </div>
        </aside>
    )
}
