import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nguyenquocminh.id.vn"),
  title: "Nguyen Quoc Minh | Software Engineer Intern & AI Developer",
  description:
    "Portfolio of Nguyen Quoc Minh - Junior CS student at UMT, specialized in Software Engineering, Full-stack Web, and Applied AI.",
  keywords: [
    "Nguyen Quoc Minh",
    "Software Engineer",
    "Full-stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "Supabase",
    "PostgreSQL",
    "UMT",
    "Portfolio"
  ],
  authors: [{ name: "Nguyen Quoc Minh", url: "https://nguyenquocminh.id.vn" }],
  openGraph: {
    title: "Nguyen Quoc Minh | Software Engineer Intern & AI Developer",
    description:
      "Portfolio of Nguyen Quoc Minh - Junior CS student at UMT, specialized in Software Engineering, Full-stack Web, and Applied AI.",
    url: "https://nguyenquocminh.id.vn",
    siteName: "Nguyen Quoc Minh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1200,
        alt: "Nguyen Quoc Minh - Software Engineer Intern",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased font-sans selection:bg-primary/15 selection:text-primary min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
