import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProjects, categories, projectsByCategory } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { experience } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";

export default function Home() {
  const recentRoles = experience.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-tint-blue to-background">
        <div className="section-container grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              {profile.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {profile.name}, {profile.suffix}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.subtitle}</p>
            <p className="prose-body mt-6 max-w-2xl text-base">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-accent-strong"
              >
                View Projects
              </Link>
              <Link
                href="/experience/"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
              >
                Experience
              </Link>
              <a
                href="/Emmanuel-Oyekanlu-Resume.pdf"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
              >
                Download R&eacute;sum&eacute;
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
              <span>{profile.location}</span>
              <span aria-hidden>&middot;</span>
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
              <span aria-hidden>&middot;</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                LinkedIn
              </a>
              <span aria-hidden>&middot;</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                GitHub
              </a>
              <span aria-hidden>&middot;</span>
              <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Google Scholar
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={900}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-navy">
        <div className="section-container py-14">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-on-navy-muted">
            By the numbers
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} invert />
            ))}
          </div>
        </div>
      </section>

      {/* DataNivra spotlight */}
      <section className="border-b border-border bg-gradient-to-br from-navy-deep via-navy to-navy-deep">
        <div className="section-container py-16 sm:py-20">
          <span className="badge-new">New &middot; Live Enterprise Deployment</span>
          <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-on-navy sm:text-3xl">
            DataNivra &mdash; Enterprise Test Data Management, in production
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-on-navy-muted">
            As Chief AI/Data Architect at{" "}
            <a
              href="https://www.datanivra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-on-navy-accent hover:underline"
            >
              DataNivra
            </a>
            , I designed and shipped an enterprise-grade test data management platform for a live enterprise
            client &mdash; built for organizations that handle high-risk, highly regulated data: hospitals and
            health systems, tax firms, auditing firms, and banks. The platform governs QA and test-data
            workflows for PHI, PII, and other HIPAA-scoped data, with discovery, masking, and lifecycle
            controls designed to keep regulated data safe outside of production.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["PHI / PII Discovery & Masking", "HIPAA-aware Controls", "Healthcare · Tax · Audit · Banking", "Enterprise QA & Test Data"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-on-navy-border bg-white/5 px-3 py-1 text-xs text-on-navy-muted"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://www.datanivra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-accent-strong"
            >
              Visit DataNivra.com &rarr;
            </a>
            <Link
              href="/projects/#healthcare-life-sciences-ai"
              className="rounded-full border border-on-navy-border px-5 py-2.5 text-sm font-semibold text-on-navy hover:border-on-navy-accent hover:text-on-navy-accent"
            >
              See a related open-source reference build
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-xs text-on-navy-muted">
            DataNivra was built for a specific enterprise client and its codebase lives in a private
            repository &mdash; it isn&apos;t open source, so there&apos;s no public code link here.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-container py-16">
        <SectionHeading
          eyebrow="Core Strengths"
          title="What I bring to the table"
          description="Full-stack ownership from enterprise architecture down to GPU kernels — with governance and compliance built in, not bolted on."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.highlights.map((h) => (
            <div key={h.label} className="card p-6">
              <h3 className="text-base font-semibold text-foreground">{h.label}</h3>
              <p className="prose-body mt-2 text-sm">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-y border-border bg-tint-blue">
        <div className="section-container py-16">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects"
            description="A curated slice of 198+ public repositories spanning agentic AI, computer vision, data engineering, and enterprise architecture."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects/"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
            >
              View all {categories.length} project categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="section-container py-16">
        <SectionHeading eyebrow="Portfolio Map" title="Browse by category" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/projects/#${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="card flex flex-col justify-between p-5 hover:border-accent"
            >
              <span className="text-sm font-semibold text-foreground">{cat}</span>
              <span className="mt-3 text-xs text-muted">
                {projectsByCategory(cat).length} project{projectsByCategory(cat).length === 1 ? "" : "s"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent experience preview */}
      <section className="border-y border-border bg-tint-teal">
        <div className="section-container py-16">
          <SectionHeading
            eyebrow="Career Snapshot"
            title="Recent roles"
            description="18+ years spanning telecom network engineering, applied research, and principal-level AI/data architecture."
          />
          <div className="space-y-6">
            {recentRoles.map((role) => (
              <div key={`${role.company}-${role.period}`} className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">{role.role}</h3>
                  <span className="text-xs text-muted">{role.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">{role.company}</p>
                <ul className="prose-body mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  {role.bullets.slice(0, 3).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/experience/"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
            >
              View full career history &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-container py-16">
        <SectionHeading eyebrow="Technical Depth" title="Skills & tooling" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="section-container py-20">
          <div className="card-on-navy flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-on-navy">Let&apos;s build something reliable.</h3>
              <p className="mt-1 text-sm text-on-navy-muted">
                Available for principal-level AI, data architecture, and enterprise-AI engagements.
              </p>
            </div>
            <Link
              href="/contact/"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black hover:bg-accent-strong"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
