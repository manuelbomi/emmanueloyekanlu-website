import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { patent, book, publications } from "@/data/publications";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Publications & Patent",
  description: "US Patent, edited book, and 30+ peer-reviewed publications spanning IIoT, edge machine learning, and smart grid communication.",
};

export default function PublicationsPage() {
  return (
    <div className="section-container py-16">
      <SectionHeading
        eyebrow="Research"
        title="Patent & Publications"
        description="33+ publications and one US Patent spanning industrial IoT, embedded machine learning, and smart-grid signal processing."
      />

      <div className="mb-6">
        <a
          href={profile.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
        >
          View full profile on Google Scholar &rarr;
        </a>
      </div>

      <div className="card mb-6 p-6">
        <span className="tag mb-3 inline-block">US Patent</span>
        <p className="prose-body text-sm">{patent.citation}</p>
        {patent.link && (
          <a href={patent.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-strong">
            View patent &rarr;
          </a>
        )}
      </div>

      <div className="card mb-10 p-6">
        <span className="tag mb-3 inline-block">Book (Editor)</span>
        <p className="prose-body text-sm">{book.citation}</p>
        {book.link && (
          <a href={book.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-strong">
            View book &rarr;
          </a>
        )}
      </div>

      <h3 className="mb-4 text-lg font-semibold text-foreground">Selected Journal &amp; Conference Publications</h3>
      <ol className="space-y-3">
        {publications.map((pub, i) => (
          <li key={i} className="card p-5">
            <div className="flex items-start gap-3">
              <span className="tag shrink-0">{pub.type}</span>
              <p className="prose-body text-sm">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {pub.citation}
                  </a>
                ) : (
                  pub.citation
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
