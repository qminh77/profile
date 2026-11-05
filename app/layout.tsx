import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { obelMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://nguyenquocminh.id.vn"),
  title: "Nguyen Quoc Minh | Software Engineer & AI Developer",
  description:
    "Portfolio of Nguyen Quoc Minh — Software Engineering student at UMT, working across full-stack web platforms and applied AI.",
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
    "Portfolio",
    "Obel Mono",
  ],
  authors: [{ name: "Nguyen Quoc Minh", url: "https://nguyenquocminh.id.vn" }],
  openGraph: {
    title: "Nguyen Quoc Minh | Software Engineer & AI Developer",
    description:
      "Portfolio of Nguyen Quoc Minh — Software Engineering student at UMT, working across full-stack web platforms and applied AI.",
    url: "https://nguyenquocminh.id.vn",
    siteName: "Nguyen Quoc Minh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1200,
        alt: "Nguyen Quoc Minh — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9e8e3" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${obelMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-primary focus:bg-background focus:px-3 focus:py-2 focus:text-[10px] focus:uppercase focus:tracking-[0.08em] focus:text-primary"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
