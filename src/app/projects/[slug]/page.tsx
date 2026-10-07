import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import VideoEmbed from "@/components/VideoEmbed";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: truncate(project.description, 155),
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      title: project.title,
      description: truncate(project.description, 155),
      images: [{ url: "/images/og-card.png", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: truncate(project.description, 155),
      images: ["/images/og-card.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    codeRepository: `https://github.com/manuelbomi/${project.repo}`,
    programmingLanguage: project.tags,
    author: {
      "@type": "Person",
      name: "Emmanuel Oyekanlu",
    },
  };

  return (
    <div className="section-container py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/projects/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
      >
        &larr; Back to all projects
      </Link>

      <span className="tag mb-3 inline-block">{project.category}</span>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="prose-body mt-4 max-w-3xl text-base leading-relaxed">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`https://github.com/manuelbomi/${project.repo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
      >
        View source on GitHub
        <span aria-hidden>&rarr;</span>
      </a>

      {project.videos && project.videos.length > 0 && (
        <div className="mt-10 grid max-w-2xl gap-4">
          {project.videos.map((video) => (
            <VideoEmbed key={video.driveId} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
