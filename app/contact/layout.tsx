import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Send a Brief",
  description:
    "Tell me about the project — what it's for, what it should feel like, and when it needs to land. Every brief is read by me, with replies inside forty-eight hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact — Ace Visuals",
    description:
      "Send a brief. Every reply within forty-eight hours, from one operator.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Ace Visuals",
    description:
      "Send a brief. Every reply within forty-eight hours, from one operator.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
