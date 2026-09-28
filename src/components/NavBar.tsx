"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience/", label: "Experience" },
  { href: "/projects/", label: "Projects" },
  { href: "/publications/", label: "Publications" },
  { href: "/contact/", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-on-navy-border bg-navy/95 backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-on-navy">
          Emmanuel Oyekanlu
          <span className="ml-2 hidden text-xs font-normal text-on-navy-muted sm:inline">Ph.D.</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-on-navy-muted transition-colors hover:text-on-navy-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/manuelbomi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-on-navy-border px-4 py-1.5 text-sm text-on-navy transition-colors hover:border-on-navy-accent hover:text-on-navy-accent md:inline-block"
        >
          GitHub
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-on-navy-border text-on-navy md:hidden"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-on-navy" />
            <span className="block h-0.5 w-5 bg-on-navy" />
            <span className="block h-0.5 w-5 bg-on-navy" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-on-navy-border bg-navy md:hidden">
          <ul className="section-container flex flex-col gap-1 py-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-on-navy-muted hover:bg-white/5 hover:text-on-navy-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/manuelbomi"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-2 py-2 text-on-navy-muted hover:bg-white/5 hover:text-on-navy-accent"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
