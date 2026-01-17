import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Trophy } from "lucide-react"

export function Certificates() {
    const certificates = [
        {
            title: "ICPC UMT 2025 Certificate",
            issuer: "UMT University",
            date: "July 2025",
            description: "Certificate of participation in the International Collegiate Programming Contest at UMT."
        },
        {
            title: "RMIT Database Program",
            issuer: "RMIT University",
            date: "April 2025",
            description: "Completed the Database Resource Access Program accessing academic resources."
        },
        {
            title: "STINET Certificate",
            issuer: "STINET",
            date: "November 2024",
            description: "Professional certification from STINET."
        },
        {
            title: "Excellent Student in Informatics",
            issuer: "District Dept. of Education",
            date: "2019",
            description: "Consolation Prize in District-level Informatics Competition (Word, Excel, Pascal, PowerPoint)."
        }
    ]

    return (
        <section id="certificates" className="container mx-auto py-24 px-4 space-y-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Certificates & Awards
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                    Recognitions and certifications throughout my academic and professional journey.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {certificates.map((cert, index) => (
                    <Card key={index} className="border bg-card hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <div className="p-2 rounded-none bg-primary/10 text-primary">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <CardTitle className="text-xl">{cert.title}</CardTitle>
                                <p className="text-sm text-muted-foreground font-medium">{cert.issuer} • {cert.date}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                {cert.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
