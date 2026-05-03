import type { Metadata, Viewport } from "next"
import { Geist_Mono, Oxanium } from "next/font/google"

import "./globals.css"
import { MotionInit } from "@/components/motion-init"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
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

const SITE_TITLE = "Ace Visuals — 3D generalist & visual storyteller"
const SITE_DESCRIPTION =
  "Photoreal product films, brand visuals, and cinematic CG — modeled, lit, animated, and finished by one operator. Booking Q2 2026."

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://acevisuals.io"),
  title: {
    default: SITE_TITLE,
    template: "%s | Ace Visuals",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Ace Visuals",
  authors: [{ name: "Andrew", url: "https://acevisuals.io/about" }],
  creator: "Andrew",
  publisher: "Ace Visuals",
  keywords: [
    "3D generalist",
    "3D motion designer",
    "product animation",
    "cinematic CG",
    "Blender",
    "Houdini",
    "Octane",
    "After Effects",
    "brand films",
    "product films",
    "CG VFX",
    "look-dev",
  ],
  category: "design",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://acevisuals.io",
    siteName: "Ace Visuals",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@acevisuals",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ace Visuals",
  alternateName: "Ace·Visuals",
  url: "https://acevisuals.io",
  logo: "https://acevisuals.io/favicon_io/android-chrome-512x512.png",
  description: SITE_DESCRIPTION,
  founder: { "@type": "Person", name: "Andrew" },
  sameAs: [],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ace Visuals",
  url: "https://acevisuals.io",
  inLanguage: "en-US",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark antialiased font-mono",
        geistMono.variable,
        oxaniumHeading.variable,
      )}
    >
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <MotionInit />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
