import type { Video } from "@/data/projects";

export default function VideoEmbed({ video }: { video: Video }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="aspect-video w-full bg-black">
        <iframe
          src={`https://drive.google.com/file/d/${video.driveId}/preview`}
          title={video.title}
          allow="autoplay"
          className="h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="bg-surface-muted px-3 py-2">
        <p className="text-xs font-medium text-foreground">{video.title}</p>
        {video.note && <p className="mt-0.5 text-[11px] text-muted">{video.note}</p>}
      </div>
    </div>
  );
}
