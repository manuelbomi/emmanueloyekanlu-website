import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="section-container flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Google Scholar
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
