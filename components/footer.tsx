import Link from "next/link"
import { Github, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer id="contact" className="border-t py-12 md:py-16">
            <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center">
                <h3 className="text-2xl font-bold">Contact Me</h3>
                <p className="text-muted-foreground">
                    Ready to collaborate on new projects.
                </p>
                <div className="flex gap-4">
                    <Link href="https://github.com/qminh77" target="_blank" className="p-2 rounded-none hover:bg-accent transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">Github</span>
                    </Link>
                    <a href="mailto:minhminh3456minh@gmail.com" className="p-2 rounded-none hover:bg-accent transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <p className="text-sm text-muted-foreground mt-8">
                    © {new Date().getFullYear()} Nguyen Quoc Minh. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
