import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";
import { education, certifications, awards, voluntary } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Experience",
  description: "18+ years of experience spanning AI engineering, enterprise architecture, data engineering, and telecom systems.",
};

export default function ExperiencePage() {
  return (
    <div className="section-container py-16">
      <SectionHeading
        eyebrow="Career History"
        title="Experience"
        description="From network engineering in Africa & Europe to principal-level AI and enterprise architecture across manufacturing, financial services, and healthcare in the US."
      />

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`} className="relative">
            <span className="absolute -left-[2.30rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{role.role}</h3>
                <span className="text-xs font-medium text-muted">{role.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {role.company}
                {role.location ? ` — ${role.location}` : ""}
              </p>
              <ul className="prose-body mt-3 list-disc space-y-1.5 pl-5 text-sm">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-base font-semibold text-foreground">Education</h3>
          <ul className="prose-body mt-3 space-y-2 text-sm">
            {education.map((e) => (
              <li key={e.degree}>
                <span className="font-medium text-foreground">{e.degree}</span>
                <br />
                {e.school}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-base font-semibold text-foreground">Certifications</h3>
          <div className="mt-3 space-y-3 text-sm">
            {certifications.map((group) => (
              <div key={group.group}>
                <p className="font-medium text-foreground">{group.group}</p>
                <ul className="prose-body list-disc space-y-1 pl-5">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-base font-semibold text-foreground">Awards</h3>
          <ul className="prose-body mt-3 list-disc space-y-1.5 pl-5 text-sm">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-base font-semibold text-foreground">Voluntary Activities</h3>
          <ul className="prose-body mt-3 list-disc space-y-1.5 pl-5 text-sm">
            {voluntary.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
