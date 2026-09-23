import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://emmanueloyekanlu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name}, Ph.D. — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary.replace(/\s+/g, " ").trim(),
  keywords: [
    "Emmanuel Oyekanlu",
    "Principal AI Engineer",
    "Enterprise Architect",
    "Agentic AI",
    "GPU Orchestration",
    "Machine Learning Engineer",
    "Data Engineering",
    "MLOps",
    "Computer Vision",
    "LangGraph",
    "GraphRAG",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name}, Ph.D. — ${profile.title}`,
    description: profile.subtitle,
    siteName: profile.name,
    images: [{ url: profile.photo, width: 1800, height: 2400, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name}, Ph.D. — ${profile.title}`,
    description: profile.subtitle,
    images: [profile.photo],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "4wbo4zsBC7xuxkY-8NxWzG6zsosYZ5y61LByaadCVQg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github, profile.scholar],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Drexel University" },
    { "@type": "CollegeOrUniversity", name: "Blekinge Institute of Technology" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
