import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative mt-4 border-t border-white/30 px-6 py-12 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs text-white dark:bg-white dark:text-ink">
            {profile.initials}
          </span>
          Prathap Reddy Mora
        </a>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-sky-600">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="glass grid h-10 w-10 place-items-center rounded-full">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-10 w-10 place-items-center rounded-full">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass grid h-10 w-10 place-items-center rounded-full">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#hero" aria-label="Back to top" className="glass grid h-10 w-10 place-items-center rounded-full">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-slate-500">
        Designed & developed by {profile.name} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
