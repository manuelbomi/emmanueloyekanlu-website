import type { Project } from "@/data/projects";
import VideoEmbed from "./VideoEmbed";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex h-full flex-col p-6 transition-colors hover:border-accent">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="tag">{project.category}</span>
        {project.videos && project.videos.length > 0 && (
          <span className="text-[11px] font-medium text-accent">Demo video</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="prose-body mt-2 flex-1 text-sm">{project.description}</p>

      {project.videos && project.videos.length > 0 && (
        <div className="mt-4 grid gap-3">
          {project.videos.map((video) => (
            <VideoEmbed key={video.driveId} video={video} />
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
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
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-strong"
      >
        View on GitHub
        <span aria-hidden>&rarr;</span>
      </a>
    </article>
  );
}
