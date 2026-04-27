import type { Metadata } from "next"
import { Geist_Mono, Oxanium } from "next/font/google"

import "./globals.css"
import { MotionInit } from "@/components/motion-init"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const oxaniumHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://acevisuals.io"),
  title: "Ace·Visuals — 3D generalist & visual storyteller",
  description:
    "A portfolio of motion, form, and narrative — built at the intersection of cinema, simulation, and craft.",
  openGraph: {
    type: "website",
    url: "https://acevisuals.io",
    siteName: "Ace Visuals",
    title: "Ace·Visuals — 3D generalist & visual storyteller",
    description:
      "A portfolio of motion, form, and narrative — built at the intersection of cinema, simulation, and craft.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace·Visuals — 3D generalist & visual storyteller",
    description:
      "A portfolio of motion, form, and narrative — built at the intersection of cinema, simulation, and craft.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased font-mono",
        geistMono.variable,
        oxaniumHeading.variable,
      )}
    >
      <body>
        <ThemeProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <MotionInit />
      </body>
    </html>
  )
}
