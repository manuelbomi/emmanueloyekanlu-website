import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Emmanuel Oyekanlu for principal-level AI, data architecture, and enterprise-AI engagements.",
};

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { label: "LinkedIn", value: "emmanuel-oyekanlu", href: profile.linkedin },
  { label: "GitHub", value: "manuelbomi", href: profile.github },
  { label: "Google Scholar", value: "Publications & citations", href: profile.scholar },
];

export default function ContactPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact"
        description="Available for principal-level AI, data architecture, GPU/HPC orchestration, and enterprise-AI consulting engagements."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card flex flex-col p-6 hover:border-accent"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">{c.label}</span>
            <span className="mt-1 text-base font-medium text-foreground">{c.value}</span>
          </a>
        ))}
      </div>

      <div className="card mt-8 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">Location</span>
        <p className="mt-1 text-base font-medium text-foreground">{profile.location}</p>
      </div>
    </div>
  );
}
